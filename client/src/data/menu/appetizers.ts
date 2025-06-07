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

export const appetizers: MenuItem[] = [
  {
    id: 'papadum',
    name: 'Papadum',
    description: 'Thin Indian crispy flatbread',
    price: '0.90',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'spicy-papadum',
    name: 'Spicy Papadum',
    description: 'Thin Indian crispy spicy flatbread',
    price: '1.00',
    category: 'appetizers',
    isVeg: true,
    isSpicy: true
  },
  {
    id: 'pickle-tray',
    name: 'Pickle Tray',
    description: 'Mango chutney, Mint sauce & Chopped Onions',
    price: '3.50',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'tamarind-sauce',
    name: 'Tamarind Sauce',
    description: 'Bittersweet sauce from the fruit of tamarind',
    price: '0.90',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'spicy-garlic-sauce',
    name: 'Spicy Garlic Sauce',
    description: 'Sauce made with fresh garlic & spicy mayonnaise',
    price: '0.90',
    category: 'appetizers',
    isVeg: true,
    isSpicy: true
  },
  {
    id: 'mango-chutney',
    name: 'Mango Chutney',
    description: 'Mango flavor sweet sauce',
    price: '0.90',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'mint-sauce',
    name: 'Mint Sauce',
    description: 'Sauce made with fresh mint & yogurt',
    price: '0.90',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'spicy-onions',
    name: 'Spicy Onions',
    description: 'Chopped onions with cucumber & capsicum',
    price: '0.90',
    category: 'appetizers',
    isVeg: true,
    isSpicy: true
  },
  {
    id: 'mixed-salad',
    name: 'Mixed Salad',
    description: 'Fresh mixed vegetables',
    price: '5.50',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'plain-yoghurt',
    name: 'Plain Yoghurt',
    description: 'Fresh plain yogurt',
    price: '2.90',
    category: 'appetizers',
    isVeg: true
  }
];
