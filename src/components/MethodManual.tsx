import { motion } from "framer-motion";
import MethodDiagram from "./MethodDiagram";
import { useTranslation } from "react-i18next";
import PortalPanel, { PanelProps } from "./PortalPanel";
import PdfPageViewer from "./PdfPageViewer";
import { Button } from "@/components/ui/button";

const symbolKeys = ["s1", "s2", "s3", "s4", "s5", "s6"] as const;
const layerKeys = ["l1", "l2", "l3", "l4", "l5"] as const;
const directiveKeys = ["d1", "d2", "d3"] as const;

const MethodManual = ({ open, onClose, onRestoreFocus }: PanelProps) => {
  const { t } = useTranslation();
  const principles = t("method.principles", { returnObjects: true }) as string[];

  return (
    <PortalPanel open={open} onClose={onClose} onRestoreFocus={onRestoreFocus} title={t("method.title")} subtitle={t("method.subtitle")} closeLabel={t("method.close")}>

          <div className="max-w-5xl mx-auto px-4 pb-16">
            {/* Intro */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="py-12 border-b border-border">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4">{t("method.fundamentalShift")}</p>
              <p className="reading-measure text-base text-foreground/90 leading-relaxed text-justify">{t("method.fundamentalShiftDesc")}</p>
              <dl className="mt-8 grid sm:grid-cols-2 gap-6">{["axes", "procedures", "practices", "supports"].map(key => <div key={key}>
                <dt className="text-xs font-semibold text-primary mb-2">{t(`method.sets.${key}.title`)}</dt>
                <dd className="text-base text-foreground/90 leading-relaxed">{t(`method.sets.${key}.text`)}</dd>
              </div>)}</dl>
            </motion.div>

            {/* Diagram */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="py-16">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">{t("method.knowledgeSystem")}</p>
              <MethodDiagram />
            </motion.div>

            <div className="border-t border-border" />

            {/* 5 Camadas */}
            <div className="py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{t("method.anatomyTitle")}</p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-foreground">{t("method.layersTitle")}</h3>
                <p className="reading-measure text-base text-muted-foreground mt-4 leading-relaxed">{t("method.layersNote")}</p>
              </motion.div>

              <div className="space-y-0">
                {layerKeys.map((key, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="border-l-2 border-primary/40 pl-6 py-6 hover:border-primary hover:bg-foreground/[0.02] transition-all -mx-2 px-8 rounded-r"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/60 mb-1">{t("method.layerLabel")} {String(i + 1).padStart(2, "0")}</p>
                    <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground/80 mb-1">{t(`method.layers.${key}.title`)}</h4>
                    <p className="text-xs font-semibold text-muted-foreground mb-3 italic">{t(`method.layers.${key}.subtitle`)}</p>
                    <p className="reading-measure text-base text-foreground/90 leading-relaxed text-justify">{t(`method.layers.${key}.desc`)}</p>
                    {key === "l4" && <dl className="space-y-4 mt-4">{["instante", "borda", "fluxo"].map(op => <div key={op}>
                      <dt className="font-semibold text-primary text-sm">{t(`metodologia.toolkit.archetypes.${op}.subtitle`)}</dt>
                      <dd className="text-base text-foreground/90 leading-relaxed mt-2">{t(`metodologia.toolkit.archetypes.${op}.desc`)}</dd>
                    </div>)}</dl>}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Artista-Pesquisador */}
            <div className="py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{t("method.researcherPlace")}</p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-foreground">{t("method.researcherTitle")}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-2xl text-justify">{t("method.researcherDesc")}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {directiveKeys.map((key, i) => (
                  <motion.div key={key} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + i * 0.1 }} className="border border-border rounded-lg p-5 hover:border-border/80 transition-colors">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-2">{String(i + 1).padStart(2, "0")}</p>
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/80 mb-3">{t(`method.directives.${key}.title`)}</h4>
                    <p className="text-base text-foreground/90 leading-relaxed">{t(`method.directives.${key}.text`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Campo Simbólico */}
            <div className="py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{t("method.symbolicPlace")}</p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-foreground">{t("method.symbolicTitle")}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-2xl text-justify">{t("method.symbolicDesc")}</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {symbolKeys.map((key, i) => {
                  return (
                    <motion.div key={key} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + i * 0.08 }} className="border border-border rounded-lg p-4 text-center hover:border-primary/40 hover:bg-foreground/[0.02] transition-all group">
                      <p className="text-[11px] font-bold uppercase text-foreground mb-2">{t(`method.symbols.${key}.name`)}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{t(`method.symbols.${key}.meaning`)}</p>
                    </motion.div>
                  );
                })}
              </div>
              <figure className="mt-8">
                <figcaption className="text-sm text-muted-foreground mb-4">{t("method.symbolSheet")}</figcaption>
                <PdfPageViewer src="/docs/LowMovie_brandbook.pdf" title={t("portal.archiveItems.artbook.name")} initialPage={5} />
              </figure>
            </div>

            <div className="border-t border-border" />

            {/* 13 Princípios */}
            <div className="py-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2">{t("method.manifestoLabel")}</p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-foreground">{t("method.manifestoTitle", { count: principles.length })}</h3>
              </motion.div>

              <ol className="space-y-0">
                {principles.map((principle: string, i: number) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }} className="flex gap-5 py-5 border-b border-border/30 group hover:bg-foreground/[0.02] transition-colors px-2 -mx-2 rounded">
                    <span className="text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors tabular-nums leading-none pt-0.5 min-w-[2ch] text-right">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-base text-foreground/90 leading-relaxed">{principle}</p>
                  </motion.li>
                ))}
              </ol>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="mt-16 pt-8 border-t border-border text-center">
                <Button asChild variant="outline" className="h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href="/docs/dissertacao.pdf#page=139" target="_blank" rel="noopener noreferrer">{t("method.originalManifesto")}</a></Button>
              </motion.div>
            </div>
          </div>
    </PortalPanel>
  );
};

export default MethodManual;
