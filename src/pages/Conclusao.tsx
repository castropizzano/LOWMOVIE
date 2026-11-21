import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import NextSectionButton from "@/components/NextSectionButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PdfPageViewer from "@/components/PdfPageViewer";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";

import { interviews, harpiaPublication, videoPublications } from "@/data/portal";
import { Button } from "@/components/ui/button";

const Conclusao = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SeoHead route="/conclusao" jsonLd={{
        "@context": "https://schema.org", "@type": "VideoObject",
        name: "Black View | LowMovie™", description: t("conclusao.interviewItems.blackMedia.desc"),
        uploadDate: videoPublications.blackView.uploadDate,
        thumbnailUrl: `https://img.youtube.com/vi/${videoPublications.blackView.id}/hqdefault.jpg`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${videoPublications.blackView.id}`,
        contentUrl: `https://www.youtube.com/watch?v=${videoPublications.blackView.id}`,
        inLanguage: "pt-BR",
      }} />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-left">
          <SectionTitle title={t("conclusao.title")} subtitle={t("conclusao.subtitle")} />

          <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80">
            {t("conclusao.headline1")}
          </p>
          <p className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-tight text-primary">
            {t("conclusao.headline2")}
          </p>

          <div className="mt-16">
            <div className="h-px w-16 bg-primary/40 mb-8" />
            <p className="reading-measure text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.p1")}</p>
            <p className="reading-measure mt-4 text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.p2")}</p>
            <p className="reading-measure mt-4 text-base text-muted-foreground leading-relaxed text-justify">{t("conclusao.p3")}</p>
            <p className="reading-measure mt-4 text-base text-muted-foreground leading-relaxed text-justify">{t("conclusao.p4")}</p>
            <p className="reading-measure mt-4 text-base text-muted-foreground leading-relaxed text-justify">{t("conclusao.p5")}</p>
          </div>

          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold mb-4">{t("conclusao.synthesisTitle")}</h2>
              <p className="reading-measure text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.quote1")}</p>
              <div className="my-4 h-px w-full bg-border/30" />
              <p className="reading-measure text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.quote2")}</p>
            </div>
          </div>

          {/* Obra em Expansão */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">{t("conclusao.expansion")}</h2>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("conclusao.pedagogyTitle")}</h3>
                <p className="reading-measure text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.pedagogyP1")}</p>
                <p className="reading-measure text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.pedagogyP2")}</p>
              </div>
              <div className="my-6"><div className="h-px w-full bg-border/30" /></div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("conclusao.classroomTitle")}</h3>
                <p className="reading-measure text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.classroomP1")}</p>
                <p className="reading-measure text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.classroomP2")}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Dissertação PDF */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.fullDissertation")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">{t("conclusao.fullDissertationNote")}</p>
              <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="/docs/dissertacao.pdf" target="_blank" rel="noopener noreferrer" >
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openPdf")}</span>
              </a></Button>
              <div className="mt-6 border-l-2 border-primary/40 pl-4">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">{t("conclusao.errataTitle")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.errataText")}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Publicações Relacionadas */}
          <div id="publicacoes" className="scroll-mt-24">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.publicationsTitle")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">{t("conclusao.publicationHarpiaDesc")}</p>
              <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href={harpiaPublication.page} target="_blank" rel="noopener noreferrer" >
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openPublication")}</span>
              </a></Button>
              <Button asChild variant="outline" className="mt-4 w-full h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href={harpiaPublication.pdf} target="_blank" rel="noopener noreferrer">{t("conclusao.publicationPdf")}</a></Button>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Acervo */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.archive")}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed text-justify mb-8 space-y-4">
                {t("conclusao.archiveNote").split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="space-y-4">
                <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="https://drive.google.com/drive/folders/1z0nDmYxxyub0gbhzMo4bj1o3L4lXyiUw?usp=sharing" target="_blank" rel="noopener noreferrer" >
                  <span className="text-sm font-medium text-foreground/80">{t("conclusao.openArchive")}</span>
                </a></Button>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="https://drive.google.com/file/d/1mxB33_MHvVK0uLEej2oJqv6HRZuxZggm/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                    <span className="text-sm font-medium text-foreground/80">{t("conclusao.openMemorial")}</span>
                  </a></Button>
                  <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="https://drive.google.com/drive/folders/13diA0ay3Ue1BxnAlADaOm03Vi0NAvLr1?usp=sharing" target="_blank" rel="noopener noreferrer" >
                    <span className="text-sm font-medium text-foreground/80">{t("conclusao.openCertificados")}</span>
                  </a></Button>
                  <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="/docs/lowmovie_toolkit_pedagogico.pdf" target="_blank" rel="noopener noreferrer" >
                    <span className="text-sm font-medium text-foreground/80">{t("metodologia.toolkit.downloadCta")}</span>
                  </a></Button>
                  <Button asChild variant="outline" className="flex items-center justify-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group w-full"><a href="/docs/lowmovie_caderno_sintese.pdf" target="_blank" rel="noopener noreferrer" >
                    <span className="text-sm font-medium text-foreground/80">{t("conclusao.openCaderno")}</span>
                  </a></Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Entrevistas */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">{t("conclusao.interviews")}</h2>
              <Accordion type="single" collapsible className="w-full">
                {interviews.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:no-underline">
                      <span className="flex items-center gap-3">
                        {t(`conclusao.interviewItems.${item.tKey}.label`)}
                        <span className="text-xs font-normal normal-case tracking-normal text-muted-foreground">{t(`conclusao.interviewItems.${item.tKey}.subtitle`)}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 space-y-6">
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t(`conclusao.interviewItems.${item.tKey}.desc`)}</p>
                        {item.publication && <time className="text-xs text-muted-foreground" dateTime={item.publication}>{t("portal.platformDate")}: 28/04/2023</time>}
                        {item.youtubeId ? (
                          <div className="rounded-lg overflow-hidden group/video">
                            <div className="relative w-full grayscale hover:grayscale-0 transition-all duration-500" style={{ paddingBottom: "56.25%" }}>
                              <iframe
                                src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                                className="absolute inset-0 w-full h-full border-0"
                                title={t(`conclusao.interviewItems.${item.tKey}.label`)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : item.image ? (
                          <div className="rounded-lg overflow-hidden">
                            <img src={item.image} alt={t(`conclusao.interviewItems.${item.tKey}.label`)} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                          </div>
                        ) : null}
                        <Button asChild variant="outline" className="inline-flex items-center gap-2 border border-primary/40 rounded-lg px-6 py-4 bg-primary/10 hover:bg-primary/20 transition-colors group"><a href={item.transcript} target="_blank" rel="noopener noreferrer" >
                          <span className="text-sm font-medium text-foreground/80">{t("conclusao.openTranscript")}</span>
                        </a></Button>
                        {item.youtubeId && <Button asChild variant="outline" className="h-auto whitespace-normal border-primary/40 bg-primary/10 hover:bg-primary/20"><a href={`https://www.youtube.com/watch?v=${item.youtubeId}`} target="_blank" rel="noopener noreferrer">{t("portal.watchVideo")}</a></Button>}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Manual LowMovie™ */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.manualLowMovie")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("conclusao.manualLowMovieNote")}</p>
              <PdfPageViewer src="/docs/LowMovie_brandbook.pdf" title={t("conclusao.manualLowMovie")} />
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Manual LowPressure™ */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.manualLowPressure")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("conclusao.manualLowPressureNote")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("conclusao.brandbookProvenance")}</p>
              <PdfPageViewer src="/docs/LowPressure_brandbook.pdf" title={t("conclusao.manualLowPressure")} />
            </div>
          </div>

          <NextSectionButton to="/mapa" label={t("conclusao.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
