import Layout from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection from "@/components/AnimatedSection";
import { Play, Music, ExternalLink } from "lucide-react";

const Filme = () => {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle
            title="O Filme — LowMovie™"
            subtitle="Dispositivo poético-político nascido do gesto coletivo"
          />

          {/* Video Embed */}
          <AnimatedSection delay={0.1}>
            <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-card/30 mb-12">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-20 w-20 rounded-full border border-border flex items-center justify-center transition-colors hover:border-primary/50 cursor-pointer">
                  <Play className="h-8 w-8 text-muted-foreground ml-1" />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Trailer em breve
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Descrição */}
          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl space-y-4 text-foreground/85 leading-relaxed mb-16">
              <p>
                O <span className="text-primary font-medium">LowMovie™</span> opera como dispositivo
                poético-político — filmagem, montagem, glitch, trilha e design como parte de um gesto
                coletivo que transforma a cidade em campo sensível.
              </p>
              <p>
                O filme não é apenas registro: é processo criativo em que o corpo, o urbano e o coletivo
                convergem como matéria audiovisual.
              </p>
            </div>
          </AnimatedSection>

          {/* Galeria */}
          <AnimatedSection delay={0.3}>
            <h3 className="font-display text-xl uppercase tracking-tight mb-6">Stills do Filme</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-md bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground/30 text-xs uppercase tracking-widest"
                >
                  Still {i}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Soundtrack */}
          <AnimatedSection delay={0.4} className="mt-16">
            <h3 className="font-display text-xl uppercase tracking-tight mb-6">
              <Music className="inline h-5 w-5 text-muted-foreground mr-2 -mt-1" />
              Soundtrack
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="#"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Music className="h-5 w-5 text-primary/70" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wide">Lowbyrinth EP</p>
                  <p className="text-xs text-muted-foreground mt-1">Ouvir no Spotify</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 border border-border rounded-lg p-5 bg-card/30 transition-colors hover:border-primary/30"
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Music className="h-5 w-5 text-primary/70" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-wide">Like Rats on Hostile Paths</p>
                  <p className="text-xs text-muted-foreground mt-1">Ouvir no Bandcamp</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Filme;
