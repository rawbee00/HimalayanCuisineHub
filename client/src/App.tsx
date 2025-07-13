import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageSelector } from '@/components/LanguageSelector';
import Maintenance from "@/components/Maintenance";
import { queryClient } from "./lib/queryClient";

console.log('App.tsx: App component is rendering in maintenance mode');

function App() {
  // Maintenance mode is active - showing maintenance page to all visitors

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="fixed top-3 right-3 z-[9999] bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-md shadow-sm border border-gray-200 transition-all">
          <LanguageSelector />
        </div>
        <div className="min-h-screen">
          <Maintenance />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
