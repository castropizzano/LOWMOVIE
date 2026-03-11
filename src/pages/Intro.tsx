import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Intro = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("lowmovie_intro_seen");
    if (seen) {
      navigate("/home", { replace: true });
      return;
    }
    const timer = setTimeout(() => setOverlayVisible(true), 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  const enter = useCallback(() => {
    sessionStorage.setItem("lowmovie_intro_seen", "1");
    navigate("/home");
  }, [navigate]);

  const toggleSound = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden">
      <video
        ref={videoRef}
        src="/videos/lowbyrinth-intro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={enter}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />

      {/* Sound toggle */}
      <button
        onClick={toggleSound}
        className="absolute top-6 right-6 z-10 border border-border/50 rounded-full p-3 text-foreground/60 hover:text-primary hover:border-primary/50 transition-all backdrop-blur-sm bg-background/20"
        aria-label={muted ? "Enable sound" : "Mute sound"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>

      {/* Overlay content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          overlayVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-foreground drop-shadow-lg">
          LowMovie™
        </h1>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground drop-shadow-md">
          Enter the Lowbyrinth
        </p>
      </div>

      {/* Bottom buttons */}
      <div
        className={`absolute bottom-12 left-0 right-0 flex flex-col sm:flex-row items-center justify-center gap-4 px-6 transition-opacity duration-1000 ${
          overlayVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={enter}
          className="border border-border/50 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground/70 hover:border-primary/50 hover:text-primary transition-all backdrop-blur-sm bg-background/20"
        >
          Enter Portal
        </button>
        <button
          onClick={enter}
          className="border border-border/50 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-foreground/70 hover:border-primary/50 hover:text-primary transition-all backdrop-blur-sm bg-background/20"
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
};

export default Intro;
