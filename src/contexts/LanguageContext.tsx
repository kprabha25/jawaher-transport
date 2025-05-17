
import React, { createContext, useState, useContext, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const changeLanguage = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        isRTL: language === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
