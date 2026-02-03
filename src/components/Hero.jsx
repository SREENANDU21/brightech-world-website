import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    // Animation for splitting text into words
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "easeOut",
                duration: 0.8
            }
        }
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="home" className="relative pt-48 pb-24 md:pt-60 md:pb-32 bg-[var(--bg-dark)]">
            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm md:text-base font-semibold tracking-widest text-[#666] uppercase mb-4"
                    >
                        PREMIUM LED DISPLAY SOLUTIONS
                    </motion.p>

                    {/* Animated Headline */}
                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-[#333]"
                    >
                        <motion.div variants={item}>Illuminate Your Business With</motion.div>
                        <motion.div variants={item} className="text-[#e6005c] mt-2">Next-Gen LED Displays</motion.div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-base md:text-lg text-[#666] mb-12 max-w-2xl mx-auto"
                    >
                        We provide premium indoor, outdoor, and rental LED video walls tailored to give your brand the visibility it deserves.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-col gap-4 max-w-3xl mx-auto px-4"
                    >
                        <a
                            href="https://wa.me/919388001144?text=Hello!%20I%20would%20like%20to%20get%20a%20quote%20for%20an%20LED%20Video%20Wall."
                            target="_blank"
                            className="w-full py-4 rounded font-bold text-white text-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 flex justify-center items-center gap-2"
                            style={{ backgroundColor: '#e6005c' }}
                        >
                            Get a Quote <ArrowRight size={22} />
                        </a>
                        <a
                            href="#services"
                            className="w-full py-4 rounded font-bold text-lg border-2 hover:bg-[#ffe6f0] transition-colors flex justify-center items-center"
                            style={{
                                borderColor: '#e6005c',
                                color: '#e6005c'
                            }}
                        >
                            View Products
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
