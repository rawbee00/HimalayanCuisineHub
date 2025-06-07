import React from 'react';
import { MenuItem as MenuItemType } from '../data/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="mb-6 pb-4 border-b border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            {item.isPopular && (
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                Popular
              </span>
            )}
            {item.isVeg && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Veg 🌱
              </span>
            )}
            {item.isSpicy && (
              <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                Spicy 🌶️
              </span>
            )}
          </div>
          <p className="text-gray-600 mt-1">{item.description}</p>
        </div>
        <span className="text-lg font-medium text-amber-700 whitespace-nowrap ml-4">
          {item.price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
