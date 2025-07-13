import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import deTranslation from './locales/de/translation.json';
import frTranslation from './locales/fr/translation.json';
import itTranslation from './locales/it/translation.json';

// Define the type for our translation resources
type MenuItem = {
  name: string;
  description: string;
  veg?: boolean;
  vegan?: boolean;
  spiceLevel?: number;
  priceGlass?: string;
  priceBottle?: string;
  category: string;
  veganOption?: boolean;
};

type MenuTranslation = {
  title: string;
  tabs: {
    food: string;
    drinks: string;
    wine: string;
  };
  cuisineTypes: {
    nepali: string;
    indian: string;
  };
  foodTabs: {
    appetizer: string;
    starter: string;
    curry: string;
    sizzler: string;
    special: string;
    sides: string;
    biryani: string;
    rice: string;
    bread: string;
  };
  curryTabs: {
    proteins: string;
    sauces: string;
  };
  wineTabs: {
    house: string;
    red: string;
    white: string;
    rose: string;
    prosecco: string;
    sangria: string;
  };
  drinkTabs: {
    coffeeTea: string;
    softDrinks: string;
    beers: string;
    spirits: string;
    cocktails: string;
  };
  spiritTabs: {
    whiskey: string;
    vodka: string;
    gin: string;
    rum: string;
    brandy: string;
    aperitifs: string;
    liqueur: string;
  };
  sections: {
    nepaliFlavors: string;
    nepaliSetMenu: string;
    indianStarters: string;
    tandooriSpecialties: string;
    currySelection: string;
    signatureDishes: string;
    riceSpecialties: string;
    naanBread: string;
    sideDishes: string;
  };
  items: {
    [key: string]: MenuItem;
  };
  common: {
    serves: string;
    people: string;
    allergens: string;
    spiceLevel: string;
    mild: string;
    medium: string;
    hot: string;
    veryHot: string;
    vegan: string;
    vegetarian: string;
    glutenFree: string;
    containsNuts: string;
    price: string;
    addToOrder: string;
    customize: string;
    sauceOptions: string;
    chooseYourSpiceLevel: string;
    specialInstructions: string;
    addToCart: string;
  };
};

type TranslationResources = {
  translation: Omit<typeof enTranslation, 'menu'> & {
    menu: MenuTranslation;
  };
};

// Type for our resources
const resources: Record<string, TranslationResources> = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  de: {
    translation: deTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  it: {
    translation: itTranslation,
  },
};

// Configure i18n
const i18nConfig: InitOptions = {
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'es', 'de', 'fr', 'it'],
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
    lookupLocalStorage: 'i18nextLng',
    lookupFromPathIndex: 0,
  },
  saveMissing: true,
  saveMissingTo: 'all',
  load: 'languageOnly',
  cleanCode: true,
  nonExplicitSupportedLngs: false,
  react: {
    useSuspense: true,
  },
};

// Initialize i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

// Export the configured i18n instance
export default i18n;
