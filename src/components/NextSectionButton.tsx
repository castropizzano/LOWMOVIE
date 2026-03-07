import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface NextSectionButtonProps {
  to: string;
  label: string;
}

const NextSectionButton = forwardRef<HTMLDivElement, NextSectionButtonProps>(
  ({ to, label }, ref) => {
    return (
      <div ref={ref} className="mt-16 flex justify-center">
        <Link
          to={to}
          className="group inline-flex items-center gap-2 border border-border px-6 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
        >
          {label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    );
  }
);

NextSectionButton.displayName = "NextSectionButton";

export default NextSectionButton;
