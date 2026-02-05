import React from 'react';
import { Tag, Timer, Percent, ArrowRight, ExternalLink } from 'lucide-react';

const DISCOUNTED_ITEMS = [
  {
    id: 1,
    name: "Laphroaig 10 Year",
    originalPrice: "₹5,850",
    discountPrice: "₹3,520",
    savings: "25% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hQgoLANFGGZsCNEYVIQajvO6xuI_HFxJgA&s",
    endsIn: "12h 30m"
  },
  {
    id: 2,
    name: "Buffalo Trace Bourbon",
    originalPrice: "₹4,050",
    discountPrice: "₹3,060",
    savings: "20% OFF",
    image: "https://images.squarespace-cdn.com/content/v1/65b6fda2608f3c3511c91f14/a342573e-860d-4e7d-aa99-6bb9e2e4fdee/buffalo-trace-bourbon-whiskey-vertical.jpg",
    endsIn: "05h 15m"
  },
  {
    id: 3,
    name: "Ardbeg Wee Beastie",
    originalPrice: "₹4,950",
    discountPrice: "₹2,880",
    savings: "23% OFF",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvE1C08NtBMjweGJuRPT3ZBS0uOvVTc6dLpw&s",
    endsIn: "08h 45m"
  }
];

export default function Discount() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Discount Banner */}
      <div className="bg-amber-900 py-16 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-6 h-full">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-r border-amber-100 h-full rotate-12 transform"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 px-4 py-2 rounded-full mb-6">
            <Percent className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200 text-sm font-bold tracking-widest uppercase">Flash Sale Live</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 italic">The Connoisseur’s Sale</h1>
          <p className="text-xl text-amber-100/80 mb-8">Premium labels, limited-time prices. Once they're gone, they're gone.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
              <span className="block text-xs text-amber-300 uppercase font-bold">Offer Ends In</span>
              <span className="text-2xl font-mono font-bold tracking-tighter">04:22:15:09</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6">
        {/* Discount Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DISCOUNTED_ITEMS.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-200 group">
              <div className="relative h-64">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-red-600 text-white font-black px-3 py-1 rounded-lg text-sm italic">
                  {item.savings}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs flex items-center gap-1">
                  <Timer className="w-3 h-3" /> {item.endsIn}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.name}</h3>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-black text-amber-700">{item.discountPrice}</span>
                  <span className="text-stone-400 line-through font-bold">{item.originalPrice}</span>
                </div>
                <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-amber-800 transition-colors">
                  Claim This Deal <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code Section */}
        <div className="mt-16 bg-white border-2 border-dashed border-stone-300 rounded-[2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-stone-100 p-4 rounded-2xl">
              <Tag className="w-8 h-8 text-stone-800" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Extra $20 Off</h4>
              <p className="text-stone-500">For orders over $200 using our mobile app.</p>
            </div>
          </div>
          <div className="bg-stone-100 px-8 py-3 rounded-xl border border-stone-200 font-mono font-bold text-2xl tracking-widest text-stone-900">
            WHISKY20
          </div>
        </div>

       
      </div>
    </div>
  );
}