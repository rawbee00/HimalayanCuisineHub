import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu if open
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 relative">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              <img 
                src="/assets/logo.png" 
                alt="Himalayan Logo" 
                className="w-80 h-80 object-contain cursor-pointer hover:opacity-90 transition-opacity"
              />
            </Link>
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
                      // Scroll to menu section
                      const menuSection = document.getElementById('menu-system');
                      if (menuSection) {
                        const rect = menuSection.getBoundingClientRect();
                        window.scrollTo({
                          top: rect.top + window.scrollY - 80,
                          behavior: 'smooth'
                        });
                        // Set the active tab to food
                        menuSection.setAttribute('data-active-tab', 'menu');
                      }
                    }, 100);
                  }}
                  className="w-full px-6 py-4 font-medium text-lg text-gray-500 hover:text-primary-custom bg-gray-50 hover:bg-white rounded-lg transition-all duration-200"
                >
                  Food
                </Button>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      // Scroll to menu section
                      const menuSection = document.getElementById('menu-system');
                      if (menuSection) {
                        const rect = menuSection.getBoundingClientRect();
                        window.scrollTo({
                          top: rect.top + window.scrollY - 80,
                          behavior: 'smooth'
                        });
                        // Set the active tab to drinks
                        menuSection.setAttribute('data-active-tab', 'drinks');
                        menuSection.setAttribute('data-drinks-tab', 'softDrinks');
                      }
                    }, 100);
                  }}
                  className="w-full px-6 py-4 font-medium text-lg text-gray-500 hover:text-primary-custom bg-gray-50 hover:bg-white rounded-lg transition-all duration-200"
                >
                  Drinks
                </Button>
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      // Scroll to menu section
                      const menuSection = document.getElementById('menu-system');
                      if (menuSection) {
                        const rect = menuSection.getBoundingClientRect();
                        window.scrollTo({
                          top: rect.top + window.scrollY - 80,
                          behavior: 'smooth'
                        });
                        // Set the active tab to wine
                        menuSection.setAttribute('data-active-tab', 'wine');
                      }
                    }, 100);
                  }}
                  className="w-full px-6 py-4 font-medium text-lg text-gray-500 hover:text-primary-custom bg-gray-50 hover:bg-white rounded-lg transition-all duration-200"
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
