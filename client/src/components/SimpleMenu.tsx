import { useState } from 'react';
import { motion } from 'framer-motion';

interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  isVeg?: boolean;
  isSpicy?: boolean;
}

interface MenuSection {
  title: string;
  description?: string;
  items: MenuItem[];
  sauceTypes?: Array<{
    name: string;
    description: string;
    isSpicy: boolean;
  }>;
}

type MenuTab = 'food' | 'drinks' | 'wine';
type CuisineType = 'nepali' | 'indian';
type FoodTab = 'appetizer' | 'starter' | 'curry' | 'sizzler' | 'special' | 'sides' | 'biryani' | 'rice' | 'bread';
type CurryTab = 'proteins' | 'sauces';
type WineTab = 'house' | 'red' | 'white' | 'rose' | 'prosecco' | 'sangria';
type DrinkTab = 'coffeeTea' | 'softDrinks' | 'beers' | 'spirits' | 'cocktails';
type SpiritTab = 'whiskey' | 'vodka' | 'gin' | 'rum' | 'brandy' | 'aperitifs' | 'liqueur';

const SimpleMenu = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>('food');
  const [activeCuisine, setActiveCuisine] = useState<CuisineType>('nepali');
  const [activeFoodTab, setActiveFoodTab] = useState<FoodTab>('appetizer');
  const [activeCurryTab, setActiveCurryTab] = useState<CurryTab>('proteins');
  const [activeWineTab, setActiveWineTab] = useState<WineTab>('house');
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>('coffeeTea');
  const [activeSpiritTab, setActiveSpiritTab] = useState<SpiritTab>('aperitifs');

  // Nepali/Himalayan Set Menu
  const nepaliSetMenu = [
    {
      title: 'NEPALI FLAVOURS',
      items: [
        {
          name: 'Mo: Mo - VEGAN 🌱',
          description: 'Textured soy, cabbage, and Himalayan spices',
          isVeg: true
        },
        {
          name: 'Mo: Mo - CHICKEN',
          description: 'Free-range chicken with garlic and ginger',
          isVeg: false
        },
        {
          name: 'Mo: Mo - PORK',
          description: 'Traditional Kathmandu-style rich and gamey',
          isVeg: false
        },
        {
          name: 'Aloo Sadeko',
          description: 'Potato salad with lemon and toasted mustard',
          isVeg: true
        },
        {
          name: 'Gundruk Ko Achar',
          description: 'Fermented leafy greens adapted with kale, served with tomato achar (spiced Nepali sauce)',
          isVeg: true
        }
      ]
    },
    {
      title: 'SOUP: REIMAGINED THUKPA / SHERPA\'S BOWL',
      items: [
        {
          name: 'Vegan Version',
          description: 'Shiitake and ginger broth with rice noodles',
          isVeg: true
        },
        {
          name: 'Standard Option',
          description: 'Chicken broth with vegetables and dhaniya ko patta (coriander)',
          isVeg: false
        },
        {
          name: 'Kwati',
          description: 'Mixed legumes with cumin and turmeric',
          isVeg: true
        }
      ]
    },
    {
      title: 'MAIN COURSE: THAKALI',
      items: [
        {
          name: 'Vegan Option',
          description: 'Soy in jimbu and tomato sauce',
          isVeg: true
        },
        {
          name: 'Chicken Curry',
          description: 'Bone-in curry with fenugreek seeds',
          isVeg: false
        },
        {
          name: 'Kahsi ko masu / Goat Curry',
          description: 'Bone-in slow-cooked with cardamom and black pepper masala',
          isVeg: false
        }
      ]
    },
    {
      title: 'DESSERT: YOMARI & DHAU',
      items: [
        {
          name: 'Dhau',
          description: 'Coconut yogurt with cardamom',
          isVeg: true
        },
        {
          name: 'Yomari',
          description: 'Coconut and nut molasses dumpling',
          isVeg: true
        },
        {
          name: 'Kheer (Optional)',
          description: 'Nepali-style rice pudding',
          isVeg: true
        }
      ]
    }
  ];

  const menuSections: Record<FoodTab, MenuSection> = {
    appetizer: {
      title: 'APPETIZERS',
      items: [
        {
          name: 'Papadum',
          description: 'Thin Indian crispy flatbread',
          price: '0.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Spicy Papadum',
          description: 'Thin Indian crispy spicy flatbread',
          price: '1.00 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'PICKLE TRAY',
          description: 'Mango chutney, Mint sauce & Chopped Onions',
          price: '3.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Tamarind Sauce',
          description: 'Bittersweet sauce from the fruit of tamarind',
          price: '0.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Spicy Garlic Sauce',
          description: 'Sauce made with fresh garlic & spicy mayonnaise',
          price: '0.90 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Mango Chutney',
          description: 'Mango flavour sweet sauce',
          price: '0.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Mint Sauce',
          description: 'Sauce made with fresh mint & yogurt',
          price: '0.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Spicy Onions',
          description: 'Chopped onions with cucumber & capsicum',
          price: '0.90 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Mixed Salad',
          description: 'Fresh mixed vegetables',
          price: '5.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Plain Yoghurt',
          description: 'Fresh homemade yogurt',
          price: '2.90 €',
          isVeg: true,
          isSpicy: false
        }
      ]
    },
    sides: {
      title: 'SIDES',
      items: [
        {
          name: 'Bombay Aloo',
          description: 'Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garam masala',
          price: '7.90 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Aubergine Bhaji',
          description: 'Aubergine cooked in a tandoor then peeled in a semi spicy curry base',
          price: '7.90 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Aloo Gobi',
          description: 'Potatoes & cauliflower curry served in a semi dry sauce',
          price: '8.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Saag Aloo',
          description: 'Spinach curry with potatoes, spices & touch of cream',
          price: '7.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Saag Bhaji',
          description: 'Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish',
          price: '7.90 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Palak Paneer',
          description: 'Homemade cheese cooked with spinach & seasoned with garlic, garam masala',
          price: '9.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Mutter Paneer',
          description: 'Soft paneer & green peas in a luscious tomato-based sauce',
          price: '9.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Tadka Daal',
          description: 'Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander',
          price: '7.90 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Daal Makhni',
          description: 'Classic North Indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce',
          price: '8.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Chana Masala',
          description: 'Chickpeas cooked with tomatoes, garlic, onions, & various spices such as turmeric & garam masala',
          price: '8.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Mushroom Bhaji',
          description: 'Sliced mushroom, cooked with onions & spices',
          price: '9.95 €',
          isVeg: true,
          isSpicy: true
        }
      ]
    },
    starter: {
      title: 'STARTERS',
      items: [
        {
          name: 'Onion Bhaji',
          description: 'Onion balls bound together with lightly spiced & fragrant chickpea flour batter',
          price: '4.25 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Vegetable Samosa',
          description: 'Triangular pastry filled with potatoes & peas, golden fried',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Garlic Mushroom',
          description: 'Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice',
          price: '4.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Meat Samosa',
          description: 'Triangular pastry filled with potatoes, peas & meat, golden fried',
          price: '4.75 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Vegetable Pakora',
          description: 'Sliced vegetables wrapped in batter & deep fried',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Chicken Pakora',
          description: 'Marinated chicken pieces in a batter, golden fried',
          price: '4.25 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chicken Puri',
          description: 'Chicken cooked & served on deep fried round bread',
          price: '5.50 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'King Prawn Puri',
          description: 'King prawn cooked with ginger-garlic & served on deep fried round bread',
          price: '5.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Garlic Chicken',
          description: 'Chicken cooked with garlic & lemon',
          price: '5.95 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Chicken Lollipop',
          description: 'Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Hot Chicken Wings',
          description: 'Spicy, juicy wings coated in a fiery marinade that packs a punch',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chicken Tikka',
          description: 'Boneless chicken pieces marinated in spicy yogurt cooked in a tandoor',
          price: '4.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Tandoor Chicken',
          description: 'Chicken leg piece marinated in a spicy yogurt cooked in tandoor',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Pudina Tikka',
          description: 'Boneless chicken pieces marinated with mint, ginger & cooked in tandoor',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Tikka',
          description: 'Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor',
          price: '6.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Barra Kebab',
          description: 'Succulent lamb chop marinated in yogurt & spices, flame-grilled for a smoky bite',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Sheek Kebab',
          description: 'Minced lamb marinated with spices, ginger, coriander & cooked on skewers in a tandoor',
          price: '5.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Garlic King Prawn',
          description: 'Grilled king prawn cooked with garlic & lemon',
          price: '5.90 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Special Himalayan',
          description: 'Includes: Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka, chicken pakora & sheekh kebab',
          price: '15.59 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    curry: {
      title: 'CURRIES',
      description: 'Dish from the cuisine of the Indian subcontinent which combines the use of a varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique. Choose your favorite protein with any of our signature curry sauces below.',
      
      // Curry Sauce Types
      sauceTypes: [
        {
          name: 'Masala',
          description: 'Mild flavor rich in cream & almond',
          isSpicy: false
        },
        {
          name: 'Koram',
          description: 'Mild curry with cream and grated coconut',
          isSpicy: false
        },
        {
          name: 'Balti',
          description: 'Sauce based on green peppers, garlic & onions with turmeric & garam masala',
          isSpicy: true
        },
        {
          name: 'Bhuna',
          description: 'Made with chopped onions, roasted red and green peppers, coriander seeds, ginger, garlic, and fenugreek leaves',
          isSpicy: true
        },
        {
          name: 'Curry',
          description: 'Classic curry with fresh tomatoes & red onions in smooth sauce with coriander',
          isSpicy: false
        },
        {
          name: 'Dhansak',
          description: 'Combines Persian & Gujarati cuisine with lentils, ginger, garlic, coconut, pineapple & fresh coriander',
          isSpicy: true
        },
        {
          name: 'Dopiaza',
          description: 'Curry sauce based on onions (brown onions, chives & spring onions)',
          isSpicy: true
        },
        {
          name: 'Jalfrezi',
          description: 'Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream',
          isSpicy: true
        },
        {
          name: 'Karahi',
          description: 'Prepared in special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic',
          isSpicy: true
        },
        {
          name: 'Pathia',
          description: 'Pathia is an ancient parsi cuisine from persia. It\'s bittersweet flavoured with a touch of coconut',
          isSpicy: true
        },
        {
          name: 'Rogan Josh',
          description: 'A kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander',
          isSpicy: true
        },
        {
          name: 'Saag',
          description: 'Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream',
          isSpicy: false
        },
        {
          name: 'Manchuria',
          description: 'Fresh mint in semi-dry sauce with tomatoes, lemon juice & garam masala',
          isSpicy: true
        },
        {
          name: 'Jai Puri',
          description: 'Semi dense curry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander',
          isSpicy: false
        }
      ],
      items: [
        {
          name: 'Chicken',
          description: 'Tender chicken pieces cooked in a rich, aromatic curry sauce with a blend of traditional Indian spices',
          price: '9.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chicken Tikka',
          description: 'Grilled chicken tikka pieces in a rich, creamy tomato-based curry with aromatic spices',
          price: '10.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb',
          description: 'Succulent pieces of lamb slow-cooked in a flavorful curry with traditional spices and herbs',
          price: '11.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Tikka',
          description: 'Tender lamb tikka pieces in a rich, spiced curry with a perfect blend of traditional flavors',
          price: '12.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'King Prawn',
          description: 'Juicy king prawns cooked in a fragrant curry with a perfect balance of spices and herbs',
          price: '13.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Mix Vegetables',
          description: 'Seasonal fresh vegetables cooked in a light, aromatic curry with traditional Indian spices',
          price: '10.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Soya Meat',
          description: 'Protein-rich soya chunks cooked in a rich, spiced curry with onions, tomatoes, and herbs',
          price: '12.95 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Paneer',
          description: 'Fresh cottage cheese cubes in a rich, creamy curry with aromatic spices and herbs',
          price: '12.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Special Himalayan',
          description: 'Our signature curry with a special blend of spices, made with your choice of protein',
          price: '15.95 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    sizzler: {
      title: 'SIZZLERS',
      items: [
        {
          name: 'Paneer Shashlik',
          description: 'Chunks of paneer marinated in spices, cooked with onions & bell peppers',
          price: '12.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Chicken Tikka Sizzler',
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions',
          price: '13.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chicken Tikka Shashlik',
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions',
          price: '13.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Tikka Sizzler',
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions',
          price: '14.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Tikka Shashlik',
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions',
          price: '14.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Tandoori Chicken Sizzler',
          description: 'Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions',
          price: '11.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'King Prawn Sizzler',
          description: 'King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions',
          price: '13.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Tandoori Mix Grill',
          description: 'Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns',
          price: '15.95 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    special: {
      title: 'HOUSE SPECIAL',
      items: [
        {
          name: 'Mango Chicken',
          description: 'Boneless chicken cooked with mango pulp in traditional curry sauce',
          price: '11.95 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Methi Gosht',
          description: 'Tender pieces of lamb cooked with fenugreek, leaves, herbs & spices',
          price: '12.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chilli Chicken',
          description: 'Cooked with onions, tomatoes, cumin seeds',
          price: '14.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Butter Chicken',
          description: 'Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek',
          price: '14.50 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Chilli Paneer',
          description: 'Soft paneer cubes in a vibrant spicy sauce',
          price: '14.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Keema Mutter Masala',
          description: 'Minced meat & peas in a flavorful gravy',
          price: '14.50 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Hakka Noodles',
          description: 'Stir-fried noodles with crisp vegetables',
          price: '13.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Malai Kofta',
          description: 'Cottage cheese dumplings in a creamy tomato gravy',
          price: '14.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Butter Lamb',
          description: 'Slow-cooked lamb in a silky butter sauce',
          price: '15.50 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Chilli King Prawn',
          description: 'Jumbo prawns in a tangy chilli sauce',
          price: '15.50 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    biryani: {
      title: 'BIRYANI',
      description: 'Biryani rice cooked separately with an intensely flavoured sauce. Accompanied with curry sauce or mix riata.',
      items: [
        {
          name: 'Chicken Biryani',
          price: '10.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Chicken Tikka Biryani',
          price: '11.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Biryani',
          price: '12.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Lamb Tikka Biryani',
          price: '13.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'King Prawn Biryani',
          price: '14.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Mix Vegetables Biryani',
          price: '11.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Soya Meat Biryani',
          price: '13.95 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Paneer Biryani',
          price: '13.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Special Himalayan Biryani',
          price: '15.95 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    rice: {
      title: 'RICE',
      items: [
        {
          name: 'Plain Boiled Rice',
          description: 'Traditional white basmati rice',
          price: '3.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Pilau Rice',
          description: 'Indian basmati rice with three colours, flavoured with onions, cinnamon, cloves & herbs',
          price: '3.80 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Keema Rice',
          description: 'Basmati rice cooked with mincemeat & spices',
          price: '4.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Coconut Rice',
          description: 'Sweet basmati coconut rice served in its special colour',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Mix Vegetable Rice',
          description: 'Stir fried mix vegetable in basmati rice',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Mushroom Rice',
          description: 'Stir fried mushroom in basmati rice',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Garlic Rice',
          description: 'Basmati rice with garlic & spices',
          price: '4.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Zeera Rice',
          description: 'Basmati rice cooked with cumin & garnished with coriander',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Egg Fried Rice',
          description: 'Egg fried basmati rice',
          price: '4.50 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Onion Rice',
          description: 'Basmati rice cooked with onions',
          price: '4.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Special Fried Rice',
          description: 'Basmati rice with eggs & peas',
          price: '5.50 €',
          isVeg: false,
          isSpicy: false
        },
        {
          name: 'Himalayan Rice',
          description: 'Rice prepared in the chef´s special style with prawn, mix vegetables & touch of mint',
          price: '5.95 €',
          isVeg: false,
          isSpicy: true
        }
      ]
    },
    bread: {
      title: 'INDIAN BREADS',
      items: [
        // Naan Breads
        {
          name: 'Plain Naan',
          description: 'Naan bread slightly buttered on top',
          price: '2.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Garlic Naan',
          description: 'Naan bread topped with garlic & coriander',
          price: '3.25 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Coconut Naan',
          description: 'Naan bread topped with coconut',
          price: '3.75 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Keema Naan',
          description: 'Naan bread filled with spiced minced meat',
          price: '3.95 €',
          isVeg: false,
          isSpicy: true
        },
        {
          name: 'Peshwari Naan',
          description: 'Naan bread filled with coconut, sultanas, almonds & sugar',
          price: '3.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Cheese Naan',
          description: 'Naan bread filled with cheese',
          price: '3.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Butter Naan',
          description: 'Naan bread with butter',
          price: '3.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Onion Naan',
          description: 'Naan bread topped with fresh onions & coriander',
          price: '3.75 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Kulcha Naan',
          description: 'Topped with green & red peppers & touch of green chilli',
          price: '3.95 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Chilli Naan',
          description: 'Naan bread topped with chilli',
          price: '3.50 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Garlic Chilli Naan',
          description: 'Naan bread topped with garlic & chilli',
          price: '3.95 €',
          isVeg: true,
          isSpicy: true
        },
        {
          name: 'Garlic Cheese Naan',
          description: 'Naan bread filled with cheese & topped with garlic',
          price: '4.20 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Chilli Cheese Naan',
          description: 'Naan bread filled with cheese & topped with chilli',
          price: '4.20 €',
          isVeg: true,
          isSpicy: true
        },
        // Chapatis & Parathas
        {
          name: 'Chapati',
          description: 'Thin Indian bread',
          price: '2.50 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Butter Chapati',
          description: 'Thin Indian bread with butter',
          price: '2.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Tandoori Roti',
          description: 'Thin Indian bread cooked in tandoor',
          price: '2.95 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Plain Paratha',
          description: 'Indian bread made with layers of butter',
          price: '3.25 €',
          isVeg: true,
          isSpicy: false
        },
        {
          name: 'Aloo Paratha',
          description: 'Filled with mashed potatoes & peas with spices & butter',
          price: '3.50 €',
          isVeg: true,
          isSpicy: false
        }
      ]
    }
  };

  const renderMenuItems = (items: MenuItem[]) => {
    return (
      <div className="mt-6 space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {item.name}
                  {item.isSpicy && (
                    <span className="ml-2 text-sm text-red-500">🌶️</span>
                  )}
                  {item.isVeg && (
                    <span className="ml-2 text-sm text-green-600">🌱</span>
                  )}
                </h3>
                {item.description && (
                  <p className="mt-1 text-gray-600">{item.description}</p>
                )}
              </div>
              {item.price && (
                <span className="text-amber-700 font-medium">{item.price}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-amber-900 mb-4 font-serif">
            Our Menu
          </h1>
          <div className="h-1 w-16 bg-amber-600 mx-auto mb-8"></div>
          
          {/* Main Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex flex-wrap justify-center p-1 rounded-full shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm">
              {[
                { id: 'food', label: 'Food Menu' },
                { id: 'drinks', label: 'Drinks' },
                { id: 'wine', label: 'Wine List' }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as MenuTab)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'text-white font-bold bg-gradient-to-r from-yellow-600 to-amber-700 shadow-lg' 
                      : 'text-gray-800 hover:bg-gray-100/70 bg-white/50'
                  } rounded-full mx-1 my-1`}
                  whileHover={{ 
                    scale: activeTab === tab.id ? 1 : 1.05,
                    boxShadow: activeTab === tab.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>

          {activeTab === 'food' && (
            <>
              {/* Cuisine Selection */}
              <div className="flex justify-center mb-6">
                <div className="inline-flex p-1 rounded-full shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm">
                  {[
                    { id: 'nepali', label: 'Nepali/Himalayan' },
                    { id: 'indian', label: 'Indian' }
                  ].map((cuisine) => (
                    <motion.button
                      key={cuisine.id}
                      onClick={() => setActiveCuisine(cuisine.id as CuisineType)}
                      className={`px-6 py-2 text-sm font-medium transition-colors ${
                        activeCuisine === cuisine.id 
                          ? 'text-white font-bold bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg' 
                          : 'text-gray-800 hover:bg-gray-100/70 bg-white/50'
                      } rounded-full mx-1`}
                      whileHover={{ 
                        scale: activeCuisine === cuisine.id ? 1 : 1.05,
                        boxShadow: activeCuisine === cuisine.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      {cuisine.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Food Category Tabs - Only show for Indian menu */}
              {activeCuisine === 'indian' && (
                <div className="flex justify-center mb-8">
                  <div className="inline-flex flex-wrap justify-center p-1 rounded-full shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm">
                    {[
                      { id: 'appetizer' as const, label: 'Appetizers' },
                      { id: 'starter', label: 'Starters' },
                      { id: 'curry', label: 'Curries' },
                      { id: 'sizzler', label: 'Sizzlers' },
                      { id: 'special', label: 'Special' },
                      { id: 'sides', label: 'Sides' },
                      { id: 'biryani', label: 'Biryani' },
                      { id: 'rice', label: 'Rice' },
                      { id: 'bread', label: 'Breads' }
                    ].map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveFoodTab(tab.id as FoodTab)}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        activeFoodTab === tab.id 
                          ? 'text-white font-bold bg-gradient-to-r from-yellow-600 to-amber-700 shadow-lg' 
                          : 'text-gray-800 hover:bg-gray-100/70 bg-white/50'
                      } rounded-full mx-1 my-1`}
                      whileHover={{ 
                        scale: activeFoodTab === tab.id ? 1 : 1.05,
                        boxShadow: activeFoodTab === tab.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    >
                      {tab.label}
                    </motion.button>
                  ))}
                </div>
              </div>
              )}

              {activeCuisine === 'indian' && activeFoodTab === 'curry' ? (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-amber-800 mb-2 font-serif">Curry Selection</h2>
                    <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">{menuSections.curry.description}</p>
                    
                    {/* Curry Tabs */}
                    <div className="flex justify-center mb-8">
                      <div className="inline-flex rounded-lg border border-amber-200 bg-amber-50 p-1">
                        <button
                          onClick={() => setActiveCurryTab('proteins')}
                          className={`px-6 py-2 rounded-md transition-colors ${
                            activeCurryTab === 'proteins'
                              ? 'bg-amber-600 text-white shadow-md'
                              : 'text-amber-700 hover:bg-amber-100'
                          }`}
                        >
                          Proteins
                        </button>
                        <button
                          onClick={() => setActiveCurryTab('sauces')}
                          className={`px-6 py-2 rounded-md transition-colors ${
                            activeCurryTab === 'sauces'
                              ? 'bg-amber-600 text-white shadow-md'
                              : 'text-amber-700 hover:bg-amber-100'
                          }`}
                        >
                          Curry Sauces
                        </button>
                      </div>
                    </div>

                    {/* Content based on active tab */}
                    {activeCurryTab === 'sauces' ? (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                          {menuSections.curry.sauceTypes?.map((sauce, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className={`p-4 rounded-lg border ${sauce.isSpicy ? 'border-red-100 bg-red-50' : 'border-amber-100 bg-amber-50'}`}
                            >
                              <h3 className="font-bold text-lg text-amber-800">{sauce.name} {sauce.isSpicy && '🌶️'}</h3>
                              <p className="text-sm text-gray-600">{sauce.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-amber-800 mt-4 mb-6 font-serif text-center">Choose Your Protein</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {menuSections.curry.items.map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-bold text-lg text-amber-900">
                                    {item.name}
                                    {item.isVeg && ' 🌱'}
                                    {item.isSpicy && ' 🌶️'}
                                  </h3>
                                  <span className="font-medium text-amber-800">{item.price}</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : activeCuisine === 'nepali' ? (
                <div className="space-y-12">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-amber-800 mb-2 font-serif">Nepali/Himalayan Set Menu</h2>
                    <p className="text-xl font-medium text-amber-700">€39.99 per set</p>
                  </div>
                  {nepaliSetMenu.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm"
                    >
                      <h2 className="text-2xl font-bold text-amber-800 mb-4 font-serif border-b border-amber-200 pb-2">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="mb-4 last:mb-0">
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.name}
                              {item.isVeg && (
                                <span className="ml-2 text-sm text-green-600">🌱</span>
                              )}
                            </h3>
                            <p className="text-gray-600 mt-1">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  key={activeFoodTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-amber-800 mb-6 font-serif">
                    {menuSections[activeFoodTab].title}
                  </h2>
                  {renderMenuItems(menuSections[activeFoodTab].items)}
                </motion.div>
              )}
            </>
          )}

          {activeTab === 'drinks' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-8"
            >
              <h2 className="text-2xl font-bold text-amber-800 mb-6 font-serif text-center">
                Drinks Menu
              </h2>
              
              {/* Drink Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-amber-200 pb-4">
                {[
                  { id: 'coffeeTea' as DrinkTab, label: 'Coffee & Tea' },
                  { id: 'softDrinks' as DrinkTab, label: 'Soft Drinks' },
                  { id: 'beers' as DrinkTab, label: 'Beers' },
                  { id: 'spirits' as DrinkTab, label: 'Spirits' },
                  { id: 'cocktails' as DrinkTab, label: 'Cocktails' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDrinkTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeDrinkTab === tab.id
                        ? 'bg-amber-700 text-white'
                        : 'text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {/* Drink Content */}
              <div className="max-w-3xl mx-auto">
                {activeDrinkTab === 'coffeeTea' && (
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Coffee & Tea</h3>
                    
                    <div className="space-y-1">
                      {[
                        { name: 'EXPRESSO', price: '1,00 €' },
                        { name: 'CORTADO NATURAL', price: '1,20 €' },
                        { name: 'LECHE Y LECHE', price: '1,50 €' },
                        { name: 'AMERICANO', price: '1,80 €' },
                        { name: 'WHITE COFFEE', price: '2,50 €' },
                        { name: 'CAPUCHINO', price: '2,75 €' },
                        { name: 'BARRAQUITO', price: '2,95 €' },
                        { name: 'IRISH COFFEE', price: '4,00 €' },
                        { name: 'CARAJILLO', price: '2,50 €' },
                        { name: 'CALYPSO', price: '3,20 €' },
                        { name: 'BAILEYS COFFEE', price: '3,50 €' },
                        { name: 'TE (INFUSIONS)', price: '2,00 €' },
                        { name: 'INDIAN TEA', price: '3,50 €' },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-amber-700 font-medium">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeDrinkTab === 'softDrinks' && (
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Soft Drinks</h3>
                    
                    <div className="space-y-1">
                      {[
                        { name: 'COCA - COLA', price: '2,50 €' },
                        { name: 'COCA - COLA ZERO', price: '2,50 €' },
                        { name: 'FANTA ORANGE', price: '2,50 €' },
                        { name: 'FANTA LEMON', price: '2,50 €' },
                        { name: 'SPRITE', price: '2,50 €' },
                        { name: 'TONIC (NORMAL)', price: '2,50 €' },
                        { name: 'TONIC (ZERO)', price: '2,50 €' },
                        { name: 'TONIC (RED)', price: '2,50 €' },
                        { name: 'ICE TEA MANGO - PINEAPPLE', price: '2,50 €' },
                        { name: 'ICE TEA LEMON', price: '2,50 €' },
                        { name: 'APPLETISER', price: '3,00 €' },
                        { name: 'MANGO LASSI', price: '5,95 €' },
                        { name: 'SALTED LASSI', price: '5,95 €' },
                        { name: 'SMALL WATER', price: '1,95 €' },
                        { name: 'SPARKLING WATER', price: '2,00 €' },
                        { name: 'ORANGE JUICE', price: '2,50 €' },
                        { name: 'APPLE JUICE', price: '2,50 €' },
                        { name: 'PINEAPPLE JUICE', price: '2,50 €' },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-amber-700 font-medium whitespace-nowrap ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeDrinkTab === 'beers' && (
                  <div className="max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Beers</h3>
                    
                    <div className="space-y-1">
                      {[
                        { name: 'DORADA LARGE', price: '2,80 €' },
                        { name: 'DORADA SMALL', price: '1,95 €' },
                        { name: 'STELLA ARTOIS LARGE', price: '2,80 €' },
                        { name: 'STELLA ARTOIS SMALL', price: '1,95 €' },
                        { name: 'SHANDY LARGE', price: '3,00 €' },
                        { name: 'SHANDY SMALL', price: '2,95 €' },
                        { name: 'DORADA SPECIAL BOT.', price: '2,80 €' },
                        { name: 'DORADA SIN BOT.', price: '2,50 €' },
                        { name: 'DORADA LIMON SIN BOT.', price: '2,00 €' },
                        { name: 'CORONA', price: '3,00 €' },
                        { name: 'KOPPERBERG STRAWBERRY', price: '4,50 €' },
                        { name: 'LEFFE BLOND', price: '4,00 €' },
                        { name: 'COBRA (INDIAN)', price: '4,50 €' },
                        { name: 'KING FISHER (INDIAN)', price: '4,50 €' },
                        { name: 'GORKHA (NEPALI)', price: '5,95 €' },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <span className="text-amber-700 font-medium whitespace-nowrap ml-4">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeDrinkTab === 'spirits' && (
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Spirits</h3>
                    
                    {/* Spirit Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6 border-b border-amber-200 pb-4">
                      {[
                        { id: 'aperitifs' as SpiritTab, label: 'Aperitifs' },
                        { id: 'brandy' as SpiritTab, label: 'Brandy' },
                        { id: 'whiskey' as SpiritTab, label: 'Whiskey' },
                        { id: 'vodka' as SpiritTab, label: 'Vodka' },
                        { id: 'gin' as SpiritTab, label: 'Gin' },
                        { id: 'rum' as SpiritTab, label: 'Rum' },
                        { id: 'liqueur' as SpiritTab, label: 'Liqueur' },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveSpiritTab(tab.id)}
                          className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                            activeSpiritTab === tab.id
                              ? 'bg-amber-700 text-white'
                              : 'text-amber-800 hover:bg-amber-100'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    
                    {/* Spirit Content */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      {activeSpiritTab === 'whiskey' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">WHISKEY</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">FAMOUSE GROUSE</span>
                              <span className="text-amber-700">3,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">J & B</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">RED LABEL</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">BLACK LABEL</span>
                              <span className="text-amber-700">7,25 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">CHIVAS 12 YEARS</span>
                              <span className="text-amber-700">6,25 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">JACK DANIEL'S</span>
                              <span className="text-amber-700">5,20 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'vodka' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">VODKA</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">8848 <span className="text-sm text-gray-500 italic">(NEPAL)</span></span>
                              <span className="text-amber-700">7,20 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">ABSOLUTO</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">BELVEDERE</span>
                              <span className="text-amber-700">7,20 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">GREY GOOSE</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">SMIRNOFF</span>
                              <span className="text-amber-700">3,90 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'gin' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">GIN</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">GORDON'S</span>
                              <span className="text-amber-700">4,20 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">GORDON'S PINK</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">TANQUERAY</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">BOMBAY SAPPHIRE</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">HENDRICK'S</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'rum' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">RUM</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">KHUKURI XXX</span>
                              <span className="text-amber-700">7,90 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">KHUKURI DARK RUM</span>
                              <span className="text-amber-700">8,90 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">KHUKURI CORONATION</span>
                              <span className="text-amber-700">17,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">AREHUCHAS</span>
                              <span className="text-amber-700">3,90 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">HAVANA</span>
                              <span className="text-amber-700">5,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">MALIBU</span>
                              <span className="text-amber-700">3,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">CAPTAIN MORGAN <span className="text-sm text-gray-500 italic">(DARK RUM)</span></span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">BACARDI</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'brandy' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">Brandy</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">108</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">CARLOS I</span>
                              <span className="text-amber-700">6,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">VETERANO</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">COURVOISIER</span>
                              <span className="text-amber-700">7,50 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'aperitifs' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">Aperitifs</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">APEROL</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">CAMPARI</span>
                              <span className="text-amber-700">4,50 €</span>
                            </div>
                            <div className="flex flex-col">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">MARTINI</span>
                                <span className="text-amber-700">4,50 €</span>
                              </div>
                              <span className="text-sm text-gray-500 italic">(Bianco / Rosso / Dry)</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSpiritTab === 'liqueur' && (
                        <div>
                          <h4 className="text-lg font-medium text-amber-800 mb-4">LICOR</h4>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">BAILEYS</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">AMARETTO</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">COINTREAU</span>
                              <span className="text-amber-700">4,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">JÄGERMEISTER</span>
                              <span className="text-amber-700">4,20 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">SAMBUCA</span>
                              <span className="text-amber-700">3,95 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">TIA MARIA</span>
                              <span className="text-amber-700">3,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">TEQUILA</span>
                              <span className="text-amber-700">3,50 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">RON MIEL</span>
                              <span className="text-amber-700">3,00 €</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium">LICOR 45</span>
                              <span className="text-amber-700">3,00 €</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {activeDrinkTab === 'cocktails' && (
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Cocktails</h3>
                    <p className="text-center text-gray-600">Our selection of cocktails will be available soon.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'wine' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="py-8"
            >
              <h2 className="text-2xl font-bold text-amber-800 mb-6 font-serif text-center">
                Wine List
              </h2>
              
              {/* Wine Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-amber-200 pb-4">
                {[
                  { id: 'house' as WineTab, label: 'House Wines' },
                  { id: 'red' as WineTab, label: 'Red Wines' },
                  { id: 'white' as WineTab, label: 'White Wines' },
                  { id: 'rose' as WineTab, label: 'Rosé Wines' },
                  { id: 'prosecco' as WineTab, label: 'Prosecco' },
                  { id: 'sangria' as WineTab, label: 'Sangria' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveWineTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeWineTab === tab.id
                        ? 'bg-amber-700 text-white'
                        : 'text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Wine Content */}
              <div className="space-y-8">
                {activeWineTab === 'house' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">House Wines</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-1/2"></span>
                      <div className="flex justify-between w-1/3">
                        <span className="font-medium">GLASS</span>
                        <span className="font-medium">BOTTLE</span>
                      </div>
                    </div>
                    
                    {/* Wine Items */}
                    <div className="space-y-8">
                      {/* White Wine */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Blason Esquide White</h4>
                          <div className="flex justify-between w-1/3">
                            <span>4,50 €</span>
                            <span>14,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Rioja</p>
                          <p><span className="font-medium">Grapes:</span> Viura</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Pale green & crystalline color. Soft & delicious aroma.</p>
                        </div>
                      </div>
                      
                      {/* Red Wine */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Blason Esquide Red</h4>
                          <div className="flex justify-between w-1/3">
                            <span>4,50 €</span>
                            <span>14,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Rioja</p>
                          <p><span className="font-medium">Grape:</span> Tempranillo</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Cherry red. Fresh & fruity aroma.</p>
                        </div>
                      </div>
                      
                      {/* Rosé Wine */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Blason Esquide Rosé</h4>
                          <div className="flex justify-between w-1/3">
                            <span>4,50 €</span>
                            <span>14,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Rioja</p>
                          <p><span className="font-medium">Grapes:</span> Tempranillo, Viura, Garnacha</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Bright ruby. Soft & delicate aroma.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeWineTab === 'red' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Red Wines</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-1/2"></span>
                      <div className="flex justify-between w-1/3">
                        <span className="font-medium">GLASS</span>
                        <span className="font-medium">BOTTLE</span>
                      </div>
                    </div>
                    
                    {/* Wine Items */}
                    <div className="space-y-6">
                      {/* Lagarto Tinto */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Lagarto Tinto</h4>
                          <div className="flex justify-between w-1/3">
                            <span>5,90 €</span>
                            <span>20,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Castilla y León</p>
                          <p><span className="font-medium">Grapes:</span> Tempranillo, Mencía</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Deep red with violet rims. Floral and blackberry aromas. Smooth and silky with ripe tannins.</p>
                        </div>
                      </div>
                      
                      {/* Sembro 2019 */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Sembro 2019</h4>
                          <div className="flex justify-end w-1/3">
                            <span>24,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Ribera del Duero</p>
                          <p><span className="font-medium">Grape:</span> Tempranillo</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Deep red. Aromas of blackberry and currant. Raspberry jam finish.</p>
                        </div>
                      </div>
                      
                      {/* Acappele Crianza 2019 */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Acappele Crianza 2019</h4>
                          <div className="flex justify-end w-1/3">
                            <span>28,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Ribera del Duero</p>
                          <p><span className="font-medium">Grape:</span> Tempranillo</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Intense cherry with garnet edge. Aromas of candied fruit and sweet spices. Powerful and tasty.</p>
                        </div>
                      </div>
                      
                      {/* Viña Alzará Joven */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Viña Alzará Joven</h4>
                          <div className="flex justify-end w-1/3">
                            <span>16,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> (not specified)</p>
                          <p><span className="font-medium">Grapes:</span> Tempranillo, Graciano, Garnacha</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Ripe fruit and bright color. Traditional Rioja style.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeWineTab === 'white' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">White Wines</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-1/2"></span>
                      <div className="flex justify-between w-1/3">
                        <span className="font-medium">GLASS</span>
                        <span className="font-medium">BOTTLE</span>
                      </div>
                    </div>
                    
                    {/* Wine Items */}
                    <div className="space-y-6">
                      {/* Lagarto Blanco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Lagarto Blanco</h4>
                          <div className="flex justify-between w-1/3">
                            <span>5,90 €</span>
                            <span>20,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Castilla y León</p>
                          <p><span className="font-medium">Grape:</span> Verdejo</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Dry, fresh, and fragrant white. Aromas of green apple, mango, and passion fruit.</p>
                        </div>
                      </div>
                      
                      {/* Fraktique Sauvignon */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Fraktique Sauvignon</h4>
                          <div className="flex justify-end w-1/3">
                            <span>21,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Languedoc, France</p>
                          <p><span className="font-medium">Grapes:</span> Sauvignon Blanc 99% / Grenache Blanc 10%</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Bright pale green. Earthy fragrances and crisp fruit like kiwi, apple, and white apricot.</p>
                        </div>
                      </div>
                      
                      {/* Fraktique Chardonnay */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Fraktique Chardonnay</h4>
                          <div className="flex justify-end w-1/3">
                            <span>22,90 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Languedoc, France</p>
                          <p><span className="font-medium">Grape:</span> Chardonnay</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Bright and dense yellow. Floral and tropical aromas, with notes of pear and stone fruit. Balanced and refreshing.</p>
                        </div>
                      </div>
                      
                      {/* Le Couchon Pinot Grigio */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Le Couchon Pinot Grigio</h4>
                          <div className="flex justify-end w-1/3">
                            <span>24,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Puglia, Italy</p>
                          <p><span className="font-medium">Grape:</span> Pinot Grigio</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Flavors of green apple, kiwi, lime, and ripe citrus. Rich in flavor, good texture, and fine finish.</p>
                        </div>
                      </div>
                      
                      {/* Mar Blanco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Mar Blanco</h4>
                          <div className="flex justify-end w-1/3">
                            <span>29,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Güímar, Tenerife</p>
                          <p><span className="font-medium">Grape:</span> Listán Blanco (1300 m altitude)</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Straw-colored with greenish hues. Unfiltered, clean, fresh, and elegant. Notes of pear and pineapple.</p>
                        </div>
                      </div>
                      
                      {/* Irache Chardonnay */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Irache Chardonnay</h4>
                          <div className="flex justify-end w-1/3">
                            <span>18,90 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> D.O. Navarra</p>
                          <p><span className="font-medium">Grape:</span> Chardonnay</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Pale yellow with green highlights. Tropical and citrus aromas.</p>
                        </div>
                      </div>
                      
                      {/* Viña Sol */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Viña Sol</h4>
                          <div className="flex justify-end w-1/3">
                            <span>15,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> D.O. Catalunya</p>
                          <p><span className="font-medium">Grapes:</span> Parellada and Garnacha</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Light and bright golden color. Citrus aromas. Silky, with subtle acidity and a delicate mouthfeel.</p>
                        </div>
                      </div>
                      
                      {/* Viña Alzará Blanco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Viña Alzará Blanco</h4>
                          <div className="flex justify-end w-1/3">
                            <span>15,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Rioja</p>
                          <p><span className="font-medium">Grape:</span> Viura</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Transparent, fruity, ideal to drink very cold.</p>
                        </div>
                      </div>
                      
                      {/* Eido de Fonte */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Eido de Fonte</h4>
                          <div className="flex justify-end w-1/3">
                            <span>24,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> D.O. Rías Baixas (Subzone O Condado)</p>
                          <p><span className="font-medium">Grape:</span> 100% Albariño</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Lemon yellow with green reflections. Intense and complex aroma, with citrus notes, pear, apple, and peach.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeWineTab === 'rose' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Rosé Wines</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-1/2"></span>
                      <div className="flex justify-between w-1/3">
                        <span className="font-medium">GLASS</span>
                        <span className="font-medium">BOTTLE</span>
                      </div>
                    </div>
                    
                    {/* Wine Items */}
                    <div className="space-y-6">
                      {/* Lagarto Rosado */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Lagarto Rosado</h4>
                          <div className="flex justify-between w-1/3">
                            <span>5,90 €</span>
                            <span>20,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Castilla y León</p>
                          <p><span className="font-medium">Grape:</span> Tempranillo</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Pale pink. Fresh aromas of strawberry, pear, and peach.</p>
                        </div>
                      </div>
                      
                      {/* Irache Rosado */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Irache Rosado</h4>
                          <div className="flex justify-end w-1/3">
                            <span>17,50 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> D.O. Navarra</p>
                          <p><span className="font-medium">Grapes:</span> Tempranillo, Garnacha</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Raspberry pink. Aromas of strawberry and raspberry. Fresh, tasty, and balanced.</p>
                        </div>
                      </div>
                      
                      {/* Mateus Rosado */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Mateus Rosado</h4>
                          <div className="flex justify-end w-1/3">
                            <span>16,50 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Portugal</p>
                          <p><span className="font-medium">Grapes:</span> Baga, Rufete, Tinta Barroca, Touriga Franca</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Raspberry pink. Floral and fruity aroma. Fresh, fruity, with fine bubbles.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeWineTab === 'sangria' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Sangrias</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-1/2"></span>
                      <div className="flex justify-between w-1/3">
                        <span className="font-medium">½ L</span>
                        <span className="font-medium">1 L</span>
                      </div>
                    </div>
                    
                    {/* Sangria Items */}
                    <div className="space-y-4">
                      {/* Red Sangria */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-medium text-amber-900">• Red Sangria</h4>
                          <div className="flex justify-between w-1/3">
                            <span>8,00 €</span>
                            <span>14,00 €</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* White Sangria */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-medium text-amber-900">• White Sangria</h4>
                          <div className="flex justify-between w-1/3">
                            <span>8,00 €</span>
                            <span>14,00 €</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Cava Sangria */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-medium text-amber-900">• Cava Sangria</h4>
                          <div className="flex justify-between w-1/3">
                            <span>10,00 €</span>
                            <span>16,00 €</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="mt-6 text-sm text-gray-500 text-center">
                      All our sangrias are made with fresh fruits and quality wines
                    </p>
                  </div>
                )}
                
                {activeWineTab === 'prosecco' && (
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl font-semibold text-amber-800 mb-6 text-center">Proseccos & Sparkling Wines</h3>
                    
                    {/* Price Header */}
                    <div className="flex justify-between items-center mb-2 px-4">
                      <span className="w-2/3"></span>
                      <div className="w-1/3 text-right">
                        <span className="font-medium">BOTTLE</span>
                      </div>
                    </div>
                    
                    {/* Wine Items */}
                    <div className="space-y-6">
                      {/* Le Couchon Bubblesque Prosecco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Le Couchon Bubblesque Prosecco</h4>
                          <div className="w-1/3 text-right">
                            <span>26,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Veneto, Italy</p>
                          <p><span className="font-medium">Grapes:</span> Blend of white grapes</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Light straw yellow. Fine bubbles. Dry and slightly bitter taste.</p>
                        </div>
                      </div>
                      
                      {/* Le Couchon Brut Prosecco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Le Couchon Brut Prosecco</h4>
                          <div className="w-1/3 text-right">
                            <span>39,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Treviso, Italy</p>
                          <p><span className="font-medium">Grape:</span> Glera</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Pale straw yellow. Fine perlage. Dry and fragrant taste.</p>
                        </div>
                      </div>
                      
                      {/* Le Couchon Rosé Prosecco */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Le Couchon Rosé Prosecco</h4>
                          <div className="w-1/3 text-right">
                            <span>32,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Region:</span> Trevigiana</p>
                          <p><span className="font-medium">Grapes:</span> Glera, Pinot Nero, Raboso</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Bright pale pink. Fragrance of strawberry, raspberry, and rose. Fresh and aromatic.</p>
                        </div>
                      </div>
                      
                      {/* Cava */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Cava</h4>
                          <div className="w-1/3 text-right">
                            <span>22,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Grapes:</span> Macabeo, Xarel·lo, Parellada</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Traditional sparkling wine, ideal for celebrations.</p>
                        </div>
                      </div>
                      
                      {/* Moët & Chandon */}
                      <div className="bg-white rounded-lg shadow-sm p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium text-amber-900">Moët & Chandon</h4>
                          <div className="w-1/3 text-right">
                            <span>52,00 €</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><span className="font-medium">Origin:</span> France</p>
                          <p><span className="font-medium">Type:</span> Champagne</p>
                          <p className="italic mt-2">Tasting Notes:</p>
                          <p>Classic, elegant, and refined. Persistent and balanced bubbles.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          <motion.div 
            className="mt-12 pt-8 border-t border-amber-200 text-center text-sm text-amber-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="mb-2">
              Please inform your server of any food allergies or dietary restrictions.
            </p>
            <p className="opacity-80">
              Experience the taste of the Himalayas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimpleMenu;
