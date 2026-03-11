import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import NextSectionButton from "@/components/NextSectionButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PdfPageViewer from "@/components/PdfPageViewer";
import { useTranslation } from "react-i18next";

const interviews = [
  { id: "skate-punk", tKey: "skatePunk", youtubeId: "rOoUJyzGkDY", transcript: "/docs/transcricoes/Skate_Punk_Interview_Transcript.pdf" },
  { id: "black-media", tKey: "blackMedia", youtubeId: "YJEW5YB59Ws", transcript: "/docs/transcricoes/Black_Media_Skate_LowMovie_Interview.pdf" },
  { id: "gabriel-peralta", tKey: "peralta", youtubeId: "n7Vu89PzMLE", transcript: "/docs/transcricoes/Gabriel_Peralta_Photos_Interview.pdf" },
  { id: "rafao-vm", tKey: "rafao", youtubeId: "t89iwhuAOjU", transcript: "/docs/transcricoes/Rafao_VM_Skate_Marginal_Interview.pdf" },
  { id: "herzog", tKey: "herzog", youtubeId: "EQLInlnfWUc", transcript: "/docs/transcricoes/Werner_Herzog_Skateboarding_Interview.pdf" },
  { id: "lowzine", tKey: "lowzine", image: "/images/lowzine.png", transcript: "/docs/transcricoes/Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf" },
];

const Conclusao = () => {
  const { t } = useTranslation();
  return (
    <Layout>
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
            <p className="text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.p1")}</p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed text-justify">{t("conclusao.p2")}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.p3")}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.p4")}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.p5")}</p>
          </div>

          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <p className="text-sm text-muted-foreground leading-relaxed italic text-justify">{t("conclusao.quote1")}</p>
              <div className="my-4 h-px w-full bg-border/30" />
              <p className="text-base text-foreground/80 leading-relaxed italic text-justify">{t("conclusao.quote2")}</p>
            </div>
          </div>

          {/* Obra em Expansão */}
          <div className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-6">{t("conclusao.expansion")}</h2>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("conclusao.pedagogyTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.pedagogyP1")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.pedagogyP2")}</p>
              </div>
              <div className="my-6"><div className="h-px w-full bg-border/30" /></div>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{t("conclusao.classroomTitle")}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.classroomP1")}</p>
                <p className="text-sm text-muted-foreground leading-relaxed text-justify">{t("conclusao.classroomP2")}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Dissertação PDF */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.fullDissertation")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">{t("conclusao.fullDissertationNote")}</p>
              <a href="/docs/dissertacao.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openPdf")}</span>
              </a>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Publicações Relacionadas */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.publicationsTitle")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">{t("conclusao.publicationHarpiaDesc")}</p>
              <a href="https://drive.google.com/drive/folders/1z0nDmYxxyub0gbhzMo4bj1o3L4lXyiUw?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openPublication")}</span>
              </a>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Acervo */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.archive")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">{t("conclusao.archiveNote")}</p>
              <a href="https://drive.google.com/drive/folders/1z0nDmYxxyub0gbhzMo4bj1o3L4lXyiUw?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openArchive")}</span>
              </a>
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
                        <a href={item.transcript} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                          <span className="text-sm font-medium text-foreground/80">{t("conclusao.openTranscript")}</span>
                        </a>
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
              <a href="/docs/LowMovie_brandbook.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openManual")}</span>
              </a>
            </div>
          </div>

          <div className="mt-16 mb-16"><div className="h-px w-full bg-border/30" /></div>

          {/* Manual LowPressure™ */}
          <div>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/20">
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80 mb-4">{t("conclusao.manualLowPressure")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">{t("conclusao.manualLowPressureNote")}</p>
              <PdfPageViewer src="/docs/LowPressure_brandbook.pdf" title={t("conclusao.manualLowPressure")} />
              <a href="/docs/LowPressure_brandbook.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group">
                <span className="text-sm font-medium text-foreground/80">{t("conclusao.openManual")}</span>
              </a>
            </div>
          </div>

          <NextSectionButton to="/mapa" label={t("conclusao.next")} />
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
