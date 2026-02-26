import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Conclusao = () => {
  return (
    <Layout>
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
              Síntese
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight text-foreground/80"
          >
            A <span className="text-primary">poética</span> não é resultado.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-xl md:text-2xl font-semibold uppercase tracking-tight text-primary"
          >
            É processo em movimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16"
          >
            <div className="border border-border/40 rounded-lg p-8 md:p-10 bg-card/20 max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "Da prática corporal à formulação conceitual, do coletivo ao campo acadêmico,
                do instante ao pensamento — o percurso desta dissertação é, ele mesmo, um Lowbyrinth™."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
