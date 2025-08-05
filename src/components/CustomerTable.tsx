// components/CustomerTable.tsx
import React from 'react';
import { Eye } from 'lucide-react';

interface Customer {
    id: number;
    name: string;
    owner: string;
    phone: string;
    address: string;
    totalOrders: number;
    totalAmount: number;
    status: string;
    joinDate: string;
}

interface CustomerTableProps {
    customers: Customer[];
    onSelect: (customer: Customer) => void;
}

const CustomerTable: React.FC<CustomerTableProps> = ({ customers, onSelect }) => {
    // Validate customers array
    if (!customers || customers.length === 0) {
        return (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
                هیچ مشتری یافت نشد
            </div>
        );
    }

    const formatAmount = (amount: number) => {
        if (isNaN(amount) || amount < 0) return '0 تومان';
        return `${amount.toLocaleString()} تومان`;
    };

    const getStatusColor = (status: string) => {
        return status === 'فعال' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
    };

    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">نام فروشگاه</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">مالک</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تلفن</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تعداد سفارشات</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">مجموع خرید</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">وضعیت</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">عملیات</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.owner || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.phone || 'نامشخص'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.totalOrders || 0}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatAmount(customer.totalAmount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(customer.status)}`}>
                  {customer.status || 'نامشخص'}
                </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                                onClick={() => onSelect(customer)}
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

export default CustomerTable;
