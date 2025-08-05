// components/OrderHistoryTable.tsx
import React from 'react';
import { Eye } from 'lucide-react';

interface Order {
    id: string;
    customer: string;
    date: string;
    amount: number;
    items: number;
    status: string;
}

interface OrderHistoryTableProps {
    orders: Order[];
}

const OrderHistoryTable: React.FC<OrderHistoryTableProps> = ({ orders }) => {
    // Validate orders array
    if (!orders || orders.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                هیچ سفارشی در تاریخچه یافت نشد
            </div>
        );
    }

    const formatAmount = (amount: number) => {
        if (isNaN(amount) || amount < 0) return '0 تومان';
        return `${amount.toLocaleString()} تومان`;
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'تحویل شده':
                return 'bg-green-100 text-green-800';
            case 'لغو شده':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-yellow-100 text-yellow-800';
        }
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
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">وضعیت</th>
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
                        <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                  {order.status || 'نامشخص'}
                </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
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

export default OrderHistoryTable;
