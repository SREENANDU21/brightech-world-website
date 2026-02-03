import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SpecializedIn = () => {
    const items = [
        'Rental LED screen', 'Outdoor LED screen', 'Indoor LED screen',
        'Outdoor fixed LED screen', 'Conference LED screen', 'Outdoor fixed LED screen Gama series',
        'Indoor fixed LED screen Sigma series', 'Rental LED screen Glados series', 'Outdoor LED screen E-wall series',
        'Home theatre LED screen', 'LED wall', 'Advertising LED display screen',
        'Customised LED screen', 'Outdoor showroom LED screen', 'Billboard LED screen'
    ];

    return (
        <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#102a43' }}>
            {/* Dot Pattern Background to match screenshot */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#486581 1.5px, transparent 1.5px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>

            <div className="container relative z-10">
                <h2 className="text-4xl text-center font-medium text-white mb-16 tracking-wide">
                    We are specialized in..
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.03 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 30px rgba(0, 200, 255, 0.2)'
                            }}
                            className="group relative flex items-center gap-4 p-5 rounded-lg cursor-pointer overflow-hidden transition-all duration-300"
                            style={{
                                backgroundColor: '#1f3b54', // Base Button Color
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            {/* Liquid/Watercool Hover Effect Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-teal-300/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                            {/* Icon Box */}
                            <div className="relative z-10 flex-shrink-0 w-8 h-8 bg-white rounded flex items-center justify-center">
                                <Check size={20} strokeWidth={3} className="text-[#102a43]" />
                            </div>

                            <span className="relative z-10 font-medium text-lg text-white/90 group-hover:text-white transition-colors">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecializedIn;
