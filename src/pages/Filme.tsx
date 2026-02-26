import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Play, Music, ExternalLink, Film } from "lucide-react";

const Filme = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="O Filme — LowMovie™"
            subtitle="Dispositivo poético-político nascido do gesto coletivo"
          />

          {/* Video Embed */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 mb-16">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-20 w-20 rounded-full border border-border flex items-center justify-center transition-colors hover:border-primary/50 cursor-pointer">
                  <Play className="h-8 w-8 text-muted-foreground ml-1" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Trailer em breve
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Dados da Obra */}
          <AnimatedSection delay={0.15}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Dados da Obra
              </p>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[
                  { label: "Título", value: "LowMovie™" },
                  { label: "Ano", value: "2024" },
                  { label: "Formato", value: "Curta-metragem experimental" },
                  { label: "Duração", value: "~25 min" },
                  { label: "Direção", value: "Castro Pizzano / LowPressure™" },
                  { label: "Coletivo", value: "LowPressure™" },
                  { label: "Trilha sonora", value: "Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)" },
                  { label: "Estrutura", value: "Segmentos entrelaçados — sessões, interlúdios, cenas de fabulação" },
                  { label: "Circulação", value: "Circuitos independentes e institucionais" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground/80 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Linhagem */}
          <AnimatedSection delay={0.17}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <div className="flex items-start gap-4 mb-6">
                <Film className="h-7 w-7 text-primary/60 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                    Linhagem — A Gramática dos Vídeos de Skate
                  </p>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    O LowMovie™ inscreve-se numa tradição audiovisual própria da cultura do skate. A <strong>VideoParte</strong> constitui
                    uma gramática com ritmo, montagem e códigos estéticos específicos. O <strong>Full-Length</strong> expande
                    essa gramática para uma estrutura narrativa completa.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { nome: "Ty Evans", desc: "Pioneiro da cinematografia de skate em alta definição" },
                  { nome: "Spike Jonze", desc: "Do vídeo de skate ao cinema de autor" },
                  { nome: "Beagle (Brian Anderson)", desc: "Documentário, identidade e subcultura no audiovisual do skate" },
                ].map((ref) => (
                  <div key={ref.nome} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-sm font-semibold text-foreground">{ref.nome}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ref.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Descrição */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl space-y-4 text-base text-foreground/80 leading-relaxed mb-16">
              <p>
                O <span className="text-primary font-semibold">LowMovie™</span> opera como dispositivo
                poético-político, onde viver, pensar e criar operam em um mesmo gesto. É a materialização
                de um processo coletivo que articula corpo, cidade, câmera e improviso como elementos
                indissociáveis de uma mesma operação poética.
              </p>
              <p>
                A filmagem funciona como <strong>corpo-câmera</strong> — extensão sensível do realizador em movimento.
                A montagem opera como <strong>artbook</strong>, reorganizando fragmentos em constelações de sentido.
                O <strong>glitch</strong> emerge como linguagem de fratura.
              </p>
              <p>
                As <strong>cenas de fabulação</strong> funcionam como <em>improviso enquanto dramaturgia do real</em>.
                Os <strong>ritos de estreia</strong> constituem o circuito de circulação do filme, prolongando
                a obra para além de seus limites formais.
              </p>
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">Stills do Filme</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-md bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest"
                >
                  Still {i}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Análise de Sequência */}
          <AnimatedSection delay={0.35} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">Análise de Sequência — Exemplo</h3>

            {/* Bloco 1 — Sequência em Quadros */}
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2 mb-4">
              {Array.from({ length: 14 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-video rounded-md bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest cursor-pointer hover:border-primary/30 transition-colors"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-4">
              <div className="w-48 md:w-64 aspect-[3/4] rounded-md bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground text-xs uppercase tracking-widest cursor-pointer hover:border-primary/30 transition-colors">
                Foto Final
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-16">
              Sequência do drop — gesto único executado sem margem para erro, em contexto urbano de alto risco físico e técnico.
            </p>
          </AnimatedSection>

          {/* Bloco 2 — Texto Analítico */}
          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl space-y-4 text-base text-foreground/80 leading-relaxed mb-16">
              <p>
                A sequência organiza-se em três momentos visuais articulados: preparação, projeção e absorção do gesto no espaço urbano. O enquadramento privilegia o plano geral aberto, com o talude ocupando grande parte do quadro e o corpo do skatista reduzido à condição de vetor em deslocamento, evidenciando a desproporção entre corpo e arquitetura.
              </p>
              <p>
                O movimento de câmera é contido, permitindo que a ação se desenvolva no interior do quadro. A descida pelo plano inclinado cria uma diagonal dominante, reforçada pela sombra projetada no concreto, transformando o corpo em traço gráfico. O ápice ocorre no momento do drop para a via principal — gesto executado sem possibilidade de erro, dado o desnível, a inclinação e a circulação viária.
              </p>
              <p>
                A montagem preserva a continuidade do movimento, sustentando o registro em fluxo e recusando fragmentações espetacularizantes. O som direto das rodas sobre o concreto ancora o gesto na materialidade do espaço.
              </p>
              <p>
                Nos quadros finais, o corpo atravessa a via e deixa o campo. Permanece a arquitetura. A cidade retorna como superfície. A fotografia realizada durante o take cristaliza o instante de suspensão entre gravidade e invenção.
              </p>
              <div className="space-y-1 pt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Operadores conceituais</p>
                <p className="text-sm font-semibold text-foreground">– Poética do instante</p>
                <p className="text-sm font-semibold text-foreground">– Estética da borda</p>
                <p className="text-sm font-semibold text-foreground">– Registro em fluxo</p>
                <p className="text-sm font-semibold text-foreground">– Afeto como eixo</p>
              </div>
              <p>
                O drop sintetiza simbolicamente o próprio argumento da dissertação: criar é assumir risco situado. O LowMovie™ emerge da borda, onde erro não é metáfora — é consequência física. O gesto único, irrepetível naquele contexto, condensa a ética da pesquisa: invenção como enfrentamento real do espaço.
              </p>
            </div>
          </AnimatedSection>

          {/* Bloco 3 — Conexão com a Tese */}
          <AnimatedSection delay={0.45}>
            <div className="border border-primary/20 bg-primary/5 rounded-lg p-8 mb-16">
              <p className="text-base font-semibold text-foreground">Este drop não é apenas uma manobra.</p>
              <p className="text-base font-semibold text-primary mt-1 mb-4">É a metáfora estrutural da pesquisa.</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                A dissertação defende que processos criativos situados operam em contextos de risco, liminaridade e improviso. Assim como no talude, não há neutralidade nem terreno plano. Há borda, inclinação e decisão.
              </p>
              <p className="text-sm font-semibold text-primary">LowMovie™ é o registro dessa condição.</p>
            </div>
          </AnimatedSection>

          {/* Soundtrack */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">
              <Music className="inline h-5 w-5 text-muted-foreground mr-2 -mt-1" />
              Soundtrack
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Music className="h-5 w-5 text-primary/70" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Lowbyrinth EP</p>
                  <p className="text-xs text-muted-foreground mt-1">Dan Guinski (Non-Grata) & Raphael Carvalho (Relvi)</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Music className="h-5 w-5 text-primary/70" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide">Like Rats on Hostile Paths</p>
                  <p className="text-xs text-muted-foreground mt-1">Trilha original do filme</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Filme;
