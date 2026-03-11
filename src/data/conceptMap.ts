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
  { id: "campo-processo", label: "Processo colaborativo", type: "campo", description: "Criação coletiva como experiência, não método, mas processo." },
  { id: "campo-cinema", label: "Corpo-câmera", type: "campo", description: "Fusão entre performer e dispositivo de registro: corpo e câmera como entidade única em ato." },

  // Autores
  { id: "borden", label: "Iain Borden", type: "autor", description: "Skate como reconfiguração espacial: o skate lê e reinscreve a cidade, ativando espaços como superfícies de criação." },
  { id: "mcduie-ra", label: "McDuie-Ra", type: "autor", description: "Subcultura e territorialidade. 'Archiving from below', arquivo não-oficial e ângulo de captura 'from below the knees'." },
  { id: "bourriaud", label: "Nicolas Bourriaud", type: "autor", description: "A obra de arte como interstício social que sugere outras possibilidades de troca." },
  { id: "hall", label: "Stuart Hall", type: "autor", description: "Identidade cultural como produção processual, nunca completa." },
  { id: "abreu", label: "Luis A. de Abreu", type: "autor", description: "Processo colaborativo como experiência criativa coletiva, não método, mas processo." },
  { id: "coessens", label: "Coessens / Pimentel", type: "autor", description: "Corpo como produção de conhecimento: toda ação praticada modifica quem a pratica." },
  { id: "delpeux", label: "Delpeux", type: "autor", description: "Fusão sensível entre corpo do performer e dispositivo de registro: entidade única em ato." },
  { id: "rouch", label: "Rouch / Deren", type: "autor", description: "Rouch e o cine-transe. Deren e a dança como cinema. Fabulação como gesto de criação do real." },
  { id: "deleuze", label: "Deleuze", type: "autor", description: "Fabulação: não invenção ficcional, mas gesto de criação do real a partir do cotidiano." },
  { id: "certeau", label: "Michel de Certeau", type: "autor", description: "Táticas e estratégias: reinvenção cotidiana do espaço pela prática ordinária." },
  { id: "lefebvre", label: "Henri Lefebvre", type: "autor", description: "Produção social do espaço: o espaço urbano como produto e produtor de relações." },

  // Conceitos autorais
  { id: "lowbyrinth", label: "Lowbyrinth™", type: "conceito", description: "Imagem-conceito do caráter processual, não-linear e labiríntico da criação. O labirinto não tem saída: a obra é o percurso." },
  { id: "poetica", label: "Poética do instante", type: "conceito", description: "Captura do gesto efêmero como condensação sensível do real. Corpo, espaço, luz e câmera convergem numa configuração irrepetível." },
  { id: "estetica-borda", label: "Estética da borda", type: "conceito", description: "Linguagem entre controle e acaso. A borda do skate, do enquadramento e entre arte e vida." },
  { id: "registro-fluxo", label: "Registro em fluxo", type: "conceito", description: "Câmera como extensão do corpo em movimento. A imagem não representa o movimento: ela é movimento." },
  { id: "fabulacao", label: "Fabulação", type: "conceito", description: "A partir de Deleuze: gesto de criação do real, produzindo outras percepções a partir do cotidiano." },
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
