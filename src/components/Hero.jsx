import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import hero from "../assets/images/hero.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

import {
  SiPython,
  SiReact,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <p className="text-purple-400 uppercase tracking-[5px]">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mt-4 leading-tight">
            Anushka
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              A Naik
            </span>

          </h1>

          <div className="mt-8 text-2xl text-gray-300 font-semibold">

            <TypeAnimation
              sequence={[
                "Python Full Stack Developer",
                2000,
                "Django Developer",
                2000,
                "React Developer",
                2000,
                "REST API Developer",
                2000,
              ]}
              repeat={Infinity}
              speed={40}
            />

          </div>

          <p className="mt-8 text-lg text-gray-400 leading-8 max-w-xl">
            Passionate Computer Science Engineer specializing in
            Python, Django, React, PostgreSQL and REST APIs.
            I love building scalable web applications and
            beautiful user experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center gap-3 hover:scale-105 transition"
            >
              <FaDownload />

              Resume

            </a>

            <a
              href="#projects"
              className="px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-600 transition"
            >
              View Projects
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/07anushka"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaGithub size={22}/>
            </a>

            <a
              href="https://www.linkedin.com/in/anushka-a-naik-965593253/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <FaLinkedin size={22}/>
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-purple-600 opacity-30 blur-[120px] animate-pulse"></div>

            {/* Floating Icons */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-10 left-10 bg-[#111827] p-4 rounded-full shadow-xl"
            >
              <SiPython className="text-yellow-400 text-3xl"/>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-16 -right-10 bg-[#111827] p-4 rounded-full shadow-xl"
            >
              <SiReact className="text-cyan-400 text-3xl"/>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="absolute bottom-12 -left-10 bg-[#111827] p-4 rounded-full shadow-xl"
            >
              <SiDjango className="text-green-400 text-3xl"/>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-8 right-8 bg-[#111827] p-4 rounded-full shadow-xl"
            >
              <SiPostgresql className="text-blue-400 text-3xl"/>
            </motion.div>

            {/* Image */}

            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              src={hero}
              alt="Anushka"
              className="relative w-[420px] h-[420px] object-cover rounded-full border-4 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,.45)]"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

        <FaArrowDown className="text-purple-400 text-2xl"/>

      </div>

    </section>
  );
};

export default Hero;