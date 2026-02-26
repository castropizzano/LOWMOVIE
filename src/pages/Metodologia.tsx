import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Ear, Zap } from "lucide-react";

const eixos = [
  {
    icon: Heart,
    title: "Afeto",
    desc: "Força epistemológica e gesto ético-político. Disposição de deixar-se tocar pelo campo, acolhendo a dimensão sensível como forma de conhecimento.",
  },
  {
    icon: Ear,
    title: "Escuta",
    desc: "Sustentar o silêncio, acolher o tempo do outro, permitir que o sentido emerja das dinâmicas coletivas sem imposição interpretativa.",
  },
  {
    icon: Zap,
    title: "Improviso",
    desc: "Abertura ao inesperado como dado epistemológico — um saber em movimento que aprende com a instabilidade e com o gesto imprevisto.",
  },
];

const Metodologia = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Metodologia"
            subtitle="Pesquisa-criação implicada, fundamentada na reflexividade"
          />

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl space-y-4 text-base md:text-lg leading-relaxed text-foreground/85 mb-12">
              <p>
                A investigação estrutura-se como <span className="text-primary font-medium">pesquisa-criação implicada</span>,
                fundamentada na implicação do pesquisador no campo. O rigor metodológico reside na reflexividade
                e na explicitação da posição do pesquisador, não na pretensa neutralidade.
              </p>
              <p className="text-muted-foreground text-sm">
                Referências: Coessens, Pimentel, Moriceau — corpo como produção de conhecimento.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {eixos.map((eixo, i) => (
              <AnimatedSection key={eixo.title} delay={0.15 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30 h-full">
                  <eixo.icon className="h-7 w-7 text-primary/70 mb-4" />
                  <h3 className="font-display text-lg uppercase tracking-wide mb-3">{eixo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{eixo.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Distinção Fundamental
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-right">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground">Método de Pesquisa</p>
                  <p className="text-xs text-muted-foreground mt-1">Reflexivo e analítico</p>
                </div>
                <div className="text-2xl font-light text-primary/60">≠</div>
                <div className="flex-1 text-center md:text-left">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground">Métodos de Criação</p>
                  <p className="text-xs text-muted-foreground mt-1">Filmagem, montagem, glitch, design</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center leading-relaxed">
                O rigor reside na reflexividade e na consistência conceitual, não na separação entre sujeito e objeto.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
