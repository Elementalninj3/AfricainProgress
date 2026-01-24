import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ post }) => {
  if (!post) return null;

  return (
    <section className="relative w-full px-4 md:px-6 lg:px-12 py-6">
      <Link to={`/post/${post.id}`} className="block">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative min-h-[500px] lg:h-[85vh] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/10 cursor-pointer"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
          {/* Enhanced Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-6 md:p-12 lg:p-20 w-full max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 mb-4 md:mb-8"
            >
              <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-white text-primary rounded-xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                {post.category}
              </span>
              <div className="hidden md:block h-[1px] w-12 bg-white/30" />
              <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">{post.readTime}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-10 leading-[1.1] tracking-tighter"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex items-center gap-4 py-2 pr-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 border-white/20 ml-2 object-cover"
                />
                <div className="text-white">
                  <p className="font-black text-xs md:text-sm uppercase tracking-wider">{post.author.name}</p>
                  <p className="text-[10px] md:text-xs text-gray-300 font-bold">{post.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-primary rounded-2xl text-xs md:text-sm font-black hover:bg-gray-100 transition-all shadow-2xl active:scale-95 group/btn">
                READ ARTICLE
                <span className="text-lg md:text-xl leading-none pt-0.5 group-hover/btn:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          </div>

          {/* Dynamic Pagination Bars */}
          <div className="absolute bottom-10 md:bottom-20 right-6 md:right-20 hidden lg:flex flex-col gap-3">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 48 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-1 bg-white rounded-full"
            ></motion.div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="w-1 bg-white/30 rounded-full"
            ></motion.div>
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="w-1 bg-white/30 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
