import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  // Basic smooth scroll polyfill for older browsers/safari ease
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if(href) {
            document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
            });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-aster-cream text-aster-black font-sans selection:bg-aster-pink selection:text-aster-black">
      <Header />
      <main>
        <Hero />
        <Marquee text="Now Booking • New Projects • Advertising Strategy • Creative Direction • Event Planning •" />
        <About />
        <Marquee text="Social Media Management • Content Creation • Brand Storytelling • Visual Identity •" />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;