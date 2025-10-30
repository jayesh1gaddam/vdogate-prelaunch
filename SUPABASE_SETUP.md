# VDOgate Supabase Integration Setup Guide

This guide will help you set up Supabase for the VDOgate pre-launch website and make the founding creator form fully functional for production.

## Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works perfectly)
- Basic knowledge of environment variables

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/log in
2. Click "New Project"
3. Fill in the details:
   - **Name**: VDOgate Pre-launch
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to India (e.g., Singapore or Mumbai if available)
4. Click "Create new project" and wait for it to initialize (~2 minutes)

## Step 2: Set Up the Database Schema

1. In your Supabase project dashboard, go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy the entire contents of `supabase/schema.sql` from this project
4. Paste it into the SQL editor
5. Click "Run" (or press Cmd/Ctrl + Enter)
6. You should see "Success. No rows returned" - this means your database is set up!

## Step 3: Get Your Supabase Credentials

1. In your Supabase project, go to **Settings** → **API** (left sidebar)
2. You'll see two important values:
   - **Project URL**: Something like `https://xxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`
3. Copy these values - you'll need them next

## Step 4: Configure Environment Variables

1. In your project root, create a file called `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. Replace `your_project_url_here` with your Project URL
4. Replace `your_anon_key_here` with your anon public key

## Step 5: Test the Integration Locally

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. Navigate to the "Founding Creator" section
4. Fill out and submit the form
5. Check your Supabase dashboard:
   - Go to **Table Editor** → **founding_creators**
   - You should see your test submission!

## Step 6: Verify Database Setup

Check that your database is properly configured:

### Check Tables
- Go to **Table Editor** in Supabase
- You should see: `founding_creators` table

### Check Policies (Security)
- Go to **Authentication** → **Policies**
- You should see:
  - ✅ Allow anonymous inserts (for form submissions)
  - ✅ Allow authenticated reads (for admin access)

### Check the Data Structure
Your `founding_creators` table should have these columns:
- `id` (uuid, primary key)
- `full_name` (text)
- `email` (text, unique)
- `phone` (text)
- `location` (text)
- `profession` (text)
- `instagram_handle` (text, nullable)
- `youtube_channel` (text, nullable)
- `portfolio_url` (text, nullable)
- `why_vdogate` (text)
- `current_challenges` (text)
- `monthly_income_goal` (text)
- `agreed_to_terms` (boolean)
- `created_at` (timestamp)
- `updated_at` (timestamp)

## Step 7: Deploy to Production

### Option A: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Add environment variables:
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_SUPABASE_URL` with your URL
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` with your key
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option B: Other Platforms

Make sure to set the same environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Viewing Submissions (Admin Access)

### Method 1: Supabase Dashboard
1. Go to your Supabase project
2. Click **Table Editor** → **founding_creators**
3. View all submissions with full details
4. Export as CSV if needed

### Method 2: API Endpoint
You can also access submissions programmatically:
```bash
curl http://localhost:3000/api/founding-creator
```

This returns JSON data with all founding creator applications.

## Database Statistics

The schema includes a `founding_creators_stats` view that shows:
- Total creators registered
- Unique professions
- Unique locations
- Daily signups

To query it:
```sql
SELECT * FROM founding_creators_stats;
```

## Troubleshooting

### "Missing Supabase environment variables" Error
- ✅ Check that `.env.local` exists in your project root
- ✅ Check that variables start with `NEXT_PUBLIC_`
- ✅ Restart your dev server after adding environment variables

### Form Submission Fails
- ✅ Check browser console for error messages
- ✅ Verify your Supabase credentials are correct
- ✅ Check that RLS policies are enabled
- ✅ Ensure the database schema was run successfully

### "Email already registered" Error
- This is expected behavior - the form prevents duplicate emails
- Check the Supabase table to see if the email exists
- Use a different email for testing

### Database Connection Issues
- ✅ Check that your Supabase project is not paused (free tier pauses after 7 days of inactivity)
- ✅ Verify the Project URL is correct (no trailing slash)
- ✅ Check that the anon key is the "anon public" key, not the service role key

## Security Notes

✅ **Row Level Security (RLS)** is enabled
✅ Anonymous users can only INSERT (submit forms)
✅ Only authenticated users can read data
✅ Email validation prevents duplicates
✅ Phone validation ensures valid Indian mobile numbers
✅ All data is encrypted at rest in Supabase

## Production Checklist

Before going live, ensure:

- [ ] Environment variables are set in your hosting platform
- [ ] `.env.local` is in `.gitignore` (already done)
- [ ] Database schema is deployed to Supabase
- [ ] RLS policies are enabled
- [ ] Test form submission works on production URL
- [ ] Verify email uniqueness constraint works
- [ ] Check that data appears in Supabase dashboard
- [ ] Set up email notifications (optional, see below)

## Optional: Email Notifications

To receive email notifications when someone submits the form:

1. Go to **Database** → **Webhooks** in Supabase
2. Create a new webhook for the `founding_creators` table
3. Set up a service like Zapier or n8n to send emails
4. Or use Supabase Edge Functions to trigger emails

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check Supabase logs: **Logs** → **Database**
3. Review the API route: `app/api/founding-creator/route.ts`
4. Check the form component: `components/FoundingCreator.tsx`

## Database Backup

Supabase automatically backs up your database daily. To manually export:
1. Go to **Database** → **Backups**
2. Click "Export" to download your data

---

**🎉 That's it! Your VDOgate founding creator form is now production-ready and connected to Supabase!**

For any questions or issues, refer to the [Supabase Documentation](https://supabase.com/docs).
