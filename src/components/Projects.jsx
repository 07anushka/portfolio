import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-purple-400">
            Portfolio
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">

            Featured Projects

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I have developed using Python,
            Django, React and Machine Learning.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="space-y-28">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1,
                }}
                className={index % 2 !== 0 ? "lg:order-2" : ""}
              >

                <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl w-full transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-5">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-purple-600 p-4 rounded-full hover:scale-110 transition"
                    >
                      <FaGithub size={24}/>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-cyan-500 p-4 rounded-full hover:scale-110 transition"
                    >
                      <FaExternalLinkAlt size={22}/>
                    </a>

                  </div>

                </div>

              </motion.div>

              {/* Details */}

              <div>

                <span className="text-purple-400 uppercase tracking-[3px]">
                  Featured Project
                </span>

                <h3 className="text-4xl font-bold mt-3">
                  {project.title}
                </h3>

                <div className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 leading-8 text-gray-300">

                  {project.description}

                </div>

                {/* Tech */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center gap-3 hover:scale-105 transition"
                  >
                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-4 rounded-full border border-cyan-400 hover:bg-cyan-500 transition flex items-center gap-3"
                  >
                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;