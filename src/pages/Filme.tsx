import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import { ExternalLink } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import { videoPublications, inPersonPremiere } from "@/data/portal";

const dataKeys = ["titulo", "ano", "formato", "duracao", "direcao", "roteiro", "coletivo", "trilha", "estrutura", "circulacao"] as const;
const lineageRefKeys = ["tyEvans", "spikeJonze", "beagle"] as const;

const Filme = () => {
  const { t } = useTranslation();
  const operators = t("filme.operators", { returnObjects: true }) as string[];

  // Each author-confirmed publication timestamp belongs to its own video, with its original timezone.
  const videoJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "LowMovie™ (2023) | Filme integral",
      description:
        "Filme LowMovie™ (2023, 1h6min56s), obra coletiva do LowPressure™ analisada na dissertação de Castro Pizzano (PPG-CINEAV · UNESPAR).",
      thumbnailUrl: [
        "https://img.youtube.com/vi/wcYBh6_DqO8/maxresdefault.jpg",
        "https://img.youtube.com/vi/wcYBh6_DqO8/hqdefault.jpg",
      ],
      duration: "PT1H6M56S",
      uploadDate: videoPublications.film.uploadDate,
      embedUrl: "https://www.youtube-nocookie.com/embed/wcYBh6_DqO8",
      contentUrl: "https://www.youtube.com/watch?v=wcYBh6_DqO8",
      inLanguage: "pt-BR",
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "LowPremière™ | Registro da première do LowMovie™ em Curitiba",
      description: "Registro da première do filme LowMovie™ em Curitiba.",
      uploadDate: videoPublications.premiere.uploadDate,
      thumbnailUrl: [
        "https://img.youtube.com/vi/RbsSyBhSHFg/maxresdefault.jpg",
        "https://img.youtube.com/vi/RbsSyBhSHFg/hqdefault.jpg",
      ],
      embedUrl: "https://www.youtube-nocookie.com/embed/RbsSyBhSHFg",
      contentUrl: "https://www.youtube.com/watch?v=RbsSyBhSHFg",
      inLanguage: "pt-BR",
    },
  ];

  return (
    <Layout>
      <SeoHead route="/filme" jsonLd={videoJsonLd} />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title={t("filme.title")} subtitle={t("filme.subtitle")} />

          {/* Video Embed */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 group">
              <iframe
                src="https://www.youtube-nocookie.com/embed/wcYBh6_DqO8?rel=0&modestbranding=1"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
                title={t("filme.videoTitle")}
              />
            </div>
            <a href="https://www.youtube.com/watch?v=wcYBh6_DqO8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mt-3">
              {t("filme.watchFull")} <ExternalLink className="h-3 w-3" />
            </a>
            <p className="text-xs text-muted-foreground mt-3">{t("filme.onlineDate")}</p>
          </AnimatedSection>

          {/* Dados da Obra */}
          <AnimatedSection delay={0.15} className="mt-16">
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
                <p className="reading-measure text-sm text-foreground/80 leading-relaxed text-justify">{t("filme.lineageDesc")}</p>
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
              <p className="reading-measure">{t("filme.descP1")}</p>
              <p className="reading-measure">{t("filme.descP2")}</p>
              <p className="reading-measure">{t("filme.descP3")}</p>
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3}>
            <h3 id="frames" className="text-lg font-semibold uppercase tracking-wide mb-6 scroll-mt-24">{t("filme.stills")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ImageLightbox
                  key={i}
                  src={`/images/stills/00${i}.jpg`}
                  alt={t("filme.alt.still", { number: i })}
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
                      alt={t("filme.alt.frame", { number: i + 1 })}
                      aspectRatio="aspect-video"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mb-4">
              <ImageLightbox src="/images/sequence/foto-final.jpg" alt={t("filme.alt.final")} aspectRatio="aspect-[3/4]" />
            </div>
            <p className="text-xs text-muted-foreground mb-16">{t("filme.sequenceCaption")}</p>
          </AnimatedSection>

          {/* Texto Analítico */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p className="reading-measure">{t("filme.seqP1")}</p>
              <p className="reading-measure">{t("filme.seqP2")}</p>
              <p className="reading-measure">{t("filme.seqP3")}</p>
              <p className="reading-measure">{t("filme.seqP4")}</p>
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
              <p className="reading-measure">{t("filme.seqP5")}</p>
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
            <h3 id="premiere" className="text-lg font-semibold uppercase tracking-wide mb-4 scroll-mt-24">{t("filme.premiereTitle")}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-6">{t("filme.premiereDesc")}</p>
            <a href={inPersonPremiere.source} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm text-primary underline underline-offset-4 mb-6">{t("filme.eventSource")}</a>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 group">
              <iframe
                src="https://www.youtube-nocookie.com/embed/RbsSyBhSHFg?rel=0&modestbranding=1"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                allowFullScreen
                title={t("filme.premiereVideoTitle")}
                loading="lazy"
              />
            </div>
            <a href="https://www.youtube.com/watch?v=RbsSyBhSHFg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mt-3">
              {t("filme.watchPremiere")} <ExternalLink className="h-3 w-3" />
            </a>
          </AnimatedSection>

          {/* Correspondência */}
          <AnimatedSection delay={0.48} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4">{t("filme.correspondenceTitle")}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed text-justify mb-6">{t("filme.correspondenceDesc")}</p>
            <div className="border-l-2 border-primary/40 pl-6 py-4 bg-card/30 rounded-r-lg">
              <p className="text-base italic text-foreground/90 leading-relaxed">"{t("filme.correspondenceQuote")}"</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-3">{t("filme.correspondenceAttrib")}</p>
            </div>
            <p className="text-[11px] text-muted-foreground/70 tracking-wide mt-4">{t("filme.correspondenceNote")}</p>
          </AnimatedSection>

          {/* Soundtrack */}
          <AnimatedSection delay={0.5} className="mt-16">
            <h3 id="trilhas" className="text-lg font-semibold uppercase tracking-wide mb-6 scroll-mt-24">{t("filme.soundtrack")}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button asChild variant="outline" className="group flex items-center gap-4 border border-primary/40 rounded-lg p-5 bg-primary/10 transition-colors hover:bg-primary/20 text-left justify-start"><a
                href="https://open.spotify.com/album/74vGlNUZCHtuycS2DR3wXv"
                target="_blank"
                rel="noopener noreferrer"

              >
                <img src="/images/lowbyrinth-ep-cover.jpg" alt={t("filme.alt.ep")} className="h-12 w-12 rounded-md object-cover shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Lowbyrinth™ EP</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("filme.epCredits")}</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a></Button>
              <Button asChild variant="outline" className="group flex items-center gap-4 border border-primary/40 rounded-lg p-5 bg-primary/10 transition-colors hover:bg-primary/20 text-left justify-start"><a
                href="https://open.spotify.com/album/61vLb0sa98Xjr5ZGtDEEiZ"
                target="_blank"
                rel="noopener noreferrer"

              >
                <img src="/images/like-rats-cover.jpg" alt={t("filme.alt.album")} className="h-12 w-12 rounded-md object-cover shrink-0" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Like Rats on Hostile Paths</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("filme.soundtrackOriginal")}</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a></Button>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/coletivo" label={t("filme.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Filme;
