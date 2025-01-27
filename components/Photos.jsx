"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] xl:w-[400px] xl:h-[400px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Photo description"
            className="object-contain"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="absolute w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] xl:w-[420px] xl:h-[420px]"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 506 506"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="200"
            stroke="#00ffff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
