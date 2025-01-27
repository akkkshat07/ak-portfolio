"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaBrain, FaRobot } from "react-icons/fa";

const interests = [
    {
        icon: <FaCode className="text-2xl text-cyan-400" />,
        title: "Web Development",
        description: "Passionate about creating responsive and user-friendly web applications"
    },
    {
        icon: <FaLaptopCode className="text-2xl text-cyan-400" />,
        title: "Data Structures",
        description: "Strong foundation in algorithmic problem-solving and optimization"
    },
    {
        icon: <FaBrain className="text-2xl text-cyan-400" />,
        title: "Machine Learning",
        description: "Interested in AI and its applications in solving real-world problems"
    },
    {
        icon: <FaRobot className="text-2xl text-cyan-400" />,
        title: "Automation",
        description: "Experience in creating automated solutions for improved efficiency"
    }
];

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-screen bg-zinc-900 text-white py-12 px-4"
        >
            <div className="container mx-auto max-w-4xl">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }} // Adjusted scale for zoom out effect
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-48 h-48 relative rounded-full overflow-hidden"
                    >
                        <Image
                            src="/assets/my.jpg" // Update to relative path
                            alt="Akshat Yadav"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div>
                        <h1 className="text-4xl font-bold mb-4">Hi, I'm Akshat! 🫡</h1>
                        <p className="text-xl text-gray-300">Computer Engineering Student & Web Developer</p>
                    </div>
                </div>

                {/* Introduction */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a passionate computer engineering student at K.J. Somaiya College of Engineering, 
                        with a keen interest in web development, data structures, and machine learning. 
                        I enjoy solving complex problems and creating efficient solutions through code.
                    </p>
                </motion.section>

                {/* Interests Grid */}
                <motion.section
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <h2 className="text-2xl font-bold mb-6">What I Do</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {interests.map((interest, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="bg-zinc-800 p-6 rounded-xl"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    {interest.icon}
                                    <h3 className="text-xl font-semibold">{interest.title}</h3>
                                </div>
                                <p className="text-gray-400">{interest.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default About;