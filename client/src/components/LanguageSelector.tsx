import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type LanguageCode = 'en' | 'es' | 'de' | 'fr' | 'it';

interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'de', name: 'German', flag: '🇩🇪', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', flag: '🇫🇷', nativeName: 'Français' },
  { code: 'it', name: 'Italian', flag: '🇮🇹', nativeName: 'Italiano' },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Get the current language display name
  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set initial language and subscribe to language changes
  useEffect(() => {
    // Handle language changes
    const handleLanguageChanged = (lng: string) => {
      console.log('Language changed to:', lng);
      const langCode = LANGUAGES.some(lang => lang.code === lng) 
        ? lng as LanguageCode 
        : 'en';
      setCurrentLanguage(langCode);
      document.documentElement.lang = langCode;
    };

    // Set up language change listener
    i18n.on('languageChanged', handleLanguageChanged);
    
    // Initialize with current language
    const savedLang = (localStorage.getItem('i18nextLng') || i18n.language || 'en') as LanguageCode;
    
    if (savedLang !== i18n.language) {
      console.log('Initializing with language:', savedLang);
      i18n.changeLanguage(savedLang).catch(console.error);
    } else if (i18n.language) {
      console.log('Using current i18n language:', i18n.language);
      handleLanguageChanged(i18n.language);
    }
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChanged);
    };
  }, [i18n]);

  // Function to change the language
  const changeLanguage = async (langCode: LanguageCode) => {
    // Prevent unnecessary updates
    if (isChanging || langCode === currentLanguage) {
      setIsOpen(false);
      return;
    }
    
    console.log('Changing language to:', langCode);
    setIsChanging(true);
    
    try {
      // Update the language in i18next
      await i18n.changeLanguage(langCode);
      
      // Update local state
      setCurrentLanguage(langCode);
      document.documentElement.lang = langCode;
      
      // Persist the language preference
      localStorage.setItem('i18nextLng', langCode);
      console.log('Successfully changed language to:', langCode);
    } catch (error) {
      console.error('Error changing language:', error);
      // Revert to previous language on error
      await i18n.changeLanguage(currentLanguage);
    } finally {
      setIsChanging(false);
      setIsOpen(false);
    }
  };

  // Toggle dropdown
  const toggleDropdown = () => {
    if (isChanging) return; // Prevent toggling while changing language
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleDropdown}
        className={cn(
          "flex items-center gap-2 px-3 py-2 text-sm font-medium",
          isChanging && "opacity-70 cursor-not-allowed"
        )}
        disabled={isChanging}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-100">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              onClick={() => changeLanguage(lang.code)}
              className={cn(
                "flex items-center justify-start w-full h-auto p-2 text-sm font-normal text-left",
                currentLanguage === lang.code ? "bg-gray-100" : "hover:bg-gray-50"
              )}
              disabled={isChanging}
            >
              <span className="mr-2 text-base">{lang.flag}</span>
              <span className="flex-1">{lang.nativeName}</span>
              {isChanging && currentLanguage === lang.code && (
                <span className="text-muted-foreground">...</span>
              )}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
