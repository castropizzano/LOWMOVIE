import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const glossario = [
  { termo: "Crew", def: "Grupo de skatistas que compartilham afinidades, sessões e produções. Não é uma equipe formal — é uma rede de vínculos." },
  { termo: "Sessão", def: "Encontro de prática coletiva do skate em um determinado espaço urbano. Pode envolver filmagem, improviso e convivência." },
  { termo: "Spot", def: "Local urbano apropriado para a prática do skate — escadarias, bordas, corrimãos, bancos, praças." },
  { termo: "Shape", def: "A prancha do skate. Elemento central da prática, com dimensões, formatos e desgastes que influenciam o estilo." },
  { termo: "Tricks", def: "Manobras executadas sobre o skate. Cada trick possui nome, gramática corporal e variações estilísticas próprias." },
  { termo: "Linha", def: "Sequência encadeada de manobras executadas em fluxo contínuo, articulando corpo, espaço e tempo." },
  { termo: "VideoParte", def: "Formato audiovisual próprio da cultura do skate: registro editado da performance individual ou coletiva, com trilha sonora e identidade visual." },
  { termo: "Full-Length", def: "Produção audiovisual completa de skate, com múltiplas partes, interlúdios e estrutura narrativa própria." },
];

const Coletivo = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="O Coletivo — LowPressure™"
            subtitle="Rede de artistas-skatistas que ativam a cidade como campo sensível"
          />

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl space-y-6 text-foreground/85 leading-relaxed mb-16">
              <p>
                O <span className="text-primary font-medium">LowPressure™</span> não é um grupo
                formal — é uma rede de afinidades, uma forma de vida em rede que se constitui pelo
                encontro, pela prática e pela insistência do fazer. A crew opera como constelação de
                corpos que se encontram na cidade, no skate, no vídeo e no som.
              </p>
              <p>
                O processo criativo no LowPressure™ se enraíza na escuta e na convivência. A identidade
                do coletivo se afirma como <span className="text-primary font-medium">construção rizomática</span>,
                em que saberes e fazeres se moldam ao ritmo de um coletivo em movimento. Não há hierarquia
                fixa, não há divisão rígida de funções — há uma ética de produção fundada na horizontalidade
                e na confiança mútua. Como afirma Stuart Hall, <em>"a identidade cultural talvez deva ser pensada
                como uma 'produção', algo que nunca está completo, que é sempre processual"</em> — e é precisamente
                assim que o LowPressure™ se constitui.
              </p>
              <p>
                A questão da <span className="text-primary font-medium">autoria compartilhada</span> é central.
                Como propõe Luis Alberto de Abreu, <em>"num processo de criação partilhada não há muito espaço
                para 'minha cena', 'meu texto', 'minha ideia'. Tudo é jogado numa arena comum"</em>. No LowPressure™,
                a autoria não é propriedade individual — é emergência coletiva. Preferimos denominar essa experiência
                criativa com o nome de <em>processo colaborativo</em> (e não método colaborativo), pois se trata
                de uma dinâmica viva, não de um protocolo fixo.
              </p>
              <p>
                O título <span className="text-primary font-medium">"Like Rats on Hostile Paths"</span>{" "}
                funciona como síntese epistemológica do coletivo: a ocupação tática de espaços hostis,
                a reinvenção cotidiana das condições de criação. A expressão evoca Michel de Certeau e
                sua distinção entre <em>táticas</em> (do cotidiano, do fraco) e <em>estratégias</em>{" "}
                (do poder institucional). O "rato" não é figura de degradação, mas de sobrevivência e
                inteligência tática — os sujeitos comuns operam por táticas, <em>astúcias do tempo e do
                desvio</em>, inventando percursos possíveis nos interstícios das estruturas de poder.
              </p>
              <p>
                Henri Lefebvre complementa essa leitura: o espaço urbano é produção social em disputa,
                não cenário neutro. O skate opera nesse intervalo, <span className="text-primary font-medium">transformando
                trajetos planejados em percursos improvisados</span>, reativando espaços projetados para o
                controle como superfícies de criação e jogo. A cidade não é palco — é co-autora.
              </p>
              <p>
                A relação com o erro é igualmente constitutiva. Werner Herzog afirma que <em>"o erro é algo
                que beira o sagrado... é preciso aceitar a tentativa e erro"</em>. No LowPressure™, o erro
                não é falha — é material criativo. A manobra que não se completa, a filmagem que treme, o
                som que invade o quadro: tudo entra na tessitura da obra como matéria poética.
              </p>
              <p>
                A <span className="text-primary font-medium">LowZine</span> opera como arquivo vivo
                do coletivo — publicação independente que documenta, organiza e projeta a memória estética
                do grupo. O <span className="text-primary font-medium">BrandBook</span> funciona como
                artefato narrativo do coletivo, sistematizando sua identidade visual e seus princípios
                estéticos. Rafão VM atua como agregador do coletivo, figura central na articulação dos vínculos.
              </p>
              <p>
                A micropolítica do fazer cotidiano é o que sustenta o coletivo: cada sessão de skate é
                um ensaio, cada filmagem é um gesto de cuidado, cada montagem é uma escuta.
              </p>
            </div>
          </AnimatedSection>

          {/* Vocabulário do Skate */}
          <AnimatedSection delay={0.2}>
            <h3 className="font-display text-xl uppercase tracking-tight mb-6">Vocabulário do Skate</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              Para ancorar a precisão terminológica da dissertação, apresentamos os termos centrais da cultura
              do skate mobilizados ao longo da pesquisa — termos que não são jargão, mas categorias operacionais
              de uma prática estética situada.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {glossario.map((item) => (
                <div
                  key={item.termo}
                  className="border border-border/50 rounded-lg p-4 bg-card/30 hover:border-primary/30 transition-colors"
                >
                  <p className="font-display text-sm uppercase tracking-wide text-foreground mb-1">{item.termo}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.def}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="font-display text-xl uppercase tracking-tight mb-6">Galeria</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground/30 text-xs uppercase tracking-widest hover:border-primary/30 transition-colors cursor-pointer"
                >
                  Img {i}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16">
            <div className="border-l-2 border-primary/30 pl-6 md:pl-8">
              <p className="text-lg md:text-xl font-light italic text-foreground/80">
                "Num processo de criação partilhada não há muito espaço para 'minha cena', 'meu texto',
                'minha ideia'. Tudo é jogado numa arena comum."
              </p>
              <p className="text-xs text-muted-foreground mt-3 uppercase tracking-widest">
                — Luis Alberto de Abreu
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Coletivo;
