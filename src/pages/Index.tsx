import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useCallback } from "react";
import Layout from "@/components/Layout";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import capaDissertacao from "@/assets/capa-dissertacao.png";

const Index = () => {
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCoverClick = useCallback(() => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      navigate("/defense");
      return;
    }
    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0;
    }, 1000);
  }, [navigate]);

  return (
    <Layout>
      <WelcomeOverlay />
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Coluna esquerda — Capa */}
            <div>
              <img
                src={capaDissertacao}
                alt="Capa da dissertação LowMovie e o Labirinto Criativo"
                className="w-full rounded-lg shadow-lg cursor-default"
                onClick={handleCoverClick}
              />
            </div>

            {/* Coluna direita — Texto */}
            <div className="text-left">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Dissertação de Mestrado — Março 2026
              </p>

              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tight">
                <span className="text-primary">LowMovie™</span>
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-medium text-foreground/70 uppercase tracking-wide">
                e o Labirinto Criativo
              </p>

              <p className="mt-8 max-w-lg text-sm text-muted-foreground leading-relaxed">
                Subjetividade, Subcultura e a Poética em Movimento
                <br /> do Coletivo LowPressure™
              </p>

              <div className="w-16 h-px bg-primary/50 mt-10" />

              <div className="mt-8 space-y-1">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  PPG em Cinema e Artes do Vídeo — UNESPAR
                </p>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Linha: Processos de Criação no Cinema e nas Artes do Vídeo
                </p>
              </div>

              <div className="mt-6 space-y-1">
                <p className="text-sm text-foreground/90">Castro Pizzano</p>
                <p className="text-xs text-muted-foreground">
                  Orientador: Prof. Dr. Fábio Jabur de Noronha
                </p>
                <p className="text-xs text-muted-foreground">
                  Banca: Profa. Dra. Fabiana Pelinson · Profa. Dra. Luciana Barone · Prof. Dr. Antar Mikosz
                </p>
              </div>

              <div className="w-16 h-px bg-border/50 mt-10" />

              <div className="mt-8">
                <Link
                  to="/apresentacao"
                  className="group inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  Explorar a pesquisa
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8">
                <p className="text-[10px] italic text-muted-foreground/70 max-w-xs">
                  "We have such sights to show you."
                  <span className="block mt-1 not-italic text-muted-foreground/50">— Hellraiser (Clive Barker, 1987)</span>
                </p>
              </div>

              <div className="mt-12">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Skate · Videoarte · Processos Criativos · Subcultura Urbana · Colaboração Audiovisual
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </section>
    </Layout>
  );
};

export default Index;
