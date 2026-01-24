import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, ChevronDown, Menu, X, Mail } from 'lucide-react';
import logoMain from '../assets/logo-main.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'News', path: '/' },
    { name: 'Founders', path: '/founders' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNewsletterClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8"
      >
        <div className="w-full mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/30 transition-transform group-hover:scale-110">
                <img src={logoMain} alt="Logo" className="w-6 h-6 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tighter text-primary leading-none">Africa In Progress</span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-1">Catalyzing Innovation</span>
              </div>
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive(link.path) 
                      ? 'text-primary' 
                      : 'text-primary/40 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search ecosystem..." 
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs focus:ring-2 focus:ring-primary/5 w-52 transition-all focus:bg-white focus:w-64"
                />
              </div>
              
              <button className="flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-primary transition-colors">
                <Globe className="w-3.5 h-3.5" />
                <span>EN</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <button 
                onClick={handleNewsletterClick}
                className="px-5 py-2 bg-primary text-white rounded-xl text-[10px] font-black hover:bg-gray-800 transition-all shadow-xl shadow-primary/20 active:scale-95"
              >
                JOIN NEWSLETTER
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl text-gray-600 hover:text-primary bg-gray-50 transition-all active:scale-90"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 px-6 py-10 space-y-6 shadow-2xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xl font-black uppercase tracking-tighter ${
                    isActive(link.path) ? 'text-primary' : 'text-primary/40'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-gray-50 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    handleNewsletterClick();
                  }}
                  className="w-full text-center py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20"
                >
                  JOIN NEWSLETTER
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

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

export default Navbar;
