// pages/ProductsTab.tsx
import React from 'react';
import { Plus, Package2 } from 'lucide-react';
import ProductTable from '../components/ProductTable';
import { products } from '../data/mockData';

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

interface ProductsTabProps {
    setShowProductModal: (v: boolean) => void;
    setShowBundleModal: (v: boolean) => void;
    setSelectedProduct: (p: Product) => void;
}

const ProductsTab: React.FC<ProductsTabProps> = ({
                                                     setShowProductModal,
                                                     setShowBundleModal,
                                                     setSelectedProduct
                                                 }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">مدیریت محصولات</h2>
                <div className="flex space-x-3 space-x-reverse">
                    <button
                        onClick={() => setShowBundleModal(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
                    >
                        <Package2 className="h-4 w-4 ml-2" />
                        ساخت بسته ترکیبی
                    </button>
                    <button
                        onClick={() => setShowProductModal(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
                    >
                        <Plus className="h-4 w-4 ml-2" />
                        افزودن محصول
                    </button>
                </div>
            </div>

            <ProductTable
                products={products}
                onEdit={(p: Product) => setSelectedProduct(p)}
            />
        </div>
    );
};

export default ProductsTab;
