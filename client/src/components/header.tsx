import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 relative">


          <div className="text-center">
            <h1 className="yadri-font text-5xl md:text-7xl font-bold text-primary-custom mb-2 tracking-wide">
              Himalayan
            </h1>
            <h2 className="yadri-font text-2xl md:text-3xl font-semibold text-primary-custom mb-3">
              Curry & Tandoor House
            </h2>
            <p className="text-lg md:text-xl text-primary-custom font-medium tracking-wider">
              Nepali - Indian Cuisine
            </p>
          </div>
        </div>
      </header>

      {/* Hamburger Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300">
            <div className="p-6 pt-20">
              <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-6">Menu Sections</h4>
              <div className="space-y-4">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const menuSection = document.querySelector('.menu-section');
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left justify-start h-12 text-lg bg-gradient-to-r from-primary-custom to-blue-600 text-white"
                >
                  Food Menu
                </Button>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const menuSection = document.querySelector('.menu-section');
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left justify-start h-12 text-lg bg-gray-100 text-primary-custom hover:bg-gray-200"
                >
                  Drinks
                </Button>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const menuSection = document.querySelector('.menu-section');
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }, 100);
                  }}
                  className="w-full text-left justify-start h-12 text-lg bg-gray-100 text-primary-custom hover:bg-gray-200"
                >
                  Wine
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
