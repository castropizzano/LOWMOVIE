// @vitest-environment node
import { describe, expect, it } from "vitest";
import { getPdfPagination } from "../lib/pdf-pagination";

describe("PDF pagination readiness", () => {
  it("keeps the ArtBook starting page 5 while disabling pagination before loading", () => {
    expect(getPdfPagination(5, 0)).toEqual({ ready: false, current: 5, canPrevious: false, canNext: false });
  });
  it("retains page 5 and enables both actions once the 13-page ArtBook is loaded", () => {
    expect(getPdfPagination(5, 13)).toEqual({ ready: true, current: 5, canPrevious: true, canNext: true });
  });
  it("disables forward pagination on page 13 of 13", () => {
    expect(getPdfPagination(13, 13).canNext).toBe(false);
  });
  it("disables backward pagination on the configured first page", () => {
    expect(getPdfPagination(1, 13).canPrevious).toBe(false);
  });
});