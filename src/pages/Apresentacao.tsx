import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const Apresentacao = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Apresentação" subtitle="Contexto, objeto e posicionamento da pesquisa" />

          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
              <p>
                Esta dissertação investiga os processos criativos que compõem o filme{" "}
                <span className="text-primary font-medium">LowMovie™</span>, realizado pelo coletivo de
                artistas-skatistas <span className="text-primary font-medium">LowPressure™</span>,
                analisando como tais dinâmicas colaborativas — marcadas pelo improviso, pelo afeto e pela
                experiência urbana — contribuem para a constituição de uma poética audiovisual em movimento
                vinculada à cultura do skate.
              </p>
              <p>
                A pesquisa opera um deslocamento epistemológico: reposiciona o skate não apenas como fenômeno
                sociocultural, mas como prática estética produtora de linguagem audiovisual situada.
              </p>
            </div>
          </AnimatedSection>

          {/* Pergunta Central */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Pergunta Central
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed italic text-foreground/90 mb-6">
                "Como os processos criativos do LowMovie™, gestados em dinâmica coletiva e implicada,
                contribuem para a constituição de uma poética audiovisual em movimento no campo do cinema
                e das artes do vídeo?"
              </p>
              <div className="border-t border-border/50 pt-6">
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Resposta Sintética
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Os processos criativos do LowMovie™ transformam a experiência corporal do skate em linguagem
                  cinematográfica situada e coletiva, constituindo uma poética audiovisual baseada no instante,
                  na borda e no fluxo.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Lugar de Fala */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6 text-foreground">
              Lugar de Fala — Artista-Pesquisador
            </h3>
            <div className="space-y-4">
              {[
                "A dissertação assume explicitamente a posição de artista-pesquisador.",
                "Não parte de neutralidade externa, mas de implicação situada.",
                "O rigor metodológico é garantido pela reflexividade, pela explicitação do posicionamento e pela articulação consistente com referenciais teóricos da pesquisa-criação.",
                "A prática não substitui o rigor — ela o produz.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <p className="text-foreground/85 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Justificativa */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6 text-foreground">
              Justificativa
            </h3>
            <p className="text-muted-foreground mb-6">
              Apesar do crescimento dos estudos sobre skate no Brasil, predominam abordagens sociológicas e urbanas. Esta pesquisa contribui ao:
            </p>
            <div className="space-y-4">
              {[
                "Analisar o skate como prática estética situada.",
                "Investigar o audiovisual como campo sensível e processual.",
                "Formular operadores conceituais derivados da prática artística.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <p className="text-foreground/85">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Apresentacao;
