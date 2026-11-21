export type NodeType = "conceito" | "autor" | "campo";

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  description: string;
}

export interface GraphEdge {
  source: string;
  target: string;
}

export const nodes: GraphNode[] = [
  // Campos temáticos
  { id: "campo-urbano", label: "Skate e cidade", type: "campo", description: "Skate como reinscrição urbana: o corpo relê e reconfigura o espaço construído." },
  { id: "campo-estetica", label: "Estética relacional", type: "campo", description: "A obra como interstício social, espaço de relações humanas e outras possibilidades de troca." },
  { id: "campo-processo", label: "Processo colaborativo", type: "campo", description: "Processo colaborativo: propostas em debate e transformação, com negociação das escolhas." },
  { id: "campo-cinema", label: "Corpo-câmera", type: "campo", description: "Leituras sobre corpo, câmera, participação e fabulação, mobilizadas em situações do filme." },

  // Autores
  { id: "borden", label: "Iain Borden", type: "autor", description: "Skate como reconfiguração espacial: o skate lê e reinscreve a cidade, ativando espaços como superfícies de criação." },
  { id: "mcduie-ra", label: "McDuie-Ra", type: "autor", description: "Subcultura e territorialidade. 'Archiving from below', arquivo não-oficial e ângulo de captura 'from below the knees'." },
  { id: "bourriaud", label: "Nicolas Bourriaud", type: "autor", description: "A obra de arte como interstício social que sugere outras possibilidades de troca." },
  { id: "hall", label: "Stuart Hall", type: "autor", description: "Identidade cultural como produção processual, nunca completa." },
  { id: "abreu", label: "Luis A. de Abreu", type: "autor", description: "Paráfrase de Abreu (2004): debate de propostas em uma arena comum, preservando responsabilidades pelas contribuições." },
  { id: "coessens", label: "Coessens / Pimentel", type: "autor", description: "Paráfrase de Coessens, Pimentel e Moriceau: prática artística, reflexão e implicação, com atenção à posição de quem pesquisa." },
  { id: "delpeux", label: "Delpeux", type: "autor", description: "Corpo-câmera: noção de Catherine Perret, discutida por Sophie Delpeux (2018), para pensar dispositivo e movimento de quem filma." },
  { id: "rouch", label: "Rouch / Deren", type: "autor", description: "Rouch e o cine-transe. Deren e a dança como cinema. Fabulação como gesto de criação do real." },
  { id: "deleuze", label: "Deleuze", type: "autor", description: "Interlocução com Deleuze: fabulação, elaboração do vivido e possibilidades de percepção abertas pelas encenações." },
  { id: "certeau", label: "Michel de Certeau", type: "autor", description: "Táticas e estratégias: reinvenção cotidiana do espaço pela prática ordinária." },
  { id: "lefebvre", label: "Henri Lefebvre", type: "autor", description: "Produção social do espaço: o espaço urbano como produto e produtor de relações." },

  // Conceitos autorais
  { id: "lowbyrinth", label: "Lowbyrinth™", type: "conceito", description: "Imagem-conceito do caráter processual, não-linear e labiríntico da criação. O labirinto não tem saída: a obra é o percurso." },
  { id: "poetica", label: "Poética do instante", type: "conceito", description: "Operador temporal que nomeia decisões situadas no encontro entre corpo, espaço, luz, risco e câmera. O quase-acerto, a quase-queda e o gesto em formação tornam perceptível uma decisão que acontece junto ao movimento." },
  { id: "estetica-borda", label: "Estética da borda", type: "conceito", description: "Operador espacial e político que começa nas quinas, nos buracos, nas imperfeições e nas superfícies que resistem ao corpo. Permite compreender negociações entre usos previstos, interdições e passagens inventadas pelo skate." },
  { id: "registro-fluxo", label: "Registro em fluxo", type: "conceito", description: "Operador relacional e metodológico do filmar implicado, em que câmera, corpo e acontecimento se influenciam. Distância, velocidade, enquadramento e duração são negociados na participação de quem filma." },
  { id: "fabulacao", label: "Fabulação", type: "conceito", description: "Interlocução com Deleuze para ler a elaboração do vivido e as encenações da crew." },
  { id: "afeto", label: "Afeto como eixo", type: "conceito", description: "Implicação sensível como operador epistemológico. Vínculo afetivo como instrumento de conhecimento." },
];

export const edges: GraphEdge[] = [
  // Campos → Autores
  { source: "campo-urbano", target: "borden" },
  { source: "campo-urbano", target: "mcduie-ra" },
  { source: "campo-urbano", target: "certeau" },
  { source: "campo-urbano", target: "lefebvre" },
  { source: "campo-estetica", target: "bourriaud" },
  { source: "campo-estetica", target: "hall" },
  { source: "campo-processo", target: "abreu" },
  { source: "campo-processo", target: "coessens" },
  { source: "campo-cinema", target: "delpeux" },
  { source: "campo-cinema", target: "rouch" },

  // Autores → Conceitos
  { source: "borden", target: "estetica-borda" },
  { source: "borden", target: "registro-fluxo" },
  { source: "mcduie-ra", target: "lowbyrinth" },
  { source: "bourriaud", target: "afeto" },
  { source: "hall", target: "lowbyrinth" },
  { source: "abreu", target: "afeto" },
  { source: "coessens", target: "poetica" },
  { source: "delpeux", target: "registro-fluxo" },
  { source: "rouch", target: "fabulacao" },
  { source: "rouch", target: "poetica" },
  { source: "deleuze", target: "fabulacao" },
  { source: "deleuze", target: "lowbyrinth" },
  { source: "certeau", target: "estetica-borda" },
  { source: "lefebvre", target: "lowbyrinth" },

  // Conceitos entre si
  { source: "poetica", target: "estetica-borda" },
  { source: "registro-fluxo", target: "poetica" },
  { source: "estetica-borda", target: "lowbyrinth" },
  { source: "afeto", target: "fabulacao" },
  { source: "registro-fluxo", target: "estetica-borda" },
];

export const typeColors: Record<NodeType, string> = {
  conceito: "hsl(280, 60%, 68%)",   // orchid magenta — protagonists
  autor:    "hsl(230, 50%, 62%)",   // periwinkle indigo
  campo:    "hsl(340, 55%, 60%)",   // warm rose-pink
};

export const typeLabels: Record<NodeType, string> = {
  conceito: "Conceito autoral",
  autor: "Autor / Referência",
  campo: "Campo temático",
};
