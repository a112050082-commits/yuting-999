import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services/Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-aster-cream border-b border-aster-black">
      <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-bold tracking-tight italic hover:opacity-70 transition-opacity">
          Studio Yuting.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-widest font-medium hover:text-aster-pink transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aster-pink transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-aster-cream border-b border-aster-black p-4 flex flex-col space-y-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-serif italic text-center py-2 border-b border-gray-100 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;