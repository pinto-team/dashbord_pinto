import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import type { Theme } from '../theme';

const ThemeToggle: React.FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useApp();

  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    {
      value: 'light',
      label: t('theme.light'),
      icon: <Sun className="w-4 h-4" />,
    },
    {
      value: 'dark',
      label: t('theme.dark'),
      icon: <Moon className="w-4 h-4" />,
    },
    {
      value: 'system',
      label: t('theme.system'),
      icon: <Monitor className="w-4 h-4" />,
    },
  ];

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      {themes.map((themeOption) => (
        <button
          key={themeOption.value}
          onClick={() => setTheme(themeOption.value)}
          className={`flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            theme === themeOption.value
              ? 'bg-accent-primary text-text-inverse'
              : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
          }`}
          title={themeOption.label}
        >
          {themeOption.icon}
          <span className="hidden sm:inline">{themeOption.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;