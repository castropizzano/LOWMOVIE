export function getPdfPagination(page: number, total: number) {
  const ready = total > 0;
  const current = ready ? Math.min(Math.max(1, page), total) : page;
  return { ready, current, canPrevious: ready && current > 1, canNext: ready && current < total };
}