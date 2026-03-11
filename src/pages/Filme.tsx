import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { ExternalLink } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import { useTranslation } from "react-i18next";

const dataKeys = ["titulo", "ano", "formato", "duracao", "direcao", "coletivo", "trilha", "estrutura", "circulacao"] as const;
const lineageRefKeys = ["tyEvans", "spikeJonze", "beagle"] as const;

const Filme = () => {
  const { t } = useTranslation();
  const operators = t("filme.operators", { returnObjects: true }) as string[];

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("filme.title")} subtitle={t("filme.subtitle")} />

          {/* Video Embed */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 mb-16 group">
              <iframe
                src="https://www.youtube-nocookie.com/embed/wcYBh6_DqO8?rel=0&modestbranding=1"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
                title="LowMovie™ Trailer"
              />
            </div>
          </AnimatedSection>

          {/* Dados da Obra */}
          <AnimatedSection delay={0.15}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">{t("filme.workData")}</p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {dataKeys.map((key) => (
                  <div key={key} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t(`filme.data.${key}.label`)}</p>
                    <p className="text-sm text-foreground/80 mt-1">{t(`filme.data.${key}.value`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Linhagem */}
          <AnimatedSection delay={0.17}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{t("filme.lineageTitle")}</p>
                <p className="text-sm text-foreground/80 leading-relaxed text-justify">{t("filme.lineageDesc")}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {lineageRefKeys.map((key) => (
                  <div key={key} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-sm font-semibold text-foreground">{t(`filme.lineageRefs.${key}.name`)}</p>
                    <p className="text-sm text-muted-foreground text-justify mt-1">{t(`filme.lineageRefs.${key}.desc`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Descrição */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("filme.descP1")}</p>
              <p>{t("filme.descP2")}</p>
              <p>{t("filme.descP3")}</p>
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">{t("filme.stills")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ImageLightbox
                  key={i}
                  src={`/images/stills/00${i}.jpg`}
                  alt={`Still ${i} — LowMovie™`}
                  aspectRatio="aspect-video"
                  imageClassName="object-cover"
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Análise de Sequência */}
          <AnimatedSection delay={0.35} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">{t("filme.sequenceTitle")}</h3>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-4">
              {Array.from({ length: 14 }, (_, i) => {
                const num = String(i + 1).padStart(2, '0');
                return (
                  <div key={i}>
                    <ImageLightbox
                      src={`/images/sequence/${num}.png`}
                      alt={`Frame ${i + 1}`}
                      aspectRatio="aspect-video"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <ImageLightbox src="/images/sequence/foto-final.jpg" alt="Final photograph" aspectRatio="aspect-[3/4]" />
            </div>
            <p className="text-xs text-muted-foreground mb-16">{t("filme.sequenceCaption")}</p>
          </AnimatedSection>

          {/* Texto Analítico */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>{t("filme.seqP1")}</p>
              <p>{t("filme.seqP2")}</p>
              <p>{t("filme.seqP3")}</p>
              <p>{t("filme.seqP4")}</p>
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t("filme.conceptualOperators")}</p>
                <div className="flex flex-wrap gap-2">
                  {operators.map((op: string) => (
                    <span key={op} className="text-xs font-semibold uppercase tracking-wide border border-primary/30 rounded px-3 py-1.5 text-foreground bg-primary/5">
                      {op}
                    </span>
                  ))}
                </div>
              </div>
              <p>{t("filme.seqP5")}</p>
            </div>
          </AnimatedSection>

          {/* Conexão com a Tese */}
          <AnimatedSection delay={0.45}>
            <div className="border border-primary/20 bg-primary/5 rounded-lg p-8 md:p-10 mb-16">
              <p className="text-base font-semibold text-foreground">{t("filme.thesisConnection1")}</p>
              <p className="text-base font-semibold text-primary mt-1 mb-4">{t("filme.thesisConnection2")}</p>
              <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-4">{t("filme.thesisConnectionP")}</p>
              <p className="text-sm font-semibold text-primary">{t("filme.thesisConnection3")}</p>
            </div>
          </AnimatedSection>

          {/* Premiere */}
          <AnimatedSection delay={0.47} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4">{t("filme.premiereTitle")}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-6">{t("filme.premiereDesc")}</p>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 group">
              <iframe
                src="https://www.youtube-nocookie.com/embed/RbsSyBhSHFg?rel=0&modestbranding=1"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
                title="LowMovie™ Premiere"
              />
            </div>
          </AnimatedSection>

          {/* Soundtrack */}
          <AnimatedSection delay={0.5} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">{t("filme.soundtrack")}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://open.spotify.com/album/74vGlNUZCHtuycS2DR3wXv"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <img src="/images/lowbyrinth-ep-cover.jpg" alt="Lowbyrinth EP Cover" className="h-12 w-12 rounded-md object-cover shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Lowbyrinth EP</p>
                  <p className="text-xs text-muted-foreground mt-1">Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://open.spotify.com/album/61vLb0sa98Xjr5ZGtDEEiZ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <img src="/images/like-rats-cover.jpg" alt="Like Rats on Hostile Paths Cover" className="h-12 w-12 rounded-md object-cover shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Like Rats on Hostile Paths</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("filme.soundtrackOriginal")}</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/coletivo" label={t("filme.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Filme;
