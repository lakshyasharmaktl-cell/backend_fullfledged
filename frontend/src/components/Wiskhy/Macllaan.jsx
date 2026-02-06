import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Leaf, Wind, Shield, Award, MapPin, Star } from 'lucide-react';

const slugify = (text) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const WHISKY_DATA = [
  { 
    id: '12-oak', 
    name: "Sherry Oak 12 Years Old", 
    rating: 4.8, 
    image: "https://www.shutterstock.com/image-photo/jakarta-indonesia-september-20-2023photo-260nw-2364194921.jpg",
    color: "Rich Gold",
    nose: "Vanilla with a hint of ginger, dried fruits, sherry sweetness and wood smoke.",
    palate: "Deliciously smooth, with rich dried fruits and sherry, balanced with wood smoke.",
    finish: "Sweet toffee and dried fruits, with wood smoke and spice.",
    abv: "40%",
    cask: "Sherry Seasoned Oak Casks from Jerez"
  },
  { 
    id: '15-double', 
    name: "Double Cask 15 Years Old", 
    rating: 4.9, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6s6ImNuLXbSwbTUggbLU_Ic8LXJTuCRX9bEXH-xKBsEs68iwbD9Yz3aGzLSXgBSCujBZxlwkGEyN7T1Cnxm4_&s&ec=121528423",
    color: "Golden Butterscotch",
    nose: "Dried fruit, toffee and vanilla with smooth oak and baked apple.",
    palate: "Sweet raisin and sultana builds with hints of vanilla, wood spice and citrus.",
    finish: "Warm with ginger turning to caramel and citrus.",
    abv: "43%",
    cask: "American & European Sherry Seasoned Oak"
  },
  { 
    id: 'rare-cask', 
    name: "Rare Cask 2024 Release", 
    rating: 5.0, 
    image: "https://t3.ftcdn.net/jpg/05/44/48/66/360_F_544486674_RGqImMsVN41zfsvPHm3gQrSBxuKbdKoL.jpg",
    color: "Ruby Red",
    nose: "Soft notes of opulent vanilla and raisin.",
    palate: "An intense sweet raisin dominates before vanilla and dark chocolate.",
    finish: "Long, rich and velvety.",
    abv: "43%",
    cask: "Hand-picked Sherry Seasoned Oak"
  },
  { 
    id: 'estate', 
    name: "The Macallan Estate", 
    rating: 4.7, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqtXIbSO0lQwSFKr7gjs9lK6aK6th7ySJbkLT4U0Y1Cp0fBd6oWKKpcnmbCyL9Vba6F6fuzsH9DRgX8ouyRvl&s&ec=121528423",
    color: "Chestnut",
    nose: "Warm, comforting and homely notes of cinnamon.",
    palate: "Soft and warming with wood spice and dry oak.",
    finish: "A sweet yet dry finish with fresh fig.",
    abv: "43%",
    cask: "Rare Spirit containing Homegrown Barley"
  }
].map(item => ({ ...item, slug: slugify(item.name) }));

const PILLARS = [
  { title: "Spiritual Home", desc: "Easter Elchies House, built in 1700.", icon: <MapPin size={24} /> },
  { title: "Curiously Small Stills", desc: "Providing the unique richness of spirit.", icon: <Shield size={24} /> },
  { title: "Finest Cut", desc: "Only the best spirit is selected for maturation.", icon: <Award size={24} /> },
];

export default function Maclaan() {
  // We keep the state so the yellow banner can still change the view if clicked, 
  // but the auto-sliding useEffect has been removed.
  const [activeIndex, setActiveIndex] = useState(0);
  const current = WHISKY_DATA[activeIndex];

  return (
    <div className="bg-white text-zinc-900 font-serif mt-20">
      
      {/* 1. FIXED HERO SECTION */}
      <section className="min-h-[90vh] flex items-center px-8 lg:px-24 relative overflow-hidden bg-white">
        <div className="absolute top-20 right-[-5%] text-[15rem] font-bold text-zinc-50 pointer-events-none select-none z-0">
          1824
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
          <div className="lg:w-1/2 space-y-8 py-10">
            <div className="space-y-2">
              <span className="text-[#b38b00] tracking-[0.5em] text-xs uppercase font-sans font-bold">The Heritage Collection</span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 uppercase leading-none">
                THE <br /> <span className="text-[#b38b00]">MACALLAN</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="flex text-[#b38b00]">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(current.rating) ? "currentColor" : "none"} />)}
               </div>
               <span className="text-zinc-400 font-sans text-xs tracking-widest uppercase">{current.rating} / 5.0 Rating</span>
            </div>

            <div className="min-h-[120px]"> 
               <p className="text-zinc-500 text-xl max-w-lg leading-relaxed italic animate-in fade-in duration-700">"{current.nose}"</p>
            </div>
            
            <Link to={`/the-macallan/${current.slug}`} className="inline-block px-12 py-4 bg-zinc-900 text-white hover:bg-[#b38b00] transition-all uppercase tracking-[0.3em] text-xs font-bold shadow-xl">
              Explore The Expression
            </Link>
          </div>

          {/* Fixed Right Image Position */}
          <div className="lg:w-1/2 flex justify-center items-center relative min-h-[500px] w-full">
            <div className="absolute inset-0 bg-[#b38b00]/5 blur-[100px] rounded-full"></div>
            <img 
              key={current.id}
              src={current.image} 
              alt={current.name} 
              className="max-h-[500px] w-auto object-contain drop-shadow-2xl animate-in zoom-in fade-in duration-1000 relative z-20 rounded-md" 
            />
          </div>
        </div>
      </section>

      {/* 2. THE SIX PILLARS */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100 px-8 lg:px-24">
        <div className="text-center mb-20">
          <h2 className="text-[#b38b00] tracking-[0.5em] text-sm uppercase mb-4 font-bold">Foundation</h2>
          <h3 className="text-5xl font-bold uppercase text-zinc-900">The Six Pillars</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {PILLARS.map((p, i) => (
            <div key={i} className="text-center group p-10 bg-white shadow-sm border border-zinc-100 hover:shadow-xl transition-all">
              <div className="text-[#b38b00] flex justify-center mb-6 group-hover:scale-110 transition-transform">{p.icon}</div>
              <h4 className="text-xl uppercase mb-4 tracking-widest text-zinc-800">{p.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. YELLOW BANNER (Manual Selection Gallery) */}
      <section className="py-20 bg-[#f4c430] overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/4 text-zinc-900">
               <h3 className="text-4xl font-bold uppercase tracking-tighter leading-none mb-4">The Complete <br/> Gallery</h3>
               <p className="font-sans text-xs tracking-widest opacity-80 uppercase font-bold">Click an expression to view details above.</p>
            </div>
            
            <div className="md:w-3/4 flex gap-6 overflow-x-auto pb-6 no-scrollbar">
              {WHISKY_DATA.map((whisky, index) => (
                <div 
                  key={whisky.id} 
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[180px] p-6 rounded-sm transition-all duration-500 cursor-pointer 
                    ${activeIndex === index ? 'bg-white shadow-xl scale-105' : 'bg-white/30 hover:bg-white/60'}`}
                >
                  <img src={whisky.image} alt={whisky.name} className="h-40 mx-auto object-contain drop-shadow-md" />
                  <p className="mt-4 text-[9px] font-black text-center text-zinc-900 uppercase tracking-[0.2em] line-clamp-2">
                    {whisky.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HERITAGE BANNER */}
      <section className="py-32 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">Crafted Since 1824</h2>
          <div className="h-px bg-[#b38b00] w-24 mx-auto"></div>
          <p className="text-zinc-400 text-lg leading-relaxed font-sans tracking-wide">
            Our reputation for the extraordinary is characterized by the exceptional oak casks for which The Macallan is renowned.
          </p>
        </div>
      </section>
    </div>
  );
}