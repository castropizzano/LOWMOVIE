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
                ? "Palestra para graduandos iniciantes em TCC · PPGCINEAV/UNESPAR · 17.06.2026"
                : "Lecture for undergraduates starting their thesis · PPGCINEAV/UNESPAR · 06.17.2026"
            }
          />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify mb-12">
              <p>
                {isPt
                  ? "Esta palestra usa o próprio portal da dissertação como ambiente da exposição. Em vez de slides, navego ao vivo pelos blocos abaixo, mostrando como cada pilar de pesquisa foi construído — do encontro com o objeto até os resultados consolidados. Para quem está iniciando o TCC, cada bloco demonstra um passo replicável."
                  : "This lecture uses the dissertation's own portal as its environment. Instead of slides, I navigate live through the blocks below, showing how each research pillar was built — from the encounter with the object to consolidated results. For those starting their undergrad thesis, each block demonstrates a replicable step."}
              </p>
              <p>
                {isPt
                  ? "Duração total: 90 minutos. Estrutura: 10 blocos sequenciais, cada um ancorado em uma página real do portal."
                  : "Total duration: 90 minutes. Structure: 10 sequential blocks, each anchored in a real page of the portal."}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-y border-border/40 py-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {isPt ? `${BLOCOS.length} blocos · ${total} min total` : `${BLOCOS.length} blocks · ${total} min total`}
              </div>
              <Link
                to="/palestra/0"
                className="group inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary/20"
              >
                {isPt ? "Iniciar palestra" : "Start lecture"}
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
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {isPt ? "Âncora no portal" : "Portal anchor"}: {b.portalLabel}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 mt-2 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.7} className="mt-16">
            <div className="border border-border/40 rounded-lg p-6 md:p-8 bg-card/20 text-xs text-muted-foreground leading-relaxed">
              <p className="font-semibold uppercase tracking-widest mb-2 text-foreground/70">
                {isPt ? "Como usar no dia da palestra" : "How to use on the lecture day"}
              </p>
              <p>
                {isPt
                  ? "Abra esta página no projetor, clique em \"Iniciar palestra\" e use as setas ←/→ (ou Espaço) para navegar. Cada bloco mostra o roteiro à esquerda e a âncora do portal à direita — clique no link da âncora para abrir a página real e demonstrar o conteúdo da dissertação ao vivo. Tecla Esc volta para a home."
                  : "Open this page on the projector, click \"Start lecture\" and use ←/→ arrows (or Space) to navigate. Each block shows the script on the left and the portal anchor on the right — click the anchor link to open the real page and demonstrate the dissertation content live. Esc returns to home."}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Palestra;