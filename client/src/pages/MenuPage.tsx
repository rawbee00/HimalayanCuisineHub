import React, { useState, useEffect } from 'react';
import { menuByCategory, categories, MenuItem } from '@/data/menu';
import MenuItemComponent from '@/components/MenuItem';

// Define the shape of our category object
type MenuCategory = {
  id: keyof typeof menuByCategory;
  name: string;
};

const MenuPage: React.FC = () => {
  // Ensure categories is properly typed
  const menuCategories = (categories || []) as MenuCategory[];
  
  const [activeCategory, setActiveCategory] = useState<MenuCategory['id'] | ''>('');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);

  // Set the first category as active when component mounts
  useEffect(() => {
    if (menuCategories.length > 0 && !activeCategory) {
      setActiveCategory(menuCategories[0].id);
    }
  }, [menuCategories, activeCategory]);

  // Update filtered items when active category changes
  useEffect(() => {
    if (activeCategory) {
      const items = menuByCategory[activeCategory as keyof typeof menuByCategory];
      setFilteredItems(Array.isArray(items) ? items : []);
    } else {
      setFilteredItems([]);
    }
  }, [activeCategory]);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Our Menu</h1>
          <p className="text-gray-600">Discover our delicious Himalayan cuisine</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Categories">
            {menuCategories.map((category: MenuCategory) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeCategory === category.id
                    ? 'border-amber-500 text-amber-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <MenuItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
