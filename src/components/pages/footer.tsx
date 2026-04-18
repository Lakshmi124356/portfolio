const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white fixed bottom-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
        
        {/* Left */}
        <p className="text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} Lakshmi Bondada
        </p>

        {/* Center */}
        <p className="text-gray-500 hidden md:block text-xs">
          Built with React & Tailwind
        </p>

        {/* Right */}
        <div className="flex flex-wrap gap-3 text-xs md:text-sm items-center">
          
          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="hover:text-indigo-400 transition"
          >
            📞 +91 98765 43210
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            💬 WhatsApp
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>

          {/* Naukri */}
          <a
            href="https://www.naukri.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            Naukri
          </a>

          {/* Email */}
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-indigo-400 transition"
          >
            Email
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;