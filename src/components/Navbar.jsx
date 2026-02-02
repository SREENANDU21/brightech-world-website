import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Monitor, Home, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center">
        {/* Company Name: 2 Lines, Moderate Size */}
        <a
          href="#"
          className="font-black italic tracking-tighter leading-none logo-animate flex flex-col items-start"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          <span>BRIGHT<span style={{ color: 'white' }}>ECH</span></span>
          <span style={{ marginTop: '-5px' }}>WORLD</span>
        </a>

        {/* Mobile Toggle - Always Visible */}
        <button
          className="text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[var(--glass-border)] overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--glass-border)] transition-all"
                >
                  <link.icon size={20} className="text-[var(--primary-neon)]" />
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/message/7E7JB2XNIS7LG1?text=Hello! Can I get more info on this?"
                target="_blank"
                className="btn btn-primary text-center mt-2"
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
