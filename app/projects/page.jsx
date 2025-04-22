"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';

const projects = [
  /* project entries unchanged */
];

const TypeWriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return <span>{currentText}</span>;
};

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="w-full flex flex-col justify-center gap-6 group mb-[60px]">
      <div className="w-full flex justify-between items-center mt-6">
        <div className="text-5xl font-extrabold text-outline">
          {isVisible && <TypeWriter text={project.num} delay={10} />}
        </div>
        <div className="flex items-center gap-4">
          <Link href={project.github} target="_blank" rel="noopener noreferrer" className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
            <BsArrowDownRight className="text-primary text-2xl" />
          </Link>
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm underline text-white group-hover:text-accent transition duration-300">
              Live Demo
            </Link>
          )}
        </div>
      </div>

      <motion.h2
        className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {isVisible && <TypeWriter text={project.title} delay={10} />}
      </motion.h2>

      <motion.div
        className="text-white/100"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="typewriter">
          {isVisible && project.description.map((line, idx) => (
            <p key={idx} className="ml-4"><TypeWriter text={line} delay={20} /></p>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={`relative w-full ${project.isVertical ? 'h-[500px]' : 'h-[250px]'} overflow-hidden rounded-xl mt-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image src={project.image} alt={project.title} fill className="object-contain transition-transform duration-500 group-hover:scale-110" priority />
      </motion.div>

      <div className="border-b border-white/20 w-full"></div>
    </div>
  );
};

const ProjectsSection = () => (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeIn" } }}
        className="flex flex-col"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
