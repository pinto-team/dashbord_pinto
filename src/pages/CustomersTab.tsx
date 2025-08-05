// pages/CustomersTab.tsx
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import CustomerTable from '../components/CustomerTable';
import { customers as customerData } from '../data/mockData';

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

const CustomersTab: React.FC = () => {
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">مدیریت مشتریان</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center">
                    <Plus className="h-4 w-4 ml-2" />
                    افزودن مشتری
                </button>
            </div>

            {selectedCustomer ? (
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">جزئیات مشتری</h3>
                        <button
                            onClick={() => setSelectedCustomer(null)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">اطلاعات کلی</h4>
                            <div className="space-y-2">
                                <p><strong>نام فروشگاه:</strong> {selectedCustomer.name}</p>
                                <p><strong>مالک:</strong> {selectedCustomer.owner}</p>
                                <p><strong>تلفن:</strong> {selectedCustomer.phone}</p>
                                <p><strong>آدرس:</strong> {selectedCustomer.address}</p>
                                <p><strong>تاریخ عضویت:</strong> {selectedCustomer.joinDate}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-900 mb-2">آمار خرید</h4>
                            <div className="space-y-2">
                                <p><strong>تعداد سفارشات:</strong> {selectedCustomer.totalOrders}</p>
                                <p><strong>مجموع خرید:</strong> {selectedCustomer.totalAmount.toLocaleString()} تومان</p>
                                <p><strong>وضعیت:</strong>
                                    <span className={`mr-2 px-2 py-1 text-xs rounded-full ${
                                        selectedCustomer.status === 'فعال' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                    {selectedCustomer.status}
                  </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <CustomerTable
                    customers={customerData}
                    onSelect={(customer: Customer) => setSelectedCustomer(customer)}
                />
            )}
        </div>
    );
};

export default CustomersTab;
