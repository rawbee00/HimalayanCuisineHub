import { useState } from 'react';

interface TestWelcomeProps {
  onEnter: () => void;
}

export default function TestWelcome({ onEnter }: TestWelcomeProps) {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    localStorage.setItem('hasVisited', 'true');
    onEnter();
  };

  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/attached_assets/5761A4A3-073E-4CB8-9054-2E7BB28A077D.PNG)',
          opacity: 0.7
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          HIMALAYAN
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
          Curry & Tandoor House
        </h2>
        
        <button
          onClick={handleEnter}
          disabled={isEntering}
          className="w-full max-w-xs mx-auto py-4 px-8 bg-blue-600 text-white font-bold rounded-full text-lg"
        >
          {isEntering ? 'Entering...' : 'Enter Site'}
        </button>
      </div>
    </div>
  );
}
