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
    q: "Poética e estética",
    a: "Poética refere-se ao fazer em ato, à formatividade do processo criador. A escolha enfatiza o processo — não apenas o resultado formal. A dissertação analisa como se faz, não apenas o que se faz.",
  },
  {
    q: "Símbolo e signo",
    a: "O símbolo é mobilizado como imagem condensadora de sentido. Não se realiza análise estrutural semiótica. A referência junguiana é operacional e complementar — funciona como lente imagética, não como sistema interpretativo totalizante.",
  },
  {
    q: "Rigor metodológico",
    a: "O rigor reside na reflexividade explícita e na articulação teórica consistente. A posição de artista-pesquisador é assumida e fundamentada, não naturalizada. A neutralidade é substituída pela explicitação do posicionamento como critério de validade.",
  },
  {
    q: "Delimitação do objeto",
    a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo LowPressure™ é analisado enquanto condição de produção — contexto necessário, não objeto autônomo. É sobre cinema a partir do skate. O foco é o processo audiovisual.",
  },
  {
    q: "Dimensão política",
    a: "A obra opera como micropolítica do gesto e da ocupação sensível da cidade. Não se trata de militância explícita, mas de uma ética do fazer que reconfigura as condições de produção e circulação artística.",
  },
  {
    q: "Autonomia conceitual",
    a: "A tese sustenta-se independentemente da referência junguiana. O Lowbyrinth™ funciona como imagem-conceito operacional. A estrutura argumentativa se apoia nos operadores poéticos e na pesquisa-criação, não na psicologia analítica.",
  },
  {
    q: "Contribuição inédita",
    a: "O deslocamento do skate para o campo estético-metodológico e a formulação de operadores analíticos situados — poética do instante, estética da borda, registro em fluxo — constituem contribuição original ao campo do cinema e das artes do vídeo no Brasil.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Questões Críticas" subtitle="Respostas fundamentadas às perguntas centrais" />

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
