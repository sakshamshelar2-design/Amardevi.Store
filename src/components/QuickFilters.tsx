import React from 'react';
import { Tag, Star, TrendingUp, Percent } from 'lucide-react';

interface QuickFiltersProps {
  onFilterSelect: (filter: string) => void;
  activeFilter: string;
}

const QuickFilters: React.FC<QuickFiltersProps> = ({ onFilterSelect, activeFilter }) => {
  const filters = [
    { id: 'all', name: 'All', icon: Tag, color: 'bg-gray-500' },
    { id: 'featured', name: 'Featured', icon: Star, color: 'bg-yellow-500' },
    { id: 'sale', name: 'On Sale', icon: Percent, color: 'bg-red-500' },
    { id: 'trending', name: 'Trending', icon: TrendingUp, color: 'bg-blue-500' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Filters</h3>
      <div className="flex space-x-3 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const IconComponent = filter.icon;
          return (
            <button
              key={filter.id}
              onClick={() => onFilterSelect(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeFilter === filter.id
                  ? `${filter.color} text-white shadow-md transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{filter.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickFilters;