// components/Header.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Search, Bell, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement search functionality
        console.log('Searching for:', searchQuery);
    };

    const handleNotificationClick = () => {
        // TODO: Implement notification panel
        setNotificationCount(0);
    };

    return (
        <header className="bg-bg-primary shadow-sm border-b border-border-primary transition-all duration-300 sticky top-0 z-30 backdrop-blur-sm bg-bg-primary/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        {/* Toggle button for mobile sidebar */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                            aria-label="Toggle sidebar"
                        >
                            <Menu className="h-5 w-5" />
                        </button>

                        {/* Search bar */}
                        <form onSubmit={handleSearch} className="relative hidden sm:block">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-tertiary rtl:left-3 ltr:right-3" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('common.search')}
                                    className="pl-10 pr-4 py-2 border border-border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent bg-bg-primary text-text-primary placeholder-text-muted transition-all duration-200 w-80 hover:border-border-secondary"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        
                        {/* Language Toggle */}
                        <LanguageToggle />

                        {/* Notifications */}
                        <button 
                            onClick={handleNotificationClick}
                            className="relative p-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                            aria-label="Notifications"
                        >
                            <Bell className="h-5 w-5" />
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-accent-error text-text-inverse text-xs font-medium rounded-full flex items-center justify-center animate-pulse">
                                    {notificationCount > 9 ? '9+' : notificationCount}
                                </span>
                            )}
                        </button>

                        {/* User Profile Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-lg hover:bg-bg-secondary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
                                aria-label="User menu"
                            >
                                <div className="text-right rtl:text-right ltr:text-left hidden sm:block">
                                    <p className="text-sm font-medium text-text-primary">مدیر فروش</p>
                                    <p className="text-xs text-text-secondary">admin@company.com</p>
                                </div>
                                <div className="relative">
                                    <User className="h-8 w-8 p-1 bg-bg-secondary rounded-full text-text-secondary" />
                                    <ChevronDown className={`h-3 w-3 text-text-tertiary transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} />
                                </div>
                            </button>

                            {/* User Dropdown Menu */}
                            {showUserMenu && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-10" 
                                        onClick={() => setShowUserMenu(false)}
                                    />
                                    <div className="absolute right-0 rtl:right-0 ltr:left-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-lg shadow-lg z-20 animate-fade-in">
                                        <div className="py-1">
                                            <div className="px-4 py-2 border-b border-border-primary">
                                                <p className="text-sm font-medium text-text-primary">مدیر فروش</p>
                                                <p className="text-xs text-text-secondary">admin@company.com</p>
                                            </div>
                                            <button className="w-full flex items-center px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-colors duration-200">
                                                <User className="h-4 w-4 ml-2 rtl:ml-2 ltr:mr-2" />
                                                {t('common.profile')}
                                            </button>
                                            <button className="w-full flex items-center px-4 py-2 text-sm text-text-primary hover:bg-bg-secondary transition-colors duration-200">
                                                <Settings className="h-4 w-4 ml-2 rtl:ml-2 ltr:mr-2" />
                                                {t('common.settings')}
                                            </button>
                                            <div className="border-t border-border-primary my-1" />
                                            <button className="w-full flex items-center px-4 py-2 text-sm text-accent-error hover:bg-accent-error/10 transition-colors duration-200">
                                                <LogOut className="h-4 w-4 ml-2 rtl:ml-2 ltr:mr-2" />
                                                {t('common.logout')}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
