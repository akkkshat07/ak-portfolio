"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaPhone className="text-2xl text-cyan-400" />,
        label: "Phone",
        value: "+91 7454993082",
        href: "tel:+917454993082"
    },
    {
        icon: <FaEnvelope className="text-2xl text-cyan-400" />,
        label: "Email",
        value: "akshaty2020@gmail.com",
        href: "mailto:akshaty2020@gmail.com"
    },
    {
        icon: <FaLinkedin className="text-2xl text-cyan-400" />,
        label: "LinkedIn",
        value: "Akshat ",
        href: "https://www.linkedin.com/in/akkkshat07/"
    },
    {
        icon: <FaTwitter className="text-2xl text-cyan-400" />,
        label: "Twitter",
        value: "@akkkshat",
        href: "https://x.com/akkkshat"
    },
    {
        icon: <FaWhatsapp className="text-2xl text-cyan-400" />,
        label: "WhatsApp",
        value: "+91 7454993082",
        href: "https://wa.me/917454993082"
    },
    {
        icon: <FaGithub className="text-2xl text-cyan-400" />,
        label: "GitHub",
        value: "akkkshat07",
        href: "https://github.com/akkkshat07"
    }
];

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col items-center justify-center bg-zinc-900 text-white py-24 xl:py-12"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">{item.label}</p>
                                    <p className="font-medium">{item.value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
                <div className="max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Let&apos;s work together</h3>
                    <form className="bg-zinc-800 p-6 rounded-xl space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Firstname"
                                className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Lastname"
                                className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <select
                            className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            required
                        >
                            <option value="" disabled selected>
                                Select a service
                            </option>
                            <option value="web-development">Web Development</option>
                            <option value="ui-design">UI/UX Design</option>
                            <option value="consulting">Consulting</option>
                        </select>
                        <textarea
                            placeholder="Type your message here."
                            className="w-full p-3 bg-zinc-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            rows="5"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full p-3 bg-cyan-400 text-black font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;