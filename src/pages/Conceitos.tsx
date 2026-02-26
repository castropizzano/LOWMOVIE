import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const autores = [
  {
    campo: "Skate como reinscrição urbana",
    refs: [
      { nome: "Iain Borden", contrib: "Skate como reconfiguração espacial, prática que transforma o uso prescrito dos espaços urbanos em experiência corporal e estética." },
      { nome: "McDuie-Ra", contrib: "Subcultura e territorialidade contemporânea, análise das formas de pertencimento e resistência que emergem das práticas subculturais em contextos urbanos globalizados." },
    ],
  },
  {
    campo: "Estética relacional e identidade",
    refs: [
      { nome: "Nicolas Bourriaud", contrib: "Obra como dispositivo relacional, arte que não produz objetos autônomos mas situações de encontro e negociação intersubjetiva." },
      { nome: "Stuart Hall", contrib: "Identidade como construção dinâmica, processual e contextualmente determinada, recusando qualquer essencialismo identitário." },
    ],
  },
  {
    campo: "Processo colaborativo e pesquisa-criação",
    refs: [
      { nome: "Luis Alberto de Abreu", contrib: "Criação horizontal como método e como ética. Dramaturgia compartilhada como modelo de autoria coletiva." },
      { nome: "Coessens, Pimentel, Moriceau", contrib: "Corpo como produção de conhecimento, pesquisa-criação como modalidade epistemológica legítima e rigorosa." },
    ],
  },
  {
    campo: "Corpo-câmera e cinema encarnado",
    refs: [
      { nome: "Delpeux, Araújo, Rouch, Deren", contrib: "Cinema como gesto encarnado, câmera como extensão do corpo em ação. Filmar não é registrar, mas participar corporalmente da produção da imagem." },
    ],
  },
];

const conceitos = [
  {
    nome: "Lowbyrinth™",
    def: "Imagem-conceito que sintetiza o caráter processual, não-linear e labiríntico da criação no interior do coletivo LowPressure™. O Lowbyrinth™ não é apenas uma metáfora: é um dispositivo conceitual que permite compreender como a obra emerge de percursos imprevisíveis, bifurcações estéticas e reencontros inesperados entre os membros do grupo. O labirinto não tem saída prevista — a obra é o próprio percurso.",
  },
  {
    nome: "Poética do instante",
    def: "Captura do gesto efêmero como condensação sensível do real. No contexto do skate filmado, o instante não é o acidental: é o momento em que corpo, espaço, luz e câmera convergem numa configuração irrepetível que condensa, em frações de segundo, toda a densidade de uma prática vivida. A poética do instante opera contra a lógica da repetição controlada do cinema industrial.",
  },
  {
    nome: "Estética da borda",
    def: "Linguagem que emerge do limite entre controle e acaso, entre o planejado e o contingente. A borda é, simultaneamente, a borda do skate sobre a superfície urbana, a borda do enquadramento da câmera e a borda conceitual entre arte e vida. Esse operador permite analisar como o LowMovie™ habita produtivamente a zona de indeterminação entre gêneros, disciplinas e práticas.",
  },
  {
    nome: "Registro em fluxo",
    def: "Câmera como extensão do corpo em movimento contínuo. O registro em fluxo designa um modo de filmagem no qual a câmera não se posiciona diante do evento, mas dentro dele, acompanhando o deslocamento do skatista com a mesma intensidade corporal. O resultado é uma imagem que não representa o movimento: ela é movimento.",
  },
  {
    nome: "Afeto como eixo metodológico",
    def: "Implicação sensível como operador epistemológico. O afeto, neste enquadramento, não é sentimentalismo: é a condição de acesso a dimensões do real que a observação distanciada não alcança. O vínculo afetivo com o campo — com as pessoas, os espaços, as práticas — constitui um instrumento de conhecimento tão legítimo quanto a análise formal ou a revisão bibliográfica.",
  },
];

const Conceitos = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Conceitos" subtitle="Cartografia teórica, formulações autorais e ética de criação" />

          {/* Introdução */}
          <AnimatedSection delay={0.05}>
            <p className="max-w-3xl text-foreground/80 leading-relaxed mb-12">
              A fundamentação teórica da dissertação articula tradições intelectuais distintas — teoria urbana,
              estética relacional, estudos culturais, pesquisa em artes, teoria do cinema — numa constelação
              conceitual orientada pelas exigências específicas do objeto. Não se trata de uma revisão bibliográfica
              exaustiva, mas de uma cartografia teórica desenhada a partir dos problemas que o LowMovie™ coloca
              à investigação acadêmica.
            </p>
          </AnimatedSection>

          {/* Mapa Conceitual de Autores */}
          <AnimatedSection delay={0.1}>
            <h3 className="font-display text-xl uppercase tracking-tight mb-8 text-foreground">
              Mapa Conceitual de Autores
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {autores.map((grupo) => (
                <div key={grupo.campo} className="border border-border rounded-lg p-6 bg-card/30">
                  <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                    {grupo.campo}
                  </p>
                  <div className="space-y-4">
                    {grupo.refs.map((ref) => (
                      <div key={ref.nome}>
                        <p className="font-display text-sm tracking-wide text-foreground">{ref.nome}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed mt-1">{ref.contrib}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Conceitos Próprios */}
          <AnimatedSection delay={0.2} className="mt-20">
            <h3 className="font-display text-xl uppercase tracking-tight mb-4 text-foreground">
              Conceitos Próprios — Formulações Autorais
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Uma das contribuições mais significativas desta dissertação reside na formulação de conceitos
              próprios derivados da prática artística e da reflexão teórica implicada. Esses conceitos não
              são meras nomenclaturas: são operadores analíticos que permitem descrever, com precisão,
              fenômenos estéticos que os vocabulários disponíveis no campo não contemplavam adequadamente.
            </p>
            <div className="space-y-6">
              {conceitos.map((c) => (
                <div key={c.nome} className="border-l-2 border-primary/30 pl-6">
                  <p className="font-display text-base uppercase tracking-wide text-foreground mb-2">
                    {c.nome}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.def}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Ética de Criação */}
          <AnimatedSection delay={0.3} className="mt-20">
            <div className="border border-border rounded-lg p-8 md:p-10 bg-card/30">
              <p className="font-display text-xs uppercase tracking-widest text-primary mb-4">
                Ética de Criação e Ressonância com Herzog
              </p>
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  A dissertação estabelece um diálogo produtivo com a ética criativa de Werner Herzog,
                  particularmente no que diz respeito à valorização do gesto criador diante da precariedade
                  estrutural. Esse diálogo não é uma filiação estética — o LowMovie™ não é herzogiano em
                  estilo — mas uma ressonância ética: ambos compartilham a convicção de que a criação autêntica
                  não depende de condições ideais, mas da disposição para agir com os recursos disponíveis,
                  transformando a limitação em potência expressiva.
                </p>
                <p>
                  Não se trata de militância explícita ou de postura combativa contra o sistema de produção
                  cinematográfica. A operação é mais sutil e, possivelmente, mais radical: criar sem esperar
                  autorização institucional configura, por si só, uma micropolítica do fazer. Quando um coletivo
                  de skatistas produz um filme que dialoga com o campo do cinema experimental sem solicitar
                  permissão nem aprovação prévia, esse gesto carrega uma dimensão política que não precisa ser
                  enunciada discursivamente — ela se realiza na própria materialidade da obra.
                </p>
                <p>
                  A aproximação com Herzog permite, ainda, situar o LowPressure™ numa linhagem mais ampla de
                  cineastas e coletivos que operaram nas margens do sistema industrial, produzindo obras
                  esteticamente inventivas a partir de condições de produção precárias. De Jean Rouch filmando
                  em transe nas ruas de Abidjan a Maya Deren reinventando a dança no cinema experimental
                  norte-americano, essa tradição demonstra que a autonomia criativa não é um luxo, mas uma
                  necessidade estética e epistemológica.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Conceitos;
