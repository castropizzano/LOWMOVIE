import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MethodDiagram from "./MethodDiagram";

interface MethodManualProps {
  open: boolean;
  onClose: () => void;
}

const principles = [
  "A cidade é o campo de criação. A rua é o dispositivo.",
  "O corpo é instrumento de pesquisa — ele sente a vibração do terreno e a tensão da cidade.",
  "A câmera é extensão do corpo em movimento. Ela não observa: participa.",
  "O skate gera linguagem audiovisual. Ritmo, enquadramento, duração e intensidade nascem da manobra.",
  "O erro beira o sagrado. Ele alimenta o processo criativo e revela o que o controle esconde.",
  "O improviso é epistemologia. A instabilidade e a surpresa funcionam como matéria de conhecimento.",
  "A escuta é método. Silêncio antes da manobra, ruído das rodas no concreto, respiração da cidade.",
  "O afeto é forma de conhecimento. Afetar e ser afetado pelo campo produz saber.",
  "O glitch e a imperfeição são força estética. A borda do skate encontra a borda do enquadramento.",
  "A autonomia é política criativa. Produção direta, circulação autônoma, criação coletiva.",
  "A crew é organismo criativo. Skatistas, videomakers, músicos e designers formam um sistema vivo.",
  "A obra se expande para além do filme. Zine, portal, evento, arquivo — tudo é processo.",
  "LowMovie™ é um sistema criativo vivo. Produzir é resistir. O movimento é a poética.",
];

const MethodManual = ({ open, onClose }: MethodManualProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-auto"
        >
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between px-6 py-4 z-10 bg-black/80 backdrop-blur-md">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                Manual do Método LowMovie™
              </h2>
              <p className="text-xs text-white/40 mt-1 tracking-wide">
                Práticas de Pesquisa-Criação e Autonomia Coletiva
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/50 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="max-w-5xl mx-auto px-4 pb-16">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="py-12 border-b border-white/10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)] mb-4">
                O Deslocamento Fundamental
              </p>
              <p className="text-sm text-white/70 leading-relaxed max-w-2xl text-justify">
                LowMovie™ constitui uma metodologia de pesquisa-criação implicada em que o skate 
                atua como matriz de produção audiovisual. O corpo em movimento e a vivência urbana 
                operam como agentes constituintes da gramática fílmica. A cidade funciona como campo 
                ativo de criação. A câmera participa do acontecimento.
              </p>
            </motion.div>

            {/* Diagram */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="py-16"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8 text-center">
                Sistema de Conhecimento Criativo
              </p>
              <MethodDiagram />
            </motion.div>

            {/* Separator */}
            <div className="border-t border-white/10" />

            {/* 13 Principles */}
            <div className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)] mb-2">
                  Manifesto
                </p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-white/90">
                  13 Princípios do Método LowMovie™
                </h3>
              </motion.div>

              <div className="space-y-0">
                {principles.map((principle, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                    className="flex gap-5 py-5 border-b border-white/5 group hover:bg-white/[0.02] transition-colors px-2 -mx-2 rounded"
                  >
                    <span className="text-2xl font-bold text-[hsl(0,70%,45%)]/60 group-hover:text-[hsl(0,70%,50%)] transition-colors tabular-nums leading-none pt-0.5 min-w-[2ch] text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">
                      {principle}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Closing quote */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-16 pt-8 border-t border-white/10 text-center"
              >
                <blockquote className="text-sm italic text-white/50 max-w-lg mx-auto">
                  "O erro é algo que beira o sagrado."
                </blockquote>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mt-3">
                  Werner Herzog
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MethodManual;
