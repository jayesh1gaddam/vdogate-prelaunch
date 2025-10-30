-- VDOgate Founding Creators Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Create founding_creators table
CREATE TABLE IF NOT EXISTS founding_creators (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  profession TEXT NOT NULL,
  instagram_handle TEXT,
  youtube_channel TEXT,
  portfolio_url TEXT,
  why_vdogate TEXT NOT NULL,
  current_challenges TEXT NOT NULL,
  monthly_income_goal TEXT NOT NULL,
  agreed_to_terms BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_founding_creators_email ON founding_creators(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_founding_creators_created_at ON founding_creators(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_founding_creators_updated_at
  BEFORE UPDATE ON founding_creators
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE founding_creators ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON founding_creators
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow authenticated reads (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON founding_creators
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Optional: Create a view for admin statistics
CREATE OR REPLACE VIEW founding_creators_stats AS
SELECT
  COUNT(*) as total_creators,
  COUNT(DISTINCT profession) as unique_professions,
  COUNT(DISTINCT location) as unique_locations,
  DATE(created_at) as signup_date,
  COUNT(*) as daily_signups
FROM founding_creators
GROUP BY DATE(created_at)
ORDER BY signup_date DESC;

-- Grant access to the view
GRANT SELECT ON founding_creators_stats TO authenticated;
