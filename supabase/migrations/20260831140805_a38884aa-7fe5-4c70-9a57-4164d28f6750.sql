INSERT INTO public.user_roles (user_id, role)
SELECT id, 'editor'::app_role FROM auth.users WHERE email = 'savageprisum@gmail.com'
ON CONFLICT (user_id, role) DO NOTHING;