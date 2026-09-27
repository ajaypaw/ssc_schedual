# SSC CGL Study Planner — GitHub Pages PWA (Install Fixed v3)

## GitHub upload
Upload every file directly into the repository root. Do not put the files inside an extra folder.

Required root files:
- index.html
- manifest.json
- sw.js
- icon-192.png
- icon-512.png
- icon-maskable-192.png
- icon-maskable-512.png
- icon.svg
- .nojekyll

Then enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

## Android Chrome install
Use the published **HTTPS GitHub Pages URL** in normal Chrome (not Incognito). Open the page fully, then use **⋮ → Install app**. On some current Chrome builds the menu label is **Install and create shortcut**.

If the install entry is missing, first reload the page once while online and revisit the URL. The app needs its manifest and service worker to be reachable from the same HTTPS origin.

The manifest uses root-relative-to-site paths so it works on a repository Pages URL such as `https://username.github.io/ssc-cgl-planner/`.

## Offline
After the app loads successfully online once, the service worker caches the app shell. Planner data remains on the device in LocalStorage; use Data & settings → Export backup.
