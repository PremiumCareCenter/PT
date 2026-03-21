# Premium Care PT Center — Phase 1 Rebuilt Website

## 🆕 What's New in This Build

### Bugs Fixed
- ✅ Duplicate `id="exercises-page"` removed — body is now `exercises-body`, section is `exercises-section`
- ✅ Hamburger menu now works on **both** pages (exercises.html was missing it)
- ✅ CSS nav conflict resolved — single `.site-header nav` definition
- ✅ Hero sections always visible (`opacity: 1`) — no invisible page if JS is slow
- ✅ Sunday "Closed" now styled in red with a badge, clearly distinct from open days
- ✅ Added `<meta name="theme-color">` for mobile browsers

### New Sections
- ✨ **Stats Bar** — animated counter (500+ patients, 2 therapists, 6 services, 5+ years)
- ✨ **Why Choose Us** — 4 value propositions with icons
- ✨ **Testimonials** — 4 cards (replace with real testimonials!)
- ✨ **Gallery** — 6-photo lightbox grid
- ✨ **Service Modals** — each service card opens a detailed modal
- ✨ **First Visit Accordion** — collapsible FAQ in location section
- ✨ **Floating WhatsApp Button** — pulsing, hides near contact section
- ✨ **Transparent Navbar** — solid white on scroll with blur backdrop

### Design Upgrades
- 🎨 New fonts: DM Serif Display (headings) + Plus Jakarta Sans (body)
- 🎨 Color palette: #013C6D navy + #E8A838 gold accent
- 🎨 Booking form now has service dropdown + time slot preference
- 🎨 Footer: 3-column layout with social icons
- 🎨 Open Graph tags for beautiful WhatsApp/Facebook link previews
- 🎨 JSON-LD schema for Google local search

## 📁 Files

| File | Purpose |
|---|---|
| `index.html` | Main homepage — complete rebuild |
| `exercises.html` | Exercise library — fixed + redesigned |
| `style.css` | Full design system |
| `script.js` | All JS: nav, counters, modals, lightbox, booking |
| `dictionary.js` | All bilingual text EN/AR |
| `privacy-policy.html` | Unchanged |
| `terms-of-service.html` | Unchanged |

## 🚀 Deploying to GitHub Pages

```bash
# Copy all files from this folder into your repository's /PT folder
# Then push to GitHub — site updates automatically
git add .
git commit -m "Phase 1 rebuild: premium design + all sections + bug fixes"
git push
```

## 📸 Photos to Replace

Replace these `src` values in `index.html` and `exercises.html` with real clinic photos:

| Placeholder | Replace with |
|---|---|
| `clinic_photo_1.jpg` | Dr. Abanoub's photo (team section) |
| `clinic_photo_2.jpeg` | Dr. Christen's photo (team section) |
| `gallery_1–6` images | Real clinic interior photos |

## 💬 Testimonials to Replace

In `dictionary.js`, find the `testimonial_1_text` through `testimonial_4_text` keys
and replace with real patient quotes before launching.

## ⬇️ Next Steps (Phase 2)

Create condition pages in `conditions/` folder:
- `lower-back-pain.html`
- `neck-pain.html`  
- `frozen-shoulder.html`
- etc.

Each page follows the template in the Master Plan document.
