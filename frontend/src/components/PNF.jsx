import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Bookmark, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 1,
    category: "Heritage",
    title: "The Art of Wood: How Casks Define Flavor",
    excerpt: "Exploring the chemical dance between European oak and maturing spirit...",
    author: "Master Blender",
    date: "Feb 12, 2026",
    image: "https://images.unsplash.com/photo-1508253195889-0f40f0984920?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    category: "Collectibles",
    title: "Rare Finds: The 1964 Archival Collection",
    excerpt: "A deep dive into the most sought-after bottles of the current decade.",
    author: "Jane Smith",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1527281473222-793895bf44f9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    category: "Mixology",
    title: "Beyond the Neat Pour: Modern Classics",
    excerpt: "Elevating the gold standard with contemporary ingredients.",
    author: "Head Mixologist",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-24 pb-20 ">
      
      {/* Blog Header & Search */}
      <section className="px-6 lg:px-20 py-12 border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-[#b38b00] tracking-[0.4em] text-xs uppercase font-bold"
            >
              The Archives
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter uppercase mt-2">
              WhiskyHub <span className="text-[#b38b00]">Journal</span>
            </h1>
          </div>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#b38b00] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search the archives..." 
              className="pl-12 pr-6 py-4 bg-zinc-50 border border-zinc-200 rounded-full w-full md:w-80 outline-none focus:ring-2 focus:ring-[#b38b00]/20 focus:border-[#b38b00] transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Post (Full Width) */}
      <section className="px-6 lg:px-20 py-12">
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative h-[60vh] rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=1200" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-8 lg:p-16">
            <div className="max-w-3xl space-y-4">
              <span className="bg-[#b38b00] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Featured Story</span>
              <h2 className="text-4xl md:text-6xl text-white font-serif font-bold leading-tight uppercase">
                The Resurrection of Ancient Distilleries
              </h2>
              <p className="text-zinc-300 text-lg hidden md:block">
                Tracing the footsteps of legends through the mist of the Scottish Highlands.
              </p>
              <Link to="/blog/1" className="inline-flex items-center gap-2 text-[#b38b00] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors pt-4">
                Read Masterpiece <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {BLOG_POSTS.map((post, index) => (
          <motion.article 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={post.title} />
              <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#b38b00] transition-colors">
                <Bookmark size={18} />
              </button>
            </div>
            <div className="space-y-3">
              <span className="text-[#b38b00] text-xs font-bold uppercase tracking-widest">{post.category}</span>
              <h3 className="text-2xl font-serif font-bold group-hover:text-[#b38b00] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase font-bold tracking-tighter">
                  <User size={14} className="text-[#b38b00]" /> {post.author}
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-xs">
                  <Calendar size={14} /> {post.date}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
}