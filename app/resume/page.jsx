// Resume.js
"use client";

import Description from '@/components/ui/description';
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, 
    FaNodeJs, FaPython, FaDatabase
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useState } from 'react';

const about = {
    title: "About Me",
    description: "I'm a computer engineering student with a passion for building web applications, doing data structures and algorithms, and working on machine learning projects. I have experience with HTML, CSS, JavaScript, React, Node.js, and more. I'm always looking for new opportunities to learn and grow as a developer.",
    info: [
        {
            fieldname: "Name",
            fieldValue: "Akshat"
        },
        {
            fieldname: "Email",
            fieldValue: "akshat.y@somaiya.edu"
        },
        {
            fieldname: "Phone",
            fieldValue: "+91 7454993082"
        },
        {
            fieldname: "Languages",
            fieldValue: "English, Hindi"
        },
        {
            fieldname: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldname: "Location",
            fieldValue: "Mumbai, India"
        }
    ]
};

const skills = {
    title: "Skills",
    description: "I have experience with the following technologies:",
    info: [
        {
            icon: <FaHtml5 className="text-[#E34F26]" />,
            name: "HTML"
        },
        {
            icon: <FaCss3 className="text-[#1572B6]" />,
            name: "CSS"
        },
        {
            icon: <FaJs className="text-[#F7DF1E]" />,
            name: "JavaScript"
        },
        {
            icon: <FaReact className="text-[#61DAFB]" />,
            name: "React"
        },
        {
            icon: <FaNodeJs className="text-[#339933]" />,
            name: "Node.js"
        },
        {
            icon: <FaFigma className="text-[#F24E1E]" />,
            name: "Figma"
        },
        {
            icon: <FaPython className="text-[#3776AB]" />,
            name: "Python"
        },
        {
            icon: <FaDatabase className="text-[#4479A1]" />,
            name: "SQL"
        }
    ]
};

const certificates = {
    title: "Certificates",
    description: "I have completed the following courses and certifications:",
    info: [
        {
            name: "Developing Applications with Cloud Run on Google Cloud: Fundamentals",
            issuer: "Coursera",
            date: "2025"
        },
        {
            name: "Database Structures and Management with MySQL",
            issuer: "Coursera",
            date: "2025"
        },
        {
            name: "HTML, CSS, and Javascript for Web Developers",
            issuer: "Coursera",
            date: "2023"
        }
    ]
};

const Education = {
    title: "Education",
    description: "I am currently pursuing a Bachelor of Technology in Computer Engineering at K.J. Somaiya College of Engineering, Mumbai.",
    info: [
        {
            degree: "Bachelor of Technology",
            major: "Computer Engineering",
            school: "K.J. Somaiya College of Engineering",
            date: "2022 - 2026"
        }
    ]
};

const Resume = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="min-h-screen bg-zinc-900 text-white p-4 md:p-8">
           

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 no-scrollbar">
                        <button 
                            onClick={() => setActiveTab('about')}
                            className={`shrink-0 md:shrink py-2.5 px-4 rounded-xl text-left transition-colors ${activeTab === 'about' ? 'bg-cyan-400 text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                        >
                            About me
                        </button>
                        <button 
                            onClick={() => setActiveTab('skills')}
                            className={`shrink-0 md:shrink py-2.5 px-4 rounded-xl text-left transition-colors ${activeTab === 'skills' ? 'bg-cyan-400 text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                        >
                            Skills
                        </button>
                        <button 
                            onClick={() => setActiveTab('certificates')}
                            className={`shrink-0 md:shrink py-2.5 px-4 rounded-xl text-left transition-colors ${activeTab === 'certificates' ? 'bg-cyan-400 text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                        >
                            Certificates
                        </button>
                        <button 
                            onClick={() => setActiveTab('education')}
                            className={`shrink-0 md:shrink py-2.5 px-4 rounded-xl text-left transition-colors ${activeTab === 'education' ? 'bg-cyan-400 text-black' : 'bg-zinc-800 text-white hover:bg-zinc-700'}`}
                        >
                            Education
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full md:w-3/4">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-zinc-900"
                    >
                        {activeTab === 'about' && <Description title={about.title} description={about.description} info={about.info} />}
                        {activeTab === 'skills' && <Description title={skills.title} description={skills.description} info={skills.info} />}
                        {activeTab === 'certificates' && <Description title={certificates.title} description={certificates.description} info={certificates.info} />}
                        {activeTab === 'education' && <Description title={Education.title} description={Education.description} info={Education.info} />}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Resume;