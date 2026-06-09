import { Helmet } from "react-helmet-async";

const SITE = "https://lowmovie.lovable.app";
const SOCIAL_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/dpNDyX5RGxTrFXnXvKMoxZ7zPGQ2/social-images/social-1772068195289-_lowmovie__poster-AF.webp";

type SeoMeta = {
  title: string;
  description: string;
  type?: "website" | "article";
};

const META: Record<string, SeoMeta> = {
  "/": {
    title: "LowMovie™ — Portal da Dissertação · Tela de Abertura",
    description:
      "Tela de abertura do portal da dissertação LowMovie™ e o Labirinto Criativo, de Castro Pizzano (PPG-CINEAV / UNESPAR).",
  },
  "/home": {
    title: "LowMovie™ e o Labirinto Criativo — Dissertação de Mestrado",
    description:
      "Portal da dissertação de Castro Pizzano sobre o Coletivo LowPressure™. PPG-CINEAV · UNESPAR · defendida e aprovada em 27.03.2026.",
  },
  "/apresentacao": {
    title: "Apresentação — LowMovie™ e o Labirinto Criativo",
    description:
      "Contexto, motivação e objeto da pesquisa-criação implicada sobre o Coletivo LowPressure™ e a estética em movimento.",
    type: "article",
  },
  "/metodologia": {
    title: "Metodologia — Pesquisa-criação Implicada · LowMovie™",
    description:
      "Pesquisa-criação implicada como abordagem: afeto, escuta e improviso. Toolkit Pedagógico Lowbyrinth™ e procedimentos de campo.",
    type: "article",
  },
  "/estrutura": {
    title: "Estrutura da Dissertação — LowMovie™",
    description:
      "Arquitetura da dissertação: capítulos, fluxos e articulações entre teoria, prática audiovisual e subcultura urbana.",
    type: "article",
  },
  "/conceitos": {
    title: "Conceitos Operadores — LowMovie™",
    description:
      "Operadores conceituais da pesquisa: Lowbyrinth™, corpo-câmera, fabulação, glitch como linguagem, D.I.Y. e pesquisa-criação implicada.",
    type: "article",
  },
  "/filme": {
    title: "O Filme LowMovie™ — Documentário e Análise Sequencial",
    description:
      "O documentário LowMovie™: análise sequencial frame a frame, operadores poéticos do olhar (instante, borda, fluxo) e processo criativo.",
    type: "article",
  },
  "/coletivo": {
    title: "Coletivo LowPressure™ — Produção Colaborativa · LowMovie™",
    description:
      "Produção colaborativa, fanzine LowZine, arquivo e ecossistema cultural do Coletivo LowPressure™ no skate e no audiovisual independente.",
    type: "article",
  },
  "/contribuicoes": {
    title: "Contribuições — LowMovie™",
    description:
      "Aportes ao campo do cinema e das artes do vídeo a partir da pesquisa-criação implicada e da estética da borda.",
    type: "article",
  },
  "/questoes": {
    title: "Questões da Banca — FAQ Acadêmico · LowMovie™",
    description:
      "Antecipação de tensões críticas da banca examinadora: perguntas-chave e respostas argumentadas sobre método, objeto e rigor.",
    type: "article",
  },
  "/mapa": {
    title: "Mapa Conceitual — Grafo Interativo · LowMovie™",
    description:
      "Grafo interativo das conexões teóricas entre os conceitos operadores da pesquisa LowMovie™ e o Labirinto Criativo.",
    type: "article",
  },
  "/conclusao": {
    title: "Conclusão — Síntese e Arquivo de Processo · LowMovie™",
    description:
      "Síntese da pesquisa, horizontes futuros e Arquivo de Processo: artigo Harpia, Memorial Ecos Criativos e materiais complementares.",
    type: "article",
  },
  "/timeline": {
    title: "Timeline Acadêmica — Trajetória Lattes · Castro Pizzano",
    description:
      "Linha do tempo da trajetória acadêmica de Castro Pizzano a partir do currículo Lattes, com filtros por categoria.",
    type: "article",
  },
  "/defense": {
    title: "Defense Mode — Apresentação para Banca · LowMovie™",
    description:
      "Modo de apresentação cinemática para a defesa pública: 14 blocos sequenciais com navegação por teclado.",
  },
  "/defense-mode": {
    title: "Sobre o Defense Mode — Dispositivo de Apresentação · LowMovie™",
    description:
      "Dispositivo de apresentação concebido para a defesa pública da dissertação LowMovie™: forma e conteúdo defendem juntos.",
    type: "article",
  },
  "/replicar": {
    title: "Low Runner™ — Plataforma Replicável de Dissertação Navegável",
    description:
      "Low Runner™ é o sistema replicável da dissertação navegável LowMovie™: código aberto sob licença MIT para outros pesquisadores.",
    type: "article",
  },
  "/ecossistema": {
    title: "Ecossistema — LowMovie™ · Lowbyrinth™ · Low Runner™",
    description:
      "As três camadas intelectuais articuladas: obra (LowMovie™), método (Lowbyrinth™) e plataforma (Low Runner™).",
    type: "article",
  },
  "/licenca": {
    title: "Política de Licenciamento — LowMovie™ · Lowbyrinth™ · Low Runner™",
    description:
      "Política híbrida de licenciamento por camada: obra com todos os direitos reservados, método CC BY-NC-SA 4.0 e plataforma sob MIT.",
    type: "article",
  },
  "/imprimir": {
    title: "Imprimir e Baixar — LowMovie™",
    description:
      "Opções de impressão e download: PDF da dissertação aprovada (27.03.2026) e Caderno-Síntese para leitura impressa.",
  },
  "/palestra": {
    title: "Lowbyrinth: Quando a Pesquisa Me Encontrou — Palestra · LowMovie™",
    description:
      "Palestra de Castro Pizzano: 10 blocos sequenciais sobre o percurso de uma pesquisa de mestrado em pesquisa-criação implicada, usando o portal LowMovie™ como ambiente.",
  },
};

interface SeoHeadProps {
  route: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SeoHead = ({ route, jsonLd }: SeoHeadProps) => {
  const meta = META[route] ?? META["/home"];
  const url = `${SITE}${route === "/" ? "/" : route}`;
  const ogType = meta.type ?? "website";
  const ldArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(ld)}</script>
      ))}
    </Helmet>
  );
};

export default SeoHead;