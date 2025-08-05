// components/ProductModal.tsx
import React, { useState, useEffect } from 'react';

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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
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
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="دسته‌بندی"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="قیمت"
                        value={formData.price}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        min="0"
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="موجودی"
                        value={formData.stock}
                        onChange={handleInputChange}
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
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
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
