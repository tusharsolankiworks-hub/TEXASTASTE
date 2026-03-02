import { UtensilsCrossed, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <UtensilsCrossed className="w-8 h-8 text-gold" />
              <span className="text-2xl font-display font-bold tracking-tighter">
                TEXAS<span className="text-gold">TASTE</span>
              </span>
            </Link>
            <p className="text-white/50 leading-relaxed">
              Bringing the authentic taste of Texas to your table. 
              Premium meats, hand-crafted sides, and southern soul.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Reservations'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Menu' ? '/menu' : '/'} className="hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-6 text-white/50">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0" />
                <span>123 Lone Star Way, <br />Dallas, TX 75201</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>+1 (214) 555-0123</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>hello@texastaste.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest">Opening Hours</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white font-medium">11am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white font-medium">11am - 12am</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">10am - 9pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center text-white/30 text-sm">
          <p>© 2024 Texas Taste Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
