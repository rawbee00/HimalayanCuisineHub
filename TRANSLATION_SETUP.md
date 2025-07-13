# Translation Setup for HimalayanCuisineHub

This document explains how to set up and use the translation system in the HimalayanCuisineHub application.

## Prerequisites

1. A Google Cloud account
2. Google Cloud Translation API enabled
3. An API key with access to the Translation API

## Setup Instructions

1. **Get a Google Cloud Translation API Key**
   - Go to the [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Cloud Translation API
   - Go to "Credentials" and create a new API key
   - Restrict the API key to the Cloud Translation API for security

2. **Configure Environment Variables**
   Create a `.env` file in the `client` directory with your API key:
   ```
   REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_api_key_here
   ```

3. **Update the Translation Service**
   Open `client/src/services/translation.ts` and replace `YOUR_GOOGLE_CLOUD_API_KEY` with your actual API key or use the environment variable:
   ```typescript
   const API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY || 'your_api_key_here';
   ```

## Using the Translation System

### Marking Text for Translation

Wrap any text you want to be translatable in your React components with the `data-translate` attribute:

```jsx
<h1 data-translate="Welcome to Himalayan Cuisine Hub">Welcome to Himalayan Cuisine Hub</h1>
<p data-translate="Experience authentic Himalayan flavors">Experience authentic Himalayan flavors</p>
```

### Language Selector

The language selector is already implemented in the `LanguageSelector` component. It will automatically appear in the UI and handle language switching.

### Available Languages

- English (en)
- Spanish (es)
- German (de)
- French (fr)
- Simplified Chinese (zh-CN)

## How It Works

1. When a user selects a language, the system:
   - Saves the preference to localStorage
   - Updates the document's language attribute
   - Makes API calls to Google Cloud Translation for all marked text
   - Updates the page content with translated text

2. When switching back to English, the system restores the original text from the `data-translate` attributes.

## Error Handling

- If the translation API fails, the original text remains visible
- Network errors are logged to the console
- The language selector shows a loading state during translation

## Best Practices

1. Always provide meaningful source text in the `data-translate` attribute
2. Keep translations in context (don't split sentences)
3. Test all languages to ensure proper rendering
4. Be mindful of text expansion/contraction in different languages
5. Consider right-to-left (RTL) languages if needed

## Troubleshooting

- **Translations not working?** Check your API key and ensure the Cloud Translation API is enabled
- **Missing translations?** Verify the text is wrapped in `data-translate` attributes
- **CORS issues?** Ensure your API key is properly restricted and the domain is allowed

## Future Improvements

- Implement client-side caching of translations
- Add support for more languages
- Implement a fallback mechanism for when the translation API is unavailable
- Add language detection for first-time visitors
