CREATE TYPE public.app_role AS ENUM ('editor');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE POLICY "Editors can view editor roles"
ON public.user_roles FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'editor'));

CREATE TABLE public.page_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  draft_content jsonb NOT NULL DEFAULT '{}'::jsonb,
  published_content jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.page_documents TO authenticated;
GRANT ALL ON public.page_documents TO service_role;
ALTER TABLE public.page_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Editors can read page documents"
ON public.page_documents FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'editor'));
CREATE POLICY "Editors can create page documents"
ON public.page_documents FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'editor') AND updated_by = auth.uid());
CREATE POLICY "Editors can update page documents"
ON public.page_documents FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'editor'))
WITH CHECK (public.has_role(auth.uid(), 'editor') AND updated_by = auth.uid());
CREATE POLICY "Editors can delete page documents"
ON public.page_documents FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'editor'));

CREATE OR REPLACE FUNCTION public.claim_first_editor()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Authentication required';
  END IF;
  PERFORM pg_advisory_xact_lock(827364);
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'editor') THEN
    RETURN public.has_role(auth.uid(), 'editor');
  END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (auth.uid(), 'editor');
  RETURN true;
END;
$$;
GRANT EXECUTE ON FUNCTION public.claim_first_editor() TO authenticated;

CREATE OR REPLACE FUNCTION public.get_published_page(_slug text)
RETURNS jsonb
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT published_content FROM public.page_documents WHERE slug = _slug
$$;
GRANT EXECUTE ON FUNCTION public.get_published_page(text) TO anon, authenticated;

CREATE OR REPLACE FUNCTION public.publish_page(_slug text)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE result jsonb;
BEGIN
  IF NOT public.has_role(auth.uid(), 'editor') THEN
    RAISE EXCEPTION 'Editor access required';
  END IF;
  UPDATE public.page_documents
  SET published_content = draft_content, updated_at = now(), updated_by = auth.uid()
  WHERE slug = _slug
  RETURNING published_content INTO result;
  RETURN result;
END;
$$;
GRANT EXECUTE ON FUNCTION public.publish_page(text) TO authenticated;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
CREATE TRIGGER set_page_documents_updated_at
BEFORE UPDATE ON public.page_documents
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();