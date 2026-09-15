create extension if not exists pgcrypto;

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  logo_url text,
  brand_color text default '#c9a96e',
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  role text not null default 'Requester' check (role in ('Super Admin','Organization Admin','Executive','Project Manager','Team Lead','Employee','Requester','Approver','External Client')),
  organization_id uuid references public.organizations(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null, description text, status text not null default 'Planning', health text not null default 'On Track', priority text not null default 'Normal',
  owner_id uuid references public.profiles(id) on delete set null, start_date date, due_date date, budget numeric(14,2), tags text[] default '{}',
  created_by uuid references public.profiles(id) on delete set null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  project_id uuid references public.projects(id) on delete cascade, title text not null, description text, status text not null default 'Not Started', priority text not null default 'Normal',
  assignee_id uuid references public.profiles(id) on delete set null, due_date date, estimated_hours numeric(8,2) default 0, actual_hours numeric(8,2) default 0,
  created_by uuid references public.profiles(id) on delete set null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  ticket_number bigint generated always as identity unique, title text not null, description text, category text default 'General', priority text not null default 'Normal', status text not null default 'New',
  requester_id uuid references public.profiles(id) on delete set null, assignee_id uuid references public.profiles(id) on delete set null, team text, due_date timestamptz,
  sla_level text default 'Standard', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.requests (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  title text not null, description text, category text not null default 'General', priority text not null default 'Normal', status text not null default 'Submitted',
  requester_id uuid references public.profiles(id) on delete set null, owner_id uuid references public.profiles(id) on delete set null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table if not exists public.approvals (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  entity_type text not null, entity_id uuid not null, title text not null, status text not null default 'Pending', requested_by uuid references public.profiles(id) on delete set null,
  approver_id uuid references public.profiles(id) on delete set null, comments text, due_at timestamptz, decided_at timestamptz, created_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade,
  entity_type text not null, entity_id uuid not null, author_id uuid references public.profiles(id) on delete set null, body text not null, created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(), organization_id uuid references public.organizations(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade, type text not null, title text not null, body text, read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(), organization_id uuid references public.organizations(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete set null, action text not null, entity_type text, entity_id uuid, old_value jsonb, new_value jsonb, result text default 'success',
  created_at timestamptz not null default now()
);

create index if not exists projects_org_idx on public.projects(organization_id);
create index if not exists tasks_org_idx on public.tasks(organization_id);
create index if not exists tasks_project_idx on public.tasks(project_id);
create index if not exists tickets_org_idx on public.tickets(organization_id);
create index if not exists requests_org_idx on public.requests(organization_id);
create index if not exists approvals_org_idx on public.approvals(organization_id);
create index if not exists comments_entity_idx on public.comments(entity_type, entity_id);
create index if not exists notifications_user_idx on public.notifications(user_id, read_at);
create index if not exists audit_org_idx on public.audit_logs(organization_id, created_at desc);

create schema if not exists private;
create or replace function private.current_org_id() returns uuid language sql stable security definer set search_path = public as $$
  select organization_id from public.profiles where id = auth.uid();
$$;
create or replace function private.is_org_admin() returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role in ('Super Admin','Organization Admin'));
$$;
revoke all on function private.current_org_id() from public;
revoke all on function private.is_org_admin() from public;
grant execute on function private.current_org_id() to authenticated;
grant execute on function private.is_org_admin() to authenticated;

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles(id, full_name) values (new.id, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1))) on conflict (id) do nothing;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

alter table public.organizations enable row level security;
alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.tasks enable row level security;
alter table public.tickets enable row level security;
alter table public.requests enable row level security;
alter table public.approvals enable row level security;
alter table public.comments enable row level security;
alter table public.notifications enable row level security;
alter table public.audit_logs enable row level security;

drop policy if exists profile_self_select on public.profiles;
create policy profile_self_select on public.profiles for select to authenticated using (id = auth.uid() or organization_id = private.current_org_id());
drop policy if exists profile_self_update on public.profiles;
create policy profile_self_update on public.profiles for update to authenticated using (id = auth.uid() or private.is_org_admin()) with check (id = auth.uid() or private.is_org_admin());

drop policy if exists org_member_select on public.organizations;
create policy org_member_select on public.organizations for select to authenticated using (id = private.current_org_id() or created_by = auth.uid());
drop policy if exists org_create on public.organizations;
create policy org_create on public.organizations for insert to authenticated with check (created_by = auth.uid());
drop policy if exists org_admin_update on public.organizations;
create policy org_admin_update on public.organizations for update to authenticated using (id = private.current_org_id() and private.is_org_admin()) with check (id = private.current_org_id() and private.is_org_admin());

-- Generic organization-scoped CRUD policies.
do $$ declare t text; begin foreach t in array array['projects','tasks','tickets','requests','approvals','comments','notifications','audit_logs'] loop
  execute format('drop policy if exists org_select on public.%I', t);
  execute format('create policy org_select on public.%I for select to authenticated using (organization_id = private.current_org_id())', t);
  execute format('drop policy if exists org_insert on public.%I', t);
  execute format('create policy org_insert on public.%I for insert to authenticated with check (organization_id = private.current_org_id())', t);
  execute format('drop policy if exists org_update on public.%I', t);
  execute format('create policy org_update on public.%I for update to authenticated using (organization_id = private.current_org_id()) with check (organization_id = private.current_org_id())', t);
  execute format('drop policy if exists org_delete on public.%I', t);
  execute format('create policy org_delete on public.%I for delete to authenticated using (organization_id = private.current_org_id() and private.is_org_admin())', t);
end loop; end $$;

create or replace function public.set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;
do $$ declare t text; begin foreach t in array array['organizations','profiles','projects','tasks','tickets','requests'] loop execute format('drop trigger if exists set_updated_at on public.%I',t); execute format('create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at()',t); end loop; end $$;
