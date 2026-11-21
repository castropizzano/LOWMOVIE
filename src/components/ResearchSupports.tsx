import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
const supports = [
  { key: "dissertation", href: "/docs/dissertacao.pdf", external: true },
  { key: "portal", href: "/arquivo", external: false },
  { key: "book", href: "/livro", external: false },
];
export default function ResearchSupports() {
  const { t } = useTranslation();
  return <section className="border-t border-border py-12">
    <h2 className="text-xl font-semibold mb-4">{t("portal.supportTitle")}</h2>
    <p className="text-sm text-muted-foreground text-justify leading-relaxed mb-8">{t("portal.supportIntro")}</p>
    <div className="grid gap-8 md:grid-cols-3">{supports.map(({key,href,external}) => <div key={key} className="flex flex-col border-l-2 border-primary/30 pl-5">
      <h3 className="text-lg font-semibold">{t(`portal.supports.${key}.name`)}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed text-justify my-4">{t(`portal.supports.${key}.desc`)}</p>
      <Button asChild variant="outline" className="mt-auto h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20 py-3">
        {external ? <a href={href} target="_blank" rel="noopener noreferrer">{t(`portal.supports.${key}.cta`)}</a> : <Link to={href}>{t(`portal.supports.${key}.cta`)}</Link>}
      </Button>
    </div>)}</div>
  </section>;
}
