import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";
import ImageLightbox from "@/components/ImageLightbox";

const glossario = [
  { termo: "Crew", def: "Grupo de skatistas que compartilham afinidades, sessões e produções." },
  { termo: "Sessão", def: "Encontro de prática coletiva do skate em um determinado espaço urbano." },
  { termo: "Spot", def: "Local urbano apropriado para a prática do skate — escadarias, bordas, corrimãos." },
  { termo: "Shape", def: "A prancha do skate. Elemento central da prática, com dimensões e desgastes que influenciam o estilo." },
  { termo: "Tricks", def: "Manobras executadas sobre o skate. Cada trick possui nome e gramática corporal própria." },
  { termo: "Linha", def: "Sequência encadeada de manobras executadas em fluxo contínuo." },
  { termo: "VideoParte", def: "Formato audiovisual próprio da cultura do skate: registro editado da performance com trilha sonora." },
  { termo: "Full-Length", def: "Produção audiovisual completa de skate, com múltiplas partes e estrutura narrativa." },
];

const Coletivo = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="O Coletivo — LowPressure™"
            subtitle="Rede de artistas-skatistas que ativam a cidade como campo sensível"
          />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>
                O <span className="text-primary font-semibold">LowPressure™</span> não é um grupo
                formal — é uma rede de afinidades, uma forma de vida em rede que se constitui pelo
                encontro, pela prática e pela insistência do fazer.
              </p>
              <p>
                O processo criativo se enraíza na escuta e na convivência. A identidade
                do coletivo se afirma como <span className="text-primary font-semibold">construção rizomática</span> (que cresce em rede, sem hierarquia fixa),
                em que saberes e fazeres se moldam ao ritmo de um coletivo em movimento. Como afirma Stuart Hall,
                <em> "a identidade cultural talvez deva ser pensada como uma 'produção', algo que nunca está
                completo, que é sempre processual"</em>.
              </p>
              <p>
                A questão da <span className="text-primary font-semibold">autoria compartilhada</span> é central.
                Como propõe Abreu, <em>"num processo de criação partilhada não há muito espaço
                para 'minha cena', 'meu texto', 'minha ideia'. Tudo é jogado numa arena comum"</em>. A autoria
                não é propriedade individual — é emergência coletiva.
              </p>
              <p>
                O título <span className="text-primary font-semibold">"Like Rats on Hostile Paths"</span>{" "}
                funciona como síntese epistemológica: a ocupação tática de espaços hostis. Certeau distingue
                <em> táticas</em> (do cotidiano, do fraco) e <em>estratégias</em> (do poder institucional).
                O "rato" é figura de sobrevivência e inteligência tática — <em>astúcias do tempo e do desvio</em>.
              </p>
              <p>
                Lefebvre complementa: o espaço urbano é produção social em disputa. O skate opera nesse intervalo,
                <span className="text-primary font-semibold"> transformando trajetos planejados em percursos
                improvisados</span>. A cidade não é palco — é co-autora.
              </p>
              <p>
                Herzog afirma que <em>"o erro é algo que beira o sagrado... é preciso aceitar a tentativa e
                erro"</em>. No LowPressure™, o erro não é falha — é material criativo.
              </p>
              <p>
                A <span className="text-primary font-semibold">LowZine</span> opera como arquivo vivo.
                O <span className="text-primary font-semibold">BrandBook</span> funciona como artefato narrativo
                do coletivo. Rafão VM atua como agregador, figura central na articulação dos vínculos.
              </p>
            </div>
          </AnimatedSection>

          {/* Vocabulário do Skate */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">Vocabulário do Skate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Termos centrais da cultura do skate mobilizados na pesquisa — categorias operacionais
              de uma prática estética situada.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {glossario.map((item) => (
                <div
                  key={item.termo}
                  className="border border-border rounded-lg p-4 bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-1">{item.termo}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{item.def}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">Galeria</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
                const num = String(i).padStart(2, '0');
                return (
                  <ImageLightbox
                    key={i}
                    src={`/images/coletivo/${num}.png`}
                    alt={`Imagem ${i} do Coletivo`}
                    aspectRatio="aspect-video"
                    imageClassName="object-contain bg-muted/20"
                  />
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16">
            <div className="border-l-2 border-primary/30 pl-6 md:pl-8">
              <p className="text-lg italic text-foreground/80">
                "Num processo de criação partilhada não há muito espaço para 'minha cena', 'meu texto',
                'minha ideia'. Tudo é jogado numa arena comum."
              </p>
              <p className="text-xs font-semibold text-muted-foreground mt-3 uppercase tracking-widest">
                — Luis Alberto de Abreu
              </p>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/contribuicoes" label="Contribuições" />
        </div>
      </section>
    </Layout>
  );
};

export default Coletivo;
