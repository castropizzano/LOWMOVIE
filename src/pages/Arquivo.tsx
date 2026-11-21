import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { archiveMaterials, interviews, circulationRecords, videoPublications } from "@/data/portal";
export default function Arquivo() {
  const { t, i18n } = useTranslation();
  const formatDate = (value: string) => new Intl.DateTimeFormat(i18n.language === "pt" ? "pt-BR" : "en-GB", { timeZone: "UTC" }).format(new Date(value.slice(0, 10) + "T12:00:00Z"));
  return <Layout><SeoHead route="/arquivo" />
    <section className="py-16 md:py-20 mx-auto max-w-5xl px-4">
      <SectionTitle title={t("portal.archiveTitle")} subtitle={t("portal.archiveSubtitle")} />
      <p className="text-base text-foreground/80 leading-relaxed text-justify mb-10">{t("portal.archiveIntro")}</p>
      <div className="grid gap-6 sm:grid-cols-2">{archiveMaterials.map(item => {
        const external = item.href.startsWith("https:") || item.href.endsWith(".pdf");
        const date = item.date ?? t(`portal.${item.dateKey ?? "undocumentedDate"}`);
        const action = t(`portal.${item.action ?? "view"}`);
        return <article key={item.key} className="border border-border rounded-lg overflow-hidden flex flex-col">
          {item.image && <img src={item.image} alt={t(`portal.archiveItems.${item.key}.name`)} className="w-full aspect-video object-contain bg-muted/20 grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />}
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-lg font-semibold mb-2">{t(`portal.archiveItems.${item.key}.name`)}</h2>
            <p className="text-[11px] text-primary mb-4">{item.date && `${t(item.key === "film" ? "portal.workYear" : "portal.documentYear")}: `}{date} · {t(`portal.${item.state}`)}</p>
            {item.key === "film" && <p className="text-xs text-muted-foreground mb-4">{t("portal.platformDate")}: <time dateTime={videoPublications.film.uploadDate}>{formatDate(videoPublications.film.uploadDate)}</time></p>}
            <p className="text-sm text-foreground/80 text-justify leading-relaxed mb-4">{t(`portal.archiveItems.${item.key}.desc`)}</p>
            <p className="text-[11px] text-muted-foreground text-justify leading-relaxed mb-6">{t(`portal.archiveItems.${item.key}.credits`)}</p>
            {item.key === "brandbook" && <p className="text-[11px] text-muted-foreground leading-relaxed text-justify mb-6">{t("conclusao.brandbookProvenance")}</p>}
            <Button asChild variant="outline" className="mt-auto h-auto py-3 whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20">
              {external ? <a href={item.href} target="_blank" rel="noopener noreferrer">{action}<span className="sr-only">: {t(`portal.archiveItems.${item.key}.name`)}</span></a> : <Link to={item.href}>{action}<span className="sr-only">: {t(`portal.archiveItems.${item.key}.name`)}</span></Link>}
            </Button>
          </div>
        </article>;
      })}</div>
      <section className="border-t border-border mt-12 pt-10">
        <h2 className="text-xl font-semibold mb-6">{t("portal.interviews")}</h2>
        <div className="grid gap-6 sm:grid-cols-2">{interviews.map(item => <article key={item.id} className="border-l-2 border-primary/30 pl-5">
          <h3 className="font-semibold">{t(`conclusao.interviewItems.${item.tKey}.label`)} | {t(`conclusao.interviewItems.${item.tKey}.subtitle`)}</h3>
          <p className="text-xs text-muted-foreground my-3">{item.publication ? <>{t("portal.platformDate")}: <time dateTime={item.publication}>{formatDate(item.publication)}</time></> : t("portal.undocumentedDate")} · {t(item.researchRelated ? "portal.researchInterview" : "portal.referenceInterview")}</p>
          <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-4">{t(`conclusao.interviewItems.${item.tKey}.desc`)}</p>
          <Button asChild variant="outline" className="h-auto py-3 whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href={item.transcript} target="_blank" rel="noopener noreferrer">{t("conclusao.openTranscript")}<span className="sr-only">: {t(`conclusao.interviewItems.${item.tKey}.label`)}</span></a></Button>
          {item.youtubeId && <Button asChild variant="outline" className="mt-3 ml-0 sm:ml-2 h-auto py-3 whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href={`https://www.youtube.com/watch?v=${item.youtubeId}`} target="_blank" rel="noopener noreferrer">{t("portal.watchVideo")}<span className="sr-only">: {t(`conclusao.interviewItems.${item.tKey}.label`)}</span></a></Button>}
        </article>)}</div>
      </section>
      <section id="circulacao" className="border-t border-border mt-12 pt-10 scroll-mt-24">
        <h2 className="text-xl font-semibold mb-6">{t("portal.circulationTitle")}</h2>
        <div className="grid gap-6 sm:grid-cols-2">{circulationRecords.map(item => <article key={item.key} className="border border-border rounded-lg p-6">
          <p className="text-[11px] text-primary mb-3">{item.outlet} · <time dateTime={item.date}>{formatDate(item.date)}</time></p>
          <h3 className="text-lg font-semibold mb-3">{t(`portal.circulation.${item.key}.title`)}</h3>
          <p className="text-base text-foreground/90 leading-relaxed mb-5">{t(`portal.circulation.${item.key}.nature`)}</p>
          <Button asChild variant="outline" className="h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href={item.href} target="_blank" rel="noopener noreferrer">{item.outlet} | {t(`portal.circulation.${item.key}.title`)}</a></Button>
        </article>)}</div>
      </section>
    </section>
  </Layout>;
}
