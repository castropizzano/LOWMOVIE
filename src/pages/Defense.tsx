import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronDown } from "lucide-react";
import ConceptGraph from "@/components/ConceptGraph";
import ImageLightbox from "@/components/ImageLightbox";
import capaDissertacao from "@/assets/capa-dissertacao.png";

/* ─── Block definitions (0-13) ─── */
const BLOCK_KEYS = [
  "",
  "abertura",
  "pesquisa",
  "coletivo",
  "conceitos",
  "metodologia",
  "fragmentos",
  "teasers",
  "trailer",
  "frames",
  "contribuicoes",
  "questoes",
  "lowbyrinth",
  "encerramento",
];

const TEASER_IDS = ["epIEe4pf1o8", "kVrXqhYnZjw", "w4coRA38tto", "DMl8LWjiUyk", "trBIP6Jl7LY", "i-dUpm9XbHA"];

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
  if (nextBlock === 1) src = "https://www.youtube-nocookie.com/embed/rQuIDG-1EV4?autoplay=0";
  if (nextBlock === 8) src = "https://www.youtube-nocookie.com/embed/Zom42CQ83CU?autoplay=0";
  if (nextBlock === 13) src = "https://www.youtube-nocookie.com/embed/g3SDaD16c7w?autoplay=0";
  if (nextBlock === 7) src = `https://www.youtube-nocookie.com/embed/${TEASER_IDS[0]}?autoplay=0`;
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
  const { t } = useTranslation();
  const [currentBlock, setCurrentBlock] = useState(0);
  const [currentTeaser, setCurrentTeaser] = useState(0);
  const [videoEnded, setVideoEnded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const teasers = t("defense.teasers", { returnObjects: true }) as { name: string; legend: string }[];
  const conceitos = t("defense.conceitos", { returnObjects: true }) as { nome: string; def: string }[];
  const faqItems = t("defense.faqItems", { returnObjects: true }) as { q: string; a: string }[];
  const contribuicoes = t("defense.contribuicoes", { returnObjects: true }) as { title: string; desc: string }[];
  const triad = t("defense.triad", { returnObjects: true }) as { title: string; desc: string }[];

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
    if (currentBlock === 7 && currentTeaser < TEASER_IDS.length - 1) {
      setCurrentTeaser((p) => p + 1);
      return;
    }
    if (currentBlock < BLOCK_KEYS.length - 1) {
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
      setCurrentBlock(11);
      return;
    }
    if (currentBlock > 1) {
      setCurrentBlock((p) => p - 1);
    }
  }, [currentBlock, currentTeaser]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentBlock(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentBlock(BLOCK_KEYS.length - 1);
      } else if (e.key === "Escape") {
        if (document.querySelector("[role='dialog'][data-state='open']")) return;
        navigate("/home");
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

  const blockTitle = currentBlock > 0 ? t(`defense.blocks.${BLOCK_KEYS[currentBlock]}`) : "";

  const renderBlock = () => {
    switch (currentBlock) {
      case 0:
        return <div className="w-full h-full bg-background" />;

      case 1:
        return (
          <div className="relative w-full h-full">
            {!videoEnded && (
              <div className="flex flex-col items-center justify-center h-full px-8">
              <div className="w-full md:w-[84%]">
                  <VideoEmbed
                    src="https://www.youtube-nocookie.com/embed/rQuIDG-1EV4?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
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
                      {t("defense.block1Quote1")}
                    </p>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                      {t("defense.block1Quote2")}
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
                  {t("defense.block2Date")}
                </p>
                <h2 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight text-foreground">
                  LowMovie™
                </h2>
                <p className="mt-2 text-lg md:text-xl font-medium text-foreground/80 uppercase tracking-wide">
                  {t("home.subtitle")}
                </p>
                <div className="mt-6 space-y-4">
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                    {t("defense.block2Intro")}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t("defense.block2Object")}
                  </p>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {t("defense.block2Method")}
                  </p>
                </div>
                <div className="mt-8 space-y-1">
                  <p className="text-base text-foreground/90">{t("defense.block2Program")}</p>
                  <p className="text-sm text-muted-foreground">{t("defense.block2Author")}</p>
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
                {t("defense.block3P1")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("defense.block3P2")}
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
                  {t("defense.block4P1")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block4P2")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block4P3")}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {conceitos.map((c, i) => (
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
                   {t("defense.block5P1")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block5P2")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block5P3")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                   {t("defense.block5P4")}
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {triad.map((e) => (
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
                {t("defense.block6Presents")}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-foreground">
                {t("defense.block6Title")}
              </h2>
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                 {t("defense.block6P1")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("defense.block6P2")}
              </p>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-full md:w-[84%]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-left">
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-foreground/80">
                    {currentTeaser + 1}/6 — {teasers[currentTeaser]?.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground max-w-md leading-relaxed italic">
                    {teasers[currentTeaser]?.legend}
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
                src={`https://www.youtube-nocookie.com/embed/${TEASER_IDS[currentTeaser]}?autoplay=1&rel=0&modestbranding=1`}
                fadeIn
                contained
              />
            </div>
          </div>
        );

      case 8:
        return (
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="w-full md:w-[84%]">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-left mb-4">
                 {t("defense.block8P1")}
              </p>
              <VideoEmbed
                src="https://www.youtube-nocookie.com/embed/Zom42CQ83CU?autoplay=1&rel=0&modestbranding=1"
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
                {t("defense.block9P1")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("defense.block9P2")}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {t("defense.block9P3")}
              </p>
            </div>
            <div className="max-w-6xl w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                 {t("defense.block10P1")}
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {contribuicoes.map((c, i) => (
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
                  {t("defense.block11P1")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block11P2")}
                </p>
              </div>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
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
                   {t("defense.block12P1")}
                </p>
              </div>
              <div className="max-w-5xl w-full border border-border/30 rounded-lg overflow-hidden">
                <div className="w-full h-[45vh]">
                  <ConceptGraph />
                </div>
              </div>
              <div className="max-w-5xl w-full mt-8 text-left space-y-4">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
                  {t("defense.block12P2")}
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("defense.block12P3")}
                </p>
                <p className="mt-2 text-2xl md:text-3xl font-semibold uppercase tracking-widest text-foreground">
                  {t("defense.block12P4")}
                </p>
              </div>
            </div>
          </div>
        );

      case 13:
        return (
          <div className="flex items-center justify-center h-full px-8">
            <div className="w-full md:w-[84%]">
              <VideoEmbed
                src="https://www.youtube-nocookie.com/embed/g3SDaD16c7w?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&mute=0"
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
          onClick={(e) => { e.stopPropagation(); navigate("/home"); }}
          className="absolute top-4 left-4 z-20 text-muted-foreground/50 hover:text-muted-foreground transition-colors pointer-events-auto"
          title={t("defense.backToPortal")}
        >
          <X className="h-5 w-5" />
        </button>
      )}

      {/* Footer: block indicator left, arrow right */}
      {currentBlock > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-2 px-6 py-3">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {BLOCK_KEYS.slice(1).map((key, i) => (
              <button
                key={key}
                onClick={(e) => { e.stopPropagation(); setCurrentBlock(i + 1); }}
                title={`${String(i + 1).padStart(2, "0")} — ${t(`defense.blocks.${key}`)}`}
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
              <span className="hidden sm:inline">{t("defense.block")} {String(currentBlock).padStart(2, "0")} — </span>{blockTitle.toUpperCase()}
            </p>
            {currentBlock < BLOCK_KEYS.length - 1 && (
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
