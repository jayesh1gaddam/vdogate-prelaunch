# Deploy to Vercel - Complete Guide

Once your code is on GitHub, follow these steps to deploy to production:

## Step 1: Go to Vercel

1. Visit: https://vercel.com
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended for easy integration)

## Step 2: Import Your Project

1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find **"VDOgate/vdogate-prelaunch-_landing"**
4. Click **"Import"**

## Step 3: Configure Project Settings

Vercel will automatically detect it's a Next.js project. You'll see:

- **Framework Preset**: Next.js ✓
- **Build Command**: `npm run build` ✓
- **Output Directory**: `.next` ✓
- **Install Command**: `npm install` ✓

Don't change these - they're perfect as-is!

## Step 4: Add Environment Variables

**CRITICAL STEP** - Your form won't work without these!

Click **"Environment Variables"** and add both of these:

### Variable 1: Supabase URL
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://zxaicfevdqvupianqcxs.supabase.co`
- **Environments**: Check all boxes (Production, Preview, Development)

### Variable 2: Supabase Anon Key
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YWljZmV2ZHF2dXBpYW5xY3hzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDYwMjIsImV4cCI6MjA3NzMyMjAyMn0.I8qveWdBKckyUrScL6ZxuKeK5Stpr8bHjHZmY_qI5jA`
- **Environments**: Check all boxes (Production, Preview, Development)

## Step 5: Deploy!

1. Click **"Deploy"**
2. Vercel will:
   - Install dependencies (~30 seconds)
   - Build your project (~1 minute)
   - Deploy to production (~30 seconds)
3. Total time: ~2 minutes

## Step 6: Get Your Live URL

Once deployment completes:
- You'll see: **"Congratulations! Your project is live!"**
- Your URL will be something like: `https://vdogate-prelaunch-landing.vercel.app`
- Click the URL to visit your live site!

## Step 7: Test the Production Site

1. Visit your Vercel URL
2. Scroll to the **"Founding Creator"** section
3. Fill out and submit the form with test data
4. Verify the submission:
   - Go to: https://supabase.com/dashboard/project/zxaicfevdqvupianqcxs
   - Click **Table Editor** → **founding_creators**
   - You should see your test submission!

## Bonus: Set Up Auto-Deployments

Vercel automatically connected to your GitHub repo. Now:
- Every push to `main` branch = automatic production deployment
- Every pull request = automatic preview deployment
- No manual deployments needed ever again!

## Bonus: Add a Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `prelaunch.vdogate.com`)
4. Follow the DNS configuration instructions
5. Done! Your site is on your custom domain

## Troubleshooting

### Form submissions not working?
- ✅ Check environment variables are set correctly in Vercel
- ✅ Make sure both variables start with `NEXT_PUBLIC_`
- ✅ Verify Supabase database schema is deployed
- ✅ Check browser console for errors

### Build failing?
- ✅ Check the build logs in Vercel dashboard
- ✅ Ensure all dependencies are in `package.json`
- ✅ Verify the code works locally first

### Getting 404 errors?
- ✅ Wait a few minutes for DNS propagation
- ✅ Try clearing browser cache
- ✅ Check the Vercel deployment logs

## What Happens Next?

After deployment:
- Your site is live 24/7 on Vercel's global CDN
- Form submissions are saved to Supabase automatically
- You can view submissions anytime in Supabase dashboard
- Any changes you push to GitHub auto-deploy to production
- SSL certificate is automatically configured (HTTPS)
- Site loads fast worldwide (edge network)

---

## 🎉 You're Done!

Your VDOgate pre-launch website is now:
- ✅ Live on the internet
- ✅ Connected to Supabase database
- ✅ Accepting founding creator applications
- ✅ Production-ready and scalable

**Your live site**: Check your Vercel dashboard for the URL!

Need help? All your configuration is saved and can be modified anytime in the Vercel dashboard.
