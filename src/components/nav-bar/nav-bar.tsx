import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-slate-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/projects" className="hover:text-indigo-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;