import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import SeoHead from "@/components/SeoHead";
import { BLOCOS, getLang } from "@/data/palestra";
import { useTranslation } from "react-i18next";

const Palestra = () => {
  const { i18n } = useTranslation();
  const lang = getLang();
  const isPt = lang === "pt";
  // i18n.language is read so component re-renders on language change
  void i18n.language;

  const total = BLOCOS.reduce((s, b) => s + b.tempoMin, 0);

  return (
    <Layout>
      <SeoHead route="/palestra" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title={isPt ? "Lowbyrinth: Quando a Pesquisa Me Encontrou" : "Lowbyrinth: When Research Found Me"}
            subtitle={
              isPt
                ? "Palestra sobre o percurso de uma pesquisa de mestrado em pesquisa-criação implicada"
                : "Lecture on the path of a master's research in implicated research-creation"
            }
          />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify mb-12">
              <p>
                {isPt
                  ? "Antes desta pesquisa existir como dissertação, ela já existia como prática: no skate, na câmera na mão, nos coletivos com os quais sigo trabalhando. A pesquisa veio depois, quase como consequência. É essa história que conto aqui, em dez passos, do encontro com o objeto até os resultados consolidados."
                  : "Before this research existed as a dissertation, it already existed as practice: in skateboarding, in the camera in hand, in the collectives I keep working with. The research came later, almost as a consequence. That is the story I tell here, in ten steps, from the encounter with the object to the consolidated results."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-y border-border/40 py-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {isPt ? `${BLOCOS.length} passos · ${total} min` : `${BLOCOS.length} steps · ${total} min`}
              </div>
              <Link
                to="/palestra/0"
                className="group inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary/20"
              >
                {isPt ? "Começar" : "Begin"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {BLOCOS.map((b, i) => (
              <AnimatedSection key={b.id} delay={0.15 + i * 0.04}>
                <Link
                  to={`/palestra/${b.id}`}
                  className="group flex items-start gap-6 border border-border rounded-lg p-5 md:p-6 bg-card/30 transition-colors hover:border-primary/40"
                >
                  <div className="shrink-0 w-12 text-center">
                    <div className="text-2xl font-bold text-primary leading-none">{String(b.id).padStart(2, "0")}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{b.tempoMin} min</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-base font-semibold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                      {b.titulo[lang]}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Palestra;