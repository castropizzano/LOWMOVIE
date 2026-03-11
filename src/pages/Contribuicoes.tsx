import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";

const contribuicoes = [
  {
    num: "01",
    title: "Reposicionamento epistemológico do skate",
    desc: "A dissertação reposiciona o skate como prática estética produtora de linguagem audiovisual. Como apontam Machado e Brandão, ainda existe um território fértil e pouco explorado para investigações que articulem práticas subculturais urbanas com a produção cinematográfica contemporânea.",
  },
  {
    num: "02",
    title: "Formulação de operadores conceituais",
    desc: "Os conceitos de poética do instante, estética da borda, registro em fluxo e Lowbyrinth™ constituem ferramentas analíticas derivadas da prática artística, oferecendo ao campo vocabulário preciso para fenômenos até então não nomeados.",
  },
  {
    num: "03",
    title: "Pesquisa-criação implicada como método",
    desc: "A dissertação estrutura a pesquisa-criação implicada como abordagem rigorosa, demonstrando que a implicação, quando submetida a reflexividade explícita, produz conhecimento válido. Propõe um modo de pesquisar COM o skate — prática produtora de conhecimento sensível, situado e compartilhado.",
  },
  {
    num: "04",
    title: "Deslocamento no campo audiovisual brasileiro",
    desc: "Ao propor que práticas subculturais podem constituir matrizes de produção cinematográfica autônoma, a dissertação amplia as fronteiras do que é reconhecido como cinema e como pesquisa em cinema no Brasil.",
  },
];

const Contribuicoes = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Contribuições" subtitle="O que esta dissertação propõe ao campo" />

          <AnimatedSection delay={0.05}>
            <p className="text-base text-foreground/80 leading-relaxed text-justify mb-16">
              Quatro eixos articulados, cada um respondendo a uma lacuna no campo do cinema e das artes do vídeo no Brasil.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {contribuicoes.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                  <p className="text-xs font-semibold text-primary/60 tracking-widest mb-2">{item.num}</p>
                  <h3 className="text-lg font-semibold uppercase tracking-wide mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <NextSectionButton to="/questoes" label="Questões" />
        </div>
      </section>
    </Layout>
  );
};

export default Contribuicoes;
