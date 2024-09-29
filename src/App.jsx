import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import ExploreStrategy from "./pages/ExploreStrategy";
import TravelTools from "./pages/TravelTools";
import SportsHospitality from "./pages/SportsHospitality";
import OnlineEducation from "./pages/OnlineEducation";
import Entrepreneurship from "./pages/Entrepreneurship";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/explore-strategy" element={<ExploreStrategy />} />
              <Route path="/travel-tools" element={<TravelTools />} />
              <Route path="/sports-hospitality" element={<SportsHospitality />} />
              <Route path="/online-education" element={<OnlineEducation />} />
              <Route path="/entrepreneurship" element={<Entrepreneurship />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
