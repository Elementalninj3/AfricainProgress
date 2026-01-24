import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, Globe, ChevronDown, Menu, X } from 'lucide-react';
import logoMain from '../assets/logo-main.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'News', path: '/' },
    { name: 'Founders', path: '/founders' },
    { name: 'About Us', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 lg:px-12"
    >
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-4 cursor-pointer group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/30 transition-transform group-hover:scale-110">
              <img src={logoMain} alt="Logo" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-primary leading-none">Africa In Progress</span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mt-1.5">Catalyzing Innovation</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all ${
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
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search ecosystem..." 
                className="pl-12 pr-6 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-primary/5 w-64 transition-all focus:bg-white focus:w-80"
              />
            </div>
            
            <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="px-8 py-3.5 bg-primary text-white rounded-2xl text-sm font-black hover:bg-gray-800 transition-all shadow-xl shadow-primary/20 active:scale-95">
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
              <button className="w-full text-center py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20">JOIN NEWSLETTER</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
