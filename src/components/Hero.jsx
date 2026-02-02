import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--primary-neon)] opacity-10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--secondary-neon)] opacity-10 blur-[120px] rounded-full"></div>
                {/* LED Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-2 rounded-full border border-[var(--glass-border)] bg-[rgba(255,255,255,0.03)] text-sm font-medium mb-6 inline-block text-[var(--primary-neon)]">
                        Leading LED Display Solutions in Bangalore, Kerala & Dubai
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Illuminate Your Business With <br />
                        <span className="gradient-text">Next-Gen LED Displays</span>
                    </h1>

                    <p className="text-[var(--text-muted)] text-lg md:text-xl max-width-[800px] mb-10 max-w-2xl mx-auto">
                        We provide premium indoor, outdoor, and rental LED boards tailored to give your brand the visibility it deserves.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="https://wa.me/message/7E7JB2XNIS7LG1?text=Hello! Can I get more info on this?" target="_blank" className="btn btn-primary flex items-center gap-2">
                            Get a Quote <ArrowRight size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-[var(--text-muted)]">SCROLL</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--primary-neon)] to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
