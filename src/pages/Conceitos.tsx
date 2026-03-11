import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import NextSectionButton from "@/components/NextSectionButton";

const autores = [
  {
    campo: "Skate como reinscrição urbana",
    refs: [
      { nome: "Iain Borden", contrib: "Skate como reconfiguração espacial: o skate lê e reinscreve a cidade, ativando seus espaços como superfícies de criação." },
      { nome: "McDuie-Ra", contrib: "Subcultura e territorialidade. Propõe o conceito de \"archiving from below\" — 'below' tem duplo sentido: arquivo não-oficial e ângulo de captura da cidade \"from below the knees\"." },
    ],
  },
  {
    campo: "Estética relacional e identidade",
    refs: [
      { nome: "Nicolas Bourriaud", contrib: "\"A obra de arte representa um interstício social... um espaço de relações humanas que sugere outras possibilidades de troca.\"" },
      { nome: "Stuart Hall", contrib: "\"A identidade cultural talvez deva ser pensada como uma 'produção', algo que nunca está completo, que é sempre processual.\"" },
    ],
  },
  {
    campo: "Processo colaborativo e pesquisa-criação",
    refs: [
      { nome: "Luis Alberto de Abreu", contrib: "\"Preferimos denominar essa experiência criativa e coletiva com o nome de processo colaborativo (e não método colaborativo).\"" },
      { nome: "Coessens, Pimentel, Moriceau", contrib: "Corpo como produção de conhecimento. Pimentel: \"toda ação praticada numa experiência modifica quem a pratica e quem a sofre.\"" },
    ],
  },
  {
    campo: "Corpo-câmera e cinema encarnado",
    refs: [
      { nome: "Delpeux", contrib: "\"A fusão sensível entre o corpo do performer e o dispositivo de registro: performer e câmera compõem juntos a imagem como uma única entidade em ato.\"" },
      { nome: "Rouch, Deren, Deleuze", contrib: "Rouch e o cine-transe. Deren e a dança como cinema. Deleuze e a fabulação — gesto de criação do real, não invenção ficcional." },
    ],
  },
];

const conceitos = [
  {
    nome: "Lowbyrinth™",
    def: "Imagem-conceito que sintetiza o caráter processual, não-linear e labiríntico da criação no interior do coletivo LowPressure™. O labirinto não tem saída prevista: a obra é o próprio percurso.",
  },
  {
    nome: "Poética do instante",
    def: "Captura do gesto efêmero como condensação sensível do real. O momento em que corpo, espaço, luz e câmera convergem numa configuração irrepetível.",
  },
  {
    nome: "Estética da borda",
    def: "Linguagem que emerge do limite entre controle e acaso, entre o planejado e o contingente. A borda é, simultaneamente, a borda do skate, a borda do enquadramento e a borda conceitual entre arte e vida.",
  },
  {
    nome: "Registro em fluxo",
    def: "Câmera como extensão do corpo em movimento contínuo. A câmera não se posiciona diante do evento, mas dentro dele. A imagem não representa o movimento: ela é movimento.",
  },
  {
    nome: "Fabulação",
    def: "A partir de Deleuze: fabulação não designa invenção ficcional, mas um gesto de criação do real, um modo de produzir outras percepções e sentidos a partir do cotidiano.",
  },
  {
    nome: "Afeto como eixo metodológico",
    def: "Implicação sensível como operador epistemológico. O vínculo afetivo com o campo constitui um instrumento de conhecimento tão legítimo quanto a análise formal.",
  },
];

const Conceitos = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Conceitos" subtitle="Cartografia teórica, formulações autorais e ética de criação" />

          <AnimatedSection delay={0.05}>
            <div className="space-y-4 text-base text-foreground/80 leading-relaxed text-justify mb-16">
              <p>
                A fundamentação teórica articula tradições intelectuais distintas: teoria urbana,
                estética relacional, estudos culturais, pesquisa em artes, teoria do cinema, numa constelação
                conceitual orientada pelas exigências específicas do objeto.
              </p>
              <p>
                As formulações a seguir nomeiam processos que os vocabulários disponíveis não alcançavam.
              </p>
            </div>
          </AnimatedSection>

          {/* Mapa Conceitual de Autores */}
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-8 text-foreground">
              Mapa Conceitual de Autores
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {autores.map((grupo) => (
                <div key={grupo.campo} className="border border-border rounded-lg p-6 md:p-8 bg-card/30">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                    {grupo.campo}
                  </p>
                  <div className="space-y-4">
                    {grupo.refs.map((ref) => (
                      <div key={ref.nome}>
                        <p className="text-sm font-semibold text-foreground">{ref.nome}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed text-justify mt-1">{ref.contrib}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Conceitos Próprios */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-4 text-foreground">
              Conceitos Próprios: Formulações Autorais
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Operadores analíticos derivados da prática artística.
            </p>
            <div className="space-y-6">
              {conceitos.map((c) => (
                <div key={c.nome} className="border-l-2 border-primary/30 pl-6">
                  <p className="text-base font-semibold uppercase tracking-wide text-foreground mb-2">
                    {c.nome}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify">{c.def}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Ética de Criação */}
          <AnimatedSection delay={0.3} className="mt-16">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                Ética de Criação e Ressonância com Herzog
              </p>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-justify">
                <p>
                  Herzog afirma que <em>"o erro é algo que beira o sagrado... é preciso aceitar
                  a tentativa e erro"</em>. Esse diálogo não é uma filiação estética — é uma ressonância
                  ética: ambos compartilham a convicção de que a criação autêntica não depende de condições
                  ideais, mas da disposição para agir com os recursos disponíveis.
                </p>
                <p>
                  Criar sem esperar autorização institucional configura, por si só, uma micropolítica do fazer.
                  Quando um coletivo de skatistas produz um filme que dialoga com o campo do cinema experimental
                  sem solicitar permissão nem aprovação prévia, esse gesto carrega uma dimensão política que
                  se realiza na própria materialidade da obra.
                </p>
                <p>
                  A aproximação com Herzog permite situar o LowPressure™ numa linhagem de cineastas que operaram
                  nas margens do sistema industrial — de Jean Rouch filmando em transe a Maya Deren reinventando
                  a dança no cinema experimental.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <NextSectionButton to="/filme" label="O Filme" />
        </div>
      </section>
    </Layout>
  );
};

export default Conceitos;
