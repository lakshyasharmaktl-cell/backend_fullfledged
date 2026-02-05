import React, { useState } from 'react';

const WHISKY_DATA = [
  { id: 1, name: "Macallan 12Y Sherry Oak", tagline: "700ml", price: 8450, time: "9 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVklANfjNZ_nNyNKepkG5MaBtwdV6vm_XRxA&sg", bestSeller: true },
  { id: 2, name: "Indri-Trini Three Wood", tagline: "750ml", price: 4200, time: "11 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPaBmacTEEEo7OIWvPrm7UKUyDpenQ-7sLg&s", bestSeller: true },
  { id: 3, name: "Hibiki Harmony", tagline: "700ml", price: 12900, time: "8 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHj41O-usMzdjar-3yQm4dkLFY2Z1qhanXCw&s" },
  { id: 4, name: "Monkey Shoulder", tagline: "700ml", price: 3950, time: "10 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbHR6kd_4GHF_R6uV-Wownva-ByVvkLOz8Q&s" },
  { id: 5, name: "Amrut Fusion Single Malt", tagline: "750ml", price: 5100, time: "12 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJGpfR-sTeYCW51h3T3e1C1sdxwxTTyZWgA&s" },
  { id: 6, name: "Glenfiddich 15Y", tagline: "700ml", price: 9200, time: "15 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFw_drJa-yiBFbxR9LeGeI2VtFAt7lKR_IWA&s" },
  { id: 7, name: "Rampur Double Cask", tagline: "750ml", price: 7800, time: "14 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTpoy_K_kO5lp6sx1lcH2chDSBlQ4kp-zJDA&s" },
  { id: 8, name: "The Balvenie 14Y", tagline: "700ml", price: 10500, time: "10 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfd2lf_sZVL9Hyg4efzOqw5WMLADY9FI7fg&s" },
  { id: 9, name: "Paul John Edited", tagline: "750ml", price: 4600, time: "11 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEcJN99KENZRJnyXdOcCOBZB7m4oTVUYNGjg&s" },
  { id: 10, name: "Yamazaki 12 Year", tagline: "700ml", price: 22000, time: "25 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5KDEpCsLNc59dACC0GGGZtmklvfonR31cA&s" },
  { id: 11, name: "Laphroaig 10 Year", tagline: "750ml", price: 6900, time: "12 MINS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcUgrF_n-qRqteqslFlrCqPKMmo3ZTJiIrQ&s" },
  { id: 12, name: "Jameson Black Barrel", tagline: "750ml", price: 3400, time: "9 MINS", image: "https://ik.imagekit.io/cvygf2xse/jamesonwhiskey/wp-content/uploads/2024/08/Jameson-Black-Barrel-expertly-aged-reserve-series.jpg?tr=q-80,w-960" },
];

export default function Fav() {
  const [cartCount, setCartCount] = useState(0);

  // Split Data
  const topRow = WHISKY_DATA.slice(0, 4); // First 4 brands
  const gridSection = WHISKY_DATA.slice(0, 12); // All 12 brands for the grid

  // Reusable Card Component
  const ProductCard = ({ item, isGrid }) => (
    <div className={`bg-white rounded-xl border border-gray-200 p-2 flex flex-col justify-between hover:shadow-md transition-all active:scale-95 ${!isGrid ? 'min-w-[140px] md:min-w-[180px]' : ''}`}>
      <div className="relative mb-2 bg-gray-50 rounded-lg p-2 h-32 flex items-center justify-center overflow-hidden">
        <img src={item.image} alt={item.name} className="h-full object-contain mix-blend-multiply" />
        <div className="absolute bottom-1 left-1 bg-white/95 px-1 py-0.5 rounded text-[8px] font-black border flex items-center shadow-sm">
          <span className="text-blue-500 mr-0.5">⚡</span> {item.time}
        </div>
      </div>
      <div className="px-1">
        <h3 className="text-[12px] font-bold text-gray-800 leading-tight h-8 line-clamp-2">{item.name}</h3>
        <p className="text-[10px] text-gray-400 font-medium mb-2">{item.tagline}</p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[12px] font-extrabold text-gray-900">₹{item.price.toLocaleString()}</span>
          <button 
            onClick={() => setCartCount(prev => prev + 1)}
            className="bg-white text-green-700 border border-green-600 px-3 py-1 rounded-lg text-[10px] font-black hover:bg-green-600 hover:text-white transition-all"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans">
      <div className="sticky top-0 z-20 bg-white p-3 shadow-sm">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 border border-gray-200">
        </div>
      </div>

    
      <hr className="border-gray-200 mx-4" />

      {/* SECTION 2: COL-3 GRID (12 BRANDS) */}
      <div className="p-4">
        <h2 className="text-lg font-extrabold text-gray-900 mb-4">Favouite Whisky</h2>
        <div className="grid grid-cols-3 gap-2">
          {gridSection.map(item => <ProductCard key={item.id} item={item} isGrid={true} />)}
        </div>
      </div>

      {/* Floating Cart Bar */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 left-4 right-4 bg-green-700 text-white rounded-xl p-4 flex justify-between items-center shadow-2xl z-50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded">{cartCount} ITEMS</span>
            <span className="text-sm font-bold">VIEW CART</span>
          </div>
          <div className="font-bold text-sm">Proceed ➜</div>
        </div>
      )}
    </div>
  );
}