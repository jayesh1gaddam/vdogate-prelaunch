import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface FoundingCreator {
  id?: string
  full_name: string
  email: string
  phone: string
  location: string
  profession: string
  instagram_handle?: string
  youtube_channel?: string
  portfolio_url?: string
  why_vdogate: string
  current_challenges: string
  monthly_income_goal: string
  agreed_to_terms: boolean
  created_at?: string
  updated_at?: string
}
