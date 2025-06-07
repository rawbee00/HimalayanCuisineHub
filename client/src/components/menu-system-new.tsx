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

  // Sample menu data
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
