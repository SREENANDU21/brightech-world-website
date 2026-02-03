import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Sun, Calendar, Layers, Activity, Tv } from 'lucide-react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Indoor LED Displays',
            description: 'High-definition visuals for retail stores, lobbies, and conference rooms. Seamless integration with superior brightness.',
            icon: Monitor,
            image: '/assets/indoor_led.png'
        },
        {
            id: 2,
            title: 'Outdoor LED Walls',
            description: 'Rugged, IP65 weather-resistant screens designed for massive impact in daylight and night conditions.',
            icon: Sun,
            image: '/assets/outdoor_led.png'
        },
        {
            id: 3,
            title: 'Rental Event Screens',
            description: 'Lightweight, quick-install cabinets perfect for concerts, weddings, and exhibitions.',
            icon: Calendar,
            image: '/assets/rental_led.png'
        },
        {
            id: 4,
            title: '3D LED Screens',
            description: 'Immersive naked-eye 3D displays that effectively grab attention and viral social media engagement.',
            icon: Layers,
            image: null
        },
        {
            id: 5,
            title: 'Control Room Displays',
            description: 'Ultra-low latency, high refresh rate screens for mission-critical monitoring and command centers.',
            icon: Activity,
            image: null
        },
        {
            id: 6,
            title: 'Video Wall Van Rental (Vehicle)',
            description: 'Mobile LED display trucks for roadshows, political campaigns, and outdoor promotions. Go where your audience is.',
            icon: Tv,
            image: '/assets/video_wall_van.png'
        }
    ];

    return (
        <section id="services" className="py-24 bg-[var(--bg-dark)]">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Our <span className="gradient-text">Solutions</span></h2>
                    <p className="section-subtitle">Comprehensive LED display technologies for every business need.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col items-start h-full overflow-hidden"
                        >
                            {/* Image Header if available */}
                            {service.image ? (
                                <div className="w-full h-48 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            ) : (
                                <div
                                    className="w-full h-48 flex items-center justify-center bg-gray-50 text-[var(--secondary-color)]"
                                >
                                    <service.icon size={48} />
                                </div>
                            )}

                            <div className="p-8 flex flex-col flex-grow w-full">
                                <h3 className="text-2xl font-bold mb-3 text-[var(--text-main)]">{service.title}</h3>
                                <p className="text-[var(--text-muted)] mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>

                                <a href="https://wa.me/919388001144?text=Hi,%20I%20am%20interested%20in%20your%20LED%20solutions." target="_blank" className="btn btn-outline text-sm w-full text-center group-hover:bg-[var(--secondary-color)] group-hover:text-white group-hover:border-[var(--secondary-color)]">
                                    VIEW DETAILS
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
