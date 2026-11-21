import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NextSectionButtonProps {
  to: string;
  label: string;
}

const NextSectionButton = forwardRef<HTMLDivElement, NextSectionButtonProps>(
  ({ to, label }, ref) => {
    return (
      <div ref={ref} className="mt-16 w-full">
        <Button asChild variant="outline" className="w-full px-6 py-4 text-xs font-semibold uppercase tracking-widest"><Link
          to={to}
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link></Button>
      </div>
    );
  }
);

NextSectionButton.displayName = "NextSectionButton";

export default NextSectionButton;
