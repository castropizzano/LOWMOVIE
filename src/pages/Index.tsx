import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef, useCallback } from "react";
import Layout from "@/components/Layout";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import capaDissertacao from "@/assets/capa-dissertacao.png";
import { useTranslation } from "react-i18next";

const Index = () => {
  const navigate = useNavigate();
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { t } = useTranslation();

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
            <div style={{ aspectRatio: '1194/1688' }}>
              <img
                src={capaDissertacao}
                alt={t("home.coverAlt")}
                className="w-full h-full rounded-lg shadow-lg cursor-default grayscale hover:grayscale-0 transition-all duration-500"
                onClick={handleCoverClick}
                width={1194}
                height={1688}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="text-left">
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {t("home.dissertationDate")}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tight">
                <span className="text-primary">LowMovie™</span>
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-medium text-foreground/70 uppercase tracking-wide">
                {t("home.subtitle")}
              </p>
              <p className="mt-8 max-w-lg text-sm text-muted-foreground leading-relaxed">
                {t("home.tagline")}
                <br /> {t("home.tagline2")}
              </p>
              <div className="w-16 h-px bg-primary/50 mt-10" />
              <div className="mt-8 space-y-1">
                <p className="text-sm text-foreground/80 leading-relaxed">{t("home.program")}</p>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest">{t("home.researchLine")}</p>
              </div>
              <div className="mt-6 space-y-1">
                <p className="text-sm text-foreground/90">{t("home.author")}</p>
                <p className="text-xs text-muted-foreground">{t("home.advisor")}</p>
                <p className="text-xs text-muted-foreground">{t("home.committee")}</p>
              </div>
              <div className="w-16 h-px bg-border/50 mt-10" />
              <div className="mt-8">
                <Link
                  to="/apresentacao"
                  className="group inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
                >
                  {t("home.explore")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <div className="mt-12">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t("home.keywords")}</p>
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
