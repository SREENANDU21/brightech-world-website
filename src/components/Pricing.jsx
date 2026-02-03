import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary-neon)] opacity-5 blur-[100px] rounded-full z-0"></div>

            <div className="container relative z-10">
                <div className="text-center mb-12">
                    <h2 className="section-title">Transparent <span className="gradient-text">Pricing</span></h2>
                    <p className="section-subtitle">Competitive Square Feet Rates for Premium LED Items</p>

                    <div className="mt-6 inline-block glass px-6 py-3 rounded-full border border-[var(--primary-neon)]/30">
                        <span className="text-gray-500 uppercase text-xs tracking-wider block mb-1">Trusted Brands</span>
                        <span className="text-lg font-bold text-gray-900">HIKVISION • QIANGLI • MEYID</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Outdoor Pricing */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-lg transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-[var(--secondary-neon)]">OUTDOOR</h3>
                        <div className="space-y-4 text-gray-800">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P2.5 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹9,500 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P3 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹8,000 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P4 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹5,500 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P5 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹5,000 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">* Video Wall Screens</p>
                    </motion.div>

                    {/* Indoor Pricing */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-gray-200 bg-white hover:shadow-lg transition-all"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-[var(--primary-neon)]">INDOOR</h3>
                        <div className="space-y-4 text-gray-800">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P2.5 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹5,500 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                                <span className="font-medium">P3 Pixel Pitch</span>
                                <span className="font-bold text-xl text-gray-900">₹5,000 <span className="text-xs font-normal text-gray-500">/sq.ft</span></span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://wa.me/919388001144?text=Hello! I want a custom quote for specific LED screen sizes."
                        target="_blank"
                        className="btn btn-primary inline-flex items-center gap-2 px-8 py-3"
                    >
                        Get Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
