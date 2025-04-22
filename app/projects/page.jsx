"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from 'next/image';

const projects = [
  {
    num: "01",
    title: "Cotton_doc",
    description: [
      "• Built an AI-driven application using TensorFlow and Jupyter Notebook to detect and classify cotton plant diseases.",
      "• The app leverages a custom-trained CNN to analyze leaf images and categorize them into classes like Healthy, Infected-Aphids, and Bacterial Blight.",
      "• This project highlights expertise in dataset preprocessing and model training.",
      "• Deployed machine learning solutions for sustainable agriculture."
    ],
    github: "https://github.com/akkkshat07/Cotton_crop_disease_detection_using_ML",
    image: "/assets/Cotton_doc.png",
    isVertical: true
  },
  {
    num: "02",
    title: "ChadBot",
    description: [
      "• Developed a chatbot application using Flutter and Dart, designed for seamless functionality across Android, iOS, and Web platforms.",
      "• Integrated custom launcher icons for a polished user experience.",
      "• Created a responsive interface to ensure cross-platform compatibility.",
      "• Demonstrated expertise in Flutter's cross-platform development capabilities and user-friendly application design."
    ],
    github: "https://github.com/akkkshat07/ChadBot",
    image: "/assets/Chadbot.png",
    isVertical: true
  },
  {
    num: "03",
    title: "LearnHub",
    description: [
      "• Created a Learning Management System using PHP, HTML, and CSS to streamline online education.",
      "• The platform includes features for course management, user authentication, and interactive learning modules.",
      "• Showcases proficiency in web development and backend integration.",
      "• Delivers an intuitive and functional solution for learners and educators."
    ],
    github: "https://github.com/akkkshat07/LearnHub",
    image: "/assets/LearnHub.png",
    isVertical: false
  },
  {
    num: "04",
    title: "Cottonix",
    description: [
      "• Built a Flutter-based application to detect cotton plant diseases using a TensorFlow Lite model.",
      "• Designed a green-themed UI with Material icons for an intuitive user experience.",
      "• Integrated machine learning predictions for real-time disease detection.",
      "• Showcased expertise in Flutter and TensorFlow Lite integration."
    ],
    github: "https://github.com/akkkshat07/Cottonix",
    image: "/assets/Cottonix.jpg",
    isVertical: true
  },
  {
    num: "05",
    title: "Exam Prediction Model",
    description: [
      "• Developed a Flask-based web application to predict exam performance based on input parameters.",
      "• Implemented machine learning algorithms for accurate prediction models.",
      "• Showcased proficiency in backend development and data-driven insights.",
      "• Delivered a user-friendly interface for students and educators."
    ],
    github: "https://github.com/akkkshat07/ExamPredictionModel",
    demo: "https://exam-score-predictor.onrender.com/",
    image: "/assets/ExamPrediction.png",
    isVertical: false
  },
  {
    num: "06",
    title: "FlowSync",
    description: [
      "• Designed a React Native application for real-time task synchronization and collaboration.",
      "• Implemented features for task management and team coordination.",
      "• Showcased expertise in mobile app development and React Native.",
      "• Delivered a seamless user experience with responsive design."
    ],
    github: "https://github.com/akkkshat07/FlowSync",
    image: "/assets/FlowSync.jpg",
    isVertical: true
  }
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
    <div className="flex-1 flex flex-col justify-center gap-6 group">
      <div className="w-full flex justify-between items-center mt-6">
        <div className="text-5xl font-extrabold text-outline">
          {isVisible && <TypeWriter text={project.num} delay={10} />}
        </div>
        <div className="flex gap-4">
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

      <motion.h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
        {isVisible && <TypeWriter text={project.title} delay={10} />}
      </motion.h2>

      <motion.div className="text-white/100" initial={{ opacity: 0 }} animate={{ opacity: isVisible ? 1 : 0 }} transition={{ delay: 0.5, duration: 1 }}>
        <div className="typewriter">
          {isVisible && project.description.map((line, idx) => (
            <p key={idx} className="ml-4"><TypeWriter text={line} delay={20} /></p>
          ))}
        </div>
      </motion.div>

      <motion.div className={`relative w-full ${project.isVertical ? 'h-[500px]' : 'h-[250px]'} overflow-hidden rounded-xl mt-4`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: isVisible ? 1 : 0, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
        <Image src={project.image} alt={project.title} fill className="object-contain transition-transform duration-500 group-hover:scale-110" priority />
      </motion.div>

      <div className="border-b border-white/20 w-full"></div>
    </div>
  );
};

const ProjectsSection = () => (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeIn" } }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {projects.map((project, idx) => <ProjectCard key={idx} project={project} index={idx} />)}
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
