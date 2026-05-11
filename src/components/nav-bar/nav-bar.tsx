import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  // SCROLL TO SECTION
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -90;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  // ACTIVE SECTION + NAVBAR SCROLL EFFECT
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 150;

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(item.id);
          }
        }
      });

      // REMOVE ACTIVE AT TOP
      if (window.scrollY < 100) {
        setActive("");
      }

      // NAVBAR BACKGROUND CHANGE
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <>
      {/* BACKGROUND GLOW */}
      <motion.div
        className="fixed top-0 left-0 w-full h-28 bg-indigo-500/10 blur-3xl z-40 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl
        
        ${
          scrolled
            ? "bg-slate-900/90 shadow-2xl border-b border-white/10"
            : "bg-slate-900/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            {/* LOGO ICON */}
            <motion.div
              className="relative w-11 h-11 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-xl overflow-hidden"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              L

              {/* SHINE EFFECT */}
              <motion.div
                className="absolute inset-0 bg-white/20"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>

            {/* LOGO TEXT */}
            <div>
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </h1>

              <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
                Developer
              </p>
            </div>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  
                  ${
                    active === item.id
                      ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="md:hidden overflow-hidden bg-slate-900/95 border-t border-white/10"
            >
              <div className="px-6 py-5 flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => handleScroll(item.id)}
                    className={`text-left px-5 py-4 rounded-2xl font-medium transition-all duration-300
                      
                      ${
                        active === item.id
                          ? "text-white bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "text-gray-300 bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;