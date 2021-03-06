import { ProductModel } from './product.model';

export const PRODUCTS: ProductModel[] = [
    {
        id: 1,
        name: 'Nexus 6',
        price: 33000,
        desc: 'Awesome mobile',
        inStock: 5,
        tillAvailable: 1521958080185,
        image: '/assets/nexus-6.png',
        featured: false,
        quantity: 0
    },
    {
        id: 2,
        name: 'Samsung',
        price: 34000,
        desc: 'Galaxy S',
        inStock: 3,
        tillAvailable: 1521958080185,
        image: '/assets/samsung.jpeg',
        featured: true,
        quantity: 0
    },
    {
        id: 3,
        name: 'iPhone',
        price: 60000,
        desc: 'Distinct',
        inStock: 0,
        tillAvailable: 1521958080185,
        image: '/assets/xiaomi.jpg',
        featured: false,
        quantity: 0
    }
];
