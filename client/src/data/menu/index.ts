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

// Appetizers
export const appetizers: MenuItem[] = [
  {
    id: 'veg-platter',
    name: 'Vegetable Platter 🌱',
    description: 'Assorted vegetable appetizers',
    price: '8.90',
    category: 'appetizers',
    isVeg: true
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka 🌱',
    description: 'Grilled cottage cheese cubes marinated in spices',
    price: '7.50',
    category: 'appetizers',
    isVeg: true,
    isPopular: true
  },
  {
    id: 'chicken-lollipop',
    name: 'Chicken Lollipop',
    description: 'Spicy chicken wings lollipop style',
    price: '9.50',
    category: 'appetizers',
    isSpicy: true
  }
];

// Starters
export const starters: MenuItem[] = [
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    description: 'Classic clay oven roasted chicken with spices',
    price: '10.90',
    category: 'starters',
    isPopular: true
  },
  {
    id: 'murg-malai-kebab',
    name: 'Murg Malai Kebab',
    description: 'Creamy chicken kebabs with mild spices',
    price: '11.50',
    category: 'starters'
  },
  {
    id: 'hariyali-kebab',
    name: 'Hariyali Kebab',
    description: 'Green herb chicken kebabs',
    price: '10.90',
    category: 'starters',
    isSpicy: true
  },
  {
    id: 'paneer-tikka-masala',
    name: 'Paneer Tikka Masala',
    description: 'Grilled cottage cheese in rich gravy',
    price: '9.90',
    category: 'starters',
    isVeg: true
  }
];

// Curries
export const curries: MenuItem[] = [
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description: 'Tandoori chicken in rich tomato and butter sauce',
    price: '14.90',
    category: 'curries',
    isPopular: true
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    description: 'Grilled chicken in spiced tomato cream sauce',
    price: '14.90',
    category: 'curries',
    isPopular: true
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    description: 'Spinach and cottage cheese in mild spices',
    price: '12.50',
    category: 'curries',
    isVeg: true
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    description: 'Creamy black lentils with butter',
    price: '11.90',
    category: 'curries',
    isVeg: true
  },
  {
    id: 'chana-masala',
    name: 'Chana Masala',
    description: 'Chickpeas in spicy tomato gravy',
    price: '11.50',
    category: 'curries',
    isVeg: true,
    isSpicy: true
  },
  {
    id: 'lamb-rogan-josh',
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb in aromatic curry sauce',
    price: '16.90',
    category: 'curries',
    isSpicy: true
  }
];

// Curry Sauces
export const currySauces: MenuItem[] = [
  {
    id: 'tikka-masala-sauce',
    name: 'Tikka Masala Sauce',
    description: 'Creamy tomato and spice sauce',
    price: '3.50',
    category: 'sauces',
    isVeg: true
  },
  {
    id: 'korma-sauce',
    name: 'Korma Sauce',
    description: 'Mild and creamy nut-based sauce',
    price: '3.50',
    category: 'sauces',
    isVeg: true
  },
  {
    id: 'vindaloo-sauce',
    name: 'Vindaloo Sauce',
    description: 'Hot and tangy Goan-style sauce',
    price: '3.50',
    category: 'sauces',
    isSpicy: true
  }
];

// Sides
export const sides: MenuItem[] = [
  {
    id: 'raita',
    name: 'Raita',
    description: 'Yogurt with cucumber and mint',
    price: '2.90',
    category: 'sides',
    isVeg: true
  },
  {
    id: 'papadum',
    name: 'Papadum',
    description: 'Crispy lentil wafers',
    price: '1.90',
    category: 'sides',
    isVeg: true
  },
  {
    id: 'mango-chutney',
    name: 'Mango Chutney',
    description: 'Sweet and tangy fruit chutney',
    price: '2.50',
    category: 'sides',
    isVeg: true
  }
];

// Sizzlers
export const sizzlers: MenuItem[] = [
  {
    id: 'chicken-sizzler',
    name: 'Chicken Sizzler',
    description: 'Grilled chicken served sizzling hot',
    price: '15.90',
    category: 'sizzlers',
    isPopular: true
  },
  {
    id: 'paneer-sizzler',
    name: 'Paneer Sizzler',
    description: 'Grilled cottage cheese sizzler',
    price: '13.90',
    category: 'sizzlers',
    isVeg: true
  },
  {
    id: 'mix-grill-sizzler',
    name: 'Mix Grill Sizzler',
    description: 'Assorted grilled meats and vegetables',
    price: '17.90',
    category: 'sizzlers'
  }
];

// House Specials
export const houseSpecials: MenuItem[] = [
  {
    id: 'chefs-special-thali',
    name: "Chef's Special Thali",
    description: 'Assorted dishes served with rice, bread, and sides',
    price: '18.90',
    category: 'specials',
    isPopular: true
  }
];

// Biryani
export const biryani: MenuItem[] = [
  {
    id: 'vegetable-biryani',
    name: 'Vegetable Biryani 🌱',
    description: 'Fragrant basmati rice with mixed vegetables',
    price: '9.90',
    category: 'biryani',
    isVeg: true
  },
  {
    id: 'chicken-biryani',
    name: 'Chicken Biryani ★',
    description: 'Aromatic rice with tender chicken',
    price: '11.90',
    category: 'biryani',
    isPopular: true
  }
];

// Rice
export const rice: MenuItem[] = [
  {
    id: 'plain-rice',
    name: 'Plain Boiled Rice',
    description: 'Steamed basmati rice',
    price: '3.50',
    category: 'rice',
    isVeg: true
  }
];

// Naan Breads
export const naanBreads: MenuItem[] = [
  {
    id: 'plain-naan',
    name: 'Plain Naan 🌱',
    description: 'Traditional leavened bread',
    price: '2.90',
    category: 'naan',
    isVeg: true
  },
  {
    id: 'garlic-naan',
    name: 'Garlic Naan 🌱',
    description: 'Buttery naan with fresh garlic',
    price: '3.50',
    category: 'naan',
    isVeg: true
  },
  {
    id: 'cheese-naan',
    name: 'Cheese Naan 🌱',
    description: 'Naan stuffed with melted cheese',
    price: '3.90',
    category: 'naan',
    isVeg: true
  }
];

// Chapati
export const chapati: MenuItem[] = [
  {
    id: 'tandoori-roti',
    name: 'Tandoori Roti',
    description: 'Whole wheat bread cooked in tandoor',
    price: '2.90',
    category: 'chapati',
    isVeg: true
  }
];

// Combine all menu items
export const allMenuItems = [
  ...appetizers,
  ...starters,
  ...curries,
  ...currySauces,
  ...sides,
  ...sizzlers,
  ...houseSpecials,
  ...biryani,
  ...rice,
  ...naanBreads,
  ...chapati
];

// Organize menu by category
export const menuByCategory = {
  appetizers,
  starters,
  curries,
  sauces: currySauces,
  sides,
  sizzlers,
  specials: houseSpecials,
  biryani,
  rice,
  naan: naanBreads,
  chapati
};

// Define category type
export interface MenuCategory {
  id: keyof typeof menuByCategory;
  name: string;
}

// Define categories for the menu
export const categories: MenuCategory[] = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'starters', name: 'Starters' },
  { id: 'curries', name: 'Curry' },
  { id: 'sauces', name: 'Curry Sauce' },
  { id: 'sizzlers', name: 'Sizzler' },
  { id: 'specials', name: 'House Special' },
  { id: 'sides', name: 'Sides' },
  { id: 'biryani', name: 'Biryani' },
  { id: 'rice', name: 'Rice' },
  { id: 'naan', name: 'Naan Breads' },
  { id: 'chapati', name: 'Chapati' }
];
