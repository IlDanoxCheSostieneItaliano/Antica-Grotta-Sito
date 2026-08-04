import React from 'react';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full bg-stone-texture bg-repeat min-h-screen">
      <div className="fixed inset-0 bg-grotta-dark/95 z-[-1]"></div>
      
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
