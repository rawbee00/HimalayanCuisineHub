import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogoClick = () => {
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

  const scrollToSection = (sectionId: string) => {
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

  const [location] = useLocation();

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo and Title */}
            <div className="flex items-center w-full md:w-auto">
              {/* Logo */}
              <Link 
                href="/" 
                className="group flex-shrink-0 bg-transparent"
                onClick={handleLogoClick}
              >
                <div className="h-40 w-40 md:h-64 md:w-auto rounded-full overflow-hidden transition-transform group-hover:scale-105">
                  <img 
                    src="/assets/logo.png" 
                    alt="Himalayan Cuisine Logo" 
                    width={500}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{
                      mixBlendMode: 'multiply',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </Link>
              
              {/* Title - Centered on mobile */}
              <div className="flex-1 md:flex-none md:ml-5 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-yatra text-primary-custom leading-tight">Himalayan</h1>
                <p className="text-sm md:text-base lg:text-xl font-bold text-gray-800">Curry & Tandoor House</p>
                <p className="text-xs md:text-sm lg:text-base font-medium text-gray-700">Nepali - Indian Cuisine</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    location === item.href.split('#')[0]
                      ? 'bg-primary-custom/10 text-primary-custom'
                      : 'text-gray-700 hover:bg-gray-100',
                    item.href.startsWith('/#') && 'hover:text-primary-custom hover:bg-transparent'
                  )}
                  onClick={(e) => {
                    if (item.href.startsWith('/#')) {
                      e.preventDefault();
                      const sectionId = item.href.split('#')[1];
                      scrollToSection(sectionId);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-custom hover:bg-gray-100 focus:outline-none"
                onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location === item.href.split('#')[0]
                    ? 'bg-primary-custom/10 text-primary-custom'
                    : 'text-gray-700 hover:bg-gray-100',
                  item.href.startsWith('/#') && 'hover:text-primary-custom hover:bg-transparent'
                )}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    e.preventDefault();
                    const sectionId = item.href.split('#')[1];
                    scrollToSection(sectionId);
                  }
                  document.getElementById('mobile-menu')?.classList.add('hidden');
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link
                href="/reservations"
                className="block w-full text-center bg-primary-custom hover:bg-primary-custom/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
