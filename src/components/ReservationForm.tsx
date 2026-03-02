import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Phone, User, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 2,
    phone: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/xojnzogv', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', date: '', time: '', guests: 2, phone: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="reserve" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
            Book Your Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Reserve A Table</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Join us for an unforgettable evening of Texas hospitality. 
            For parties larger than 10, please call us directly.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest">Call Us</p>
                <p className="text-xl font-bold">+1 (214) 555-0123</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">Reservation Received!</h3>
              <p className="text-white/60 mb-8">
                We've saved your table. A confirmation text will be sent shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-gold text-black px-8 py-3 rounded-full font-bold uppercase tracking-widest"
              >
                Make Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-charcoal border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-charcoal border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <input
                      required
                      type="date"
                      className="w-full bg-charcoal border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <input
                      required
                      type="time"
                      className="w-full bg-charcoal border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50" />
                    <select
                      className="w-full bg-charcoal border border-white/5 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-all appearance-none"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                        <option key={n} value={n}>{n} Guests</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button
                disabled={status === 'loading'}
                className="w-full bg-gold hover:bg-gold-light text-black py-5 rounded-xl font-bold uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {status === 'loading' ? 'Processing...' : 'Confirm Reservation'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
