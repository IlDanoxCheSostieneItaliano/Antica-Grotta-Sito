import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantData } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const people = formData.get('people');
    const notes = formData.get('notes');

    const message = `Salve, vorrei prenotare un tavolo all'Antica Grotta.\n\n👤 Nome: ${name}\n📞 Telefono: ${phone}\n📅 Data: ${date}\n👥 Persone: ${people}${notes ? `\n📝 Note: ${notes}` : ''}`;
    
    // Il numero a cui inviare (senza +). Inserisci quello del proprietario
    const targetPhone = "393804989335"; 
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-black/40 relative z-10" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-tufo mb-8">Vieni a Trovarci</h2>
            
            <div className="space-y-6 mb-10 font-sans font-light text-grotta-light/80">
              <div className="flex items-start gap-4">
                <MapPin className="text-ocra shrink-0 mt-1" size={24} />
                <p>{restaurantData.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-ocra shrink-0 mt-1" size={24} />
                <p>{restaurantData.phone}</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-ocra shrink-0 mt-1" size={24} />
                <p>{restaurantData.email}</p>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-ocra shrink-0 mt-1" size={24} />
                <div>
                  <p>Ven - Sab: {restaurantData.hours.Fri}</p>
                  <p>Dom: {restaurantData.hours.Sun}</p>
                  <p className="text-sm text-grotta-light/50 mt-1">Lunedì - Giovedì Chiuso</p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.7430485906233!2d12.693351911475176!3d41.681534071142516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13259b3c434226d9%3A0xe5a3f290d235cbb6!2sVia%20Antonio%20Gramsci%2C%20128%2C%2000075%20Lanuvio%20RM!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Antica Grotta Lanuvio"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-12 relative"
          >
            <h3 className="font-display text-3xl text-ocra mb-8">Prenota un Tavolo</h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-light text-tufo/80 uppercase tracking-widest">Nome</label>
                  <input required name="name" type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-ocra/50 transition-colors font-sans text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-light text-tufo/80 uppercase tracking-widest">Telefono</label>
                  <input required name="phone" type="tel" id="phone" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-ocra/50 transition-colors font-sans text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-light text-tufo/80 uppercase tracking-widest">Data</label>
                  <input required name="date" type="date" id="date" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-ocra/50 transition-colors font-sans text-white color-scheme-dark" style={{ colorScheme: "dark" }} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="people" className="text-sm font-light text-tufo/80 uppercase tracking-widest">Persone</label>
                  <select required name="people" id="people" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-ocra/50 transition-colors font-sans text-white appearance-none">
                    {[1,2,3,4,5,6,7,8,9,10, '10+'].map(n => (
                      <option key={n} value={n} className="bg-grotta-dark">{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-light text-tufo/80 uppercase tracking-widest">Note (Opzionale)</label>
                <textarea name="notes" id="notes" rows="3" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 focus:outline-none focus:border-ocra/50 transition-colors font-sans text-white resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-tufo hover:bg-ocra text-grotta-dark font-medium uppercase tracking-widest py-4 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Invia su WhatsApp <Send size={18} />
              </button>
            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
