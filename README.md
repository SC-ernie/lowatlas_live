# LOWATLAS — BILINGUAL VERSION

## Main pages

English:
- index.html

Spanish:
- index-es.html

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

- styles.css
- script.js

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

Public pricing now uses:

- Essential — Starting at $500
- Business — Starting at $800
- Website Care — $50/month

This makes it clear the package prices are minimum starting points for the listed standard scope.

Extra pages, extra content, custom functionality, or work outside the stated scope should be quoted separately.

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
- Site colors unchanged: #0B0B0B, #F3F0E8, #D4FF63. CSS and JavaScript unchanged.
- Upload repository contents into the ROOT of your GitHub Pages repo, not as a nested folder. Keep files such as index.html and favicon.svg alongside each other.
