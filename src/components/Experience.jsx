import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    company: "CodingAI",
    duration: "8 Months",
    description:
      "Worked as a Full Stack Developer, building responsive web applications using Python, Django, React.js, PostgreSQL, HTML, CSS, JavaScript, and REST APIs. Developed backend APIs, integrated databases, fixed bugs, and collaborated on real-world client projects.",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Python Full Stack Developer Trainee",
    company: "QSpiders",
    duration: "8 Months",
    description:
      "Completed intensive training in Python Full Stack Development covering Python, Django, React.js, SQL, PostgreSQL, REST APIs, Git, HTML, CSS, JavaScript, and project-based application development.",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "DevOps Intern",
    company: "Rooman Technologies",
    duration: "Internship",
    description:
      "Worked on DevOps tools and practices including Docker, Jenkins, CI/CD pipelines, GitHub Actions, Linux, containerization, deployment automation, and version control workflows.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[6px] text-purple-400">
            Career Journey
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            My journey through Full Stack Development and DevOps,
            working on real-world projects while continuously
            improving my technical and problem-solving skills.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className={`relative mb-20 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Timeline Icon */}

              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(168,85,247,.45)] z-10">
                {exp.icon}
              </div>

              {/* Card */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                className="md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
              >

                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium">
                  {exp.duration}
                </span>

                <h3 className="text-3xl font-bold mt-5">
                  {exp.title}
                </h3>

                <h4 className="text-cyan-400 text-lg mt-2 font-medium">
                  {exp.company}
                </h4>

                <p className="text-gray-400 leading-8 mt-6">
                  {exp.description}
                </p>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;