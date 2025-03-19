// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark/80 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary/20 hover:bg-primary/40 rounded-full flex items-center justify-center text-primary transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>

        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold">
            <span className="gradient-text">Kumar</span>
            <span className="text-white">Dhananjaya</span>
          </Link>
          <p className="text-gray-400 mt-2">Full Stack Developer</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/KumarDhananjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-dark/50 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/kumardhananjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-dark/50 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:kumar.dhananjaya@example.com"
            className="w-10 h-10 bg-dark/50 hover:bg-primary/20 rounded-full flex items-center justify-center text-gray-300 hover:text-primary transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Kumar Dhananjaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;