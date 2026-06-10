import { useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, List } from "lucide-react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SeoHead from "@/components/SeoHead";
import { BLOCOS, getLang } from "@/data/palestra";
import lowpressurePhoto from "@/assets/lowpressure_photoshoot.jpg.asset.json";
import lowpressureCrew from "@/assets/lowpressure_crew.png.asset.json";

const PalestraBloco = () => {
  const { bloco } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  void i18n.language;
  const lang = getLang();
  const isPt = lang === "pt";

  const id = Number(bloco);
  const b = BLOCOS.find((x) => x.id === id);

  const goNext = useCallback(() => {
    if (id < BLOCOS.length - 1) navigate(`/palestra/${id + 1}`);
  }, [id, navigate]);
  const goPrev = useCallback(() => {
    if (id > 0) navigate(`/palestra/${id - 1}`);
    else navigate("/palestra");
  }, [id, navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
      else if (e.key === "Escape") { e.preventDefault(); navigate("/palestra"); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, navigate]);

  if (!b) {
    return (
      <Layout>
        <SeoHead route="/palestra" />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              {isPt ? "Bloco não encontrado." : "Block not found."}
            </p>
            <Link to="/palestra" className="mt-6 inline-block text-xs uppercase tracking-widest text-primary hover:underline">
              {isPt ? "Voltar ao índice" : "Back to index"}
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SeoHead route="/palestra" />
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <AnimatedSection delay={0.05}>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 pb-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {isPt ? "Bloco" : "Block"} {String(b.id).padStart(2, "0")} / {String(BLOCOS.length - 1).padStart(2, "0")}
                </span>
              </div>
              <Link to="/palestra" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                <List className="h-3.5 w-3.5" />
                {isPt ? "Índice" : "Index"}
              </Link>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={0.1}>
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-10 leading-tight">
              {b.titulo[lang]}
            </h1>
          </AnimatedSection>

          {/* Narrative-only content */}
          <div className="w-full space-y-6">
            <AnimatedSection delay={0.15}>
              <p className="text-lg leading-relaxed text-foreground/85 text-justify">
                {b.oQueE[lang]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-lg leading-relaxed text-foreground/85 text-justify">
                {b.comoChegueiNisso[lang]}
              </p>
            </AnimatedSection>
            {b.slug === "abertura" && (
              <AnimatedSection delay={0.25}>
                <figure className="mt-4">
                  <img
                    src={lowpressurePhoto.url}
                    alt={isPt ? "Coletivo LowPressure™ — ensaio fotográfico" : "LowPressure™ Collective — photoshoot"}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {isPt ? "Coletivo LowPressure™ · ensaio fotográfico" : "LowPressure™ Collective · photoshoot"}
                  </figcaption>
                </figure>
              </AnimatedSection>
            )}
            {b.slug === "resultados" && (
              <AnimatedSection delay={0.25}>
                <figure className="mt-4">
                  <img
                    src={lowpressureCrew.url}
                    alt={isPt ? "Coletivo LowPressure™ — crew na rua" : "LowPressure™ Collective — crew in the street"}
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {isPt ? "Coletivo LowPressure™ · crew" : "LowPressure™ Collective · crew"}
                  </figcaption>
                </figure>
              </AnimatedSection>
            )}
            {b.destaque && (
              <AnimatedSection delay={0.25}>
                <figure className="mt-8 border-l-2 border-primary bg-primary/5 px-6 py-6 md:px-8 md:py-7">
                  <figcaption className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    {isPt ? "Pergunta de pesquisa · enunciado da dissertação" : "Research question · dissertation statement"}
                  </figcaption>
                  <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                    “{b.destaque[lang]}”
                  </blockquote>
                </figure>
              </AnimatedSection>
            )}
          </div>

          {/* Nav footer */}
          <AnimatedSection delay={0.35}>
            <div className={`mt-16 grid gap-3 ${id >= BLOCOS.length - 1 ? "grid-cols-1" : "grid-cols-2"}`}>
              <button
                onClick={goPrev}
                className="group flex items-center justify-start gap-2 border border-border px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {id === 0 ? (isPt ? "Índice" : "Index") : (isPt ? "Anterior" : "Previous")}
              </button>
              {id < BLOCOS.length - 1 && (
                <button
                  onClick={goNext}
                  className="group flex items-center justify-end gap-2 border border-border px-5 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  {isPt ? "Próximo" : "Next"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default PalestraBloco;