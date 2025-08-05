// components/BestSellers.tsx
import React from 'react';
import { Package } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    stock: number;
}

interface BestSellersProps {
    products: Product[];
}

const BestSellers: React.FC<BestSellersProps> = ({ products }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">محصولات پرفروش</h3>
            <div className="space-y-3">
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="h-8 w-8 bg-gray-200 rounded mr-3 flex items-center justify-center">
                                <Package className="h-4 w-4 text-gray-400" />
                            </div>
                            <span className="text-sm font-medium">{product.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{product.stock} عدد</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;
