import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ post }) => {
  if (!post) return null;

  return (
    <section className="relative w-full px-6 lg:px-12 py-6">
      <Link to={`/post/${post.id}`} className="block">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative h-[650px] w-full rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-primary/10 cursor-pointer"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
          {/* Modern Layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-10 md:p-20 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="inline-block px-5 py-2 bg-white text-primary rounded-xl text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                {post.category}
              </span>
              <div className="h-[1px] w-12 bg-white/30" />
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{post.readTime}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 leading-[1.05] tracking-tighter"
            >
              {post.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-4 py-2 pr-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-14 h-14 rounded-xl border-2 border-white/20 ml-2 object-cover"
                />
                <div className="text-white">
                  <p className="font-black text-sm uppercase tracking-wider">{post.author.name}</p>
                  <p className="text-xs text-gray-300 font-bold">{post.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl text-sm font-black hover:bg-gray-100 transition-all shadow-2xl active:scale-95">
                READ ARTICLE
                <span className="text-xl leading-none pt-0.5">→</span>
              </div>
            </motion.div>
          </div>

          {/* Dynamic Pagination Bars */}
          <div className="absolute bottom-20 right-20 hidden lg:flex flex-col gap-3">
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
