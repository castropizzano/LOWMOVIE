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
import Conceitos from "./pages/Conceitos";
import Mapa from "./pages/Mapa";
import Conclusao from "./pages/Conclusao";
import Defense from "./pages/Defense";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Index />} />
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
        <Route path="/defense" element={<Defense />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;