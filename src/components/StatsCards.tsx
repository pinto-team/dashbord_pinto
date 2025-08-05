// components/StatsCards.tsx
import React from 'react';

interface Stat {
    title: string;
    value: string;
    change: string;
    icon: React.ElementType;  // دیگر string نیست
    color: string;
}


interface StatsCardsProps {
    stats: Stat[];
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                            </div>
                            <div className="p-3 rounded-full bg-gray-100">
                                <Icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default StatsCards;
