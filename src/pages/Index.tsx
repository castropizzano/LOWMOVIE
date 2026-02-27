import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Dissertação de Mestrado — Junho 2025
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none tracking-tight">
            <span className="text-primary">LowMovie™</span>
            <br />
            <span className="text-xl md:text-[1.65rem] font-medium text-foreground/70">
              e o Labirinto Criativo
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground leading-relaxed">
            Subjetividade, subcultura e a poética em movimento
            <br className="hidden sm:block" /> do coletivo LowPressure™
          </p>

          <div className="mt-8 mx-auto max-w-lg border border-border/60 rounded-lg px-8 py-6 bg-card/20">
            <p className="text-sm text-foreground/80 leading-relaxed">
              Dissertação apresentada ao Programa de Pós-Graduação em Cinema e Artes do Vídeo — UNESPAR
            </p>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mt-2">
              Linha de Pesquisa: Processos de Criação no Cinema e nas Artes do Vídeo
            </p>
            <div className="h-px w-12 bg-border/50 mx-auto my-3" />
            <p className="text-xs text-muted-foreground">Castro Pizzano</p>
            <p className="text-xs text-muted-foreground mt-1">
              Orientador: Prof. Dr. Fábio Jabur de Noronha
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Banca: Profa. Dra. Fabiana Pelinson · Profa. Dra. Luciana Barone
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/apresentacao"
              className="group inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Explorar a pesquisa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-[10px] italic text-muted-foreground/70 max-w-xs mx-auto">
              "We have such sights to show you."
              <span className="block mt-1 not-italic text-muted-foreground/50">— Hellraiser (Clive Barker, 1987)</span>
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Skate · Videoarte · Processos Criativos · Subcultura Urbana · Colaboração Audiovisual
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </section>
    </Layout>
  );
};

export default Index;
