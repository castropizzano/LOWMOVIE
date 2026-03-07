import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronDown } from "lucide-react";
import ConceptGraph from "@/components/ConceptGraph";
import ImageLightbox from "@/components/ImageLightbox";
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

const TEASERS: { name: string; id: string; legend: string; platform?: "youtube" | "vimeo" }[] = [
  { name: "Eye of Horus", id: "epIEe4pf1o8", legend: "O olhar. A câmera. O registro das tentativas.", platform: "youtube" },
  { name: "Ishtar Star", id: "kVrXqhYnZjw", legend: "A criação coletiva e os bastidores da produção.", platform: "youtube" },
  { name: "Star of Lakshmi", id: "w4coRA38tto", legend: "O esforço, o erro, e a superação.", platform: "youtube" },
  { name: "The Chaos", id: "DMl8LWjiUyk", legend: "A tensão urbana e a transgressão.", platform: "youtube" },
  { name: "Labyrinth", id: "trBIP6Jl7LY", legend: "O espaço da cidade como campo de aprendizagem.", platform: "youtube" },
  { name: "The Rat", id: "i-dUpm9XbHA", legend: "A sobrevivência e adaptação das subculturas urbanas.", platform: "youtube" },
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
const VideoEmbed = ({ src, fadeIn = true, contained = false }: { src: string; fadeIn?: boolean; contained?: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 ${contained ? 'w-full aspect-video' : 'w-full h-full'}`}>
      <iframe
        src={src}
        className="w-full h-full absolute inset-0"
        style={{
          opacity: fadeIn ? (loaded ? 1 : 0) : 1,
          transition: "opacity 0.4s ease-in-out",
          border: "none",
        }}
        allow="autoplay; fullscreen; picture-in-picture"
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
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
  if (nextBlock === 8) src = "https://www.youtube.com/embed/Zom42CQ83CU?autoplay=0";
  if (nextBlock === 13) src = "https://www.youtube.com/embed/g3SDaD16c7w?autoplay=0";
  if (nextBlock === 7) src = `https://www.youtube.com/embed/${TEASERS[0].id}?autoplay=0`;
  if (!src) return null;
  return <iframe src={src} className="absolute w-0 h-0 opacity-0 pointer-events-none" tabIndex={-1} sandbox="allow-scripts allow-same-origin allow-presentation" />;
};

/* ─── FAQ Item with click-to-reveal ─── */
const FAQCard = ({ item }: { item: { q: string; a: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
      className="border border-border rounded-lg p-8 bg-card/30 cursor-pointer hover:border-primary/40 hover:bg-card/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <p className="text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground">{item.q}</p>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-left mt-4 pt-4 border-t border-border/50">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
      else if (e.key === "Escape") {
        if (document.querySelector("[role='dialog'][data-state='open']")) return;
        navigate("/");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev, navigate]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("iframe") ||
      target.closest("svg") ||
      target.closest("[data-radix-dialog-trigger]") ||
      target.closest("[role='dialog']") ||
      target.tagName === "IMG"
    ) return;
    goNext();
  }, [goNext]);

  const renderBlock = () => {
    switch (currentBlock) {
      case 0:
        return <div className="w-full h-full bg-background" />;

      case 1:
        return (
          <div className="relative w-full h-full">
            {!videoEnded && (
              <div className="flex flex-col items-center justify-center h-full px-8">
                <div className="w-[84%]">
                  <VideoEmbed
                    src="https://www.youtube.com/embed/rQuIDG-1EV4?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
                    fadeIn
                    contained
                  />
                </div>
              </div>
            )}
            <AnimatePresence>
              {videoEnded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 z-10 flex items-center justify-center bg-background"
                >
                  <div className="max-w-5xl px-8 text-left space-y-4">
                    <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                      "Essa pesquisa começou tentando compreender o que acontece nesse tipo de gesto."
                    </p>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
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
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex items-center justify-center">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl">
              <ImageLightbox src="/images/poster-lowmovie.png" alt="Poster LowMovie™" className="w-full max-w-sm mx-auto" imageClassName="rounded-lg shadow-lg" />
              <div className="text-left">
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  Dissertação de Mestrado — Março 2026
                </p>
                <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight text-foreground">
                  LowMovie™
                </h2>
                <p className="mt-2 text-lg md:text-xl font-medium text-foreground/80 uppercase tracking-wide">
                  e o Labirinto Criativo
                </p>
                <div className="mt-6 space-y-4">
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                    A dissertação que apresento hoje investiga como práticas subculturais, como o skate, podem produzir linguagem cinematográfica e conhecimento estético.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    O objeto central da pesquisa é o processo criativo do coletivo LowPressure™, a partir da produção do filme LowMovie™.
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Em vez de observar esse processo à distância, a pesquisa foi construída a partir dele.
                  </p>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-base text-foreground/90">Mestrado em Cinema e Artes do Vídeo | PPG-CINEAV | UNESPAR</p>
                  <p className="text-sm text-muted-foreground">Castro Pizzano · Orientador: Prof. Dr. Fábio Jabur de Noronha</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="h-full overflow-y-auto p-8 pt-14 pb-16">
            <div className="min-h-full flex flex-col items-center justify-center">
            <div className="text-left mb-6 max-w-5xl space-y-4">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                O coletivo LowPressure™ se organiza como um espaço de experimentação estética onde skate, imagem e cidade se encontram.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Esse encontro produz não apenas registros de manobras, mas uma forma própria de linguagem audiovisual.
              </p>
            </div>
            <div className="max-w-5xl w-full">
              <ImageLightbox
                src="/images/low-kids.png"
                alt="Coletivo LowPressure™ na rua"
                className="w-full"
                imageClassName="rounded-lg shadow-lg object-cover max-h-[50vh]"
              />
            </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <div className="text-left mb-10 space-y-4 max-w-5xl">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  Para compreender esse processo, proponho o conceito de Lowbyrinth™.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  O Lowbyrinth™ descreve um processo criativo que não se organiza de forma linear.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Ele opera como um labirinto sensível, onde tentativa, erro, descoberta e improviso fazem parte da criação.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {CONCEITOS.map((c, i) => (
                  <motion.div
                    key={c.nome}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border rounded-lg p-8 border-primary/40 bg-primary/10 cursor-default"
                  >
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-wide mb-2 text-primary">
                      {c.nome}
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.def}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <div className="text-left mb-10 space-y-4 max-w-5xl">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                   Adoto a pesquisa-criação implicada como abordagem metodológica.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nesse modelo, prática artística e reflexão teórica não são separadas.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  O processo criativo funciona simultaneamente como produção estética e como campo de investigação.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                   O rigor não reside na neutralidade — reside na capacidade de interrogar cada decisão criativa.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: "Afeto", icon: "♥", desc: "Vínculo sensível com o campo investigado. Afetar e ser afetado constituem formas legítimas de produzir conhecimento." },
                  { title: "Escuta", icon: "◉", desc: "Atenção às dinâmicas coletivas, aos silêncios, aos gestos não verbalizados. Escutar é mais do que ouvir." },
                  { title: "Improviso", icon: "⚡", desc: "Abertura ao imprevisto como dado epistemológico legítimo. Arquitetura móvel capaz de se refazer a cada encontro." },
                ].map((e) => (
                  <div key={e.title} className="border border-border rounded-lg p-8 bg-card/30 hover:border-primary/30 hover:scale-[1.03] transition-all duration-300 cursor-default">
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground mb-3">{e.title}</p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
              <ImageLightbox
                src="/images/low-crew.png"
                alt="LowPressure™ Fam"
                className="w-full mt-8"
                imageClassName="rounded-lg object-contain"
              />
            </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-left max-w-5xl px-8 space-y-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70">
                LowPressure™ apresenta
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground">
                Fragmentos simbólicos
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                 Durante o processo de criação do LowMovie™, produzimos peças audiovisuais que condensam o universo simbólico do filme.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Esses fragmentos não revelam diretamente a obra, mas expressam os princípios que estruturam o processo criativo do coletivo.
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-[84%]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest text-foreground/80">
                    {currentTeaser + 1}/6 — {TEASERS[currentTeaser].name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground max-w-md leading-relaxed italic">
                    {TEASERS[currentTeaser].legend}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => currentTeaser > 0 && setCurrentTeaser((p) => p - 1)} className="text-muted-foreground/70 hover:text-foreground transition-colors">
                    <ArrowRight className="h-5 w-5 rotate-180" />
                  </button>
                  <button onClick={() => currentTeaser < 5 && setCurrentTeaser((p) => p + 1)} className="text-muted-foreground/70 hover:text-foreground transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <VideoEmbed
                src={
                  TEASERS[currentTeaser].platform === "youtube"
                    ? `https://www.youtube.com/embed/${TEASERS[currentTeaser].id}?autoplay=1&rel=0&modestbranding=1`
                    : `https://player.vimeo.com/video/${TEASERS[currentTeaser].id}?autoplay=1&background=0&muted=0`
                }
                fadeIn
                contained
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-[84%]">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-left mb-4">
                 Essas ideias convergem no trailer do LowMovie™, que sintetiza o Lowbyrinth™.
              </p>
              <VideoEmbed
                src="https://www.youtube.com/embed/Zom42CQ83CU?autoplay=1&rel=0&modestbranding=1"
                fadeIn
                contained
              />
            </div>
          </div>
        );

      case 9:
        return (
          <div className="h-full overflow-y-auto p-8 pt-14 pb-16">
            <div className="min-h-full flex flex-col items-center justify-center">
            <div className="text-left mb-6 max-w-6xl w-full space-y-4">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                O LowMovie™ não é apenas objeto da pesquisa.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Ele é também o espaço onde a investigação acontece.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                O filme articula corpo, câmera e cidade como operadores de linguagem.
              </p>
            </div>
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-4 gap-2">
                {[
                  { src: "/images/fotos/01.jpg", span: "col-span-2" },
                  { src: "/images/fotos/02.jpg", span: "col-span-1" },
                  { src: "/images/fotos/03.jpg", span: "col-span-1" },
                  { src: "/images/fotos/04.jpg", span: "col-span-1" },
                  { src: "/images/fotos/05.jpg", span: "col-span-1" },
                  { src: "/images/fotos/06.jpg", span: "col-span-2" },
                  { src: "/images/fotos/07.jpg", span: "col-span-2" },
                  { src: "/images/fotos/08.jpg", span: "col-span-1" },
                  { src: "/images/fotos/09.jpg", span: "col-span-1" },
                  { src: "/images/fotos/10.jpg", span: "col-span-1" },
                  { src: "/images/fotos/11.jpg", span: "col-span-1" },
                  { src: "/images/fotos/12.jpg", span: "col-span-2" },
                ].map((foto, i) => (
                  <ImageLightbox
                    key={`foto-${i}`}
                    src={foto.src}
                    alt={`Foto ${i + 1}`}
                    className={`${foto.span} h-32 md:h-48 rounded border-none`}
                    imageClassName=""
                    caption="@peralta_jpg"
                  />
                ))}
              </div>
            </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-left mb-10">
                 Proponho três contribuições principais.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {CONTRIBUICOES.map((c, i) => (
                  <div key={i} className="border border-border rounded-lg p-8 bg-card/30 hover:border-primary/30 hover:scale-[1.03] transition-all duration-300 cursor-default">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-3">{String(i + 1).padStart(2, "0")}</p>
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-wide text-foreground mb-3">{c.title}</p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
              <img
                src="/images/contribuicoes.jpg"
                alt="Skate e cidade"
                className="w-full rounded-lg mt-8 object-cover max-h-[35vh] grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex items-center justify-center">
            <div className="max-w-5xl w-full">
              <div className="text-left mb-12 space-y-4">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  Toda pesquisa em arte opera em tensões conceituais.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Em vez de evitá-las, optei por torná-las visíveis.
                </p>
              </div>
              <div className="space-y-4">
                {FAQ_ITEMS.map((item, i) => (
                  <FAQCard key={i} item={item} />
                ))}
              </div>
            </div>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="h-full overflow-y-auto px-8 pt-14 pb-16">
            <div className="min-h-full flex flex-col items-center justify-center">
              <div className="max-w-5xl w-full text-left mb-6 space-y-2">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                   Organizei a pesquisa como um percurso navegável.
                </p>
              </div>
              <div className="max-w-5xl w-full border border-border/30 rounded-lg overflow-hidden">
                <div className="w-full h-[45vh]">
                  <ConceptGraph />
                </div>
              </div>
              <div className="max-w-5xl w-full mt-8 text-left space-y-4">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  O LowMovie™ é um filme-labirinto.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Não se assiste a ele de fora.
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-semibold uppercase tracking-widest text-foreground">
                  É preciso entrar.
                </p>
              </div>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="w-[84%]">
              <VideoEmbed
                src="https://www.youtube.com/embed/g3SDaD16c7w?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
                fadeIn
                contained
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-background text-foreground overflow-hidden cursor-pointer select-none"
      onClick={handleClick}
    >
      <VideoPreloader blockIndex={currentBlock} />

      <div className="absolute inset-0">
        {renderBlock()}
      </div>

      {/* Exit button */}
      {currentBlock > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); navigate("/"); }}
          className="absolute top-4 left-4 z-20 text-muted-foreground/50 hover:text-muted-foreground transition-colors pointer-events-auto"
          title="Voltar ao portal (ESC)"
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Footer: block indicator left, arrow right */}
      {currentBlock > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-2 px-6 py-3">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {BLOCKS.slice(1).map((block, i) => (
              <button
                key={block.id}
                onClick={(e) => { e.stopPropagation(); setCurrentBlock(i + 1); }}
                title={`${String(i + 1).padStart(2, "0")} — ${block.title}`}
                className="group relative"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    i + 1 === currentBlock
                      ? "w-6 h-1.5 bg-foreground"
                      : i + 1 < currentBlock
                        ? "w-1.5 h-1.5 bg-muted-foreground/60"
                        : "w-1.5 h-1.5 bg-muted-foreground/25"
                  }`}
                />
              </button>
            ))}
          </div>
          {/* Block label + arrow */}
          <div className="w-full flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70 pointer-events-none">
              BLOCO {String(currentBlock).padStart(2, "0")} — {BLOCKS[currentBlock]?.title?.toUpperCase()}
            </p>
            {currentBlock < BLOCKS.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="text-muted-foreground/50 hover:text-muted-foreground transition-colors pointer-events-auto"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Defense;
