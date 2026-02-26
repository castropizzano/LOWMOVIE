import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, Ear, Zap } from "lucide-react";

const eixos = [
  {
    icon: Heart,
    title: "Afeto",
    desc: "Vínculo sensível com o campo investigado. Inspirado nos debates do grupo Afetos (UFMG), o afeto não é contaminação, mas condição de acesso ao real em sua dimensão mais densa e significativa. Afetar e ser afetado constituem formas legítimas de produzir conhecimento.",
  },
  {
    icon: Ear,
    title: "Escuta",
    desc: "Atenção às dinâmicas coletivas, aos silêncios, aos gestos não verbalizados. Escutar é mais do que ouvir — a escuta expandiu-se para o corpo, para o som da cidade, para o ruído das rodas sobre o concreto. Sustentar o silêncio, acolher o tempo do outro.",
  },
  {
    icon: Zap,
    title: "Improviso",
    desc: "Abertura ao imprevisto como dado epistemológico legítimo, e não como falha do planejamento. A metodologia assume uma arquitetura móvel, capaz de se refazer a cada encontro. Um saber em movimento que aprende com a instabilidade.",
  },
];

const Metodologia = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="Metodologia"
            subtitle="Pesquisa-criação implicada, fundamentada na reflexividade"
          />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify mb-16">
              <p>
                A investigação estrutura-se como <span className="text-primary font-semibold">pesquisa-criação implicada</span>,
                modalidade metodológica que articula a produção artística e a reflexão acadêmica como dimensões
                indissociáveis de um mesmo processo investigativo.
              </p>
              <p className="text-sm text-muted-foreground">
                Referências: Coessens, Pimentel, Moriceau — corpo como produção de conhecimento.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {eixos.map((eixo, i) => (
              <AnimatedSection key={eixo.title} delay={0.15 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 transition-colors hover:border-primary/30 h-full">
                  <eixo.icon className="h-7 w-7 text-primary/70 mb-4" />
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">{eixo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{eixo.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Procedimentos de Campo */}
          <AnimatedSection delay={0.35}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Procedimentos de Campo — Três Operações Entrelaçadas
              </p>
              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">Vivência Situada</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Participação em processos coletivos: sessões de gravação, reuniões, eventos, sessões de skate.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">Convivência Criativa</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O pesquisador participa das dinâmicas de produção e montagem, contribuindo ativamente para
                    as decisões estéticas do coletivo.
                  </p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground mb-2">Escuta Partilhada</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Materializada em conversas abertas, registradas por meio de notas, áudios e diário digital.
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                A pesquisa adota uma <strong>espiral cognitiva</strong> inspirada na Taxonomia de Bloom adaptada:
                cada retorno ao campo aprofunda a compreensão anterior, num movimento cumulativo.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30 mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Distinção Fundamental
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6">
                <div className="flex-1 text-center md:text-right">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Método de Pesquisa</p>
                  <p className="text-xs text-muted-foreground mt-1">Reflexivo e analítico</p>
                </div>
                <div className="text-3xl font-light text-primary/80">≠</div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm font-semibold uppercase tracking-wide text-foreground">Métodos de Criação</p>
                  <p className="text-xs text-muted-foreground mt-1">Filmagem, montagem, glitch, design</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                Embora método de pesquisa e métodos de criação se alimentem mutuamente, não se confundem.
                O primeiro interroga, conceitua e articula; os segundos produzem, experimentam e materializam.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-3xl">
                O rigor reside na reflexividade com que cada decisão é interrogada e na consistência com que
                as inferências se articulam aos referenciais mobilizados.
              </p>
            </div>
          </AnimatedSection>

          {/* Procedimentos Operacionais */}
          <AnimatedSection delay={0.5}>
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                Procedimentos Operacionais
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Período de pesquisa", value: "2023–2025" },
                  { label: "Instrumentos de registro", value: "Diário de campo, registros audiovisuais, caderno de montagem" },
                  { label: "Procedimentos de análise", value: "Análise fílmica implicada, descrição densa dos processos criativos" },
                  { label: "Posicionamento", value: "Artista-pesquisador — membro ativo do coletivo criador" },
                  { label: "Coleta de materiais", value: "Vídeos, zines, áudios, fotografias e trocas digitais — mediada pelo consentimento informado" },
                  { label: "Organização", value: "Espiral cognitiva: prática → reflexão → formulação → retorno ao campo" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-primary/20 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground/80 mt-1">{item.value}</p>
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
