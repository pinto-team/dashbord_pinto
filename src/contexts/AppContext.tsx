import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { getCurrentTheme, setTheme, initializeTheme } from '../theme';
import type { Theme } from '../theme';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: string;
  setLanguage: (language: string) => void;
  isRTL: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const [theme, setThemeState] = useState<Theme>(getCurrentTheme());
  const [language, setLanguageState] = useState<string>(i18n.language);

  // Initialize theme on mount
  useEffect(() => {
    initializeTheme();
  }, []);

  // Handle theme changes
  const handleThemeChange = (newTheme: Theme) => {
    setThemeState(newTheme);
    setTheme(newTheme);
  };

  // Handle language changes
  const handleLanguageChange = (newLanguage: string) => {
    setLanguageState(newLanguage);
    i18n.changeLanguage(newLanguage);
    
    // Update document direction
    document.documentElement.dir = newLanguage === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  // Initialize language direction on mount
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  const isRTL = language === 'fa';

  const value: AppContextType = {
    theme,
    setTheme: handleThemeChange,
    language,
    setLanguage: handleLanguageChange,
    isRTL,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};