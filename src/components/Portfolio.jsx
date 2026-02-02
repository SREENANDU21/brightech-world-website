import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        { id: 1, category: 'Outdoor', image: '/assets/led_portfolio_1.png', title: 'Dubai Mall Exterior' },
        { id: 2, category: 'Indoor', image: '/assets/led_portfolio_2.png', title: 'Tech Park Lobby' },
        { id: 3, category: 'Rental', image: '/assets/led_portfolio_3.png', title: 'Music Festival Stage' },
        { id: 4, category: 'Outdoor', image: '/assets/led_portfolio_1.png', title: 'City Center Billboard' },
        { id: 5, category: 'Indoor', image: '/assets/led_portfolio_2.png', title: 'Conference Hall' },
        { id: 6, category: 'Rental', image: '/assets/led_portfolio_3.png', title: 'Fashion Show Runway' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-[var(--bg-card)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">A glimpse into our successful installations across Bangalore, Kerala, and Dubai.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <span className="text-[var(--primary-neon)] text-sm font-medium">{project.category}</span>
                                <h3 className="text-xl font-bold">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://wa.me/919876543210" className="btn btn-outline px-8">View More on WhatsApp</a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
