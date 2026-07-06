const Footer = () => {
    return (
      <footer className="bg-[#0B1120] text-gray-400 py-8 text-center border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} Anushka A Naik
        </p>
  
        <p className="mt-2">
          Built with React • Tailwind CSS • Framer Motion
        </p>
      </footer>
    );
  };
  
  export default Footer;