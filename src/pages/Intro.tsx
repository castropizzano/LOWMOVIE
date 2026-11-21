import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
const Intro = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [needsPlay, setNeedsPlay] = useState(false);
  const [failed, setFailed] = useState(false);
  const [search] = useSearchParams();
  const replay = search.get("rever") === "1";
  const { t } = useTranslation();
  useEffect(() => {
    if (!replay && sessionStorage.getItem("lowmovie_intro_seen")) { navigate("/home", {replace:true}); return; }
    const video = videoRef.current;
    if (video) video.play().catch(() => setNeedsPlay(true));
  }, [navigate, replay]);
  const enter = useCallback(() => { sessionStorage.setItem("lowmovie_intro_seen", "1"); navigate("/home"); }, [navigate]);
  const play = () => { videoRef.current?.play().then(() => setNeedsPlay(false)).catch(() => setNeedsPlay(true)); };
  const toggleSound = () => { if (!videoRef.current) return; videoRef.current.muted = !videoRef.current.muted; setMuted(videoRef.current.muted); play(); };
  return <div className="fixed inset-0 z-50 bg-background overflow-hidden">
    <SeoHead route="/" />
    <video ref={videoRef} src="/videos/lowbyrinth-intro.mp4" autoPlay muted playsInline preload="auto" onPlaying={() => setNeedsPlay(false)} onPause={() => setNeedsPlay(true)} onError={() => { setFailed(true); setNeedsPlay(true); }} onEnded={enter} className="absolute inset-0 w-full h-full object-contain" aria-label={t("intro.videoTitle")} />
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40 pointer-events-none" />
    <Button variant="outline" size="icon" onClick={toggleSound} className="absolute top-[calc(1.5rem+env(safe-area-inset-top))] right-6 z-10 border-primary/40 bg-background/70" aria-label={muted ? t("intro.enableSound") : t("intro.muteSound")} title={muted ? t("intro.enableSound") : t("intro.muteSound")}>{muted ? <VolumeX /> : <Volume2 />}</Button>
    {needsPlay && <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {failed ? <Button asChild variant="outline" className="pointer-events-auto border-primary/40 bg-background/80"><a href="/videos/lowbyrinth-intro.mp4">{t("intro.openVideo")}</a></Button>
        : <Button variant="outline" onClick={play} className="pointer-events-auto border-primary/40 bg-background/80"><Play className="h-4 w-4 mr-2" />{t("intro.play")}</Button>}
    </div>}
    <div className="absolute bottom-[calc(3rem+env(safe-area-inset-bottom))] left-0 right-0 flex items-center justify-center px-6">
      <Button variant="outline" onClick={enter} className="border-primary/40 bg-background/80 hover:bg-primary/20 h-auto py-4 px-6">{t("intro.enterPortal")}</Button>
    </div>
  </div>;
};
export default Intro;
