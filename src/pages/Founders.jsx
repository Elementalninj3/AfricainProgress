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
          Founder <br /> Perspectives
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-10 md:py-20">
          <div className="p-6 md:p-12 bg-gray-50 rounded-[2rem] md:rounded-[3rem] group cursor-pointer hover:bg-primary transition-colors duration-500">
            <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 mb-4 md:mb-6 block">January 2024</span>
            <h3 className="text-xl md:text-3xl font-black text-primary group-hover:text-white mb-4 md:mb-6 leading-tight">Scale-up Challenges in the Fintech Corridor</h3>
            <p className="text-gray-500 group-hover:text-white/70 text-sm md:text-lg font-medium mb-6 md:mb-8">Discussing cross-border regulatory hurdles with industry leaders.</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 group-hover:bg-white/20"></div>
              <span className="font-black text-primary group-hover:text-white uppercase tracking-widest text-xs md:text-sm italic">Read Transcript →</span>
            </div>
          </div>
          
          <div className="p-6 md:p-12 bg-gray-50 rounded-[2rem] md:rounded-[3rem] group cursor-pointer hover:bg-primary transition-colors duration-500">
            <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-white/40 mb-4 md:mb-6 block">December 2023</span>
            <h3 className="text-xl md:text-3xl font-black text-primary group-hover:text-white mb-4 md:mb-6 leading-tight">The Agritech Revolution in East Africa</h3>
            <p className="text-gray-500 group-hover:text-white/70 text-sm md:text-lg font-medium mb-6 md:mb-8">How mobile-first platforms are scaling impact for small-holder farmers.</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 group-hover:bg-white/20"></div>
              <span className="font-black text-primary group-hover:text-white uppercase tracking-widest text-sm italic">Read Transcript →</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 py-24 border-t border-gray-100/50 text-center">
          <span className="inline-block px-4 py-2 bg-gray-50 text-primary rounded-xl text-xs font-black uppercase tracking-[0.2em] mb-6">In Production</span>
          <h2 className="text-2xl md:text-5xl font-black text-gray-300 mb-6">More Perspectives Loading...</h2>
          <p className="text-gray-400 font-medium italic">Our editors are currently interviewing next-gen founders across Lagos, Nairobi, and Cape Town.</p>
        </div>
      </motion.div>
    </main>
  );
};

export default Founders;
