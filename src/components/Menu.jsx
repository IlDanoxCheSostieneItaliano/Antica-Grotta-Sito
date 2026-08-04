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
        <h2 className="font-display text-5xl md:text-6xl text-ocra mb-4">Il Nostro Menu</h2>
        <div className="w-24 h-[1px] bg-tufo/30 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Categories Tab */}
        <div className="md:w-1/3 flex flex-row md:flex-col overflow-x-auto no-scrollbar border-b md:border-b-0 md:border-l border-white/10 pb-4 md:pb-0 hide-scrollbar">
          {menuData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`text-left px-6 py-4 font-display text-2xl transition-all duration-300 relative whitespace-nowrap md:whitespace-normal ${
                activeCategory === idx ? 'text-ocra' : 'text-grotta-light/50 hover:text-tufo'
              }`}
            >
              {category.category}
              {activeCategory === idx && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 md:bottom-auto md:left-0 md:top-0 h-[2px] md:h-full w-full md:w-[2px] bg-ocra"
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
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-2xl text-tufo flex items-center gap-3">
                      {item.name}
                      {item.highlight && <Leaf size={16} className="text-oliva" />}
                    </h3>
                    <div className="flex-1 mx-4 border-b border-dotted border-tufo/20 relative top-[-6px]"></div>
                    <span className="font-sans text-xl text-ocra">€{item.price}</span>
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
