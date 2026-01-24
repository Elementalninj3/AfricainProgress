import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { CATEGORIES } from '../data/posts';

const Filters = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 lg:self-end">
      <div className="flex flex-wrap justify-center md:justify-end gap-2 p-1.5 bg-gray-50 rounded-[1.5rem] border border-gray-100">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              activeCategory === category
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                : 'text-gray-400 hover:text-primary hover:bg-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="relative group">
        <button className="flex items-center gap-8 px-8 py-4 bg-white border-2 border-primary text-xs font-black uppercase tracking-widest text-primary rounded-[1.5rem] hover:bg-primary hover:text-white transition-all duration-300">
          <span className="flex items-center gap-3">
            <Filter className="w-4 h-4" />
            Sort By
          </span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Filters;
