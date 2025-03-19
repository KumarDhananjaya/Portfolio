// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { name: 'Home', url: '#home' },
  { name: 'About', url: '#about' },
  { name: 'Projects', url: '#projects' },
  { name: 'Experience', url: '#experience' },
  { name: 'Contact', url: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/80 navbar-blur py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <RouterLink to="/" className="text-2xl font-bold">
          <span className="gradient-text">Kumar</span>
          <span className="text-white">Dhananjaya</span>
        </RouterLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="text-gray-300 hover:text-primary transition-colors"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/KumarDhananjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/kumardhananjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="#contact"
            className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-primary/80 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-200 hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-dark/95 navbar-blur py-4 shadow-lg"
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-300 hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 py-2">
              <a
                href="https://github.com/KumarDhananjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/kumardhananjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;