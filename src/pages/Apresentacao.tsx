import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";

const Apresentacao = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Apresentação" subtitle="Contexto, objeto e posicionamento da pesquisa" />

          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-justify">
              <p>
                Esta dissertação investiga os processos criativos do filme{" "}
                <span className="text-primary font-semibold">LowMovie™</span>, realizado pelo coletivo de
                artistas-skatistas <span className="text-primary font-semibold">LowPressure™</span>,
                analisando como tais dinâmicas colaborativas contribuem para a formação de uma poética
                audiovisual em movimento vinculada à experiência urbana do skate. O trabalho situa-se no
                cruzamento entre a produção cinematográfica contemporânea, as práticas subculturais urbanas
                e a pesquisa acadêmica em artes, propondo uma abordagem que reconhece a potência estética
                de práticas criativas que o campo artístico institucional historicamente marginalizou.
              </p>
              <p>
                A pesquisa propõe um deslocamento epistemológico decisivo: reposiciona o
                skate não apenas como fenômeno sociocultural, objeto recorrente de investigações sociológicas
                e antropológicas, mas como prática estética produtora de linguagem audiovisual situada. Esse
                gesto de reposicionamento implica reconhecer que o corpo em movimento sobre o skate não é
                meramente tema ou motivo visual, mas agente constitutivo de uma gramática fílmica
                com ritmo, enquadramento e temporalidade próprios.
              </p>
              <p>
                Os vídeos de skate registram a evolução técnica e criativa dos praticantes e desempenham
                papel central na construção da identidade cultural do skate. A <span className="text-primary font-semibold">VideoParte</span>, formato
                audiovisual próprio da cultura do skate, constitui uma linguagem com gramática, ritmo e
                códigos estéticos específicos que a dissertação analisa como matriz de produção cinematográfica
                autônoma, e não apenas como registro documental de uma prática esportiva.
              </p>
              <p>
                O coletivo <span className="text-primary font-semibold">LowPressure™</span> funciona como
                condição de produção e como ecossistema criativo no qual se formam as decisões estéticas do
                filme. Sua estrutura horizontal, baseada em vínculos afetivos e em uma ética de produção
                autônoma, configura um modo de fazer cinema que prescinde das hierarquias tradicionais da
                indústria audiovisual. O LowMovie™, portanto, não é apenas um produto fílmico: é a
                materialização de um processo coletivo que articula corpo, cidade, câmera e improviso como
                elementos indissociáveis de uma mesma operação poética.
              </p>
            </div>
          </AnimatedSection>

          {/* Pergunta Central */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Pergunta Central
              </p>
              <p className="text-lg font-normal leading-relaxed italic text-foreground/80 mb-6">
                "Como os processos criativos que compõem o LowMovie™, gestados em dinâmica coletiva e
                rizomática do LowPressure™, contribuem para a construção de uma estética em movimento no
                campo do cinema e das artes visuais? Quais modos de subjetivação, de elaboração simbólica
                e de relação com o espaço urbano emergem dessas práticas?"
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A pergunta articula descrição dos processos criativos e sua formulação teórica no campo do cinema e das artes do vídeo.
              </p>

              {/* Objetivos Específicos */}
              <div className="border-t border-border/50 pt-6 mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Objetivos Específicos
                </p>
                <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <span>Descrever as práticas colaborativas mobilizadas no processo do filme (filmagem, montagem, zine e eventos)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <span>Analisar as escolhas formais do LowMovie™ como linguagem de risco, erro e presença</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <span>Investigar os atravessamentos estéticos que se manifestam na obra</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <span>Observar suas reverberações em diferentes circuitos de circulação e exibição</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                  Resposta Sintética
                </p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Os processos criativos do LowMovie™ transformam a experiência corporal do skate em linguagem
                  cinematográfica situada e coletiva, constituindo uma poética audiovisual baseada em três
                  operadores fundamentais: <strong>o instante</strong> (captura do gesto efêmero como condensação
                  sensível do real), <strong>a borda</strong> (linguagem emergente do limite entre controle e acaso)
                  e <strong>o fluxo</strong> (câmera como extensão do corpo em deslocamento contínuo).
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Lugar de Fala */}
          <AnimatedSection delay={0.3} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
              Lugar de Fala: Artista-Pesquisador
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
              <p>
                A dissertação assume explicitamente a posição de artista-pesquisador, operando a partir de uma
                epistemologia que reconhece a implicação como condição de rigor e não como obstáculo a ele. Não
                se parte de uma neutralidade externa ao campo investigado, mas de uma implicação situada, cujos
                contornos são explicitados e cujos efeitos sobre a produção de conhecimento são interrogados ao
                longo de todo o percurso.
              </p>
              <p>
                Trata-se de uma escolha epistemológica deliberada. O
                artista-pesquisador não observa de fora: ele participa da tessitura do objeto, compartilha suas
                condições de existência e, ao fazê-lo, acessa camadas de sentido inacessíveis a uma abordagem
                estritamente distanciada. Como afirma Pimentel, <em>"toda ação praticada numa experiência modifica
                quem a pratica e quem a sofre"</em>. É precisamente essa transformação mútua entre pesquisador
                e campo que a dissertação assume como motor epistemológico.
              </p>
              <p>
                O rigor se exerce por reflexividade, explicitação do posicionamento e articulação com os
                referenciais da pesquisa-criação, não como defesa, mas como condição do próprio fazer.
                A prática não substitui o rigor. Ela
                o produz. É no interior do fazer artístico, quando submetido à reflexão sistemática e à confrontação
                teórica, que emerge um conhecimento que não poderia ser produzido por nenhuma outra via.
              </p>
            </div>
          </AnimatedSection>

          {/* Justificativa */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-6 text-foreground">
              Justificativa
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
              <p>
                A relevância desta investigação reside, sobretudo, na escassez de pesquisas acadêmicas brasileiras
                que abordem o skate enquanto matriz de produção audiovisual e não apenas como objeto de registro
                documental. Como apontam Machado e Brandão, entre os diversos programas de pós-graduação mapeados,
                ainda existe um território fértil e pouco explorado para investigações que articulem práticas
                subculturais urbanas com a produção cinematográfica contemporânea.
              </p>
              <p>
                Ao propor essa inflexão, a dissertação não documenta apenas uma cena ou uma estética: propõe
                um modo de <em>pesquisar com</em> o skate, reconhecendo-o como prática produtora de conhecimento
                sensível, situado e compartilhado. A contribuição é, portanto, simultaneamente temática,
                metodológica e epistemológica.
              </p>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/metodologia" label="Metodologia" />
        </div>
      </section>
    </Layout>
  );
};

export default Apresentacao;
