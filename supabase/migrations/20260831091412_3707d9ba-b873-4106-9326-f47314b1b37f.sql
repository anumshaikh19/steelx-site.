CREATE SCHEMA IF NOT EXISTS private;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
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
REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "Editors can view editor roles" ON public.user_roles;
CREATE POLICY "Editors can view editor roles"
ON public.user_roles FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'editor'));

DROP POLICY IF EXISTS "Editors can read page documents" ON public.page_documents;
DROP POLICY IF EXISTS "Editors can create page documents" ON public.page_documents;
DROP POLICY IF EXISTS "Editors can update page documents" ON public.page_documents;
DROP POLICY IF EXISTS "Editors can delete page documents" ON public.page_documents;
CREATE POLICY "Editors can read page documents"
ON public.page_documents FOR SELECT TO authenticated
USING (private.has_role(auth.uid(), 'editor'));
CREATE POLICY "Editors can create page documents"
ON public.page_documents FOR INSERT TO authenticated
WITH CHECK (private.has_role(auth.uid(), 'editor') AND updated_by = auth.uid());
CREATE POLICY "Editors can update page documents"
ON public.page_documents FOR UPDATE TO authenticated
USING (private.has_role(auth.uid(), 'editor'))
WITH CHECK (private.has_role(auth.uid(), 'editor') AND updated_by = auth.uid());
CREATE POLICY "Editors can delete page documents"
ON public.page_documents FOR DELETE TO authenticated
USING (private.has_role(auth.uid(), 'editor'));

CREATE TABLE public.published_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  published_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.published_pages TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.published_pages TO authenticated;
GRANT ALL ON public.published_pages TO service_role;
ALTER TABLE public.published_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read published pages"
ON public.published_pages FOR SELECT TO anon, authenticated
USING (true);
CREATE POLICY "Editors can create published pages"
ON public.published_pages FOR INSERT TO authenticated
WITH CHECK (private.has_role(auth.uid(), 'editor'));
CREATE POLICY "Editors can update published pages"
ON public.published_pages FOR UPDATE TO authenticated
USING (private.has_role(auth.uid(), 'editor'))
WITH CHECK (private.has_role(auth.uid(), 'editor'));
CREATE POLICY "Editors can delete published pages"
ON public.published_pages FOR DELETE TO authenticated
USING (private.has_role(auth.uid(), 'editor'));

DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);
DROP FUNCTION IF EXISTS public.claim_first_editor();
DROP FUNCTION IF EXISTS public.get_published_page(text);
DROP FUNCTION IF EXISTS public.publish_page(text);