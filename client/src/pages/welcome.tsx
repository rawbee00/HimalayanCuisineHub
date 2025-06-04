import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  console.log('Welcome.tsx: Rendering Welcome component');
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    console.log('Welcome.tsx: isEntering state changed:', isEntering);
  }, [isEntering]);

  const handleEnter = () => {
    console.log('Welcome.tsx: handleEnter called');
    setIsEntering(true);
    // Add zoom-into-H effect
    const hLetter = document.querySelector('.h-letter');
    const welcomeContainer = document.querySelector('.welcome-container');
    
    if (hLetter && welcomeContainer) {
      // Start zoom into H animation
      hLetter.classList.add('zoom-into-h');
      welcomeContainer.classList.add('zoom-container');
    }
    
    setTimeout(() => {
      onEnter();
    }, 1000); // 1 second delay for smooth animation
  };

  return (
    <div 
      className="fixed inset-0 bg-cover bg-center flex flex-col items-center justify-between overflow-y-auto"
      style={{
        backgroundImage: `url(/attached_assets/5761A4A3-073E-4CB8-9054-2E7BB28A077D.PNG)`,
        minHeight: '100vh',
        padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
      }}
    >
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-0"></div>
      
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col flex-1">
        {/* Title Section - Always at the top */}
        <div className="text-center pt-8 pb-4">
          <h1 className="yadri-font text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
            <span className="h-letter">H</span>IMALAYAN
          </h1>
          <h2 className="yadri-font text-2xl md:text-4xl font-semibold text-white drop-shadow-xl mt-2">
            Curry & Tandoor House
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mt-1">
            Nepali - Indian Cuisine
          </p>
        </div>
        
        {/* Middle Content - Scrollable */}
        <div className="flex-1 overflow-y-auto py-4">
          <div className="bg-black/50 rounded-2xl p-6 max-w-4xl mx-auto backdrop-blur-sm border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 yadri-font">
              Namaste and welcome to Himalayan Curry & Tandoor House!
            </h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4">
              We're so glad you're here! Our kitchen is filled with the rich, comforting flavors of Nepal—just like home—along with some of our favorite Indian dishes. Every bite is made with love, tradition, and a little extra spice.
            </p>
          </div>
        </div>
        
        {/* Button - Fixed at the bottom */}
        <div className="w-full py-4 px-4 bg-black/70 backdrop-blur-md sticky bottom-0 left-0 right-0 z-20">
          <Button
            onClick={isEntering ? undefined : handleEnter}
            disabled={isEntering}
            className="w-full max-w-md mx-auto block py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full border-2 border-white/30 shadow-lg active:scale-95 transition-all duration-200"
          >
            {isEntering ? 'Entering...' : 'Enter Site'}
          </Button>
        </div>
      </div>
    </div>
  );
}