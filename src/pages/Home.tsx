import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import ReservationForm from '../components/ReservationForm';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <FeaturedDishes />
      <About />
      <Gallery />
      <Testimonials />
      <ReservationForm />
    </motion.div>
  );
}
