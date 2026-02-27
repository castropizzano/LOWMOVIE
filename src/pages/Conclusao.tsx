import Layout from "@/components/Layout";
import { FolderOpen, Eye, ExternalLink } from "lucide-react";

const Conclusao = () => {
  return (
    <Layout>
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Síntese
            </p>
          </div>

          <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80">
            A <span className="text-primary">poética</span> não é resultado.
          </p>

          <p className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-tight text-primary">
            É processo em movimento.
          </p>

          <div className="mt-16">
            <div className="h-px w-16 bg-primary/40 mx-auto mb-8" />
            <p className="text-base text-foreground/80 leading-relaxed text-justify max-w-3xl mx-auto">
              O LowMovie™ demonstra que práticas subculturais podem produzir linguagem audiovisual autônoma e conhecimento
              estético legítimo no campo acadêmico. A dissertação demonstra, analiticamente, que o skate já opera
              como prática estética produtora de formas, linguagens e saberes.
            </p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed text-justify max-w-3xl mx-auto">
              A pesquisa afirma que o gesto criativo, quando analisado com rigor e implicação, constitui
              também forma de pensamento. Filmar sobre um skate, montar imagens coletivamente, circular
              um filme fora dos circuitos convencionais — essas operações não são apenas práticas
              artísticas: são modos de conhecer o mundo. O percurso metodológico opera em espiral — cada retorno ao
              campo aprofunda a compreensão anterior.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-justify max-w-3xl mx-auto">
              O que o LowMovie™ ensina é que a poética não habita o resultado
              acabado, mas o processo que o engendra. O filme é a sedimentação provisória de um fluxo
              contínuo de gestos, decisões, improvisos e encontros. É nesse fluxo que reside a contribuição
              mais profunda: o movimento é, simultaneamente, condição de produção, linguagem expressiva e forma de
              pensamento.
            </p>
          </div>

          <div className="mt-16">
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Da prática corporal à formulação conceitual, do coletivo ao campo acadêmico,
                do instante ao pensamento — o percurso desta dissertação é, ele mesmo, um Lowbyrinth™."
              </p>
            </div>
          </div>

          <div className="mt-20">
            <div className="h-px w-16 bg-primary/40 mx-auto mb-8" />
            <div className="flex items-center justify-center gap-2 mb-4">
              <FolderOpen className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold uppercase tracking-widest text-foreground/80">
                Acervo do Processo
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
              Documentos, registros e materiais produzidos ao longo da pesquisa — disponíveis para consulta.
            </p>
            <a
              href="https://drive.google.com/drive/folders/1PTwdYEHC0mE7wa6Mt8GxsMgJ7zxfUXBX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/40 rounded-lg px-6 py-4 bg-card/20 hover:bg-card/40 transition-colors group"
            >
              <ExternalLink className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground/80">Abrir Acervo no Google Drive</span>
            </a>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <Eye className="h-3.5 w-3.5 text-muted-foreground" />
              <p className="text-xs text-muted-foreground">
                Somente visualização — downloads desabilitados
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
