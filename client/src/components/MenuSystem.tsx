import { useState, useRef, useEffect } from 'react';
import styles from '../styles/MenuSystem.module.css';

type MainTab = 'menu' | 'drinks' | 'wine';
type FoodTab = 'nepali' | 'indian';
type DrinkTab = 'softDrinks' | 'beer' | 'wine' | 'spirits' | 'hotDrinks' | 'specialDrinks';

type DrinkMenuData = {
  [key in DrinkTab]?: readonly MenuSection[];
};

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  glassPrice?: string;
  bottlePrice?: string;
  isSpicy?: boolean;
  isVeg?: boolean;
  isPopular?: boolean;
}

interface MenuSection {
  title: string;
  description?: string;
  items: MenuItem[];
}

// Food menu data
const foodMenuData = {
  nepali: [
    {
      title: 'NEPALI FLAVOR',
      items: [
        { 
          name: 'Mo: Mo (Choose your filling)', 
          description: 'Vegan: Textured soy, cabbage, and Himalayan spices | ' +
                     'Chicken: Free-range chicken with garlic and ginger | ' +
                     'Pork: Traditional Kathmandu-style rich and gamey'
        },
        { 
          name: 'Aloo Sadeko', 
          description: 'Potato salad with lemon and toasted mustard'
        },
        { 
          name: 'Gundruk Ko Achar', 
          description: 'Fermented leafy greens adapted with kale. Served with tomato achar (spiced Nepali sauce)'
        }
      ]
    },
    {
      title: 'SOUP: REIMAGINED THUKPA / SHERPA\'S BOWL',
      items: [
        { 
          name: 'Vegan Version', 
          description: 'Shiitake and ginger broth with rice noodles'
        },
        { 
          name: 'Standard Option', 
          description: 'Chicken broth with vegetables and dhaniya ko patta (coriander)'
        },
        { 
          name: 'Kwati', 
          description: 'Mixed legumes with cumin and turmeric'
        }
      ]
    },
    {
      title: 'MAIN COURSE: THAKALI',
      items: [
        { 
          name: 'Vegan Version', 
          description: 'Soy in jimbu and tomato sauce'
        },
        { 
          name: 'Chicken Curry', 
          description: 'Bone-in curry with fenugreek seeds',
          isPopular: true
        },
        { 
          name: 'Kahsi ko Masu / Goat Curry', 
          description: 'Bone-in slow-cooked with cardamom and black pepper masala'
        }
      ]
    },
    {
      title: 'DESSERT: YOMARI & DHAU',
      items: [
        { 
          name: 'Dhau', 
          description: 'Coconut yogurt with cardamom'
        },
        { 
          name: 'Yomari', 
          description: 'Coconut and nut molasses dumpling',
          isPopular: true
        },
        { 
          name: 'Optional: Kheer', 
          description: 'Nepali-style rice pudding'
        }
      ]
    },
    {
      title: 'SET MENU',
      items: [
        { 
          name: 'Essence of Himalayan', 
          description: 'Complete 4-course dining experience',
          price: '39,99€',
          isPopular: true
        }
      ]
    }
  ],
  indian: [
    {
      title: 'APPETIZERS',
      items: [
        { name: 'Papadum', description: 'Thin Indian crispy flatbread', price: '0,90€', isVeg: true },
        { name: 'Spicy Papadum', description: 'Thin Indian crispy spicy flatbread', price: '1,00€', isVeg: true, isSpicy: true },
        { name: 'Pickle Tray', description: 'Mango chutney, Mint sauce & Chopped Onions', price: '3,50€', isVeg: true },
        { name: 'Tamarind Sauce', description: 'Bittersweet sauce from the fruit of tamarind', price: '0,90€', isVeg: true },
        { name: 'Spicy Garlic Sauce', description: 'Sauce made with fresh garlic & spicy mayonnaise', price: '0,90€', isVeg: true, isSpicy: true },
        { name: 'Mango Chutney', description: 'Mango flavor sweet sauce', price: '0,90€', isVeg: true },
        { name: 'Mint Sauce', description: 'Sauce made with fresh mint & yogurt', price: '0,90€', isVeg: true },
        { name: 'Spicy Onions', description: 'Chopped onions with cucumber & capsicum', price: '0,90€', isVeg: true, isSpicy: true },
        { name: 'Mixed Salad', price: '5,50€', isVeg: true },
        { name: 'Plain Yoghurt', price: '2,90€', isVeg: true }
      ]
    },
    {
      title: 'STARTERS',
      items: [
        { name: 'Onion Bhaji', description: 'Onions balls bound together with lightly spiced & fragrant chickpea flour batter', price: '4,25€', isVeg: true, isSpicy: true },
        { name: 'Vegetable Samosa', description: 'Triangular pastry filled with potatoes & peas, golden fried', price: '4,50€', isVeg: true },
        { name: 'Garlic Mushroom', description: 'Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice', price: '4,50€', isVeg: true, isSpicy: true },
        { name: 'Meat Samosa', description: 'Triangular pastry filled with potatoes, peas & meat, golden fried', price: '4,75€', isSpicy: true },
        { name: 'Vegetable Pakora', description: 'Sliced vegetables wrapped in batter & deep fried', price: '4,50€', isVeg: true },
        { name: 'Chicken Pakora', description: 'Marinated chicken pieces in a batter, golden fried', price: '4,25€', isSpicy: true },
        { name: 'Chicken Puri', description: 'Chicken cooked & served on deep fried round bread', price: '5,50€' },
        { name: 'King Prawn Puri', description: 'King prawn cooked with ginger-garlic & served on deep fried round bread', price: '5,95€' },
        { name: 'Garlic Chicken', description: 'Chicken cooked with garlic & lemon', price: '5,95€' },
        { name: 'Chicken Lollipop', description: 'Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix', price: '5,50€', isSpicy: true },
        { name: 'Hot Chicken Wings', description: 'Spicy, juicy wings coated in a fiery marinade that packs a punch', price: '5,50€', isSpicy: true, isPopular: true },
        { name: 'Chicken Tikka', description: 'Boneless chicken pieces marinated in spicy yogurt cooked in a tandoor', price: '4,50€', isSpicy: true },
        { name: 'Tandoor Chicken', description: 'Chicken leg piece marinated in a spicy yogurt cooked in tandoor', price: '5,50€', isSpicy: true },
        { name: 'Pudina Tikka', description: 'Boneless chicken pieces marinated with mint, ginger & cooked in tandoor', price: '5,50€', isSpicy: true },
        { name: 'Lamb Tikka', description: 'Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor', price: '6,50€', isSpicy: true },
        { name: 'Barra Kebab', description: 'Succulent lamb chop marinated in yogurt & spices, flame-grilled for a smoky bite', price: '5,50€', isSpicy: true },
        { name: 'Sheek Kebab', description: 'Minced lamb marinated with spiced, ginger, coriander & cooked on skewers in a tandoor', price: '5,50€', isSpicy: true },
        { name: 'Garlic King Prawn', description: 'Grilled king prawn cooked with garlic & lemon', price: '5,90€' },
        { name: 'Special Himalayan', description: 'Includes: Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka', price: '15,90€', isPopular: true }
      ]
    },
    {
      title: 'PROTEINS',
      description: 'Dish from the cuisine of the Indian subcontinent which combines the use of a varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique.',
      items: [
        { name: 'Chicken', price: '9,95€' },
        { name: 'Chicken Tikka', price: '10,95€', isSpicy: true },
        { name: 'Lamb', price: '11,95€' },
        { name: 'Lamb Tikka', price: '12,95€', isSpicy: true },
        { name: 'King Prawn', price: '13,95€' },
        { name: 'Mix Vegetables', price: '10,95€', isVeg: true },
        { name: 'Soya Meat', price: '12,95€', isVeg: true },
        { name: 'Paneer', price: '12,95€', isVeg: true },
        { name: 'Special Himalayan', price: '15,95€', isPopular: true }
      ]
    },
    {
      title: 'CURRY SAUCE',
      items: [
        { 
          name: 'Masala', 
          description: 'Masala curry is one of the most popular dishes with a mild flavor but rich in cream & almond.',
          isVeg: true
        },
        { 
          name: 'Koram', 
          description: 'Mild curry consisting of cream grated coconut.',
          isVeg: true
        },
        { 
          name: 'Balti', 
          description: 'Balti sauce is based on green peppers, garlic & onions with turmeric & garam masala among other spices.',
          isSpicy: true
        },
        { 
          name: 'Bhuna', 
          description: 'Made with chopped onions, roasted red and green peppers, coriander seeds, ginger garlic coriander & fenugreek leaves.',
          isSpicy: true
        },
        { 
          name: 'Curry', 
          description: 'Classic curry with fresh tomatoes & red onions in smooth sauce decorated with coriander.',
          isVeg: true
        },
        { 
          name: 'Dhansak', 
          description: 'Combines elements of Persian & Gujarati cuisine. Made with lentils, ginger, garlic, coconut, pineapple & fresh coriander.',
          isVeg: true
        },
        { 
          name: 'Dopiaza', 
          description: 'Dopiaza curry sauce is based on onions family (brown onions, chives & spring onions)',
          isVeg: true
        },
        { 
          name: 'Jalfrezi', 
          description: 'Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream.',
          isSpicy: true
        },
        { 
          name: 'Karahi', 
          description: 'Prepared in special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic.',
          isSpicy: true
        },
        { 
          name: 'Pathia', 
          description: 'Pathia is an ancient parsi cuisine from Persia. It´s better sweet flavored with a touch of coconut.',
          isVeg: true
        },
        { 
          name: 'Rogan Josh', 
          description: 'A Kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander.',
          isSpicy: true
        },
        { 
          name: 'Saag', 
          description: 'Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream.',
          isVeg: true
        },
        { 
          name: 'Manchuria', 
          description: 'Fresh mint in semi-dry sauce with tomatoes, lemon juice & garam masala.',
          isVeg: true
        },
        { 
          name: 'Jai Puri', 
          description: 'Semi dense curry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander.',
          isVeg: true
        }
      ]
    },
    {
      title: 'SIZZLERS',
      items: [
        { 
          name: 'Paneer Shashlik', 
          description: 'Chunks of paneer marinated in spices, cooked with onions & bell peppers.',
          price: '12,95€',
          isVeg: true
        },
        { 
          name: 'Chicken Tikka Sizzler', 
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions.',
          price: '13,95€',
          isSpicy: true
        },
        { 
          name: 'Chicken Tikka Shashlik', 
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions.',
          price: '13,95€',
          isSpicy: true
        },
        { 
          name: 'Lamb Tikka Sizzler', 
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions.',
          price: '14,50€',
          isSpicy: true
        },
        { 
          name: 'Lamb Tikka Shashlik', 
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions.',
          price: '14,50€',
          isSpicy: true
        },
        { 
          name: 'Tandoori Chicken Sizzler', 
          description: 'Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions.',
          price: '11,50€',
          isSpicy: true
        },
        { 
          name: 'King Prawn Sizzler', 
          description: 'King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions.',
          price: '13,95€',
          isSpicy: true
        },
        { 
          name: 'Tandoori Mix Grill', 
          description: 'Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns.',
          price: '15,95€',
          isPopular: true
        }
      ]
    },
    {
      title: 'HOUSE SPECIAL',
      items: [
        { 
          name: 'Mango Chicken', 
          description: 'Boneless chicken cooked with mango pulp in traditional curry sauce.',
          price: '11,95€',
          isPopular: true
        },
        { 
          name: 'Methi Gosht', 
          description: 'Tender pieces of lamb cooked with fenugreek leaves, herbs & spices.',
          price: '12,95€',
          isSpicy: true
        },
        { 
          name: 'Chilli Chicken', 
          description: 'Cooked with onions, tomatoes, cumin seeds.',
          price: '14,50€',
          isSpicy: true
        },
        { 
          name: 'Butter Chicken', 
          description: 'Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek.',
          price: '14,50€',
          isPopular: true
        },
        { 
          name: 'Chilli Paneer', 
          description: 'Soft paneer cubes in a vibrant spicy sauce.',
          price: '14,50€',
          isVeg: true,
          isSpicy: true
        },
        { 
          name: 'Keema Mutter Masala', 
          description: 'Minced meat & peas in a flavorful gravy.',
          price: '14,50€',
          isSpicy: true
        },
        { 
          name: 'Hakka Noodles', 
          description: 'Stir-fried noodles with crisp vegetables.',
          price: '13,50€',
          isVeg: true
        },
        { 
          name: 'Malai Kofta', 
          description: 'Cottage cheese dumplings in a creamy tomato gravy.',
          price: '14,50€',
          isVeg: true
        },
        { 
          name: 'Butter Lamb', 
          description: 'Slow-cooked lamb in a silky butter sauce.',
          price: '15,50€',
          isPopular: true
        },
        { 
          name: 'Chilli King Prawn', 
          description: 'Jumbo prawns in a tangy chilli sauce.',
          price: '15,50€',
          isSpicy: true
        }
      ]
    },
    {
      title: 'SIDES',
      items: [
        { 
          name: 'Bombay Aloo', 
          description: 'Classic potatoes curry served in a semi dry sauce & flavored with various spices as cumin, turmeric & garam masala.',
          price: '7,90€',
          isVeg: true
        },
        { 
          name: 'Aubergine Bhaji', 
          description: 'Aubergine cooked in a tandoor then peeled in a semi spicy curry base.',
          price: '7,90€',
          isVeg: true,
          isSpicy: true
        },
        { 
          name: 'Aloo Gobi', 
          description: 'Potatoes & cauliflower curry served in a semi dry sauce.',
          price: '8,50€',
          isVeg: true
        },
        { 
          name: 'Saag Aloo', 
          description: 'Spinach curry with potatoes, spices & touch of cream.',
          price: '7,90€',
          isVeg: true
        },
        { 
          name: 'Saag Bhaji', 
          description: 'Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish.',
          price: '7,90€',
          isVeg: true
        },
        { 
          name: 'Palak Paneer', 
          description: 'Homemade cheese cooked with spinach & seasoned with garlic, garam masala.',
          price: '9,95€',
          isVeg: true
        },
        { 
          name: 'Mutter Paneer', 
          description: 'Soft paneer & green peas in a luscious tomato-based sauce.',
          price: '9,95€',
          isVeg: true
        },
        { 
          name: 'Tadka Daal', 
          description: 'Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander.',
          price: '7,90€',
          isVeg: true
        },
        { 
          name: 'Daal Makhni', 
          description: 'Daal makhni is a classic north Indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce.',
          price: '8,50€',
          isVeg: true
        },
        { 
          name: 'Chana Masala', 
          description: 'Chickpeas cooked with tomatoes, garlic, onions, & various spices such as turmeric & garam masala.',
          price: '8,50€',
          isVeg: true
        },
        { 
          name: 'Mushroom Bhaji', 
          description: 'Sliced mushroom, cooked with onions & spices.',
          price: '9,95€',
          isVeg: true
        }
      ]
    },
    {
      title: 'BIRYANI',
      description: 'Biryani rice cooked separately with an intensely flavored sauce. Accompanied with curry sauce or mix raita.',
      items: [
        { name: 'Chicken', price: '10,95€' },
        { name: 'Chicken Tikka', price: '11,95€', isSpicy: true },
        { name: 'Lamb', price: '12,95€' },
        { name: 'Lamb Tikka', price: '13,95€', isSpicy: true },
        { name: 'King Prawn', price: '14,95€' },
        { name: 'Mix Vegetables', price: '11,95€', isVeg: true },
        { name: 'Soya Meat', price: '13,95€', isVeg: true },
        { name: 'Paneer', price: '13,95€', isVeg: true },
        { name: 'Special Himalayan', price: '15,95€', isPopular: true }
      ]
    },
    {
      title: 'RICE',
      items: [
        { 
          name: 'Plain Boiled Rice', 
          description: 'Traditional white basmati rice.', 
          price: '3,50€', 
          isVeg: true 
        },
        { 
          name: 'Pilau Rice', 
          description: 'Indian basmati rice with three colors. Flavored with onions, cinnamon, cloves & herbs.', 
          price: '3,80€', 
          isVeg: true 
        },
        { 
          name: 'Keema Rice', 
          description: 'Basmati rice cooked with mincemeat & spices.', 
          price: '4,95€'
        },
        { 
          name: 'Coconut Rice', 
          description: 'Sweet basmati coconut rice served in its special color.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Mix Vegetable Rice', 
          description: 'Stir fried mix vegetable in basmati rice.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Mushroom Rice', 
          description: 'Stir fried mushroom in basmati rice.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Garlic Rice', 
          description: 'Basmati rice with garlic & spices.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Zeera Rice', 
          description: 'Basmati rice cooked with cumin & garnished with coriander.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Egg Fried Rice', 
          description: 'Egg fried basmati rice.', 
          price: '4,50€' 
        },
        { 
          name: 'Onion Rice', 
          description: 'Basmati rice cooked with onions.', 
          price: '4,50€', 
          isVeg: true 
        },
        { 
          name: 'Special Fried Rice', 
          description: 'Basmati rice with eggs & peas.', 
          price: '5,50€',
          isPopular: true
        },
        { 
          name: 'Special Himalayan Rice', 
          description: 'Rice prepared in the chef\'s special style with prawn, mix vegetables & touch of mint.', 
          price: '5,95€',
          isPopular: true
        }
      ]
    },
    {
      title: 'NAAN BREAD',
      items: [
        { 
          name: 'Plain Naan', 
          description: 'Naan Bread slightly buttered on top.', 
          price: '2,95€', 
          isVeg: true 
        },
        { 
          name: 'Garlic Naan', 
          description: 'Naan bread topped with garlic & coriander.', 
          price: '3,25€',
          isVeg: true
        },
        { 
          name: 'Coconut Naan', 
          description: 'Naan bread topped with coconut.', 
          price: '3,75€',
          isVeg: true
        },
        { 
          name: 'Keema Naan', 
          description: 'Naan bread filled with spiced minced meat.', 
          price: '3,95€'
        },
        { 
          name: 'Peshwari Naan', 
          description: 'Naan bread filled with coconut, sultanas, almonds & sugar.', 
          price: '3,95€',
          isVeg: true,
          isPopular: true
        },
        { 
          name: 'Cheese Naan', 
          description: 'Naan bread filled with cheese.', 
          price: '3,95€',
          isVeg: true
        },
        { 
          name: 'Butter Naan', 
          description: 'Buttery naan bread.', 
          price: '3,50€',
          isVeg: true
        },
        { 
          name: 'Onion Naan', 
          description: 'Naan bread topped with fresh onions & coriander.', 
          price: '3,75€',
          isVeg: true
        },
        { 
          name: 'Kulcha Naan', 
          description: 'Topped with green & red peppers & touch of green chilli.', 
          price: '3,95€',
          isVeg: true,
          isSpicy: true
        },
        { 
          name: 'Chilli Naan', 
          description: 'Naan bread topped with chilli.', 
          price: '3,50€',
          isVeg: true,
          isSpicy: true
        },
        { 
          name: 'Garlic Chilli Naan', 
          description: 'Naan bread topped with garlic & chilli.', 
          price: '3,95€',
          isVeg: true,
          isSpicy: true
        },
        { 
          name: 'Garlic Cheese Naan', 
          description: 'Naan bread filled with cheese & topped with garlic.', 
          price: '4,20€',
          isVeg: true
        },
        { 
          name: 'Chilli Cheese Naan', 
          description: 'Naan bread filled with cheese & topped with chilli.', 
          price: '4,20€',
          isVeg: true,
          isSpicy: true
        }
      ]
    },
    {
      title: 'CHAPATIS & PARATHAS',
      items: [
        { 
          name: 'Chapati', 
          description: 'Thin Indian bread.', 
          price: '2,50€', 
          isVeg: true 
        },
        { 
          name: 'Butter Chapati', 
          description: 'Thin Indian bread with butter.', 
          price: '2,95€', 
          isVeg: true 
        },
        { 
          name: 'Tandoori Roti', 
          description: 'Thin Indian bread cooked in tandoor.', 
          price: '2,95€', 
          isVeg: true 
        },
        { 
          name: 'Plain Paratha', 
          description: 'Indian bread made with layers of butter.', 
          price: '3,25€', 
          isVeg: true 
        },
        { 
          name: 'Aloo Paratha', 
          description: 'Filled with mashed potatoes & peas with spices & butter.', 
          price: '3,50€', 
          isVeg: true 
        }
      ]
    }
  ]
};

// Drink menu data
const drinkMenuData: DrinkMenuData = {
  softDrinks: [
    {
      title: 'SOFT DRINKS',
      items: [
        { name: 'Coca-Cola', price: '2,50 €' },
        { name: 'Coca-Cola Zero', price: '2,50 €' },
        { name: 'Fanta Orange', price: '2,50 €' },
        { name: 'Fanta Lemon', price: '2,50 €' },
        { name: 'Sprite', price: '2,50 €' },
        { name: 'Tonic (Normal)', price: '2,50 €' },
        { name: 'Tonic (Zero)', price: '2,50 €' },
        { name: 'Tonic (Red)', price: '2,50 €' },
        { name: 'Ice Tea Mango-Pineapple', price: '2,50 €' },
        { name: 'Ice Tea Lemon', price: '2,50 €' },
        { name: 'Appletiser', price: '3,00 €' },
        { name: 'Mango Lassi', description: 'Sweet yogurt drink with mango', price: '5,95 €' },
        { name: 'Salted Lassi', description: 'Refreshing yogurt drink with a touch of salt', price: '5,95 €' },
        { name: 'Small Water', price: '1,95 €' },
        { name: 'Sparkling Water', price: '2,00 €' },
        { name: 'Orange Juice', price: '2,50 €' },
        { name: 'Apple Juice', price: '2,50 €' },
        { name: 'Pineapple Juice', price: '2,50 €' }
      ]
    },
  ],
  beer: [
    {
      title: 'BEER',
      items: [
        { name: 'Dorada (Large)', price: '2,80 €' },
        { name: 'Dorada (Small)', price: '1,95 €' },
        { name: 'Stella Artois (Large)', price: '2,80 €' },
        { name: 'Stella Artois (Small)', price: '1,95 €' },
        { name: 'Shandy (Large)', price: '3,00 €' },
        { name: 'Shandy (Small)', price: '2,95 €' },
        { name: 'Dorada Special (Bottle)', price: '2,80 €' },
        { name: 'Dorada Sin (Bottle)', price: '2,50 €' },
        { name: 'Dorada Limón Sin (Bottle)', price: '2,00 €' },
        { name: 'Corona', price: '3,00 €' },
        { name: 'Kopparberg Strawberry', price: '4,50 €' },
        { name: 'Leffe Blond', price: '4,00 €' },
        { name: 'Cobra (Indian)', price: '4,50 €' },
        { name: 'Kingfisher (Indian)', price: '4,50 €' },
        { name: 'Gorkha (Nepali)', price: '5,95 €' }
      ]
    }
  ],
  hotDrinks: [
    {
      title: 'COFFEE & TEA',
      items: [
        { name: 'Espresso', price: '1,00 €' },
        { name: 'Cortado Natural', price: '1,20 €' },
        { name: 'Leche y Leche', price: '1,50 €' },
        { name: 'Americano', price: '1,80 €' },
        { name: 'White Coffee', price: '2,50 €' },
        { name: 'Cappuccino', price: '2,75 €' },
        { name: 'Barraquito', price: '2,95 €' },
        { name: 'Irish Coffee', price: '4,00 €' },
        { name: 'Carajillo', price: '2,50 €' },
        { name: 'Calypso', price: '3,20 €' },
        { name: 'Baileys Coffee', price: '3,50 €' },
        { name: 'Tea (Infusions)', price: '2,00 €' },
        { name: 'Indian Tea', price: '3,50 €' }
      ]
    }
  ],
  spirits: [
    {
      title: 'APERITIFS',
      items: [
        { name: 'Aperol', price: '4,50 €' },
        { name: 'Campari', price: '4,50 €' },
        { 
          name: 'Martini', 
          description: 'Bianco / Rosso / Dry',
          price: '4,50 €' 
        }
      ]
    },
    {
      title: 'BRANDY',
      items: [
        { name: '108', price: '4,50 €' },
        { name: 'Carlos I', price: '6,95 €' },
        { name: 'Veterano', price: '4,50 €' },
        { name: 'Courvoisier', price: '7,50 €' }
      ]
    },
    {
      title: 'LIQUEURS',
      items: [
        { name: 'Baileys', price: '4,95 €' },
        { name: 'Amaretto', price: '4,95 €' },
        { name: 'Cointreau', price: '4,95 €' },
        { name: 'Jägermeister', price: '4,20 €' },
        { name: 'Sambuca', price: '3,95 €' },
        { name: 'Tia Maria', price: '3,50 €' },
        { name: 'Tequila', price: '3,50 €' },
        { name: 'Ron Miel', price: '3,00 €' },
        { name: 'Licor 43', price: '3,00 €' }
      ]
    },
    {
      title: 'RUM',
      items: [
        { name: 'Khukuri XXX', price: '7,90 €' },
        { name: 'Khukuri Dark Rum', price: '8,90 €' },
        { name: 'Khukuri Coronation', price: '17,95 €' },
        { name: 'Arehucas', price: '3,90 €' },
        { name: 'Havana', price: '5,95 €' },
        { name: 'Malibu', price: '3,50 €' },
        { name: 'Bacardi', price: '4,50 €' },
        { 
          name: 'Captain Morgan', 
          description: 'Dark Rum',
          price: '4,95 €' 
        }
      ]
    },
    {
      title: 'WHISKEY',
      items: [
        { name: 'Famous Grouse', price: '3,50 €' },
        { name: 'J & B', price: '4,50 €' },
        { name: 'Red Label', price: '4,50 €' },
        { name: 'Black Label', price: '7,25 €' },
        { name: 'Chardu 12 Years', price: '6,25 €' },
        { name: 'Jack Daniel\'s', price: '5,20 €' }
      ]
    },
    {
      title: 'VODKA',
      items: [
        { name: '8848 (Nepal)', price: '7,20 €' },
        { name: 'Absolut', price: '4,50 €' },
        { name: 'Belvedere', price: '7,20 €' },
        { name: 'Grey Goose', price: '4,95 €' },
        { name: 'Smirnoff', price: '3,90 €' }
      ]
    },
    {
      title: 'GIN',
      items: [
        { name: 'Gordon\'s', price: '4,20 €' },
        { name: 'Gordon\'s Pink', price: '4,50 €' },
        { name: 'Tanqueray', price: '4,95 €' },
        { name: 'Bombay', price: '4,95 €' },
        { name: 'Hendrick\'s', price: '4,95 €' }
      ]
    }
  ],
};

// Wine menu data
const wineMenuData = [
  {
    title: 'HOUSE WINE',
    items: [
      { 
        name: 'Blason Esquide White',
        description: 'Region: Rioja\nGrapes: Viura\nTasting Notes: Pale green & crystalline color. Soft & delicious aroma.',
        glassPrice: '4,50 €',
        bottlePrice: '14,00 €'
      },
      { 
        name: 'Blason Esquide Red',
        description: 'Region: Rioja\nGrape: Tempranillo\nTasting Notes: Cherry red. Fresh & fruity aroma.',
        glassPrice: '4,50 €',
        bottlePrice: '14,00 €'
      },
      { 
        name: 'Blason Esquide Rosé',
        description: 'Region: Rioja\nGrapes: Tempranillo, Viura, Garnacha\nTasting Notes: Bright ruby. Soft & delicate aroma.',
        glassPrice: '4,50 €',
        bottlePrice: '14,00 €'
      }
    ]
  },
  {
    title: 'WHITE WINE',
    items: [
      { 
        name: 'Lagarto Blanco',
        description: 'Region: Castilla y León\nGrape: Verdejo\nTasting Notes: Dry, fresh, and fragrant white. Aromas of green apple, mango, and passion fruit.',
        glassPrice: '6,90 €',
        bottlePrice: '20,00 €',
        isPopular: true
      },
      { 
        name: 'Fraktique Sauvignon',
        description: 'Region: Languedoc, France\nGrapes: Sauvignon Blanc 99% / Grenache Blanc 1%\nTasting Notes: Bright pale green. Earthy fragrances and crisp fruit like kiwi, apple, and white apricot.',
        bottlePrice: '21,00 €'
      },
      { 
        name: 'Fraktique Chardonnay',
        description: 'Region: Languedoc, France\nGrape: Chardonnay\nTasting Notes: Bright and dense yellow. Floral and tropical aromas, with notes of pear and stone fruit. Balanced and refreshing.',
        bottlePrice: '22,90 €',
        isPopular: true
      },
      { 
        name: 'Le Couchon Pinot Grigio',
        description: 'Region: Puglia, Italy\nGrape: Pinot Grigio\nTasting Notes: Flavors of green apple, kiwi, lime, and ripe citrus. Rich in flavor, good texture, and fine finish.',
        bottlePrice: '24,00 €'
      },
      { 
        name: 'Mar Blanco',
        description: 'Region: Güímar, Tenerife\nGrape: Listán Blanco (1300 m altitude)\nTasting Notes: Straw-colored with greenish hues. Unfiltered, clean, fresh, and elegant. Notes of pear and pineapple.',
        bottlePrice: '29,00 €',
        isPopular: true
      },
      { 
        name: 'Irache Chardonnay',
        description: 'Region: D.O. Navarra\nGrape: Chardonnay\nTasting Notes: Pale yellow with green highlights. Tropical and citrus aromas.',
        bottlePrice: '18,90 €'
      },
      { 
        name: 'Viña Sol',
        description: 'Region: D.O. Catalunya\nGrapes: Parellada and Garnacha\nTasting Notes: Light and bright golden color. Citrus aromas. Silky, with subtle acidity and a delicate mouthfeel.',
        bottlePrice: '15,00 €'
      },
      { 
        name: 'Viña Alzará Blanco',
        description: 'Region: Rioja\nGrape: Viura\nTasting Notes: Transparent, fruity, ideal to drink very cold.',
        bottlePrice: '15,00 €'
      },
      { 
        name: 'Eido de Fonte',
        description: 'Region: D.O. Rías Baixas (Subzone O Condado)\nGrape: 100% Albariño\nTasting Notes: Lemon yellow with green reflections. Intense and complex aroma, with citrus notes, pear, apple, and peach.',
        bottlePrice: '24,00 €',
        isPopular: true
      }
    ]
  },
  {
    title: 'RED WINE',
    items: [
      { 
        name: 'Lagarto Tinto',
        description: 'Region: Castilla y León\nGrapes: Tempranillo, Mencía\nTasting Notes: Deep red with violet rims. Floral and blackberry aromas. Smooth and silky with ripe tannins.',
        glassPrice: '6,90 €',
        bottlePrice: '20,00 €',
        isPopular: true
      },
      { 
        name: 'Sembro 2019',
        description: 'Region: Ribera del Duero\nGrape: Tempranillo\nTasting Notes: Deep red. Aromas of blackberry and currant. Raspberry jam finish.',
        bottlePrice: '24,00 €'
      },
      { 
        name: 'Acappele Crianza 2019',
        description: 'Region: Ribera del Duero\nGrape: Tempranillo\nTasting Notes: Intense cherry with garnet edge. Aromas of candied fruit and sweet spices. Powerful and tasty.',
        bottlePrice: '28,00 €',
        isPopular: true
      },
      { 
        name: 'Viña Alzará Joven',
        description: 'Grapes: Tempranillo, Graciano, Garnacha\nTasting Notes: Ripe fruit and bright color. Traditional Rioja style.',
        bottlePrice: '16,00 €'
      }
    ]
  },
  {
    title: 'ROSÉ WINE',
    items: [
      { 
        name: 'Lagarto Rosado',
        description: 'Region: Castilla y León\nGrape: Tempranillo\nTasting Notes: Pale pink. Fresh aromas of strawberry, pear, and peach.',
        glassPrice: '6,90 €',
        bottlePrice: '20,00 €',
        isPopular: true
      },
      { 
        name: 'Irache Rosado',
        description: 'Region: D.O. Navarra\nGrapes: Tempranillo, Garnacha\nTasting Notes: Raspberry pink. Aromas of strawberry and raspberry. Fresh, tasty, and balanced.',
        bottlePrice: '17,50 €'
      },
      { 
        name: 'Mateus Rosado',
        description: 'Region: Portugal\nGrapes: Baga, Rufete, Tinta Barroca, Touriga Franca\nTasting Notes: Raspberry pink. Floral and fruity aroma. Fresh, fruity, with fine bubbles.',
        bottlePrice: '16,50 €',
        isPopular: true
      }
    ]
  },
  {
    title: 'PROSECCO & SPARKLING WINE',
    items: [
      { 
        name: 'Le Couchon Bubblesque Prosecco',
        description: 'Region: Veneto, Italy\nGrapes: Blend of white grapes\nTasting Notes: Light straw yellow. Fine bubbles. Dry and slightly bitter taste.',
        bottlePrice: '26,00 €',
        isPopular: true
      },
      { 
        name: 'Le Couchon Brut Prosecco',
        description: 'Region: Treviso, Italy\nGrape: Glera\nTasting Notes: Pale straw yellow. Fine perlage. Dry and fragrant taste.',
        bottlePrice: '39,00 €'
      },
      { 
        name: 'Le Couchon Rosé Prosecco',
        description: 'Region: Trevigiana\nGrapes: Glera, Pinot Nero, Raboso\nTasting Notes: Bright pale pink. Fragrance of strawberry, raspberry, and rose. Fresh and aromatic.',
        bottlePrice: '32,00 €',
        isPopular: true
      },
      { 
        name: 'Cava',
        description: 'Grapes: Macabeo, Xarel·lo, Parellada\nTasting Notes: Traditional sparkling wine, ideal for celebrations.',
        bottlePrice: '22,00 €'
      },
      { 
        name: 'Moët & Chandon',
        description: 'Origin: France\nType: Champagne\nTasting Notes: Classic, elegant, and refined. Persistent and balanced bubbles.',
        bottlePrice: '52,00 €',
        isPopular: true
      }
    ]
  },
  {
    title: 'SANGRIA',
    items: [
      { 
        name: 'Red Sangria',
        description: 'A refreshing blend of red wine, fresh fruits, and a touch of brandy.',
        glassPrice: '8,00 €',
        bottlePrice: '14,00 €',
        isPopular: true
      },
      { 
        name: 'White Sangria',
        description: 'Lighter version with white wine, citrus fruits, and a splash of soda.',
        glassPrice: '8,00 €',
        bottlePrice: '14,00 €',
        isPopular: true
      },
      { 
        name: 'Cava Sangria',
        description: 'Sparkling twist on the classic, made with Spanish Cava and fresh berries.',
        glassPrice: '10,00 €',
        bottlePrice: '16,00 €',
        isPopular: true
      }
    ]
  }
];

const MenuSystem = () => {
  const [activeTab, setActiveTab] = useState<MainTab>('menu');
  const [foodTab, setFoodTab] = useState<FoodTab>('nepali');
  const [drinkTab, setDrinkTab] = useState<DrinkTab>('softDrinks');
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Handle mobile menu close if needed
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderMenuItem = (item: MenuItem, index: number, isWineSection = false) => (
    <div key={index} className={styles.menuItem}>
      <div className={styles.itemHeader}>
        <h3 className={styles.itemName}>
          {item.name}
          {item.isSpicy && ' 🌶️'}
          {item.isVeg && ' 🌱'}
          {item.isPopular && ' ★'}
        </h3>
        {isWineSection ? (
          <div className={styles.winePrices}>
            {item.glassPrice && <span className={styles.winePrice}>{item.glassPrice}</span>}
            {item.bottlePrice && <span className={styles.winePrice}>{item.bottlePrice}</span>}
          </div>
        ) : (
          item.price && <span className={styles.itemPrice}>{item.price}</span>
        )}
      </div>
      {item.description && (
        <p className={styles.itemDescription}>{item.description}</p>
      )}
    </div>
  );

  const renderMenuSection = (section: MenuSection, index: number, isWineSection = false) => (
    <div key={index} className={styles.menuSection}>
      <h2 className={styles.sectionTitle}>
        {section.title}
      </h2>
      {section.description && (
        <p className={styles.sectionDescription}>{section.description}</p>
      )}
      {isWineSection && (
        <div className={styles.wineHeader}>
          <span className={styles.winePriceLabel}>Glass</span>
          <span className={styles.winePriceLabel}>Bottle</span>
        </div>
      )}
      <div className={styles.menuItems}>
        {section.items.map((item, idx) => renderMenuItem(item, idx, isWineSection))}
      </div>
    </div>
  );

  return (
    <div ref={menuRef} className={styles.menuContainer}>
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Main Tabs */}
      <nav className={styles.tabNav}>
        <button
          onClick={() => setActiveTab('menu')}
          className={`${styles.tabButton} ${activeTab === 'menu' ? styles.active : ''}`}
        >
          Food Menu
        </button>
        <button
          onClick={() => setActiveTab('drinks')}
          className={`${styles.tabButton} ${activeTab === 'drinks' ? styles.active : ''}`}
        >
          Drinks
        </button>
        <button
          onClick={() => setActiveTab('wine')}
          className={`${styles.tabButton} ${activeTab === 'wine' ? styles.active : ''}`}
        >
          Wine List
        </button>
      </nav>

      {/* Food Menu Tab */}
      {activeTab === 'menu' && (
        <div className={styles.menuContent}>
          {/* Food Category Tabs */}
          <div className={styles.categoryTabs}>
            <button
              onClick={() => setFoodTab('nepali')}
              className={`${styles.categoryTab} ${foodTab === 'nepali' ? styles.active : ''}`}
            >
              Nepali Dishes
            </button>
            <button
              onClick={() => setFoodTab('indian')}
              className={`${styles.categoryTab} ${foodTab === 'indian' ? styles.active : ''}`}
            >
              Indian Dishes
            </button>
          </div>
          
          {/* Menu Content */}
          <div className={styles.menuGrid}>
            {foodMenuData[foodTab].map((section, index) => (
              <div key={`${foodTab}-${index}`} className={styles.menuSection}>
                {renderMenuSection(section, index)}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Drinks Tab */}
      {activeTab === 'drinks' && (
        <div className={styles.menuContent}>
          {/* Drinks Category Tabs */}
          <div className={styles.categoryTabs}>
            {Object.keys(drinkMenuData).map((tab) => (
              <button
                key={tab}
                onClick={() => setDrinkTab(tab as DrinkTab)}
                className={`${styles.categoryTab} ${drinkTab === tab ? styles.active : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>
          
          {/* Drinks Content */}
          <div className={styles.menuGrid}>
            {drinkMenuData[drinkTab]?.map((section: MenuSection, index: number) => (
              <div key={`drinks-${index}`} className={styles.menuSection}>
                {renderMenuSection(section, index)}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Wine List Tab */}
      {activeTab === 'wine' && (
        <div className={styles.menuContent}>
          <div className={styles.menuGrid}>
            {wineMenuData.map((section, index) => (
              <div key={`wine-${index}`} className={styles.menuSection}>
                {renderMenuSection(section, index, true)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSystem;

export type { MenuItem, MenuSection };
