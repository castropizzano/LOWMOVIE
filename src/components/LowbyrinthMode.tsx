import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { lowbyrinthNodes, LowbyrinthNode } from "@/data/lowbyrinth";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";
import PortalPanel, { PanelProps } from "./PortalPanel";
import { Button } from "@/components/ui/button";

function NodeDetails({ node, onNavigate }: { node: LowbyrinthNode; onNavigate: (path: string) => void }) {
  const { t } = useTranslation();
  return <section id={`drifts-${node.key}`} className="border border-border rounded-lg p-5 bg-card/30 space-y-4">
    <h3 className="text-base font-semibold">{t(`lowbyrinthData.${node.key}.title`)}</h3>
    <div className="grid sm:grid-cols-2 gap-4">{node.derivas.map(d => <Button variant="outline" key={d.to} onClick={() => onNavigate(d.to)} className="h-auto whitespace-normal flex flex-col items-start text-left p-4 border-primary/40 bg-primary/10 hover:bg-primary/20">
      <span className="font-semibold text-sm">{t(`lowbyrinthData.${node.key}.derivas.${d.index}.label`)}</span>
      <span className="font-normal text-base leading-relaxed text-foreground/90 mt-2">{t(`lowbyrinthData.${node.key}.derivas.${d.index}.justificativa`)}</span>
    </Button>)}</div>
    <Button variant="outline" onClick={() => onNavigate(node.path)} className="h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20">{t("lowbyrinth.goTo")} {t(`lowbyrinthData.${node.key}.title`)}</Button>
  </section>;
}
export default function LowbyrinthMode({ open, onClose, onRestoreFocus }: PanelProps) {
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const selected = lowbyrinthNodes.find(node => node.path === activeNode);
  const handleNavigate = (path: string) => { onClose(); navigate(path); };
  const nodeButton = (node: LowbyrinthNode) => <Button variant="outline" onClick={() => setActiveNode(activeNode === node.path ? null : node.path)} aria-expanded={activeNode === node.path} aria-controls={activeNode === node.path ? `drifts-${node.key}` : undefined}
    className={`w-full h-auto min-h-[76px] whitespace-normal flex flex-col items-start text-left p-4 rounded-lg ${activeNode === node.path ? "bg-foreground/10 border-foreground/30" : "bg-foreground/5 border-border hover:bg-foreground/10"}`}>
    <span className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">{t(`lowbyrinthData.${node.key}.conceito`)}</span>
    <span className="text-sm font-semibold">{t(`lowbyrinthData.${node.key}.title`)}</span>
  </Button>;
  return <PortalPanel open={open} onClose={onClose} onRestoreFocus={onRestoreFocus} title={t("lowbyrinth.title")} subtitle={t("lowbyrinth.subtitle")} closeLabel={t("lowbyrinth.close")}>
    {isMobile ? <div className="mx-auto max-w-5xl px-4 py-6 space-y-3">{lowbyrinthNodes.map(node => <div key={node.path}>
      {nodeButton(node)}{activeNode === node.path && <div className="mt-3"><NodeDetails node={node} onNavigate={handleNavigate} /></div>}
    </div>)}</div> : <>
      <div className="relative mx-auto w-full max-w-5xl min-h-[800px] h-[calc(100vh-100px)]">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">{lowbyrinthNodes.flatMap(node => node.derivas.map(d => {
          const target = lowbyrinthNodes.find(n => n.path === d.to);
          return target ? <line key={`${node.path}-${d.to}`} x1={`${node.x}%`} y1={`${node.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} stroke="currentColor" className="text-foreground/15" strokeWidth="0.5" strokeDasharray="4 4" /> : null;
        }))}</svg>
        <img src="/images/lowbyrinth.png" alt="" className="absolute inset-0 w-full h-full object-contain opacity-[0.05] blur-[1px] pointer-events-none" />
        {lowbyrinthNodes.map((node, i) => <div key={node.path} className="absolute w-[min(19%,190px)] -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}>{nodeButton(node)}</motion.div>
        </div>)}
      </div>
      {selected && <div className="mx-auto max-w-5xl px-4 pb-8"><NodeDetails node={selected} onNavigate={handleNavigate} /></div>}
    </>}
    <nav className="mx-auto max-w-5xl px-4 py-8 flex flex-wrap gap-4 border-t border-border" aria-label={t("navGroups.recursos")}>
      {[['/livro','livro'],['/arquivo','arquivo']].map(([path,key]) => <Button variant="outline" key={path} onClick={() => handleNavigate(path)} className="border-primary/40 bg-primary/10 hover:bg-primary/20">{t(`nav.${key}`)}</Button>)}
    </nav>
  </PortalPanel>;
}
