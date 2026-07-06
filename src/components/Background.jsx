import { motion } from "framer-motion";

const blobs = [
  {
    id: 1,
    color: "bg-purple-600/20",
    size: "w-[450px] h-[450px]",
    position: "top-0 left-0",
    duration: 12,
  },
  {
    id: 2,
    color: "bg-cyan-500/20",
    size: "w-[400px] h-[400px]",
    position: "bottom-0 right-0",
    duration: 14,
  },
  {
    id: 3,
    color: "bg-pink-500/15",
    size: "w-[350px] h-[350px]",
    position: "top-1/2 left-1/2",
    duration: 16,
  },
];

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Aurora */}

      {blobs.map((blob) => (

        <motion.div
          key={blob.id}
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, .95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
          }}
          className={`absolute ${blob.position} ${blob.size} ${blob.color} rounded-full blur-[150px]`}
        />

      ))}

      {/* Stars */}

      {Array.from({ length: 60 }).map((_, index) => (

        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 3 + 2,
          }}
        />

      ))}

    </div>
  );
};

export default Background;