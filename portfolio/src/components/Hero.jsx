// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const profileImageRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.1 }
    );

    if (profileImageRef.current) {
      observer.observe(profileImageRef.current);
    }

    const handleMouseMove = (e) => {
      // Update mouse position relative to viewport
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (profileImageRef.current) {
        observer.unobserve(profileImageRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate 3D transform based on mouse position
  const calculateTransform = () => {
    const tiltX = mousePosition.y * 20; // Tilt up/down
    const tiltY = -mousePosition.x * 20; // Tilt left/right
    return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const socialIcons = [
    {
      icon: <FaGithub size={28} />,
      href: "https://github.com/KumarDhananjaya",
      delay: 0.3,
    },
    {
      icon: <FaLinkedin size={28} />,
      href: "https://www.linkedin.com/in/kumardhananjaya/",
      delay: 0.4,
    },
    {
      icon: <FaEnvelope size={28} />,
      href: "mailto:kumar62.shivu@gmail.com",
      delay: 0.5,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center py-16 sm:py-20 md:py-24 overflow-hidden relative"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-0" />

      {/* Animated background particles - simplified for performance */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            style={{
              width: Math.random() * 100 + 10,
              height: Math.random() * 100 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity: textOpacity }}
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl md:text-2xl text-primary font-mono mb-2"
            >
              👋 Hello, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Kumar Dhananjaya
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 h-12"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Mobile App Developer",
                  1000,
                  "CS Graduate",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 mb-8 max-w-lg"
            >
              I have expertise in Full Stack (JavaScript) and Mobile App
              development. Passionate about expanding my knowledge and learning
              new technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {/* <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#3a86ff" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-primary hover:bg-primary/80 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all shadow-lg shadow-primary/20"
              >
                Contact Me
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(58, 134, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="border border-primary text-primary hover:bg-primary/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all"
              >
                View Projects
              </motion.a> */}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: social.delay }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    color: "#3a86ff",
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              scale: imageScale,
              rotateZ: imageRotate,
            }}
            className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 flex justify-center"
          >
            <motion.div
              ref={profileImageRef}
              style={{
                transform: calculateTransform(),
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="reveal relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 group"
            >
              {/* Glowing background effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-border"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 p-1 backdrop-blur-sm bg-black/20 shadow-2xl transform-gpu">
                <img
                  src="images/profilrpic.jpeg"
                  alt="Kumar Dhananjaya"
                  className="w-full h-full object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  whileHover={{ opacity: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          className="w-1 h-8 rounded-full bg-primary/50 overflow-hidden"
          animate={{
            backgroundPosition: ["0% 0%", "0% 100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent, #3a86ff, transparent)",
            backgroundSize: "100% 200%",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
