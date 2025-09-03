'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  FC,
} from 'react';

type Translations = {
  [key: string]: Record<string, unknown>;
};

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => Promise<void>;
  t: (key: string) => string;
  isLoading: boolean;
  error: string | null;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: FC<LanguageProviderProps> = ({ children }) => {
  const [translations, setTranslations] = useState<Translations>({});
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTranslations = async (lang: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/locales/${lang}.json`);
      if (!response.ok) {
        throw new Error(`Failed to load ${lang} translations`);
      }
      const data = await response.json();
      setTranslations((prev) => ({ ...prev, [lang]: data }));
      return data;
    } catch (err) {
      console.error(`Error loading ${lang} translations:`, err);
      setError(`Failed to load ${lang} language`);

      // Fallback to Spanish if loading fails
      if (lang !== 'es') {
        try {
          const fallbackResponse = await fetch('/locales/es.json');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            setTranslations((prev) => ({ ...prev, [lang]: fallbackData }));
            return fallbackData;
          }
        } catch (fallbackErr) {
          console.error('Fallback translation loading failed:', fallbackErr);
        }
      }

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('kairo-language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      loadTranslations(savedLanguage);
    } else {
      // Load default Spanish translations
      loadTranslations('es');
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[currentLanguage];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const changeLanguage = async (lang: string) => {
    try {
      // Load translations if not already loaded
      if (!translations[lang]) {
        await loadTranslations(lang);
      }

      setCurrentLanguage(lang);
      localStorage.setItem('kairo-language', lang);

      // Update HTML lang attribute
      if (typeof document !== 'undefined') {
        document.documentElement.lang = lang;
      }
    } catch (err) {
      console.error('Language change failed:', err);
      // Keep current language if change fails
    }
  };

  const value: LanguageContextType = {
    currentLanguage,
    changeLanguage,
    t,
    isLoading,
    error,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
