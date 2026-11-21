// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { primaryAccess, bookState, archiveMaterials, videoPublications, inPersonPremiere, harpiaPublication, circulationRecords } from "../data/portal";
import { getPortalPanel, withPortalPanel } from "../lib/panel-state";
import { lowbyrinthNodes } from "../data/lowbyrinth";
import pt from "../i18n/locales/pt.json";
import en from "../i18n/locales/en.json";
const bytes = (name: string) => readFileSync(`public/docs/${name}`);
const hash = (name: string) => createHash("sha256").update(bytes(name)).digest("hex");
describe("author-confirmed document and publication constraints", () => {
  it("keeps the nine Lowbyrinth destinations separate from auxiliary book and archive access", () => {
    expect(lowbyrinthNodes.map(node => node.path)).toEqual(["/apresentacao", "/metodologia", "/estrutura", "/conceitos", "/filme", "/coletivo", "/contribuicoes", "/questoes", "/conclusao"]);
  });
  it("offers the approved thirteen manifesto gestures in both languages", () => {
    expect(pt.method.principles.length).toBe(13);
    expect(en.method.principles.length).toBe(13);
  });
  it("preserves the original audiovisual introduction", () => {
    const intro = readFileSync("public/videos/lowbyrinth-intro.mp4");
    expect(createHash("sha256").update(intro).digest("hex")).toBe("34921f83d2db35d95bbf6bee1a4b1b83e38b1828a6cb051bb7169f69d8400f72");
  });
  it("preserves the code license without new grants", () => {
    expect(createHash("sha256").update(readFileSync("LICENSE")).digest("hex")).toBe("6b12428855b6688f914431c6c417d8099cde60c8e4b0f4ef3148c7e540054c0f");
  });
  it("assigns the film publication timestamp to the full film", () => {
    expect(videoPublications.film).toEqual({ id: "wcYBh6_DqO8", uploadDate: "2023-04-19T16:00:07-07:00" });
  });
  it("keeps the in-person premiere separate from platform publication", () => {
    expect(inPersonPremiere).toMatchObject({ date: "2022-12-16", venue: "Vila Ida", city: "Curitiba" });
    expect(videoPublications.premiere).toEqual({ id: "RbsSyBhSHFg", uploadDate: "2023-01-23T06:00:11-08:00" });
  });
  it("assigns the Black View timestamp to Black View", () => {
    expect(videoPublications.blackView).toEqual({ id: "YJEW5YB59Ws", uploadDate: "2023-04-28T07:00:11-07:00" });
  });
  it("distinguishes the Harpia issue from the page publication", () => {
    expect(harpiaPublication).toMatchObject({ authors: ["Castro Pizzano", "Fabiana Pelinson"], institution: "ISULPAR", year: 2025, issue: 16, pages: "26–48", issueMonth: "2025-07", pagePublished: "2025-08-11" });
  });
  it("keeps the approved circulation dates with their own records", () => {
    expect(circulationRecords.map(r => [r.key, r.date])).toEqual([["lowcard", "2023-05-03"], ["pocket", "2023-05-04"], ["blackmedia", "2023-01-23"], ["dose", "2023-04-28"]]);
  });
  it("opens only the two approved panels and preserves unrelated query state", () => {
    expect(getPortalPanel(new URLSearchParams("painel=manual"))).toBe("manual");
    expect(getPortalPanel(new URLSearchParams("painel=lowbyrinth"))).toBe("lowbyrinth");
    expect(getPortalPanel(new URLSearchParams("painel=unknown"))).toBeNull();
    expect(withPortalPanel(new URLSearchParams("painel=manual&capitulo=2"), null).toString()).toBe("capitulo=2");
  });
  it("preserves the deposited dissertation byte for byte", () => {
    expect(hash("dissertacao.pdf")).toBe("b09d6062072465e505e6d3272efbde7f45910fc9d23fe481facc5e68944356b0");
  });
  it("preserves the official 26-page BrandBook", () => {
    expect(bookState.brandbookPages).toBe(26);
    expect(hash("LowPressure_brandbook.pdf")).toBe("c05da95319b33794e646053716b07f8a75c07f37c6b8d86de610cfbe7bce8c84");
  });
  it("preserves the official 13-page ArtBook", () => {
    expect(hash("LowMovie_brandbook.pdf")).toBe("d0ecc2e059181bef99a2ea6eec8fbf1186050fc5f884ba1c27f661a854cabbd1");
  });
  it("keeps the historical toolkit URL byte-identical to the revision", () => {
    expect(bytes("toolkit_metodologia_castro.pdf").equals(bytes("lowmovie_toolkit_pedagogico.pdf"))).toBe(true);
  });
  it("presents the book as editorial preparation", () => {
    expect(bookState.status).toBe("editorial-preparation");
    expect(bookState.author).toBe("Castro Pizzano");
  });
  it("preserves the requested primary destinations", () => {
    expect(primaryAccess.map(item => item.url)).toEqual(["/filme", "/coletivo", "/livro", "/arquivo"]);
  });
  it("leaves both selected creation documents undated", () => {
    for (const key of ["script", "emblem"]) {
      const material = archiveMaterials.find(item => item.key === key);
      expect(material?.date).toBeUndefined();
      expect(material?.dateKey).toBe("noDate");
      expect(material?.href.endsWith(".pdf")).toBe(true);
    }
  });
});
