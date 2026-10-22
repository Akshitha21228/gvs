CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  organisation text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  product text,
  enquiry_type text NOT NULL,
  message text NOT NULL,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX enquiries_email_created_idx ON public.enquiries (email, created_at DESC);