// App.tsx
import React, { useState } from 'react';

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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');

    const [showProductModal, setShowProductModal] = useState(false);
    const [showBundleModal, setShowBundleModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const renderActiveTab = () => {
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
        <div className="flex h-screen bg-gray-100" dir="rtl">
            <Sidebar
                sidebarOpen={sidebarOpen}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* موبایل - پس‌زمینه بلر شده */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 bg-gray-100">
                    <div className="max-w-7xl mx-auto">
                        {renderActiveTab()}
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
        </div>
    );
};

export default App;
