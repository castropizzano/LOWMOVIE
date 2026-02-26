import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            © 2025 Castro Pizzano — Universidade Estadual do Paraná
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
