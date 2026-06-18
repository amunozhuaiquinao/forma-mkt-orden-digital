CREATE TABLE public.contact_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT,
  telefono TEXT,
  rubro TEXT,
  presupuesto TEXT,
  mensaje TEXT NOT NULL,
  fuente TEXT DEFAULT 'web',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_leads TO service_role;

ALTER TABLE public.contact_leads ENABLE ROW LEVEL SECURITY;

-- No public access. Only service_role (server functions) can read/write.
CREATE POLICY "deny_all_public_select" ON public.contact_leads FOR SELECT USING (false);