// components/StatsCards.tsx
import React from 'react';
import { useApp } from '../contexts/AppContext';
import { formatNumber } from '../utils/numbers';

interface Stat {
    title: string;
    value: string | number;
    change: string;
    icon: React.ElementType;
    color: string;
}

interface StatsCardsProps {
    stats: Stat[];
}

const StatsCards: React.FC<StatsCardsProps> = ({ stats }) => {
    const { language } = useApp();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <div key={index} className="bg-bg-primary rounded-lg shadow border border-border-primary p-6 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-text-secondary">{stat.title}</p>
                                <p className="text-2xl font-bold text-text-primary persian-numbers">
                                    {typeof stat.value === 'number' 
                                        ? formatNumber(stat.value, language)
                                        : stat.value
                                    }
                                </p>
                                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                            </div>
                            <div className="p-3 rounded-full bg-bg-secondary">
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
