// pages/OrderHistoryTab.tsx
import React from 'react';
import OrderHistoryTable from '../components/OrderHistoryTable';
import { orderHistory } from '../data/mockData';

const OrderHistoryTab: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">تاریخچه سفارشات</h2>
            <OrderHistoryTable orders={orderHistory} />
        </div>
    );
};

export default OrderHistoryTab;
