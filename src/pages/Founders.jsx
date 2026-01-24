import React from 'react';
import { motion } from 'framer-motion';

const Founders = () => {
  return (
    <main className="flex-grow px-6 lg:px-12 py-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-16 bg-primary" />
          <span className="text-sm font-black uppercase tracking-[0.3em] text-primary/40">Exclusive Voices</span>
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-primary mb-12 tracking-tighter leading-none">
          Founder <br /> Perspectives
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
          <div className="p-12 bg-gray-50 rounded-[3rem] group cursor-pointer hover:bg-primary transition-colors duration-500">
            <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 mb-6 block">January 2024</span>
            <h3 className="text-3xl font-black text-primary group-hover:text-white mb-6 leading-tight">Scale-up Challenges in the Fintech Corridor</h3>
            <p className="text-gray-500 group-hover:text-white/70 text-lg font-medium mb-8">Discussing cross-border regulatory hurdles with industry leaders.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-white/20"></div>
              <span className="font-black text-primary group-hover:text-white uppercase tracking-widest text-sm italic">Read Transcript →</span>
            </div>
          </div>
          
          <div className="p-12 bg-gray-50 rounded-[3rem] group cursor-pointer hover:bg-primary transition-colors duration-500">
            <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 mb-6 block">December 2023</span>
            <h3 className="text-3xl font-black text-primary group-hover:text-white mb-6 leading-tight">The Agritech Revolution in East Africa</h3>
            <p className="text-gray-500 group-hover:text-white/70 text-lg font-medium mb-8">How mobile-first platforms are scaling impact for small-holder farmers.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-white/20"></div>
              <span className="font-black text-primary group-hover:text-white uppercase tracking-widest text-sm italic">Read Transcript →</span>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Founders;
