import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <AnimatedSection className="mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px w-16 bg-primary/40" />
    </AnimatedSection>
  );
};

export default SectionTitle;
