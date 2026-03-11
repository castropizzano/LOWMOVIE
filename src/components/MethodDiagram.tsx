import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const layers = [
  {
    id: "experiencia",
    label: "EXPERIÊNCIA URBANA",
    items: ["Skate", "Cidade", "Coletivo LowPressure™"],
    description: "A rua é o dispositivo. O skate transforma a cidade em campo de criação — cada pico, cada terreno, cada sessão produz linguagem.",
    radius: 230,
    color: "hsl(0, 0%, 30%)",
    activeColor: "hsl(300, 60%, 45%)",
  },
  {
    id: "processo",
    label: "PROCESSO CRIATIVO",
    items: ["Filmagem de skate", "Montagem audiovisual", "Design independente", "Trilha sonora autoral"],
    description: "O processo nasce do movimento. Filmar, montar, desenhar e compor são atos simultâneos de um mesmo gesto criativo.",
    radius: 180,
    color: "hsl(0, 0%, 35%)",
    activeColor: "hsl(300, 60%, 50%)",
  },
  {
    id: "triade",
    label: "TRÍADE METODOLÓGICA",
    items: ["Afeto", "Escuta", "Improviso"],
    description: "Os três eixos que sustentam a pesquisa-criação: afetar e ser afetado, ouvir o campo, e improvisar como forma de conhecimento.",
    radius: 130,
    color: "hsl(0, 0%, 40%)",
    activeColor: "hsl(300, 60%, 55%)",
  },
  {
    id: "conceitos",
    label: "CONCEITOS OPERADORES",
    items: ["Poética do Instante", "Estética da Borda", "Registro em Fluxo"],
    description: "Os conceitos que organizam a prática: capturar o instante irrepetível, habitar as bordas, e registrar sem interromper o fluxo.",
    radius: 80,
    color: "hsl(0, 0%, 45%)",
    activeColor: "hsl(300, 60%, 60%)",
  },
];

const expansionItems = ["Filme", "LowZine", "Portal Digital", "Eventos", "Arquivo Vivo"];

const MethodDiagram = () => {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const cx = 260;
  const cy = 260;

  if (isMobile) {
    return (
      <div className="space-y-3 px-2">
        {/* Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="border border-primary/60 rounded-lg p-5 text-center bg-primary/10"
        >
          <p className="text-base font-bold tracking-[0.3em] uppercase text-foreground">LOWMOVIE™</p>
          <p className="text-[10px] tracking-widest uppercase text-muted-foreground mt-1">Corpo + Câmera + Cidade</p>
        </motion.div>

        {/* Layers reversed (inside out) */}
        {[...layers].reverse().map((layer, i) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="border border-border rounded-lg p-4 bg-foreground/5 cursor-pointer hover:bg-foreground/[0.08] transition-colors"
            onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{layer.label}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {layer.items.map((item) => (
                <span key={item} className="text-xs text-foreground/70 bg-foreground/5 px-2 py-1 rounded">{item}</span>
              ))}
            </div>
            {activeLayer === layer.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-muted-foreground mt-3 leading-relaxed italic"
              >
                {layer.description}
              </motion.p>
            )}
          </motion.div>
        ))}

        {/* Expansion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="border border-border border-dashed rounded-lg p-4"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">Obra em Expansão →</p>
          <div className="flex flex-wrap gap-2">
            {expansionItems.map((item) => (
              <span key={item} className="text-xs text-foreground/60 bg-foreground/5 px-2 py-1 rounded">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <svg width="520" height="520" viewBox="0 0 520 520" className="max-w-full">
        {/* Concentric rings */}
        {layers.map((layer, i) => (
          <motion.g
            key={layer.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            onMouseEnter={() => setActiveLayer(layer.id)}
            onMouseLeave={() => setActiveLayer(null)}
            className="cursor-pointer"
          >
            <circle
              cx={cx}
              cy={cy}
              r={layer.radius}
              fill="none"
              stroke={activeLayer === layer.id ? layer.activeColor : layer.color}
              strokeWidth={activeLayer === layer.id ? 2 : 1}
              strokeDasharray={i === 0 ? "none" : "8 4"}
              className="transition-all duration-300"
            />
            {/* Label on top of ring */}
            <text
              x={cx}
              y={cy - layer.radius - 8}
              textAnchor="middle"
              fill={activeLayer === layer.id ? "hsl(300, 60%, 55%)" : "rgba(255,255,255,0.4)"}
              fontSize="9"
              fontWeight="700"
              letterSpacing="0.15em"
              className="uppercase transition-all duration-300"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {layer.label}
            </text>

            {/* Items distributed around ring */}
            {layer.items.map((item, j) => {
              const angle = (Math.PI * 2 * j) / layer.items.length - Math.PI / 2 + Math.PI / 4;
              const x = cx + Math.cos(angle) * (layer.radius - 2);
              const y = cy + Math.sin(angle) * (layer.radius - 2);
              return (
                <motion.g
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeLayer === layer.id ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <circle cx={x} cy={y} r="3" fill={activeLayer === layer.id ? layer.activeColor : "rgba(255,255,255,0.2)"} />
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    fill={activeLayer === layer.id ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)"}
                    fontSize="10"
                    fontWeight="600"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                    className="transition-all duration-300"
                  >
                    {item}
                  </text>
                </motion.g>
              );
            })}
          </motion.g>
        ))}

        {/* Core */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        >
          <circle cx={cx} cy={cy} r="35" fill="none" stroke="hsl(300, 60%, 45%)" strokeWidth="2" />
          <motion.circle
            cx={cx}
            cy={cy}
            r="35"
            fill="hsl(300, 60%, 45%)"
            fillOpacity="0.1"
            animate={{ fillOpacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <text
            x={cx}
            y={cy - 4}
            textAnchor="middle"
            fill="hsl(0, 0%, 93%)"
            fontSize="11"
            fontWeight="700"
            letterSpacing="0.2em"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            LOWMOVIE™
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            fill="rgba(255,255,255,0.4)"
            fontSize="7"
            letterSpacing="0.1em"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Corpo + Câmera + Cidade
          </text>
        </motion.g>

        {/* Expansion arrows */}
        {expansionItems.map((item, i) => {
          const angle = (Math.PI * 2 * i) / expansionItems.length - Math.PI / 2;
          const startR = 235;
          const endR = 250;
          const x1 = cx + Math.cos(angle) * startR;
          const y1 = cy + Math.sin(angle) * startR;
          const x2 = cx + Math.cos(angle) * endR;
          const y2 = cy + Math.sin(angle) * endR;
          const tx = cx + Math.cos(angle) * (endR + 8);
          const ty = cy + Math.sin(angle) * (endR + 8);
          return (
            <motion.g
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 2" />
              <text
                x={tx}
                y={ty}
                textAnchor={Math.cos(angle) > 0.1 ? "start" : Math.cos(angle) < -0.1 ? "end" : "middle"}
                dominantBaseline="middle"
                fill="rgba(255,255,255,0.35)"
                fontSize="9"
                fontWeight="600"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                {item}
              </text>
            </motion.g>
          );
        })}
      </svg>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mt-4"
      >
        Obra em Expansão →
      </motion.p>
    </div>
  );
};

export default MethodDiagram;