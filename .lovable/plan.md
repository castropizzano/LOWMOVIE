## Fix: PDF Viewer Mobile Responsiveness

The screenshot shows the PDF page overflowing the container on mobile — text is cut off on the right side because `react-pdf` renders at a fixed pixel width regardless of screen size.

### Root Cause

The `<Page>` component uses a fixed `scale={1}` which renders the PDF at its native resolution (typically 612px for a US Letter page). On mobile screens (~360px wide), this overflows the container. The `overflow-auto` on the parent allows scrolling, but the experience is poor — the user has to scroll horizontally to read each line.

### Solution

Use `react-pdf`'s `width` prop instead of (or alongside) `scale` to make the page fit the container width automatically. Measure the container width with a `ref` + `ResizeObserver` and pass it as `width` to `<Page>`. When the user zooms, multiply that base width by the scale factor.

### Changes — `src/components/PdfPageViewer.tsx`

1. Add a `useRef` on the PDF container div and a `useEffect` with `ResizeObserver` to track `containerWidth`
2. Pass `width={containerWidth * scale}` to `<Page>` instead of just `scale`
3. Remove the fixed `scale` prop — zoom now works as a multiplier on the container-fitted width
4. This ensures the PDF always fits the screen at 100% zoom, on any device

One file changed. No new dependencies.

&nbsp;

&nbsp;