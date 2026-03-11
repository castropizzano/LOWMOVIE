export interface Deriva {
  to: string;
  /** i18n key index for this deriva within the node */
  index: number;
}

export interface LowbyrinthNode {
  /** i18n key (e.g. "apresentacao") */
  key: string;
  path: string;
  x: number;
  y: number;
  derivas: Deriva[];
}

export const lowbyrinthNodes: LowbyrinthNode[] = [
  {
    key: "apresentacao",
    path: "/apresentacao",
    x: 50, y: 12,
    derivas: [
      { to: "/metodologia", index: 0 },
      { to: "/conceitos", index: 1 },
    ],
  },
  {
    key: "metodologia",
    path: "/metodologia",
    x: 82, y: 18,
    derivas: [
      { to: "/coletivo", index: 0 },
      { to: "/filme", index: 1 },
    ],
  },
  {
    key: "estrutura",
    path: "/estrutura",
    x: 88, y: 50,
    derivas: [
      { to: "/mapa", index: 0 },
      { to: "/apresentacao", index: 1 },
    ],
  },
  {
    key: "conceitos",
    path: "/conceitos",
    x: 12, y: 50,
    derivas: [
      { to: "/filme", index: 0 },
      { to: "/mapa", index: 1 },
      { to: "/conclusao", index: 2 },
    ],
  },
  {
    key: "filme",
    path: "/filme",
    x: 18, y: 18,
    derivas: [
      { to: "/coletivo", index: 0 },
      { to: "/conceitos", index: 1 },
    ],
  },
  {
    key: "coletivo",
    path: "/coletivo",
    x: 82, y: 82,
    derivas: [
      { to: "/contribuicoes", index: 0 },
      { to: "/metodologia", index: 1 },
    ],
  },
  {
    key: "contribuicoes",
    path: "/contribuicoes",
    x: 50, y: 88,
    derivas: [
      { to: "/conclusao", index: 0 },
      { to: "/questoes", index: 1 },
    ],
  },
  {
    key: "questoes",
    path: "/questoes",
    x: 18, y: 82,
    derivas: [
      { to: "/conceitos", index: 0 },
      { to: "/apresentacao", index: 1 },
    ],
  },
  {
    key: "conclusao",
    path: "/conclusao",
    x: 50, y: 50,
    derivas: [
      { to: "/apresentacao", index: 0 },
      { to: "/mapa", index: 1 },
    ],
  },
];
