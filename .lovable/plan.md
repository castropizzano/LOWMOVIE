

# Final Comprehensive Audit — LOWMOVIE™

## 1. CRITICAL ISSUES (Must fix before defense)

### 1.1 MethodDiagram translations are broken
`methodDiagram` is nested inside `lowbyrinthData` in both `pt.json` (line 633) and `en.json` (line 633). The `MethodDiagram.tsx` component calls `t("methodDiagram.layers.experiencia.label")` etc., which looks for a **top-level** `methodDiagram` key. Since it's nested under `lowbyrinthData`, all translations fail silently — the Method Diagram in the Manual displays raw key strings instead of labels.

**Fix:** Move `methodDiagram` object out of `lowbyrinthData` to the top level of the JSON in both `pt.json` and `en.json`.

### 1.2 License badge links to placeholder URL
`Layout.tsx` line 93: `https://github.com/your-repo/blob/main/LICENSE` — this is a placeholder that was never updated. Visible in every page's footer.

**Fix:** Replace with the actual repository URL (`https://github.com/castropizzano/lowmovie/blob/main/LICENSE`).

### 1.3 Sitemap referenced but does not exist
`public/robots.txt` line 11 references `sitemap.xml` which does not exist. Archival crawlers will get a 404.

**Fix:** Remove the Sitemap line from `robots.txt`, since SPAs don't benefit from sitemaps in the traditional sense.

## 2. IMPORTANT IMPROVEMENTS (Recommended)

### 2.1 WelcomeOverlay uses hardcoded `bg-black/70`
`WelcomeOverlay.tsx` line 58 uses `bg-black/70` instead of semantic `bg-background/70`. Violates the style guide rule against hardcoded colors.

**Fix:** Replace `bg-black/70` with `bg-background/70`.

### 2.2 Defense Mode Block 0 auto-advance timer
`Defense.tsx` line 110: Block 0 auto-advances after 2 seconds. The project memory specifies the original design was 5 seconds. With Block 1 loading a YouTube video, 2 seconds may not provide enough buffer time.

**Fix:** Change `2000` to `5000`.

### 2.3 Conclusao page uses `text-left` container
`Conclusao.tsx` line 22: The entire page container uses `text-left`, but paragraphs inside correctly use `text-justify`. The container-level `text-left` is redundant since body paragraphs override it. Not breaking, but inconsistent with other pages that don't set container-level alignment.

No change needed — paragraphs correctly override to `text-justify`.

## 3. MINOR CORRECTIONS

### 3.1 AnimatedSection is a no-op
`AnimatedSection.tsx` accepts a `delay` prop but renders a plain `<div>`. All pages pass delay values that have no effect. This is intentional per the project memory ("components are static, without entrance animations"), so no fix needed, but the unused `delay` prop could be removed for code cleanliness.

### 3.2 `frameBorder="0"` deprecation
Used in `Conclusao.tsx` interview iframes — deprecated HTML attribute. Minor, browsers still support it.

## 4. CONCEPTUAL OBSERVATIONS

- The 14-block Defense Mode sequence maintains a clear narrative arc from opening video through research context, collective, concepts, methodology, audiovisual showcase, contributions, and closing.
- Authorial voice is consistent: first person in field descriptions, third person for institutional summaries.
- No AI writing patterns detected — text reads naturally for academic Portuguese.
- Conceptual alignment between dissertation structure (3 movements), portal pages, and Lowbyrinth™ navigation is strong.

## 5. DESIGN OBSERVATIONS

- Color palette strictly uses CSS custom properties throughout (except the WelcomeOverlay issue noted above).
- Typography hierarchy (Manrope 7-level system) is applied consistently.
- Grayscale-to-color interaction is consistent across all media.
- Spacing scale follows the documented standards.
- DOI and License badges are themed to match the portal palette.

## 6. ARCHIVE AND PRESERVATION OBSERVATIONS

- DOI integration is complete: `CITATION.cff`, `README.md`, footer badge, and Contribuições page.
- `PRESERVATION.md` documents a comprehensive multi-layer strategy.
- `robots.txt` correctly allows archival bots.
- Git bundle and Zenodo workflows are documented.

## 7. OVERALL READINESS

**Status: READY FOR DEFENSE** — contingent on fixing the 3 critical issues above.

---

## Implementation Plan

| # | File | Action |
|---|---|---|
| 1 | `src/i18n/locales/pt.json` | Move `methodDiagram` from inside `lowbyrinthData` to top level |
| 2 | `src/i18n/locales/en.json` | Same as above |
| 3 | `src/components/Layout.tsx` | Fix License badge URL to actual repo |
| 4 | `public/robots.txt` | Remove Sitemap line |
| 5 | `src/components/WelcomeOverlay.tsx` | Replace `bg-black/70` → `bg-background/70` |
| 6 | `src/pages/Defense.tsx` | Change Block 0 timer from 2000 to 5000 |

