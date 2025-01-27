import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaTwitter, FaInstagram, FaCode } from 'react-icons/fa'; // Importing necessary icons
import Socials from "@/components/Socials";
import Photo from "@/components/Photos";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="max-w-[500px] mb-9 text-white/80">
              Hi! I'm <br /> <span className="text-accent">Akshat</span>
            </h1>
            <p className="mb-6">
              I excel at crafting elegant digital experiences that bring ideas to life.
              I am proficient in various programming languages and technologies.
            </p>
            {/* buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV button */}
              <a
                href="https://drive.google.com/file/d/1vLwvVXRk1VbrXw7FHEPBLA04RqfDeIxx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              {/* Socials */}
              <div className="mb-8 xl:mb-0">
                <div className="flex gap-6">
                  {/* GitHub */}
                  <a
                    href="https://github.com/akkkshat07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  >
                    <FaGithub />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://x.com/akkkshat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  >
                    <FaTwitter />
                  </a>
                  {/* LeetCode */}
                  <a
                    href="https://leetcode.com/u/akkkshat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  >
                    <FaCode />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/akkkshat07?igsh=cnhnenQxYjJ3cW1k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
