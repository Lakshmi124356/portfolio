const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white fixed bottom-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Siva Manikanta. All rights reserved.
        </p>

        {/* Center (Optional tagline) */}
        <p className="text-sm text-gray-500 hidden md:block">
          Built with React & Tailwind CSS
        </p>

        {/* Right (Social Links) */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-indigo-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>

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