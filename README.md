# LOWATLAS — BILINGUAL VERSION

## Main pages

English:
- index.html
- privacy.html

Spanish:
- index-es.html
- privacy-es.html

## Project pages

English:
- blackout-customs.html
- barber.html
- detailing.html

Spanish:
- blackout-customs-es.html
- barber-es.html
- detailing-es.html

## Shared files

- styles.css (section index at the top: 01 Brand … 20 Mobile)
- script.js (FAQ, presence check, security checklist reveal)

## Security files

- `_headers` — security headers for Cloudflare Pages / Netlify-style hosts (GitHub Pages ignores it)
- `CLOUDFLARE-SETUP.md` — step-by-step Cloudflare checklist (HTTPS, DNSSEC, firewall, headers, email protection)
- `.well-known/security.txt` — where to report security issues
- `.nojekyll` — keeps GitHub Pages from hiding `_headers` and `.well-known/`. Keep it.

## Assets

- blackout-customs-logo.svg

The Blackout file is currently a clean wordmark-style logo tile created for the portfolio thumbnail.
If you have the official Blackout Customs logo PNG/SVG, replace this file while keeping the same filename:

blackout-customs-logo.svg

or update the image path in the HTML.

## Language switch

The EN / ES control is in the top-right navigation.

No translation plugin is used.
No framework is used.
Everything remains static HTML/CSS/JS.

## Concept photography

Concept thumbnails use normal real-world photography, not generated artwork.

## Email

lowatlas.studio@gmail.com

## Live client site

https://blackoutcustoms.net


## Pricing wording

Public pricing uses "Starting at" (Spanish: "Desde"). These are minimum starting points for the listed standard scope.

01 SEE — Business Profile Cleanup (one-time)
- Single Profile — Starting at $120 (Google OR Meta)
- Full Presence — Starting at $200 (Google + Meta)
- Profile Care — $99/month one platform, $149/month Google + Meta (optional)

02 TRUST — Website
- Essential — Starting at $500 (or $50/month x 12)
- Business — Starting at $800 (or $75/month x 12)
- Website Care — $50/month (optional)

03 CONTACT — Google & Meta Ads (monthly management fee, ad spend paid separately to Google / Meta)
- Single Platform — Starting at $350/month
- Google + Meta — Starting at $500/month
- Starts with a 3-month term

Extra pages, extra content, custom functionality, or work outside the stated scope should be quoted separately.

### Where to change a price

Search for the number in BOTH index.html and index-es.html. Each price appears in up to four places:
1. SERVICES cards (top of page)
2. PRICING section (the `.price-group` blocks, marked "EDIT PRICES HERE")
3. PRESENCE CHECK "next step" blocks (`data-next="..."`)
4. FAQ ("How much do ads really cost?")

## Presence check (interactive tool)

Lives in the PRESENCE CHECK section of index.html / index-es.html. All wording is in the HTML:
- each checkbox has `data-weight` (points, should add up to 100), `data-group` (profile / website / ads) and `data-gap` (the text shown when it's unchecked)
- grade text, next-step blocks and the email wording are plain HTML around it
- `script.js` section 02 only does the math, so changing questions needs no JavaScript

Nothing is sent or stored. The "Send results" button just opens the visitor's email app with a prefilled draft.

## Cookies, trackers and consent

The site sets no cookies and loads no analytics, pixels or third-party scripts. A Content Security Policy
in every page's `<head>` makes the browser refuse any third-party script. No consent banner is included
because there is nothing to consent to.

If you ever add analytics, a Meta Pixel, a Google Ads tag, or a chat widget:
1. update the CSP (every page's `<meta>`, `_headers`, and the Cloudflare header rule)
2. add consent-gated loading
3. update privacy.html / privacy-es.html

Unsplash is the one remaining third-party request (two concept photos, images only). See CLOUDFLARE-SETUP.md section 8 to remove it.

## Blackout logo upload fix

The Blackout logo file now lives in the ROOT of the repository:

blackout-customs-logo.svg

Upload it beside `index.html`, `styles.css`, etc.

This avoids needing an `assets/` folder and prevents the broken-image issue shown on GitHub Pages.

## November 2026 update — brand assets and favicon

- Pomona Water & Ice was removed from both English and Spanish home-page portfolios; its HTML pages are deliberately not published in this package.
- All existing remaining project pages and copy are preserved.
- Every HTML page now references `favicon.svg`, `favicon-32.png`, and `apple-touch-icon.png` at the repository root.
- All visual branding files are in `brand-assets/`. Facebook cover: `lowatlas-facebook-cover.png`; profile: `lowatlas-profile-logo.png`; intro post: `lowatlas-intro-post.png`. Editable SVG counterparts are included.
- Site colors unchanged: #0B0B0B, #F3F0E8, #D4FF63.
- Upload repository contents into the ROOT of your GitHub Pages repo, not as a nested folder. Keep files such as index.html and favicon.svg alongside each other.

## November 13, 2026 update — three services, presence check, security

- Home pages rebuilt around three services (Profile Cleanup, Website, Ads) with starting prices, care plans, and a Security section. Process and FAQ updated to match.
- New interactive "Free presence check" (score gauge, biggest gaps, recommended next service, prefilled email).
- New privacy pages (EN/ES) and a strict Content Security Policy on every page.
- Navigation now also works on phones (scrollable second row instead of disappearing).
- Spanish pricing now says "Desde" instead of "Starting at".
- "What I build" section became "How I work".
- No inline `style="..."` attributes anywhere (the CSP blocks them): use classes in styles.css instead.
- Colors, fonts, and file structure unchanged.

## Google visibility (SEO files)

- `robots.txt`, `sitemap.xml`: tell Google what to crawl. Add new pages to `sitemap.xml`.
- Every page has a canonical link; the home pages also have EN/ES `hreflang`, social preview tags, and a small JSON-LD block (business name, area served: Pomona + Antelope Valley). No address or phone is listed on purpose.
- To get found by name: verify lowatlas.com in Google Search Console (Domain property, DNS TXT record in Cloudflare), submit `https://lowatlas.com/sitemap.xml`, then use URL Inspection, Request indexing for the home page.

## Security section (hidden on purpose)

The public Security section was removed from the home pages to keep them short. The Cloudflare setup still applies to every site, and
`CLOUDFLARE-SETUP.md` is the checklist. The old section's CSS (`.security`, `.sec-*` in styles.css) and script section 03 are unused but harmless;
delete them if you like. To bring the section back, restore it from an earlier copy of index.html / index-es.html.
