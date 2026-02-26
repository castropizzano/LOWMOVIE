import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Ear, Zap } from "lucide-react";

const eixos = [
  {
    icon: Heart,
    title: "Afeto",
    desc: "Vínculo sensível com o campo investigado. Inspirado nos debates do grupo Afetos (UFMG), o afeto não é contaminação, mas condição de acesso ao real em sua dimensão mais densa e significativa. Afetar e ser afetado constituem formas legítimas de produzir conhecimento. A disposição de deixar-se tocar pelo campo constitui força epistemológica e gesto ético-político.",
  },
  {
    icon: Ear,
    title: "Escuta",
    desc: "Atenção às dinâmicas coletivas, aos silêncios, aos gestos não verbalizados que constituem o tecido relacional do grupo. Escutar é mais do que ouvir — a escuta expandiu-se para o corpo, para o som da cidade, para o ruído das rodas sobre o concreto. Sustentar o silêncio, acolher o tempo do outro, permitir que o sentido emerja das dinâmicas coletivas sem imposição interpretativa.",
  },
  {
    icon: Zap,
    title: "Improviso",
    desc: "Abertura ao imprevisto como dado epistemológico legítimo, e não como falha do planejamento metodológico. A metodologia assume uma arquitetura móvel, capaz de se refazer a cada encontro. Um saber em movimento que aprende com a instabilidade e com o gesto imprevisto.",
  },
];

const Metodologia = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Metodologia"
            subtitle="Pesquisa-criação implicada, fundamentada na reflexividade"
          />

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl space-y-4 text-base md:text-lg leading-relaxed text-foreground/85 mb-12">
              <p>
                A investigação estrutura-se como <span className="text-primary font-medium">pesquisa-criação implicada</span>,
                modalidade metodológica que articula a produção artística e a reflexão acadêmica como dimensões
                indissociáveis de um mesmo processo investigativo. Essa escolha não é arbitrária: ela decorre
                diretamente da natureza do objeto — um filme produzido coletivamente no interior de uma prática
                subcultural — e do posicionamento do pesquisador como membro ativo do coletivo criador.
              </p>
              <p className="text-muted-foreground text-sm">
                Referências: Coessens, Pimentel, Moriceau — corpo como produção de conhecimento.
                A prática artística como forma legítima de investigação acadêmica.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {eixos.map((eixo, i) => (
              <AnimatedSection key={eixo.title} delay={0.15 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30 h-full">
                  <eixo.icon className="h-7 w-7 text-primary/70 mb-4" />
                  <h3 className="font-display text-lg uppercase tracking-wide mb-3">{eixo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{eixo.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Procedimentos de Campo */}
          <AnimatedSection delay={0.35}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-6">
                Procedimentos de Campo — Três Operações Entrelaçadas
              </p>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground mb-2">Vivência Situada</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Participação em processos coletivos: sessões de gravação, reuniões, eventos, sessões de skate.
                    O pesquisador não observa de fora — habita o campo.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground mb-2">Convivência Criativa</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    O pesquisador participa das dinâmicas de produção e montagem, contribuindo ativamente para
                    as decisões estéticas do coletivo enquanto investiga seus processos.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground mb-2">Escuta Partilhada</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Materializada em conversas abertas, registradas por meio de notas, áudios e diário digital.
                    A escuta como instrumento de pesquisa e gesto de cuidado.
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                A pesquisa adota uma <strong>espiral cognitiva</strong> inspirada na Taxonomia de Bloom adaptada
                como estrutura organizadora: cada retorno ao campo aprofunda a compreensão anterior, num movimento
                cumulativo que articula prática, reflexão e formulação conceitual.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Distinção Fundamental
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6">
                <div className="flex-1 text-center md:text-right">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground">Método de Pesquisa</p>
                  <p className="text-xs text-muted-foreground mt-1">Reflexivo e analítico</p>
                </div>
                <div className="text-2xl font-light text-primary/60">≠</div>
                <div className="flex-1 text-center md:text-left">
                  <p className="font-display text-sm uppercase tracking-wide text-foreground">Métodos de Criação</p>
                  <p className="text-xs text-muted-foreground mt-1">Filmagem, montagem, glitch, design</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A dissertação estabelece com clareza uma distinção operacional frequentemente negligenciada:
                embora ambos se alimentem mutuamente, não se confundem. O método de pesquisa interroga,
                conceitua e articula; os métodos de criação produzem, experimentam e materializam.
                A dissertação habita o espaço entre essas duas operações, extraindo do atrito entre elas
                sua potência analítica.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                O rigor, neste enquadramento, reside não na pretensão de objetividade ou na replicabilidade
                dos procedimentos, mas na reflexividade explícita e na consistência conceitual com que as
                análises são conduzidas. Cada decisão metodológica é justificada, cada posicionamento é
                tornado visível, cada inferência é confrontada com os referenciais teóricos mobilizados.
              </p>
            </div>
          </AnimatedSection>

          {/* Procedimentos Operacionais */}
          <AnimatedSection delay={0.5}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-6">
                Procedimentos Operacionais
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Período de pesquisa", value: "2023–2025" },
                  { label: "Instrumentos de registro", value: "Diário de campo, registros audiovisuais, caderno de montagem" },
                  { label: "Procedimentos de análise", value: "Análise fílmica implicada, descrição densa dos processos criativos" },
                  { label: "Posicionamento", value: "Artista-pesquisador — membro ativo do coletivo criador" },
                  { label: "Coleta de materiais", value: "Vídeos, zines, áudios, fotografias e trocas digitais — mediada pelo consentimento informado dos participantes" },
                  { label: "Organização", value: "Espiral cognitiva: prática → reflexão → formulação → retorno ao campo" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                    <p className="font-display text-xs uppercase tracking-wide text-foreground/70">{item.label}</p>
                    <p className="text-sm text-foreground/85 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Metodologia;
