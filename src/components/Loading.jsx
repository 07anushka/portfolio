import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col justify-center items-center">

      {/* Logo */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.7,
        }}
        className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,.6)]"
      >
        <h1 className="text-5xl font-bold text-white">
          A
        </h1>
      </motion.div>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
        className="text-4xl md:text-5xl font-bold mt-10"
      >
        Anushka A Naik
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.8,
        }}
        className="text-purple-400 mt-3 text-xl"
      >
        Python Full Stack Developer
      </motion.p>

      {/* Loader */}

      <motion.div
        className="mt-12 w-60 h-2 rounded-full bg-gray-700 overflow-hidden"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2,
          }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </motion.div>

    </div>
  );
};

export default Loading;