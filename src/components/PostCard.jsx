import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block h-full">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col h-full group cursor-pointer bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative aspect-[3/2] rounded-[1.5rem] overflow-hidden mb-6 shadow-lg shadow-primary/5">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-md text-primary rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-3 px-2">
          <span>{post.date}</span>
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-base sm:text-xl md:text-2xl font-black text-primary mb-2 md:mb-3 line-clamp-2 leading-[1.2] group-hover:text-primary/70 transition-colors tracking-tighter px-2">
          {post.title}
        </h3>

        <p className="text-gray-500 text-xs md:text-base font-medium mb-4 md:mb-6 line-clamp-2 leading-relaxed opacity-80 px-2 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto px-2">
          <div className="flex items-center gap-3">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-100 object-cover"
            />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-primary/80">{post.author.name}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="text-lg leading-none pt-0.5">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PostCard;
