import React, { useState } from 'react';
import { Mail, Globe, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoMain from '../assets/logo-main.png';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNewsletterClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <footer className="bg-primary text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand and Mission */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30">
                  <img src={logoMain} alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <span className="text-xl font-bold tracking-tight">Africa In Progress</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                Tracking the exponential growth of the African startup ecosystem.
              </p>
              <div className="flex bg-white/10 rounded-xl p-1 focus-within:bg-white/20 transition-colors">
                 <Search className="w-5 h-5 text-gray-400 m-2" />
                 <input 
                   type="text" 
                   placeholder="Search ecosystem..." 
                   className="bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-400 w-full"
                 />
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-6 text-gray-200">Menu</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/founders" className="hover:text-white transition-colors">Founders</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="font-bold mb-6 text-gray-200">Join Our Newsletter</h4>
              <div className="relative mb-6 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-white/30 placeholder:text-gray-500"
                />
                <button 
                  onClick={handleNewsletterClick}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm">
                © 2024 Africa In Progress. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white p-8 rounded-[2rem] shadow-2xl max-w-sm w-full text-center"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Coming Soon</h3>
              <p className="text-gray-500 font-medium">We are currently setting up our newsletter infrastructure. Please check back later!</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
