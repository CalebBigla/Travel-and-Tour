# Travel & Tour Agency Template — Deployment Guide

This is a fully generic, production-ready template for any Travel & Tour agency. All company-specific values are centralized in `src/lib/config.ts` using `{{PLACEHOLDER}}` format.

---

## Quick Start

1. **Clone or download this repository**
2. **Replace all placeholders in `src/lib/config.ts`** with your actual company information
3. **Replace placeholder images** in `src/assets/` with your own branded images
4. **Update team profiles** in `src/routes/about.tsx` (names, roles, photos)
5. **Review and customize content** in all route files as needed
6. **Test locally**: `npm install` → `npm run dev`
7. **Deploy** to your hosting platform

---

## Step 1: Configure Company Information

Open `src/lib/config.ts` and replace **ALL** `{{PLACEHOLDER}}` values:

```typescript
export const siteConfig = {
  // Company Information
  companyName: "Your Travel Agency Name", // e.g., "Safari Travel & Tours"
  registrationNumber: "RC XXXXXXX", // Your business registration number
  
  // Contact Information
  officeAddress: {
    street: "Your Street Address", // e.g., "123 Main Street, Suite 4"
    locality: "Your City", // e.g., "Lagos"
    region: "Your State/Region", // e.g., "Lagos State"
    country: "Nigeria", // Or your country
  },
  
  phones: [
    "080XXXXXXXX", // Primary phone
    "070XXXXXXXX", // Secondary phone
    "090XXXXXXXX", // Tertiary phone (optional)
  ],
  
  email: "info@youragency.com", // Your company email
  
  whatsappNumber: "234XXXXXXXXXX", // Country code + number (no spaces, no +)
  
  // SEO & Marketing
  cityRegion: "Your City, State", // e.g., "Lagos, Nigeria" - used in page titles
  
  // Business Hours
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  
  // Social Media (leave empty string "" if not applicable)
  social: {
    facebook: "https://facebook.com/youragency",
    twitter: "https://twitter.com/youragency",
    instagram: "https://instagram.com/youragency",
    linkedin: "https://linkedin.com/company/youragency",
  },
  
  // Google Maps
  mapQuery: "Your+Office+Address+City+State", // URL-encoded for Google Maps embed
};
```

---

## Step 2: Replace Images

All images are stored in `src/assets/`. Replace these placeholder images with your own:

### Required Images:
- **Logo mark** (`logo-mark.png`) — Your agency logo/icon
- **Hero images** — Homepage hero, travel/tour division heroes
- **Service images** — Images for each service category
- **About page** — Company story/team photo
- **Gallery images** — Tour packages, destinations, happy travelers

### Image Guidelines:
- Use high-quality, optimized images (WebP or JPG)
- Recommended dimensions: 1200x800px for heroes, 600x400px for cards
- Keep file sizes under 300KB per image (use compression tools)
- Ensure all images have proper alt text in components

---

## Step 3: Update Team Profiles

Open `src/routes/about.tsx` and replace placeholder team data:

```typescript
const team = [
  { name: "Your Name", role: "Managing Director", initials: "YN" },
  { name: "Team Member", role: "Head, Travel Services", initials: "TM" },
  { name: "Team Member", role: "Head, Tour Services", initials: "TM" },
];
```

**Optional**: Add profile photos instead of initials by updating the component markup.

---

## Step 4: Customize Company Timeline

In `src/routes/about.tsx`, update the milestones array with your real company history:

```typescript
const milestones = [
  {
    year: "2020", // Real year
    title: "Company founded",
    description: "Your actual founding story here...",
  },
  {
    year: "2021",
    title: "First major milestone",
    description: "What happened in this year...",
  },
  // Add more milestones as needed
];
```

---

## Step 5: Review Content on All Pages

Even though the template is generic, you should review and customize content to match your agency's:

### Homepage (`src/routes/index.tsx`)
- Hero headline and subheadline
- Featured destinations
- Testimonials (replace with real client testimonials)
- Stats (update numbers to match your agency)

### About Page (`src/routes/about.tsx`)
- Company story section
- Core values (customize to your principles)
- Team profiles

### Travel Services (`src/routes/travel.tsx`)
- Service descriptions (already generic, but review for tone)

### Tour Services (`src/routes/tours.tsx`)
- Tour packages and examples
- Gallery images

### Contact Page (`src/routes/contact.tsx`)
- Already uses template variables, but review form fields

### Legal Pages
- `src/routes/privacy.tsx` — **Critical**: Review with legal adviser before launch
- `src/routes/terms.tsx` — **Critical**: Review with legal adviser before launch

---

## Step 6: Customize Services (Optional)

If you want to add/remove/modify services:

### Travel Services
Edit `src/lib/site.ts` → `travelServices` array

### Tour Services
Edit `src/lib/site.ts` → `tourServices` array

Example:
```typescript
export const travelServices = [
  {
    slug: "new-service", // URL-friendly slug
    title: "New Service Name",
    summary: "One-line summary",
    detail: "Longer description of what this service includes",
  },
  // ... existing services
];
```

Then update the corresponding page (`src/routes/travel.tsx` or `src/routes/tours.tsx`) to display the new service.

---

## Step 7: Update Branding Colors (Optional)

If you want to change the navy/gold color scheme:

1. Open `src/styles.css`
2. Find the `:root` section
3. Update these CSS custom properties:
   - `--primary` (navy) → Your primary brand color
   - `--accent` (gold/orange) → Your accent color
   - `--primary-foreground` → Text color on primary background

**Tip**: Use [oklch color picker](https://oklch.com/) to generate oklch values.

---

## Step 8: Local Testing

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:8080/ and test:
- ✅ All pages load correctly
- ✅ Contact forms open WhatsApp with correct number
- ✅ Phone/email links work
- ✅ Google Maps shows correct location
- ✅ Images load properly
- ✅ No hardcoded placeholder text visible

---

## Step 9: SEO & Analytics Setup

### Update SEO Metadata
All pages already use template variables in their meta tags, but verify:
- Page titles include your company name
- Descriptions are accurate
- Open Graph images are set (add `og:image` tags if needed)

### Add Analytics (Optional)
The template doesn't include analytics by default. To add Google Analytics or Plausible:

1. Get your tracking ID
2. Add the script tag to `src/routes/__root.tsx` in the `head()` function
3. Or use a React analytics library

---

## Step 10: Deploy

### Recommended Hosting Platforms:
- **Vercel** (easiest) — [vercel.com](https://vercel.com)
- **Netlify** — [netlify.com](https://netlify.com)
- **Cloudflare Pages** — [pages.cloudflare.com](https://pages.cloudflare.com)

### Build Command:
```bash
npm run build
```

### Deploy Output:
The built site will be in `.output/public/` directory.

---

## Final Checklist Before Launch

- [ ] All `{{PLACEHOLDER}}` values replaced in `src/lib/config.ts`
- [ ] Company logo and images updated
- [ ] Team profiles updated with real names and roles
- [ ] Company timeline reflects actual milestones
- [ ] Privacy Policy and Terms reviewed by legal adviser
- [ ] Contact forms tested (WhatsApp links work correctly)
- [ ] Phone numbers, email, and address verified
- [ ] Google Maps location is correct
- [ ] All pages load without errors
- [ ] Site tested on mobile devices
- [ ] Domain name configured and DNS propagated
- [ ] SSL certificate active (HTTPS)
- [ ] Analytics tracking added (if desired)
- [ ] Favicon updated (`public/favicon.png`)
- [ ] Social media links verified (or removed if not applicable)

---

## Customization Notes

### Why This Template Structure?
- **Centralized config** (`src/lib/config.ts`) makes it easy to deploy for multiple clients
- **Template variables** ensure no hardcoded company-specific values
- **Generic content** can be used as-is or easily customized
- **Modern UI** with navy/gold color scheme (easily changeable)
- **WhatsApp-first forms** (no backend needed)
- **SEO-ready** with proper meta tags and structured data

### What's Included?
- ✅ Homepage with hero, features, testimonials, stats
- ✅ About page with company story, timeline, team, values
- ✅ Travel Services page (visa, flights, hotels, consultancy)
- ✅ Tour Services page (packages, group tours, custom itineraries)
- ✅ Contact page with form, map, business hours
- ✅ Quote request page
- ✅ Privacy Policy and Terms of Service (placeholder)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessibility compliant (semantic HTML, ARIA labels)
- ✅ WhatsApp integration (no backend needed)
- ✅ Google Maps embed
- ✅ Structured data (LocalBusiness schema)

---

## Support & Customization

For advanced customization (custom features, backend integration, payment processing), consult with a web developer familiar with:
- **TanStack Router** (routing framework)
- **React** (UI framework)
- **Tailwind CSS** (styling)
- **TypeScript** (type safety)

---

## License

This template is free to use for any Travel & Tour agency. No attribution required.

---

**Questions?** Check `REBUILD-PROGRESS.md` for the full development history and technical details.
