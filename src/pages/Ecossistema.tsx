import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import ResearchSupports from "@/components/ResearchSupports";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
export default function Ecossistema() {
  const { t } = useTranslation();
  return <Layout><SeoHead route="/ecossistema" />
    <section className="py-16 md:py-20 mx-auto max-w-5xl px-4">
      <SectionTitle title={t("ecossistema.title")} subtitle={t("portal.supportTitle")} />
      <ResearchSupports />
      <section className="border-t border-border py-12">
        <h2 className="text-xl font-semibold mb-4">{t("portal.developmentsTitle")}</h2>
        <p className="text-base text-foreground/80 text-justify leading-relaxed mb-8">{t("portal.developmentsIntro")}</p>
        <div className="space-y-8">{[["lowmovie","/filme"],["lowbyrinth","/metodologia"],["lowrunner","/replicar"]].map(([key,to]) => <div key={key} className="border-l-2 border-primary/30 pl-5">
          <h3 className="text-lg font-semibold mb-3">{t(`portal.developments.${key}.name`)}</h3>
          <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-4">{t(`portal.developments.${key}.desc`)}</p>
          <Button asChild variant="outline" className="border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to={to}>{t(`portal.developments.${key}.cta`)}</Link></Button>
        </div>)}</div>
      </section>
      <section className="border-t border-border pt-10">
        <h2 className="text-xl font-semibold mb-4">{t("licenca.subtitle")}</h2>
        <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-6">{t("licenca.intro1")}</p>
        <Button asChild variant="outline" className="border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to="/licenca">{t("licenca.title")}</Link></Button>
      </section>
    </section>
  </Layout>;
}
