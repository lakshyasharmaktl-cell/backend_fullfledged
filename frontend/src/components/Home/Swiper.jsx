import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs, Parallax } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Play, Pause, ShoppingBag, ArrowRight, Star, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const WHISKY_DATA = [
  {
    id: 1,
    name: "Jameson",
    suffix: "Bold",
    subtitle: "Triple Distilled Irish Heritage",
    desc: "A powerful expression of pot still richness. Matured in heavily charred bourbon barrels to reveal notes of toasted wood, intense spices, and exotic fruits.",
    img: "https://assets.architecturaldigest.in/photos/6041dbd94cfb7d2fe3ff6b54/16:9/w_2560%2Cc_limit/Whisky-whiskey-scotch-burbon-alcohol.jpg",
    specs: { age: "12Y", abv: "46%", profile: "Spicy" },
    accent: "#D4A76A"
  },
  {
    id: 2,
    name: "Glenfiddich",
    suffix: "18",
    subtitle: "Small Batch Reserve Scotch",
    desc: "Every batch is individually numbered. A truly exceptional single malt, the result of eighteen years of care and attention from our Malt Master.",
    img: "https://images.unsplash.com/photo-1527281473232-9c47ce5b1ad5?auto=format&fit=crop&q=80&w=1600",
    specs: { age: "18Y", abv: "40%", profile: "Oak" },
    accent: "#B8860B"
  },
  {
    id: 3,
    name: "Johnnie",
    suffix: "Blue",
    subtitle: "The Masterpiece of Blending",
    desc: "Only one in every ten thousand casks has the elusive quality, character and flavor to deliver the remarkable signature taste.",
    img: "https://images.unsplash.com/photo-1531214159280-079b95d26139?auto=format&fit=crop&q=80&w=1600",
    specs: { age: "Rare", abv: "40%", profile: "Smoke" },
    accent: "#1E3A8A"
  }
];

export default function LuxuryHero() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen bg-[#020617] overflow-hidden text-white font-sans">
      
      {/* BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs, Parallax]}
        effect="fade"
        parallax={true}
        loop={true}
        speed={1200}
        autoplay={{ delay: 7000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full z-10"
      >
        {WHISKY_DATA.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-full w-full grid grid-cols-12 items-center px-6 lg:px-20">
              
              {/* IMAGE SECTION with Masking */}
              <div className="absolute inset-0 z-0">
                <motion.div 
                  initial={{ scale: 1.15, opacity: 0 }}
                  animate={{ scale: activeIndex === index ? 1 : 1.15, opacity: 0.6 }}
                  transition={{ duration: 1.5 }}
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-transparent to-[#020617]" />
              </div>

              {/* TEXT CONTENT */}
              <div className="col-span-12 lg:col-span-7 z-20">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 mb-4"
                      >
                        <Award className="w-5 h-5 text-amber-500" />
                        <span className="text-amber-500 uppercase tracking-[0.5em] text-[10px] font-black">
                          {item.subtitle}
                        </span>
                      </motion.div>

                      <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-2"
                      >
                        {item.name} <br />
                        <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                          {item.suffix}
                        </span>
                      </motion.h1>

                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-lg text-lg text-slate-300 font-light leading-relaxed mb-10"
                      >
                        {item.desc}
                      </motion.p>

                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-6"
                      >
                        <button className="relative overflow-hidden px-10 py-5 bg-white text-black group transition-all">
                          <span className="relative z-10 flex items-center gap-3 font-bold text-xs uppercase tracking-widest">
                            Acquire Bottle <ShoppingBag className="w-4 h-4" />
                          </span>
                          <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                        
                        <button className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold group">
                          Tasting Notes <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SPECIFICATION SIDEBAR (Floating Glass Card) */}
              <div className="hidden lg:flex col-span-5 justify-end z-20">
                <motion.div 
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0, x: activeIndex === index ? 0 : 100 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl w-72 space-y-8"
                >
                  {Object.entries(item.specs).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-amber-500 uppercase text-[9px] font-bold tracking-widest mb-1 opacity-60">{key}</p>
                      <p className="text-3xl font-light tracking-tight">{value}</p>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />)}
                    </div>
                    <p className="text-[10px] mt-2 opacity-40 uppercase tracking-widest">Master Distiller Approved</p>
                  </div>
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION OVERLAY */}
      <div className="absolute bottom-10 left-6 lg:left-20 z-30 flex items-end justify-between w-[calc(100%-120px)]">
        
        {/* PROGRESS INDICATOR */}
        <div className="flex items-center gap-4">
          <span className="text-6xl font-black text-white/10">0{activeIndex + 1}</span>
          <div className="h-[2px] w-24 bg-white/10 relative overflow-hidden">
            <motion.div 
              key={activeIndex}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 7, ease: "linear" }}
              className="absolute inset-0 bg-amber-500"
            />
          </div>
          <span className="text-xs font-bold opacity-40 tracking-widest">0{WHISKY_DATA.length}</span>
        </div>

        {/* SWIPER ARROWS */}
        <div className="flex gap-4">
          <button className="custom-prev-luxury group w-16 h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button className="custom-next-luxury group w-16 h-16 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all active:scale-90">
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .stroke-white {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        .swiper-effect-fade .swiper-slide {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </div>
  );
}