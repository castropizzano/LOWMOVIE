import { useState, useEffect, FormEvent, useCallback } from "react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "lowmovie_visited";
const YOUTUBE_ID = "3kO3N49cUkU";

const emailSchema = z.string().trim().email("Email inválido").max(254, "Email muito longo");

const WelcomeOverlay = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [closing, setClosing] = useState(false);
  const [error, setError] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const loadIframe = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(t("welcome.invalidEmail"));
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
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-background/70 transition-opacity duration-400 ${closing ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full max-w-xl mx-4 border border-border bg-background/95 rounded-lg shadow-2xl overflow-hidden">
        <div className="relative w-full aspect-video group bg-black">
          {iframeLoaded ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&mute=1&showinfo=0&rel=0&modestbranding=1`}
              allowFullScreen
              allow="autoplay"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              className="absolute inset-0 w-full h-full border-0"
              title="LowMovie — Introdução"
              loading="lazy"
            />
          ) : (
            <button
              onClick={loadIframe}
              className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer"
              aria-label={t("welcome.playVideo")}
            >
              <img
                src={`https://i.ytimg.com/vi/${YOUTUBE_ID}/hqdefault.jpg`}
                alt="LowMovie — Introdução"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
            </button>
          )}
        </div>

        <div className="p-6 space-y-4">
          <h2 className="text-lg font-bold uppercase tracking-widest text-primary">
            {t("welcome.title")}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed text-justify">
            {t("welcome.description")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="flex gap-2">
              <Input
                type="email"
                required
                maxLength={254}
                placeholder={t("welcome.placeholder")}
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className="flex-1"
              />
              <Button type="submit" size="sm" className="uppercase tracking-widest text-xs px-6">
                {t("welcome.enter")}
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
