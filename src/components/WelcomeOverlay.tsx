import { useState, useEffect, FormEvent } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "lowmovie_visited";

const emailSchema = z.string().trim().email("Email inválido").max(254, "Email muito longo");

const WelcomeOverlay = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [closing, setClosing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Email inválido");
      return;
    }

    const sanitizedEmail = result.data;
    const params = new URLSearchParams();
    params.append("emailAddress", sanitizedEmail);
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSftGDKDFks87l4_7uOl0hD9S00akAoTjrxfbPNLlaoHrpF5rQ/formResponse",
      { method: "POST", body: params, mode: "no-cors" }
    ).catch(() => {});

    localStorage.setItem(STORAGE_KEY, "true");
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/70 transition-opacity duration-400 ${closing ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full max-w-xl mx-4 border border-border bg-background/95 rounded-lg shadow-2xl overflow-hidden">
        {/* Video */}
        <div className="relative w-full aspect-video group">
          <iframe
            src="https://www.youtube.com/embed/3kO3N49cUkU?autoplay=1&loop=1&playlist=3kO3N49cUkU&controls=0&mute=1&showinfo=0&rel=0&modestbranding=1"
            allowFullScreen
            allow="autoplay"
            sandbox="allow-scripts allow-same-origin allow-presentation"
            className="absolute inset-0 w-full h-full border-0"
            title="LowMovie — Introdução"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-widest text-primary">
            Bem-vindo ao Labirinto Criativo
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-justify">
            Esta plataforma é parte da minha dissertação de mestrado sobre o coletivo
            LowPressure™ e suas práticas audiovisuais. Insira seu email para
            acessar o conteúdo — os dados são utilizados exclusivamente para fins
            acadêmicos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex gap-2">
              <Input
                type="email"
                required
                maxLength={254}
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="flex-1"
              />
              <Button type="submit" size="sm" className="uppercase tracking-widest text-xs px-6">
                Entrar
              </Button>
            </div>
            {error && <p className="text-xs text-destructive">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
