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
  description?: string;
}

const SimpleMenu = () => {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks' | 'wine'>('food');

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
      ]
    },
    {
      title: 'MAIN COURSES',
      items: [
        { 
          name: 'Chicken Curry', 
          price: '$12.99', 
          description: 'Tender chicken in a rich and flavorful curry sauce',
          isSpicy: true
        },
        { 
          name: 'Vegetable Biryani', 
          price: '$11.99', 
          description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
          isVeg: true
        },
      ]
    }
  ];

  const drinkSections: MenuSection[] = [
    {
      title: 'SOFT DRINKS',
      items: [
        { name: 'Mango Lassi', price: '$3.99', description: 'Refreshing yogurt drink with mango' },
        { name: 'Masala Chai', price: '$2.99', description: 'Spiced Indian tea with milk' },
      ]
    },
    {
      title: 'BEER & WINE',
      items: [
        { name: 'Nepali Beer', price: '$5.99', description: 'Local Nepali lager' },
        { name: 'House Red Wine', price: '$7.99', description: 'Glass of our house red' },
      ]
    }
  ];

  // Render menu items
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <div key={index} className="py-2">
        <div className="flex justify-between">
          <h3 className="font-medium">
            {item.name}
            {item.isVeg && <span className="ml-2 text-green-600">(Veg)</span>}
            {item.isSpicy && <span className="ml-2 text-red-600">(Spicy)</span>}
          </h3>
          <span className="font-medium">{item.price}</span>
        </div>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    ));
  };

  // Render menu sections
  const renderMenuSections = (sections: MenuSection[]) => {
    return sections.map((section, index) => (
      <div key={index} className="mb-8">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2 mb-4" style={{ color: '#040844' }}>
          {section.title}
        </h2>
        {section.description && (
          <p className="text-gray-600 mb-4">{section.description}</p>
        )}
        <div className="space-y-4">
          {renderMenuItems(section.items)}
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8" style={{ color: '#040844' }}>Our Menu</h1>
      
      {/* Tabs */}
      <div className="flex justify-center mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('food')}
          className={`px-6 py-2 font-medium ${activeTab === 'food' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-gray-500'}`}
        >
          Food Menu
        </button>
        <button
          onClick={() => setActiveTab('drinks')}
          className={`px-6 py-2 font-medium ${activeTab === 'drinks' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-gray-500'}`}
        >
          Drinks
        </button>
        <button
          onClick={() => setActiveTab('wine')}
          className={`px-6 py-2 font-medium ${activeTab === 'wine' ? 'border-b-2 border-amber-600 text-amber-600' : 'text-gray-500'}`}
        >
          Wine List
        </button>
      </div>

      {/* Menu Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'food' && renderMenuSections(menuSections)}
        {activeTab === 'drinks' && renderMenuSections(drinkSections)}
        {activeTab === 'wine' && (
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Our Wine List</h2>
            <p className="text-gray-600 text-lg">Coming soon! Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleMenu;
