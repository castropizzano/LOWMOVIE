import i18n from "@/i18n";

export interface PalestraBloco {
  id: number;
  slug: string;
  tempoMin: number;
  portalRota: string | null;
  portalLabel: string;
  titulo: { pt: string; en: string };
  oQueE: { pt: string; en: string };
  comoChegueiNisso: { pt: string; en: string };
  ancoras: { pt: string[]; en: string[] };
}

export const BLOCOS: PalestraBloco[] = [
  {
    id: 0,
    slug: "abertura",
    tempoMin: 5,
    portalRota: "/home",
    portalLabel: "Home + Lugar de Fala",
    titulo: {
      pt: "Abertura | quem fala, de onde fala",
      en: "Opening | who speaks, from where",
    },
    oQueE: {
      pt: "Toda pesquisa começa por uma posição. Antes de discutir método, problema ou estado da arte, situa-se o pesquisador no mundo: sua biografia, sua comunidade, suas perguntas vividas. O lugar de fala opera como base epistemológica que sustenta a coerência entre o objeto investigado e o sujeito que investiga.",
      en: "Every research starts from a position. Before discussing method, problem or state of the art, the researcher is situated in the world: biography, community, lived questions. The standpoint operates as the epistemological foundation that sustains coherence between the object investigated and the subject investigating.",
    },
    comoChegueiNisso: {
      pt: "Sou Castro Pizzano, artista visual e pesquisador criativo. Atuo como designer, diretor de arte e fotografia e filmmaker desde 2008 no CasaTreze Studio, coletivo do qual sou fundador, e integro o Coletivo LowPressure™, com quem realizei o filme LowMovie™ (2023). A dissertação nasce de dentro dessas práticas. Essa implicação é o ponto de partida e também o ponto crítico que precisei elaborar metodologicamente.",
      en: "I am Castro Pizzano, visual artist and creative researcher. I work as designer, art and photography director, and filmmaker, active since 2008 at CasaTreze Studio, the collective I founded, and I am part of the LowPressure™ Collective, with whom I made the film LowMovie™ (2023). The dissertation is born from within these practices. This implication is the starting point and also the critical point I had to elaborate methodologically.",
    },
    ancoras: {
      pt: [
        "Mostrar a Home do portal: capa, título, banca, programa",
        "Abrir /apresentacao e ler a seção 'Lugar de Fala' (3 parágrafos)",
        "Definir o tom: pesquisa-criação implicada, não observação distante",
      ],
      en: [
        "Show portal Home: cover, title, committee, program",
        "Open /apresentacao and read 'Lugar de Fala' section (3 paragraphs)",
        "Set the tone: implicated research-creation, not distant observation",
      ],
    },
  },
  {
    id: 1,
    slug: "trajetoria",
    tempoMin: 18,
    portalRota: "/timeline",
    portalLabel: "Timeline Acadêmica (Lattes)",
    titulo: {
      pt: "Trajetória | do chão da rua ao mestrado",
      en: "Trajectory | from the street to the master's degree",
    },
    oQueE: {
      pt: "A trajetória de um pesquisador é o tecido das experiências que produziram suas perguntas, para além de um currículo cronológico. Mapear a própria trajetória ajuda a identificar de onde vêm os interesses de pesquisa: ler-se como sujeito histórico é o primeiro exercício metodológico.",
      en: "A researcher's trajectory is the fabric of experiences that produced the research questions, beyond a chronological CV. Mapping one's own trajectory helps identify where research interests come from: reading oneself as a historical subject is the first methodological exercise.",
    },
    comoChegueiNisso: {
      pt: "Meu percurso atravessa planos entrelaçados: a formação técnica em design gráfico (UTFPR, 1999 a 2001) e a graduação em Publicidade (UTP, concluída em 2010); a fundação do CasaTreze Studio em 2008, coletivo de design e contracultura; a integração ao Coletivo LowPressure™, com quem produzi o filme LowMovie™ (2023); e o ingresso no mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR), defendido em 27 de março de 2026. O encontro entre rua, imagem e universidade se deu de modo espiralado: foi a prática que, ao se acumular, formulou a pergunta acadêmica.",
      en: "My path crosses intertwined planes: technical training in graphic design (UTFPR, 1999 to 2001) and an undergraduate degree in Advertising (UTP, completed in 2010); founding CasaTreze Studio in 2008, a design and counterculture collective; joining the LowPressure™ Collective, with whom I produced the film LowMovie™ (2023); and joining the master's in Cinema and Video Arts (PPG-CINEAV/UNESPAR), defended on March 27, 2026. The encounter between street, image and university unfolded as a spiral: it was practice that, by accumulating, formulated the academic question.",
    },
    ancoras: {
      pt: [
        "Abrir /timeline e navegar pelos filtros do Lattes (publicações, eventos, formação)",
        "Destacar marcos: CasaTreze Studio (2008), entrada no LowPressure™, LowMovie™ (2023), defesa do mestrado (2026)",
        "Conectar com a Introdução do PDF — 'Rastros nas Ruas' (cap. inicial)",
      ],
      en: [
        "Open /timeline and navigate Lattes filters (publications, events, education)",
        "Highlight milestones: CasaTreze Studio (2008), joining LowPressure™, LowMovie™ (2023), master's defense (2026)",
        "Connect with the PDF Introduction — 'Tracks on the Streets' (opening chapter)",
      ],
    },
  },
  {
    id: 2,
    slug: "encontro",
    tempoMin: 8,
    portalRota: "/coletivo",
    portalLabel: "Coletivo LowPressure™",
    titulo: {
      pt: "O encontro | quando a pesquisa me encontrou",
      en: "The encounter | when research found me",
    },
    oQueE: {
      pt: "Há um momento em que a prática vivida começa a pedir teoria. É o objeto que se impõe como questão ao pesquisador. Vale prestar atenção ao que na vida prática insiste em ser pensado academicamente.",
      en: "There is a moment when lived practice begins to demand theory. It is the object that imposes itself as a question to the researcher. It is worth paying attention to what in practical life insists on being thought academically.",
    },
    comoChegueiNisso: {
      pt: "O LowMovie™ (2023) foi o catalisador. Ao montar o filme, fruto do arquivo coletivo do LowPressure™, percebi ali uma poética em movimento que escapava das categorias disponíveis: ocupava um lugar próprio, distinto do documentário etnográfico, da videoarte canônica e do vídeo de skate comercial. Era preciso construir um quadro teórico que desse conta dessa singularidade. A pesquisa de mestrado nasceu desse impasse produtivo.",
      en: "LowMovie™ (2023) was the catalyst. While editing the film, the outcome of the LowPressure™ collective archive, I recognized there a poetics in motion that escaped available categories: it occupied a place of its own, distinct from ethnographic documentary, canonical video art, and commercial skate video. A theoretical framework had to be built to account for this singularity. The master's research was born from this productive impasse.",
    },
    ancoras: {
      pt: [
        "Abrir /coletivo: mostrar LowPressure™ como objeto-sujeito da pesquisa",
        "Abrir /filme: mostrar o LowMovie™ como artefato disparador",
        "Sublinhar: o objeto da pesquisa pré-existia à pesquisa",
      ],
      en: [
        "Open /coletivo: show LowPressure™ as research object-subject",
        "Open /filme: show LowMovie™ as triggering artifact",
        "Underline: the research object pre-existed the research",
      ],
    },
  },
  {
    id: 3,
    slug: "problema",
    tempoMin: 10,
    portalRota: "/apresentacao",
    portalLabel: "Apresentação · Justificativa",
    titulo: {
      pt: "Problema de pesquisa | como contornei",
      en: "Research problem | how I framed it",
    },
    oQueE: {
      pt: "Problema de pesquisa é distinto de tema. Tema é amplo ('skate', 'audiovisual'); problema é a fricção específica entre o que se vive ou observa e o que a literatura já cobre. Formular um problema é delimitar uma lacuna investigável. Essa delimitação dá foco à pesquisa.",
      en: "A research problem is distinct from a topic. Topic is broad ('skateboarding', 'audiovisual'); problem is the specific friction between what is lived or observed and what the literature already covers. Formulating a problem is delimiting an investigable gap. This delimitation gives focus to the research.",
    },
    comoChegueiNisso: {
      pt: "Minha fricção: o Coletivo LowPressure™ produz uma poética audiovisual situada na subcultura do skate que culminou no filme LowMovie™ (2023). Esta produção pede uma leitura acadêmica como pesquisa-criação. Há vasta bibliografia sobre skate (sociologia urbana, estudos culturais), sobre videoarte (estética e teoria do cinema) e sobre coletivos artísticos. O cruzamento específico entre prática implicada, poética coletiva e subcultura urbana audiovisual permanece como território a tematizar. O problema se desenhou então como pergunta de método: como narrar academicamente um processo coletivo, afetivo e implicado, preservando sua integridade?",
      en: "My friction: the LowPressure™ Collective produces an audiovisual poetics situated in skate subculture that culminated in the film LowMovie™ (2023). This production calls for an academic reading as research-creation. There is vast literature on skateboarding (urban sociology, cultural studies), on video art (aesthetics and film theory) and on artistic collectives. The specific crossing between implicated practice, collective poetics and urban audiovisual subculture remains as a territory to be thematized. The problem then took shape as a methodological question: how to academically narrate a collective, affective and implicated process while preserving its integrity?",
    },
    ancoras: {
      pt: [
        "Abrir /apresentacao seção Justificativa: ler os 2 parágrafos",
        "Mostrar o salto: do tema ('skate + vídeo') para o problema ('como narrar sem trair?')",
        "Frisar: o problema se formula contra alguma coisa — uma lacuna ou tensão",
      ],
      en: [
        "Open /apresentacao Justificativa section: read the 2 paragraphs",
        "Show the leap: from topic ('skate + video') to problem ('how to narrate without betraying?')",
        "Stress: a problem is formulated against something — a gap or tension",
      ],
    },
  },
  {
    id: 4,
    slug: "pergunta",
    tempoMin: 5,
    portalRota: "/apresentacao",
    portalLabel: "Apresentação · Pergunta Central",
    titulo: {
      pt: "Pergunta de pesquisa | o enunciado",
      en: "Research question | the statement",
    },
    oQueE: {
      pt: "A pergunta de pesquisa é o problema convertido em sentença interrogativa precisa. Boa pergunta é específica, respondível e implica um método. Uma pergunta delimitada ('como X opera em Y a partir de Z?') sustenta uma dissertação inteira; a precisão da pergunta orienta cada decisão posterior.",
      en: "The research question is the problem converted into a precise interrogative sentence. A good question is specific, answerable, and implies a method. A delimited question ('how does X operate in Y from Z?') sustains an entire dissertation; the precision of the question guides every subsequent decision.",
    },
    comoChegueiNisso: {
      pt: "Cheguei na pergunta central depois de várias reformulações em diálogo com o orientador. A versão final amarra subjetividade (sujeito implicado), subcultura (contexto material) e poética em movimento (objeto estético): os três vetores que estruturam toda a dissertação. Cada palavra da pergunta foi pesada e cumpre função no enunciado.",
      en: "I arrived at the central question after several reformulations in dialogue with my advisor. The final version ties subjectivity (implicated subject), subculture (material context) and poetics in motion (aesthetic object): the three vectors that structure the entire dissertation. Each word of the question was weighed and carries a function in the statement.",
    },
    ancoras: {
      pt: [
        "Abrir /apresentacao bloco 'Pergunta Central': ler o enunciado em voz alta",
        "Decompor a pergunta palavra por palavra com os graduandos",
        "Mostrar a 'Resposta sintética' como horizonte da pesquisa",
      ],
      en: [
        "Open /apresentacao 'Pergunta Central' block: read the statement aloud",
        "Decompose the question word by word with the students",
        "Show the 'Synthetic answer' as the research horizon",
      ],
    },
  },
  {
    id: 5,
    slug: "estado-da-arte",
    tempoMin: 10,
    portalRota: "/conceitos",
    portalLabel: "Conceitos Operadores",
    titulo: {
      pt: "Estado da arte | mapeamento",
      en: "State of the art | mapping",
    },
    oQueE: {
      pt: "Estado da arte é um mapeamento crítico do que já se produziu sobre o seu problema. Ele cumpre duas funções: (a) demonstrar que há literatura suficiente para sustentar uma conversa acadêmica e (b) localizar a lacuna específica que a pesquisa preenche. Com esse mapeamento, a contribuição da pesquisa fica situada no campo.",
      en: "State of the art is a critical mapping of what has been produced on your problem. It serves two functions: (a) demonstrating that there is enough literature to sustain an academic conversation, and (b) locating the specific gap the research fills. With this mapping, the contribution becomes situated within the field.",
    },
    comoChegueiNisso: {
      pt: "Mapeei três campos: (1) teoria do cinema e videoarte, referências para pensar imagem-movimento, montagem e dispositivo; (2) estudos urbanos e subculturais, para situar o skate como prática espacial e identitária; (3) pesquisa-criação como metodologia, autoras e autores que legitimam o praticante-pesquisador. A intersecção dos três campos é onde minha contribuição se aloja. Esses campos viraram, dentro da dissertação, os conceitos operadores: ferramentas teóricas que atravessam o texto inteiro.",
      en: "I mapped three fields: (1) film and video art theory, references to think image-movement, montage and dispositif; (2) urban and subcultural studies, to situate skateboarding as spatial and identity practice; (3) research-creation as methodology, authors who legitimize the practitioner-researcher. The intersection of the three fields is where my contribution sits. These fields became, within the dissertation, the operating concepts: theoretical tools that run through the entire text.",
    },
    ancoras: {
      pt: [
        "Abrir /conceitos: mostrar os 6 conceitos operadores como cristalização do estado da arte",
        "Abrir /mapa: mostrar o grafo de conexões entre conceitos",
        "Como organizar leituras em campos, não em pilhas",
      ],
      en: [
        "Open /conceitos: show the 6 operating concepts as crystallization of the state of the art",
        "Open /mapa: show the graph of concept connections",
        "How to organize readings into fields, not piles",
      ],
    },
  },
  {
    id: 6,
    slug: "objetivos",
    tempoMin: 7,
    portalRota: "/apresentacao",
    portalLabel: "Apresentação · Objetivos",
    titulo: {
      pt: "Objetivos | geral e específicos",
      en: "Objectives | general and specific",
    },
    oQueE: {
      pt: "Objetivos traduzem a pergunta em ações de pesquisa. O objetivo geral responde à pergunta como um todo; os específicos quebram esse todo em etapas verificáveis. Cada objetivo específico tende a corresponder a uma seção ou capítulo, oferecendo critérios concretos para verificar o avanço da pesquisa.",
      en: "Objectives translate the question into research actions. The general objective answers the question as a whole; the specific objectives break this whole into verifiable steps. Each specific objective tends to correspond to a section or chapter, offering concrete criteria to verify the research progress.",
    },
    comoChegueiNisso: {
      pt: "Defini um objetivo geral, analisar a poética em movimento do Coletivo LowPressure™ a partir da pesquisa-criação implicada, e quatro objetivos específicos que se conectam diretamente aos três movimentos da dissertação e à conclusão. Cada um deles é verificável: o leitor consegue apontar, na dissertação, onde cada objetivo foi cumprido.",
      en: "I defined one general objective, to analyze the poetics in motion of the LowPressure™ Collective from implicated research-creation, and four specific objectives that connect directly to the three movements of the dissertation and the conclusion. Each one is verifiable: the reader can point, within the dissertation, where each objective was met.",
    },
    ancoras: {
      pt: [
        "Abrir /apresentacao 'Objetivos Específicos': ler os 4 itens",
        "Mapear cada objetivo específico no sumário da dissertação",
        "Regra prática — um objetivo específico = uma seção",
      ],
      en: [
        "Open /apresentacao 'Objetivos Específicos': read the 4 items",
        "Map each specific objective to the dissertation's table of contents",
        "Practical rule — one specific objective = one section",
      ],
    },
  },
  {
    id: 7,
    slug: "metodologia",
    tempoMin: 15,
    portalRota: "/metodologia",
    portalLabel: "Metodologia · Lowbyrinth™",
    titulo: {
      pt: "Metodologia | Lowbyrinth™ como método",
      en: "Methodology | Lowbyrinth™ as method",
    },
    oQueE: {
      pt: "Metodologia é a explicitação de como o conhecimento foi produzido: que tipo de evidência reconheceu, como coletou, como analisou e em diálogo com qual tradição metodológica. Uma metodologia bem formulada abre caminho para que outra pessoa, em outro contexto, replique ou critique o percurso.",
      en: "Methodology is the explicitation of how knowledge was produced: what kind of evidence you recognized, how you collected, how you analyzed, in dialogue with which methodological tradition. A well-formulated methodology opens the way for another person, in another context, to replicate or criticize the path.",
    },
    comoChegueiNisso: {
      pt: "Adotei a pesquisa-criação implicada como abordagem, estruturada em três eixos (afeto, escuta, improviso) e três procedimentos de campo (vivência situada, convivência criativa, escuta partilhada). Disso emergiu o Lowbyrinth™, método autoral que articula os procedimentos numa espiral cognitiva. O Lowbyrinth™ é, simultaneamente, ferramenta metodológica da dissertação e contribuição autônoma para o campo: pode ser citado e replicado fora deste trabalho específico.",
      en: "I adopted implicated research-creation as approach, structured in three axes (affect, listening, improvisation) and three field procedures (situated experience, creative coexistence, shared listening). From this emerged Lowbyrinth™, an authorial method that articulates the procedures in a cognitive spiral. Lowbyrinth™ is, simultaneously, the dissertation's methodological tool and an autonomous contribution to the field: it can be cited and replicated outside this specific work.",
    },
    ancoras: {
      pt: [
        "Abrir /metodologia: mostrar diagrama concêntrico do Lowbyrinth™",
        "Mostrar Toolkit Pedagógico (PDF) — 3 eixos, 3 procedimentos, 6 verbos de Bloom",
        "Nomeie sua metodologia, ancore em pelo menos um autor metodólogo",
      ],
      en: [
        "Open /metodologia: show concentric Lowbyrinth™ diagram",
        "Show Pedagogical Toolkit (PDF) — 3 axes, 3 procedures, 6 Bloom verbs",
        "Name your methodology, anchor in at least one methodologist",
      ],
    },
  },
  {
    id: 8,
    slug: "estrutura",
    tempoMin: 7,
    portalRota: "/estrutura",
    portalLabel: "Estrutura · 3 Movimentos",
    titulo: {
      pt: "Estrutura da dissertação | três movimentos",
      en: "Dissertation structure | three movements",
    },
    oQueE: {
      pt: "A estrutura da dissertação é o desenho argumentativo do trabalho. Cada capítulo cumpre uma função no argumento global: preparar, sustentar, demonstrar, sintetizar. A ordem dos capítulos é uma decisão retórica, organizada pela lógica da exposição.",
      en: "The dissertation structure is the argumentative design of the work. Each chapter fulfills a function in the global argument: to prepare, sustain, demonstrate, synthesize. Chapter order is a rhetorical decision, organized by the logic of exposition.",
    },
    comoChegueiNisso: {
      pt: "Estruturei a dissertação em três movimentos: Corpo em Deriva (sujeito e operadores poéticos), Coletivo em Baixo Relevo (LowPressure™ como ética e identidade) e o terceiro movimento (LowMovie™ como síntese fílmica), acrescidos da introdução 'Rastros nas Ruas' e das considerações finais. A palavra 'movimento' carrega valor conceitual: traduz a tese metodológica de que o conhecimento se produz em deslocamento.",
      en: "I structured the dissertation in three movements: Body in Drift (subject and poetic operators), Collective in Low Relief (LowPressure™ as ethics and identity), and the third movement (LowMovie™ as filmic synthesis), plus the introduction 'Tracks on the Streets' and final considerations. The word 'movement' carries conceptual value: it translates the methodological thesis that knowledge is produced in displacement.",
    },
    ancoras: {
      pt: [
        "Abrir /estrutura: mostrar os 3 movimentos como cards",
        "Como nomear capítulos para que o título já argumente",
        "Mostrar também 'O Portal como Interface de Pesquisa' (níveis 1-2-3)",
      ],
      en: [
        "Open /estrutura: show the 3 movements as cards",
        "How to name chapters so titles already argue",
        "Show also 'The Portal as Research Interface' (levels 1-2-3)",
      ],
    },
  },
  {
    id: 9,
    slug: "resultados",
    tempoMin: 5,
    portalRota: "/conclusao",
    portalLabel: "Conclusão · Ecossistema",
    titulo: {
      pt: "Resultados, ecossistema e Q&A",
      en: "Results, ecosystem and Q&A",
    },
    oQueE: {
      pt: "Resultados de pesquisa em ciências humanas e artes se expressam como contribuições verificáveis ao campo: conceitos novos, métodos novos, obras novas, leituras críticas inéditas. Apresentar resultados é mostrar exatamente o que passa a existir no mundo a partir da pesquisa.",
      en: "Research results in humanities and arts take the form of verifiable contributions to the field: new concepts, new methods, new works, original critical readings. Presenting results is showing exactly what comes to exist in the world from the research.",
    },
    comoChegueiNisso: {
      pt: "Os resultados deste mestrado se materializam em três camadas articuladas: LowMovie™ (a obra), Lowbyrinth™ (o método) e Low Runner™ (a plataforma replicável que sustenta este portal). Esse ecossistema é, ele mesmo, parte do resultado: a pesquisa segue circulando como obra, como método citável e como infraestrutura reusável. Abro agora para perguntas.",
      en: "The results of this master's materialize in three articulated layers: LowMovie™ (the work), Lowbyrinth™ (the method) and Low Runner™ (the replicable platform that sustains this portal). This ecosystem is itself part of the result: research continues circulating as a work, as a citable method and as reusable infrastructure. I open now for questions.",
    },
    ancoras: {
      pt: [
        "Abrir /conclusao: mostrar Arquivo de Processo",
        "Abrir /ecossistema: mostrar as 3 camadas (obra · método · plataforma)",
        "Abrir para Q&A — espaço de perguntas e diálogo com a audiência",
      ],
      en: [
        "Open /conclusao: show Process Archive",
        "Open /ecossistema: show the 3 layers (work · method · platform)",
        "Open for Q&A — space for questions and dialogue with the audience",
      ],
    },
  },
];

export const getLang = (): "pt" | "en" => {
  const l = i18n.language?.toLowerCase() ?? "pt";
  return l.startsWith("en") ? "en" : "pt";
};