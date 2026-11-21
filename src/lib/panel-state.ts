export type PortalPanel = "lowbyrinth" | "manual";
export function getPortalPanel(search: URLSearchParams): PortalPanel | null {
  const value = search.get("painel");
  return value === "lowbyrinth" || value === "manual" ? value : null;
}
export function withPortalPanel(search: URLSearchParams, panel: PortalPanel | null) {
  const next = new URLSearchParams(search);
  if (panel) next.set("painel", panel);
  else next.delete("painel");
  return next;
}