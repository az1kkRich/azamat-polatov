// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationUz from './locales/uz.json';
import translationRu from './locales/ru.json';
import translationEn from './locales/en.json';

const resources = {
  uz: { translation: translationUz },
  ru: { translation: translationRu },
  en: { translation: translationEn },
};

const savedLang = localStorage.getItem('lang') || 'en'; // Default to 'en' if no language is saved

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'en', // Fallback language if translation is not available
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
