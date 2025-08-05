// components/PendingOrdersTable.tsx
import React from 'react';
import { Check, X, Eye } from 'lucide-react';

interface Order {
    id: string;
    customer: string;
    date: string;
    amount: number;
    items: number;
    products: string[];
}

interface PendingOrdersTableProps {
    orders: Order[];
}

const PendingOrdersTable: React.FC<PendingOrdersTableProps> = ({ orders }) => {
    // Validate orders array
    if (!orders || orders.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                هیچ سفارش در انتظاری یافت نشد
            </div>
        );
    }

    const formatAmount = (amount: number) => {
        if (isNaN(amount) || amount < 0) return '0 تومان';
        return `${amount.toLocaleString()} تومان`;
    };

    const formatProducts = (products: string[]) => {
        if (!products || products.length === 0) return 'نامشخص';
        return products.join(', ');
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">شماره سفارش</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">مشتری</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاریخ</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تعداد اقلام</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">مبلغ کل</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">محصولات</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عملیات</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.items || 0}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatAmount(order.amount)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                            <div className="truncate" title={formatProducts(order.products)}>
                                {formatProducts(order.products)}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button 
                                className="text-green-600 hover:text-green-900 ml-3"
                                title="تایید سفارش"
                            >
                                <Check className="h-4 w-4" />
                            </button>
                            <button 
                                className="text-red-600 hover:text-red-900 ml-3"
                                title="رد سفارش"
                            >
                                <X className="h-4 w-4" />
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

export default PendingOrdersTable;
