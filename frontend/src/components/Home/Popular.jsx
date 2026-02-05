import React from 'react';
import { MapPin, Clock, ChevronRight, Bookmark, ShieldCheck } from 'lucide-react';

const TOP_WHISKIES = [
  { 
    id: 1, 
    name: "Macallan 18", 
    type: "Single Malt Scotch",
    region: "Scotland",
    price: "₹31,500",
    age: "18 Years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6pKLc-l-mgAajwQCefHTeNkVDvLtRcGmGQ&s",
    tag: "Prestige"
  },
  { 
    id: 2, 
    name: "Yamazaki 12", 
    type: "Japanese Whisky",
    region: "Japan",
    price: "₹22,500",
    age: "12 Years",
    image: "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=500",
    tag: "Rare"
  },
  { 
    id: 3, 
    name: "Jameson Black Barrel", 
    type: "Irish Whiskey",
    region: "Ireland",
    price: "₹6,300",
    age: "NAS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu0stiRKsApZquhqTvxYneAvpE9x78laAAQA&s",
    tag: "Classic"
  },
  { 
    id: 4, 
    name: "Glenfiddich 18", 
    type: "Single Malt Scotch",
    region: "Scotland",
    price: "₹10,800",
    age: "18 Years",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=500",
    tag: "Best Seller"
  },
  { 
    id: 5, 
    name: "Dalmore King Alexander", 
    type: "Single Malt",
    region: "Highlands",
    price: "₹26,100",
    age: "NAS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0y-2ZVgdgrb65_bLVb83ou0zm9L6Ion3UA&s",
    tag: "Limited"
  },
  { 
    id: 6, 
    name: "Nikka Coffee Grain", 
    type: "Japanese Whisky",
    region: "Japan",
    price: "7,650",
    age: "NAS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcbZEjcSnmOUa8IkcJNLCJNV5qv0tvM5SdQ&s",
    tag: "Unique"
  },
  { 
    id: 7, 
    name: "Balvenie DoubleWood", 
    type: "Single Malt Scotch",
    region: "Speyside",
    price: "₹6,750",
    age: "12 Years",
    image: "https://images.unsplash.com/photo-1608885898957-a559228e8749?auto=format&fit=crop&q=80&w=500",
    tag: "Smooth"
  },
  { 
    id: 8, 
    name: "Eagle Rare", 
    type: "Bourbon",
    region: "Kentucky, USA",
    price: "₹5,850",
    age: "10 Years",
    image: "https://calibremag.com/wp-content/uploads/2025/05/Buffalo-Trace-Eagle-Rare-Whiskey-2025-CALIBRE-01.webp",
    tag: "Small Batch"
  },
  { 
    id: 9, 
    name: "Talisker 10", 
    type: "Island Single Malt",
    region: "Isle of Skye",
    price: "₹7,200",
    age: "10 Years",
    image: "https://images.squarespace-cdn.com/content/v1/61affa9c931dc960c27460a1/1670319855076-4K143P5GZ36VIHEGC8HR/2022_1203_09391200.jpg",
    tag: "Peated"
  }
];

export default function Popular() {
  return (
    <div className="min-h-screen bg-neutral-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-amber-700 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Premium Spirits
            </h2>
            <h1 className="text-5xl font-serif font-black text-slate-900 leading-tight">
              Our Curated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-900">
                Top 10 Selection
              </span>
            </h1>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-slate-400 pb-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium italic">Verified Authenticity</span>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOP_WHISKIES.map((whisky, index) => (
            <div 
              key={whisky.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={whisky.image} 
                  alt={whisky.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Ranking & Tag */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="bg-black text-white w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg shadow-sm">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-800">
                      {whisky.tag}
                    </span>
                  </div>
                </div>

                {/* Save Button */}
                <button className="absolute top-5 right-5 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-amber-600 font-bold text-xs uppercase tracking-tighter mb-1">
                      {whisky.type}
                    </p>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {whisky.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold">{whisky.region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-semibold">{whisky.age}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">MSRP From</span>
                    <span className="text-2xl font-black text-slate-900">{whisky.price}</span>
                  </div>
                  <button className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white hover:bg-amber-700 transition-all group-hover:rotate-[-10deg]">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Featured Banner for 2026 */}
        <div className="mt-20 bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-lg">
            <h3 className="text-amber-400 font-bold mb-4">New Arrival</h3>
            <h2 className="text-4xl text-white font-bold mb-6">The 2026 Reserve Collection is Here.</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Explore the rarest bottlings from Islay and Speyside, exclusively curated for our members.
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-amber-500 transition-colors">
              Access Private Vault
            </button>
          </div>
          <div className="absolute right-[-10%] bottom-[-20%] opacity-20 hidden lg:block">
            <h2 className="text-[20rem] font-black text-white select-none">WHISKY</h2>
          </div>
        </div>
      </div>
    </div>
  );
}