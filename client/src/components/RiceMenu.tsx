import React from 'react';
import { categories, menuByCategory, MenuItem } from '../data/menu';
import MenuItemComponent from './MenuItem';

const RiceMenu: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {categories.map((category) => {
        const categoryId = category.id as keyof typeof menuByCategory;
        const items = menuByCategory[categoryId];
        
        if (!items || !Array.isArray(items)) {
          return null;
        }
        
        return (
          <div key={category.id} className="mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
              {category.name}
            </h2>
            <div className="space-y-6">
              {items.map((item: MenuItem) => (
                <MenuItemComponent key={item.id} item={item} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RiceMenu;
