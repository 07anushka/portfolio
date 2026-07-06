import skills from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[6px]">
            What I Know
          </p>

          <h2
            className="
            text-5xl
            md:text-6xl
            font-bold
            mt-4
            bg-gradient-to-r
            from-purple-400
            via-pink-500
            to-cyan-400
            bg-clip-text
            text-transparent
            "
          >
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies, frameworks and tools that I use to build
            scalable, responsive and modern web applications.
          </p>

        </motion.div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.06,
                  y: -10,
                  rotate: -1,
                }}
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                transition-all
                duration-300
                hover:border-purple-500
                hover:shadow-[0_0_35px_rgba(168,85,247,.35)]
                "
              >

                <div
                  className="
                  w-20
                  h-20
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-gradient-to-r
                  from-purple-600
                  to-pink-500
                  shadow-lg
                  mb-6
                  "
                >
                  <Icon className="text-4xl text-white" />
                </div>

                <h3 className="text-xl font-semibold">
                  {skill.name}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  Professional Experience
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;