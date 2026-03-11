import { motion, AnimatePresence } from "framer-motion";
import { X, Rat, Eye, Sparkles, Shield, Zap } from "lucide-react";
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

const systemLayers = [
  {
    number: "01",
    title: "EXPERIÊNCIA URBANA",
    subtitle: "O Skate como Prática Estética Urbana",
    description: "A experiência urbana constitui a base do sistema. O skate transforma a cidade em campo de criação — cada pico, cada terreno, cada sessão produz linguagem. O corpo do skatista negocia com a arquitetura, e dessa fricção emerge matéria criativa.",
  },
  {
    number: "02",
    title: "PROCESSO CRIATIVO",
    subtitle: "Filmagem, Montagem, Design e Trilha como Gesto Único",
    description: "O processo criativo nasce do movimento. Filmar, montar, desenhar e compor não são etapas separadas — são atos simultâneos de um mesmo gesto. A câmera é extensão do corpo. A montagem é improvisação. O design é manifesto. A trilha é paisagem sonora do asfalto.",
  },
  {
    number: "03",
    title: "TRÍADE METODOLÓGICA",
    subtitle: "Afeto, Escuta e Improviso como Epistemologia",
    description: "Os três eixos que sustentam a pesquisa-criação: o afeto como forma de conhecimento (afetar e ser afetado pelo campo), a escuta como método (ouvir o que o terreno, o corpo e a cidade dizem), e o improviso como epistemologia (a instabilidade e a surpresa como matéria de saber).",
  },
  {
    number: "04",
    title: "CONCEITOS OPERADORES",
    subtitle: "Poética do Instante, Estética da Borda, Registro em Fluxo",
    description: "Os conceitos que organizam a prática sem engessá-la: capturar o instante irrepetível (a manobra que acontece uma única vez), habitar as bordas (do enquadramento, do asfalto, da norma), e registrar sem interromper o fluxo (a câmera como cúmplice, não como vigilante).",
  },
  {
    number: "05",
    title: "NÚCLEO: LOWMOVIE™",
    subtitle: "Corpo + Câmera + Cidade = Sistema Criativo Vivo",
    description: "No centro do sistema, LowMovie™ opera como organismo vivo onde corpo, câmera e cidade se fundem. Não é um método que se aplica — é uma prática que se vive. O erro é matéria sagrada, a autonomia é política, e produzir é resistir.",
  },
];

const researcherDirectives = [
  {
    title: "Implicação Situada",
    text: "O pesquisador não observa de fora — ele está dentro do campo. Skatista, videomaker e pesquisador são o mesmo corpo.",
  },
  {
    title: "Confrontação Teórica",
    text: "A prática interroga a teoria. Deleuze, Guattari, Rancière e Herzog são convocados pelo asfalto, não pela biblioteca.",
  },
  {
    title: "Simultaneidade de Métodos",
    text: "Pesquisa-criação, autoetnografia, cartografia afetiva e montagem cinematográfica operam juntas, sem hierarquia.",
  },
];

const symbolicField = [
  { icon: Rat, name: "Rato Alquimista", meaning: "Transmutação pela margem — transformar o descarte em ouro criativo." },
  { icon: Eye, name: "Olho de Hórus", meaning: "Visão expandida — ver além do visível, captar o invisível do gesto." },
  { icon: Sparkles, name: "Estrela de Ishtar", meaning: "Criação como força cósmica — o ato de criar como ritual." },
  { icon: Shield, name: "Estrela de Lakshmi", meaning: "Proteção e prosperidade criativa — a crew como rede de suporte." },
  { icon: Zap, name: "Símbolo do Caos", meaning: "O caos como matriz generativa — desordem produtiva, entropia criativa." },
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

            {/* === SEÇÃO 4: As 5 Camadas do Sistema === */}
            <div className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)] mb-2">
                  Anatomia do Sistema
                </p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-white/90">
                  As 5 Camadas do Sistema LowMovie™
                </h3>
              </motion.div>

              <div className="space-y-0">
                {systemLayers.map((layer, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                    className="border-l-2 border-[hsl(0,70%,45%)]/40 pl-6 py-6 hover:border-[hsl(0,70%,50%)] hover:bg-white/[0.02] transition-all -mx-2 px-8 rounded-r"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[hsl(0,70%,45%)]/60 mb-1">
                      Camada {layer.number}
                    </p>
                    <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-white/80 mb-1">
                      {layer.title}
                    </h4>
                    <p className="text-xs font-semibold text-white/50 mb-3 italic">
                      {layer.subtitle}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed text-justify">
                      {layer.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/10" />

            {/* === SEÇÃO 5: O Artista-Pesquisador === */}
            <div className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)] mb-2">
                  Lugar de Fala
                </p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-white/90">
                  O Artista-Pesquisador
                </h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed max-w-2xl text-justify">
                  LowMovie™ opera a partir de um lugar de fala específico: o artista-pesquisador que é, 
                  simultaneamente, skatista, videomaker e investigador. Não há separação entre quem cria 
                  e quem pesquisa — o corpo que anda de skate é o mesmo que filma, monta e teoriza.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {researcherDirectives.map((directive, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="border border-white/10 rounded-lg p-5 hover:border-white/20 transition-colors"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)]/70 mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-white/80 mb-3">
                      {directive.title}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {directive.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/10" />

            {/* === SEÇÃO 6: Campo Simbólico === */}
            <div className="py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-10"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[hsl(0,70%,50%)] mb-2">
                  Imaginário
                </p>
                <h3 className="text-xl font-bold uppercase tracking-[0.15em] text-white/90">
                  Campo Simbólico
                </h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed max-w-2xl text-justify">
                  LowMovie™ mobiliza um campo simbólico próprio — figuras arquetípicas e signos 
                  que atravessam a obra como forças de sentido, conectando o gesto criativo a camadas 
                  mais profundas de significação.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {symbolicField.map((symbol, i) => {
                  const IconComp = symbol.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + i * 0.08 }}
                      className="border border-white/10 rounded-lg p-4 text-center hover:border-[hsl(0,70%,45%)]/40 hover:bg-white/[0.02] transition-all group"
                    >
                      <IconComp className="h-6 w-6 mx-auto mb-3 text-white/30 group-hover:text-[hsl(0,70%,50%)] transition-colors" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/70 mb-2">
                        {symbol.name}
                      </p>
                      <p className="text-[10px] text-white/40 leading-relaxed">
                        {symbol.meaning}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

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
