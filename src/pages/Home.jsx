import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import PostCard from '../components/PostCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import SidebarExtras from '../components/SidebarExtras';
import { BLOG_POSTS } from '../data/posts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    }
  }
};

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(post => post.featured);
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') {
      return BLOG_POSTS.filter(post => !post.featured);
    }
    return BLOG_POSTS.filter(post => post.category === activeCategory && !post.featured);
  }, [activeCategory]);

  return (
    <main className="flex-grow">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Hero post={featuredPost} />
      </motion.div>

      <section className="px-6 lg:px-12 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-16 bg-primary" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-primary/40">Ecosystem Insight</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-primary mb-8 tracking-tighter leading-none">
              Sustainable <br /> Digital Growth
            </h2>
            <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
              We track the exponential technologies and radical entrepreneurs building Africa's digital infrastructure.
            </p>
          </div>
          
          <Filters 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24"
          >
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <PostCard post={post} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 text-center bg-gray-50 rounded-[3rem]"
              >
                <p className="text-gray-400 text-2xl font-black uppercase tracking-widest">No matching insights found.</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <Pagination />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40"
        >
          <SidebarExtras />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
