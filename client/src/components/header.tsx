import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleLogoClick = () => {
    setIsMenuOpen(false); // Close menu if open
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-6 relative">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <div className="w-full md:w-auto flex justify-between items-center">
              <Link href="/" className="flex items-center" onClick={handleLogoClick}>
                <img 
                  src="/assets/logo.png" 
                  alt="Himalayan Logo" 
                  className="w-24 h-24 md:w-40 md:h-40 lg:w-64 lg:h-64 object-contain cursor-pointer hover:opacity-90 transition-opacity"
                />
              </Link>
              <button 
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="text-center mt-2 md:mt-0">
              <h1 className="yadri-font text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-custom mb-0 md:mb-1 tracking-wide">
                Himalayan
              </h1>
              <h2 className="yadri-font text-lg sm:text-xl md:text-3xl font-semibold text-primary-custom mb-1 md:mb-2">
                Curry & Tandoor House
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-primary-custom font-medium tracking-wider">
                Nepali - Indian Cuisine
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 mobile-menu ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 pt-20 h-full overflow-y-auto">
            <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-6 px-4">Menu Sections</h4>
            <div className="space-y-3 px-2">
              <Button
                variant="ghost"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const menuSection = document.getElementById('menu-system');
                    if (menuSection) {
                      const headerOffset = 100;
                      const elementPosition = menuSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      
                      menuSection.setAttribute('data-active-tab', 'menu');
                      // Force a reflow
                      void menuSection.offsetHeight;
                      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="w-full justify-start px-6 py-4 text-lg text-gray-700 hover:text-primary-custom hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Food
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const menuSection = document.getElementById('menu-system');
                    if (menuSection) {
                      const headerOffset = 100;
                      const elementPosition = menuSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      
                      menuSection.setAttribute('data-active-tab', 'drinks');
                      menuSection.setAttribute('data-drinks-tab', 'softDrinks');
                      // Force a reflow
                      void menuSection.offsetHeight;
                      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="w-full justify-start px-6 py-4 text-lg text-gray-700 hover:text-primary-custom hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Drinks
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    const menuSection = document.getElementById('menu-system');
                    if (menuSection) {
                      const headerOffset = 100;
                      const elementPosition = menuSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                      
                      menuSection.setAttribute('data-active-tab', 'wine');
                      // Force a reflow
                      void menuSection.offsetHeight;
                      menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }}
                className="w-full justify-start px-6 py-4 text-lg text-gray-700 hover:text-primary-custom hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Wine List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
