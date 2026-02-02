import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-[var(--bg-card)] pt-20 pb-10 border-t border-[var(--glass-border)]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 tracking-tighter">
                            BRIGHT<span className="text-[var(--primary-neon)]">ECH</span> WORLD
                        </h3>
                        <p className="text-[var(--text-muted)] mb-6">
                            Your trusted partner for world-class LED display solutions.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/brightechworldscreen?igsh=eTRtZTh6bmNodHFs" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="https://youtube.com/@BRIGHTECHWORLD" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="lg:col-span-2">
                        <h4 className="text-lg font-bold mb-6 text-white">Our Locations</h4>
                        <div className="grid grid-cols-1 gap-6">

                            <div className="glass p-4 rounded-xl border-l-4 border-[var(--primary-neon)]">
                                <div className="flex items-center gap-2 text-[var(--primary-neon)] mb-2">
                                    <span className="font-bold">Kerala, India (Trivandrum)</span>
                                </div>
                                <div className="text-sm text-[var(--text-muted)] space-y-1">
                                    <p>9388001144</p>
                                    <p>8086755000</p>
                                </div>
                            </div>

                            <div className="glass p-4 rounded-xl border-l-4 border-[var(--secondary-neon)]">
                                <div className="flex items-center gap-2 text-[var(--secondary-neon)] mb-2">
                                    <span className="font-bold">Bengaluru</span>
                                </div>
                                <div className="text-sm text-[var(--text-muted)] space-y-1">
                                    <p>8921109262</p>
                                </div>
                            </div>

                            <div className="glass p-4 rounded-xl border-l-4 border-[var(--accent-neon)]">
                                <div className="flex items-center gap-2 text-[var(--accent-neon)] mb-2">
                                    <span className="font-bold">Dubai, UAE (AL Qusais)</span>
                                </div>
                                <div className="text-sm text-[var(--text-muted)] space-y-1">
                                    <p>+971 589319840</p>
                                    <p>+971 544965520</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Quick Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Reach Us</h4>
                        <a
                            href="https://wa.me/message/7E7JB2XNIS7LG1?text=Hello! Can I get more info on this?"
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
