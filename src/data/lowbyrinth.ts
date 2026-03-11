export interface Deriva {
  to: string;
  label: string;
  justificativa: string;
}

export interface LowbyrinthNode {
  title: string;
  path: string;
  conceito: string;
  x: number;
  y: number;
  derivas: Deriva[];
}

export const lowbyrinthNodes: LowbyrinthNode[] = [
  {
    title: "Apresentação",
    path: "/apresentacao",
    conceito: "Implicação",
    x: 50, y: 12,
    derivas: [
      { to: "/metodologia", label: "Metodologia", justificativa: "Da implicação pessoal ao rigor do método. O afeto fundamenta a pesquisa." },
      { to: "/conceitos", label: "Conceitos", justificativa: "Do relato à cartografia conceitual. Nomear o que a experiência revelou." },
    ],
  },
  {
    title: "Metodologia",
    path: "/metodologia",
    conceito: "Pesquisa-criação",
    x: 82, y: 18,
    derivas: [
      { to: "/coletivo", label: "O Coletivo", justificativa: "Do método ao campo. O processo colaborativo é a metodologia em ato." },
      { to: "/filme", label: "O Filme", justificativa: "Da pesquisa-criação à obra. O filme materializa o percurso metodológico." },
    ],
  },
  {
    title: "Estrutura",
    path: "/estrutura",
    conceito: "Arquitetura",
    x: 88, y: 50,
    derivas: [
      { to: "/mapa", label: "Mapa Conceitual", justificativa: "Da estrutura linear ao grafo. Ver as conexões que o texto lineariza." },
      { to: "/apresentacao", label: "Apresentação", justificativa: "Retorne ao início com novos olhos. A estrutura recontextualiza a origem." },
    ],
  },
  {
    title: "Conceitos",
    path: "/conceitos",
    conceito: "Lowbyrinth™",
    x: 12, y: 50,
    derivas: [
      { to: "/filme", label: "O Filme", justificativa: "Dos conceitos à imagem. Cada operador analítico se encarna no filme." },
      { to: "/mapa", label: "Mapa Conceitual", justificativa: "Do texto ao grafo. Visualize a constelação teórica em suas conexões." },
      { to: "/conclusao", label: "Conclusão", justificativa: "Dos conceitos ao horizonte. O que estas formulações abrem como possibilidade." },
    ],
  },
  {
    title: "O Filme",
    path: "/filme",
    conceito: "Corpo em deriva",
    x: 18, y: 18,
    derivas: [
      { to: "/coletivo", label: "O Coletivo", justificativa: "Do filme aos corpos. Quem são os que criam juntos." },
      { to: "/conceitos", label: "Conceitos", justificativa: "Da imagem ao conceito. O filme é teoria em ato." },
    ],
  },
  {
    title: "O Coletivo",
    path: "/coletivo",
    conceito: "Processo colaborativo",
    x: 82, y: 82,
    derivas: [
      { to: "/contribuicoes", label: "Contribuições", justificativa: "Do coletivo ao campo. O que a prática coletiva oferece à academia." },
      { to: "/metodologia", label: "Metodologia", justificativa: "Do campo ao método. O coletivo como dispositivo epistemológico." },
    ],
  },
  {
    title: "Contribuições",
    path: "/contribuicoes",
    conceito: "Legado",
    x: 50, y: 88,
    derivas: [
      { to: "/conclusao", label: "Conclusão", justificativa: "Das contribuições ao encerramento — o que permanece aberto." },
      { to: "/faq", label: "Questões", justificativa: "Das contribuições às perguntas — antecipar o que a banca pode indagar." },
    ],
  },
  {
    title: "Questões",
    path: "/faq",
    conceito: "Antecipação",
    x: 18, y: 82,
    derivas: [
      { to: "/conceitos", label: "Conceitos", justificativa: "Das perguntas às definições — cada questão remete a um operador conceitual." },
      { to: "/apresentacao", label: "Apresentação", justificativa: "Das questões à origem — reler o início à luz das dúvidas." },
    ],
  },
  {
    title: "Conclusão",
    path: "/conclusao",
    conceito: "Horizonte",
    x: 50, y: 50,
    derivas: [
      { to: "/apresentacao", label: "Apresentação", justificativa: "Do fim ao início — o labirinto é circular." },
      { to: "/mapa", label: "Mapa Conceitual", justificativa: "Do encerramento à visão total — o mapa revela o que o percurso construiu." },
    ],
  },
];
