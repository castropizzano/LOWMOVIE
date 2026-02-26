import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <AnimatedSection className="mb-12 md:mb-16">
      <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-20 gradient-primary" />
    </AnimatedSection>
  );
};

export default SectionTitle;
