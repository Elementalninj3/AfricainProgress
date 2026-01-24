import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share2, Bookmark, Clock, Check, Calendar, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/posts';

const Article = () => {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-primary">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Article Not Found</h2>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow bg-white">
      {/* 1. EDITORIAL HEADER (Hero Style) */}
      <section className="px-6 lg:px-12 pt-12 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link to="/" className="inline-flex items-center gap-3 text-primary/30 hover:text-primary transition-all mb-16 group">
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">The Feed</span>
          </Link>

          {/* Title & Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                {post.category}
              </span>
              <span className="text-primary/20">•</span>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/40">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary mb-12 tracking-tighter leading-[0.95] md:-ml-1">
              {post.title}
            </h1>

            {/* Author & Actions Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-y border-gray-100">
              <div className="flex items-center gap-4">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all cursor-pointer ring-4 ring-gray-50 object-cover"
                />
                <div className="text-sm">
                  <p className="font-black text-primary leading-none mb-1 uppercase tracking-wider">{post.author.name}</p>
                  <p className="text-primary/40 font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleShare}
                  className="px-6 py-3 rounded-full bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all text-xs font-black uppercase tracking-widest flex items-center gap-2"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span key="copied" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        COPIED
                      </motion.span>
                    ) : (
                      <motion.span key="share" className="flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> SHARE
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
                <button className="p-3 rounded-full bg-gray-50 text-primary hover:bg-primary hover:text-white transition-all">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. HERO IMAGE (Substack/Medium Style) */}
        <div className="max-w-7xl mx-auto mb-24 px-0 md:px-0 lg:px-12">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="relative aspect-[21/10] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/5"
          >
            <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* 3. MAIN CONTENT (Editorial Columns) */}
        <div className="max-w-5xl mx-auto px-4">
          <article 
            className="prose prose-xl md:prose-2xl prose-primary max-w-none 
              [&_p]:text-2xl [&_p]:leading-[1.9] [&_p]:font-medium [&_p]:mb-12 [&_p]:text-gray-700
              prose-headings:font-black prose-headings:text-primary prose-headings:tracking-tighter
              prose-h1:text-5xl md:prose-h1:text-7xl prose-h1:mb-12
              [&_h2]:text-5xl [&_h2]:md:text-6xl [&_h2]:font-black [&_h2]:text-primary [&_h2]:tracking-tighter [&_h2]:mt-24 [&_h2]:mb-10
              [&_h3]:text-3xl [&_h3]:md:text-4xl [&_h3]:font-black [&_h3]:text-primary [&_h3]:tracking-tighter [&_h3]:mt-16 [&_h3]:mb-6
              prose-blockquote:border-l-0 prose-blockquote:bg-gray-50/50 prose-blockquote:p-12 prose-blockquote:rounded-[3rem] prose-blockquote:italic prose-blockquote:text-3xl prose-blockquote:font-black prose-blockquote:text-primary/90 prose-blockquote:my-20 prose-blockquote:shadow-inner
              prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-24
              prose-ul:list-disc prose-ul:marker:text-primary/20 prose-ul:my-10
              prose-ol:list-decimal prose-ol:marker:text-primary/40 prose-ol:my-10
              [&_li]:text-2xl [&_li]:pl-2 [&_li]:my-4 [&_li]:text-gray-600 [&_li]:font-medium
              prose-strong:font-black prose-strong:text-primary
              prose-em:font-bold prose-em:italic
              [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-[3rem] [&_iframe]:my-24 [&_iframe]:shadow-2xl"
            dangerouslySetInnerHTML={{ __html: post.content || '<p>Editorial coverage of this venture is being finalized by our analyst team...</p>' }}
          />

          {/* Article Footer */}
          <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mb-8">
              <User className="w-10 h-10 text-primary/10" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/40 mb-2">Editor's Note</p>
            <p className="text-gray-400 text-sm max-w-md italic">
              All data presented in this report is sourced from the Africa In Progress startup tracker and verified through primary interviews.
            </p>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED (Clean minimalist grid) */}
      <section className="px-6 lg:px-12 py-32 bg-gray-50/30 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 mb-4">The Library</p>
              <h2 className="text-5xl font-black text-primary tracking-tighter">Keep Reading</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3).map(p => (
              <Link to={`/post/${p.id}`} key={p.id} className="group">
                <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <img src={p.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
                </div>
                <h4 className="text-2xl font-black text-primary tracking-tighter line-clamp-2 leading-tight group-hover:text-primary/70 uppercase">
                  {p.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Article;
