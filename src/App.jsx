import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SpecializedIn from './components/SpecializedIn';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[var(--primary-neon)] selection:text-black">
      <Navbar />
      <Hero />
      <Services />
      <SpecializedIn />
      <Pricing />
      <Contact />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
