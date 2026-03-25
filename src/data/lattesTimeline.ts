export type TimelineCategory =
  | "formacao"
  | "mestrado"
  | "profissional"
  | "publicacao"
  | "producao"
  | "evento"
  | "banca"
  | "artistica";

export interface TimelineEntry {
  year: number;
  yearEnd?: number;
  category: TimelineCategory;
  title: string;
  subtitle?: string;
  institution?: string;
  status?: string;
}

export const resumoCV =
  "Mestrando do Programa de Pós-Graduação Mestrado Acadêmico em Cinema e Artes do Vídeo (PPG-CINEAV) da Universidade Estadual do Paraná (Unespar), campus de Curitiba II/Faculdade de Artes do Paraná (FAP), vinculado à linha de pesquisa (2) Processos de Criação no Cinema e nas Artes do Vídeo. Membro do Grupo de Pesquisa CineCriare — Cinema: Criação e Reflexão (Unespar/PPG-CINEAV/CNPq). Graduado em Comunicação Social — Publicidade e Propaganda pela Universidade Tuiuti do Paraná (2010). Pós-graduado em Direção de Arte e Estratégias Criativas pelo Centro Universitário Curitiba (2016). Atua nas áreas de Artes, Cinema, Design, Comunicação e Educação.";

export const areas = [
  "Artes",
  "Cinema",
  "Design Gráfico",
  "Comunicação",
  "Educação",
  "Publicidade e Propaganda",
];

export const idiomas = [
  { nome: "Português", nivel: "Nativo" },
  { nome: "Espanhol", nivel: "Intermediário" },
  { nome: "Inglês", nivel: "Intermediário" },
];

export const timelineEntries: TimelineEntry[] = [
  // ═══════════ FORMAÇÃO ═══════════
  {
    year: 1999,
    yearEnd: 2001,
    category: "formacao",
    title: "Técnico em Design Gráfico e Web Design",
    institution: "Universidade Tecnológica Federal do Paraná (UTFPR)",
    status: "Concluído",
  },
  {
    year: 2002,
    yearEnd: 2005,
    category: "formacao",
    title: "Comunicação Social — Publicidade e Propaganda",
    institution: "Universidade Positivo",
    status: "Incompleto",
  },
  {
    year: 2004,
    yearEnd: 2008,
    category: "formacao",
    title: "Direção Cinematográfica",
    institution: "Academia Internacional de Cinema (AIC)",
    status: "Concluído",
  },
  {
    year: 2005,
    yearEnd: 2010,
    category: "formacao",
    title: "Comunicação Social — Publicidade e Propaganda",
    subtitle: "TCC: Sabre Vision: Experimentação, Criatividade e Posicionamento Contracultural",
    institution: "Universidade Tuiuti do Paraná (UTP)",
    status: "Concluído",
  },
  {
    year: 2006,
    yearEnd: 2007,
    category: "formacao",
    title: "EJA — Princípios e Ações para o Educador",
    institution: "Centro de Educação de Jovens e Adultos",
    status: "Concluído",
  },
  {
    year: 2008,
    yearEnd: 2009,
    category: "formacao",
    title: "Técnico em Design Gráfico",
    institution: "Adobe Center Brasil — ENG DTP & Multimídia",
    status: "Concluído",
  },
  {
    year: 2009,
    yearEnd: 2010,
    category: "formacao",
    title: "Creative Design 5.0",
    institution: "Lemon School",
    status: "Concluído",
  },
  {
    year: 2010,
    yearEnd: 2012,
    category: "formacao",
    title: "Gestão da Comunicação OnLine, Marketing Digital e Publicidade na Internet",
    institution: "Universidade Tuiuti do Paraná (UTP)",
    status: "Incompleto",
  },
  {
    year: 2014,
    yearEnd: 2016,
    category: "formacao",
    title: "Direção de Arte e Estratégias Criativas",
    subtitle: "Monografia: CasaTreze Studio: A Importância do Empreendedorismo sob a ótica do Design Colaborativo e a Contracultura",
    institution: "Centro Universitário Curitiba (UniCuritiba)",
    status: "Concluído",
  },

  // ═══════════ MESTRADO ═══════════
  {
    year: 2024,
    category: "mestrado",
    title: "Mestrado em Cinema e Artes do Vídeo",
    subtitle: "LowMovie™ — Subjetividade, Subcultura e a Poética em Movimento do Coletivo LowPressure™",
    institution: "Universidade Estadual do Paraná (UNESPAR) — PPG-CINEAV",
    status: "Em andamento",
  },

  // ═══════════ ATUAÇÃO PROFISSIONAL ═══════════
  {
    year: 2003,
    yearEnd: 2004,
    category: "profissional",
    title: "Estágio Audiovisual",
    institution: "Yurk TV&Vídeo",
  },
  {
    year: 2004,
    yearEnd: 2007,
    category: "profissional",
    title: "Designer Gráfico",
    institution: "Editora Educarte",
  },
  {
    year: 2006,
    yearEnd: 2012,
    category: "profissional",
    title: "Designer Gráfico",
    institution: "Ação Real OSCIP",
  },
  {
    year: 2007,
    yearEnd: 2008,
    category: "profissional",
    title: "Designer Gráfico",
    institution: "Personaliza Comunicação",
  },
  {
    year: 2008,
    yearEnd: 2009,
    category: "profissional",
    title: "Designer Gráfico",
    institution: "Bematech",
  },
  {
    year: 2008,
    category: "profissional",
    title: "Fundador, Diretor de Arte e VideoMaker",
    institution: "CasaTreze Studio",
    status: "Atual",
  },
  {
    year: 2009,
    yearEnd: 2011,
    category: "profissional",
    title: "Designer Gráfico e Diretor de Arte",
    institution: "Sabre Vision",
  },
  {
    year: 2010,
    yearEnd: 2018,
    category: "profissional",
    title: "Designer Gráfico e Diretor de Arte",
    institution: "RadioTreze",
  },
  {
    year: 2011,
    yearEnd: 2013,
    category: "profissional",
    title: "Designer Gráfico e Diretor de Arte",
    institution: "Fortune Skateboards",
  },
  {
    year: 2011,
    yearEnd: 2013,
    category: "profissional",
    title: "Designer Gráfico e Diretor de Arte",
    institution: "GoSkateDay",
  },
  {
    year: 2012,
    yearEnd: 2013,
    category: "profissional",
    title: "Designer Gráfico e Diretor de Arte",
    institution: "Kronik Skateboards",
  },
  {
    year: 2017,
    yearEnd: 2020,
    category: "profissional",
    title: "Professor de Economia Criativa",
    institution: "Universidade Positivo",
  },
  {
    year: 2018,
    yearEnd: 2020,
    category: "profissional",
    title: "Designer Gráfico, Dir. de Arte e VideoMaker",
    institution: "AnotherOther",
  },
  {
    year: 2018,
    yearEnd: 2020,
    category: "profissional",
    title: "Colaborador Criativo",
    institution: "Grimpa Criativa",
  },
  {
    year: 2018,
    category: "profissional",
    title: "Designer Gráfico e VideoMaker",
    institution: "TNews",
    status: "Atual",
  },
  {
    year: 2020,
    yearEnd: 2022,
    category: "profissional",
    title: "Artista Visual, Designer Gráfico e VideoMaker",
    institution: "HUS Overall",
  },
  {
    year: 2020,
    category: "profissional",
    title: "Artista Visual, Designer Gráfico e VideoMaker",
    institution: "LowPressure Skate",
    status: "Atual",
  },
  {
    year: 2021,
    yearEnd: 2022,
    category: "profissional",
    title: "Designer Gráfico e Facilitador",
    institution: "SkateCreateSchool",
  },
  {
    year: 2025,
    category: "profissional",
    title: "Professor de Branding e Produção Audiovisual",
    institution: "Instituto Superior do Litoral do Paraná (ISULPAR)",
  },

  // ═══════════ PUBLICAÇÕES (Artigos) ═══════════
  {
    year: 2014,
    category: "publicacao",
    title: "CasaTreze Studio: A Importância do Empreendedorismo sob a ótica do Design Colaborativo e a Contracultura",
    subtitle: "Revista Percurso (Curitiba)",
    institution: "Autores: Castro Pizzano, Arabella Natal Galvão da Silva",
  },
  {
    year: 2025,
    category: "publicacao",
    title: "A Arte de Contar: As Tessituras Entre Narrativa e Jornalismo a Partir do Conceito de Tríplice Mimese",
    subtitle: "Harpia — Revista de Divulgação Científica e Cultural do ISULPAR",
    institution: "Autores: Castro Pizzano, Fabiana Pelinson",
  },

  // ═══════════ PUBLICAÇÕES (Livros / Outras) ═══════════
  {
    year: 2017,
    category: "publicacao",
    title: "Oriki — Salvador, a Terra onde tudo começou",
    subtitle: "Projeto Gráfico · Editora Posigraf",
    institution: "Autores: Vinicius Ferreira, Castro Pizzano",
  },
  {
    year: 2018,
    category: "publicacao",
    title: "Acid Neon — Narrativas de Um Futuro Próximo",
    subtitle: "Produção Independente / Organização · CasaTreze / Coverge",
    institution: "Autores: Washington Albuquerque, Hezi Santos, Castro Pizzano",
  },
  {
    year: 2019,
    category: "publicacao",
    title: "Carcoma — Sutileza Atroz",
    subtitle: "Produção Independente / Organização · CasaTreze / Coverge",
    institution: "Autores: Washington Albuquerque, Hezi Santos, Castro Pizzano",
  },
  {
    year: 2019,
    category: "publicacao",
    title: "Mirage — Miscelânea de Narrativas Irreais",
    subtitle: "Produção Independente / Organização · CasaTreze / Coverge",
    institution: "Autores: Washington Albuquerque, Hezi Santos, Castro Pizzano",
  },

  // ═══════════ PRODUÇÕES TÉCNICAS (Software) ═══════════
  {
    year: 2025,
    category: "producao",
    title: "THEVØIDN13 — Shadow Interface Bible",
    subtitle: "Software / Plataforma Digital",
  },
  {
    year: 2025,
    category: "producao",
    title: "NYX-POST-PORN: Corpo Expandido",
    subtitle: "Software / Plataforma Digital",
  },
  {
    year: 2026,
    category: "producao",
    title: "LowMovie — Processos de Criação no Cinema e nas Artes do Vídeo",
    subtitle: "Software / Portal Acadêmico",
  },

  // ═══════════ PRODUÇÕES TÉCNICAS (Marcas) ═══════════
  {
    year: 2017,
    category: "producao",
    title: "CasaTreze Studio — Registro de Marca",
    subtitle: "Marca Registrada",
  },

  // ═══════════ PRODUÇÕES TÉCNICAS (Trabalhos) ═══════════
  {
    year: 2024,
    category: "producao",
    title: "Projeto Gráfico e Diagramação do livro infantil-juvenil 'Nuvem no céu da cor de papel'",
    subtitle: "Trabalho Técnico",
  },
  {
    year: 2024,
    category: "producao",
    title: "Projeto Gráfico e Diagramação do livro infantil-juvenil 'Cavaleiros Malucos e Outras Histórias'",
    subtitle: "Trabalho Técnico",
  },

  // ═══════════ PRODUÇÕES TÉCNICAS (Demais) ═══════════
  {
    year: 2025,
    category: "producao",
    title: "Aula/Palestra e Oficina: Processos de Criação e Subcultura do Skateboard na disciplina 'Cinema e Outras Artes'",
    subtitle: "Curso de Curta Duração Ministrado",
  },
  {
    year: 2014,
    category: "producao",
    title: "PixelShow",
    subtitle: "Organização de Evento",
  },
  {
    year: 2015,
    category: "producao",
    title: "Oficina Grafitti na Escola",
    subtitle: "Organização de Evento",
  },
  {
    year: 2014,
    category: "producao",
    title: "Oficina Tacando Tinta",
    subtitle: "Organização de Evento",
  },
  {
    year: 2012,
    category: "producao",
    title: "Oficina Grafitti na Escola",
    subtitle: "Organização de Evento",
  },
  {
    year: 2025,
    category: "producao",
    title: "Coordenação de Cobertura Midiática do Trote Solidário Universitário (ISULPAR/UNESPAR)",
    subtitle: "Coordenação de Cobertura Midiática",
  },
  {
    year: 2025,
    category: "producao",
    title: "Participação em Entrevista — TCC: O 'Novo' Design: Proposta de Reconstrução Coletiva da Identidade do Designer Curitibano",
    subtitle: "Entrevista / Colaboração Técnica",
  },
  {
    year: 2025,
    category: "producao",
    title: "Workshop de Cocriação — TCC: O 'Novo' Design: Proposta de Reconstrução Coletiva da Identidade do Designer Curitibano",
    subtitle: "Workshop de Cocriação / Colaboração Técnica",
  },
  {
    year: 2025,
    category: "producao",
    title: "Participação em Entrevista — TCC: Projeto Designe-se (UP)",
    subtitle: "Entrevista / Colaboração Técnica",
  },

  // ═══════════ PRODUÇÃO ARTÍSTICA / CULTURAL ═══════════
  {
    year: 2015,
    category: "artistica",
    title: "Corpo Material",
    subtitle: "Produção Independente",
  },
  {
    year: 2016,
    category: "artistica",
    title: "UDNFS — Universo em Desconstrução, Nostalgia e Futuro do Skate",
    subtitle: "Produção Independente",
  },
  {
    year: 2018,
    category: "artistica",
    title: "CuriTown — A Cultura do Skate em Curitiba",
    subtitle: "Produção Independente",
  },
  {
    year: 2025,
    category: "artistica",
    title: "Grande Mar Redondo",
    subtitle: "Documentário",
  },
  {
    year: 2014,
    category: "artistica",
    title: "Descasca — Mostra Coletiva Independente",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2015,
    category: "artistica",
    title: "Descasca — Mostra Coletiva Independente",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2016,
    category: "artistica",
    title: "Rizoma — Mostra MultiCultural",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2016,
    category: "artistica",
    title: "RDTRZ Prove — Festival Multicultural",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2017,
    category: "artistica",
    title: "Apamonama — Iasy x Kuarasy",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2018,
    category: "artistica",
    title: "Subtropikal — Festival de Criatividade Urbana",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2018,
    category: "artistica",
    title: "Musicletada — Festival MultiCultural",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2019,
    category: "artistica",
    title: "Subtropikal — Festival de Criatividade Urbana",
    subtitle: "Intervenção Urbana / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Nyx-Post-Porn",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Mãe Natureza",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Minhas Vozes Minhas (Depressed)",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Alarvice",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Xirê Urbano",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Bakuli",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "AnimaMundi",
    subtitle: "Vídeo / Artes Visuais",
  },
  {
    year: 2024,
    category: "artistica",
    title: "Anima",
    subtitle: "Vídeo / Artes Visuais",
  },

  // ═══════════ BANCAS ═══════════
  {
    year: 2025,
    category: "banca",
    title: "Banca de Graduação: Designe-se: a arte entre páginas",
    subtitle: "Universidade Positivo — Design Gráfico",
    institution: "Membros: Najla Santana Hishmeh, Michelle P. A. Camargo, Castro Pizzano",
  },
  {
    year: 2025,
    category: "banca",
    title: "Banca de Graduação: Coletivo des/ruptiva: a conexão brasileira como práxis para a articulação de um 'novo' design",
    subtitle: "Universidade Positivo — Design Gráfico",
    institution: "Membros: Michelle P. A. Camargo, Rafael de Castro Andrade, Castro Pizzano",
  },
  {
    year: 2018,
    category: "banca",
    title: "Banca Julgadora: Plano de Negócios — Doce Jasmim",
    subtitle: "Universidade Positivo",
  },
  {
    year: 2018,
    category: "banca",
    title: "Banca Julgadora: A Interferência entre a AutoEstima e o Estilo — Quebra de Paradigmas: Corpo x Moda",
    subtitle: "Universidade Positivo",
  },

  // ═══════════ EVENTOS / CONGRESSOS ═══════════
  {
    year: 2013,
    category: "evento",
    title: "ZAP Comunicação",
    subtitle: "Seminário · UTP",
  },
  {
    year: 2014,
    category: "evento",
    title: "Design Revolucionário e Modelos de Gestão",
    subtitle: "Seminário · UP — R/Evolução",
  },
  {
    year: 2015,
    category: "evento",
    title: "Olhar em Movimento: Mostra sobre Projetos Fotográficos e Documentários",
    subtitle: "Congresso · Festival de Design — Semana D",
  },
  {
    year: 2016,
    category: "evento",
    title: "Oficina de Produção Audiovisual / UDNFS",
    subtitle: "Oficina · UDNFS — Universo em Desconstrução, Nostalgia e Futuro do Skate",
  },
  {
    year: 2018,
    category: "evento",
    title: "Subli_me / Talks: Como a Arte e a Tecnologia se desenvolvem na Educação e na Economia Criativa",
    subtitle: "Congresso · Subli_me / The Wrong — New Digital Art Biennale",
  },
  {
    year: 2018,
    category: "evento",
    title: "Criação Audiovisual para Plataformas Digitais",
    subtitle: "Seminário · UTP — Bastidores da Profissão",
  },
  {
    year: 2018,
    category: "evento",
    title: "Oficina de Produção Audiovisual / Antítese",
    subtitle: "Oficina · CuriTown: A Cultura do Skate em Curitiba",
  },
  {
    year: 2018,
    category: "evento",
    title: "Empreendedorismo Criativo",
    subtitle: "Encontro · Espaço Sintonia",
  },
  {
    year: 2018,
    category: "evento",
    title: "Empreendedores Transgressores",
    subtitle: "Encontro · Aldeia CC",
  },
  {
    year: 2018,
    category: "evento",
    title: "Destrava CWB",
    subtitle: "Encontro · Aldeia CC",
  },
  {
    year: 2019,
    category: "evento",
    title: "Economia Criativa: Comunicação Através do Capital Intelectual",
    subtitle: "Seminário · UFPR — Jornada da Comunicação Institucional",
  },
  {
    year: 2019,
    category: "evento",
    title: "Destrava Awards",
    subtitle: "Encontro · Aldeia CC",
  },
  {
    year: 2019,
    category: "evento",
    title: "Economia Criativa e Empreendedorismo",
    subtitle: "Encontro · PUCPR — Empreendedorismo para Publicidade",
  },
  {
    year: 2025,
    category: "evento",
    title: "Métodos Comparatistas para Pesquisa em Cinema e Audiovisual",
    subtitle: "Participação em Evento Acadêmico",
  },
  {
    year: 2026,
    category: "evento",
    title: "Interações da Crítica de Processo no Cinema e nas Artes do Vídeo",
    subtitle: "Participação em Evento Acadêmico",
  },
].sort((a, b) => a.year - b.year);

export const categoryLabels: Record<TimelineCategory, { pt: string; en: string }> = {
  formacao: { pt: "Formação", en: "Education" },
  mestrado: { pt: "Mestrado", en: "Master's" },
  profissional: { pt: "Atuação Profissional", en: "Professional" },
  publicacao: { pt: "Publicações", en: "Publications" },
  producao: { pt: "Produções Técnicas", en: "Technical Productions" },
  evento: { pt: "Eventos", en: "Events" },
  banca: { pt: "Bancas", en: "Examination Boards" },
  artistica: { pt: "Produção Artística", en: "Artistic Production" },
};

export const categoryColors: Record<TimelineCategory, string> = {
  formacao: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  mestrado: "bg-primary/20 text-primary border-primary/30",
  profissional: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  publicacao: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  producao: "bg-violet-500/20 text-violet-400 border-violet-500/30",
  evento: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  banca: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  artistica: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export const categoryDotColors: Record<TimelineCategory, string> = {
  formacao: "bg-blue-500",
  mestrado: "bg-primary",
  profissional: "bg-emerald-500",
  publicacao: "bg-amber-500",
  producao: "bg-violet-500",
  evento: "bg-rose-500",
  banca: "bg-cyan-500",
  artistica: "bg-orange-500",
};
