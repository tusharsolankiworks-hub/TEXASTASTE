import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
              alt="Our Kitchen"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Frames */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-gold/30 rounded-3xl -z-0" />
          <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl hidden md:block">
            <p className="text-black font-display font-bold text-4xl">15+</p>
            <p className="text-black/70 text-xs font-bold uppercase tracking-widest">Years of Tradition</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            A Legacy of Smoke <br />& Southern Soul
          </h2>
          <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light">
            <p>
              Founded in the heart of Dallas, Texas Taste began as a small family 
              roadside stand with a single smoker and a dream to preserve the 
              authentic art of Texas BBQ.
            </p>
            <p>
              Today, we continue that tradition by sourcing only the finest 
              prime meats and smoking them over hand-split post oak and hickory. 
              Every dish we serve is a tribute to our roots and a celebration 
              of American culinary heritage.
            </p>
            <p>
              Whether it's our 12-hour smoked brisket or our hand-spun milkshakes, 
              we believe in doing things the right way—never the easy way.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <img
              src="https://i.pravatar.cc/100?u=chef"
              alt="Head Chef"
              className="w-16 h-16 rounded-full border-2 border-gold"
            />
            <div>
              <p className="font-display font-bold text-xl italic">"Taste the tradition in every bite."</p>
              <p className="text-gold text-sm uppercase tracking-widest font-bold">— Chef Robert Miller</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
