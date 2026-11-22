// @vitest-environment node
import { describe, expect, it } from "vitest";
import { nodes, edges, getConnectedNodes } from "../data/conceptMap";
import { projectSvgPoint } from "../lib/svg-position";

describe("concept map reading alternatives", () => {
  it("keeps all 21 nodes and 29 existing connections", () => {
    expect(nodes).toHaveLength(21);
    expect(edges).toHaveLength(29);
    expect(new Set(nodes.map(node => node.id)).size).toBe(21);
  });
  it("reads Fabulação's existing connections without adding a relation", () => {
    expect(getConnectedNodes("fabulacao").map(node => node.id)).toEqual(["rouch", "deleuze", "afeto"]);
  });
  it("returns exactly the incident edges for each textual node", () => {
    for (const node of nodes) {
      const expected = edges.filter(edge => edge.source === node.id || edge.target === node.id)
        .map(edge => edge.source === node.id ? edge.target : edge.source).sort();
      expect(getConnectedNodes(node.id).map(connected => connected.id).sort()).toEqual(expected);
    }
  });
  it("accounts for vertical SVG letterboxing in a narrow frame", () => {
    expect(projectSvgPoint(450, 325, 900, 1000)).toEqual({ x: 450, y: 500 });
    expect(projectSvgPoint(0, 0, 900, 1000)).toEqual({ x: 0, y: 175 });
  });
  it("accounts for horizontal SVG letterboxing in a wide frame", () => {
    expect(projectSvgPoint(0, 0, 1200, 650)).toEqual({ x: 150, y: 0 });
    expect(projectSvgPoint(900, 650, 1200, 650)).toEqual({ x: 1050, y: 650 });
  });
});