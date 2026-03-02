import { motion } from 'motion/react';
import { DISHES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedDishes() {
  const featured = DISHES.filter(d => d.featured);

  return (
    <section className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
              Chef's Recommendations
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold">Featured Dishes</h2>
          </div>
          <Link
            to="/menu"
            className="group flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm hover:text-gold-light transition-colors"
          >
            Explore Full Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-black border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-gold px-3 py-1 rounded-full text-sm font-bold">
                  {dish.price}
                </div>
              </div>
              <div className="p-8">
                <span className="text-gold/60 text-xs font-bold uppercase tracking-widest mb-2 block">
                  {dish.category}
                </span>
                <h3 className="text-2xl font-display font-bold mb-3">{dish.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {dish.description}
                </p>
                <button className="w-full py-3 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
