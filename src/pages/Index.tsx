import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-6 font-display text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Dissertação de Mestrado
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight"
          >
            <span className="text-primary">LowMovie™</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground/80">
              e o Labirinto Criativo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            Subjetividade, subcultura e a poética em movimento
            <br className="hidden sm:block" /> do coletivo LowPressure™
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-xs text-muted-foreground/60 font-display uppercase tracking-widest"
          >
            Castro Pizzano — PPG Cinema e Artes do Vídeo — UNESPAR
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12"
          >
            <Link
              to="/apresentacao"
              className="group inline-flex items-center gap-2 border border-border px-6 py-3 font-display text-xs uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Explorar a pesquisa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </section>
    </Layout>
  );
};

export default Index;
