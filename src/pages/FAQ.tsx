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
    a: "A escolha pelo termo poética — e não estética — é deliberada. Poética refere-se ao fazer em ato, à formatividade do processo criador. A ênfase recai sobre o processo, e não apenas sobre o resultado formal. A estética diz respeito à recepção e à experiência sensível do espectador — dimensão que a dissertação não ignora, mas não elege como foco principal.",
  },
  {
    q: "Símbolo e signo",
    a: "O símbolo é mobilizado como imagem condensadora de sentido, não como unidade de análise semiótica. A referência junguiana é operacional e complementar — jamais estruturante. O conceito de fabulação (Deleuze) não designa invenção ficcional, mas um gesto de criação do real.",
  },
  {
    q: "Rigor metodológico",
    a: "O rigor reside na reflexividade explícita, na transparência do posicionamento e na articulação teórica consistente. Cada inferência é confrontada com os referenciais mobilizados; cada escolha metodológica é justificada. Como afirma Pimentel, \"toda ação praticada numa experiência modifica quem a pratica e quem a sofre\".",
  },
  {
    q: "Delimitação do objeto",
    a: "O objeto central é o filme LowMovie™ e seus processos criativos. O coletivo LowPressure™ é analisado como condição de produção — não como objeto em si. Os objetivos específicos delimitam com precisão o escopo: descrever, analisar, investigar e observar.",
  },
  {
    q: "Dimensão política",
    a: "A obra opera como micropolítica do gesto e da ocupação sensível da cidade. Sua dimensão política é imanente à prática, não declarativa. Criar sem esperar autorização institucional configura, por si só, uma micropolítica do fazer.",
  },
  {
    q: "Autonomia conceitual",
    a: "A tese sustenta-se independentemente da referência junguiana. O Lowbyrinth™ funciona como imagem-conceito operacional. Os operadores — poética do instante, estética da borda, registro em fluxo — emergem da prática e retornam a ela.",
  },
  {
    q: "Contribuição inédita",
    a: "O ineditismo reside no deslocamento do skate para o campo estético-metodológico e na formulação de operadores analíticos situados. A dissertação propõe um modo de pesquisar COM o skate, reconhecendo-o como prática produtora de conhecimento sensível.",
  },
  {
    q: "É uma pesquisa sobre skate ou sobre cinema?",
    a: "É sobre cinema a partir do skate. O foco é o processo audiovisual — como a prática corporal do skate produz linguagem cinematográfica. O skate não é o objeto final da investigação, mas a matriz a partir da qual emerge uma poética audiovisual específica.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionTitle title="Questões Críticas" subtitle="Respostas fundamentadas às perguntas centrais" />

          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">
              Toda dissertação de qualidade deve antecipar as objeções possíveis e responder a elas com
              clareza e consistência argumentativa. As questões reunidas a seguir correspondem aos pontos
              de tensão conceitual mais prováveis na avaliação da banca.
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
                  <AccordionTrigger className="text-left text-sm font-semibold uppercase tracking-wide hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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
