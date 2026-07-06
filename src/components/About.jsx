import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCode,
  FaAward,
} from "react-icons/fa";

const infoCards = [
  {
    icon: <FaUserGraduate />,
    title: "Education",
    value: "B.E Computer Science Engineering",
    desc: "CGPA: 9.3 | VTU",
  },
  {
    icon: <FaLaptopCode />,
    title: "Experience",
    value: "Python Full Stack Developer",
    desc: "Django • React • PostgreSQL",
  },
  {
    icon: <FaCode />,
    title: "Tech Stack",
    value: "Python • Django • Web Development",
    desc: "REST API • Docker • Git",
  },
  {
    icon: <FaAward />,
    title: "Achievements",
    value: "Academic Topper",
    desc: "Department of CSE - 2025",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-purple-400">
            Get To Know Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* About Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10"
        >

          <h3 className="text-4xl font-bold mb-6">
            Python Django Full Stack Developer
          </h3>

          <p className="text-gray-300 leading-8 text-lg">
            I'm Anushka A Naik, a passionate Computer Science graduate with
            experience in Python Full Stack Development, REST APIs, Django,
            React and PostgreSQL. I enjoy building responsive, scalable and
            user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-8 mt-6">
            I continuously improve my skills by working on real-world
            projects, learning modern technologies and following software
            engineering best practices.
          </p>

          {/* Stats */}

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">

            <div className="bg-[#111827] rounded-2xl p-6 text-center">
              <h2 className="text-5xl font-bold text-purple-400">2+</h2>
              <p className="text-gray-400 mt-3">Projects</p>
            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">
              <h2 className="text-5xl font-bold text-purple-400">10+</h2>
              <p className="text-gray-400 mt-3">Technologies</p>
            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">
              <h2 className="text-5xl font-bold text-purple-400">2025</h2>
              <p className="text-gray-400 mt-3">Graduate</p>
            </div>

            <div className="bg-[#111827] rounded-2xl p-6 text-center">
              <h2 className="text-5xl font-bold text-purple-400">100%</h2>
              <p className="text-gray-400 mt-3">Dedication</p>
            </div>

          </div>

        </motion.div>

        {/* Info Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {infoCards.map((card) => (

            <motion.div
              key={card.title}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,.35)] transition-all"
            >

              <div className="text-5xl text-purple-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold">
                {card.title}
              </h3>

              <p className="mt-4 font-semibold">
                {card.value}
              </p>

              <p className="text-gray-400 mt-2">
                {card.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;