import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import NextSectionButton from "@/components/NextSectionButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

const DefenseModeAbout = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SeoHead route="/defense-mode" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-left">
          <SectionTitle title={t("defenseMode.title")} subtitle={t("defenseMode.subtitle")} />

          <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80">
            {t("defenseMode.headline")}
          </p>

          <div className="mt-16">
            <div className="h-px w-16 bg-primary/40 mb-8" />
            <p className="text-base text-foreground/80 leading-relaxed text-justify">{t("defenseMode.p1")}</p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed text-justify">{t("defenseMode.p2")}</p>
          </div>

          {/* Por que existe */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">
                {t("defenseMode.whyTitle")}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("defenseMode.whyP1")}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">{t("defenseMode.whyP2")}</p>
            </div>
          </div>

          {/* Como funciona */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">
                {t("defenseMode.howTitle")}
              </h2>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-3"><span className="text-primary font-mono">01</span><span>{t("defenseMode.how1")}</span></li>
                <li className="flex gap-3"><span className="text-primary font-mono">02</span><span>{t("defenseMode.how2")}</span></li>
                <li className="flex gap-3"><span className="text-primary font-mono">03</span><span>{t("defenseMode.how3")}</span></li>
                <li className="flex gap-3"><span className="text-primary font-mono">04</span><span>{t("defenseMode.how4")}</span></li>
              </ul>
            </div>
          </div>

          {/* Como acessar */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">
                {t("defenseMode.accessTitle")}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{t("defenseMode.directLabel")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-4">{t("defenseMode.directDesc")}</p>
                  <Link to="/defense" className="inline-flex items-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-semibold uppercase tracking-wider text-foreground">{t("defenseMode.directCta")}</span>
                  </Link>
                </div>
                <div className="h-px w-full bg-border/30" />
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{t("defenseMode.easterLabel")}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("defenseMode.easterDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recomendações técnicas */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">
                {t("defenseMode.techTitle")}
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>· {t("defenseMode.tech1")}</li>
                <li>· {t("defenseMode.tech2")}</li>
                <li>· {t("defenseMode.tech3")}</li>
              </ul>
            </div>
          </div>

          {/* Contexto */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">
                {t("defenseMode.contextTitle")}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("defenseMode.contextDesc")}</p>
            </div>
          </div>

          <NextSectionButton to="/imprimir" label={t("defenseMode.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default DefenseModeAbout;