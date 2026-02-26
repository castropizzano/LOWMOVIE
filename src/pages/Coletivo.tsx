import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const Coletivo = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="O Coletivo — LowPressure™"
            subtitle="Rede de artistas-skatistas que ativam a cidade como campo sensível"
          />

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl space-y-6 text-foreground/85 leading-relaxed mb-16">
              <p>
                O <span className="text-secondary font-medium">LowPressure™</span> não é um grupo
                formal — é uma rede de afinidades, uma constelação de corpos que se encontram na
                cidade, no skate, no vídeo e no som.
              </p>
              <p>
                A micropolítica do fazer cotidiano é o que sustenta o coletivo: cada sessão de skate é
                um ensaio, cada filmagem é um gesto de cuidado, cada montagem é uma escuta.
              </p>
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.2}>
            <h3 className="font-display text-xl uppercase tracking-tight mb-6">Galeria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground/30 text-xs uppercase tracking-widest hover:border-secondary/40 transition-colors cursor-pointer"
                >
                  Img {i}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-16">
            <div className="border-l-2 border-primary pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-light italic text-foreground/80">
                "O coletivo é o lugar onde o gesto individual encontra sua dimensão política —
                não pela militância, mas pela insistência do fazer."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Coletivo;
