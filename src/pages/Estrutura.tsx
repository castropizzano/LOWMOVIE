import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";


const movimentos = [
  {
    
    title: "Corpo em Deriva",
    subtitle: "Operadores Poéticos",
    desc: "Apresento minha trajetória e relação com o filmar, traço uma cartografia da formação estética que me conduz ao skate como campo de criação. Nesse movimento, formulo os conceitos que emergem da prática — poética do instante, estética da borda e registro em fluxo — e orientam a leitura do percurso, articulando experiência, corpo e cidade como eixo de criação.",
    subcapitulos: ["Operadores poéticos do olhar: instante, borda, fluxo", "Corpo-câmera: diálogos teóricos", "Entre vozes"],
  },
  {
    
    title: "Coletivo em Baixo Relevo",
    subtitle: "Ética de Produção",
    desc: "Apresento o LowPressure™ e suas dinâmicas de colaboração, acompanhando como vínculos, ética de produção e modos de pertencimento se organizam no cotidiano do grupo. Discuto sua relação com a cidade, com a arquitetura e com as instituições. Finalizo com a LowZine, como arquivo vivo de imagens, entrevistas e depoimentos que compõem a memória e a linguagem do coletivo.",
    subcapitulos: ["Identidade e ética em movimento", "Cidade como campo de vínculos", "A Zine"],
  },
  {
    
    title: "Obra em Expansão",
    subtitle: "Processos do Filme",
    desc: "Apresento o LowMovie™ desde sua gênese e linhagens criativas, atravessando produção, filmagem, montagem, trilha sonora, design e a construção de um campo simbólico que se torna legível na obra. Analiso a fabulação em cenas e rituais, e examino os modos de estreia, circulação e atravessamentos do filme em diferentes circuitos.",
    subcapitulos: [
      "Gênese e ethos da escuta como método vivo",
      "Linhagem dos vídeos de skate e gramática do meio",
      "Filmagem: corpo-câmera, risco e erro como linguagem",
      "Montagem: artbook e o filme como escrita",
      "Ecologia sensorial: trilha, som, paleta e design",
      "Campo simbólico: Hellraiser, Lowbyrinth™ e semiótica",
      "Cenas e fabulação: improviso como dramaturgia do real",
      "Ritos de estreia: organismo em circulação",
      "Pós-obra: reverberação, continuidade",
    ],
  },
];

const Estrutura = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Estrutura Analítica"
            subtitle="A dissertação se organiza em três movimentos"
          />

          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">
              A dissertação organiza-se em três movimentos analíticos que correspondem, simultaneamente,
              a dimensões distintas do objeto e a níveis progressivos de complexidade conceitual.
              Cada movimento possui autonomia interna, mas articula-se com os demais numa lógica de
              aprofundamento cumulativo: do corpo ao coletivo, do coletivo à obra, da obra ao campo.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3">
            {movimentos.map((mov, i) => (
              <AnimatedSection key={mov.title} delay={0.1 + i * 0.15}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                  
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">{mov.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{mov.subtitle}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-6">{mov.desc}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Subcapítulos
                  </p>
                  <ul className="space-y-2">
                    {mov.subcapitulos.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Considerações Finais */}
          <AnimatedSection delay={0.45} className="mt-16">
             <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30">
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">Considerações: Ecos do Labirinto</h3>
                   <p className="text-sm text-foreground/80 leading-relaxed">
                    Retomam a pergunta de pesquisa, sintetizam os achados e situam as reverberações do percurso,
                    articulando implicações estéticas, políticas e metodológicas que permanecem em movimento.
                  </p>
             </div>
          </AnimatedSection>

          {/* O Portal como Interface de Pesquisa */}
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-4">O Portal como Interface de Pesquisa</h3>
              <div className="space-y-4 text-sm text-foreground/80 leading-relaxed text-justify">
                <p>
                  Este portal funciona como uma arquitetura epistemológica navegável.
                  Não é apenas suporte de apresentação. É parte do dispositivo metodológico da pesquisa.
                </p>
                <p>A estrutura digital organiza a investigação em três níveis simultâneos:</p>
                <ul className="space-y-3 ml-1">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span><span className="font-semibold text-foreground">Nível 1 — Interface sensível:</span> home, estética e navegação. A experiência visual introduz o visitante ao universo poético do projeto.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span><span className="font-semibold text-foreground">Nível 2 — Estrutura conceitual:</span> metodologia, conceitos e organização analítica da pesquisa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                    <span><span className="font-semibold text-foreground">Nível 3 — Documentação viva:</span> filme, coletivo, acervo, entrevistas e mapa conceitual.</span>
                  </li>
                </ul>
                <p>
                  Essa arquitetura transforma o portal em uma interface de pesquisa, onde teoria, criação e
                  documentação coexistem em um sistema navegável. Dissertação, obra e interface digital se conectam
                  no que pode ser compreendido como um dispositivo expandido de pesquisa.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Operadores e Campo Simbólico */}
          <AnimatedSection delay={0.55} className="mt-16">
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
                Operadores e Campo Simbólico
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>
                  Os operadores emergem da prática e retornam a ela. Não são categorias definidas de antemão,
                  mas conceitos formulados a partir da experiência sensível do fazer artístico.
                </p>
                <p>
                  O <span className="text-primary font-semibold">Lowbyrinth™</span> funciona como
                  imagem-conceito e operador simbólico, uma lente imagética que sintetiza o caráter
                  processual, labiríntico e transformador da criação coletiva.
                </p>
                <p>
                  A obra expande-se para além de seus limites formais, abrindo novas
                  relações entre arte, cidade e subcultura. A referência junguiana funciona como lente
                  complementar, não como fundamento estruturante da análise.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/conceitos" label="Conceitos" />
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
