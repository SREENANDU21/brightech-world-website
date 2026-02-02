import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Sun, Calendar, CheckCircle2 } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Indoor LED Displays',
            points: [
                'High-definition clarity',
                'Perfect for retail & lobbies',
                'Seamless modular design',
                'Vibrant color reproduction'
            ],
            icon: Monitor
        },
        {
            id: 2,
            title: 'Outdoor LED Walls',
            points: [
                'Weather-resistant (IP65)',
                'High brightness for daylight',
                'Ideal for billboards',
                'Energy efficient'
            ],
            icon: Sun
        },
        {
            id: 3,
            title: 'Rental Event Screens',
            points: [
                'Lightweight & portable',
                'Quick installation',
                'Concerts & exhibitions',
                'Flexible configurations'
            ],
            icon: Calendar
        }
    ];

    return (
        <section id="services" className="py-20 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our <span className="gradient-text">Solutions</span></h2>
                    <p className="section-subtitle">Tailored LED technology for every requirement.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl relative hover:transform hover:-translate-y-2 transition-transform duration-300 border border-white/10 hover:border-[var(--secondary-neon)] group"
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl bg-gradient-to-br from-[var(--primary-neon)] to-[var(--secondary-neon)] shadow-lg transition-all group-hover:scale-110"
                            >
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{service.title}</h3>

                            <ul className="space-y-3">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--text-muted)]">
                                        <CheckCircle2 size={16} className="text-[var(--primary-neon)]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div
                                className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300 bg-gradient-to-r from-[var(--primary-neon)] to-[var(--secondary-neon)]"
                            ></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
