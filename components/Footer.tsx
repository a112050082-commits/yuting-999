import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-aster-black text-aster-cream py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-serif italic mb-2">Studio Yuting.</h2>
          <p className="text-sm text-gray-400">Because choices are hard, I chose everything.</p>
        </div>
        
        <div className="flex gap-6 mb-6 md:mb-0">
          <a href="#about" className="text-sm uppercase tracking-wider hover:text-aster-pink transition-colors">About</a>
          <a href="#portfolio" className="text-sm uppercase tracking-wider hover:text-aster-pink transition-colors">Work</a>
          <a href="#contact" className="text-sm uppercase tracking-wider hover:text-aster-pink transition-colors">Contact</a>
        </div>

        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Yuting Peng. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;