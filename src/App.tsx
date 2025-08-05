// App.tsx
import React, { useState, useEffect } from 'react';
import { useApp } from './contexts/AppContext';
import { initializeTheme } from './theme';

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProductModal from './modals/ProductModal';
import BundleModal from './modals/BundleModal';

// Pages (Tabs)
import DashboardTab from './pages/DashboardTab';
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

    const [showProductModal, setShowProductModal] = useState(false);
    const [showBundleModal, setShowBundleModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Initialize theme on app start
    useEffect(() => {
        const cleanup = initializeTheme();
        setIsLoading(false);
        return cleanup;
    }, []);

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
                return <DashboardTab />;
        }
    };

    return (
        <div 
            className={`flex h-screen bg-bg-primary transition-all duration-300 overflow-hidden`} 
            dir={isRTL ? 'rtl' : 'ltr'}
        >
            {/* Sidebar */}
            <Sidebar
                sidebarOpen={sidebarOpen}
                activeTab={activeTab}
                setActiveTab={(tab) => {
                    setActiveTab(tab);
                    handleSidebarClose();
                }}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-bg-primary">
                    <div className="container mx-auto p-6">
                        <div className="max-w-7xl mx-auto">
                            {/* Page Header */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-text-primary">
                                            {activeTab === 'dashboard' && 'Dashboard'}
                                            {activeTab === 'products' && 'Products'}
                                            {activeTab === 'customers' && 'Customers'}
                                            {activeTab === 'orders' && 'Pending Orders'}
                                            {activeTab === 'history' && 'Order History'}
                                        </h1>
                                        <p className="text-text-secondary mt-1">
                                            {activeTab === 'dashboard' && 'Overview and analytics of your business'}
                                            {activeTab === 'products' && 'Manage your product inventory'}
                                            {activeTab === 'customers' && 'View and manage customer information'}
                                            {activeTab === 'orders' && 'Handle pending customer orders'}
                                            {activeTab === 'history' && 'View complete order history'}
                                        </p>
                                    </div>
                                    
                                    {/* Quick Actions */}
                                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                        {activeTab === 'products' && (
                                            <>
                                                <button
                                                    onClick={() => setShowProductModal(true)}
                                                    className="btn btn-primary"
                                                >
                                                    Add Product
                                                </button>
                                                <button
                                                    onClick={() => setShowBundleModal(true)}
                                                    className="btn btn-secondary"
                                                >
                                                    Add Bundle
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Page Content */}
                            <div className="animate-fade-in">
                                {renderActiveTab()}
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modals */}
            {showProductModal && (
                <ProductModal
                    onClose={() => setShowProductModal(false)}
                    product={selectedProduct}
                />
            )}

            {showBundleModal && (
                <BundleModal onClose={() => setShowBundleModal(false)} />
            )}

            {/* Loading Overlay */}
            {isLoading && (
                <div className="fixed inset-0 bg-bg-overlay z-50 flex items-center justify-center">
                    <div className="bg-bg-card rounded-lg p-8 shadow-xl">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary mx-auto"></div>
                        <p className="text-text-primary mt-4 text-center">Loading...</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
