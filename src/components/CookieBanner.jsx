import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 text-white z-50 border-t border-white/10 p-4 md:p-6 shadow-2xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm font-light text-white/70 max-w-4xl">
          <p>
            Utilizziamo i cookie per migliorare la tua esperienza di navigazione e offrirti contenuti personalizzati. 
            Cliccando su "Accetta tutto", acconsenti all'uso dei cookie. Puoi leggere maggiori dettagli nella nostra{' '}
            <a href="#" className="text-ocra hover:text-white transition-colors underline underline-offset-2">Cookie Policy</a> e{' '}
            <a href="#" className="text-ocra hover:text-white transition-colors underline underline-offset-2">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex shrink-0 gap-4 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="w-full md:w-auto px-8 py-3 bg-ocra text-black font-semibold text-sm uppercase tracking-wider hover:bg-white transition-colors"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
