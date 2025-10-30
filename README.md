# VDOgate Pre-Launch Landing Page

A world-class pre-launch website for VDOgate - India's premium video-first creator platform.

## 🚀 Features

- **Hero Section** - Animated 3D portal with trust indicators and dual CTAs
- **Problem-Solution** - Clear value proposition with visual cards
- **How It Works** - Interactive 3-step timeline with gradient connections
- **Platform Features** - 6-card grid showcasing key capabilities
- **Who It's For** - Split view for creators and learners
- **Competitive Advantage** - Comparison table with founding creator benefits
- **Trust & Credibility** - IIT Bombay incubation, tech stack, testimonials
- **Founding Creator Program** - Full application form with validation
- **FAQ Section** - Accordion with smooth animations
- **Final CTA** - Dual conversion paths for creators and users
- **Footer** - Complete navigation and social links

## 🎨 Design System

### Brand Colors
- **Portal Gradient**: #463DC7 → #6B63CF → #9088D9
- **VDO Orange**: #FF6B2C
- **Gate Blue**: #1E40AF
- **Neutrals**: Full grayscale palette

### Typography
- **Font**: Helvetica Neue
- **Sizes**: Display (56px-72px), Headlines (24px-48px), Body (14px-18px)

### Animations
- Framer Motion for smooth scroll animations
- Hover effects and micro-interactions
- 3D portal rotation effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand config
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npx next dev

# Build for production
npx next build

# Start production server
npx next start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables (if any)
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 📝 Environment Setup

No environment variables required for the landing page. Form submissions are currently client-side only (console logged).

### To Add Backend Integration:
1. Set up Supabase or your preferred backend
2. Add form submission endpoint
3. Update `components/FoundingCreator.tsx` onSubmit function

## 🎯 Key Sections

### 1. Hero Section
- Full viewport height
- Animated portal visualization
- Primary CTA: "Join as Founding Creator"
- Secondary CTA: "See How It Works"

### 2. Founding Creator Form
- Name, Email, Phone, Category, City
- Portfolio link (optional)
- "Why join" textarea
- Zod validation
- Success state handling

### 3. Mobile Responsive
- Fully responsive across all devices
- Mobile-first approach
- Touch-friendly interactions

## 🔧 Customization

### Update Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  portal: { start: '#YOUR_COLOR', ... },
  vdo: { orange: '#YOUR_COLOR', ... },
  // ...
}
```

### Update Content
All content is in component files under `/components`:
- Hero.tsx
- ProblemSolution.tsx
- HowItWorks.tsx
- Features.tsx
- etc.

### Add Form Backend
Update `components/FoundingCreator.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  // Your API call here
  await fetch('/api/applications', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
```

## 📊 Performance

- **Target Load Time**: <2.5s
- **Lighthouse Score**: 90+
- **Mobile Optimized**: Yes
- **SEO Optimized**: Yes

## 🎨 Assets Needed

Before going live, add these assets:
- [ ] VDOgate logo (SVG or PNG)
- [ ] Creator profile images (8-10 diverse creators)
- [ ] Platform screenshots (with blur for unreleased features)
- [ ] Founder headshot
- [ ] IIT Bombay SINE logo
- [ ] Hero video montage (optional, 10 seconds)

## 🔐 SEO Setup

Meta tags are configured in `app/layout.tsx`:
- Title: VDOgate - Transform Your Skills Into A Thriving Business
- Description: India's premium video-first platform
- Open Graph tags for social sharing
- Twitter Card support

## 📧 Contact Integration

Update email addresses:
- Footer contact: hello@vdogate.com
- Form submissions destination
- Waitlist functionality

## 🚀 Launch Checklist

- [ ] Add real logo files
- [ ] Update social media links in Footer
- [ ] Configure form submission backend
- [ ] Add Google Analytics / tracking
- [ ] Test on all major browsers
- [ ] Mobile device testing
- [ ] Configure domain (vdogate.com)
- [ ] Set up SSL certificate (automatic on Vercel)
- [ ] Add favicon and app icons
- [ ] Create Terms of Service page
- [ ] Create Privacy Policy page

## 📱 Browser Support

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

## 🎯 Conversion Optimization

### CTAs Placement:
1. Hero section (above fold)
2. After How It Works
3. After Features
4. After Competitive Advantage
5. Founding Creator section
6. Final CTA section

### A/B Testing Ready:
- Headline variations
- CTA button copy
- Form field variations
- Trust badge placement

## 📄 License

Copyright © 2025 VDOgate by Sitio Labs Pvt. Ltd. All rights reserved.

---

**Built by**: Mati Studios
**Incubated by**: SINE IIT Bombay
**Contact**: hello@vdogate.com
