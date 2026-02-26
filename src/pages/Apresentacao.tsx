import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const Apresentacao = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Apresentação" subtitle="Contexto e objeto da pesquisa" />

          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
              <p>
                Esta dissertação investiga os processos criativos que compõem o filme{" "}
                <span className="text-primary font-medium">LowMovie™</span>, realizado pelo coletivo de
                artistas-skatistas <span className="text-secondary font-medium">LowPressure™</span>,
                analisando como tais dinâmicas colaborativas contribuem para a constituição de uma poética
                audiovisual em movimento vinculada à experiência urbana do skate.
              </p>
              <p>
                A pesquisa desloca o skate de abordagens predominantemente sociológicas para uma análise
                estética e metodológica situada no campo do cinema e das artes do vídeo.
              </p>
            </div>
          </AnimatedSection>

          {/* Problema de pesquisa */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="border border-primary/30 rounded-lg p-8 md:p-10 border-glow bg-card/50">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Problema de Pesquisa
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed italic text-foreground/90">
                "Como os processos criativos do LowMovie™, gestados em dinâmica coletiva e rizomática,
                contribuem para a constituição de uma poética audiovisual em movimento vinculada à
                experiência urbana do skate?"
              </p>
            </div>
          </AnimatedSection>

          {/* Justificativa */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6 text-foreground">
              Justificativa
            </h3>
            <p className="text-muted-foreground mb-6">
              Embora os estudos sobre skate no Brasil estejam em expansão, ainda há lacunas quanto à
              análise de sua dimensão estética e audiovisual. A dissertação contribui ao:
            </p>
            <div className="space-y-4">
              {[
                "Investigar o skate como prática estética.",
                "Analisar o audiovisual como campo sensível.",
                "Propor operadores conceituais oriundos da prática artística.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 h-2 w-2 rounded-full gradient-primary shrink-0" />
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
