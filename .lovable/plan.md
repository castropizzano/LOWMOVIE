

# Cinematic Intro Screen — LOWMOVIE™

## Overview

Create a fullscreen cinematic intro page (`/intro`) that plays the uploaded Lowbyrinth™ video as an immersive entry experience. The current `/` route becomes `/intro`, and the homepage moves to a new flow where visitors land on the intro first.

## Architecture

1. **Copy video** to `public/videos/lowbyrinth-intro.mp4`
2. **Create `src/pages/Intro.tsx`** — fullscreen cinematic intro component
3. **Update `src/App.tsx`** — route `/` → `Intro`, move current Index to `/home`
4. **Update all internal links** pointing to `/` to point to `/home` instead (sidebar, nav, etc.)

## Intro.tsx Component Design

```text
┌─────────────────────────────────────┐
│                                     │
│     (fullscreen video background)   │
│                                     │
│          LOWMOVIE™                  │
│     ENTER THE LOWBYRINTH            │
│                                     │
│                                     │
│                                     │
│    [ ENTER PORTAL ]  [ SKIP INTRO ] │
│                                     │
└─────────────────────────────────────┘
```

**Video element:**
- `<video>` tag with `autoPlay`, `playsInline`, `src` pointing to `/videos/lowbyrinth-intro.mp4`
- Starts muted (browser requirement), with a sound toggle button (small speaker icon)
- `object-fit: cover` fullscreen, no controls visible
- `onEnded` → navigate to `/home`

**Important browser constraint:** Browsers block autoplay with sound. The video will autoplay muted, with a prominent "Enable Sound" button that unmutes on click. This is the only way to guarantee autoplay works across all browsers.

**Overlay elements (positioned absolute over video):**
- Title: `LOWMOVIE™` — `text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground`
- Subtitle: `ENTER THE LOWBYRINTH` — `text-xs uppercase tracking-[0.2em] text-muted-foreground`
- Two buttons at bottom center, styled per STYLE_GUIDE:
  - `ENTER PORTAL` → navigates to `/home`
  - `SKIP INTRO` → navigates to `/home`
  - Both use: `border border-border/50 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground/70 hover:border-primary/50 hover:text-primary transition-all`
- Sound toggle: small `Volume2`/`VolumeX` icon button, top-right corner

**Fade-in animation:** Overlay text fades in after 1-2 seconds via CSS opacity transition.

**Session behavior:** First-time visitors see the intro. Use `sessionStorage` (not localStorage) so the intro plays once per browser session but returns on new sessions. If `sessionStorage` has `lowmovie_intro_seen`, redirect `/` immediately to `/home`.

## Route Changes

| Before | After |
|---|---|
| `/` → Index (homepage) | `/` → Intro (cinematic entry) |
| n/a | `/home` → Index (homepage) |

## Files to Update

- **`src/App.tsx`**: Add Intro route at `/`, change Index to `/home`
- **`src/pages/Intro.tsx`**: New component (fullscreen video + overlay)
- **`src/components/AppSidebar.tsx`**: Update Home link from `/` to `/home`
- **`src/pages/Index.tsx`**: No changes needed (stays as-is, just mounted at `/home`)
- **`src/components/WelcomeOverlay.tsx`**: Remains unchanged (still shows on homepage for email capture)

## Performance

- Video served from `public/videos/` (static asset, CDN-cached)
- `preload="auto"` on the video tag for fast start
- Lightweight page — no Layout wrapper, no sidebar, just video + overlay
- No impact on homepage load (separate route)

## Responsive

- Video: `w-full h-full object-cover` on a `fixed inset-0` container
- Text and buttons scale via standard Tailwind responsive classes
- On mobile, buttons stack vertically with `flex-col` at small breakpoints

