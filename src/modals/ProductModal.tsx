// components/ProductModal.tsx
import React, { useState, useEffect, useRef } from 'react';

interface ProductModalProps {
    onClose: () => void;
    product?: {
        name: string;
        category: string;
        price: number;
        stock: number;
    } | null;
}

const ProductModal: React.FC<ProductModalProps> = ({ onClose, product }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                category: product.category,
                price: product.price.toString(),
                stock: product.stock.toString()
            });
        }
    }, [product]);

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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically save the data
        console.log('Saving product:', formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-bg-overlay z-50 flex items-center justify-center">
            <div ref={modalRef} className="bg-bg-card rounded-lg p-6 w-full max-w-md shadow-xl border border-border-primary">
                <h3 className="text-lg font-semibold mb-4">
                    {product ? 'ویرایش محصول' : 'افزودن محصول جدید'}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="نام محصول"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="دسته‌بندی"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="input"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="قیمت"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="input"
                        min="0"
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="موجودی"
                        value={formData.stock}
                        onChange={handleInputChange}
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
                            className="btn btn-success"
                        >
                            ذخیره
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductModal;
