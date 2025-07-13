import { useState } from "react";
import { Button } from "@/components/ui/button";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    // Add zoom-from-H effect
    const himalyanText = document.querySelector('.himalayan-text');
    if (himalyanText) {
      himalyanText.classList.add('zoom-from-h');
    }
    setTimeout(() => {
      onEnter();
    }, 500); // 0.5 second delay
  };

  return (
    <div 
      className={`fixed inset-0 bg-cover bg-center bg-no-repeat text-white flex items-center justify-center z-50 transition-transform duration-500 ease-in-out ${
        isEntering ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
      }`}
      style={{
        backgroundImage: `url(/assets/ktm.png)`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <h1 className="yadri-font text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-2xl animate-slide-down himalayan-text">
            <span className="h-letter">H</span>IMALAYAN
          </h1>
          <h2 className="yadri-font text-3xl md:text-5xl font-semibold mb-2 text-white drop-shadow-xl animate-slide-up delay-200">
            Curry & Tandoor House
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in delay-400">
            Nepali - Indian Cuisine
          </p>
        </div>
        
        <div className="mb-8 animate-fade-in delay-500">
          <div className="bg-black bg-opacity-50 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white border-opacity-20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 yadri-font">
              Namaste and welcome to Himalayan Curry & Tandoor House!
            </h3>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              We're so glad you're here. Our kitchen is filled with the rich, comforting flavors of Nepal—just like home—along with some of our favorite Indian dishes. Every bite is made with love, tradition, and a little extra spice. Come in, relax, and enjoy!
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed italic">
              Discover the bold, fresh flavors of Nepal—a hidden gem of the Himalayas—making its debut here, paired with the familiar comfort of Indian cuisine.
            </p>
          </div>
        </div>
        
        <div className="animate-bounce-in delay-700">
          <Button
            onClick={handleEnter}
            className="bg-white text-primary-custom px-12 py-4 text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl border-4 border-white"
            disabled={isEntering}
          >
            {isEntering ? 'Entering...' : 'Get to know us'}
          </Button>
        </div>
      </div>
    </div>
  );
}