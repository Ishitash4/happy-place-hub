
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Store from "./pages/Store";
import Todo from "./pages/Todo";
import EmotionScan from "./pages/EmotionScan";
import Journal from "./pages/Journal";
import Options from "./pages/Options";
import Wordle from "./pages/games/Wordle";
import Memory from "./pages/games/Memory";
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
          <Route path="/games" element={<Games />} />
          <Route path="/games/wordle" element={<Wordle />} />
          <Route path="/games/memory" element={<Memory />} />
          <Route path="/store" element={<Store />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/emotion-scan" element={<EmotionScan />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/options" element={<Options />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
