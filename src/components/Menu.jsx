import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '../data/restaurantData';
import { Leaf } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto" id="menu">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ocra mb-4">Il Nostro Menu</h2>
        <div className="w-24 h-[1px] bg-tufo/30 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Categories Tab */}
        <div className="md:w-1/3 flex flex-wrap md:flex-col justify-center md:justify-start gap-2 md:gap-0 border-b md:border-b-0 md:border-l border-white/10 pb-6 md:pb-0">
          {menuData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`text-center md:text-left px-5 py-2 md:py-4 font-display text-lg md:text-2xl transition-all duration-300 relative whitespace-nowrap md:whitespace-normal rounded-full md:rounded-none border border-white/5 md:border-none ${
                activeCategory === idx ? 'bg-ocra/20 text-ocra border-ocra/30 md:bg-transparent md:border-transparent' : 'bg-white/5 text-grotta-light/50 hover:text-tufo hover:bg-white/10 md:bg-transparent md:hover:bg-transparent'
              }`}
            >
              {category.category}
              {activeCategory === idx && (
                <motion.div 
                  layoutId="activeTab"
                  className="hidden md:block absolute bottom-0 md:bottom-auto md:left-0 md:top-0 h-[2px] md:h-full w-full md:w-[2px] bg-ocra"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="md:w-2/3 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              {menuData[activeCategory].items.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="group relative"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <div className="flex justify-between items-end mb-2 w-full">
                    <h3 className="font-display text-xl md:text-2xl text-tufo flex items-center gap-2 flex-wrap">
                      {item.name}
                      {item.highlight && <Leaf size={16} className="text-oliva shrink-0" />}
                    </h3>
                    <div className="flex-1 mx-2 md:mx-4 border-b border-dotted border-tufo/20 relative bottom-2 min-w-[20px] hidden sm:block"></div>
                    <span className="font-sans text-lg md:text-xl text-ocra whitespace-nowrap pl-2">€{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="font-sans text-grotta-light/60 text-sm font-light leading-relaxed max-w-[85%]">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Menu;
