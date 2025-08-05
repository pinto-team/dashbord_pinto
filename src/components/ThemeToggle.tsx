// components/ThemeToggle.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme, THEME_OPTIONS } from '../theme';

const ThemeToggle: React.FC = () => {
    const { t } = useTranslation();
    const { theme, setTheme } = useTheme();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
        setTheme(newTheme);
        setShowDropdown(false);
    };

    const getCurrentThemeIcon = () => {
        switch (theme) {
            case 'light':
                return <Sun className="h-4 w-4" />;
            case 'dark':
                return <Moon className="h-4 w-4" />;
            case 'system':
                return <Monitor className="h-4 w-4" />;
            default:
                return <Monitor className="h-4 w-4" />;
        }
    };

    const getCurrentThemeLabel = () => {
        switch (theme) {
            case 'light':
                return t('theme.light');
            case 'dark':
                return t('theme.dark');
            case 'system':
                return t('theme.system');
            default:
                return t('theme.system');
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                aria-label="Toggle theme"
                title={t('theme.title')}
            >
                <div className="p-1 rounded-md bg-bg-tertiary">
                    {getCurrentThemeIcon()}
                </div>
                <span className="hidden sm:block text-sm font-medium">
                    {getCurrentThemeLabel()}
                </span>
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
                                    {t('theme.selectTheme')}
                                </p>
                            </div>
                            {THEME_OPTIONS.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleThemeChange(option.value)}
                                    className={`w-full flex items-center px-3 py-2 text-sm transition-colors duration-200 ${
                                        theme === option.value
                                            ? 'bg-accent-primary/10 text-accent-primary'
                                            : 'text-text-primary hover:bg-bg-secondary'
                                    }`}
                                >
                                    <span className="mr-2 rtl:mr-2 ltr:ml-2">{option.icon}</span>
                                    <span className="flex-1 text-right rtl:text-right ltr:text-left">
                                        {t(`theme.${option.value}`)}
                                    </span>
                                    {theme === option.value && (
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

export default ThemeToggle;