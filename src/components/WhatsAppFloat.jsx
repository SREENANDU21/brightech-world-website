import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppFloat = () => {
    return (
        <motion.a
            href="https://wa.me/919388001144?text=Hello!%20I%20am%20interested%20in%20your%20LED%20Display%20Solutions.%20Please%20share%20more%20details."
            target="_blank"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md hidden md:block">
                Chat with us
            </span>

            {/* Pulse Effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>
        </motion.a>
    );
};

export default WhatsAppFloat;
