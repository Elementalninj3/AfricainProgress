import React from 'react';
import { Mail, Globe } from 'lucide-react';
import logoMain from '../assets/logo-main.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                <img src={logoMain} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold tracking-tight">Africa In Progress</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Tracking the exponential growth of the African startup ecosystem. We highlight the innovators and investors shaping the continent's digital future.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Africa In Progress. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-gray-200">The Ecosystem</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Startup Directory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">VC Landscape</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-200">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Market Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech Hub Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events Calendar</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-gray-200">Get Updates</h4>
            <div className="relative mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-white/30 placeholder:text-gray-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>English (Africa)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
