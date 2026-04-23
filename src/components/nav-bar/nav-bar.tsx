import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // 👇 Detect active section
  useEffect(() => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-md">
      <div className="w-full px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-indigo-500 text-white font-bold">
            L
          </div>

          <h1 className="text-2xl font-bold text-indigo-400">
            Portfolio
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`transition ${active === item.id
                ? "text-indigo-400 font-semibold border-b-2 border-indigo-400"
                : "hover:text-indigo-400"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-6 pb-4 flex flex-col gap-4 text-lg">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`relative transition px-1 ${active === item.id
                ? "text-indigo-400 font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-indigo-400"
                : "hover:text-indigo-400 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-400 hover:after:w-full after:transition-all"
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;