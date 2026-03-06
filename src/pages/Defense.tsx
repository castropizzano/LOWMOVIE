import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ConceptGraph from "@/components/ConceptGraph";
import capaDissertacao from "@/assets/capa-dissertacao.png";

/* ─── Block definitions ─── */
const BLOCKS = [
  { id: 0, title: "" },
  { id: 1, title: "Abertura" },
  { id: 2, title: "A Pesquisa" },
  { id: 3, title: "O Coletivo" },
  { id: 4, title: "Conceitos" },
  { id: 5, title: "Metodologia" },
  { id: 6, title: "Fragmentos" },
  { id: 7, title: "Teasers" },
  { id: 8, title: "Símbolos" },
  { id: 9, title: "Trailer" },
  { id: 10, title: "Frames" },
  { id: 11, title: "Contribuições" },
  { id: 12, title: "Questões Críticas" },
  { id: 13, title: "Lowbyrinth™" },
  { id: 14, title: "Encerramento" },
];

const TEASERS = [
  { name: "Eye of Horus", id: "819602079" },
  { name: "Ishtar Star", id: "819602679" },
  { name: "Star of Lakshmi", id: "819603077" },
  { name: "The Chaos", id: "819602986" },
  { name: "Labyrinth", id: "819602898" },
  { name: "The Rat", id: "819602797" },
];

const CONCEITOS = [
  { nome: "Lowbyrinth™", def: "Imagem-conceito que sintetiza o caráter processual, não-linear e labiríntico da criação no interior do coletivo LowPressure™.", highlight: true },
  { nome: "Poética do instante", def: "Captura do gesto efêmero como condensação sensível do real." },
  { nome: "Estética da borda", def: "Linguagem que emerge do limite entre controle e acaso." },
  { nome: "Registro em fluxo", def: "Câmera como extensão do corpo em movimento contínuo." },
  { nome: "Fabulação", def: "Gesto de criação do real, não invenção ficcional (Deleuze)." },
  { nome: "Afeto como eixo", def: "Implicação sensível como operador epistemológico." },
];

const FAQ_ITEMS = [
  { q: "Poética versus estética", a: "A escolha pelo termo poética — e não estética — é deliberada. Poética refere-se ao fazer em ato, ao modo como a obra se forma durante o processo." },
  { q: "Símbolo e signo", a: "O símbolo é mobilizado como imagem condensadora de sentido, não como unidade de análise semiótica." },
  { q: "Rigor metodológico", a: "O rigor reside na reflexividade explícita, na transparência do posicionamento e na articulação teórica consistente." },
  { q: "Delimitação do objeto", a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo LowPressure™ é analisado como condição de produção." },
  { q: "Dimensão política", a: "A obra opera como micropolítica do gesto e da ocupação sensível da cidade." },
  { q: "Autonomia conceitual", a: "A tese sustenta-se independentemente da referência junguiana. O Lowbyrinth™ funciona como imagem-conceito operacional." },
  { q: "Contribuição inédita", a: "O ineditismo reside no deslocamento do skate para o campo estético-metodológico." },
  { q: "Skate ou cinema?", a: "É sobre cinema a partir do skate. O skate não é o objeto final da investigação, mas a matriz." },
];

const CONTRIBUICOES = [
  { title: "Skate como matriz estética", desc: "Reposiciona o skate como prática produtora de linguagem audiovisual." },
  { title: "Operadores conceituais", desc: "Poética do instante, estética da borda, registro em fluxo e Lowbyrinth™ — ferramentas analíticas derivadas da prática." },
  { title: "Pesquisa-criação implicada", desc: "Pesquisar COM o skate — prática produtora de conhecimento sensível, situado e compartilhado." },
];

/* ─── Video embed component ─── */
const VideoEmbed = ({ src, fadeIn = true }: { src: string; fadeIn?: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <iframe
        src={src}
        className="w-full h-full absolute inset-0"
        style={{
          opacity: fadeIn ? (loaded ? 1 : 0) : 1,
          transition: "opacity 0.4s ease-in-out",
          border: "none",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

/* ─── Preloader ─── */
const VideoPreloader = ({ blockIndex }: { blockIndex: number }) => {
  const nextBlock = blockIndex + 1;
  let src: string | null = null;
  if (nextBlock === 1) src = "https://www.youtube.com/embed/rQuIDG-1EV4?autoplay=0";
  if (nextBlock === 9) src = "https://player.vimeo.com/video/819603753?autoplay=0&background=1";
  if (nextBlock === 14) src = "https://www.youtube.com/embed/g3SDaD16c7w?autoplay=0";
  if (nextBlock === 7) src = `https://player.vimeo.com/video/${TEASERS[0].id}?autoplay=0&background=1`;
  if (!src) return null;
  return <iframe src={src} className="absolute w-0 h-0 opacity-0 pointer-events-none" tabIndex={-1} />;
};

/* ─── Main component ─── */
const Defense = () => {
  const navigate = useNavigate();
  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentTeaser, setCurrentTeaser] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Block 0 auto-advance
  useEffect(() => {
    if (currentBlock === 0) {
      const timer = setTimeout(() => setCurrentBlock(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentBlock]);

  const goNext = useCallback(() => {
    if (currentBlock === 0) return; // auto-advance only
    // Block 7: sub-navigation for teasers
    if (currentBlock === 7 && currentTeaser < TEASERS.length - 1) {
      setCurrentTeaser((p) => p + 1);
      return;
    }
    if (currentBlock < BLOCKS.length - 1) {
      if (currentBlock === 7) setCurrentTeaser(0);
      setCurrentBlock((p) => p + 1);
    }
  }, [currentBlock, currentTeaser]);

  const goPrev = useCallback(() => {
    if (currentBlock === 0) return;
    // Block 7: sub-navigation for teasers
    if (currentBlock === 7 && currentTeaser > 0) {
      setCurrentTeaser((p) => p - 1);
      return;
    }
    // Circular: from block 13 back goes to block 1
    if (currentBlock === 13) {
      setCurrentBlock(1);
      return;
    }
    if (currentBlock > 1) {
      setCurrentBlock((p) => p - 1);
    }
  }, [currentBlock, currentTeaser]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, navigate]);

  // Click to advance (not on interactive elements)
  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a") || target.closest("iframe") || target.closest("svg")) return;
    goNext();
  }, [goNext]);

  const renderBlock = () => {
    switch (currentBlock) {
      /* ── Block 0: Black screen ── */
      case 0:
        return <div className="w-full h-full bg-black" />;

      /* ── Block 1: Intro video ── */
      case 1:
        return (
          <VideoEmbed
            src="https://www.youtube.com/embed/rQuIDG-1EV4?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
            fadeIn
          />
        );

      /* ── Block 2: Home focus mode ── */
      case 2:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
              <img src={capaDissertacao} alt="Capa da dissertação" className="w-full max-w-sm mx-auto rounded-lg shadow-lg" />
              <div className="text-left">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                  Dissertação de Mestrado — Março 2026
                </p>
                <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight text-white">
                  LowMovie™
                </h2>
                <p className="mt-2 text-lg md:text-xl font-medium text-neutral-400 uppercase tracking-wide">
                  e o Labirinto Criativo
                </p>
                <p className="mt-6 text-sm text-neutral-500 leading-relaxed">
                  Subjetividade, subcultura e a poética em movimento<br />do coletivo LowPressure™
                </p>
                <div className="mt-8 space-y-1">
                  <p className="text-sm text-neutral-300">PPG em Cinema e Artes do Vídeo — UNESPAR</p>
                  <p className="text-xs text-neutral-500">Castro Pizzano · Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                </div>
              </div>
            </div>
          </div>
        );

      /* ── Block 3: Coletivo gallery ── */
      case 3:
        return (
          <div className="flex items-center justify-center h-full p-8">
            <div className="grid grid-cols-5 grid-rows-2 gap-2 max-w-6xl w-full h-[70vh]">
              {Array.from({ length: 10 }, (_, i) => (
                <img
                  key={i}
                  src={`/images/coletivo/${String(i + 1).padStart(2, "0")}.png`}
                  alt={`Coletivo ${i + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              ))}
            </div>
          </div>
        );

      /* ── Block 4: Conceitos ── */
      case 4:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-10 text-center">
                Conceitos Autorais
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {CONCEITOS.map((c) => (
                  <div
                    key={c.nome}
                    className={`border rounded-lg p-6 transition-all ${
                      c.highlight
                        ? "border-white/40 bg-white/10 scale-105 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        : "border-neutral-800 bg-neutral-900/50"
                    }`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-wide mb-2 ${c.highlight ? "text-white" : "text-neutral-300"}`}>
                      {c.nome}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{c.def}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 5: Metodologia ── */
      case 5:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-10 text-center">
                Metodologia
              </h2>
              <p className="text-sm text-neutral-400 text-center mb-10">
                Pesquisa-criação implicada — três eixos operacionais
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Afeto", icon: "♥", desc: "Vínculo sensível com o campo investigado. Afetar e ser afetado constituem formas legítimas de produzir conhecimento." },
                  { title: "Escuta", icon: "◉", desc: "Atenção às dinâmicas coletivas, aos silêncios, aos gestos não verbalizados. Escutar é mais do que ouvir." },
                  { title: "Improviso", icon: "⚡", desc: "Abertura ao imprevisto como dado epistemológico legítimo. Arquitetura móvel capaz de se refazer a cada encontro." },
                ].map((e) => (
                  <div key={e.title} className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
                    <p className="text-2xl mb-3">{e.icon}</p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-2">{e.title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 6: Intro teasers ── */
      case 6:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600 mb-4">
                LowPressure™ apresenta
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white">
                Fragmentos simbólicos
              </h2>
              <p className="mt-4 text-sm text-neutral-500">do processo criativo</p>
            </div>
          </div>
        );

      /* ── Block 7: Teasers playlist ── */
      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-full max-w-4xl aspect-video relative">
              <VideoEmbed
                src={`https://player.vimeo.com/video/${TEASERS[currentTeaser].id}?autoplay=1&background=0&muted=0`}
                fadeIn
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button onClick={() => currentTeaser > 0 && setCurrentTeaser((p) => p - 1)} className="text-neutral-600 hover:text-white transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Teaser {currentTeaser + 1}/6 — {TEASERS[currentTeaser].name}
              </p>
              <button onClick={() => currentTeaser < 5 && setCurrentTeaser((p) => p + 1)} className="text-neutral-600 hover:text-white transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        );

      /* ── Block 8: Symbols grid ── */
      case 8:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-10 text-center">
                Símbolos
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {TEASERS.map((t) => (
                  <div
                    key={t.id}
                    className="border border-neutral-800 rounded-lg p-6 text-center bg-neutral-900/50 transition-all hover:border-white/40 hover:bg-white/5 cursor-default"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide text-neutral-300">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 9: Trailer ── */
      case 9:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="w-full max-w-5xl aspect-video relative">
              <VideoEmbed
                src="https://player.vimeo.com/video/819603753?autoplay=1&muted=0"
                fadeIn
              />
            </div>
          </div>
        );

      /* ── Block 10: Frames gallery ── */
      case 10:
        return (
          <div className="flex items-center justify-center h-full p-8 overflow-auto">
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <img
                    key={`still-${i}`}
                    src={`/images/stills/${String(i + 1).padStart(3, "0")}.jpg`}
                    alt={`Still ${i + 1}`}
                    className="w-full h-40 object-cover rounded"
                  />
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 14 }, (_, i) => (
                  <img
                    key={`seq-${i}`}
                    src={`/images/sequence/${String(i + 1).padStart(2, "0")}.png`}
                    alt={`Sequence ${i + 1}`}
                    className="w-full h-24 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 11: Contribuições ── */
      case 11:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-10 text-center">
                Contribuições
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {CONTRIBUICOES.map((c, i) => (
                  <div key={i} className="border border-neutral-800 rounded-lg p-8 bg-neutral-900/50">
                    <p className="text-xs font-semibold text-neutral-600 tracking-widest mb-3">{String(i + 1).padStart(2, "0")}</p>
                    <p className="text-sm font-semibold uppercase tracking-wide text-white mb-3">{c.title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 12: FAQ ── */
      case 12:
        return (
          <div className="flex items-center justify-center h-full px-8 overflow-auto">
            <div className="max-w-3xl w-full py-12">
              <h2 className="text-2xl font-bold uppercase tracking-wide text-white mb-10 text-center">
                Questões Críticas
              </h2>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="border border-neutral-800 rounded-lg p-5 bg-neutral-900/50">
                    <p className="text-sm font-semibold uppercase tracking-wide text-neutral-300 mb-2">{item.q}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      /* ── Block 13: Mapa Lowbyrinth™ ── */
      case 13:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-full max-w-5xl h-[60vh]">
              <ConceptGraph />
            </div>
            <p className="mt-8 text-lg font-semibold uppercase tracking-widest text-white animate-pulse">
              É preciso entrar.
            </p>
          </div>
        );

      /* ── Block 14: Encerramento ── */
      case 14:
        return (
          <VideoEmbed
            src="https://www.youtube.com/embed/g3SDaD16c7w?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
            fadeIn
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black text-white overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      {/* Preloader */}
      <VideoPreloader blockIndex={currentBlock} />

      {/* Block content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBlock + (currentBlock === 7 ? `-${currentTeaser}` : "")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          {renderBlock()}
        </motion.div>
      </AnimatePresence>

      {/* Bottom indicator (hidden on block 0) */}
      {currentBlock > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 pointer-events-none z-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
            {String(currentBlock).padStart(2, "0")} — {BLOCKS[currentBlock]?.title}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-700">
            Defense Mode — LowMovie™ Research
          </p>
        </div>
      )}

      {/* Next button (hidden on block 0 and last block) */}
      {currentBlock > 0 && currentBlock < BLOCKS.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute bottom-4 right-1/2 translate-x-1/2 md:right-6 md:translate-x-0 md:bottom-12 z-20 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-neutral-700 hover:text-neutral-400 transition-colors pointer-events-auto"
        >
          Next <ArrowRight className="h-3 w-3" />
        </button>
      )}
    </div>
  );
};

export default Defense;
