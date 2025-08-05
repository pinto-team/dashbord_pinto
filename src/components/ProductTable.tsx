// components/ProductTable.tsx
import React from 'react';
import { Package, Edit3, Eye } from 'lucide-react';

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

interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onEdit }) => {
    // Validate products array
    if (!products || products.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                هیچ محصولی یافت نشد
            </div>
        );
    }

    const getStockStatus = (stock: number) => {
        if (stock > 50) return 'bg-green-100 text-green-800';
        if (stock > 20) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    };

    const formatPrice = (price: number) => {
        if (isNaN(price) || price < 0) return '0 تومان';
        return `${price.toLocaleString()} تومان`;
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تصویر</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">نام محصول</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">دسته‌بندی</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">قیمت</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">موجودی</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تامین‌کننده</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عملیات</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                <Package className="h-6 w-6 text-gray-400" />
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{product.name || 'نامشخص'}</div>
                            <div className="text-sm text-gray-500">واحد: {product.unit || 'نامشخص'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatPrice(product.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStockStatus(product.stock)}`}>
                  {product.stock || 0} عدد
                </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.supplier || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                                onClick={() => onEdit(product)}
                                className="text-green-600 hover:text-green-900 ml-3"
                                title="ویرایش محصول"
                            >
                                <Edit3 className="h-4 w-4" />
                            </button>
                            <button 
                                className="text-blue-600 hover:text-blue-900"
                                title="مشاهده جزئیات"
                            >
                                <Eye className="h-4 w-4" />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
