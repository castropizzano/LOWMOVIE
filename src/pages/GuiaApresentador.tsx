import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import SeoHead from "@/components/SeoHead";
import { BLOCOS, getLang } from "@/data/palestra";
import { useTranslation } from "react-i18next";

const GuiaApresentador = () => {
  const { i18n } = useTranslation();
  void i18n.language;
  const lang = getLang();
  const isPt = lang === "pt";
  const total = BLOCOS.reduce((s, b) => s + b.tempoMin, 0);

  const checklist = isPt
    ? [
        "48h antes — testar projetor, áudio, internet e navegador no espaço da palestra",
        "24h antes — revisar leitura em voz alta dos 10 blocos cronometrando o tempo",
        "2h antes — carregar todas as páginas-âncora em abas separadas, deixar pré-aquecidas",
        "30 min antes — abrir /palestra no projetor em tela cheia, modo escuro, sidebar recolhida",
        "Backup — levar o roteiro impresso (página /imprimir) e o PDF da dissertação no pendrive",
        "Plano B — se a internet cair, navegar offline pelo PDF impresso e pelo Defense Mode local",
      ]
    : [
        "48h before — test projector, audio, internet and browser at the venue",
        "24h before — rehearse reading the 10 blocks aloud, timing each one",
        "2h before — preload all anchor pages in separate tabs, keep them warm",
        "30 min before — open /palestra on projector full-screen, dark mode, sidebar collapsed",
        "Backup — bring printed script (/imprimir) and the dissertation PDF on a USB drive",
        "Plan B — if internet fails, navigate offline via printed PDF and local Defense Mode",
      ];

  const lembretes = isPt
    ? [
        "Falar mais devagar do que parece natural — a banca precisa acompanhar",
        "Não ler o portal em voz alta: usar a página como apoio visual, narrar com a própria voz",
        "Cada bloco tem ~9 min em média — se passar, pular para o próximo sem se prender",
        "Reservar pelo menos 15 min finais para perguntas da audiência",
        "Setas ← → navegam entre blocos · Espaço avança · Esc volta ao índice",
      ]
    : [
        "Speak slower than feels natural — the audience needs to follow",
        "Don't read the portal aloud: use the page as visual support, narrate in your own voice",
        "Each block averages ~9 min — if it runs over, move on without getting stuck",
        "Reserve at least 15 min at the end for audience questions",
        "Arrows ← → navigate blocks · Space advances · Esc returns to index",
      ];

  const arquivos = [
    { label: isPt ? "Roteiro imprimível (PDF)" : "Printable script (PDF)", to: "/imprimir" },
    { label: isPt ? "Caderno-Síntese (PDF)" : "Synthesis Notebook (PDF)", to: "/docs/lowmovie_caderno_sintese.pdf", external: true },
    { label: isPt ? "Toolkit Metodológico (PDF)" : "Methodology Toolkit (PDF)", to: "/docs/toolkit_metodologia_castro.pdf", external: true },
    { label: isPt ? "Modo Defesa (backup offline)" : "Defense Mode (offline backup)", to: "/defense" },
  ];

  return (
    <Layout>
      <SeoHead route="/palestra" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title={isPt ? "Guia do Apresentador" : "Presenter's Guide"}
            subtitle={
              isPt
                ? `Documento operacional · ${BLOCOS.length} blocos · ${total} min · uso interno`
                : `Operational document · ${BLOCOS.length} blocks · ${total} min · internal use`
            }
          />

          <AnimatedSection delay={0.05}>
            <div className="mb-12 text-sm leading-relaxed text-muted-foreground text-justify border-l-2 border-primary/40 pl-4">
              {isPt
                ? "Este documento concentra tudo o que o apresentador precisa para conduzir a palestra: checklist pré-defesa, sequência recomendada, links rápidos, lembretes, contingência e arquivos de apoio. Nada disso aparece na apresentação vista pela banca."
                : "This document concentrates everything the presenter needs to run the lecture: pre-defense checklist, recommended sequence, quick links, reminders, contingency and support files. None of this appears in the presentation seen by the audience."}
            </div>
          </AnimatedSection>

          {/* Checklist */}
          <AnimatedSection delay={0.1} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Checklist pré-palestra" : "Pre-lecture checklist"}
            </h3>
            <ul className="space-y-3">
              {checklist.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Sequência + âncoras por bloco */}
          <AnimatedSection delay={0.15} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Sequência recomendada e âncoras por bloco" : "Recommended sequence and anchors per block"}
            </h3>
            <div className="space-y-4">
              {BLOCOS.map((b) => (
                <div key={b.id} className="border border-border/60 rounded-lg p-5 bg-card/20">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg font-bold text-primary">{String(b.id).padStart(2, "0")}</span>
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">{b.titulo[lang]}</h4>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <span>{b.tempoMin} min</span>
                      {b.portalRota && (
                        <Link to={b.portalRota} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary hover:underline">
                          {b.portalLabel}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2 mt-3">
                    {b.ancoras[lang].map((a, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-foreground/70 leading-relaxed">
                        <div className="h-1 w-1 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Lembretes */}
          <AnimatedSection delay={0.2} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Lembretes de condução" : "Delivery reminders"}
            </h3>
            <ul className="space-y-3">
              {lembretes.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Arquivos de apoio */}
          <AnimatedSection delay={0.25} className="mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-6">
              {isPt ? "Arquivos de apoio e links rápidos" : "Support files and quick links"}
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {arquivos.map((a, i) =>
                a.external ? (
                  <a
                    key={i}
                    href={a.to}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-between gap-2 border border-border px-4 py-3 text-xs uppercase tracking-widest text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <span>{a.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    key={i}
                    to={a.to}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-between gap-2 border border-border px-4 py-3 text-xs uppercase tracking-widest text-foreground/80 hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <span>{a.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                ),
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="border-t border-border/40 pt-6 text-[10px] uppercase tracking-widest text-muted-foreground/70 flex flex-wrap gap-4">
              <Link to="/palestra" className="hover:text-primary transition-colors">
                {isPt ? "← Ir para a apresentação" : "← Go to presentation"}
              </Link>
              <span>·</span>
              <span>{isPt ? "Rota não listada · uso do apresentador" : "Unlisted route · presenter use"}</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default GuiaApresentador;