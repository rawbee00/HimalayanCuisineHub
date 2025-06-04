import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-white/90'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              onClick={handleLogoClick}
            >
              <img 
                src="/assets/logo.png" 
                alt="Himalayan Cuisine Logo" 
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-yatra text-primary-custom leading-tight">Himalayan</h1>
                <p className="text-sm text-gray-600">Curry & Tandoor House</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-primary-custom transition-colors text-sm font-medium"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary-custom transition-colors text-sm font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary-custom transition-colors text-sm font-medium"
              >
                Contact
              </button>
              <a 
                href="tel:01234567890"
                className="flex items-center px-4 py-2 bg-primary-custom text-white rounded-full text-sm font-medium hover:bg-primary-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book a Table
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 -mr-2 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              style={{
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation'
              }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          willChange: 'transform',
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div className="h-full flex flex-col pt-20 pb-8 px-6 space-y-6 overflow-y-auto">
          <button 
            onClick={() => scrollToSection('menu')}
            className="text-2xl py-4 px-4 text-left rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium touch-manipulation"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            Menu
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-2xl py-4 px-4 text-left rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium touch-manipulation"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-2xl py-4 px-4 text-left rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium touch-manipulation"
            style={{
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation'
            }}
          >
            Contact
          </button>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
            <a 
              href="tel:01234567890"
              className="flex items-center space-x-4 mb-4 text-gray-700 hover:text-primary-custom"
            >
              <Phone className="w-6 h-6 text-gray-500" />
              <span>01234 567890</span>
            </a>
            <a 
              href="mailto:info@himalayancuisine.com"
              className="flex items-center space-x-4 text-gray-700 hover:text-primary-custom"
            >
              <Mail className="w-6 h-6 text-gray-500" />
              <span>info@himalayancuisine.com</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
