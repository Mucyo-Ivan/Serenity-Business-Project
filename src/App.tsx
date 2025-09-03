import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Education from "./pages/Education";
import Technology from "./pages/Technology";
import Shop from "./pages/Shop";
import Electronics from "./pages/Electronics";
import VideoGameCenter from "./pages/VideoGameCenter";
import Engineering from "./pages/Engineering";
import Agriculture from "./pages/Agriculture";
import Hospitality from "./pages/Hospitality";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/education" element={<Education />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/video-game-center" element={<VideoGameCenter />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/hospitality" element={<Hospitality />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
