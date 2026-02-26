import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Ear, Zap } from "lucide-react";

const eixos = [
  { icon: Heart, title: "Afeto", desc: "Engajamento sensível e implicado com o campo de pesquisa." },
  { icon: Ear, title: "Escuta", desc: "Abertura ao outro e às dinâmicas emergentes do coletivo." },
  { icon: Zap, title: "Improviso", desc: "Criação em ato, resposta ao instante e ao imprevisto." },
];

const Metodologia = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Metodologia"
            subtitle="Pesquisa-criação baseada na implicação do pesquisador no campo"
          />

          <AnimatedSection delay={0.1}>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 max-w-3xl mb-12">
              A pesquisa se estrutura como <span className="text-primary font-medium">pesquisa-criação</span>,
              baseada na implicação do pesquisador no campo. O rigor metodológico está na explicitação da
              implicação, na reflexividade e na articulação com autores como Kathleen Coessens e Lúcia Pimentel.
            </p>
          </AnimatedSection>

          {/* Eixos */}
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {eixos.map((eixo, i) => (
              <AnimatedSection key={eixo.title} delay={0.15 + i * 0.1}>
                <div className="group border border-border rounded-lg p-6 md:p-8 bg-card/50 transition-all hover:border-primary/40 hover:border-glow h-full">
                  <eixo.icon className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-display text-lg uppercase tracking-wide mb-3">{eixo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{eixo.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Distinção */}
          <AnimatedSection delay={0.4}>
            <div className="border-l-2 border-secondary pl-6 md:pl-8">
              <p className="font-display text-xs uppercase tracking-widest text-secondary mb-3">
                Distinção Central
              </p>
              <p className="text-foreground/85 leading-relaxed">
                O <strong>método de pesquisa</strong> (reflexivo e implicado) é diferente dos{" "}
                <strong>métodos de criação</strong> do coletivo (filmagem, montagem, glitch, design).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
