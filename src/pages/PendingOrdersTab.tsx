// pages/PendingOrdersTab.tsx
import React from 'react';
import PendingOrdersTable from '../components/PendingOrdersTable';
import { pendingOrders } from '../data/mockData';

const PendingOrdersTab: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">سفارشات در انتظار تایید</h2>
            <PendingOrdersTable orders={pendingOrders} />
        </div>
    );
};

export default PendingOrdersTab;
