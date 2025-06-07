import { useState } from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  isVeg?: boolean;
  isSpicy?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const MenuSystem = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  const menuSections: MenuSection[] = [
    {
      title: 'STARTERS',
      items: [
        { 
          name: 'Vegetable Samosa', 
          price: '$4.50', 
          description: 'Crispy pastry filled with spiced potatoes and peas',
          isVeg: true 
        },
        { 
          name: 'Chicken Tikka', 
          price: '$5.50', 
          description: 'Tender chicken pieces marinated in yogurt and spices' 
        },
        { 
          name: 'Momo', 
          price: '$5.95', 
          description: 'Traditional Nepali dumplings with choice of filling' 
        },
      ]
    },
    {
      title: 'MAIN COURSES',
      items: [
        { 
          name: 'Butter Chicken', 
          price: '$12.95', 
          description: 'Tandoori chicken in a rich buttery tomato sauce' 
        },
        { 
          name: 'Lamb Rogan Josh', 
          price: '$13.95', 
          description: 'Tender lamb in a flavorful curry sauce' 
        },
        { 
          name: 'Paneer Tikka Masala', 
          price: '$11.95', 
          description: 'Grilled cottage cheese in a creamy tomato sauce', 
          isVeg: true 
        },
      ]
    },
    {
      title: 'DESSERTS',
      items: [
        { 
          name: 'Gulab Jamun', 
          price: '$4.50', 
          description: 'Sweet milk dumplings in rose-flavored syrup', 
          isVeg: true 
        },
        { 
          name: 'Kheer', 
          price: '$4.95', 
          description: 'Creamy rice pudding with cardamom and nuts', 
          isVeg: true 
        },
      ]
    }
  ];

  const drinkSections: MenuSection[] = [
    {
      title: 'REFRESHMENTS',
      items: [
        { 
          name: 'Mango Lassi', 
          price: '$3.95', 
          description: 'Refreshing yogurt drink with mango',
          isVeg: true 
        },
        { 
          name: 'Masala Chai', 
          price: '$2.95', 
          description: 'Spiced Indian tea with milk',
          isVeg: true 
        },
      ]
    },
    {
      title: 'ALCOHOLIC BEVERAGES',
      items: [
        { 
          name: 'Nepali Chiya', 
          price: '$3.50', 
          description: 'Spiced milk tea with cardamom and ginger',
          isVeg: true 
        },
        { 
          name: 'Everest Beer', 
          price: '$5.50', 
          description: 'Premium Nepali lager',
          isVeg: true 
        },
      ]
    }
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <div key={index} className="mb-4 p-4 border-b border-gray-100 hover:bg-amber-50 transition-colors">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              {item.isVeg && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                  VEG
                </span>
              )}
              {item.isSpicy && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded">
                  SPICY
                </span>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
          <span className="font-medium text-amber-800 whitespace-nowrap ml-4">
            {item.price}
          </span>
        </div>
      </div>
    ));
  };

  const renderSections = (sections: MenuSection[]) => {
    return sections.map((section, index) => (
      <section key={index} className="mb-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">
          {section.title}
        </h2>
        <div className="divide-y divide-amber-100">
          {renderMenuItems(section.items)}
        </div>
      </section>
    ));
  };

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">Our Menu</h1>
          <p className="text-amber-700">Discover our authentic Himalayan flavors</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'food' 
                    ? 'border-amber-500 text-amber-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('food')}
              >
                Food Menu
              </button>
              <button
                className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'drinks' 
                    ? 'border-amber-500 text-amber-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab('drinks')}
              >
                Drinks
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            {activeTab === 'food' ? renderSections(menuSections) : renderSections(drinkSections)}
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-amber-700">
          <p>Ask your server about our daily specials and seasonal offerings!</p>
          <p className="mt-2">* Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
        </div>
      </div>
    </div>
  );
};

export default MenuSystem;
        { name: "Rogan Josh", description: "A kashmiri aromatic dish cooked with tomatoes, ginger, garlic & coriander" },
        { name: "Saag", description: "Saag curry is a traditional Punjabi thick spinach curry cooked with spices & touch of cream" },
        { name: "Manchuria", description: "Fresh mint in semidry sauce with tomatoes, lemon juice & garam masala" },
        { name: "Jai Puri", description: "Semi dense currry prepared with fresh mushroom & onions with a touch of coconut, ginger & coriander" }
      ]
    },
    {
      title: "SIZZLERS",
      items: [
        { name: "Paneer Shashlik", price: "11.50", description: "Chunks of paneer marinated in spices, cooked with onions & bell peppers" },
        { name: "Lamb Tikka Shashlik", price: "14.50", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
        { name: "Chicken Tikka Sizzler", price: "11.50", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
        { name: "Tandoori Chicken Sizzler", price: "11.50", description: "Chicken leg with bone marinated in spicy yogurt, cooked in tandoor & served with lemon & fried onions" },
        { name: "Chicken Tikka Shashlik", price: "13.50", description: "Chicken marinated in spicy yogurt & cooked in tandoor. Served with peppers, tomato, limon & onions" },
        { name: "King Prawn Sizzler", price: "13.95", description: "King prawns marinated in spices, cooked in tandoori oven & served with lemons & onions" },
        { name: "Lamb Tikka Sizzler", price: "12.95", description: "Lamb marinated in spicy yogurt & cooked in tandoor. Served with lemon & fried spicy onions" },
        { name: "Tandoori Mix Grill", price: "15.95", description: "Mix of lamb tikka, sheekh kebab, chicken tikka & king prawns" }
      ]
    },
    {
      title: "HOUSE SPECIAL",
      items: [
        { name: "Mango Chicken", price: "11.95", description: "Boneless chicken cooked with mango pulp in traditional curry sauce" },
        { name: "Methi Gosht", price: "12.95", description: "Tender pieces of lamb cooked with fenugreek, leaves, hearbs & spices" },
        { name: "Chilli Chicken", price: "14.50", description: "Cooked with onions, tomatoes, cumin seeds" },
        { name: "Butter Chicken", price: "14.50", description: "Chicken pieces pieces in a creamy sauce with extra butter, almond & a touch of garlic & fenugreek" },
        { name: "Chilli Paneer", price: "14.50", description: "Soft paneer cubes in a vibrant spicy sauce" },
        { name: "Keema Mutter Masala", price: "14.50", description: "Minced meat & peas in a flavorful gravy" },
        { name: "Hakka Noodles", price: "13.50", description: "Stir - fried noodles with crisp vegetables" },
        { name: "Malai Kofta", price: "14.50", description: "Cottage cheese dumplings in a creamy tomato gravy" },
        { name: "Butter Lamb", price: "15.50", description: "Slow - cooked lamb in a silky butter sauce" },
        { name: "Chilli King Prawn", price: "15.50", description: "Jumbo prawns in a tangy chilli sauce" }
      ]
    },
    {
      title: "SIDES",
      items: [
        { name: "Bombay Aloo", price: "7,90€", description: "Classic potatoes curry served in a semi dry sauce & flavoured with various spices as cumin, turmeric & garmal masala" },
        { name: "Mutter Paneer", price: "9,95€", description: "Soft paneer & green peas in a luscious tomato - based sauce" },
        { name: "Tadka Daal", price: "7,90€", description: "Yellow split peas cooked with chopped onions, cumin, ginger, garlic & coriander" },
        { name: "Daal Makhni", price: "8,50€", description: "Daal makhni is a classic north Indian dish where the lentils are cooked in a very aromatic buttery, creamy tomato sauce" },
        { name: "Aubrgine Bhaji", price: "7,90€", description: "Aubrgine cooked in a tandoor then peeled in a semi spicy curry base" },
        { name: "Aloo Gobi", price: "8,50€", description: "Potatoes & cauliflower curry served in a semi dry sauce" },
        { name: "Saag Aloo", price: "7,90€", description: "Spinach curry with potatoes, spices & touch of cream" },
        { name: "Saag Bhaji", price: "7,90€", description: "Spinach cooked with spices & a touch of cream for a deliciously mild & comforting dish" },
        { name: "Chana Masala", price: "8,50€", description: "Chickpeas cooked with tomatoes, garlic, onions, & various spices such as turmeric & garam masala" },
        { name: "Mushroom Bhaji", price: "9,95€", description: "Sliced mushroom, cooked with onions & spices" }
      ]
    },
    {
      title: "BIRYANI",
      items: [
        { name: "Vegetable Biryani", price: "12,95€", description: "Fragrant basmati rice cooked with mixed vegetables & aromatic spices" },
        { name: "Chicken Biryani", price: "13,95€", description: "Tender chicken pieces cooked with basmati rice & a blend of spices" },
        { name: "Lamb Biryani", price: "14,95€", description: "Succulent lamb pieces cooked with basmati rice & aromatic spices" },
        { name: "King Prawn Biryani", price: "15,95€", description: "Jumbo prawns cooked with basmati rice & a special blend of spices" },
        { name: "Special Biryani", price: "16,95€", description: "A mix of chicken, lamb & prawns cooked with basmati rice & aromatic spices" }
      ]
    },
    {
      title: "RICE",
      items: [
        { name: "Plain Boiled Rice", price: "3,50€", description: "Traditional white basmati rice" },
        { name: "Pilau Rice", price: "3,80€", description: "Indian basmati rice with three colors, flavored with onions, cinnamon, cloves & herbs" },
        { name: "Keema Rice", price: "4,95€", description: "Basmati rice cooked with mincemeat & spices" },
        { name: "Coconut Rice", price: "4,50€", description: "Sweet basmati coconut rice served in its special color" },
        { name: "Mix Vegetable Rice", price: "4,50€", description: "Stir-fried mixed vegetable in basmati rice" },
        { name: "Mushroom Rice", price: "4,50€", description: "Stir-fried mushroom in basmati rice" },
        { name: "Garlic Rice", price: "4,50€", description: "Basmati rice with garlic & spices" },
        { name: "Zeera Rice", price: "4,50€", description: "Basmati rice cooked with cumin & garnished with coriander" },
        { name: "Egg Fried Rice", price: "4,50€", description: "Egg fried basmati rice" },
        { name: "Onion Rice", price: "4,50€", description: "Basmati rice cooked with onions" },
        { name: "Special Fried Rice", price: "5,50€", description: "Basmati rice with eggs & peas" }
      ]
    },
    {
      title: "NAAN BREAD",
      items: [
        { name: "Plain Naan", price: "2,95€", description: "Naan Bread slightly buttered on top" },
        { name: "Garlic Naan", price: "3,25€", description: "Naan bread topped with garlic & coriander" },
        { name: "Coconut Naan", price: "3,75€", description: "Naan bread topped with coconut" },
        { name: "Keema Naan", price: "3,95€", description: "Naan bread filled with spiced minced meat" },
        { name: "Peshwari Naan", price: "3,95€", description: "Naan bread filled with coconut, sultanas, almonds & sugar" },
        { name: "Cheese Naan", price: "3,95€", description: "Naan bread filled with cheese" },
        { name: "Butter Naan", price: "3,50€" },
        { name: "Onion Naan", price: "3,75€", description: "Naan bread topped with fresh onions & coriander" },
        { name: "Kulcha Naan", price: "3,95€", description: "Topped with green & red peppers & touch of green chilli" },
        { name: "Chilli Naan", price: "3,50€", description: "Naan bread topped with chilli" },
        { name: "Garlic Chilli Naan", price: "3,95€", description: "Naan bread topped with garlic & chilli" },
        { name: "Garlic Cheese Naan", price: "4,20€", description: "Naan bread filled with cheese & topped with garlic" },
        { name: "Chilli Cheese Naan", price: "4,20€", description: "Naan bread filled with cheese & topped with chilli" }
      ]
    },
    {
      title: "CHAPATIS & PARATHAS",
      items: [
        { name: "Chapati", price: "2,50€", description: "Thin Indian bread" },
        { name: "Butter Chapati", price: "2,95€", description: "Thin Indian bread with butter" },
        { name: "Tandoori Roti", price: "2,95€", description: "Thin Indian bread cooked in tandoor" },
        { name: "Plain Paratha", price: "3,25€", description: "Indian bread made with layers of butter" },
        { name: "Aloo Paratha", price: "3,50€", description: "Filled with mashed potatoes & peas with spices & butter" }
      ]
    }
  ]
};

const drinkMenuData: Record<DrinkTab, readonly IMenuSection[]> = {
  softDrinks: [
    {
      title: "Soft Drinks",
      description: "Refreshing beverages",
      items: [
        { name: "Coca Cola", price: "2.50" },
        { name: "Coca Cola Zero", price: "2.50" },
        { name: "Fanta Orange", price: "2.50" },
        { name: "Fanta Lemon", price: "2.50" },
        { name: "Sprite", price: "2.50" },
        { name: "Tonic (Normal/Zero/Red)", price: "2.50" },
        { name: "Ice Tea Mango-Pineapple", price: "2.50" },
        { name: "Ice Tea Lemon", price: "2.50" },
        { name: "Appletiser", price: "3.00" },
        { name: "Mango Lassi", price: "5.95" },
        { name: "Salted Lassi", price: "5.95" },
        { name: "Small Water", price: "1.95" },
        { name: "Sparkling Water", price: "2.00" },
        { name: "Orange Juice", price: "2.50" },
        { name: "Apple Juice", price: "2.50" },
        { name: "Pineapple Juice", price: "2.50" }
      ]
    }
  ],
  coffeeTea: [
    {
      title: "Coffee & Tea",
      description: "Hot beverages",
      items: [
        { name: "Espresso", price: "1.00" },
        { name: "Cortado Natural", price: "1.20" },
        { name: "Leche y Leche", price: "1.50" },
        { name: "Americano", price: "1.80" },
        { name: "White Coffee", price: "2.50" },
        { name: "Cappuccino", price: "2.75" },
        { name: "Barraquito", price: "2.95" },
        { name: "Irish Coffee", price: "4.00" },
        { name: "Carajillo", price: "2.50" },
        { name: "Calypso", price: "3.20" },
        { name: "Baileys Coffee", price: "3.50" },
        { name: "Te (Infusions)", price: "2.00" },
        { name: "Indian Tea", price: "3.50" }
      ]
    }
  ],
  beer: [
    {
      title: "Beer",
      description: "Local and imported beers",
      items: [
        { name: "Dorada Large", price: "2.80" },
        { name: "Dorada Small", price: "1.95" },
        { name: "Stella Artois Large", price: "2.80" },
        { name: "Stella Artois Small", price: "1.95" },
        { name: "Shandy Large", price: "3.00" },
        { name: "Shandy Small", price: "2.95" },
        { name: "Dorada Special Bot.", price: "2.80" },
        { name: "Dorada Sin Bot.", price: "2.50" },
        { name: "Dorada Limon Sin Bot.", price: "2.00" },
        { name: "Corona", price: "3.00" },
        { name: "Kopperberg Strawberry", price: "4.50" },
        { name: "Leffe Blond", price: "4.00" },
        { name: "Cobra (Indian)", price: "4.50" },
        { name: "King Fisher (Indian)", price: "4.50" },
        { name: "Gorkha (Nepali)", price: "5.95" }
      ]
    }
  ],
  spirits: [
    {
      title: "Spirits & Liquors",
      description: "Premium spirits and liquors",
      items: [
        { name: "Baileys", price: "4.95" },
        { name: "Amaretto", price: "4.95" },
        { name: "Cointreau", price: "4.95" },
        { name: "Jägermeister", price: "4.20" },
        { name: "Sambuca", price: "3.95" },
        { name: "Tia Maria", price: "3.50" },
        { name: "Tequila", price: "3.50" },
        { name: "Ron Miel", price: "3.00" },
        { name: "Licor 43", price: "3.00" }
      ]
    }
  ],
  whiskey: [
    {
      title: "Whiskey",
      description: "Fine selection of whiskeys",
      items: [
        { name: "Famous Grouse", price: "3.50" },
        { name: "J & B", price: "4.50" },
        { name: "Red Label", price: "4.50" },
        { name: "Black Label", price: "7.25" },
        { name: "Chardu 12 Years", price: "6.25" },
        { name: "Jack Daniel's", price: "5.20" }
      ]
    }
  ],
  brandy: [
    {
      title: "Brandy",
      description: "Smooth brandy selection",
      items: [
        { name: "108", price: "4.50" },
        { name: "Carlos I", price: "6.95" },
        { name: "Veterano", price: "4.50" },
        { name: "Courvoisier", price: "7.50" }
      ]
    }
  ],
  cocktails: [
    {
      title: "Cocktails",
      description: "Classic and signature cocktails",
      items: [
        { name: "Aperol Spritz", price: "8.95", description: "Prosecco - Aperol - Soda" },
        { name: "Blue Hawaii", price: "8.95", description: "White rum - Blue curacao - Lime juice - Pineapple - Coconut juice" },
        { name: "Amaretto Sour", price: "8.95", description: "Disaronno - Lemon juice - Liquid sugar" },
        { name: "Espresso Martini", price: "8.95", description: "Vodka - Coffee - Coffee liquor - Liquid sugar" },
        { name: "Pronstar Martini", price: "8.95", description: "Vanilla vodka - Passoa - Lemon juice - Vanilla syrup - Passion fruit" },
        { name: "Mojito", price: "8.95", description: "White rum - Brown sugar - Lime - Mint" },
        { name: "Piña Colada", price: "8.95", description: "White rum - Pineapple juice - Lemon juice - Coconut" },
        { name: "Daiquiri Frozen", price: "8.95", description: "White rum - Triple sec - Lime juice - Sugar syrup" }
      ]
    },
    {
      title: "Non-Alcoholic Cocktails",
      description: "Refreshing alcohol-free options",
      items: [
        { name: "Virgin Mojito", price: "6.00", description: "Lemon soda - Lime - Sugar syrup - Mint" },
        { name: "Virgin Colada", price: "6.00", description: "Pineapple juice - Coconut" },
        { name: "Virgin Hawaii", price: "6.00", description: "Curacao - Lime - Pineapple - Coconut" },
        { name: "Real Lemonade", price: "6.00", description: "Freshly squeezed lemonade" }
      ]
    }
  ]
};

// Wine menu data
const wineMenuData = [
  {
    title: "House Wines",
    description: "Our selection of house wines by the glass or bottle",
    items: [
      { 
        name: "Blason Esquide White", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grapes: Viura\nPale green & crystalline color. Soft & delicious aroma." 
      },
      { 
        name: "Blason Esquide Red", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grape: Tempranillo\nCherry red. Fresh & fruity aroma." 
      },
      { 
        name: "Blason Esquide Rosé", 
        glassPrice: "4.50",
        bottlePrice: "14.00",
        description: "Region: Rioja | Grapes: Tempranillo, Viura, Garnacha\nBright ruby. Soft & delicate aroma." 
      }
    ]
  },
  {
    title: "White Wines",
    description: "Our selection of premium white wines",
    items: [
      { 
        name: "Lagarto Blanco", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grape: Verdejo\nDry, fresh, and fragrant white with aromas of green apple, mango, and passion fruit." 
      },
      { 
        name: "Fraktique Sauvignon", 
        bottlePrice: "21.00", 
        description: "Region: Languedoc, France | Grapes: Sauvignon Blanc 99%, Grenache Blanc 1%\nBright pale green. Earthy fragrances and crisp fruit like kiwi, apple, and white apricot." 
      },
      { 
        name: "Fraktique Chardonnay", 
        bottlePrice: "22.90", 
        description: "Region: Languedoc, France | Grape: Chardonnay\nBright and dense yellow. Floral and tropical aromas, with notes of pear and stone fruit." 
      },
      { 
        name: "Le Couchon Pinot Grigio", 
        bottlePrice: "24.00", 
        description: "Region: Puglia, Italy | Grape: Pinot Grigio\nFlavors of green apple, kiwi, lime, and ripe citrus. Rich in flavor, good texture, and fine finish." 
      },
      { 
        name: "Mar Blanco", 
        bottlePrice: "29.00", 
        description: "Region: Güímar, Tenerife | Grape: Listán Blanco (1300 m altitude)\nStraw-colored with greenish hues. Unfiltered, clean, fresh, and elegant. Notes of pear and pineapple." 
      },
      { 
        name: "Irache Chardonnay", 
        bottlePrice: "18.90", 
        description: "Region: D.O. Navarra | Grape: Chardonnay\nPale yellow with green highlights. Tropical and citrus aromas." 
      },
      { 
        name: "Viña Sol", 
        bottlePrice: "15.00", 
        description: "Region: D.O. Catalunya | Grapes: Parellada and Garnacha\nLight and bright golden color. Citrus aromas. Silky, with subtle acidity and a delicate mouthfeel." 
      },
      { 
        name: "Viña Alzará Blanco", 
        bottlePrice: "15.00", 
        description: "Region: Rioja | Grape: Viura\nTransparent, fruity, ideal to drink very cold." 
      },
      { 
        name: "Eido de Fonte", 
        bottlePrice: "24.00", 
        description: "Region: D.O. Rías Baixas (Subzone O Condado) | Grape: 100% Albariño\nLemon yellow with green reflections. Intense and complex aroma, with citrus notes, pear, apple, and peach." 
      }
    ]
  },
  {
    title: "Red Wines",
    description: "Our selection of premium red wines",
    items: [
      { 
        name: "Lagarto Tinto", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grapes: Tempranillo, Mencía\nDeep red with violet rims. Floral and blackberry aromas. Smooth and silky with ripe tannins." 
      },
      { 
        name: "Sembro 2019", 
        bottlePrice: "24.00", 
        description: "Region: Ribera del Duero | Grape: Tempranillo\nDeep red. Aromas of blackberry and currant. Raspberry jam finish." 
      },
      { 
        name: "Acappele Crianza 2019", 
        bottlePrice: "28.00", 
        description: "Region: Ribera del Duero | Grape: Tempranillo\nIntense cherry with garnet edge. Aromas of candied fruit and sweet spices. Powerful and tasty." 
      },
      { 
        name: "Viña Alzará Joven", 
        bottlePrice: "16.00", 
        description: "Grapes: Tempranillo, Graciano, Garnacha\nRipe fruit and bright color. Traditional Rioja style." 
      }
    ]
  },
  {
    title: "Rosé Wines",
    description: "Our selection of refreshing rosé wines",
    items: [
      { 
        name: "Lagarto Rosado", 
        glassPrice: "6.90",
        bottlePrice: "20.00",
        description: "Region: Castilla y León | Grape: Tempranillo\nPale pink. Fresh aromas of strawberry, pear, and peach." 
      },
      { 
        name: "Irache Rosado", 
        bottlePrice: "17.50", 
        description: "Region: D.O. Navarra | Grapes: Tempranillo, Garnacha\nRaspberry pink. Aromas of strawberry and raspberry. Fresh, tasty, and balanced." 
      },
      { 
        name: "Mateus Rosado", 
        bottlePrice: "16.50", 
        description: "Region: Portugal | Grapes: Baga, Rufete, Tinta Barroca, Touriga Franca\nRaspberry pink. Floral and fruity aroma. Fresh, fruity, with fine bubbles." 
      }
    ]
  },
  {
    title: "Sparkling Wines & Prosecco",
    description: "Our selection of sparkling wines and prosecco",
    items: [
      { 
        name: "Le Couchon Bubblesque Prosecco", 
        bottlePrice: "26.00", 
        description: "Region: Veneto, Italy | Grapes: Blend of white grapes\nLight straw yellow. Fine bubbles. Dry and slightly bitter taste." 
      },
      { 
        name: "Le Couchon Brut Prosecco", 
        bottlePrice: "39.00", 
        description: "Region: Treviso, Italy | Grape: Glera\nPale straw yellow. Fine perlage. Dry and fragrant taste." 
      },
      { 
        name: "Le Couchon Rosé Prosecco", 
        bottlePrice: "32.00", 
        description: "Region: Trevigiana | Grapes: Glera, Pinot Nero, Raboso\nBright pale pink. Fragrance of strawberry, raspberry, and rose. Fresh and aromatic." 
      },
      { 
        name: "Cava", 
        bottlePrice: "22.00", 
        description: "Grapes: Macabeo, Xarel·lo, Parellada\nTraditional sparkling wine, ideal for celebrations." 
      },
      { 
        name: "Moët & Chandon", 
        bottlePrice: "52.00", 
        description: "Origin: France | Type: Champagne\nClassic, elegant, and refined. Persistent and balanced bubbles." 
      }
    ]
  },
  {
    title: "Sangrias",
    description: "Refreshing sangrias by the glass or pitcher (1L)",
    items: [
      { 
        name: "Red Sangria", 
        glassPrice: "8.00",
        bottlePrice: "14.00",
        bottleLabel: "Pitcher (1L)",
        description: "Refreshing red wine sangria with fresh fruits" 
      },
    ]
  }
];

const MenuSystem = () => {
  // State for active tabs
  const [activeTab, setActiveTab] = useState<MainTab>('menu');
  const [foodTab, setFoodTab] = useState<FoodTab>('nepali');
  const [drinkTab, setDrinkTab] = useState<DrinkTab>('softDrinks');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Helper function to render menu items
  const renderMenuItems = (items: IMenuItem[] = []) => {
    return items.map((item, index) => (
      <div key={index} className={styles.menuItem}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemName}>
            {item.name}
            {item.isSpicy && <span className={styles.spicyBadge}>🔥</span>}
            {item.isVeg && <span className={styles.vegBadge}>🌱</span>}
            {item.isPopular && <span className={styles.popularBadge}>Popular</span>}
          </h3>
          {item.glassPrice && item.bottlePrice ? (
            <div className={styles.priceContainer}>
              <span className={styles.itemPrice}>
                {item.glassPrice.includes('€') ? item.glassPrice : `${item.glassPrice}€`}
              </span>
              <span className={styles.itemPrice}>
                {item.bottlePrice.includes('€') 
                  ? item.bottlePrice 
                  : `${item.bottlePrice}€`}
              </span>
            </div>
          ) : item.price ? (
            <span className={styles.itemPrice}>
              {item.price.includes('€') ? item.price : `${item.price}€`}
            </span>
          ) : null}
        </div>
        {item.description && (
          <p className={styles.itemDescription}>{item.description}</p>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className={styles.tagsContainer}>
            {item.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    ));
  };

  // Helper function to render menu sections
  const renderMenuSections = (sections: IMenuSection[] = []) => {
    return sections.map((section, index) => (
      <section key={index} className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>
          {section.title}
        </h2>
        {section.description && (
          <p className={styles.sectionDescription}>{section.description}</p>
        )}
        {section.title.includes('Wine') && (
          <div className={styles.wineHeader}>
            <span className={styles.winePriceLabel}>Glass</span>
            <span className={styles.winePriceLabel}>Bottle</span>
          </div>
        )}
        <div className={styles.menuGrid}>
          {renderMenuItems(section.items as IMenuItem[], section.title.includes('Wine'))}
        </div>
      </section>
    ));
  };

  // Handle tab changes from URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['menu', 'drinks', 'wine'].includes(hash)) {
        setActiveTab(hash as MainTab);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div id="menu-system" ref={menuRef} className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-primary-custom text-white rounded-lg"
        >
          <span className="text-lg font-medium">
            {activeTab === 'menu' && 'Food Menu'}
            {activeTab === 'drinks' && 'Drinks'}
            {activeTab === 'wine' && 'Wine List'}
          </span>
          <svg
            className={`w-5 h-5 transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => {
                setActiveTab('menu');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-lg font-medium ${
                activeTab === 'menu' ? 'bg-gray-100 text-primary-custom' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Food Menu
            </button>
            <button
              onClick={() => {
                setActiveTab('drinks');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-lg font-medium ${
                activeTab === 'drinks' ? 'bg-gray-100 text-primary-custom' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              Drinks
            </button>
            <button
              onClick={() => {
                setActiveTab('wine');
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-6 py-3 text-lg font-medium ${
                activeTab === 'wine' ? 'bg-gray-100 text-primary-custom' : 'text-gray-700 hover:bg-gray-50'
        )}
      </div>
    </div>
  </div>
));
};

// Helper function to render menu sections
const renderMenuSections = (sections: IMenuSection[] = []) => {
return sections.map((section, index) => (
  <section key={index} className={styles.menuSection}>
    <h2 className={styles.sectionTitle}>
      {section.title}
    </h2>
    {section.description && (
      <p className={styles.sectionDescription}>{section.description}</p>
    )}
    {section.title.includes('Wine') && (
      <div className={styles.wineHeader}>
        <span className={styles.winePriceLabel}>Glass</span>
        <span className={styles.winePriceLabel}>Bottle</span>
      </div>
    )}
    <div className={styles.menuGrid}>
      {renderMenuItems(section.items as IMenuItem[], section.title.includes('Wine'))}
    </div>
  </section>
));
};
            <div className="inline-flex rounded-md shadow-sm flex-nowrap" role="group">
              {Object.entries({
                nepali: 'Nepali',
                indian: 'Indian'
              }).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFoodTab(key as FoodTab)}
                  className={`px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap ${
                    foodTab === key
                      ? 'bg-primary-custom text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Food Sections */}
          {foodTab === 'nepali' && renderMenuSections(foodMenuData.nepali as IMenuSection[])}
          {foodTab === 'indian' && renderMenuSections(foodMenuData.indian as IMenuSection[])}
        </div>
      )}

      {/* Drinks Menu */}
      {activeTab === 'drinks' && (
        <div className="space-y-12">
          {/* Drink Type Tabs */}
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex space-x-2 min-w-max">
              <button
                onClick={() => setDrinkTab('softDrinks')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'softDrinks'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Soft Drinks
              </button>
              <button
                onClick={() => setDrinkTab('coffeeTea')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'coffeeTea'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Coffee & Tea
              </button>
              <button
                onClick={() => setDrinkTab('beer')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'beer'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Beer
              </button>
              <button
                onClick={() => setDrinkTab('spirits')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'spirits'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Spirits
              </button>
              <button
                onClick={() => setDrinkTab('whiskey')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'whiskey'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Whiskey
              </button>
              <button
                onClick={() => setDrinkTab('brandy')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'brandy'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Brandy
              </button>
              <button
                onClick={() => setDrinkTab('cocktails')}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
                  drinkTab === 'cocktails'
                    ? 'bg-primary-custom text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Cocktails
              </button>
            </div>
          </div>

          {/* Drink Sections */}
          {drinkTab === 'softDrinks' && renderMenuSections(drinkMenuData.softDrinks as IMenuSection[])}
          {drinkTab === 'coffeeTea' && renderMenuSections(drinkMenuData.coffeeTea as IMenuSection[])}
          {drinkTab === 'beer' && renderMenuSections(drinkMenuData.beer as IMenuSection[])}
          {drinkTab === 'spirits' && renderMenuSections(drinkMenuData.spirits as IMenuSection[])}
          {drinkTab === 'whiskey' && renderMenuSections(drinkMenuData.whiskey as IMenuSection[])}
          {drinkTab === 'brandy' && renderMenuSections(drinkMenuData.brandy as IMenuSection[])}
          {drinkTab === 'cocktails' && renderMenuSections(drinkMenuData.cocktails as IMenuSection[])}
        </div>
      )}

      {/* Wine Menu */}
      {activeTab === 'wine' && (
        <div className="space-y-12">
          {wineMenuData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold border-b border-gray-200 pb-2" style={{ color: '#040844' }}>
                {section.title}
              </h2>
              {section.description && (
                <p className="text-gray-600">{section.description}</p>
              )}
              {renderMenuItems(section.items as IMenuItem[])}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
