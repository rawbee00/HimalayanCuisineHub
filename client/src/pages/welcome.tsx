import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      onEnter();
    }, 500); // 0.5 second delay
  };

  return (
    <div 
      className={`fixed inset-0 bg-black text-white flex items-center justify-center z-50 transition-transform duration-500 ease-in-out ${
        isEntering ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{
        backgroundImage: `url(/attached_assets/5761A4A3-073E-4CB8-9054-2E7BB28A077D.PNG)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="yadri-font text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl animate-slide-down">
            HIMALAYAN
          </h1>
          <h2 className="yadri-font text-3xl md:text-5xl font-semibold mb-2 text-white drop-shadow-xl animate-slide-up delay-200">
            Curry & Tandoor House
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in delay-400">
            Nepali - Indian Cuisine
          </p>
        </div>
        
        <div className="animate-bounce-in delay-600">
          <Button
            onClick={handleEnter}
            className="bg-white text-primary-custom px-12 py-4 text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-white"
            disabled={isEntering}
          >
            {isEntering ? 'Entering...' : 'ENTER'}
          </Button>
        </div>
        
        <div className="mt-8 animate-fade-in delay-800">
          <p className="text-lg text-gray-300 italic">
            "Experience the authentic flavors of the Himalayas"
          </p>
        </div>
      </div>
    </div>
  );
}