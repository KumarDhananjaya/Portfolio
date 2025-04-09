// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const profileImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (profileImageRef.current) {
      observer.observe(profileImageRef.current);
    }

    return () => {
      if (profileImageRef.current) {
        observer.unobserve(profileImageRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-xl md:text-2xl text-primary font-mono mb-2">
              👋 Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Kumar Dhananjaya
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Mobile App Developer',
                  1000,
                  'CS Graduate',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              I have expertise in Full Stack (JavaScript) and Mobile App development. Passionate about expanding my knowledge and learning new technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-medium transition-all"
              >
                View Projects
              </a>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all inline-block shadow-lg hover:shadow-xl"
              >
                Download Resume
              </motion.a>
            </motion.div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/KumarDhananjaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/kumardhananjaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:kumar62.shivu@gmail.com"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div
              ref={profileImageRef}
              className="reveal from-right w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary p-1"
            >
              <img
                src="images/profilrpic.jpeg" 
                alt="Kumar Dhananjaya"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;