import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`} className="block">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="flex flex-col group cursor-pointer"
      >
        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 shadow-2xl shadow-primary/5">
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
          <div className="absolute top-6 left-6">
            <span className="px-5 py-2.5 bg-white/90 backdrop-blur-md text-primary rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 mb-4">
          <span>{post.date}</span>
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-2xl font-black text-primary mb-5 line-clamp-2 leading-tight group-hover:text-primary/70 transition-colors tracking-tighter">
          {post.title}
        </h3>

        <p className="text-gray-500 text-base font-medium mb-8 line-clamp-2 leading-relaxed opacity-80">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-100 object-cover"
            />
            <span className="text-xs font-black uppercase tracking-widest text-primary/80">{post.author.name}</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <span className="text-xl leading-none pt-0.5">→</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PostCard;
