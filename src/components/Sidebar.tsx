// components/Sidebar.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Home, Package, Package2, Users, Clock, BarChart3, X } from 'lucide-react';

interface SidebarProps {
    sidebarOpen: boolean;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, activeTab, setActiveTab }) => {
    const { t } = useTranslation();

    const menuItems = [
        { 
            id: 'dashboard', 
            label: t('common.dashboard'), 
            icon: Home,
            description: t('sidebar.dashboardDesc')
        },
        { 
            id: 'products', 
            label: t('common.products'), 
            icon: Package,
            description: t('sidebar.productsDesc')
        },
        { 
            id: 'customers', 
            label: t('common.customers'), 
            icon: Users,
            description: t('sidebar.customersDesc')
        },
        { 
            id: 'orders', 
            label: t('common.orders'), 
            icon: Clock,
            description: t('sidebar.ordersDesc')
        },
        { 
            id: 'history', 
            label: t('common.orderHistory'), 
            icon: BarChart3,
            description: t('sidebar.historyDesc')
        },
    ];

    return (
        <>
            {/* Mobile backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-bg-overlay z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setActiveTab(activeTab)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 right-0 z-50 w-64 bg-bg-sidebar shadow-xl transform ${
                    sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 rtl:right-0 ltr:left-0`}
            >
                {/* Header */}
                <div className="flex items-center justify-between h-16 bg-gradient-to-r from-accent-primary to-accent-secondary px-6">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                            <Package2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-white text-lg font-bold">عمده فروشی پارس</h1>
                            <p className="text-white/80 text-xs">Admin Dashboard</p>
                        </div>
                    </div>
                    
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setActiveTab(activeTab)}
                        className="lg:hidden p-1 rounded-md text-white/80 hover:text-white hover:bg-white/20 transition-colors duration-200"
                        aria-label="Close sidebar"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="mt-6 px-3">
                    <div className="space-y-1">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`group w-full flex items-center px-3 py-3 text-right rtl:text-right ltr:text-left rounded-lg transition-all duration-200 ${
                                        isActive 
                                            ? 'bg-white/10 text-white shadow-lg border-r-2 rtl:border-r-2 ltr:border-l-2 border-white' 
                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                    }`}
                                    title={item.description}
                                >
                                    <div className={`p-2 rounded-lg transition-all duration-200 ${
                                        isActive 
                                            ? 'bg-white/20 text-white' 
                                            : 'text-white/70 group-hover:text-white group-hover:bg-white/10'
                                    }`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <span className="ml-3 rtl:ml-3 ltr:mr-3 font-medium">{item.label}</span>
                                    
                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="ml-auto rtl:ml-auto ltr:mr-auto">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                    <div className="text-center">
                        <p className="text-white/60 text-xs">Version 2.0.0</p>
                        <p className="text-white/40 text-xs mt-1">© 2024 Pars Wholesale</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
