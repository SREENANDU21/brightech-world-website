import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-[var(--bg-card)] pt-20 pb-10 border-t border-[var(--glass-border)]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    {/* Brand Info */}
                    <div>
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <img
                                src="/assets/logo.png"
                                alt="Brightech World"
                                className="h-14 w-auto object-contain"
                            />
                            <div className="font-bold flex flex-col items-start leading-none tracking-tight text-gray-900">
                                <span className="text-2xl tracking-tighter">BRIGHT<span className="text-[var(--primary-neon)]">ECH</span></span>
                                <span className="text-2xl tracking-tighter">WORLD</span>
                            </div>
                        </a>
                        <p className="text-gray-600 mb-6">
                            Your trusted partner for world-class LED display solutions.
                        </p>
                        <div className="flex gap-4">
                            {/* Instagram: Brand Color Icon, White Bubble, No Animation */}
                            <a href="https://www.instagram.com/brightechworldscreen?igsh=eTRtZTh6bmNodHFs" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
                                <Instagram size={20} color="#E1306C" />
                            </a>
                            {/* YouTube: Brand Color Icon, White Bubble, No Animation */}
                            <a href="https://youtube.com/@BRIGHTECHWORLD" target="_blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
                                <Youtube size={20} color="#FF0000" fill="#FF0000" />
                            </a>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold mb-6 text-gray-900">Our Locations</h4>
                        <div className="grid grid-cols-1 gap-6">

                            <div className="p-4 rounded-xl border-l-4 border-white bg-[#1e3a4e] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center gap-2 text-white mb-2">
                                    <span className="font-bold text-lg">Kerala, India (Trivandrum)</span>
                                </div>
                                <div className="text-sm text-gray-200 space-y-1 font-medium">
                                    <p>9388001144</p>
                                    <p>8086755000</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border-l-4 border-white bg-[#1e3a4e] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center gap-2 text-white mb-2">
                                    <span className="font-bold text-lg">Bengaluru</span>
                                </div>
                                <div className="text-sm text-gray-200 space-y-1 font-medium">
                                    <p>8921109262</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl border-l-4 border-white bg-[#1e3a4e] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center gap-2 text-white mb-2">
                                    <span className="font-bold text-lg">Dubai, UAE (AL Qusais)</span>
                                </div>
                                <div className="text-sm text-gray-200 space-y-1 font-medium">
                                    <p>+971 589319840</p>
                                    <p>+971 544965520</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Quick Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-gray-900">Reach Us</h4>
                        <a
                            href="https://api.whatsapp.com/message/7E7JB2XNIS7LG1?autoload=1&app_absent=0&text=Hello!%20I%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
                            target="_blank"
                            className="btn btn-outline w-full flex items-center justify-center gap-2 mb-4"
                        >
                            <MessageCircle size={18} /> WhatsApp Now
                        </a>
                        <a
                            href="mailto:info@brighttechworld.com"
                            className="btn glass w-full flex items-center justify-center gap-2"
                        >
                            <Mail size={18} /> Email Us
                        </a>
                    </div>
                </div>

                <div className="border-t border-[var(--glass-border)] pt-8 text-center text-[var(--text-muted)] text-sm">
                    <p>&copy; {new Date().getFullYear()} Bright Tech World LED Solution. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
