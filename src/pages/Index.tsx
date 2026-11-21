import { Link, useNavigate } from "react-router-dom";
import { useRef, useCallback } from "react";
import Layout from "@/components/Layout";
import ResearchSupports from "@/components/ResearchSupports";
import capaDissertacao from "@/assets/capa-dissertacao.png";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { primaryAccess } from "@/data/portal";
const Index = () => {
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();
  const handleCoverClick = useCallback(() => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    if (clickCountRef.current >= 3) { clickCountRef.current = 0; navigate("/defense"); return; }
    clickTimerRef.current = setTimeout(() => { clickCountRef.current = 0; }, 1000);
  }, [navigate]);
  return <Layout><SeoHead route="/home" />
    <nav aria-label={t("navGroups.principal")} className="mx-auto max-w-5xl px-4 py-5 flex flex-wrap gap-3">
      {[...primaryAccess,{key:"pesquisa",url:"/apresentacao"}].map(item => <Button key={item.key} asChild variant="outline" className="border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to={item.url}>{item.key === "pesquisa" ? t("portal.research") : t(`nav.${item.key}`)}</Link></Button>)}
    </nav>
    <section className="relative min-h-[480px] md:min-h-[540px] flex items-end">
      <img src="/images/stills/001.jpg" alt={t("portal.bookImageAlt")} className="absolute inset-0 w-full h-full object-cover grayscale" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
      <div className="relative mx-auto max-w-5xl w-full px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-bold uppercase text-foreground mb-6">LowMovie™</h1>
        <p className="max-w-2xl text-base text-foreground/90 leading-relaxed text-justify">{t("portal.opening")}</p>
        <div className="flex flex-wrap gap-3 mt-8">{[["/filme","watch"],["/coletivo","crew"],["/arquivo","archive"]].map(([to,key]) => <Button key={to} asChild variant="outline" className="h-auto py-3 whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to={to}>{t(`portal.${key}`)}</Link></Button>)}</div>
      </div>
    </section>
    <div className="mx-auto max-w-5xl px-4">
      <ResearchSupports />
      <section className="border-t border-border py-12 grid md:grid-cols-[180px_1fr] gap-8">
        <img src={capaDissertacao} alt={t("home.coverAlt")} onClick={handleCoverClick} width={1194} height={1688} className="w-44 h-auto grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">{t("portal.research")}</h2>
          <p className="text-[11px] text-primary uppercase">{t("home.dissertationDate")}</p>
          <p className="text-sm text-foreground/80">{t("home.program")}</p>
          <p className="text-sm text-muted-foreground">{t("home.author")} · {t("home.advisor")}</p>
          <p className="text-[11px] text-muted-foreground">{t("home.committee")}</p>
          <Button asChild variant="outline" className="border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to="/apresentacao">{t("home.explore")}</Link></Button>
        </div>
      </section>
    </div>
  </Layout>;
};
export default Index;
