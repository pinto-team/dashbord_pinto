// components/BundleModal.tsx
import React, { useState } from 'react';
import { products } from '../data/mockData';

interface BundleModalProps {
    onClose: () => void;
}

const BundleModal: React.FC<BundleModalProps> = ({ onClose }) => {
    const [bundleName, setBundleName] = useState('');
    const [bundlePrice, setBundlePrice] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

    const handleProductToggle = (productId: number) => {
        setSelectedProducts(prev => 
            prev.includes(productId) 
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save the bundle data
        console.log('Creating bundle:', {
            name: bundleName,
            price: bundlePrice,
            products: selectedProducts
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg">
                <h3 className="text-lg font-semibold mb-4">ساخت بسته ترکیبی</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="نام بسته"
                        value={bundleName}
                        onChange={(e) => setBundleName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            انتخاب محصولات:
                        </label>
                        <div className="space-y-2 max-h-40 overflow-y-auto">
                            {products.map((product) => (
                                <label key={product.id} className="flex items-center">
                                    <input 
                                        type="checkbox" 
                                        className="ml-2"
                                        checked={selectedProducts.includes(product.id)}
                                        onChange={() => handleProductToggle(product.id)}
                                    />
                                    <span className="text-sm">{product.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <input
                        type="number"
                        placeholder="قیمت بسته"
                        value={bundlePrice}
                        onChange={(e) => setBundlePrice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        min="0"
                        required
                    />
                    <div className="flex justify-end space-x-3 space-x-reverse mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                            انصراف
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            ساخت بسته
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BundleModal;
