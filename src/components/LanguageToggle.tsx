import React from 'react';
import { useTranslation } from 'react-i18next';
import { useApp } from '../contexts/AppContext';

const LanguageToggle: React.FC = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useApp();

  const languages = [
    { code: 'en', label: t('language.en'), flag: '🇺🇸' },
    { code: 'fa', label: t('language.fa'), flag: '🇮🇷' },
  ];

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            language === lang.code
              ? 'bg-accent-primary text-text-inverse'
              : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
          }`}
          title={lang.label}
        >
          <span className="text-base">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;