import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('language') || 'ES';
  });

  const setLanguage = (newLang) => {
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    
    // Dispatch event for components that might not be under this context but need to know
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));

    // Support for Google Translate if used previously in the project
    const gLang = newLang === 'EN' ? 'en' : 'es';
    if (newLang === 'ES') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    } else {
      document.cookie = `googtrans=/es/${gLang}; path=/`;
      document.cookie = `googtrans=/es/${gLang}; path=/; domain=${window.location.hostname}`;
    }
  };

  const t = (path, params = null) => {
    const keys = path.split('.');
    let result = translations[language] || translations['ES'];
    
    let found = true;
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        found = false;
        break;
      }
    }

    if (!found) {
      // Fallback to Spanish if key not found in current language
      let fallback = translations['ES'];
      for (const fKey of keys) {
        if (fallback && fallback[fKey]) {
          fallback = fallback[fKey];
        } else {
          return path; // Return key if not found at all
        }
      }
      result = fallback;
    }

    // Handle string interpolation if params provided
    if (params && typeof result === 'string') {
      let interpolated = result;
      Object.keys(params).forEach(key => {
        interpolated = interpolated.replace(new RegExp(`{${key}}`, 'g'), params[key]);
      });
      return interpolated;
    }

    return result;
  };

  // Helper to get raw translation object for mapping arrays
  const getTranslationObject = (path) => {
    const keys = path.split('.');
    let result = translations[language] || translations['ES'];
    let found = true;

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        found = false;
        break;
      }
    }

    if (found) return result;

    // Fallback to Spanish
    let fallback = translations['ES'];
    for (const key of keys) {
      if (fallback && fallback[key]) {
        fallback = fallback[key];
      } else {
        return null; // Truly not found
      }
    }
    return fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getTranslationObject }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
