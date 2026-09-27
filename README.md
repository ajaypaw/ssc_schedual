# SSC CGL Study Planner — GitHub Pages PWA

This folder is ready to publish as a Progressive Web App (PWA).

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `ssc-cgl-planner`.
2. Upload **all files and folders in this directory**, keeping all files together in the repository root.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then Save.
6. Open the GitHub Pages URL over **HTTPS**.

## Install from Chrome on Android

Open the GitHub Pages URL in Chrome. Chrome may show **Install app** in the browser menu or the planner's **Install** button. Choose Install/Add to Home screen.

## Offline behavior

The service worker caches the app shell. After the planner has been opened once successfully, the planner can load without an internet connection. User progress is stored locally in the browser via LocalStorage; use **Data & settings → Export backup** periodically for a portable backup.

## Updating the app

After changing `index.html`, increase the version in `sw.js` (for example `ssc-cgl-planner-v2`) before publishing so installed clients refresh their cached app shell.


The root directory includes an SVG app icon (`icon.svg`) plus PNG fallback/maskable icons for broad Chrome/PWA compatibility.
