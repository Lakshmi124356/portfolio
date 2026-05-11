import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaBriefcase,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">

        {/* LEFT */}
        <p className="text-gray-400 text-[11px] md:text-xs">
          © {new Date().getFullYear()} Lakshmi Bondada
        </p>

        {/* CENTER */}
        <p className="hidden md:block text-gray-500 text-[11px]">
          Built with React & Tailwind
        </p>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* PHONE */}
          <div className="relative group">
            <a
              href="tel:+919876543210"
              className="text-gray-300 hover:text-indigo-400 transition duration-300 hover:scale-110"
            >
              <FaPhoneAlt size={13} />
            </a>

            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 
      bg-black text-white text-[10px] px-2 py-1 rounded-md
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              Phone
            </span>
          </div>

          {/* LINKEDIN */}
          <div className="relative group">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin size={15} />
            </a>

            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 
      bg-black text-white text-[10px] px-2 py-1 rounded-md
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              LinkedIn
            </span>
          </div>

          {/* GITHUB */}
          <div className="relative group">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub size={15} />
            </a>

            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 
      bg-black text-white text-[10px] px-2 py-1 rounded-md
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              GitHub
            </span>
          </div>

          {/* NAUKRI */}
          <div className="relative group">
            <a
              href="https://www.naukri.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition duration-300 hover:scale-110"
            >
              <FaBriefcase size={14} />
            </a>

            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 
      bg-black text-white text-[10px] px-2 py-1 rounded-md
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              Naukri
            </span>
          </div>

          {/* EMAIL */}
          <div className="relative group">
            <a
              href="mailto:yourmail@gmail.com"
              className="text-gray-300 hover:text-pink-400 transition duration-300 hover:scale-110"
            >
              <FaEnvelope size={14} />
            </a>

            <span className="absolute bottom-7 left-1/2 -translate-x-1/2 
      bg-black text-white text-[10px] px-2 py-1 rounded-md
      opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              Email
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;