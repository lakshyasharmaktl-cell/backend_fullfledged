import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GlassWater, Beer, Martini, Star, ChevronDown, Menu, Grape, Wheat,
  Sparkles, Citrus, Coffee, CandyCane, Droplets, Gem, LogIn, UserPlus, X,
  Wine as WineBottle, ChevronRight
} from 'lucide-react';
import Profile from './Profile';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [login, setLogIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const MenuData = [
    {
      icon: GlassWater,
      name: "Whisky",
      dropdown: [
        { icon: GlassWater, name: "The Macallan", link: "/brand/the-macallan" },
        { icon: Sparkles, name: "Glenfiddich", link: "/brand/glenfiddich" },
        { icon: Star, name: "Johnnie Walker", link: "/brand/johnnie-walker" },
        { icon: Wheat, name: "Lagavulin", link: "/brand/lagavulin" },
        { icon: Gem, name: "Chivas Regal", link: "/brand/chivas-regal" },
        { icon: Droplets, name: "The Balvenie", link: "/brand/the-balvenie" }
      ]
    },
    {
      icon: Martini,
      name: "Mocktails",
      dropdown: [
        { icon: Martini, name: "Virgin Mojito", link: "/brand/virgin-mojito" },
        { icon: CandyCane, name: "Shirley Temple", link: "/brand/shirley-temple" },
        { icon: Grape, name: "Fruit Punch", link: "/brand/fruit-punch" },
        { icon: Citrus, name: "Strawberry Cooler", link: "/brand/strawberry-cooler" }
      ]
    },
    {
      icon: Beer,
      name: "Beers",
      dropdown: [
        { icon: Beer, name: "Corona Extra", link: "/brand/corona-extra" },
        { icon: Beer, name: "Kingfisher", link: "/brand/kingfisher" },
        { icon: Star, name: "Tuborg", link: "/brand/tuborg" },
        { icon: Coffee, name: "Budweiser", link: "/brand/budweiser" }
      ]
    },
    {
      icon: WineBottle,
      name: "Spirits",
      dropdown: [
        { icon: GlassWater, name: "Vodka", link: "/brand/vodka" },
        { icon: GlassWater, name: "Rum", link: "/brand/rum" },
      ]
    }
  ];

  const Auth = [
    { name: 'Sign In', link: '/user-login', css: 'px-4 py-2 text-[13px] font-medium rounded-lg border border-blue-800 hover:border-blue-500 hover:text-blue-300 transition-all bg-blue-900/20', icon: LogIn },
    { name: 'Sign Up', link: '/create-account', css: 'px-5 py-2 text-[13px] font-bold bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all shadow-md active:scale-95', icon: UserPlus },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (link) => location.pathname === link;
  const isActiveParent = (dropdown) => dropdown.some(subItem => isActiveLink(subItem.link));

  return (
    <header className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
      scrolled ? 'py-2 bg-blue-950/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-4 bg-blue-950'
    }`}>
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 text-white'>
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-1.5 rounded-lg bg-blue-900/50">
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/" className="group flex items-center gap-2.5">
            <img className='h-10 w-10 lg:h-12 lg:w-12 object-contain transition-transform group-hover:scale-105' src="https://res.cloudinary.com/dzskwfinc/image/upload/v1770712321/laxxy1_jkgenu.png" alt="Logo" />
            <div className="flex flex-col leading-none">
              <span className="text-lg lg:text-xl font-black tracking-tighter text-white uppercase">WhiskyHub</span>
              <span className="text-amber-500 text-[8px] font-bold tracking-[0.2em] uppercase opacity-80">Premium</span>
            </div>
          </Link>
        </div>

        {/* DESKTOP MENU - Smaller Font & Spacing */}
        <div className="hidden lg:flex items-center gap-1">
          {MenuData.map((item, index) => {
            const isParentActive = isActiveParent(item.dropdown);
            return (
              <div key={item.name} className="relative" onMouseEnter={() => setActiveDropdown(index)} onMouseLeave={() => setActiveDropdown(null)}>
                <button className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all text-[13px] font-semibold tracking-wide ${isParentActive ? 'text-amber-400' : 'text-slate-300 hover:text-white'}`}>
                  <item.icon className={`w-4 h-4 ${isParentActive ? 'text-amber-400' : 'text-blue-400'}`} />
                  {item.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === index ? 'rotate-180' : 'opacity-50'}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-blue-950 border border-white/10 rounded-2xl shadow-xl overflow-hidden p-1.5 backdrop-blur-xl"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.name} to={subItem.link} className={`flex items-center justify-between p-2.5 rounded-lg text-[12px] font-bold uppercase tracking-wider transition-all ${isActiveLink(subItem.link) ? 'bg-amber-500/10 text-amber-400' : 'hover:bg-blue-900/50 text-slate-400 hover:text-white'}`}>
                          <div className="flex items-center gap-3">
                            <subItem.icon className="w-4 h-4 text-amber-500/80" />
                            {subItem.name}
                          </div>
                          <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div className='flex items-center gap-3'>
          {login ? <Profile /> : (
            <div className="hidden md:flex items-center gap-2">
              {Auth.map((btn, i) => (
                <Link key={i} to={btn.link} className={btn.css}>{btn.name}</Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} className="fixed top-0 left-0 h-full w-72 bg-blue-950 z-[120] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <span className="text-lg font-black text-white italic">WHISKY<span className="text-amber-500">HUB</span></span>
                <X className="w-5 h-5 cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
              </div>
              <div className="space-y-2">
                {MenuData.map((item, idx) => (
                  <div key={idx} className="border-b border-white/5">
                    <button onClick={() => setMobileActiveDropdown(mobileActiveDropdown === idx ? null : idx)} className="flex items-center justify-between w-full py-3 text-[12px] font-bold text-slate-300 uppercase tracking-widest">
                      <div className="flex items-center gap-3"><item.icon className="w-4 h-4 text-amber-500" />{item.name}</div>
                      <ChevronDown className={`w-4 h-4 ${mobileActiveDropdown === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileActiveDropdown === idx && (
                      <div className="pb-3 pl-7 space-y-2">
                        {item.dropdown.map(sub => (
                          <Link key={sub.name} to={sub.link} onClick={() => setMobileMenuOpen(false)} className="block text-[11px] text-slate-400 hover:text-amber-400">{sub.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}