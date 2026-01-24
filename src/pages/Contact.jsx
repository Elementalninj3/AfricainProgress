import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "africainprogressblog@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <span className="text-sm font-black uppercase tracking-[0.3em] text-primary/40">Get in Touch</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-8xl font-black text-primary mb-8 md:mb-12 tracking-tighter leading-none">
          Contact <br /> Us
        </h1>
        
        <div className="space-y-8 md:space-y-12 text-base md:text-xl lg:text-2xl font-medium text-gray-500 leading-relaxed lg:leading-[2] italic">
          <p>
            Have a story tip, partnership inquiry, or just want to say hello? We'd love to hear from you.
          </p>
          
          <div className="bg-gray-50 p-8 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 justify-between group hover:bg-primary transition-colors duration-500">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                 <span className="text-xs font-black uppercase tracking-widest text-primary/40 group-hover:text-white/60 mb-1">Email Us</span>
                 <a href={`mailto:${email}`} className="text-lg md:text-2xl font-black text-primary group-hover:text-white break-all md:break-normal transition-colors">{email}</a>
              </div>
            </div>
            
            <button 
              onClick={handleCopy}
              className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors shadow-lg active:scale-95 flex items-center gap-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

      </motion.div>
    </main>
  );
};

export default Contact;
