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
      className={`welcome-container fixed inset-0 bg-black text-white flex flex-col items-center justify-between py-4 z-50 transition-all duration-1000 ease-in-out overflow-y-auto ${
        isEntering ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{
        backgroundImage: `url(/attached_assets/5761A4A3-073E-4CB8-9054-2E7BB28A077D.PNG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black bg-opacity-60" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 w-full flex flex-col h-full" style={{
        position: 'relative',
        zIndex: 2,
        padding: 'env(safe-area-inset-top, 1rem) 1rem env(safe-area-inset-bottom, 1rem)',
        minHeight: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem',
        flex: '1 1 auto',
        overflowY: 'auto'
      }}>
        {/* Debug info - will be visible on the page */}
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 1000
        }}>v2.1 - {new Date().toLocaleTimeString()}</div>
        <div className="animate-fade-in px-4 w-full mt-4 sm:mt-8">
          <h1 className="yadri-font text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-bold mb-2 text-white drop-shadow-2xl animate-slide-down himalayan-text">
            <span className="h-letter">H</span>IMALAYAN
          </h1>
          <h2 className="yadri-font text-xl xs:text-2xl sm:text-3xl md:text-5xl font-semibold mb-1 text-white drop-shadow-xl animate-slide-up delay-200">
            Curry & Tandoor House
          </h2>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-200 animate-fade-in delay-400">
            Nepali - Indian Cuisine
          </p>
        </div>
        
        <div className="animate-fade-in delay-500 px-4 w-full flex-1 overflow-y-auto py-4">
          <div className="bg-black bg-opacity-50 rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white border-opacity-20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 yadri-font">
              Namaste and welcome to Himalayan Curry & Tandoor House!
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-4 sm:mb-6">
              We're so glad you're here! Our kitchen is filled with the rich, comforting flavors of Nepal—just like home—along with some of our favorite Indian dishes. Every bite is made with love, tradition, and a little extra spice. Come in, relax, and enjoy! (v2.0 - Mobile Optimized)
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed italic">
              Discover the bold, fresh flavors of Nepal—a hidden gem of the Himalayas—making its debut here, paired with the familiar comfort of Indian cuisine.
            </p>
          </div>
        </div>
        
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '400px',
          padding: '0 20px',
          zIndex: 10
        }}>
          <Button
            onClick={isEntering ? undefined : handleEnter}
            disabled={isEntering}
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '1rem',
              borderRadius: '9999px',
              border: '2px solid rgba(255,255,255,0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              display: 'block',
              margin: '0 auto',
              maxWidth: '100%',
              position: 'relative',
              zIndex: 10,
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
            className="active:scale-95 transform transition-transform duration-100"
          >
            {isEntering ? 'Entering...' : 'Enter Site'}
          </Button>
        </div>
      </div>
    </div>
  );
}