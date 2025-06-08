import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 30
};

interface MenuItem {
  name: string;
  price?: string;  // Made optional with ?
  description?: string;
  isVeg?: boolean;
  isSpicy?: boolean;
  details?: string[];
  glass?: string;
  bottle?: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  description?: string;
}

type MainTab = 'food' | 'drinks' | 'wine';
type FoodSubTab = 'nepali' | 'indian' | 'coffee';

type DrinkTab = 'soft' | 'beer' | 'coffee' | 'spirits' | 'cocktails';

const SimpleMenu = () => {
  const [activeMainTab, setActiveMainTab] = useState<MainTab>('food');
  const [activeFoodTab, setActiveFoodTab] = useState<FoodSubTab>('nepali');
  const [activeDrinkTab, setActiveDrinkTab] = useState<DrinkTab>('soft');

  // Nepali Menu
  const nepaliMenu: MenuSection[] = [
    {
      title: 'Our Signature Nepali Experience',
      description: 'A complete culinary journey through the flavors of Nepal',
      items: [
        {
          name: 'Essence of Himalayan',
          description: 'A complete dining experience featuring our most popular Nepali dishes',
          details: [
            'NEPALI FLAVOUR BITES',
            '• Mo:Mo (Choose your filling):',
            '  - Vegan: Textured soy, cabbage, and Himalayan spices',
            '  - Chicken: Free-range chicken with garlic and ginger',
            '  - Pork: Traditional Kathmandu-style rich and gamey',
            '• Aloo Sadeko (potato salad with lemon and toasted mustard)',
            '• Gundruk Ko Achar (fermented leafy greens)',
            '• Served with tomato achar (spiced Nepali sauce)'
          ]
        },
        {
          name: 'SOUP: REIMAGINED THUKPA / SHERPA\'S BOWL',
          description: 'Choose your option:',
          details: [
            '• Vegan: Shiitake and ginger broth with rice noodles',
            '• Standard: Chicken broth with vegetables and dhaniya ko patta (coriander)',
            '• Kwati (mixed legumes with cumin and turmeric)'
          ]
        },
        {
          name: 'MAIN COURSE: THAKALI',
          description: 'Choose your option:',
          details: [
            '• Vegan: Soy in jimbu and tomato sauce',
            '• Chicken curry (Bone-in curry with fenugreek seeds)',
            '• Kahsi ko masu / Goat Curry (Bone-in slow-cooked with cardamom and black pepper masala)',
            '• Served with rice and seasonal vegetables'
          ]
        },
        {
          name: 'DESSERT: YOMARI & DHAU',
          details: [
            '• Dhau (coconut yogurt with cardamom)',
            '• Yomari (coconut and nut molasses dumpling)',
            '• Optional: Kheer (Nepali-style rice pudding)'
          ]
        }
      ]
    }
  ];

  // Indian Menu
  const indianMenu: MenuSection[] = [
    {
      title: 'APPETIZERS',
      items: [
        {
          name: 'Papadum',
          price: '0,90 €',
          description: 'Thin Indian crispy flatbread'
        },
        {
          name: 'Spicy Papadum',
          price: '1,00 €',
          description: 'Thin Indian crispy spicy flatbread'
        },
        {
          name: 'PICKLE TRAY',
          price: '3,50 €',
          description: 'Mango chutney, Mint sauce & Chopped Onions'
        },
        {
          name: 'Tamarind Sauce',
          price: '0,90 €',
          description: 'Bittersweet sauce from the fruit of tamarind'
        },
        {
          name: 'Spicy Garlic Sauce',
          price: '0,90 €',
          description: 'Sauce made with fresh garlic & spicy mayonnaise'
        },
        {
          name: 'Mango Chutney',
          price: '0,90 €',
          description: 'Mango flavor sweet sauce'
        },
        {
          name: 'Mint Sauce',
          price: '0,90 €',
          description: 'Sauce made with fresh mint & yogurt'
        },
        {
          name: 'Spicy Onions',
          price: '0,90 €',
          description: 'Chopped onions with cucumber & capsicum'
        },
        {
          name: 'Mixed Salad',
          price: '5,50 €',
          description: ''
        },
        {
          name: 'Plain Yoghurt',
          price: '2,90 €',
          description: ''
        }
      ]
    },
    {
      title: 'STARTERS',
      items: [
        {
          name: 'Onion Bhaji',
          price: '4,25 €',
          description: 'Onions balls bound together with lightly spiced & fragrant chickpea flour batter.'
        },
        {
          name: 'Vegetable Samosa',
          price: '4,50 €',
          description: 'Triangular pastry filled with potatoes & peas, golden fried.'
        },
        {
          name: 'Garlic Mushroom',
          price: '4,50 €',
          description: 'Juicy mushroom sauteed in a rich garlic butter sauce with a hint of spice.'
        },
        {
          name: 'Meat Samosa',
          price: '4,75 €',
          description: 'Triangular pastry filled with potatoes, peas & meat, golden fried.'
        },
        {
          name: 'Vegetable Pakora',
          price: '4,50 €',
          description: 'Sliced vegetables wrapped in batter & deep fried.'
        },
        {
          name: 'Chicken Pakora',
          price: '4,25 €',
          description: 'Marinated chicken pieces in a batter, golden fried.'
        },
        {
          name: 'Chicken Puri',
          price: '5,50 €',
          description: 'Chicken cooked & served on deep fried round bread.'
        },
        {
          name: 'King Prawn Puri',
          price: '5,95 €',
          description: 'King prawn cooked with ginger-garlic & served on deep fried round bread.'
        },
        {
          name: 'Garlic Chicken',
          price: '5,95 €',
          description: 'Chicken cooked with garlic & lemon.'
        },
        {
          name: 'Chicken Lollipop',
          price: '5,50 €',
          description: 'Crispy, deep-fried chicken drumettes coated in a bold & zesty spicy mix.'
        },
        {
          name: 'Hot Chicken Wings',
          price: '5,50 €',
          description: 'Spicy, juicy wings coated in a fiery marinade that packs a punch.'
        },
        {
          name: 'Chicken Tikka',
          price: '4,50 €',
          description: 'Boneless chicken pieces marinated in spicy yogurt cooked in a tandoor.'
        },
        {
          name: 'Tandoor Chicken',
          price: '5,50 €',
          description: 'Chicken leg piece marinated in a spicy yogurt cooked in tandoor.'
        },
        {
          name: 'Pudina Tikka',
          price: '5,50 €',
          description: 'Boneless chicken pieces marinated with mint, ginger & cooked in tandoor.'
        },
        {
          name: 'Lamb Tikka',
          price: '6,50 €',
          description: 'Boneless lamb pieces marinated in a spicy yogurt & grilled in tandoor.'
        },
        {
          name: 'Barra Kebab',
          price: '5,50 €',
          description: 'Succulent lamb chop marinated in a yogurt & spices, flame-grilled for a smoky bite.'
        },
        {
          name: 'Sheek Kebab',
          price: '5,50 €',
          description: 'Minced lamb marinated with spiced, ginger, coriander & cooked on skewers in a tandoor.'
        },
        {
          name: 'Garlic King Prawn',
          price: '5,90 €',
          description: 'Grilled king prawn cooked with garlic & lemon.'
        },
        {
          name: 'Special Himalayan',
          price: '15,90 €',
          description: 'Includes: Onion Bhaji, veg pakora, barra kebab, chicken tikka, pudina tikka, chicken pakora & sheekh kebab.'
        }
      ]
    },
    {
      title: 'PROTINES',
      description: 'Dish from the cuisine of the Indian subcontinent which combines the use of a varieties of spices, vegetables, herbs like ginger, garlic, green chillies, turmeric, mustard seed, cumin seeds, coriander etc. Each dish has the combination of ingredients that makes it unique.',
      items: [
        {
          name: 'Chicken',
          price: '9,95 €',
          description: ''
        },
        {
          name: 'Chicken Tikka',
          price: '10,95 €',
          description: ''
        },
        {
          name: 'Lamb',
          price: '11,95 €',
          description: ''
        },
        {
          name: 'Lamb Tikka',
          price: '12,95 €',
          description: ''
        },
        {
          name: 'King Prawn',
          price: '13,95 €',
          description: ''
        },
        {
          name: 'Mix Vegetables',
          price: '10,95 €',
          description: ''
        },
        {
          name: 'Soya Meat',
          price: '12,95 €',
          description: ''
        },
        {
          name: 'Paneer',
          price: '12,95 €',
          description: ''
        },
        {
          name: 'Special Himalayan',
          price: '15,95 €',
          description: ''
        }
      ]
    },
    {
      title: 'CURRY SAUCE',
      items: [
        { 
          name: 'Masala', 
          price: '', 
          description: 'Masala curry is one of the most popular dishes with a mild flavour but rich in cream & almond.'
        },
        { 
          name: 'Koram', 
          price: '', 
          description: 'Mild curry consisting of cream and grated coconut.'
        },
        { 
          name: 'Balti', 
          price: '', 
          description: 'Balti sauce is based on green peppers, garlic & onions with turmeric & garam masala among other spices.'
        },
        { 
          name: 'Bhuna', 
          price: '', 
          description: 'Made with chopped onions, roasted red and green peppers, coriander seeds, ginger, garlic, coriander & fenugreek leaves.'
        },
        { 
          name: 'Curry', 
          price: '', 
          description: 'Classic curry with fresh tomatoes & red onions in smooth sauce decorated with coriander.'
        },
        { 
          name: 'Dhansak', 
          price: '', 
          description: 'Combines elements of Persian & Gujarati cuisine. Dhansak is made with lentils, ginger, garlic, coconut, pineapple & fresh coriander.'
        },
        { 
          name: 'Dopiaza', 
          price: '', 
          description: 'Dopiaza curry sauce is based on the onions family (Brown onions, chives & spring onions).'
        },
        { 
          name: 'Jalfrezi', 
          price: '', 
          description: 'Involves bell peppers, ginger, garlic, cumin, coriander & spices in a thick sauce with a touch of cream.'
        },
        { 
          name: 'Karahi', 
          price: '', 
          description: 'Prepared in a special cast iron skillet, this curry is turned brown with chopped tomato, onions, coriander, ginger & garlic.'
        },
        { 
          name: 'Pathia', 
          price: '', 
          description: 'Pathia is an ancient Parsi cuisine from Persia. It\'s better sweet flavored with a touch of coconut.'
        },
        { 
          name: 'Rogan Josh', 
          price: '', 
          description: 'A Kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander.'
        },
        { 
          name: 'Saag', 
          price: '', 
          description: 'Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream.'
        },
        { 
          name: 'Manchuria', 
          price: '', 
          description: 'Fresh mint in semi-dry sauce with tomatoes, lemon juice & garam masala.'
        },
        { 
          name: 'Jai Puri', 
          price: '', 
          description: 'Semi dense curry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander.'
        }
      ]
    },
    {
      title: 'SIZZLERS',
      items: [
        {
          name: 'Paneer Shashlik',
          price: '11,50 €',
          description: 'Chunks of paneer marinated in spices, cooked with onions & bell peppers.'
        },
        {
          name: 'Chicken Tikka Sizzler',
          price: '11,50 €',
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions.'
        },
        {
          name: 'Chicken Tikka Shashlik',
          price: '13,50 €',
          description: 'Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions.'
        },
        {
          name: 'Lamb Tikka Sizzler',
          price: '12,95 €',
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions.'
        },
        {
          name: 'Lamb Tikka Shashlik',
          price: '14,50 €',
          description: 'Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, lemon & onions.'
        },
        {
          name: 'Tandoori Chicken Sizzler',
          price: '11,50 €',
          description: 'Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions.'
        },
        {
          name: 'King Prawn Sizzler',
          price: '13,95 €',
          description: 'King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions.'
        },
        {
          name: 'Tandoori Mix Grill',
          price: '15,95 €',
          description: 'Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns.'
        }
      ]
    },
    {
      title: 'HOUSE SPECIAL',
      items: [
        {
          name: 'Mango Chicken',
          price: '11,95 €',
          description: 'Boneless chicken cooked with mango pulp in traditional curry sauce.'
        },
        {
          name: 'Methi Gosht',
          price: '12,95 €',
          description: 'Tender pieces of lamb cooked with fenugreek, leaves, herbs & spices.'
        },
        {
          name: 'Chilli Chicken',
          price: '14,50 €',
          description: 'Cooked with onions, tomatoes, cumin seeds.'
        },
        {
          name: 'Butter Chicken',
          price: '14,50 €',
          description: 'Chicken pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek.'
        },
        {
          name: 'Chilli Paneer',
          price: '14,50 €',
          description: 'Soft paneer cubes in a vibrant spicy sauce.'
        },
        {
          name: 'Keema Mutter Masala',
          price: '14,50 €',
          description: 'Minced meat & peas in a flavorful gravy.'
        },
        {
          name: 'Hakka Noodles',
          price: '13,50 €',
          description: 'Stir-fried noodles with crisp vegetables.'
        },
        {
          name: 'Malai Kofta',
          price: '14,50 €',
          description: 'Cottage cheese dumplings in a creamy tomato gravy.'
        },
        {
          name: 'Butter Lamb',
          price: '15,50 €',
          description: 'Slow-cooked lamb in a silky butter sauce.'
        },
        {
          name: 'Chilli King Prawn',
          price: '15,50 €',
          description: 'Jumbo prawns in a tangy chilli sauce.'
        }
      ]
    },
    {
      title: 'SIDES',
      items: [
        {
          name: 'Bombay Aloo',
          price: '7,90 €',
          description: 'Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garam masala.'
        },
        {
          name: 'Aubrgine Bhaji',
          price: '7,90 €',
          description: 'Aubrgine cooked in a tandoor then peeled in a semi spicy curry base.'
        },
        {
          name: 'Aloo Gobi',
          price: '8,50 €',
          description: 'Potatoes & cauliflower curry served in a semi dry sauce.'
        },
        {
          name: 'Saag Aloo',
          price: '7,90 €',
          description: 'Spinach curry with potatoes, spices & touch of cream.'
        },
        {
          name: 'Saag Bhaji',
          price: '7,90 €',
          description: 'Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish.'
        },
        {
          name: 'Palak Paneer',
          price: '9,95 €',
          description: 'Homemade cheese cooked with spinach & seasoned with garlic, garam masala.'
        },
        {
          name: 'Mutter Paneer',
          price: '9,95 €',
          description: 'Soft paneer & green peas in a luscious tomato-based sauce.'
        },
        {
          name: 'Tadka Daal',
          price: '7,90 €',
          description: 'Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander.'
        },
        {
          name: 'Daal Makhni',
          price: '8,50 €',
          description: 'Daal makhni is a classic north indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce.'
        },
        {
          name: 'Chana Masala',
          price: '8,50 €',
          description: 'Chickpeas cooked with tomatoes, garlic, onions, & various spices such as turmeric & garam masala.'
        },
        {
          name: 'Mushroom Bhaji',
          price: '9,95 €',
          description: 'Sliced mushroom, cooked with onions & spices.'
        }
      ]
    },
    {
      title: 'BIRYANI',
      description: 'Biryani rice cooked separately with an intensely flavoured sauce. Accompanied with curry sauce or mix raita.',
      items: [
        {
          name: 'Chicken Biryani',
          price: '10,95 €',
          description: ''
        },
        {
          name: 'Chicken Tikka Biryani',
          price: '11,95 €',
          description: ''
        },
        {
          name: 'Lamb Biryani',
          price: '12,95 €',
          description: ''
        },
        {
          name: 'Lamb Tikka Biryani',
          price: '13,95 €',
          description: ''
        },
        {
          name: 'King Prawn Biryani',
          price: '14,95 €',
          description: ''
        },
        {
          name: 'Mix Vegetables Biryani',
          price: '11,95 €',
          description: ''
        },
        {
          name: 'Soya Meat Biryani',
          price: '13,95 €',
          description: ''
        },
        {
          name: 'Paneer Biryani',
          price: '13,95 €',
          description: ''
        },
        {
          name: 'Special Himalayan Biryani',
          price: '15,95 €',
          description: ''
        }
      ]
    },
    {
      title: 'RICE',
      items: [
        {
          name: 'Plain Boiled Rice',
          price: '3,50 €',
          description: 'Traditional white basmati rice.'
        },
        {
          name: 'Pilau Rice',
          price: '3,80 €',
          description: 'Indian basmati rice with three colours. Flavoured with onions, cinnamon, cloves & herbs.'
        },
        {
          name: 'Keema Rice',
          price: '4,95 €',
          description: 'Basmati rice cooked with mincemeat & spices.'
        },
        {
          name: 'Coconut Rice',
          price: '4,50 €',
          description: 'Sweet basmati coconut rice served in its special colour.'
        },
        {
          name: 'Mix vegetable Rice',
          price: '4,50 €',
          description: 'Stir-fried mix vegetable in basmati rice.'
        },
        {
          name: 'Mushroom Rice',
          price: '4,50 €',
          description: 'Stir-fried mushroom in basmati rice.'
        },
        {
          name: 'Garlic Rice',
          price: '4,50 €',
          description: 'Basmati rice with garlic & spices.'
        },
        {
          name: 'Zeera Rice',
          price: '4,50 €',
          description: 'Basmati rice cooked with cumin & garnished with coriander.'
        },
        {
          name: 'Egg Fried Rice',
          price: '4,50 €',
          description: 'Egg fried basmati rice.'
        },
        {
          name: 'Onion Rice',
          price: '4,50 €',
          description: 'Basmati rice cooked with onions.'
        },
        {
          name: 'Special Fried Rice',
          price: '5,50 €',
          description: 'Basmati rice with eggs & peas.'
        },
        {
          name: 'Himalayan Rice',
          price: '5,95 €',
          description: 'Rice prepared in the chef\'s special style with prawn, mix vegetables & touch of mint.'
        }
      ]
    },
    {
      title: 'NAAN BREAD',
      items: [
        {
          name: 'Plain Naan',
          price: '2,95 €',
          description: 'Naan Bread slightly buttered on top.'
        },
        {
          name: 'Garlic Naan',
          price: '3,25 €',
          description: 'Naan bread topped with garlic & coriander.'
        },
        {
          name: 'Coconut Naan',
          price: '3,75 €',
          description: 'Naan bread topped with coconut.'
        },
        {
          name: 'Keema Naan',
          price: '3,95 €',
          description: 'Naan bread filled with spiced minced meat.'
        },
        {
          name: 'Peshwari Naan',
          price: '3,95 €',
          description: 'Naan bread filled with coconut, sultanas, almonds & sugar.'
        },
        {
          name: 'Cheese Naan',
          price: '3,95 €',
          description: 'Naan bread filled with cheese.'
        },
        {
          name: 'Butter Naan',
          price: '3,50 €',
          description: 'Naan bread with butter.'
        },
        {
          name: 'Onion Naan',
          price: '3,75 €',
          description: 'Naan bread topped with fresh onions & coriander.'
        },
        {
          name: 'Kulcha Naan',
          price: '3,95 €',
          description: 'Topped with green & red peppers & touch of green chilli.'
        },
        {
          name: 'Chilli Naan',
          price: '3,50 €',
          description: 'Naan bread topped with chilli.'
        },
        {
          name: 'Garlic Chilli Naan',
          price: '3,95 €',
          description: 'Naan bread topped with garlic & chilli.'
        },
        {
          name: 'Garlic Cheese Naan',
          price: '4,20 €',
          description: 'Naan bread filled with cheese & topped with garlic.'
        },
        {
          name: 'Chilli Cheese Naan',
          price: '4,20 €',
          description: 'Naan bread filled with cheese & topped with chilli.'
        }
      ]
    },
    {
      title: 'CHAPATIS & PARATHAS',
      items: [
        {
          name: 'Chapati',
          price: '2,50 €',
          description: 'Thin Indian bread.'
        },
        {
          name: 'Butter Chapati',
          price: '2,95 €',
          description: 'Thin Indian bread with butter.'
        },
        {
          name: 'Tandoori Roti',
          price: '2,95 €',
          description: 'Thin Indian bread cooked in tandoor.'
        },
        {
          name: 'Plain Paratha',
          price: '3,25 €',
          description: 'Indian bread made with layers of butter.'
        },
        {
          name: 'Aloo Paratha',
          price: '3,50 €',
          description: 'Filled with mashed potatoes & peas with spices & butter.'
        }
      ]
    }
  ];

  // Drinks Menu Sections
  const softDrinksSections: MenuSection[] = [
    {
      title: 'SOFT DRINKS',
      items: [
        { name: 'COCA-COLA', price: '2,50 €' },
        { name: 'COCA-COLA ZERO', price: '2,50 €' },
        { name: 'FANTA ORANGE', price: '2,50 €' },
        { name: 'FANTA LEMON', price: '2,50 €' },
        { name: 'SPRITE', price: '2,50 €' },
        { name: 'TONIC (NORMAL)', price: '2,50 €' },
        { name: 'TONIC (ZERO)', price: '2,50 €' },
        { name: 'TONIC (RED)', price: '2,50 €' },
        { name: 'ICE TEA MANGO-PINEAPPLE', price: '2,50 €' },
        { name: 'ICE TEA LEMON', price: '2,50 €' },
        { name: 'APPLETISER', price: '3,00 €' },
        { name: 'MANGO LASSI', price: '5,95 €' },
        { name: 'SALTED LASSI', price: '5,95 €' },
        { name: 'SMALL WATER', price: '1,95 €' },
        { name: 'SPARKLING WATER', price: '2,00 €' },
        { name: 'ORANGE JUICE', price: '2,50 €' },
        { name: 'APPLE JUICE', price: '2,50 €' },
        { name: 'PINEAPPLE JUICE', price: '2,50 €' }
      ]
    }
  ];

  const beerSections: MenuSection[] = [
    {
      title: 'BEER',
      items: [
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
        { name: 'GORKHA (NEPALI)', price: '5,95 €' }
      ]
    }
  ];

  const coffeeTeaSections: MenuSection[] = [
    {
      title: 'COFFEE & TEA',
      items: [
        { name: 'ESPRESSO', price: '1,00 €' },
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
        { name: 'INDIAN TEA', price: '3,50 €' }
      ]
    }
  ];

  // Current drink sections based on active tab
  const spiritsSections: MenuSection[] = [
    {
      title: 'APERITIF',
      items: [
        { name: 'APEROL', price: '4,50 €' },
        { name: 'CAMPARI', price: '4,50 €' },
        { name: 'MARTINI (Bianco / Rosso / Dry)', price: '4,50 €' }
      ]
    },
    {
      title: 'BRANDY',
      items: [
        { name: '108', price: '4,50 €' },
        { name: 'CARLOS I', price: '6,95 €' },
        { name: 'VETERANO', price: '4,50 €' },
        { name: 'COURVOISIER', price: '7,50 €' }
      ]
    },
    {
      title: 'WHISKEY',
      items: [
        { name: 'FAMOUSE GROUSE', price: '3,50 €' },
        { name: 'J & B', price: '4,50 €' },
        { name: 'RED LABEL', price: '4,50 €' },
        { name: 'BLACK LABEL', price: '7,25 €' },
        { name: 'CHARDU 12 YEARS', price: '6,25 €' },
        { name: 'JACK DANIEL', price: '5,20 €' }
      ]
    },
    {
      title: 'VODKA',
      items: [
        { name: '8848 (NEPAL)', price: '7,20 €' },
        { name: 'ABSOLUTO', price: '4,50 €' },
        { name: 'BELVEDRE', price: '7,20 €' },
        { name: 'GREY GOOSE', price: '4,95 €' },
        { name: 'SMIRN-OFF', price: '3,90 €' }
      ]
    },
    {
      title: 'RUM',
      items: [
        { name: 'KHUKURI XXX', price: '7,90 €' },
        { name: 'KHUKURI DARK RUM', price: '8,90 €' },
        { name: 'KHUKURI CORONATION', price: '17,95 €' },
        { name: 'AREHUCHAS', price: '3,90 €' },
        { name: 'HAVANA', price: '5,95 €' },
        { name: 'MALIBU', price: '3,50 €' },
        { name: 'BACARDI', price: '4,50 €' },
        { name: 'CAPTAIN MORGAN (DARK RUM)', price: '4,95 €' }
      ]
    },
    {
      title: 'GIN',
      items: [
        { name: 'GORDON´S', price: '4,20 €' },
        { name: 'GORDON´S PINK', price: '4,50 €' },
        { name: 'TANQUARI', price: '4,95 €' },
        { name: 'BOMABY', price: '4,95 €' },
        { name: 'HANDRICK´S', price: '4,95 €' }
      ]
    },
    {
      title: 'LICOR',
      items: [
        { name: 'BAILEYS', price: '4,95 €' },
        { name: 'AMARETTO', price: '4,95 €' },
        { name: 'COINTREAU', price: '4,95 €' },
        { name: 'JÄGERMEISTER', price: '4,20 €' },
        { name: 'SAMBUCA', price: '3,95 €' },
        { name: 'TIA MARIA', price: '3,50 €' },
        { name: 'TEQUILA', price: '3,50 €' },
        { name: 'RON MIEL', price: '3,00 €' },
        { name: 'LICOR 45', price: '3,00 €' }
      ]
    }
  ];

  const cocktailsSections: MenuSection[] = [
    {
      title: 'COCKTAILS',
      items: [
        { 
          name: 'APEROL SPRITZ', 
          price: '8,95 €',
          description: 'Proseco - aperol - soda'
        },
        { 
          name: 'BLUE HAWAI', 
          price: '8,95 €',
          description: 'White rum - blue curacao - liquid sugar - lime juice - pineapple - coconut juice.'
        },
        { 
          name: 'AMARETTO SOUR', 
          price: '8,95 €',
          description: 'Disaronno - lemon juice - liquid sugar'
        },
        { 
          name: 'EXPRESSO MARTINI', 
          price: '8,95 €',
          description: 'Vodka - coffee - coffee liquor - liquid sugar'
        },
        { 
          name: 'PRONSTAR MARTINI', 
          price: '8,95 €',
          description: 'Vanilla vodka - passoa - lime juice - vanilla syrup - passion fruit'
        },
        { 
          name: 'MOJITO', 
          price: '8,95 €',
          description: 'White rum - brown sugar - lime - mint (strawberry, coconut, mango, passion fruit)'
        },
        { 
          name: 'PIÑA COLADA', 
          price: '8,95 €',
          description: 'White rum - pineapple juice - lemon juice - coconut'
        },
        { 
          name: 'DAIQUIRI FROZEN', 
          price: '8,95 €',
          description: 'White rum - triple sec - lime juice - sugar syrup (strawberry - coconut - mango - passion fruit)'
        }
      ]
    },
    {
      title: 'NON-ALCOHOLIC COCKTAILS',
      items: [
        { 
          name: 'VIRGIN MOJITO', 
          price: '6,95 €',
          description: 'Lemon soda - lime - sugar syrup - mint (strawberry, coconut, mango, passion fruit)'
        },
        { 
          name: 'VIRGIN COLADA', 
          price: '6,95 €',
          description: 'Pineapple juice - coconut'
        },
        { 
          name: 'VIRGIN HAWAII', 
          price: '6,95 €',
          description: 'Curacao - lime - pineapple - coconut'
        },
        { 
          name: 'REAL LEMONADE', 
          price: '5,95 €',
          description: 'Freshly squeezed lemonade with a touch of sweetness'
        }
      ]
    }
  ];

  const getCurrentDrinkSections = () => {
    switch (activeDrinkTab) {
      case 'soft':
        return softDrinksSections;
      case 'beer':
        return beerSections;
      case 'coffee':
        return coffeeTeaSections;
      case 'spirits':
        return spiritsSections;
      case 'cocktails':
        return cocktailsSections;
      default:
        return softDrinksSections;
    }
  };

  const drinkSections = getCurrentDrinkSections();

  // Wine List
  const wineSections: MenuSection[] = [
    {
      title: 'HOUSE WINES',
      items: [
        { 
          name: 'Blason Esquide White', 
          price: '4,50 € / 14,00 €',
          glass: '4,50 €', 
          bottle: '14,00 €',
          description: 'Region: Rioja | Grape: Viura',
          details: ['Tasting Notes: Pale green & crystalline color', 'Soft & delicious aroma']
        },
        { 
          name: 'Blason Esquide Red', 
          price: '4,50 € / 14,00 €',
          glass: '4,50 €', 
          bottle: '14,00 €',
          description: 'Region: Rioja | Grape: Tempranillo',
          details: ['Tasting Notes: Cherry red', 'Fresh & fruity aroma']
        },
        { 
          name: 'Blason Esquide Rosé', 
          price: '4,50 € / 14,00 €',
          glass: '4,50 €', 
          bottle: '14,00 €',
          description: 'Region: Rioja | Grapes: Tempranillo, Viura, Garnacha',
          details: ['Tasting Notes: Bright ruby', 'Soft & delicate aroma']
        }
      ]
    },
    {
      title: 'WHITE WINES',
      items: [
        { 
          name: 'Lagarto Blanco', 
          price: '6,90 € / 20,00 €',
          glass: '6,90 €', 
          bottle: '20,00 €',
          description: 'Region: Castilla y León | Grape: Verdejo',
          details: ['Tasting Notes: Dry, fresh, and fragrant white', 'Aromas of green apple, mango, and passion fruit']
        },
        { 
          name: 'Fraktique Sauvignon', 
          price: '21,00 €',
          bottle: '21,00 €',
          description: 'Region: Languedoc, France | Grapes: Sauvignon Blanc 99%, Grenache Blanc 1%',
          details: ['Tasting Notes: Bright pale green', 'Earthy fragrances and crisp fruit like kiwi, apple, and white apricot']
        },
        { 
          name: 'Fraktique Chardonnay', 
          price: '22,90 €',
          bottle: '22,90 €',
          description: 'Region: Languedoc, France | Grape: Chardonnay',
          details: ['Tasting Notes: Bright and dense yellow', 'Floral and tropical aromas, with notes of pear and stone fruit', 'Balanced and refreshing']
        },
        { 
          name: 'Le Couchon Pinot Grigio', 
          price: '24,00 €',
          bottle: '24,00 €',
          description: 'Region: Puglia, Italy | Grape: Pinot Grigio',
          details: ['Tasting Notes: Flavors of green apple, kiwi, lime, and ripe citrus', 'Rich in flavor, good texture, and fine finish']
        },
        { 
          name: 'Mar Blanco', 
          price: '29,00 €',
          bottle: '29,00 €',
          description: 'Region: Güímar, Tenerife | Grape: Listán Blanco (1300 m altitude)',
          details: ['Tasting Notes: Straw-colored with greenish hues', 'Unfiltered, clean, fresh, and elegant', 'Notes of pear and pineapple']
        },
        { 
          name: 'Irache Chardonnay', 
          price: '18,90 €',
          bottle: '18,90 €',
          description: 'Region: D.O. Navarra | Grape: Chardonnay',
          details: ['Tasting Notes: Pale yellow with green highlights', 'Tropical and citrus aromas']
        },
        { 
          name: 'Viña Sol', 
          price: '15,00 €',
          bottle: '15,00 €',
          description: 'Region: D.O. Catalunya | Grapes: Parellada and Garnacha',
          details: ['Tasting Notes: Light and bright golden color', 'Citrus aromas', 'Silky, with subtle acidity and a delicate mouthfeel']
        },
        { 
          name: 'Viña Alzará Blanco', 
          price: '15,00 €',
          bottle: '15,00 €',
          description: 'Region: Rioja | Grape: Viura',
          details: ['Tasting Notes: Transparent, fruity', 'Ideal to drink very cold']
        },
        { 
          name: 'Eido de Fonte', 
          price: '24,00 €',
          bottle: '24,00 €',
          description: 'Region: D.O. Rías Baixas (Subzone O Condado) | Grape: 100% Albariño',
          details: ['Tasting Notes: Lemon yellow with green reflections', 'Intense and complex aroma', 'Citrus notes, pear, apple, and peach']
        }
      ]
    },
    {
      title: 'RED WINES',
      items: [
        { 
          name: 'Lagarto Tinto', 
          price: '6,90 € / 20,00 €',
          glass: '6,90 €', 
          bottle: '20,00 €',
          description: 'Region: Castilla y León | Grapes: Tempranillo, Mencía',
          details: ['Tasting Notes: Deep red with violet rims', 'Floral and blackberry aromas', 'Smooth and silky with ripe tannins']
        },
        { 
          name: 'Sembro 2019', 
          price: '24,00 €',
          bottle: '24,00 €',
          description: 'Region: Ribera del Duero | Grape: Tempranillo',
          details: ['Tasting Notes: Deep red', 'Aromas of blackberry and currant', 'Raspberry jam finish']
        },
        { 
          name: 'Acappele Crianza 2019', 
          price: '28,00 €',
          bottle: '28,00 €',
          description: 'Region: Ribera del Duero | Grape: Tempranillo',
          details: ['Tasting Notes: Intense cherry with garnet edge', 'Aromas of candied fruit and sweet spices', 'Powerful and tasty']
        },
        { 
          name: 'Viña Alzará Joven', 
          price: '16,00 €',
          bottle: '16,00 €',
          description: 'Grapes: Tempranillo, Graciano, Garnacha',
          details: ['Tasting Notes: Ripe fruit and bright color', 'Traditional Rioja style']
        }
      ]
    },
    {
      title: 'ROSÉ WINES',
      items: [
        { 
          name: 'Lagarto Rosado', 
          price: '6,90 € / 20,00 €',
          glass: '6,90 €', 
          bottle: '20,00 €',
          description: 'Region: Castilla y León | Grape: Tempranillo',
          details: ['Tasting Notes: Pale pink', 'Fresh aromas of strawberry, pear, and peach']
        },
        { 
          name: 'Irache Rosado', 
          price: '17,50 €',
          bottle: '17,50 €',
          description: 'Region: D.O. Navarra | Grapes: Tempranillo, Garnacha',
          details: ['Tasting Notes: Raspberry pink', 'Aromas of strawberry and raspberry', 'Fresh, tasty, and balanced']
        },
        { 
          name: 'Mateus Rosado', 
          price: '16,50 €',
          bottle: '16,50 €',
          description: 'Region: Portugal | Grapes: Baga, Rufete, Tinta Barroca, Touriga Franca',
          details: ['Tasting Notes: Raspberry pink', 'Floral and fruity aroma', 'Fresh, fruity, with fine bubbles']
        }
      ]
    },
    {
      title: 'PROSECCOS & SPARKLING WINES',
      items: [
        { 
          name: 'Le Couchon Bubblesque Prosecco', 
          price: '26,00 €',
          bottle: '26,00 €',
          description: 'Region: Veneto, Italy | Grapes: Blend of white grapes',
          details: ['Tasting Notes: Light straw yellow', 'Fine bubbles', 'Dry and slightly bitter taste']
        },
        { 
          name: 'Le Couchon Brut Prosecco', 
          price: '39,00 €',
          bottle: '39,00 €',
          description: 'Region: Treviso, Italy | Grape: Glera',
          details: ['Tasting Notes: Pale straw yellow', 'Fine perlage', 'Dry and fragrant taste']
        },
        { 
          name: 'Le Couchon Rosé Prosecco', 
          price: '32,00 €',
          bottle: '32,00 €',
          description: 'Region: Trevigiana | Grapes: Glera, Pinot Nero, Raboso',
          details: ['Tasting Notes: Bright pale pink', 'Fragrance of strawberry, raspberry, and rose', 'Fresh and aromatic']
        },
        { 
          name: 'Cava', 
          price: '22,00 €',
          bottle: '22,00 €',
          description: 'Grapes: Macabeo, Xarel·lo, Parellada',
          details: ['Tasting Notes: Traditional sparkling wine', 'Ideal for celebrations']
        },
        { 
          name: 'Moët & Chandon', 
          price: '52,00 €',
          bottle: '52,00 €',
          description: 'Origin: France | Type: Champagne',
          details: ['Tasting Notes: Classic, elegant, and refined', 'Persistent and balanced bubbles']
        }
      ]
    },
    {
      title: 'SANGRIA',
      description: '1/5 L | 1L',
      items: [
        { 
          name: 'Red Sangria', 
          price: '8,00 € / 14,00 €',
          glass: '8,00 €', 
          bottle: '14,00 €'
        },
        { 
          name: 'White Sangria', 
          price: '8,00 € / 14,00 €',
          glass: '8,00 €', 
          bottle: '14,00 €'
        },
        { 
          name: 'Cava Sangria', 
          price: '10,00 € / 16,00 €',
          glass: '10,00 €', 
          bottle: '16,00 €'
        }
      ]
    }
  ];

  // Render menu items
  const renderMenuItems = (items: MenuItem[], colors: any) => {
    return items.map((item, index) => (
      <motion.div 
        key={index} 
        className="py-6 border-b border-opacity-20 last:border-0"
        style={{ borderColor: colors.primary }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        whileHover={{ 
          backgroundColor: `${colors.light}20`,
          paddingLeft: '1rem',
          transition: { duration: 0.2 }
        }}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 
              className="font-medium text-lg"
              style={{ color: colors.dark, fontFamily: '"Playfair Display", serif' }}
            >
              {item.name}
              {item.isVeg && (
                <span 
                  className="ml-3 text-xs font-normal px-2 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.light}80`,
                    color: colors.primary,
                    border: `1px solid ${colors.primary}80`
                  }}
                >
                  VEG
                </span>
              )}
              {item.isSpicy && (
                <span 
                  className="ml-2 text-xs font-normal px-2 py-0.5 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.highlight}30`,
                    color: colors.highlight,
                    border: `1px solid ${colors.highlight}80`
                  }}
                >
                  SPICY
                </span>
              )}
            </h3>
            {item.description && (
              <p 
                className="mt-2 text-gray-700"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {item.description}
              </p>
            )}
            {item.details && (
              <ul className="mt-3 space-y-1.5 text-gray-700">
                {item.details.map((detail, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <span 
                      className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.highlight }}
                    />
                    <span style={{ fontFamily: '"Poppins", sans-serif' }}>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
          {(item.price || (item.glass && item.bottle)) && (
            <motion.div 
              className="ml-6 text-right"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.glass && item.bottle ? (
                <>
                  <div 
                    className="font-bold text-lg"
                    style={{ color: colors.primary, fontFamily: '"Playfair Display", serif' }}
                  >
                    {item.glass}
                  </div>
                  <div 
                    className="text-sm mt-1"
                    style={{ color: colors.secondary }}
                  >
                    {item.bottle}
                  </div>
                </>
              ) : (
                <div 
                  className="font-bold text-xl"
                  style={{ color: colors.primary, fontFamily: '"Playfair Display", serif' }}
                >
                  {item.price}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    ));
  };

  // Render menu sections
  const renderMenuSections = (sections: MenuSection[], colors: any) => {
    return sections.map((section, index) => (
      <motion.div 
        key={section.title} 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
      >
        <motion.div 
          className="mb-6 pb-2 border-b"
          style={{ borderColor: `${colors.primary}30` }}
        >
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ 
              color: colors.primary,
              fontFamily: '"Playfair Display", serif',
              letterSpacing: '0.03em'
            }}
          >
            {section.title}
          </h2>
          {section.description && (
            <p 
              className="text-lg"
              style={{ 
                color: colors.secondary,
                fontFamily: '"Poppins", sans-serif'
              }}
            >
              {section.description}
            </p>
          )}
        </motion.div>
        <div className="space-y-2">
          {renderMenuItems(section.items, colors)}
        </div>
      </motion.div>
    ));
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Himalayan color palette
  const colors = {
    primary: '#8B4513',      // SaddleBrown - representing mountain soil
    secondary: '#D2691E',   // Chocolate - autumn leaves
    accent: '#CD853F',      // Peru - warm earth tone
    light: '#F5DEB3',       // Wheat - light sand
    dark: '#5D4037',        // Brown - dark earth
    highlight: '#DAA520'    // GoldenRod - sunset gold
  };

  return (
    <motion.div 
      initial="hidden"
      animate={isMounted ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-8 min-h-screen"
    >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 
          className="text-4xl font-bold mb-2"
          style={{ color: colors.dark, fontFamily: '"Playfair Display", serif' }}
        >
          Our Menu
        </h1>
        <motion.div 
          className="h-1 mx-auto"
          style={{ backgroundColor: colors.highlight, width: '80px' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>

      {/* Main Navigation Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-full bg-white/80 shadow-md">
          {['food', 'drinks', 'wine'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveMainTab(tab as MainTab)}
              className={`px-6 py-2 rounded-full mx-1 font-medium transition-all duration-300 ${
                activeMainTab === tab
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              style={{
                fontFamily: '"Poppins", sans-serif',
                minWidth: '120px',
                letterSpacing: '0.05em',
                textShadow: activeMainTab === tab ? '0 1px 2px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {tab === 'food' ? 'Food Menu' : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Content */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
          border: `1px solid ${colors.light}`
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeMainTab}-${activeFoodTab}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
            className="p-6 md:p-10"
          >
            {activeMainTab === 'food' && (
              <>
                <div className="flex justify-center mb-8">
                  <div className="inline-flex flex-wrap justify-center p-1 rounded-full shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm">
                    {[
                      { id: 'nepali', label: 'Nepali Dishes' },
                      { id: 'indian', label: 'Indian Dishes' }
                    ].map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveFoodTab(tab.id as FoodSubTab)}
                        className={`px-6 py-2 text-sm font-medium transition-colors ${
                          activeFoodTab === tab.id 
                            ? 'text-white font-bold bg-gradient-to-r from-yellow-600 to-amber-700 shadow-lg' 
                            : 'text-gray-800 hover:bg-gray-100/70 bg-white/50'
                        } rounded-full mx-1 my-1`}
                        whileHover={{ 
                          scale: activeFoodTab === tab.id ? 1 : 1.05,
                          boxShadow: activeFoodTab === tab.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={spring}
                      >
                        {tab.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
                {activeFoodTab === 'nepali' && renderMenuSections(nepaliMenu, colors)}
                {activeFoodTab === 'indian' && renderMenuSections(indianMenu, colors)}
              </>
            )}
            {activeMainTab === 'drinks' && (
              <>
                <div className="flex justify-center mb-8">
                  <div className="inline-flex flex-wrap justify-center p-1 rounded-full shadow-lg overflow-hidden bg-white/30 backdrop-blur-sm">
                    {[
                      { id: 'soft', label: 'Soft Drinks' },
                      { id: 'beer', label: 'Beers' },
                      { id: 'spirits', label: 'Spirits' },
                      { id: 'cocktails', label: 'Cocktails' },
                      { id: 'coffee', label: 'Coffee & Tea' }
                    ].map((tab) => (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveDrinkTab(tab.id as DrinkTab)}
                        className={`px-6 py-2 text-sm font-medium transition-colors ${
                          activeDrinkTab === tab.id 
                            ? 'text-white font-bold bg-gradient-to-r from-yellow-600 to-amber-700 shadow-lg' 
                            : 'text-gray-800 hover:bg-gray-100/70 bg-white/50'
                        } rounded-full mx-1 my-1`}
                        whileHover={{ 
                          scale: activeDrinkTab === tab.id ? 1 : 1.05,
                          boxShadow: activeDrinkTab === tab.id ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={spring}
                      >
                        {tab.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
                {renderMenuSections(drinkSections, colors)}
              </>
            )}
            {activeMainTab === 'wine' && renderMenuSections(wineSections, colors)}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className="mt-12 pt-6 text-center text-sm"
        style={{ borderTop: `1px solid ${colors.light}`, color: colors.secondary }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p style={{ fontFamily: '"Poppins", sans-serif' }}>All prices include VAT. Service charge not included.</p>
        <p className="mt-1" style={{ fontFamily: '"Poppins", sans-serif' }}>
          Please inform your server of any food allergies or dietary restrictions.
        </p>
        <motion.div 
          className="mt-6 text-sm opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <p>Experience the taste of the Himalayas</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SimpleMenu;
