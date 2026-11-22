// @vitest-environment node
import { describe, expect, it, vi } from "vitest";
import i18n, { normalizeLanguage, syncDocumentLanguage } from "../i18n";

describe("supported language resolution", () => {
  it("resolves a Brazilian Portuguese first visit to Portuguese", async () => {
    const detected = normalizeLanguage("pt-BR");
    expect(detected).toBe("pt");
    await i18n.changeLanguage(detected);
    expect(i18n.resolvedLanguage).toBe("pt");
  });
  it("resolves US English to English", async () => {
    const detected = normalizeLanguage("en-US");
    expect(detected).toBe("en");
    await i18n.changeLanguage(detected);
    expect(i18n.resolvedLanguage).toBe("en");
  });
  it("updates document language on shared language changes without a route layout", async () => {
    const documentStub = { documentElement: { lang: "pt-BR" } };
    vi.stubGlobal("document", documentStub);
    try {
      await i18n.changeLanguage("en");
      expect(documentStub.documentElement.lang).toBe("en");
      await i18n.changeLanguage("pt");
      expect(documentStub.documentElement.lang).toBe("pt");
    } finally {
      vi.unstubAllGlobals();
    }
  });
  it("safely initializes document language without a browser document", () => {
    expect(typeof document).toBe("undefined");
    expect(() => syncDocumentLanguage()).not.toThrow();
  });
});