#!/usr/bin/env bash
# ─────────────────────────────────────────────
# LOWMOVIE™ — Digital Preservation Archive Script
# Generates a structured archive of all project assets
# ─────────────────────────────────────────────

set -euo pipefail

ARCHIVE_DIR="LOWMOVIE_ARCHIVE"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
LOG_FILE="${ARCHIVE_DIR}/metadata/preservation_log.md"
MANIFEST_FILE="${ARCHIVE_DIR}/metadata/manifest.sha256"

echo "╔══════════════════════════════════════════╗"
echo "║  LOWMOVIE™ — Archive Generator           ║"
echo "║  ${TIMESTAMP}                    ║"
echo "╚══════════════════════════════════════════╝"
echo ""

# ─── 1. Create directory structure ───
echo "→ Creating archive directory structure..."
mkdir -p "${ARCHIVE_DIR}"/{portal_snapshot,repository,videos,images/{coletivo,fotos,sequence,stills},documents/{brandbooks,transcricoes},zines,metadata}

# ─── 2. Copy videos ───
echo "→ Copying video files..."
if [ -d "public/videos" ]; then
  cp -v public/videos/*.mp4 "${ARCHIVE_DIR}/videos/" 2>/dev/null || echo "  (no .mp4 files found)"
fi

# ─── 3. Copy images ───
echo "→ Copying image files..."
if [ -d "public/images/coletivo" ]; then
  cp -v public/images/coletivo/* "${ARCHIVE_DIR}/images/coletivo/" 2>/dev/null || true
fi
if [ -d "public/images/fotos" ]; then
  cp -v public/images/fotos/* "${ARCHIVE_DIR}/images/fotos/" 2>/dev/null || true
fi
if [ -d "public/images/sequence" ]; then
  cp -v public/images/sequence/* "${ARCHIVE_DIR}/images/sequence/" 2>/dev/null || true
fi
if [ -d "public/images/stills" ]; then
  cp -v public/images/stills/* "${ARCHIVE_DIR}/images/stills/" 2>/dev/null || true
fi
# Loose images
for img in public/images/*.{jpg,png,svg} ; do
  [ -f "$img" ] && cp -v "$img" "${ARCHIVE_DIR}/images/" 2>/dev/null || true
done

# ─── 4. Copy documents ───
echo "→ Copying documents..."
[ -f "public/docs/dissertacao.pdf" ] && cp -v public/docs/dissertacao.pdf "${ARCHIVE_DIR}/documents/"
for pdf in public/docs/*_brandbook.pdf ; do
  [ -f "$pdf" ] && cp -v "$pdf" "${ARCHIVE_DIR}/documents/brandbooks/" 2>/dev/null || true
done
if [ -d "public/docs/transcricoes" ]; then
  cp -v public/docs/transcricoes/* "${ARCHIVE_DIR}/documents/transcricoes/" 2>/dev/null || true
fi

# ─── 5. Copy metadata ───
echo "→ Copying metadata files..."
for f in CITATION.cff README.md LICENSE PRESERVATION.md ; do
  [ -f "$f" ] && cp -v "$f" "${ARCHIVE_DIR}/metadata/"
done

# ─── 6. Create git bundle ───
echo "→ Creating git bundle..."
if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  git bundle create "${ARCHIVE_DIR}/repository/lowmovie-repo.bundle" --all
  echo "  ✓ Git bundle created"
else
  echo "  ⚠ Not a git repository — skipping bundle"
fi

# ─── 7. Generate SHA256 manifest ───
echo "→ Generating SHA256 manifest..."
find "${ARCHIVE_DIR}" -type f ! -name "manifest.sha256" ! -name "preservation_log.md" -exec sha256sum {} \; > "${MANIFEST_FILE}"
TOTAL_FILES=$(wc -l < "${MANIFEST_FILE}")
echo "  ✓ ${TOTAL_FILES} files checksummed"

# ─── 8. Write preservation log ───
echo "→ Writing preservation log..."
cat > "${LOG_FILE}" << EOF
# Preservation Log — LOWMOVIE™

## Archive created: ${TIMESTAMP}

- **Generator:** scripts/archive.sh
- **Total files archived:** ${TOTAL_FILES}
- **Git bundle:** $([ -f "${ARCHIVE_DIR}/repository/lowmovie-repo.bundle" ] && echo "Yes" || echo "No")
- **Portal snapshot:** $([ -d "${ARCHIVE_DIR}/portal_snapshot" ] && [ "$(ls -A ${ARCHIVE_DIR}/portal_snapshot 2>/dev/null)" ] && echo "Yes" || echo "Pending (run wget/HTTrack separately)")

## Notes

- Portal snapshot must be generated separately using wget or HTTrack (see PRESERVATION.md)
- Verify archive integrity: \`sha256sum -c metadata/manifest.sha256\`

---

*Generated automatically by archive.sh*
EOF

echo ""
echo "═══════════════════════════════════════════"
echo "  ✓ Archive created at: ${ARCHIVE_DIR}/"
echo "  ✓ Total files: ${TOTAL_FILES}"
echo "  ✓ Log: ${LOG_FILE}"
echo ""
echo "  Next steps:"
echo "  1. Generate portal snapshot (see PRESERVATION.md)"
echo "  2. Verify: sha256sum -c ${MANIFEST_FILE}"
echo "═══════════════════════════════════════════"
