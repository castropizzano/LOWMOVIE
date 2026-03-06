import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import ConceptGraph from "@/components/ConceptGraph";
import capaDissertacao from "@/assets/capa-dissertacao.png";

/* ─── Block definitions (0-13) ─── */
const BLOCKS = [
  { id: 0, title: "" },
  { id: 1, title: "Abertura" },
  { id: 2, title: "A Pesquisa" },
  { id: 3, title: "O Coletivo" },
  { id: 4, title: "Conceitos" },
  { id: 5, title: "Metodologia" },
  { id: 6, title: "Fragmentos" },
  { id: 7, title: "Teasers" },
  { id: 8, title: "Trailer" },
  { id: 9, title: "Frames" },
  { id: 10, title: "Contribuições" },
  { id: 11, title: "Questões Críticas" },
  { id: 12, title: "Lowbyrinth™" },
  { id: 13, title: "Encerramento" },
];

const TEASERS = [
  { name: "Eye of Horus", id: "819602079", legend: "O olhar. A câmera. O registro das tentativas." },
  { name: "Ishtar Star", id: "819602679", legend: "A criação coletiva e os bastidores da produção." },
  { name: "Star of Lakshmi", id: "819603077", legend: "O esforço, o erro, e a superação." },
  { name: "The Chaos", id: "819602986", legend: "A tensão urbana e a transgressão." },
  { name: "Labyrinth", id: "819602898", legend: "O espaço da cidade como campo de aprendizagem." },
  { name: "The Rat", id: "819602797", legend: "A sobrevivência e adaptação das subculturas urbanas." },
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
  { title: "Skate como matriz audiovisual", desc: "O skate não aparece apenas como prática esportiva, mas como forma de organizar o olhar cinematográfico." },
  { title: "Operadores conceituais", desc: "Poética do instante, estética da borda e registro em fluxo." },
  { title: "Pesquisa-criação implicada", desc: "Uma metodologia onde o processo artístico produz conhecimento." },
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
  if (nextBlock === 8) src = "https://player.vimeo.com/video/819603753?autoplay=0&background=1";
  if (nextBlock === 13) src = "https://www.youtube.com/embed/g3SDaD16c7w?autoplay=0";
  if (nextBlock === 7) src = `https://player.vimeo.com/video/${TEASERS[0].id}?autoplay=0&background=1`;
  if (!src) return null;
  return <iframe src={src} className="absolute w-0 h-0 opacity-0 pointer-events-none" tabIndex={-1} />;
};

/* ─── Main component ─── */
const Defense = () => {
  const navigate = useNavigate();
  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentTeaser, setCurrentTeaser] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentBlock === 0) {
      const timer = setTimeout(() => setCurrentBlock(1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentBlock]);

  // Block 1: show text after video ends (~37s)
  useEffect(() => {
    if (currentBlock === 1) {
      setVideoEnded(false);
      const timer = setTimeout(() => setVideoEnded(true), 37000);
      return () => clearTimeout(timer);
    }
  }, [currentBlock]);

  const goNext = useCallback(() => {
    if (currentBlock === 0) return;
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
    if (currentBlock === 7 && currentTeaser > 0) {
      setCurrentTeaser((p) => p - 1);
      return;
    }
    if (currentBlock === 12) {
      setCurrentBlock(1);
      return;
    }
    if (currentBlock > 1) {
      setCurrentBlock((p) => p - 1);
    }
  }, [currentBlock, currentTeaser]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, navigate]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a") || target.closest("iframe") || target.closest("svg")) return;
    goNext();
  }, [goNext]);

  const renderBlock = () => {
    switch (currentBlock) {
      case 0:
        return <div className="w-full h-full bg-black" />;

      case 1:
        return (
          <div className="relative w-full h-full">
            <VideoEmbed
              src="https://www.youtube.com/embed/rQuIDG-1EV4?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
              fadeIn
            />
            <AnimatePresence>
              {videoEnded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-black/80"
                >
                  <div className="max-w-3xl px-8 text-center space-y-3">
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      "Essa pesquisa começou tentando compreender o que acontece nesse tipo de gesto."
                    </p>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      "Um gesto que acontece entre corpo, cidade e risco — e que muitas vezes acaba se transformando em imagem."
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

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
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    A dissertação que apresento hoje investiga como práticas subculturais, como o skate, podem produzir linguagem cinematográfica e conhecimento estético.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    O objeto central da pesquisa é o processo criativo do coletivo LowPressure™, a partir da produção do filme LowMovie™.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Em vez de observar esse processo à distância, a pesquisa foi construída a partir dele.
                  </p>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-sm text-neutral-300">PPG em Cinema e Artes do Vídeo — UNESPAR</p>
                  <p className="text-xs text-neutral-500">Castro Pizzano · Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col items-center justify-center h-full p-8">
            <div className="text-center mb-6 max-w-3xl space-y-2">
              <p className="text-sm text-neutral-400 leading-relaxed">
                O coletivo LowPressure™ se organiza como um espaço de experimentação estética onde skate, imagem e cidade se encontram.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Esse encontro produz não apenas registros de manobras, mas uma forma própria de linguagem audiovisual.
              </p>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-2 max-w-6xl w-full h-[60vh]">
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

      case 4:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-10 space-y-3 max-w-2xl mx-auto">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Para compreender esse processo, proponho o conceito de Lowbyrinth™.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  O Lowbyrinth descreve um processo criativo que não se organiza de forma linear.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Ele opera como um labirinto sensível, onde tentativa, erro, descoberta e improviso fazem parte da criação.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 pointer-events-none">
                {CONCEITOS.map((c, i) => (
                  <motion.div
                    key={c.nome}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`border rounded-lg p-6 ${
                      c.highlight
                        ? "border-purple-500/40 bg-purple-950/20 shadow-[0_0_25px_rgba(168,85,247,0.15)]"
                        : "border-neutral-800 bg-neutral-900/50"
                    }`}
                  >
                    <p className={`text-sm font-semibold uppercase tracking-wide mb-2 ${c.highlight ? "text-purple-200" : "text-neutral-300"}`}>
                      {c.nome}
                    </p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{c.def}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-5xl w-full">
              <div className="text-center mb-10 space-y-3 max-w-2xl mx-auto">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Metodologicamente, a pesquisa se insere no campo da pesquisa-criação implicada.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Nesse modelo, prática artística e reflexão teórica não são separadas.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  O processo criativo funciona simultaneamente como produção estética e como campo de investigação.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  O rigor da pesquisa não está na neutralidade, mas na reflexividade sobre o próprio processo criativo.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Afeto", icon: "♥", desc: "Vínculo sensível com o campo investigado. Afetar e ser afetado constituem formas legítimas de produzir conhecimento." },
                  { title: "Escuta", icon: "◉", desc: "Atenção às dinâmicas coletivas, aos silêncios, aos gestos não verbalizados. Escutar é mais do que ouvir." },
                  { title: "Improviso", icon: "⚡", desc: "Abertura ao imprevisto como dado epistemológico legítimo. Arquitetura móvel capaz de se refazer a cada encontro." },
                ].map((e) => (
                  <div key={e.title} className="border border-neutral-800 rounded-lg p-10 bg-neutral-900/50">
                    <p className="text-3xl mb-3 opacity-70">{e.icon}</p>
                    <p className="text-base font-semibold uppercase tracking-wide text-white mb-2">{e.title}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-2xl px-8 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
                LowPressure™ apresenta
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white">
                Fragmentos simbólicos
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Durante o processo de criação do LowMovie™, produzimos uma série de peças audiovisuais que funcionam como fragmentos simbólicos do universo do filme.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Esses fragmentos não revelam diretamente a obra, mas expressam os princípios que estruturam o processo criativo do coletivo.
              </p>
            </div>
          </div>
        );

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
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {currentTeaser + 1}/6 — {TEASERS[currentTeaser].name}
                </p>
                <p className="mt-2 text-[11px] text-neutral-500 max-w-md leading-relaxed italic">
                  {TEASERS[currentTeaser].legend}
                </p>
              </div>
              <button onClick={() => currentTeaser < 5 && setCurrentTeaser((p) => p + 1)} className="text-neutral-600 hover:text-white transition-colors">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <p className="text-sm text-neutral-400 leading-relaxed text-center mb-6 max-w-2xl">
              A convergência dessas ideias aparece no trailer do filme LowMovie™, que sintetiza o conceito de Lowbyrinth™.
            </p>
            <div className="w-full max-w-5xl aspect-video relative">
              <VideoEmbed
                src="https://player.vimeo.com/video/819603753?autoplay=1&muted=0"
                fadeIn
              />
            </div>
          </div>
        );

      case 9:
        return (
          <div className="flex flex-col items-center justify-center h-full p-8 overflow-auto">
            <div className="text-center mb-6 max-w-2xl space-y-2">
              <p className="text-sm text-neutral-400 leading-relaxed">
                O LowMovie™ não é apenas objeto da pesquisa.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Ele é também o espaço onde a investigação acontece.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                O filme articula corpo, câmera e cidade como operadores de linguagem.
              </p>
            </div>
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <img
                    key={`still-${i}`}
                    src={`/images/stills/${String(i + 1).padStart(3, "0")}.jpg`}
                    alt={`Still ${i + 1}`}
                    className="w-full h-36 object-cover rounded"
                  />
                ))}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 14 }, (_, i) => (
                  <img
                    key={`seq-${i}`}
                    src={`/images/sequence/${String(i + 1).padStart(2, "0")}.png`}
                    alt={`Sequence ${i + 1}`}
                    className="w-full h-20 object-cover rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="max-w-4xl w-full">
              <p className="text-sm text-neutral-400 leading-relaxed text-center mb-10">
                A pesquisa propõe três contribuições principais.
              </p>
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

      case 11:
        return (
          <div className="flex items-center justify-center h-full px-8 overflow-auto">
            <div className="max-w-[900px] w-full py-12">
              <div className="text-center mb-12 space-y-2">
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Toda pesquisa em arte opera em tensões conceituais.
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Em vez de evitá-las, optei por torná-las visíveis.
                </p>
              </div>
              <div className="space-y-6 pointer-events-none">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="border border-neutral-800 rounded-lg p-6 bg-neutral-900/50">
                    <p className="text-sm font-semibold uppercase tracking-wide text-neutral-300 mb-3">{item.q}</p>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <p className="text-sm text-neutral-400 leading-relaxed text-center mb-4">
              O portal organiza a pesquisa como um percurso navegável.
            </p>
            <div className="w-full max-w-5xl h-[50vh]">
              <ConceptGraph />
            </div>
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-neutral-400 leading-relaxed">
                O LowMovie™ é um filme-labirinto.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Não se assiste a ele de fora.
              </p>
              <p className="mt-2 text-lg font-semibold uppercase tracking-widest text-white animate-pulse">
                É preciso entrar.
              </p>
            </div>
          </div>
        );

      case 13:
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
      <VideoPreloader blockIndex={currentBlock} />

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

      {/* Exit button */}
      {currentBlock > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate("/"); }}
          className="absolute top-4 left-4 z-20 text-neutral-700 hover:text-neutral-400 transition-colors pointer-events-auto"
          title="Voltar ao portal (ESC)"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Footer: block indicator left, arrow right */}
      {currentBlock > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600 pointer-events-none">
            BLOCO {String(currentBlock).padStart(2, "0")} — {BLOCKS[currentBlock]?.title?.toUpperCase()}
          </p>
          {currentBlock < BLOCKS.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="text-neutral-700 hover:text-neutral-400 transition-colors pointer-events-auto"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Defense;
