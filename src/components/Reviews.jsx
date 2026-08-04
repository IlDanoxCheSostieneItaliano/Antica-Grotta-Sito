import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { reviewsData } from '../data/restaurantData';
import { Star, Users } from 'lucide-react';

const Reviews = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const GoogleLogo = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  const TripLogo = () => (
    <div className="w-[22px] h-[22px] rounded-full bg-[#34E0A1] flex items-center justify-center">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="black" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.5 7C4.01 7 2 9.01 2 11.5C2 13.99 4.01 16 6.5 16C8.58 16 10.33 14.59 10.84 12.65C11.23 12.87 11.66 13 12 13C12.34 13 12.77 12.87 13.16 12.65C13.67 14.59 15.42 16 17.5 16C19.99 16 22 13.99 22 11.5C22 9.01 19.99 7 17.5 7C14.88 7 12.66 9 12 11.11C11.34 9 9.12 7 6.5 7ZM6.5 14C5.12 14 4 12.88 4 11.5C4 10.12 5.12 9 6.5 9C7.88 9 10.12 9 11.5C9 12.88 7.88 14 6.5 14ZM17.5 14C16.12 14 15 12.88 15 11.5C15 10.12 16.12 9 17.5 9C18.88 9 20 10.12 20 11.5C20 12.88 18.88 14 17.5 14Z" />
        <circle cx="6.5" cy="11.5" r="1" />
        <circle cx="17.5" cy="11.5" r="1" />
        <path d="M12 14.5L10.5 17L13.5 17L12 14.5Z" />
      </svg>
    </div>
  );

  const Badge = ({ platform, score, maxScore, reviewsCount, logo, link }) => (
    <motion.a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-panel py-3 px-5 flex items-center gap-4 cursor-pointer min-w-[200px] hover:bg-white/5 transition-colors duration-300"
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5">
        {logo}
      </div>
      <div className="flex flex-col">
        <span className="font-sans text-white/90 font-medium text-[15px]">{platform}</span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="flex gap-0.5">
             {[...Array(5)].map((_, i) => {
               const starScore = score - i;
               return (
                 <div key={i} className="relative">
                   <Star size={12} className="text-white/20 fill-white/20" />
                   {starScore > 0 && (
                     <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${Math.min(Math.max(starScore * 100, 0), 100)}%` }}>
                       <Star size={12} className="text-[#ff8f8f] fill-[#ff8f8f]" />
                     </div>
                   )}
                 </div>
               );
             })}
          </div>
          <span className="text-[11px] font-sans text-[#ff8f8f] font-medium ml-1">({score}/{maxScore})</span>
          <span className="text-white/20 text-xs mx-1">•</span>
          <div className="flex items-center gap-1 text-white/50 text-[11px]">
            <Users size={10} />
            {reviewsCount}
          </div>
        </div>
      </div>
    </motion.a>
  );

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden" id="reviews">
      <motion.div style={{ y }} className="absolute -left-[20vw] top-[10%] w-[50vw] h-[50vw] rounded-full bg-tufo/5 blur-[120px] pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]) }} className="absolute -right-[20vw] bottom-[10%] w-[50vw] h-[50vw] rounded-full bg-vinaccia/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10 flex flex-col items-center"
        >
          <h2 className="font-display text-5xl md:text-6xl text-ocra mb-6">Dicono di Noi</h2>
          
          {/* Summary Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge 
              platform="Google" 
              score={4.0} 
              maxScore={5} 
              reviewsCount={29} 
              logo={<GoogleLogo />} 
              link="https://google.com/maps/search/Antica+Grotta+Lanuvio"
            />
            <Badge 
              platform="Trip" 
              score={4.2} 
              maxScore={5} 
              reviewsCount={14} 
              logo={<TripLogo />} 
              link="https://www.tripadvisor.it/Restaurant_Review-g794658-d25150906-Reviews-Antica_Grotta-Lanuvio_Province_of_Rome_Lazio.html"
            />
          </div>

          <div className="w-24 h-[1px] bg-tufo/30 mx-auto mt-4"></div>
        </motion.div>

        {/* Native Horizontal Scroll Carousel */}
        <div className="relative w-full z-10">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-grotta-dark to-transparent z-20 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-grotta-dark to-transparent z-20 pointer-events-none"></div>
          
          <div className="flex gap-6 px-4 md:px-8 py-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar">
            {reviewsData.map((review, idx) => (
              <div 
                key={idx}
                className="snap-center w-[280px] md:w-[320px] shrink-0 glass-panel p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-ocra text-ocra" />
                    ))}
                  </div>
                  <p className="font-display italic text-lg md:text-xl leading-relaxed text-grotta-light/90 mb-6 line-clamp-5">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-tufo/20 flex items-center justify-center text-tufo font-display text-xl shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-tufo">{review.name}</h4>
                    <span className="font-sans text-xs text-grotta-light/40 uppercase tracking-wider">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
