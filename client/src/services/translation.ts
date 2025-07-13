// Get API key from environment variables
const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY || '';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

if (!API_KEY) {
  console.warn('Google Cloud Translation API key not found. Please set REACT_APP_GOOGLE_TRANSLATE_API_KEY in your .env file.');
}

export interface TranslationResult {
  translatedText: string;
  detectedSourceLanguage?: string;
}

export const translateText = async (
  text: string,
  targetLang: string,
  sourceLang: string = 'auto'
): Promise<TranslationResult> => {
  try {
    const response = await fetch(
      `${API_URL}?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          source: sourceLang,
          format: 'text'
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Translation failed');
    }

    const data = await response.json();
    return {
      translatedText: data.data.translations[0].translatedText,
      detectedSourceLanguage: data.data.translations[0].detectedSourceLanguage,
    };
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};

export const translatePage = async (targetLang: string) => {
  // Get all elements with data-translate attribute
  const elements = document.querySelectorAll<HTMLElement>('[data-translate]');
  
  // Create an array of translation promises
  const translationPromises = Array.from(elements).map(async (element) => {
    const text = element.getAttribute('data-translate') || element.innerText;
    if (!text.trim()) return;
    
    try {
      const result = await translateText(text, targetLang);
      element.textContent = result.translatedText;
      // Store original text for future translations
      element.setAttribute('data-original-text', text);
    } catch (error) {
      console.error(`Failed to translate: ${text}`, error);
    }
  });

  // Wait for all translations to complete
  await Promise.all(translationPromises);
};
