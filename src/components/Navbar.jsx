import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="font-display text-2xl text-tufo cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Antica Grotta
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-sans text-sm uppercase tracking-widest text-grotta-light/90 items-center">
          <a href="#menu" className="hover:text-ocra transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-ocra transition-colors">Galleria</a>
          <a href="#reviews" className="hover:text-ocra transition-colors">Recensioni</a>
          <a href="#contact" className="px-5 py-2 border border-tufo/50 rounded-full text-tufo hover:bg-tufo hover:text-grotta-dark transition-colors">
            Prenota
          </a>
        </div>
        
        {/* Mobile Menu (simplified, just a CTA) */}
        <div className="md:hidden">
           <a href="#contact" className="px-4 py-2 border border-tufo/50 rounded-full text-tufo text-xs uppercase hover:bg-tufo hover:text-grotta-dark transition-colors">
            Prenota
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
