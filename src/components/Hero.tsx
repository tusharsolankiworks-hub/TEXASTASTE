import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative bg-black pt-24">
      {/* Video Container */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[70vh] min-w-[124.44vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/7A8rk8dU3FQ?autoplay=1&mute=1&loop=1&playlist=7A8rk8dU3FQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Text Content Section Below Video */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-gold font-bold uppercase tracking-[0.3em] mb-4 text-sm">
            Est. 2024 • Dallas, Texas
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
            Authentic American Flavors <br />
            <span className="text-gold-gradient">In The Heart of Texas</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Experience the soul of the South with our premium smoked meats, 
            hand-cut steaks, and legendary hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/#reserve"
              className="group bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105"
            >
              Reserve a Table
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/menu"
              className="group border border-white/20 hover:border-gold text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:bg-gold/10"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
