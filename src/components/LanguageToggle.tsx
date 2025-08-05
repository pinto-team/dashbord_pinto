// components/LanguageToggle.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const LanguageToggle: React.FC = () => {
    const { t } = useTranslation();
    const { language, setLanguage } = useApp();
    const [showDropdown, setShowDropdown] = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
        { code: 'fa', name: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    const handleLanguageChange = (languageCode: string) => {
        setLanguage(languageCode);
        setShowDropdown(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                aria-label="Toggle language"
                title={t('language.title')}
            >
                <div className="p-1 rounded-md bg-bg-tertiary">
                    <Globe className="h-4 w-4" />
                </div>
                <div className="hidden sm:flex items-center space-x-1 rtl:space-x-reverse">
                    <span className="text-lg">{currentLanguage?.flag}</span>
                    <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
                </div>
                <ChevronDown className={`h-3 w-3 text-text-tertiary transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
                <>
                    <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowDropdown(false)}
                    />
                    <div className="absolute right-0 rtl:right-0 ltr:left-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-lg shadow-lg z-20 animate-fade-in">
                        <div className="py-1">
                            <div className="px-3 py-2 border-b border-border-primary">
                                <p className="text-xs font-medium text-text-secondary uppercase tracking-wide">
                                    {t('language.selectLanguage')}
                                </p>
                            </div>
                            {languages.map((language) => (
                                <button
                                    key={language.code}
                                    onClick={() => handleLanguageChange(language.code)}
                                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors duration-200 ${
                                        currentLanguage?.code === language.code
                                            ? 'bg-accent-primary/10 text-accent-primary'
                                            : 'text-text-primary hover:bg-bg-secondary'
                                    }`}
                                >
                                    <span className="text-lg mr-2 rtl:mr-2 ltr:ml-2">{language.flag}</span>
                                    <span className="flex-1 text-right rtl:text-right ltr:text-left">
                                        {language.name}
                                    </span>
                                    {currentLanguage?.code === language.code && (
                                        <div className="w-2 h-2 bg-accent-primary rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageToggle;