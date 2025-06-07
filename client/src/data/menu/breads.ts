export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

export const breads: MenuItem[] = [
  {
    id: 'naan-1',
    name: 'Plain Naan 🌱',
    description: 'Traditional leavened bread',
    price: '2,90€',
    category: 'Bread',
    isVeg: true
  },
  {
    id: 'naan-2',
    name: 'Garlic Naan 🌱',
    description: 'Buttery naan with fresh garlic',
    price: '3,50€',
    category: 'Bread',
    isVeg: true
  },
  {
    id: 'naan-3',
    name: 'Cheese Naan 🌱',
    description: 'Naan stuffed with melted cheese',
    price: '3,90€',
    category: 'Bread',
    isVeg: true
  }
];
