import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

const Imprimir = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SeoHead route="/imprimir" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-left">
          <SectionTitle title={t("imprimir.title")} subtitle={t("imprimir.subtitle")} />

          <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80">
            {t("imprimir.headline")}
          </p>

          <div className="mt-16">
            <div className="h-px w-16 bg-primary/40 mb-8" />
            <p className="text-base text-foreground/80 leading-relaxed text-justify">{t("imprimir.p1")}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic text-justify">{t("imprimir.philosophy")}</p>
          </div>

          {/* Opção 1 — Imprimir página atual */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-primary font-mono">01</span>
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  {t("imprimir.option1Title")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("imprimir.option1Desc")}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <kbd className="border border-border rounded px-3 py-1 text-xs font-mono bg-muted/30">Ctrl + P</kbd>
                <span className="text-xs text-muted-foreground self-center">{t("imprimir.or")}</span>
                <kbd className="border border-border rounded px-3 py-1 text-xs font-mono bg-muted/30">⌘ + P</kbd>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{t("imprimir.option1Note")}</p>
            </div>
          </div>

          {/* Opção 2 — Caderno-Síntese */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-primary font-mono">02</span>
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  {t("imprimir.option2Title")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("imprimir.option2Desc")}</p>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed mb-8">
                <li>· {t("imprimir.option2Item1")}</li>
                <li>· {t("imprimir.option2Item2")}</li>
                <li>· {t("imprimir.option2Item3")}</li>
                <li>· {t("imprimir.option2Item4")}</li>
              </ul>
              <a href="/docs/lowmovie_caderno_sintese.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors">
                <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{t("imprimir.option2Cta")}</span>
              </a>
            </div>
          </div>

          {/* Opção 3 — Dissertação */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-primary font-mono">03</span>
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  {t("imprimir.option3Title")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("imprimir.option3Desc")}</p>
              <a href="/docs/dissertacao.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors">
                <span className="text-sm font-medium text-foreground/80">{t("imprimir.option3Cta")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Imprimir;