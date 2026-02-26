import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const contribuicoes = [
  {
    num: "01",
    title: "Reposicionamento epistemológico do skate",
    desc: "A dissertação reposiciona o skate como prática estética produtora de linguagem audiovisual, superando abordagens que o reduzem a fenômeno sociológico, esportivo ou subcultural. Esse gesto abre um campo de investigação até então inexplorado na pesquisa acadêmica brasileira em cinema. Como apontam Machado e Brandão, entre os diversos programas de pós-graduação mapeados, ainda existe um território fértil e pouco explorado para investigações que articulem práticas subculturais urbanas com a produção cinematográfica contemporânea.",
  },
  {
    num: "02",
    title: "Formulação de operadores conceituais",
    desc: "Os conceitos de poética do instante, estética da borda, registro em fluxo e Lowbyrinth™ constituem ferramentas analíticas derivadas da prática artística, oferecendo ao campo vocabulário preciso para fenômenos até então não nomeados. Esses operadores não são meras nomenclaturas — são instrumentos de análise que podem ser apropriados por outras investigações no campo das artes e do cinema.",
  },
  {
    num: "03",
    title: "Pesquisa-criação implicada como método",
    desc: "A dissertação estrutura a pesquisa-criação implicada como abordagem academicamente rigorosa, demonstrando que a implicação do pesquisador no campo investigado, quando submetida a reflexividade explícita, produz — e não compromete — conhecimento válido. A pesquisa não documenta apenas uma cena ou uma estética — ela propõe um modo de pesquisar COM o skate, reconhecendo-o como prática produtora de conhecimento sensível, situado e compartilhado.",
  },
  {
    num: "04",
    title: "Deslocamento no campo audiovisual brasileiro",
    desc: "Ao propor que práticas subculturais podem constituir matrizes de produção cinematográfica autônoma, a dissertação amplia as fronteiras do que é reconhecido como cinema e como pesquisa em cinema no Brasil. A contribuição é simultaneamente temática, metodológica e epistemológica — oferecendo ao campo do cinema e das artes do vídeo ferramentas conceituais derivadas da prática artística implicada e do fazer coletivo situado no contexto brasileiro contemporâneo.",
  },
];

const Contribuicoes = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Contribuições" subtitle="O que esta dissertação propõe ao campo" />

          <AnimatedSection delay={0.05}>
            <p className="max-w-3xl text-foreground/80 leading-relaxed mb-12">
              As contribuições desta dissertação distribuem-se por quatro eixos articulados, cada um dos
              quais responde a uma lacuna identificada no campo do cinema e das artes do vídeo no contexto
              acadêmico brasileiro. Não se trata de contribuições meramente temáticas — a escolha de um
              objeto inédito —, mas de deslocamentos que afetam a própria estrutura conceitual e
              metodológica do campo.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {contribuicoes.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
                <div className="border border-border rounded-lg p-6 md:p-8 bg-card/30 h-full transition-colors hover:border-primary/30">
                  <p className="font-display text-xs text-primary/60 tracking-widest mb-2">{item.num}</p>
                  <h3 className="font-display text-lg uppercase tracking-tight mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contribuicoes;
