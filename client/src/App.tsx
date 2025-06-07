import { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Welcome from "@/pages/new-welcome";
import ReservationsPage from "@/pages/reservations";
import MenuPage from "@/pages/MenuPage";

console.log('App.tsx: App component is rendering');

function Router() {
  const [location] = useLocation();
  console.log('Current wouter location:', location);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reservations" component={ReservationsPage} />
      <Route path="/menu" component={MenuPage} />
      {/* Keep backward compatibility with old route */}
      <Route path="/menu/rice" component={MenuPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  
  useEffect(() => {
    console.log('App.tsx: Welcome state changed:', showWelcome);
  }, [showWelcome]);

  // This function is passed to the Welcome component
  const handleEnterSite = () => {
    console.log('App.tsx: handleEnterSite called');
    setShowWelcome(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen">
          {showWelcome ? (
            <Welcome onEnter={handleEnterSite} />
          ) : (
            <div className="animate-zoom-in">
              <Router />
            </div>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
