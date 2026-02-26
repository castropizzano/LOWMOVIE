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
    q: 'Por que "poética" e não "estética"?',
    a: "Poética refere-se ao fazer em ato, à formatividade do processo criador. A pesquisa analisa processos de criação, não apenas resultados formais.",
  },
  {
    q: "Como diferenciar símbolo junguiano e signo semiótico?",
    a: "O símbolo é utilizado como imagem condensadora de sentidos e experiência subjetiva. Não se realiza análise estrutural semiótica. A referência simbólica é operacional e contextual.",
  },
  {
    q: "Como garantir rigor em uma pesquisa implicada?",
    a: "O rigor está na explicitação metodológica da implicação. A reflexividade substitui a neutralidade como critério de validade.",
  },
  {
    q: "Qual é a contribuição inédita?",
    a: "Deslocamento do skate para o campo estético-metodológico e formulação de operadores conceituais oriundos da prática.",
  },
  {
    q: "O LowMovie™ é resistência política?",
    a: "Opera como micropolítica do fazer cotidiano, não como militância explícita.",
  },
  {
    q: "A pesquisa é sobre skate ou cinema?",
    a: "É sobre cinema a partir do skate. O foco é o processo audiovisual.",
  },
  {
    q: "Como delimitar o objeto?",
    a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo é analisado enquanto condição de produção.",
  },
  {
    q: "A tese se sustenta sem Jung?",
    a: "Sim. Jung é lente complementar, não fundamento estrutural.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Questões Críticas" subtitle="Perguntas e respostas sobre a dissertação" />

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="space-y-3">
              {questions.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border border-border rounded-lg bg-card/30 px-6 transition-all hover:border-primary/30 data-[state=open]:border-primary/40 data-[state=open]:border-glow"
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
