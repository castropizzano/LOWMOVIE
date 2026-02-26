import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";

const autores = [
  {
    campo: "Skate como reinscrição urbana",
    refs: [
      { nome: "Iain Borden", contrib: "Skate como reconfiguração espacial e prática corporal de ocupação da cidade." },
      { nome: "McDuie-Ra", contrib: "Subcultura e territorialidade contemporânea. Conceito de \"archiving from below\" — documentação vinda de dentro." },
    ],
  },
  {
    campo: "Estética relacional",
    refs: [
      { nome: "Nicolas Bourriaud", contrib: "Obra como dispositivo relacional e de encontro. A arte como forma de habitar o mundo coletivamente." },
    ],
  },
  {
    campo: "Identidade processual",
    refs: [
      { nome: "Stuart Hall", contrib: "Identidade como construção dinâmica, nunca fixa — negociação contínua entre sujeito e contexto." },
    ],
  },
  {
    campo: "Processo colaborativo",
    refs: [
      { nome: "Luis Alberto de Abreu", contrib: "Criação horizontal e dramaturgia compartilhada como modelo de autoria coletiva." },
    ],
  },
  {
    campo: "Pesquisa-criação",
    refs: [
      { nome: "Coessens, Pimentel, Moriceau", contrib: "Corpo como produção de conhecimento. A prática artística como forma legítima de investigação acadêmica." },
    ],
  },
  {
    campo: "Corpo-câmera",
    refs: [
      { nome: "Delpeux, Araújo, Rouch, Deren", contrib: "Cinema como gesto encarnado — cine-transe, coreocinema, corpo-câmera como extensão sensível do realizador." },
    ],
  },
];

const conceitos = [
  {
    nome: "Lowbyrinth™",
    def: "Imagem-conceito que sintetiza o caráter processual, labiríntico e transformador da criação. Opera como operador simbólico central da dissertação.",
  },
  {
    nome: "Poética do instante",
    def: "Captura do gesto efêmero como condensação sensível. O instante não é acidental — é o ponto de convergência entre corpo, espaço e tempo.",
  },
  {
    nome: "Estética da borda",
    def: "Linguagem que emerge do limite entre controle e acaso, entre o planejado e o imprevisto. A borda como zona de criação.",
  },
  {
    nome: "Registro em fluxo",
    def: "Câmera como extensão do corpo em movimento. O registro não documenta — participa do gesto e o constitui.",
  },
  {
    nome: "Afeto como eixo metodológico",
    def: "Implicação sensível como operador epistemológico. O afeto não é subjetivismo — é disposição de deixar-se tocar pelo campo.",
  },
];

const Conceitos = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle title="Conceitos" subtitle="Mapa de autores, conceitos próprios e ética de criação" />

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
            <h3 className="font-display text-xl uppercase tracking-tight mb-8 text-foreground">
              Conceitos Próprios
            </h3>
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
                  A dissertação dialoga com a ética de Werner Herzog na valorização do gesto criador
                  diante da precariedade estrutural. Não se trata de militância explícita, mas de
                  autonomia criativa como posição ético-política.
                </p>
                <p>
                  Criar sem esperar autorização institucional configura uma micropolítica do fazer.
                  A obra opera como gesto, não como manifesto.
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
