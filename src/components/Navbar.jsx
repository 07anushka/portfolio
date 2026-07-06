import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navItems = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "certificates",
  "contact",
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        {/* Logo */}

        <h1 className="text-3xl font-bold cursor-pointer bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Anushka
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex gap-8">

          {navItems.map((item) => (

            <li key={item}>

              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-purple-400"
                className="cursor-pointer capitalize relative group text-gray-300 hover:text-purple-400 transition"
              >
                {item}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>

              </Link>

            </li>

          ))}

        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-white/10">

          {navItems.map((item) => (

            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              className="block text-center py-5 capitalize hover:text-purple-400 transition"
            >
              {item}
            </Link>

          ))}

        </div>

      )}

    </motion.nav>
  );
};

export default Navbar;