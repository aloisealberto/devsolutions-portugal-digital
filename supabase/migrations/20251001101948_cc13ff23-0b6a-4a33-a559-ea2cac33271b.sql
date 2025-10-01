-- Create table for budget requests (orçamentos)
CREATE TABLE public.budget_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country_code TEXT NOT NULL DEFAULT '+351',
  company TEXT,
  service_type TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.budget_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert budget requests (public form)
CREATE POLICY "Anyone can submit budget requests"
ON public.budget_requests
FOR INSERT
WITH CHECK (true);

-- Create policy for admins to view all budget requests (for future admin panel)
CREATE POLICY "Admins can view all budget requests"
ON public.budget_requests
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_budget_requests_created_at ON public.budget_requests(created_at DESC);