import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center px-6 mt-12">
      
      <div className="max-w-3xl text-center space-y-10">

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[9rem] md:text-[12rem] font-serif font-bold text-zinc-200 leading-none"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <span className="text-[#b38b00] tracking-[0.4em] text-xs uppercase font-bold">
            Page Not Found
          </span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase">
            Lost in the Archives
          </h2>

          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
            The page you’re looking for has either been moved, archived, or never
            existed. Let’s guide you back to familiar territory.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative max-w-md mx-auto"
        >
          
         
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#b38b00] text-white uppercase tracking-widest text-sm font-bold hover:bg-zinc-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <Link
            to="/blog"
            className="uppercase tracking-widest text-sm font-bold text-zinc-500 hover:text-[#b38b00] transition-colors"
          >
            Visit Journal
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
