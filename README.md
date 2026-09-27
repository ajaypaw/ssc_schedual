# SSC CGL Study Planner — GitHub Pages PWA v6

This build keeps the existing SSC planner and adds a semester-exam-aware schedule.

## Semester exam window
**5 November 2026 → 12 December 2026**

During this period the planner switches to light SSC maintenance only. No new SSC syllabus is scheduled. College semester preparation is treated as the priority.

## Adjusted SSC Maths schedule
The original plan has 220 Maths video units. They remain at **2 active-learning units per normal weekday**, but exam-period weekdays are frozen. This moves the 220-unit learning completion date to **6 April 2027**. Final revision is scheduled from **7 April → 25 April 2027**.

## Repository root
Upload these files directly to the repository root. Do not create an icons folder.

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
Open the HTTPS GitHub Pages URL in Chrome while online. After the app shell loads, Chrome can offer the install action.

## Offline
The service worker caches the planner shell. Planner progress remains in local storage on the device; use Data & settings → Export backup.
