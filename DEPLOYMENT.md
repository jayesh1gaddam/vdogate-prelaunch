# VDOgate Landing Page - Deployment Guide

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)

### Step-by-Step Deployment

#### 1. Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: VDOgate pre-launch landing page"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/vdogate-prelaunch.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npx next build`
   - **Output Directory**: .next
   - **Install Command**: `npm install`

5. Click "Deploy"
6. Wait 2-3 minutes for deployment

#### 3. Configure Custom Domain
1. Go to Project Settings → Domains
2. Add your domain: `vdogate.com`
3. Follow DNS configuration instructions:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (5-60 minutes)

#### 4. SSL Certificate
- Vercel automatically provisions SSL certificates
- HTTPS will be enabled within minutes

---

## ⚡ Alternative Deployment Options

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 3: Manual Server Deployment
```bash
# Build
npm run build

# Copy .next, public, package.json, next.config.js to server

# On server:
npm install --production
npm start

# Use PM2 for process management:
npm install -g pm2
pm2 start npm --name "vdogate" -- start
pm2 save
pm2 startup
```

---

## 🔧 Environment Configuration

### No Environment Variables Needed (Currently)
The landing page works without environment variables.

### Future: Add Backend Integration
Create `.env.local` for form submissions:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

---

## 📊 Post-Deployment Checklist

### Immediate Tasks
- [ ] Test all sections and animations
- [ ] Test form submission
- [ ] Verify mobile responsiveness
- [ ] Check loading speed (target <3s)
- [ ] Test all CTAs and scroll behaviors
- [ ] Verify social media meta tags (share on Twitter/LinkedIn)

### Analytics Setup
```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to app/layout.tsx:
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Check meta tags with https://metatags.io
- [ ] Test Open Graph tags
- [ ] Add Google Analytics (optional)

---

## 🎯 Domain Configuration

### DNS Settings for vdogate.com

**At your domain registrar (Namecheap, GoDaddy, etc.):**

#### For Vercel:
```
A Record
Host: @
Value: 76.76.19.19
TTL: 3600

CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Verify DNS:
```bash
dig vdogate.com
nslookup vdogate.com
```

---

## 🔒 Security Headers (Vercel)

Create `vercel.json` in root:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📈 Performance Optimization

### Image Optimization
- Add images to `/public/images/`
- Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/logo.png"
  width={200}
  height={50}
  alt="VDOgate Logo"
  priority
/>
```

### Font Optimization
Already configured in `tailwind.config.ts` with Helvetica Neue.

### Caching Strategy
Vercel automatically handles:
- Static assets: 1 year cache
- Dynamic pages: CDN cached
- Images: Optimized and cached

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npx next build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npx next dev -p 3001
```

### Deployment Failed on Vercel
1. Check build logs in Vercel dashboard
2. Ensure all dependencies in package.json
3. Verify Next.js version compatibility
4. Check for TypeScript errors

### Slow Loading
1. Check Lighthouse score
2. Optimize images (compress, WebP format)
3. Enable Next.js image optimization
4. Review bundle size with:
```bash
npm run build
# Check .next/analyze
```

---

## 📱 Mobile Testing

Test on actual devices:
- iPhone (Safari)
- Android (Chrome)
- Tablet (iPad)

Or use browser dev tools:
- Chrome DevTools (Ctrl+Shift+M)
- Responsive mode
- Network throttling (Fast 3G)

---

## 🎨 Content Updates

### Update Copy
Edit components directly:
- `/components/Hero.tsx` - Hero headlines
- `/components/FAQ.tsx` - FAQ content
- `/components/Footer.tsx` - Footer links

### Update Colors
Edit `/tailwind.config.ts`:
```typescript
colors: {
  portal: { start: '#NEW_COLOR' }
}
```

### Update Form Destination
Edit `/components/FoundingCreator.tsx`:
```typescript
const onSubmit = async (data) => {
  await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
```

---

## 📞 Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: hello@vdogate.com

---

## 🎉 Launch Day Checklist

**24 Hours Before:**
- [ ] Final content review
- [ ] Test form submissions
- [ ] Verify all links work
- [ ] Mobile testing complete
- [ ] Load time < 3 seconds
- [ ] Lighthouse score 90+

**Launch Day:**
- [ ] Deploy to production
- [ ] Verify custom domain works
- [ ] Test from different locations/devices
- [ ] Share on social media
- [ ] Monitor analytics
- [ ] Have monitoring in place

**Post-Launch:**
- [ ] Monitor error logs (Vercel dashboard)
- [ ] Track conversion rates
- [ ] Collect user feedback
- [ ] A/B test variations
- [ ] Optimize based on data

---

**Good luck with your launch! 🚀**
