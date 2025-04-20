import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  sections?: string[];
  onSectionClick?: (section: string) => void;
}

const Navbar = ({
  sections = [
    "About",
    "Gallery",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Volunteering",
    "Creative",
    "Contact",
  ],
  onSectionClick = () => {},
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onSectionClick(section);

    // Smooth scroll to section
    const sectionElement = document.getElementById(section.toLowerCase());
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2 bg-lightblue-50" : "py-4 bg-white"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div
          className="text-xl md:text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="#"
            className="text-lightblue-800 hover:text-lightblue-600 transition-colors font-bold"
          >
            Portfolio
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <motion.button
              key={section}
              className="text-lightblue-700 hover:text-lightblue-900 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-lightblue-700 hover:text-lightblue-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-lightblue-50 shadow-lg absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map((section) => (
              <button
                key={section}
                className="text-lightblue-700 hover:text-lightblue-900 transition-colors text-left py-2 border-b border-lightblue-100"
                onClick={() => handleSectionClick(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
