import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles, Wrench, BookOpen, Expand } from "lucide-react";

const contribuicoes = [
  {
    icon: Sparkles,
    title: "Skate como prática estética",
    desc: "Deslocamento do skate do campo sociológico para uma abordagem estética situada no cinema e nas artes do vídeo.",
  },
  {
    icon: Wrench,
    title: "Operadores analíticos situados",
    desc: "Formulação de operadores conceituais — poética do instante, estética da borda, registro em fluxo — derivados diretamente da prática.",
  },
  {
    icon: BookOpen,
    title: "Metodologia implicada estruturada",
    desc: "Proposição de uma pesquisa-criação com rigor metodológico baseado em reflexividade e explicitação do lugar de fala.",
  },
  {
    icon: Expand,
    title: "Ampliação do campo audiovisual",
    desc: "Um deslocamento epistemológico no campo audiovisual brasileiro, ao trazer o skate como objeto legítimo de investigação.",
  },
];

const Contribuicoes = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Contribuições" subtitle="O que esta dissertação propõe" />

          <div className="grid gap-6 md:grid-cols-2">
            {contribuicoes.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
                <div className="group border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-all hover:border-primary/40 hover:border-glow">
                  <item.icon className="h-8 w-8 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="font-display text-lg uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contribuicoes;
