-- Create the urls table for storing shortened URLs
CREATE TABLE IF NOT EXISTS public.urls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  original_url TEXT NOT NULL,
  slug VARCHAR(6) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  click_count INTEGER DEFAULT 0
);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_urls_slug ON public.urls(slug);

-- Create index for created_at for analytics
CREATE INDEX IF NOT EXISTS idx_urls_created_at ON public.urls(created_at);
