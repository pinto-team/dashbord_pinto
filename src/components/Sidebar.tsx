// components/Sidebar.tsx
import React from 'react';
import { Home, Package, Package2, Users, Clock, BarChart3 } from 'lucide-react';

interface SidebarProps {
    sidebarOpen: boolean;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const menuItems = [
    { id: 'dashboard', label: 'داشبورد اصلی', icon: Home },
    { id: 'products', label: 'محصولات', icon: Package },
    { id: 'customers', label: 'مشتریان', icon: Users },
    { id: 'orders', label: 'سفارشات جاری', icon: Clock },
    { id: 'history', label: 'تاریخچه سفارشات', icon: BarChart3 },
    { id: 'settings', label: 'تنظیمات', icon: BarChart3 }
];

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, activeTab, setActiveTab }) => {
    return (
        <div
            className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${
                sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
            <div className="flex items-center justify-center h-16 bg-green-600">
                <Package2 className="h-8 w-8 text-white ml-2" />
                <h1 className="text-white text-lg font-bold">عمده فروشی پارس</h1>
            </div>
            <nav className="mt-8">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center px-6 py-3 text-right hover:bg-green-50 transition-colors ${
                                activeTab === item.id ? 'bg-green-50 border-l-4 border-green-600 text-green-600' : 'text-gray-600'
                            }`}
                        >
                            <Icon className="ml-3 h-5 w-5" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
