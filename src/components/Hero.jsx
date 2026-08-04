import React from 'react';
import { motion } from 'framer-motion';
import { restaurantData } from '../data/restaurantData';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax effect simulation */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-grotta-dark/80 via-grotta-dark/60 to-grotta-dark z-10"></div>
        <img 
          src={`${import.meta.env.BASE_URL}gallery/foto_1.jpg`} 
          alt="Interno Antica Grotta" 
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl mb-6 text-gradient font-bold tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {restaurantData.name}
        </motion.h1>
        
        <motion.p 
          className="font-sans text-lg sm:text-xl md:text-2xl text-grotta-light/90 uppercase tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {restaurantData.subtitle}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-tufo/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
