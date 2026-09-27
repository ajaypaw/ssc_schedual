# SSC CGL Study Planner — GitHub Pages PWA v4

This build is specifically configured for the repository:
`https://ajaypaw.github.io/ssc_schedual/`

## Repository root
Upload these files directly to the repository root. Do not create an `icons` folder.

- index.html
- manifest.json
- sw.js
- icon.svg
- icon-192.png
- icon-512.png
- icon-maskable-192.png
- icon-maskable-512.png
- .nojekyll

## GitHub Pages
Use **Settings → Pages → Deploy from a branch → main → /(root)**.

## Android Chrome
Open the published HTTPS URL in Chrome while online. Refresh once after deployment so the new manifest/service worker are loaded. Then use **⋮ → Install and create shortcut → Install**.

The manifest, scope, start URL, icon URLs and service-worker scope are all tied to `/ssc_schedual/` so they work correctly on this repository Pages site.

## Offline
After the app shell has loaded online, the service worker caches the planner shell. Your planner data is stored locally on the device; use Data & settings → Export backup for backups.
