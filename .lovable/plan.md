
## Fix: Lightbox caption visibility

**Problem**: In `ImageLightbox.tsx`, the lightbox container is `h-[80vh]` and the image is `max-h-[80vh]`. When the image fills the container, the caption (`mt-2`) overflows below the visible area.

**Solution**: Reduce the image `max-h` to `max-h-[75vh]` to leave room for the caption below it. This ensures the caption remains visible within the 80vh container.

**File**: `src/components/ImageLightbox.tsx` (line 51)
- Change `max-h-[80vh]` to `max-h-[75vh]` on the lightbox `<img>`

This affects all lightbox instances consistently, including blocks 01 (Punkinho) and 05 (Crew LowPressure) in Defense Mode.
