import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const Apresentacao = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Apresentação" subtitle="Contexto, objeto e posicionamento da pesquisa" />

          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/85">
              <p>
                Esta dissertação investiga os processos criativos do filme{" "}
                <span className="text-primary font-medium">LowMovie™</span>, realizado pelo coletivo de
                artistas-skatistas <span className="text-primary font-medium">LowPressure™</span>,
                analisando como tais dinâmicas colaborativas contribuem para a constituição de uma poética
                audiovisual em movimento vinculada à experiência urbana do skate. O trabalho situa-se no
                cruzamento entre a produção cinematográfica contemporânea, as práticas subculturais urbanas
                e a pesquisa acadêmica em artes, propondo uma abordagem que reconhece a potência estética
                de formas de criação historicamente marginalizadas pelo campo artístico institucionalizado.
              </p>
              <p>
                A pesquisa opera um deslocamento epistemológico de considerável envergadura: reposiciona o
                skate não apenas como fenômeno sociocultural — objeto recorrente de investigações sociológicas
                e antropológicas — mas como prática estética produtora de linguagem audiovisual situada. Esse
                gesto de reposicionamento implica reconhecer que o corpo em movimento sobre o skate não é
                meramente tema ou motivo visual, mas agente constitutivo de uma gramática fílmica própria,
                dotada de ritmo, enquadramento, textura e temporalidade específicos.
              </p>
              <p>
                O coletivo <span className="text-primary font-medium">LowPressure™</span> funciona como
                condição de produção e como ecossistema criativo no qual se gestam as decisões estéticas do
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
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Pergunta Central
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed italic text-foreground/90 mb-6">
                "Como os processos criativos do LowMovie™, gestados em dinâmica coletiva e implicada,
                contribuem para a constituição de uma poética audiovisual em movimento no campo do cinema
                e das artes do vídeo?"
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                A formulação da pergunta central carrega em si uma dupla exigência: de um lado, a necessidade
                de descrever com precisão os processos criativos que deram origem ao filme — suas condições
                materiais, seus procedimentos técnicos, suas escolhas estéticas; de outro, a tarefa de articular
                teoricamente esses processos com o campo mais amplo do cinema e das artes do vídeo.
              </p>
              <div className="border-t border-border/50 pt-6">
                <p className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Resposta Sintética
                </p>
                <p className="text-foreground/80 leading-relaxed">
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
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6 text-foreground">
              Lugar de Fala — Artista-Pesquisador
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed">
              <p>
                A dissertação assume explicitamente a posição de artista-pesquisador, operando a partir de uma
                epistemologia que reconhece a implicação como condição de rigor e não como obstáculo a ele. Não
                se parte de uma neutralidade externa ao campo investigado — postura que vem sendo consistentemente
                problematizada nas ciências humanas e nas artes desde pelo menos a segunda metade do século XX —
                mas de uma implicação situada, cujos contornos são explicitados e cujos efeitos sobre a produção
                de conhecimento são constantemente interrogados.
              </p>
              <p>
                Essa posição não é uma concessão metodológica, mas uma escolha epistemológica deliberada. O
                artista-pesquisador não observa de fora: ele participa da tessitura do objeto, compartilha suas
                condições de existência e, ao fazê-lo, acessa camadas de sentido inacessíveis a uma abordagem
                estritamente distanciada. O rigor metodológico é garantido por três dispositivos articulados:
                a <em>reflexividade</em>, a <em>explicitação do posicionamento</em> e a <em>articulação
                consistente com referenciais teóricos da pesquisa-criação</em>.
              </p>
              <p>
                A prática não substitui o rigor — ela o produz. É no interior do fazer artístico, quando submetido
                à reflexão sistemática e à confrontação teórica, que emerge um conhecimento que não poderia ser
                produzido por nenhuma outra via. A pesquisa-criação não é uma versão menos rigorosa da pesquisa
                acadêmica: é uma forma distinta de rigor, que integra corpo, afeto e conceito na mesma operação
                investigativa.
              </p>
            </div>
          </AnimatedSection>

          {/* Justificativa */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight mb-6 text-foreground">
              Justificativa
            </h3>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                A relevância desta investigação reside, sobretudo, na escassez de pesquisas acadêmicas brasileiras
                que abordem o skate enquanto matriz de produção audiovisual e não apenas como objeto de registro
                documental. Ao propor essa inflexão, a dissertação contribui para ampliar o repertório
                teórico-metodológico do campo do cinema e das artes do vídeo, oferecendo ferramentas conceituais
                derivadas da prática artística implicada e do fazer coletivo situado.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Apresentacao;
