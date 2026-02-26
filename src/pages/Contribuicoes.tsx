import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const contribuicoes = [
  {
    title: "Skate como prática estética",
    desc: "Deslocamento do skate do campo sociológico para uma abordagem estética produtora de linguagem audiovisual.",
  },
  {
    title: "Operadores conceituais situados",
    desc: "Formulação de operadores analíticos — poética do instante, estética da borda, registro em fluxo — derivados diretamente da prática.",
  },
  {
    title: "Metodologia implicada estruturada",
    desc: "Pesquisa-criação com rigor metodológico baseado em reflexividade e explicitação da posição do pesquisador.",
  },
  {
    title: "Ampliação do campo audiovisual",
    desc: "Deslocamento epistemológico no campo audiovisual brasileiro, ao trazer o skate como objeto legítimo de investigação.",
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
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
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
