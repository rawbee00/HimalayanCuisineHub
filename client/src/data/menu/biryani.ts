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

export const biryaniDishes: MenuItem[] = [
  {
    id: 'bir-1',
    name: 'Vegetable Biryani 🌱',
    description: 'Fragrant basmati rice with mixed vegetables',
    price: '9,90€',
    category: 'Biryani',
    isVeg: true
  },
  {
    id: 'bir-2',
    name: 'Chicken Biryani ★',
    description: 'Aromatic rice with tender chicken',
    price: '11,90€',
    category: 'Biryani',
    isPopular: true
  }
];
