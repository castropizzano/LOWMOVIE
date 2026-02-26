import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Compass, Users, Film, BookOpen } from "lucide-react";

const movimentos = [
  {
    icon: Compass,
    title: "Corpo em Deriva",
    subtitle: "Operadores Poéticos",
    desc: "Apresento minha trajetória e relação com o filmar, traço uma cartografia da formação estética que me conduz ao skate como campo de criação. Nesse movimento, formulo os conceitos que emergem da prática — poética do instante, estética da borda e registro em fluxo — articulando experiência, corpo e cidade como eixo de criação.",
    subcapitulos: ["Operadores poéticos do olhar", "Corpo-câmera: diálogos teóricos", "Entre vozes"],
  },
  {
    icon: Users,
    title: "Coletivo em Baixo Relevo",
    subtitle: "Ética de Produção",
    desc: "Apresento o LowPressure™ e suas dinâmicas de colaboração, examino os modos de decisão, as formas de autoria compartilhada e as estratégias de circulação. Discuto sua relação com a cidade, com a arquitetura e com as instituições. Finalizo com a LowZine como arquivo vivo de imagens, entrevistas e depoimentos.",
    subcapitulos: ["Identidade e ética em movimento", "Cidade como campo de vínculos", "A Zine como arquivo"],
  },
  {
    icon: Film,
    title: "Obra em Expansão",
    subtitle: "Processos do Filme",
    desc: "Apresento o LowMovie™ desde sua gênese e linhagens criativas, atravessando produção, filmagem, montagem, trilha sonora, design e a construção de um campo simbólico. Analiso a fabulação em cenas e rituais, e examino os modos de estreia, circulação e atravessamentos.",
    subcapitulos: [
      "Gênese e linhagem dos vídeos de skate",
      "Filmagem como corpo-câmera",
      "Montagem e glitch",
      "Ecologia sensorial (trilha, paleta, design)",
      "Campo simbólico e Lowbyrinth™",
      "Cenas, fabulação e rituais",
      "Ritos de estreia e circulação",
      "Pós-obra e reverberações",
    ],
  },
];

const Estrutura = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle
            title="Estrutura Analítica"
            subtitle="A dissertação se organiza em três movimentos"
          />

          <AnimatedSection delay={0.05}>
            <p className="max-w-3xl text-base text-foreground/80 leading-relaxed text-justify mb-16">
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
                  <mov.icon className="h-8 w-8 text-primary/60 mb-5" />
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">{mov.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">{mov.subtitle}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">{mov.desc}</p>
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
              <div className="flex items-start gap-4">
                <BookOpen className="h-7 w-7 text-primary/60 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-1">Considerações Finais</h3>
                   <p className="text-sm text-foreground/80 leading-relaxed">
                    As considerações finais situam as reverberações da investigação no campo do cinema e das
                    artes do vídeo — não como encerramento, mas como abertura para as continuidades que a
                    pesquisa projeta.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Operadores e Campo Simbólico */}
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
                Operadores e Campo Simbólico
              </h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>
                  Os operadores emergem da prática e retornam a ela. Não são categorias apriorísticas,
                  mas conceitos formulados a partir da experiência sensível do fazer artístico.
                </p>
                <p>
                  O <span className="text-primary font-semibold">Lowbyrinth™</span> funciona como
                  imagem-conceito e operador simbólico — uma lente imagética que sintetiza o caráter
                  processual, labiríntico e transformador da criação coletiva.
                </p>
                <p>
                  A obra expande-se para além de seus limites formais, operando como catalisador de novas
                  relações entre arte, cidade e subcultura. A referência junguiana opera como lente
                  complementar, não como fundamento estruturante da análise.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
