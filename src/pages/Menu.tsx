import { motion } from 'motion/react';
import { DISHES } from '../constants';
import { useState } from 'react';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'BBQ', 'Steak', 'Burgers', 'Fried Chicken', 'Desserts'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDishes = activeCategory === 'All' 
    ? DISHES 
    : DISHES.filter(d => d.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Offerings
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">The Full Menu</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all",
                  activeCategory === cat 
                    ? "bg-gold text-black" 
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredDishes.map((dish) => (
            <motion.div
              layout
              key={dish.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col md:flex-row gap-6 p-6 bg-charcoal rounded-3xl border border-white/5 hover:border-gold/20 transition-all"
            >
              <div className="w-full md:w-40 h-40 shrink-0 overflow-hidden rounded-2xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-display font-bold">{dish.name}</h3>
                  <span className="text-gold font-bold">{dish.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest text-gold/60">
                    {dish.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
