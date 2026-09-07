CREATE OR REPLACE FUNCTION private.no_editor_exists()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'editor')
$$;
REVOKE ALL ON FUNCTION private.no_editor_exists() FROM PUBLIC, anon, authenticated;

CREATE POLICY "First account can claim editor"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (user_id = auth.uid() AND role = 'editor' AND private.no_editor_exists());