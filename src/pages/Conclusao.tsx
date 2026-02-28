import Layout from "@/components/Layout";
import { FolderOpen, ExternalLink, FileText, Youtube } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
    description: "Black Media Skate — perspectivas sobre skate, cultura negra e produção audiovisual independente no contexto do LowMovie™.",
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
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Síntese
            </p>
          </div>

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
              estético legítimo no campo acadêmico. A dissertação demonstra, analiticamente, que o skate já opera
              como prática estética produtora de formas, linguagens e saberes.
            </p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed text-justify">
              A pesquisa afirma que o gesto criativo, quando analisado com rigor e implicação, constitui
              também forma de pensamento. Filmar sobre um skate, montar imagens coletivamente, circular
              um filme fora dos circuitos convencionais — essas operações não são apenas práticas
              artísticas: são modos de conhecer o mundo. O percurso metodológico opera em espiral — cada retorno ao
              campo aprofunda a compreensão anterior.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify">
              O que o LowMovie™ ensina é que a poética não habita o resultado
              acabado, mas o processo que o engendra. O filme é a sedimentação provisória de um fluxo
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

          {/* Card: Dissertação PDF */}
          <div className="mt-20">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
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
                <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground/80">Abrir Dissertação em PDF</span>
              </a>
            </div>
          </div>

          {/* Card: Acervo do Processo */}
          <div className="mt-8">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <FolderOpen className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Acervo do Processo
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-8">
                Documentos, registros e materiais produzidos ao longo da pesquisa — disponíveis para consulta.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1PTwdYEHC0mE7wa6Mt8GxsMgJ7zxfUXBX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground/80">Abrir Acervo no Google Drive</span>
              </a>
            </div>
          </div>

          {/* Card: Entrevistas com Tabs */}
          <div className="mt-8">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-6">
                <Youtube className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                  Entrevistas
                </h2>
              </div>

              <Tabs defaultValue="skate-punk" className="w-full">
                <TabsList className="w-full h-auto flex-wrap justify-start gap-1 bg-transparent p-0 mb-8">
                  {interviews.map((item) => (
                    <TabsTrigger
                      key={item.id}
                      value={item.id}
                      className="text-xs uppercase tracking-widest px-3 py-2 rounded-md border border-border/40 bg-card/30 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
                    >
                      {item.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {interviews.map((item) => (
                  <TabsContent key={item.id} value={item.id}>
                    <p className="text-primary font-semibold uppercase text-xs tracking-widest mb-1">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-justify mb-6">
                      {item.description}
                    </p>

                    {item.youtubeId ? (
                      <div className="rounded-lg overflow-hidden mb-6">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${item.youtubeId}`}
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
                      <div className="rounded-lg overflow-hidden mb-6">
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
                      <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground/80">Abrir Transcrição em PDF</span>
                    </a>
                  </TabsContent>
                ))}
          </Tabs>
            </div>
          </div>

          {/* Card: Manual LowMovie™ */}
          <div className="mt-8">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
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
                />
              </div>
              <a
                href="/docs/LowMovie_brandbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground/80">Abrir Manual em PDF</span>
              </a>
            </div>
          </div>

          {/* Card: Manual LowPressure™ */}
          <div className="mt-8">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
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
                />
              </div>
              <a
                href="/docs/LowPressure_brandbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/30 hover:bg-card/50 transition-colors group"
              >
                <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground/80">Abrir Manual em PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
