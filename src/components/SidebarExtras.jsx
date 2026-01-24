import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp } from 'lucide-react';

const SidebarExtras = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-20">
      {/* Moved Startups Tracked Card to first position */}
      <div className="md:col-span-4 relative group rounded-3xl overflow-hidden min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800" 
          alt="Growth" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[4px]" />
        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <p className="text-gray-200 text-sm font-black uppercase tracking-[0.2em]">Our Focus</p>
          </div>
          <p className="text-5xl font-black tracking-tighter mb-6 leading-[0.9]">
            Tracking ventures around Africa
          </p>
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
            We are dedicated to discovering and documenting the most promising startups and innovations emerging from every corner of the continent.
          </p>
        </div>
      </div>

      {/* Main Vision Card - Expanded to span reste of width */}
      <div className="md:col-span-8 relative rounded-3xl overflow-hidden min-h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
          alt="Collaboration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-center md:text-left transition-all duration-500">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Target className="w-6 h-6 text-gray-300" />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-gray-300">Our Vision</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter">
            Catalyzing the next decade of African innovation
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarExtras;
