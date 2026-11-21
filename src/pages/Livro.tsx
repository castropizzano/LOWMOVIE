import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import SeoHead from "@/components/SeoHead";
import PdfPageViewer from "@/components/PdfPageViewer";
import { Button } from "@/components/ui/button";
import { bookReadingPaths } from "@/data/portal";
export default function Livro() {
  const { t } = useTranslation();
  return <Layout><SeoHead route="/livro" />
    <section className="py-16 md:py-20 mx-auto max-w-5xl px-4">
      <SectionTitle title={t("portal.bookTitle")} subtitle={t("portal.bookStatus")} />
      <p className="text-sm font-semibold text-primary mb-2">{t("portal.bookAuthor")}</p>
      <p className="text-[11px] uppercase text-muted-foreground mb-8">{t("portal.bookCollection")}</p>
      <div className="reading-measure space-y-4 text-base text-foreground/80 text-justify leading-relaxed">
        <p>{t("portal.bookText")}</p><p>{t("portal.bookRelation")}</p>
      </div>
      <figure className="mt-10 mb-12">
        <img src="/images/stills/003.jpg" alt={t("portal.bookImageAlt")} className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        <figcaption className="text-[11px] text-muted-foreground mt-3">{t("portal.bookImageCaption")}</figcaption>
      </figure>
      <section className="border-t border-border py-10">
        <h2 className="text-xl font-semibold mb-2">{t("portal.bookReading")}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t("portal.bookReadingSubtitle")}</p>
        <ol className="space-y-6">{bookReadingPaths.map((links, i) => <li key={i} className="border-l-2 border-primary/30 pl-5">
          <h3 className="font-semibold text-lg">{t(`portal.reading.${i}.title`)}</h3>
          <p className="text-base text-foreground/90 my-2">{t(`portal.reading.${i}.context`)}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">{links.map(link => {
            const label = t(`portal.readingLinks.${link.key}`);
            return link.href.startsWith("https:") || link.href.endsWith(".pdf")
              ? <a key={link.key} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 py-2">{label}</a>
              : <Link key={link.key} to={link.href} className="text-primary underline underline-offset-4 py-2">{label}</Link>;
          })}</div>
        </li>)}</ol>
      </section>
      <section className="border-t border-border pt-10">
        <h2 className="text-xl font-semibold mb-4">{t("portal.archiveItems.brandbook.name")}</h2>
        <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-4">{t("portal.bookBrandbook")}</p>
        <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-8">{t("conclusao.brandbookProvenance")}</p>
        <PdfPageViewer src="/docs/LowPressure_brandbook.pdf" title={t("portal.archiveItems.brandbook.name")} />
      </section>
      <div className="flex flex-wrap gap-4 mt-10">{[["/filme","watch"],["/arquivo","archive"],["/apresentacao","research"]].map(([to,key]) => <Button key={to} asChild variant="outline" className="border-primary/40 bg-primary/10 hover:bg-primary/20"><Link to={to}>{t(`portal.${key}`)}</Link></Button>)}</div>
    </section>
  </Layout>;
}
