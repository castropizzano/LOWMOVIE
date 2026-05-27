import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";
import {
  timelineEntries,
  resumoCV,
  areas,
  idiomas,
  categoryLabels,
  categoryColors,
  categoryDotColors,
  type TimelineCategory,
} from "@/data/lattesTimeline";
import { ExternalLink } from "lucide-react";
import SeoHead from "@/components/SeoHead";

const allCategories: TimelineCategory[] = [
  "formacao",
  "mestrado",
  "profissional",
  "publicacao",
  "producao",
  "evento",
  "banca",
  "artistica",
];

const Timeline = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === "pt" ? "pt" : "en";
  const [activeFilters, setActiveFilters] = useState<Set<TimelineCategory>>(
    new Set(allCategories)
  );

  const toggleFilter = (cat: TimelineCategory) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        if (next.size > 1) next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  };

  const selectAll = () => setActiveFilters(new Set(allCategories));

  const filtered = useMemo(
    () => timelineEntries.filter((e) => activeFilters.has(e.category)),
    [activeFilters]
  );

  // group by year
  const grouped = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    filtered.forEach((e) => {
      const arr = map.get(e.year) || [];
      arr.push(e);
      map.set(e.year, arr);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <Layout>
      <SeoHead route="/timeline" />
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle
            title={t("timeline.title")}
            subtitle={t("timeline.subtitle")}
          />

          {/* Bio */}
          <AnimatedSection className="mb-10">
            <p className="text-sm text-muted-foreground leading-relaxed text-justify">
              {resumoCV}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="text-[10px] uppercase tracking-widest px-2 py-1 border border-border rounded bg-muted/30 text-muted-foreground"
                >
                  {a}
                </span>
              ))}
              {idiomas.map((i) => (
                <span
                  key={i.nome}
                  className="text-[10px] uppercase tracking-widest px-2 py-1 border border-border rounded bg-muted/30 text-muted-foreground"
                >
                  {i.nome}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-xs">
              <a
                href="https://lattes.cnpq.br/5523516994010198"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" /> Currículo Lattes
              </a>
              <a
                href="https://orcid.org/0009-0000-3525-1713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <ExternalLink className="h-3 w-3" /> ORCID
              </a>
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection className="mb-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={selectAll}
                className={`text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border transition-colors ${
                  activeFilters.size === allCategories.length
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {lang === "pt" ? "Todos" : "All"} ({timelineEntries.length})
              </button>
              {allCategories.map((cat) => {
                const active = activeFilters.has(cat);
                const count = timelineEntries.filter(
                  (e) => e.category === cat
                ).length;
                return (
                  <button
                    key={cat}
                    onClick={() => toggleFilter(cat)}
                    className={`text-[10px] uppercase tracking-widest px-3 py-1.5 rounded border transition-colors ${
                      active
                        ? `${categoryColors[cat]} border`
                        : "border-border text-muted-foreground/50 hover:border-primary/30"
                    }`}
                  >
                    {categoryLabels[cat][lang]} ({count})
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {grouped.map(([year, entries], gi) => (
              <div key={year} className="mb-8">
                {/* Year marker */}
                <div className="relative flex items-center mb-4">
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />
                  <div className="ml-10 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2 bg-background px-3">
                    <span className="text-sm font-bold text-foreground tracking-wider">
                      {year}
                    </span>
                  </div>
                </div>

                {entries.map((entry, ei) => {
                  const isLeft = (gi + ei) % 2 === 0;
                  return (
                    <div
                      key={`${entry.title}-${ei}`}
                      className="relative flex mb-3"
                    >
                      {/* Dot */}
                      <div
                        className={`absolute left-4 md:left-1/2 -translate-x-1/2 top-3 w-2 h-2 rounded-full ${categoryDotColors[entry.category]} z-10`}
                      />

                      {/* Card */}
                      <div
                        className={`ml-10 md:ml-0 md:w-[calc(50%-24px)] ${
                          isLeft ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
                        }`}
                      >
                        <div className="p-3 rounded border border-border bg-card hover:border-primary/30 transition-colors">
                          <div className="flex items-start gap-2 mb-1">
                            <span
                              className={`text-[9px] uppercase tracking-widest px-1.5 py-0.5 rounded border shrink-0 ${categoryColors[entry.category]}`}
                            >
                              {categoryLabels[entry.category][lang]}
                            </span>
                            {entry.status && (
                              <span className="text-[9px] uppercase tracking-widest text-muted-foreground/60">
                                {entry.status}
                              </span>
                            )}
                          </div>
                          <h3 className="text-xs font-semibold text-foreground leading-snug">
                            {entry.title}
                          </h3>
                          {entry.subtitle && (
                            <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                              {entry.subtitle}
                            </p>
                          )}
                          {entry.institution && (
                            <p className="text-[10px] text-muted-foreground/60 mt-1">
                              {entry.institution}
                            </p>
                          )}
                          {entry.yearEnd && (
                            <p className="text-[10px] text-muted-foreground/40 mt-0.5">
                              {entry.year}–{entry.yearEnd}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40">
              {lang === "pt"
                ? "Dados extraídos do Currículo Lattes — Plataforma CNPq"
                : "Data extracted from Lattes CV — CNPq Platform"}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
