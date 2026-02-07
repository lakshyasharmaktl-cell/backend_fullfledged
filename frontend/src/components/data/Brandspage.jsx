import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { BRANDS } from "../Pages/brands";

export default function BrandsPage() {
  const { brandSlug } = useParams();
  const brand = BRANDS[brandSlug];

  if (!brand) {
    return <div className="mt-40 text-center text-4xl">Brand Not Found</div>;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const current = brand.whiskies[activeIndex];

  return (
    <div className="bg-white text-zinc-900 font-serif mt-20">

      {/* HERO */}
      <section className="min-h-[90vh] flex items-center px-8 lg:px-24 relative">
        <div className="absolute top-20 right-[-5%] text-[15rem] font-bold text-zinc-50">
          {brand.since}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl font-bold uppercase">
              THE <span style={{ color: brand.themeColor }}>{brand.brandName}</span>
            </h1>

            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(current.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-xs uppercase">{current.rating} / 5</span>
            </div>

            <p className="text-zinc-500 italic text-xl max-w-lg">
              “{current.nose}”
            </p>
          </div>

          <img
            src={current.image}
            className="max-h-[500px] object-contain drop-shadow-2xl"
            alt={current.name}
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 bg-[#f4c430]">
        <div className="flex gap-6 overflow-x-auto px-10">
          {brand.whiskies.map((w, i) => (
            <div
              key={w.id}
              onClick={() => setActiveIndex(i)}
              className={`min-w-[180px] p-6 cursor-pointer transition-all ${
                activeIndex === i ? "bg-white shadow-xl scale-105" : "bg-white/40"
              }`}
            >
              <img src={w.image} className="h-40 mx-auto object-contain" />
              <p className="mt-4 text-[10px] uppercase text-center font-bold">
                {w.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
