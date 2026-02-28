import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { to: "/", label: "Home" },
  { to: "/apresentacao", label: "Apresentação" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/conceitos", label: "Conceitos" },
  { to: "/filme", label: "O Filme" },
  { to: "/coletivo", label: "O Coletivo" },
  { to: "/contribuicoes", label: "Contribuições" },
  { to: "/faq", label: "Questões" },
  { to: "/conclusao", label: "Conclusão" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold uppercase tracking-widest text-primary">
          LowMovie™
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:text-primary",
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="lg:hidden text-foreground" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-72">
            <SheetTitle className="text-primary uppercase tracking-widest text-sm font-semibold mb-8">
              Navegação
            </SheetTitle>
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary hover:bg-muted rounded-md",
                    location.pathname === link.to
                      ? "text-primary bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
