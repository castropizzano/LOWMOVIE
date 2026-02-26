import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Compass, Users, Film } from "lucide-react";

const movimentos = [
  {
    icon: Compass,
    title: "Corpo em Deriva",
    subtitle: "Operadores Poéticos",
    desc: "Cartografia da formação estética do pesquisador-artista. Formulação dos operadores poéticos a partir da experiência corporal: corpo-câmera, cine-transe e coreocinema.",
    items: ["Poética do instante", "Estética da borda", "Registro em fluxo"],
  },
  {
    icon: Users,
    title: "Coletivo em Baixo Relevo",
    subtitle: "Ética de Produção",
    desc: "Análise do LowPressure™ como rede de vínculos, ética de produção e modos de pertencimento. Inclui a LowZine como arquivo vivo e a micropolítica do fazer cotidiano.",
    items: ["Vínculos e pertencimento", "Micropolítica do fazer", "LowZine como arquivo"],
  },
  {
    icon: Film,
    title: "Obra em Expansão",
    subtitle: "Processos do Filme",
    desc: "Estudo do LowMovie™ em sua gênese, filmagem, montagem, trilha, glitch e campo simbólico. Análise da circulação como extensão da obra.",
    items: ["Filmagem como corpo-câmera", "Montagem e glitch", "Trilha e circulação"],
  },
];

const Estrutura = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionTitle
            title="Estrutura Analítica"
            subtitle="A dissertação se organiza em três movimentos"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {movimentos.map((mov, i) => (
              <AnimatedSection key={mov.title} delay={0.1 + i * 0.15}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                  <mov.icon className="h-8 w-8 text-primary/60 mb-5" />
                  <h3 className="font-display text-xl uppercase tracking-tight mb-1">{mov.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{mov.subtitle}</p>
                  <p className="text-sm text-foreground/75 leading-relaxed mb-6">{mov.desc}</p>
                  <ul className="space-y-3">
                    {mov.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Operadores e Campo Simbólico */}
          <AnimatedSection delay={0.5} className="mt-20">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-display text-xl uppercase tracking-tight mb-6 text-foreground">
                Operadores e Campo Simbólico
              </h3>
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Os operadores emergem da prática e retornam a ela. Não são categorias apriorísticas,
                  mas conceitos formulados a partir da experiência sensível do fazer artístico.
                </p>
                <p>
                  O <span className="text-primary font-medium">Lowbyrinth™</span> funciona como
                  imagem-conceito e operador simbólico — uma lente imagética que sintetiza o caráter
                  processual, labiríntico e transformador da criação coletiva.
                </p>
                <p className="text-muted-foreground">
                  A referência junguiana opera como lente complementar, não como fundamento estruturante
                  da análise. A tese se sustenta independentemente dessa referência.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Estrutura;
