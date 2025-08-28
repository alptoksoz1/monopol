import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './locales/en/common.json';
import enAdmin from './locales/en/admin.json';
import enPublic from './locales/en/public.json';
import trCommon from './locales/tr/common.json';
import trAdmin from './locales/tr/admin.json';
import trPublic from './locales/tr/public.json';

const resources = {
  en: {
    common: enCommon,
    admin: enAdmin,
    public: enPublic,
  },
  tr: {
    common: trCommon,
    admin: trAdmin,
    public: trPublic,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'admin', 'public'],
    
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;