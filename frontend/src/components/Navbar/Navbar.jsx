import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GlassWater,
  Wine,
  Beer,
  Martini,
  Star,
  Sun,
  Moon,
  ChevronDown,
  Menu,
  Grape,
  Wheat,
  Sparkles,
  Citrus,
  Coffee,
  CandyCane,
  Droplets,
  Gem,
  LogIn,
  UserPlus,
  X
} from 'lucide-react';
import Profile from './Profile';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [login, setLogIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const MenuData = [
    { 
      icon: GlassWater, 
      name: "Premium Whisky", 
      dropdown: [
        { icon: GlassWater, name: "The Macallan", link: "/the-macallan" },
        { icon: Sparkles, name: "Glenfiddich", link: "/glenfiddich" },
        { icon: Star, name: "Johnnie Walker", link: "/johnnie-walker" },
        { icon: Wheat, name: "Lagavulin", link: "/lagavulin" },
        { icon: Gem, name: "Chivas Regal", link: "/chivas-regal" },
        { icon: Droplets, name: "The Balvenie", link: "/the-balvenie" }
      ]
    },
    
    { 
      icon: Martini, 
      name: "Mocktails", 
      dropdown: [
        { icon: Martini, name: "Virgin Mojito", link: "/virgin-mojito" },
        { icon: CandyCane, name: "Shirley Temple", link: "/shirley-temple" },
        { icon: Grape, name: "Fruit Punch", link: "/fruit-punch" },
        { icon: Citrus, name: "Strawberry Cooler", link: "/strawberry cooler" }
      ]
    },
    { 
      icon: Beer, 
      name: "Beers", 
      dropdown: [
        { icon: Beer, name: "Corona Extra", link: "/corona extrar" },
        { icon: Beer, name: "kingfisher", link: "/kingfisher" },
        { icon: Star, name: "Tuborg", link: "/tuborg" },
        { icon: Coffee, name: "Budwieser", link: "/budwieser" },
        { icon: Wheat, name: "knock out", link: "/knock outr" },
        { icon: Beer, name: "Haywards", link: "/haywards" }
      ]
    },
    { 
      icon: GlassWater, 
      name: "Spirits", 
      dropdown: [
        { icon: GlassWater, name: "Vodka", link: "/vodka" },
        { icon: GlassWater, name: "Rum", link: "/rum" },
        { icon: Martini, name: "Jameson", link: "/jameson" },
        { icon: Star, name: "Grey Goose", link: "/grey goose" },
        { icon: Wine, name: "Old Monk", link: "/old monk" },
        { icon: Gem, name: "Captain Morgan ", link: "/captain morgan" }
      ]
    }
  ];

  const Auth = [
    { name: 'Sign In', link: '/user-login', css: 'px-5 py-2.5 text-sm font-semibold rounded-lg hover:text-blue-300 transition-colors hover:bg-blue-700/50', icon: LogIn },
    { name: 'Sign Up Free', link: '/create-account', css: 'px-5 py-2.5 text-sm font-semibold bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-xl hover:shadow-amber-600/40 active:scale-95', icon: UserPlus },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (index) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -15,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn"
      }
    }
  };

  const mobileDropdownVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      overflow: 'hidden'
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className='flex items-center justify-between px-6 lg:px-12 py-5 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white transition-colors duration-300 shadow-lg dark:shadow-blue-950/50'>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blue-700/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <h1 className="text-xl font-bold tracking-tighter">
            <Link to="/" className="flex items-center gap-2 hover:text-amber-400 transition-colors" onClick={closeAllMenus}>
              <GlassWater className="text-amber-400 w-7 h-7" />
              <div className="flex flex-col">
                <span className="text-white">WhiskyHub</span>
                <span className="text-amber-400 text-sm font-normal">PREMIUM</span>
              </div>
            </Link>
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-4 justify-center" ref={dropdownRef}>
          {MenuData.map((item, index) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-blue-700/30 transition-all duration-200 group"
                  >
                    <item.icon className="text-blue-200 group-hover:text-amber-300 group-hover:scale-110 transition-all w-5 h-5" />
                    <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">{item.name}</span>
                    <div className="relative ml-1">
                      <motion.div
                        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className={`w-4 h-4 ${activeDropdown === index ? 'text-amber-400' : 'text-blue-300'}`} />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-72 bg-gradient-to-b from-blue-800 to-blue-900 dark:from-blue-900 dark:to-blue-950 rounded-xl shadow-2xl border border-blue-700/50 overflow-hidden z-50"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <motion.div
                              key={subItem.name}
                              variants={itemVariants}
                            >
                              <Link
                                to={subItem.link}
                                className="flex items-center gap-4 px-4 py-3.5 hover:bg-blue-700/40 transition-colors border-b border-blue-600/30 last:border-b-0 group"
                              >
                                <motion.div 
                                  className="p-2 rounded-lg bg-blue-700/30 group-hover:bg-amber-500/20 transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.1 }}
                                >
                                  <subItem.icon className="text-amber-300 group-hover:text-amber-400 w-5 h-5 transition-colors" />
                                </motion.div>
                                <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">{subItem.name}</span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-blue-700/30 transition-all duration-200 group"
                >
                  <item.icon className="text-blue-200 group-hover:text-amber-300 group-hover:scale-110 transition-all w-5 h-5" />
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-full bg-blue-700/40 hover:ring-2 ring-amber-500/50 transition-all outline-none group"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={dark ? "moon" : "sun"}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? (
                  <Moon className="text-amber-300 group-hover:scale-110 transition-transform w-5 h-5" />
                ) : (
                  <Sun className="text-amber-400 group-hover:scale-110 transition-transform w-5 h-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          {login ? (
            <Profile dark={dark} setDark={setDark} />
          ) : (
            <div className="hidden md:flex items-center gap-2">
              {Auth.map(({ name, link, css, icon: Icon }, index) => (
                <Link key={index} to={link}>
                  <button className={`flex items-center gap-2 ${css}`}>
                    <Icon className="w-4 h-4" />
                    {name}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={closeAllMenus}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-blue-800 to-blue-900 dark:from-blue-900 dark:to-blue-950 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              ref={mobileDropdownRef}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <GlassWater className="text-amber-400 w-8 h-8" />
                    <div className="flex flex-col">
                      <span className="text-white text-xl font-bold">WhiskyHub</span>
                      <span className="text-amber-400 text-sm">PREMIUM</span>
                    </div>
                  </div>
                  <button
                    onClick={closeAllMenus}
                    className="p-2 rounded-lg hover:bg-blue-700/50 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-2">
                  {MenuData.map((item, index) => (
                    <div key={item.name} className="border-b border-blue-700/30 last:border-b-0">
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleMobileDropdown(index)}
                            className="flex items-center justify-between w-full px-4 py-3 rounded-lg hover:bg-blue-700/30 transition-colors text-left"
                          >
                            <div className="flex items-center gap-3">
                              <item.icon className="text-amber-400 w-5 h-5" />
                              <span className="font-semibold text-white">{item.name}</span>
                            </div>
                            <motion.div
                              animate={{ rotate: mobileActiveDropdown === index ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className={`w-4 h-4 ${mobileActiveDropdown === index ? 'text-amber-400' : 'text-blue-300'}`} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {mobileActiveDropdown === index && (
                              <motion.div
                                variants={mobileDropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden"
                              >
                                <div className="ml-10 space-y-1 py-2">
                                  {item.dropdown.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.link}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-700/40 transition-colors text-white"
                                      onClick={closeAllMenus}
                                    >
                                      <subItem.icon className="text-amber-300 w-4 h-4" />
                                      <span className="text-sm">{subItem.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          to={item.link}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700/30 transition-colors text-white font-medium"
                          onClick={closeAllMenus}
                        >
                          <item.icon className="text-amber-400 w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-blue-700/30">
                  <div className="space-y-3">
                    {Auth.map(({ name, link, css, icon: Icon }, index) => (
                      <Link key={index} to={link} onClick={closeAllMenus}>
                        <button className={`flex items-center justify-center gap-2 w-full ${css}`}>
                          <Icon className="w-4 h-4" />
                          {name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setDark(!dark)}
                    className="p-3 rounded-full bg-blue-700/40 hover:ring-2 ring-amber-500/50 transition-all outline-none group"
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={dark ? "moon" : "sun"}
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        {dark ? (
                          <Moon className="text-amber-300 group-hover:scale-110 transition-transform w-5 h-5" />
                        ) : (
                          <Sun className="text-amber-400 group-hover:scale-110 transition-transform w-5 h-5" />
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}