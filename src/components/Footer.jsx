import React from 'react';
import { restaurantData } from '../data/restaurantData';

const Footer = () => {
  return (
    <footer className="bg-black/80 py-8 border-t border-white/5 text-center relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl text-tufo mb-2">{restaurantData.name}</h2>
        <p className="font-sans font-light text-sm text-grotta-light/50 mb-6 uppercase tracking-widest">Trattoria Romana</p>
        
        <div className="flex justify-center gap-6 mb-8">
          {restaurantData.socials.facebook && (
            <a href={restaurantData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-grotta-light/60 hover:text-ocra transition-colors text-sm uppercase tracking-wider">
              Facebook
            </a>
          )}
          {restaurantData.socials.instagram && (
            <a href={restaurantData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-grotta-light/60 hover:text-ocra transition-colors text-sm uppercase tracking-wider">
              Instagram
            </a>
          )}
        </div>

        <p className="font-sans text-xs text-white/30 font-light">
          &copy; {new Date().getFullYear()} {restaurantData.name}. Tutti i diritti riservati.<br />
          Sito web realizzato per Ristorante Antica Grotta, Lanuvio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
