import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "Poética versus estética",
    a: "A escolha pelo termo poética — e não estética — é deliberada e teoricamente fundamentada. Poética refere-se ao fazer em ato, à formatividade do processo criador, ao modo como a obra se constitui enquanto é produzida. A ênfase recai sobre o processo, e não apenas sobre o resultado formal. A estética, em sentido estrito, diz respeito à recepção e à experiência sensível do espectador — dimensão que a dissertação não ignora, mas não elege como foco principal.",
  },
  {
    q: "Símbolo e signo",
    a: "O símbolo é mobilizado como imagem condensadora de sentido, não como unidade de análise semiótica. A dissertação não realiza análise estrutural semiótica. A referência junguiana, quando presente, é operacional e complementar — jamais estruturante. A tese sustenta-se independentemente dessa referência.",
  },
  {
    q: "Rigor metodológico",
    a: "O rigor não reside na neutralidade ou na replicabilidade, mas na reflexividade explícita, na transparência do posicionamento e na articulação teórica consistente. Cada inferência é confrontada com os referenciais mobilizados; cada escolha metodológica é justificada. A posição de artista-pesquisador é assumida e fundamentada, não naturalizada.",
  },
  {
    q: "Delimitação do objeto",
    a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo LowPressure™ é analisado como condição de produção — não como objeto em si. A dissertação mantém foco disciplinado, evitando dispersão temática. É sobre cinema a partir do skate. O foco é o processo audiovisual.",
  },
  {
    q: "Dimensão política",
    a: "A obra opera como micropolítica do gesto e da ocupação sensível da cidade. Sua dimensão política é imanente à prática, não declarativa. Criar autonomamente, circular fora dos circuitos institucionais, ocupar a cidade com o corpo — esses gestos são, em si mesmos, atos políticos.",
  },
  {
    q: "Autonomia conceitual",
    a: "A tese sustenta-se independentemente da referência junguiana. O Lowbyrinth™ funciona como imagem-conceito operacional. A estrutura argumentativa se apoia nos operadores poéticos e na pesquisa-criação, não na psicologia analítica.",
  },
  {
    q: "Contribuição inédita",
    a: "O ineditismo reside no deslocamento do skate para o campo estético-metodológico e na formulação de operadores analíticos situados — ferramentas conceituais que emergem da prática e que podem ser apropriadas por outras investigações no campo das artes e do cinema no Brasil.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Questões Críticas" subtitle="Respostas fundamentadas às perguntas centrais" />

          <AnimatedSection delay={0.05}>
            <p className="text-foreground/80 leading-relaxed mb-10">
              Toda dissertação de qualidade deve antecipar as objeções possíveis e responder a elas com
              clareza e consistência argumentativa. As questões reunidas a seguir correspondem aos pontos
              de tensão conceitual mais prováveis na avaliação da banca, acompanhadas das respostas
              fundamentadas que a dissertação sustenta.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {questions.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border border-border rounded-lg bg-card/30 px-6 transition-colors hover:border-primary/30 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left font-display text-sm md:text-base uppercase tracking-wide hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
