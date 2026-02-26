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
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Encerramento
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="font-display text-2xl md:text-4xl lg:text-5xl font-light uppercase leading-tight tracking-tight text-foreground/90"
          >
            O <span className="text-primary font-medium">LowMovie™</span> não é apenas obra.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            É gesto, processo e campo de conhecimento.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-16"
          >
            <div className="h-px w-16 bg-primary/40 mx-auto mb-8" />
            <p className="text-foreground/85 leading-relaxed max-w-2xl mx-auto">
              O LowMovie™ evidencia que práticas subculturais podem produzir linguagem audiovisual
              autônoma e conhecimento estético legítimo no campo acadêmico.
            </p>
            <p className="mt-8 font-display text-xl md:text-2xl uppercase tracking-tight text-foreground/70">
              A poética não é resultado.
            </p>
            <p className="mt-2 font-display text-2xl md:text-3xl font-medium uppercase tracking-tight text-primary">
              É processo em movimento.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusao;
