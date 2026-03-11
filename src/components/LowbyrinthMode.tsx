import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { lowbyrinthNodes } from "@/data/lowbyrinth";
import { useIsMobile } from "@/hooks/use-mobile";

interface LowbyrinthModeProps {
  open: boolean;
  onClose: () => void;
}

const NodeCard = ({
  node,
  isActive,
  onToggle,
  onNavigate,
}: {
  node: (typeof lowbyrinthNodes)[0];
  isActive: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
}) => (
  <div
    className={`
      border rounded-lg p-4 transition-all duration-300 cursor-pointer
      ${isActive
        ? "bg-foreground/10 border-foreground/30 shadow-lg shadow-foreground/5"
        : "bg-foreground/5 border-border hover:bg-foreground/[0.08] hover:border-foreground/20"
      }
    `}
    onClick={onToggle}
  >
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
      {node.conceito}
    </p>
    <p className="text-sm font-semibold text-foreground">{node.title}</p>

    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-3 mt-3 border-t border-border space-y-2">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground/60 mb-2">Derive para:</p>
            {node.derivas.map((d, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); onNavigate(d.to); }}
                className="block w-full text-left p-2 rounded bg-foreground/5 hover:bg-foreground/10 transition-colors"
              >
                <p className="text-xs font-semibold text-foreground/80">{d.label}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{d.justificativa}</p>
              </button>
            ))}
            <button
              onClick={(e) => { e.stopPropagation(); onNavigate(node.path); }}
              className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground/80 transition-colors mt-2"
            >
              → Ir para {node.title}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const LowbyrinthMode = ({ open, onClose }: LowbyrinthModeProps) => {
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-auto"
        >
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between px-6 py-4 z-10 bg-background/80 backdrop-blur-md">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-foreground">Lowbyrinth™</h2>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">Derive. O percurso é o conhecimento.</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {isMobile ? (
            /* Mobile: scrollable list */
            <div className="px-4 pb-8 pt-2 space-y-3">
              {lowbyrinthNodes.map((node, index) => (
                <motion.div
                  key={node.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                >
                  <NodeCard
                    node={node}
                    isActive={activeNode === node.path}
                    onToggle={() => setActiveNode(activeNode === node.path ? null : node.path)}
                    onNavigate={handleNavigate}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            /* Desktop: absolute positioned octagonal layout */
            <>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: "100vh" }}>
                {lowbyrinthNodes.map((node) =>
                  node.derivas.map((d, i) => {
                    const target = lowbyrinthNodes.find((n) => n.path === d.to);
                    if (!target) return null;
                    return (
                      <motion.line
                        key={`${node.path}-${i}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.15 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                        x1={`${node.x}%`} y1={`${node.y}%`}
                        x2={`${target.x}%`} y2={`${target.y}%`}
                        stroke="currentColor"
                        className="text-foreground"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                      />
                    );
                  })
                )}
              </svg>

              <div className="relative w-full" style={{ minHeight: "100vh" }}>
                {/* Background guide image */}
                <img
                  src="/images/lowbyrinth.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none"
                  style={{ minHeight: "100vh" }}
                />
                {lowbyrinthNodes.map((node, index) => (
                  <motion.div
                    key={node.path}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.5, ease: "easeOut" }}
                    className="absolute cursor-pointer group"
                    style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="min-w-[160px] max-w-[200px]">
                      <NodeCard
                        node={node}
                        isActive={activeNode === node.path}
                        onToggle={() => setActiveNode(activeNode === node.path ? null : node.path)}
                        onNavigate={handleNavigate}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LowbyrinthMode;