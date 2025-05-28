import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Welcome from "@/pages/welcome";
import ReservationsPage from "@/pages/reservations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reservations" component={ReservationsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnterSite = () => {
    setShowWelcome(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showWelcome ? (
          <Welcome onEnter={handleEnterSite} />
        ) : (
          <div className="animate-zoom-in">
            <Router />
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
