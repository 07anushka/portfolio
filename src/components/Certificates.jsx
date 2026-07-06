import { motion } from "framer-motion";
import certificates from "../data/certificates";

const Certificates = () => {
  return (
    <section
      id="certificates"
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
            ACHIEVEMENTS
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
            Certifications
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Certifications that demonstrate my continuous learning and
            expertise in software development, machine learning,
            cloud technologies, and modern web development.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:border-purple-500
                hover:shadow-[0_0_35px_rgba(168,85,247,.35)]
              "
            >

              {/* Icon */}

              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${certificate.color}
                flex items-center justify-center shadow-xl mb-8 text-4xl`}
              >
                {certificate.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-semibold mb-3">
                {certificate.title}
              </h3>

              {/* Issuer */}

              <p className="text-purple-300 font-medium">
                {certificate.issuer}
              </p>

              {/* Year */}

              <div className="mt-6">

                <span
                  className="
                    inline-block
                    px-4
                    py-2
                    rounded-full
                    bg-purple-500/10
                    border
                    border-purple-500/30
                    text-sm
                    text-purple-300
                  "
                >
                  {certificate.year}
                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Certificates;