// components/Header.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Search, Bell, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const { t } = useTranslation();

    return (
        <header className="bg-bg-primary shadow-sm border-b border-border-primary transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/* Toggle button for mobile sidebar */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Search bar */}
                        <div className="relative ml-4 rtl:ml-0 rtl:mr-4">
                            <Search className="absolute right-3 top-3 h-4 w-4 text-text-tertiary rtl:right-3 ltr:left-3" />
                            <input
                                type="text"
                                placeholder={t('common.search')}
                                className="pl-4 pr-10 py-2 border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary bg-bg-primary text-text-primary placeholder-text-tertiary transition-colors w-80"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        
                        {/* Language Toggle */}
                        <LanguageToggle />

                        {/* Notifications */}
                        <button className="p-2 text-text-secondary hover:text-text-primary relative transition-colors">
                            <Bell className="h-6 w-6" />
                            <span className="absolute top-0 left-0 h-2 w-2 bg-accent-error rounded-full rtl:left-0 ltr:right-0"></span>
                        </button>

                        {/* User Profile */}
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="text-right rtl:text-right ltr:text-left">
                                <p className="text-sm font-medium text-text-primary">مدیر فروش</p>
                                <p className="text-xs text-text-secondary">admin@company.com</p>
                            </div>
                            <User className="h-8 w-8 p-1 bg-bg-secondary rounded-full text-text-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
