import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-32">
      <button className="p-4 border-2 border-gray-100 rounded-2xl hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group">
        <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
      </button>
      
      <div className="flex gap-2 p-2 bg-gray-50 rounded-[2.5rem] border border-gray-100">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-14 h-14 flex items-center justify-center rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
              page === 1
                ? 'bg-white text-primary shadow-xl scale-110'
                : 'text-gray-400 hover:text-primary hover:bg-white'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button className="p-4 border-2 border-gray-100 rounded-2xl hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group">
        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
      </button>
    </div>
  );
};

export default Pagination;
