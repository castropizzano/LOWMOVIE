import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import NextSectionButton from "@/components/NextSectionButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PdfPageViewer from "@/components/PdfPageViewer";

const interviews = [
  {
    id: "skate-punk",
    label: "Skate Punk",
    subtitle: "Podcast Chiclé Vídeos",
    description: "Conversa sobre a trajetória criativa, os bastidores do LowMovie™, a relação entre skate e audiovisual, e os processos colaborativos do coletivo LowPressure™.",
    youtubeId: "rOoUJyzGkDY",
    transcript: "/docs/transcricoes/Skate_Punk_Interview_Transcript.pdf",
  },
  {
    id: "black-media",
    label: "Black Media",
    subtitle: "Black View",
    description: "Black Media Skate — mídia underground de skate nacional discute o LowMovie™, processos criativos e produção audiovisual independente.",
    youtubeId: "YJEW5YB59Ws",
    transcript: "/docs/transcricoes/Black_Media_Skate_LowMovie_Interview.pdf",
  },
  {
    id: "gabriel-peralta",
    label: "Gabriel Peralta",
    subtitle: "Fotos de Skate",
    description: "Gabriel Peralta fala sobre fotografia de skate, registro documental e a construção de memória visual no universo do skateboarding.",
    youtubeId: "n7Vu89PzMLE",
    transcript: "/docs/transcricoes/Gabriel_Peralta_Photos_Interview.pdf",
  },
  {
    id: "rafao-vm",
    label: "Rafão VM",
    subtitle: "Skate Marginal",
    description: "Rafão VM discute skate marginal, produção independente e os cruzamentos entre subcultura, arte e resistência.",
    youtubeId: "t89iwhuAOjU",
    transcript: "/docs/transcricoes/Rafao_VM_Skate_Marginal_Interview.pdf",
  },
  {
    id: "herzog",
    label: "Herzog",
    subtitle: "Sobre Skateboarding",
    description: "Werner Herzog reflete sobre skateboarding como gesto, movimento e forma de expressão cultural contemporânea.",
    youtubeId: "EQLInlnfWUc",
    transcript: "/docs/transcricoes/Werner_Herzog_Skateboarding_Interview.pdf",
  },
  {
    id: "lowzine",
    label: "LowZine",
    subtitle: "Fanzine Coletivo",
    description: "LowZine — fanzine coletivo produzido pelo grupo LowPressure™, reunindo registros visuais, textos e fragmentos do processo criativo.",
    image: "/images/lowzine.png",
    transcript: "/docs/transcricoes/Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf",
  },
];

const Conclusao = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl text-left">
          <SectionTitle
            title="Conclusão"
            subtitle="Síntese da pesquisa e horizontes abertos"
          />

          <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80">
            A <span className="text-primary">poética</span> não é resultado.
          </p>

          <p className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-tight text-primary">
            É processo em movimento.
          </p>

          <div className="mt-16">
            <div className="h-px w-16 bg-primary/40 mb-8" />
            <p className="text-base text-foreground/80 leading-relaxed text-justify">
              O LowMovie™ demonstra que práticas subculturais podem produzir linguagem audiovisual autônoma e conhecimento
              estético legítimo no campo acadêmico. Demonstro, analiticamente, que o skate já constitui
              uma prática estética produtora de formas, linguagens e saberes.
            </p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed text-justify">
              Afirmo que o gesto criativo, quando analisado com rigor e implicação, constitui
              também forma de pensamento. Filmar sobre um skate, montar imagens coletivamente, circular
              um filme fora dos circuitos convencionais — essas operações não são apenas práticas
              artísticas: são modos de conhecer o mundo. O percurso metodológico se desenvolve em espiral — cada retorno ao
              campo aprofunda a compreensão anterior.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">
               O que o LowMovie™ ensina é que a poética não habita o resultado
              acabado, mas o percurso que o constitui. O filme é a sedimentação provisória de um fluxo
              contínuo de gestos, decisões, improvisos e encontros. É nesse fluxo que reside a contribuição
              mais profunda: o movimento é, simultaneamente, condição de produção, linguagem expressiva e forma de
              pensamento.
            </p>
          </div>

          <div className="mt-16">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <p className="text-sm text-muted-foreground leading-relaxed italic text-justify">
                "Da prática corporal à formulação conceitual, do coletivo ao campo acadêmico,
                do instante ao pensamento — o percurso desta dissertação é, ele mesmo, um Lowbyrinth™."
              </p>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-16 mb-16">
            <div className="h-px w-full bg-border/30" />
          </div>

          {/* Card: Dissertação PDF */}
          <div>
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Dissertação Completa
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">
                Leia a dissertação na íntegra — versão otimizada para leitura digital.
              </p>
              <a
                href="/docs/dissertacao.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground/80">Abrir Dissertação em PDF</span>
              </a>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-16 mb-16">
            <div className="h-px w-full bg-border/30" />
          </div>

          {/* Card: Acervo do Processo */}
          <div>
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Acervo do Processo
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">
                Documentos, registros e materiais produzidos ao longo da pesquisa — disponíveis para consulta.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1z0nDmYxxyub0gbhzMo4bj1o3L4lXyiUw?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground/80">Abrir Acervo no Google Drive</span>
              </a>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-16 mb-16">
            <div className="h-px w-full bg-border/30" />
          </div>

          {/* Card: Entrevistas com Accordion */}
          <div>
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Entrevistas
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {interviews.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-sm font-semibold uppercase tracking-wider text-foreground/80 hover:no-underline">
                      <span className="flex items-center gap-3">
                        {item.label}
                        <span className="text-xs font-normal normal-case tracking-normal text-muted-foreground">{item.subtitle}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 space-y-6">
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                          {item.description}
                        </p>

                        {item.youtubeId ? (
                          <div className="rounded-lg overflow-hidden group/video">
                            <div className="relative w-full grayscale hover:grayscale-0 transition-all duration-500" style={{ paddingBottom: "56.25%" }}>
                              <iframe
                                src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                                className="absolute inset-0 w-full h-full border-0"
                                title={item.label}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                                allowFullScreen
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : item.image ? (
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-auto"
                              loading="lazy"
                            />
                          </div>
                        ) : null}

                        <a
                          href={item.transcript}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
                        >
                          <span className="text-sm font-medium text-foreground/80">Abrir Transcrição em PDF</span>
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-16 mb-16">
            <div className="h-px w-full bg-border/30" />
          </div>

          {/* Card: Manual LowMovie™ */}
          <div>
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Manual LowMovie™
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">
                Brandbook e diretrizes visuais do projeto LowMovie™.
              </p>
              <div className="rounded-lg overflow-hidden mb-6">
                <iframe
                  src="/docs/LowMovie_brandbook.pdf"
                  className="w-full border-0 rounded-lg"
                  style={{ height: "600px" }}
                  title="Manual LowMovie™"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <a
                href="/docs/LowMovie_brandbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground/80">Abrir Manual em PDF</span>
              </a>
            </div>
          </div>

          {/* Separador */}
          <div className="mt-16 mb-16">
            <div className="h-px w-full bg-border/30" />
          </div>

          {/* Card: Manual LowPressure™ */}
          <div>
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Manual LowPressure™
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">
                Brandbook e diretrizes visuais do coletivo LowPressure™.
              </p>
              <div className="rounded-lg overflow-hidden mb-6">
                <iframe
                  src="/docs/LowPressure_brandbook.pdf"
                  className="w-full border-0 rounded-lg"
                  style={{ height: "600px" }}
                  title="Manual LowPressure™"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
              <a
                href="/docs/LowPressure_brandbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <span className="text-sm font-medium text-foreground/80">Abrir Manual em PDF</span>
              </a>
            </div>
          </div>

          <NextSectionButton to="/mapa" label="Mapa Conceitual" />
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
