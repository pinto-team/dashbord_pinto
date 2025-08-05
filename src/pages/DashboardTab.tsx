// pages/DashboardTab.tsx
import React from 'react';
import StatsCards from '../components/StatsCards';
import BestSellers from '../components/BestSellers';
import { stats, products } from '../data/mockData';

const DashboardTab: React.FC = () => {
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">داشبورد عمده فروشی</h2>
                <p className="text-gray-600">خلاصه‌ای از فعالیت‌های کسب و کار شما</p>
            </div>

            <StatsCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">فعالیت اخیر</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">سفارش جدید از سوپرمارکت پردیس</span>
                            <span className="text-xs text-gray-400">5 دقیقه پیش</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">محصول جدید اضافه شد</span>
                            <span className="text-xs text-gray-400">15 دقیقه پیش</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">مشتری جدید ثبت نام کرد</span>
                            <span className="text-xs text-gray-400">1 ساعت پیش</span>
                        </div>
                    </div>
                </div>

                <BestSellers products={products} />
            </div>
        </div>
    );
};

export default DashboardTab;
