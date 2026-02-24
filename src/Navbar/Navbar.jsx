import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-3 bg-black/70 backdrop-blur-md z-50 text-white">
      <img
        className="w-15 h-15 object-cover rounded-full border-1 border-purple-500/30"
        src={Logo}
        alt="Logo"
      />
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`capitalize transition ${
                active === section
                  ? "text-purple-500 font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-8 md:hidden">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setOpen(false)}
              className={`capitalize ${
                active === section ? "text-purple-500 font-semibold" : ""
              }`}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
