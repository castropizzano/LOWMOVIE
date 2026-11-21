import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import Apresentacao from "./pages/Apresentacao";
import Metodologia from "./pages/Metodologia";
import Estrutura from "./pages/Estrutura";
import Filme from "./pages/Filme";
import Coletivo from "./pages/Coletivo";
import Contribuicoes from "./pages/Contribuicoes";
import FAQ from "./pages/FAQ";
import Timeline from "./pages/Timeline";
import Replicar from "./pages/Replicar";
import Ecossistema from "./pages/Ecossistema";
import Licenca from "./pages/Licenca";
import DefenseModeAbout from "./pages/DefenseModeAbout";
import Imprimir from "./pages/Imprimir";
import Palestra from "./pages/Palestra";
import PalestraBloco from "./pages/PalestraBloco";
import GuiaApresentador from "./pages/GuiaApresentador";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Arquivo from "./pages/Arquivo";
import { MotionConfig } from "framer-motion";
import { lazy, Suspense } from "react";

const Conceitos = lazy(() => import("./pages/Conceitos"));
const Mapa = lazy(() => import("./pages/Mapa"));
const Conclusao = lazy(() => import("./pages/Conclusao"));
const Livro = lazy(() => import("./pages/Livro"));
const Defense = lazy(() => import("./pages/Defense"));

const App = () => (
  <MotionConfig reducedMotion="user"><TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-background" aria-busy="true" />}><Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Index />} />
        <Route path="/livro" element={<Livro />} />
        <Route path="/arquivo" element={<Arquivo />} />
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/metodologia" element={<Metodologia />} />
        <Route path="/estrutura" element={<Estrutura />} />
        <Route path="/conceitos" element={<Conceitos />} />
        <Route path="/filme" element={<Filme />} />
        <Route path="/coletivo" element={<Coletivo />} />
        <Route path="/contribuicoes" element={<Contribuicoes />} />
        <Route path="/questoes" element={<FAQ />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/conclusao" element={<Conclusao />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/defense" element={<Defense />} />
        <Route path="/replicar" element={<Replicar />} />
        <Route path="/ecossistema" element={<Ecossistema />} />
        <Route path="/licenca" element={<Licenca />} />
        <Route path="/defense-mode" element={<DefenseModeAbout />} />
        <Route path="/imprimir" element={<Imprimir />} />
        <Route path="/palestra" element={<Palestra />} />
        <Route path="/palestra/:bloco" element={<PalestraBloco />} />
        <Route path="/guia-apresentador" element={<GuiaApresentador />} />
        <Route path="*" element={<NotFound />} />
      </Routes></Suspense>
    </BrowserRouter>
  </TooltipProvider></MotionConfig>
);

export default App;