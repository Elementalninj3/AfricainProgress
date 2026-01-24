import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <main className="flex-grow px-6 lg:px-12 py-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[2px] w-16 bg-primary" />
          <span className="text-sm font-black uppercase tracking-[0.3em] text-primary/40">Our Mission</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-black text-primary mb-8 md:mb-12 tracking-tighter leading-none">
          Africa <br /> In Progress
        </h1>
        
        <div className="space-y-8 md:space-y-12 text-base md:text-xl lg:text-2xl font-medium text-gray-500 leading-relaxed lg:leading-[2] italic">
          <p>
            We are a digital-first editorial platform tracking the exponential growth of the African startup ecosystem.
          </p>
          <p>
            By highlighting the radical innovators, sustainable technologies, and capital flows shaping the continent's digital infrastructure, we aim to catalyze the next decade of African innovation.
          </p>

        </div>
        

      </motion.div>
    </main>
  );
};

export default AboutUs;
