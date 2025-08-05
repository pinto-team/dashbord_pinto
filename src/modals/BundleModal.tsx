// components/BundleModal.tsx
import React, { useState, useEffect, useRef } from 'react';
import { products } from '../data/mockData';

interface BundleModalProps {
    onClose: () => void;
}

const BundleModal: React.FC<BundleModalProps> = ({ onClose }) => {
    const [bundleName, setBundleName] = useState('');
    const [bundlePrice, setBundlePrice] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);

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
        <div className="fixed inset-0 bg-bg-overlay z-50 flex items-center justify-center">
            <div ref={modalRef} className="bg-bg-card rounded-lg p-6 w-full max-w-lg shadow-xl border border-border-primary">
                <h3 className="text-lg font-semibold mb-4">ساخت بسته ترکیبی</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="نام بسته"
                        value={bundleName}
                        onChange={(e) => setBundleName(e.target.value)}
                        className="input"
                        required
                    />
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-2">
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
                                    <span className="text-sm text-text-primary">{product.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <input
                        type="number"
                        placeholder="قیمت بسته"
                        value={bundlePrice}
                        onChange={(e) => setBundlePrice(e.target.value)}
                        className="input"
                        min="0"
                        required
                    />
                    <div className="flex justify-end space-x-3 space-x-reverse mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn btn-secondary"
                        >
                            انصراف
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
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
