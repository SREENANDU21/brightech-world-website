import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Monitor, Home, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Monitor },
    { name: 'Pricing', href: '#pricing', icon: DollarSign },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-md' : 'py-6 bg-[var(--bg-dark)]'}`}>
      <div className="container flex justify-between items-start">
        {/* Company Name: Stacked, Pink, Bold */}
        {/* Company Name: Logo Image + Text */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/logo.png"
            alt="Brightech World"
            className="h-12 md:h-16 w-auto object-contain"
          />
          <div
            className="font-bold flex flex-col items-start leading-none tracking-tight"
            style={{
              fontFamily: "'Outfit', sans-serif",
              color: '#e6005c'
            }}
          >
            <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>BRIGHTECH</span>
            <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>WORLD</span>
          </div>
        </a>

        {/* Mobile Toggle (Boxed Style like screenshot) */}
        <button
          className="text-[#333] mt-2 p-1 border border-gray-300 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Overlay (Visible on all screens when toggled) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t border-gray-100 overflow-hidden shadow-xl absolute top-full left-0 w-full"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 text-[#333] font-semibold transition-all"
                >
                  <link.icon size={20} className="text-[#e6005c]" />
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/918281808385?text=Hello!%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                className="btn w-full text-center mt-2 text-white font-bold"
                style={{ backgroundColor: '#e6005c' }}
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
