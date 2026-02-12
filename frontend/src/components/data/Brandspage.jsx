import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Star, History, Award, MapPin } from "lucide-react";
import { BRANDS } from "../Pages/brands";

export default function BrandsPage() {
  const { brandSlug } = useParams();
  const brand = BRANDS[brandSlug];

  // Auto-top scroll when active whisky changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [brandSlug]);

  if (!brand) {
    return <div className="mt-40 text-center text-4xl">Brand Not Found</div>;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const current = brand.whiskies[activeIndex];

  return (
    <div className="bg-white text-zinc-900 font-serif mt-20 overflow-x-hidden selection:bg-amber-100">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[100vh] flex items-center px-8 lg:px-24 overflow-hidden">
        {/* ENHANCED EST BACKGROUND TEXT */}
        <div className="absolute right-[-5%] top-20 text-[10rem] md:text-[15rem] lg:text-[22rem] 
                        font-black text-zinc-50/80 tracking-tighter z-0 select-none leading-none">
          {brand.est || brand.since}
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* TEXT */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-amber-600 font-sans font-bold tracking-[0.4em] uppercase text-xs">
                Established {brand.est || brand.since}
              </p>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
                THE <br />
                <span style={{ color: brand.themeColor }}>
                  {brand.brandName}
                </span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(current.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm font-sans uppercase tracking-widest text-zinc-400 font-bold">
                {current.rating} / 5.0 Rating
              </span>
            </div>

            <p className="text-zinc-500 italic text-2xl max-w-xl leading-relaxed">
              “{current.nose}”
            </p>

            <div className="flex gap-10 text-xs font-sans uppercase tracking-[0.2em] font-black text-zinc-400">
              <div className="flex flex-col gap-1">
                <span className="text-zinc-300">Volume</span>
                <span className="text-zinc-900">ABV {current.abv}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-zinc-300">Cask Type</span>
                <span className="text-zinc-900">{current.cask}</span>
              </div>
            </div>
          </div>

          {/* BOTTLE IMAGE */}
          <div className="relative flex justify-center items-center group">
            <div className="absolute w-[80%] h-[80%] rounded-full bg-neutral-100 scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
            <img
              src={current.image}
              alt={current.name}
              className="relative z-10 max-h-[550px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_45px_45px_rgba(0,0,0,0.25)] transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* NEW: ESTABLISHED IMPACT SECTION */}
      <section className="py-24 bg-zinc-900 text-white px-8 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-2">
                <h3 className="text-zinc-500 font-sans uppercase tracking-[0.3em] text-xs font-bold">Founded In</h3>
                <p className="text-7xl font-black tracking-tighter text-amber-500">{brand.est || brand.since}</p>
            </div>
            <div className="hidden md:block h-24 w-[1px] bg-zinc-800"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1">
                <div className="flex gap-5 items-start">
                    <History className="text-amber-500 shrink-0" size={30} />
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-2 font-sans">Centuries of Mastery</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed font-sans">Preserving traditional distillation methods passed down through generations since our establishment.</p>
                    </div>
                </div>
                <div className="flex gap-5 items-start">
                    <Award className="text-amber-500 shrink-0" size={30} />
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-2 font-sans">Global Excellence</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed font-sans">A commitment to quality that has earned {brand.brandName} international acclaim for over {new Date().getFullYear() - (brand.est || brand.since)} years.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* BRAND BANNER */}
      <section className="relative h-[70vh] overflow-hidden group">
        <img
          src={brand.banner?.image}
          alt={brand.brandName}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="space-y-6 max-w-4xl">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
              {brand.banner?.title}
            </h2>
            <p className="text-xl text-zinc-100 font-sans tracking-wide max-w-2xl mx-auto opacity-90">
              {brand.banner?.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section className="py-32 px-8 lg:px-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-zinc-200">
               <MapPin className="text-amber-600" size={16} />
               <span className="font-sans text-[10px] font-bold uppercase tracking-widest">Heritage Site</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              The Legacy <br/> Continues.
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed font-sans">
              {brand.heritage}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 border border-zinc-200 translate-x-8 translate-y-8 rounded-2xl transition-transform group-hover:translate-x-4 group-hover:translate-y-4"></div>
            <img
              src={brand.banner?.image}
              alt="Distillery Heritage"
              className="relative z-10 rounded-2xl shadow-2xl max-h-[450px] object-cover w-full transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-28 bg-[#f4c430] overflow-hidden">
        <div className="text-center mb-20 space-y-2">
          <h2 className="text-5xl font-black uppercase tracking-tighter">
            Signature Expressions
          </h2>
          <p className="font-sans uppercase tracking-[0.4em] text-[10px] font-black text-black/60">Curation of Excellence</p>
        </div>

        <div className="flex gap-10 overflow-x-auto px-12 pb-14 no-scrollbar">
          {brand.whiskies.map((w, i) => (
            <div
              key={w.id}
              onClick={() => setActiveIndex(i)}
              className={`min-w-[280px] p-10 cursor-pointer transition-all duration-500 rounded-sm
                ${
                  activeIndex === i
                    ? "bg-white shadow-[0_40px_60px_-15px_rgba(0,0,0,0.3)] scale-105"
                    : "bg-white/30 hover:bg-white/60 opacity-80 hover:opacity-100"
                }`}
            >
              <img
                src={w.image}
                alt={w.name}
                className="h-64 mx-auto object-contain drop-shadow-xl"
              />
              <div className="mt-8 text-center space-y-1">
                <p className="text-[10px] uppercase font-sans font-black tracking-widest text-zinc-400">Expression {i+1}</p>
                <h3 className="text-sm uppercase font-black tracking-widest">{w.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRAFT PROCESS */}
      <section className="py-32 px-8 lg:px-24 bg-white">
        <h2 className="text-5xl font-black uppercase tracking-tighter text-center mb-24">
          The Craft Process
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx2sLhXO-aYj0feFN11manxJ4gGX9oPAa5FWZa_9VzYES6823ZmuXwRVMmWHd0Yd9L1WKKeN_2MbOGsB24e6Zp&s&ec=121528423",
            "https://thumbs.dreamstime.com/b/macallan-whiskey-bottle-glass-ice-cubes-wooden-t-table-bar-bright-representative-elite-scottish-128979198.jpg",
            "https://images.unsplash.com/photo-1569529465841-dfecdab7503b"
          ].map((url, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl group shadow-xl">
               <img src={url} className="object-cover h-[450px] w-full group-hover:scale-110 transition-transform duration-1000" alt="Process" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}