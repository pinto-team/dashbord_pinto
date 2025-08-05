// components/Header.tsx
import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/* Toggle button for mobile sidebar */}
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* Search bar */}
                        <div className="relative ml-4">
                            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="جستجو در محصولات و مشتریان..."
                                className="pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-80"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4 space-x-reverse">
                        <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                            <Bell className="h-6 w-6" />
                            <span className="absolute top-0 left-0 h-2 w-2 bg-red-500 rounded-full"></span>
                        </button>

                        <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-700">مدیر فروش</p>
                                <p className="text-xs text-gray-500">admin@company.com</p>
                            </div>
                            <User className="h-8 w-8 p-1 bg-gray-200 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
