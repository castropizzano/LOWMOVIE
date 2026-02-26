import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Compass, Users, Film } from "lucide-react";

const movimentos = [
  {
    icon: Compass,
    title: "Corpo em Deriva",
    subtitle: "Operadores Poéticos",
    items: ["Poética do instante", "Estética da borda", "Registro em fluxo"],
    color: "text-primary",
    borderColor: "border-primary/30",
  },
  {
    icon: Users,
    title: "Coletivo em Baixo Relevo",
    subtitle: "Ética de Produção",
    items: ["LowPressure™ como rede", "Micropolítica do fazer", "Ética colaborativa"],
    color: "text-secondary",
    borderColor: "border-secondary/30",
  },
  {
    icon: Film,
    title: "Obra em Expansão",
    subtitle: "Processos do Filme",
    items: ["Filmagem e montagem", "Glitch e trilha", "Design e circulação"],
    color: "text-accent",
    borderColor: "border-accent/30",
  },
];

const Estrutura = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle
            title="Estrutura Analítica"
            subtitle="A investigação se organiza em três movimentos"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {movimentos.map((mov, i) => (
              <AnimatedSection key={mov.title} delay={0.1 + i * 0.15}>
                <div className={`border ${mov.borderColor} rounded-lg p-6 md:p-8 bg-card/30 h-full transition-all hover:bg-card/60`}>
                  <mov.icon className={`h-10 w-10 ${mov.color} mb-5`} />
                  <h3 className="font-display text-xl uppercase tracking-tight mb-1">{mov.title}</h3>
                  <p className={`text-xs uppercase tracking-widest ${mov.color} mb-6`}>{mov.subtitle}</p>
                  <ul className="space-y-3">
                    {mov.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className={`h-1.5 w-1.5 rounded-full ${mov.color.replace("text-", "bg-")}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Campo Simbólico */}
          <AnimatedSection delay={0.5} className="mt-20">
            <div className="text-center max-w-2xl mx-auto">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Campo Simbólico
              </p>
              <p className="text-foreground/85 leading-relaxed">
                O <span className="text-primary font-medium">Lowbyrinth™</span> é apresentado como
                imagem-conceito e operador simbólico — uma lente imagética para compreender a dimensão
                simbólica do filme, não um sistema psicanalítico fechado.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
