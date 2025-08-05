// App.tsx
import React, { useState, useEffect } from 'react';
import { useApp } from './contexts/AppContext';
import { initializeTheme } from './theme';

// Cursor.com Inspired Components
import CursorSidebar from './components/CursorSidebar';
import CursorHeader from './components/CursorHeader';
import CursorDashboard from './components/CursorDashboard';

// Modals
import ProductModal from './modals/ProductModal';
import BundleModal from './modals/BundleModal';

// Pages (Tabs)
import ProductsTab from './pages/ProductsTab';
import CustomersTab from './pages/CustomersTab';
import PendingOrdersTab from './pages/PendingOrdersTab';
import OrderHistoryTab from './pages/OrderHistoryTab';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
    unit: string;
    supplier: string;
    image: string;
}

const App: React.FC = () => {
    const { isRTL } = useApp();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const [showProductModal, setShowProductModal] = useState(false);
    const [showBundleModal, setShowBundleModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Initialize theme on app start
    useEffect(() => {
        const cleanup = initializeTheme();
        setIsLoading(false);
        return cleanup;
    }, []);

    // Toggle dark mode
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    // Close sidebar on mobile when clicking outside
    const handleSidebarClose = () => {
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    const renderActiveTab = () => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary"></div>
                </div>
            );
        }

        switch (activeTab) {
            case 'dashboard':
                return <CursorDashboard />;
            case 'products':
                return (
                    <ProductsTab
                        setShowProductModal={setShowProductModal}
                        setShowBundleModal={setShowBundleModal}
                        setSelectedProduct={setSelectedProduct}
                    />
                );
            case 'customers':
                return <CustomersTab />;
            case 'orders':
                return <PendingOrdersTab />;
            case 'history':
                return <OrderHistoryTab />;
            default:
                return <CursorDashboard />;
        }
    };

    return (
        <div 
            className={`flex h-screen bg-bg-primary transition-all duration-300 overflow-hidden`} 
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            {/* Cursor.com Inspired Sidebar */}
            <CursorSidebar
                isOpen={sidebarOpen}
                onToggle={() => setSidebarOpen(!sidebarOpen)}
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab);
                    handleSidebarClose();
                }}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Cursor.com Inspired Header */}
                <CursorHeader
                    onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
                    isDarkMode={isDarkMode}
                    onToggleTheme={toggleTheme}
                />

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    {renderActiveTab()}
                </main>
            </div>

            {/* Modals */}
            {showProductModal && (
                <ProductModal
                    isOpen={showProductModal}
                    onClose={() => setShowProductModal(false)}
                    product={selectedProduct}
                />
            )}

            {showBundleModal && (
                <BundleModal
                    isOpen={showBundleModal}
                    onClose={() => setShowBundleModal(false)}
                    product={selectedProduct}
                />
            )}
        </div>
    );
};

export default App;
