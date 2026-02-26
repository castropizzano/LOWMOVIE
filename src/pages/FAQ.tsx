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
    a: "A escolha por \"poética\" enfatiza o fazer em ato, a formatividade do processo criador. A pesquisa analisa processos de criação, não apenas resultados formais.",
  },
  {
    q: "Símbolo e signo",
    a: "O símbolo é mobilizado como imagem condensadora de sentido, não como estrutura semiótica formal. A referência simbólica é operacional e contextual.",
  },
  {
    q: "Rigor metodológico",
    a: "A reflexividade substitui a neutralidade como critério de validade. O rigor está na explicitação metodológica da implicação.",
  },
  {
    q: "Delimitação do objeto",
    a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo é analisado enquanto condição de produção.",
  },
  {
    q: "Dimensão política",
    a: "A obra opera como micropolítica do fazer cotidiano, não como militância explícita.",
  },
  {
    q: "Autonomia conceitual",
    a: "A tese se sustenta independentemente da referência junguiana. Jung é lente complementar, não fundamento estrutural.",
  },
  {
    q: "Contribuição inédita",
    a: "O deslocamento do skate para o campo estético-metodológico e a formulação de operadores conceituais situados.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Questões Críticas" subtitle="Perguntas centrais sobre a dissertação" />

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
