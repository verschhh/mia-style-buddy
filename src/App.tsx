import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProfileSetup from "./pages/ProfileSetup";
import ActivateMIA from "./pages/ActivateMIA";
import Store from "./pages/Store";
import Browse from "./pages/Browse";
import Recommendations from "./pages/Recommendations";
import ItemPreview from "./pages/ItemPreview";
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
          <Route path="/setup" element={<ProfileSetup />} />
          <Route path="/activate" element={<ActivateMIA />} />
          <Route path="/store" element={<Store />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/item/:id" element={<ItemPreview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
