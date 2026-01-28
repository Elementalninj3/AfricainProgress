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
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-black text-primary mb-8 md:mb-12 tracking-tighter leading-none">
          Founders We Have Interviewed
        </h1>
        
        <div className="py-20">
            <h2 className="text-4xl md:text-6xl font-black text-gray-300 mb-6">Coming Soon...</h2>
            <p className="text-gray-400 font-medium italic text-xl">We are currently interviewing the next generation of African founders.</p>
        </div>
      </motion.div>
    </main>
  );
};

export default Founders;
