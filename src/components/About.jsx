import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, GlassWater, CalendarClock, PartyPopper } from 'lucide-react';

const About = () => {
  const items = [
    {
      icon: <GlassWater size={32} className="text-ocra mb-4" />,
      title: "Apericena a 10€",
      desc: "Vieni a provare il nostro tagliere accompagnato da un cocktail per un apericena unico ai Castelli Romani."
    },
    {
      icon: <CalendarClock size={32} className="text-ocra mb-4" />,
      title: "Aperto a Pranzo",
      desc: "Aperti a pranzo solo su prenotazione. Non esitare a chiamarci per organizzare il tuo tavolo!"
    },
    {
      icon: <PartyPopper size={32} className="text-ocra mb-4" />,
      title: "Feste in Grotta",
      desc: "Vuoi la tua festa in grotta? Ti assicuriamo un evento indimenticabile, sia per compleanni che per party aziendali."
    },
    {
      icon: <Thermometer size={32} className="text-ocra mb-4" />,
      title: "20° tutto l'anno",
      desc: "In estate 20 gradi... In inverno 20 gradi... All'Antica Grotta se magna sempre con le condizioni climatiche migliori!"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-4xl md:text-5xl text-ocra mb-4">La Nostra Filosofia</h2>
        <div className="w-16 h-[1px] bg-tufo/30 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel p-8 text-center flex flex-col items-center justify-start hover:-translate-y-1 hover:shadow-2xl hover:bg-white/5 transition-all duration-300 border border-white/5"
          >
            {item.icon}
            <h3 className="font-display text-2xl text-tufo mb-3 leading-tight">{item.title}</h3>
            <p className="font-sans font-light text-grotta-light/70 text-[15px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
