// data/mockData.ts

// data/mockData.ts
import { Package, Users, Clock, ShoppingCart } from 'lucide-react';

export const products = [
    {
        id: 1,
        name: 'برنج هاشمی',
        category: 'غلات',
        price: 45000,
        stock: 150,
        unit: 'کیلو',
        supplier: 'شرکت غلات شمال',
        image: '/api/placeholder/60/60'
    },
    {
        id: 2,
        name: 'روغن آفتابگردان',
        category: 'روغن',
        price: 28000,
        stock: 80,
        unit: 'لیتر',
        supplier: 'صنایع غذایی گلدن',
        image: '/api/placeholder/60/60'
    },
    {
        id: 3,
        name: 'شکر سفید',
        category: 'شیرینی',
        price: 15000,
        stock: 200,
        unit: 'کیلو',
        supplier: 'کارخانه قند پارس',
        image: '/api/placeholder/60/60'
    },
    {
        id: 4,
        name: 'رب گوجه',
        category: 'کنسرو',
        price: 12000,
        stock: 120,
        unit: 'قوطی',
        supplier: 'صنایع غذایی چین چین',
        image: '/api/placeholder/60/60'
    }
];

export const customers = [
    {
        id: 1,
        name: 'سوپرمارکت پردیس',
        owner: 'احمد رضایی',
        phone: '09123456789',
        address: 'تهران، خیابان ولیعصر، کوچه 15',
        totalOrders: 45,
        totalAmount: 15000000,
        status: 'فعال',
        joinDate: '1402/03/15'
    },
    {
        id: 2,
        name: 'فروشگاه آسان',
        owner: 'فاطمه احمدی',
        phone: '09187654321',
        address: 'اصفهان، خیابان چهارباغ، پلاک 120',
        totalOrders: 32,
        totalAmount: 8500000,
        status: 'فعال',
        joinDate: '1402/05/10'
    },
    {
        id: 3,
        name: 'مارکت سبز',
        owner: 'علی محمدی',
        phone: '09365478912',
        address: 'شیراز، خیابان زند، مجتمع تجاری نور',
        totalOrders: 28,
        totalAmount: 12000000,
        status: 'غیرفعال',
        joinDate: '1402/01/20'
    }
];

export const pendingOrders = [
    {
        id: 'ORD-004',
        customer: 'سوپرمارکت پردیس',
        date: '1403/05/15',
        amount: 950000,
        items: 18,
        products: ['برنج هاشمی', 'روغن آفتابگردان', 'شکر سفید']
    },
    {
        id: 'ORD-005',
        customer: 'فروشگاه آسان',
        date: '1403/05/15',
        amount: 450000,
        items: 6,
        products: ['رب گوجه', 'شکر سفید']
    }
];

export const orderHistory = [
    {
        id: 'ORD-001',
        customer: 'سوپرمارکت پردیس',
        date: '1403/05/12',
        amount: 850000,
        items: 15,
        status: 'تحویل شده'
    },
    {
        id: 'ORD-002',
        customer: 'فروشگاه آسان',
        date: '1403/05/10',
        amount: 620000,
        items: 8,
        status: 'تحویل شده'
    },
    {
        id: 'ORD-003',
        customer: 'مارکت سبز',
        date: '1403/05/08',
        amount: 1200000,
        items: 22,
        status: 'لغو شده'
    }
];

export const stats = [
    { title: 'کل محصولات', value: '1,250', change: '+15', icon: Package, color: 'text-blue-600' },
    { title: 'مشتریان فعال', value: '85', change: '+5', icon: Users, color: 'text-green-600' },
    { title: 'سفارشات در انتظار', value: '12', change: '+3', icon: Clock, color: 'text-orange-600' },
    { title: 'فروش امروز', value: '2,450,000', change: '+12%', icon: ShoppingCart, color: 'text-purple-600' }
];
