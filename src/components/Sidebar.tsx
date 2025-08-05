// components/Sidebar.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Package, Package2, Users, Clock, BarChart3 } from 'lucide-react';

interface SidebarProps {
    sidebarOpen: boolean;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, activeTab, setActiveTab }) => {
    const { t } = useTranslation();

    const menuItems = [
        { id: 'dashboard', label: t('common.dashboard'), icon: Home },
        { id: 'products', label: t('common.products'), icon: Package },
        { id: 'customers', label: t('common.customers'), icon: Users },
        { id: 'orders', label: t('common.orders'), icon: Clock },
        { id: 'history', label: t('common.orderHistory'), icon: BarChart3 },
    ];

    return (
        <div
            className={`fixed inset-y-0 right-0 z-50 w-64 bg-bg-sidebar shadow-lg transform ${
                sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 rtl:right-0 ltr:left-0`}
        >
            <div className="flex items-center justify-center h-16 bg-accent-primary">
                <Package2 className="h-8 w-8 text-text-inverse ml-2 rtl:ml-2 ltr:mr-2" />
                <h1 className="text-text-inverse text-lg font-bold">عمده فروشی پارس</h1>
            </div>
            <nav className="mt-8">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center px-6 py-3 text-right rtl:text-right ltr:text-left hover:bg-bg-tertiary transition-colors ${
                                activeTab === item.id 
                                    ? 'bg-bg-tertiary border-l-4 rtl:border-l-4 ltr:border-r-4 border-accent-primary text-accent-primary' 
                                    : 'text-text-secondary hover:text-text-primary'
                            }`}
                        >
                            <Icon className="ml-3 h-5 w-5 rtl:ml-3 rtl:mr-0 ltr:mr-3 ltr:ml-0" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;
