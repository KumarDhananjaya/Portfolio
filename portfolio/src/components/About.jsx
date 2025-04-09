// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  BsAward,
  BsCodeSlash,
  BsMortarboard,
  BsLightbulb,
} from "react-icons/bs";
import {
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiNginx,
} from "react-icons/di";
import {
  SiExpress,
  SiFirebase,
  SiTypescript,
  SiKubernetes,
  SiNextdotjs,
  SiAndroid,
  SiPostgresql,
  SiTerraform,
  SiExpo,
} from "react-icons/si";

const skillIcons = {
  JavaScript: <DiJavascript className="text-yellow-400 text-2xl" />,
  ReactJs: <DiReact className="text-blue-400 text-2xl" />,
  "Node.js": <DiNodejs className="text-green-500 text-2xl" />,
  Express: <SiExpress className="text-gray-200 text-xl" />,
  MongoDB: <DiMongodb className="text-green-400 text-2xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-xl" />,
  Android: <SiAndroid className="text-green-500 text-xl" />,
  Postgresql: <SiPostgresql className="text-blue-500 text-xl" />,
  "HTML/CSS": (
    <div className="flex space-x-1">
      <DiHtml5 className="text-orange-500 text-2xl" />
      <DiCss3 className="text-blue-500 text-2xl" />
    </div>
  ),
  Docker: <DiDocker className="text-blue-400 text-2xl" />,
  Expo: <SiExpo className="text-white text-xl" />,
  Nginx: <DiNginx className="text-green-600 text-2xl" />,
  Terraform: <SiTerraform className="text-purple-600 text-xl" />,
  Azure: <div className="text-blue-500 text-xl font-bold">Az</div>,
  "React Native": <DiReact className="text-blue-400 text-2xl" />,
  Kubernetes: <SiKubernetes className="text-blue-600 text-xl" />,
  NextJs: <SiNextdotjs className="text-gray-200 text-xl" />,
};

// Categorized skills for better organization
const skillCategories = {
  Frontend: ["JavaScript", "TypeScript", "HTML/CSS", "ReactJs", "NextJs"],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase", "Postgresql"],
  Mobile: ["Android", "React Native", "Expo"],
  DevOps: ["Nginx", "Docker", "Kubernetes", "Terraform", "Azure"],
};

const AboutCard = ({ icon, title, description, delay }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      style={{
        perspective: "1000px",
      }}
      className="relative h-full"
    >
      <motion.div
        style={{
          rotateX: hover ? -10 : 0,
          rotateY: hover ? 10 : 0,
          translateZ: hover ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
        className="bg-dark/50 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-gray-700 hover:border-primary transition-all duration-300 h-full flex flex-col relative z-10 overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-purple-500/5 opacity-0 z-0"
          animate={{ opacity: hover ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Card content */}
        <motion.div
          className="text-primary text-4xl mb-4 relative z-10"
          animate={{
            scale: hover ? 1.1 : 1,
            y: hover ? -5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          {icon}

          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-10"
            animate={{
              scale: hover ? 1.5 : 0.8,
              opacity: hover ? 0.8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.h3
          className="text-xl font-bold mb-2 relative z-10"
          animate={{ y: hover ? -2 : 0 }}
          transition={{ delay: 0.05, duration: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-300 flex-grow relative z-10"
          animate={{ y: hover ? -2 : 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          {description}
        </motion.p>
      </motion.div>

      {/* 3D Shadow effect */}
      <motion.div
        animate={{
          opacity: hover ? 0.4 : 0,
          y: hover ? 10 : 0,
          rotateX: hover ? -10 : 0,
          rotateY: hover ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-primary/5 rounded-lg blur-md -z-10"
      />
    </motion.div>
  );
};

const SkillBadge = ({ skill, index }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <motion.div
        style={{
          rotateY: hover ? 10 : 0,
          rotateX: hover ? -10 : 0,
          translateZ: hover ? 15 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
        }}
        className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-blue-400 group relative z-10 h-full"
      >
        <motion.div
          animate={{
            rotateY: hover ? 360 : 0,
            scale: hover ? 1.2 : 1,
          }}
          transition={{
            rotateY: { duration: hover ? 0.7 : 0 },
            scale: { type: "spring", stiffness: 400 },
          }}
          className="relative"
        >
          {skillIcons[skill] || (
            <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-xs font-bold">
                {skill.charAt(0)}
              </span>
            </div>
          )}

          {/* Icon glow effect */}
          <motion.div
            className="absolute inset-0 bg-blue-400/30 rounded-full blur-md -z-10"
            animate={{
              opacity: hover ? 1 : 0,
              scale: hover ? 1.5 : 1,
            }}
          />
        </motion.div>

        <motion.span
          className="text-gray-200 font-medium text-sm"
          animate={{ y: hover ? 2 : 0 }}
          transition={{ delay: 0.1 }}
        >
          {skill}
        </motion.span>
      </motion.div>

      {/* Shadow effect */}
      <motion.div
        animate={{
          opacity: hover ? 0.3 : 0,
          y: hover ? 8 : 0,
          rotateX: hover ? -10 : 0,
          rotateY: hover ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-blue-500/5 rounded-lg blur-md -z-10"
      />
    </motion.div>
  );
};

const About = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create transformed values from these motion values
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2, 2]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [2, -2]);

  // Add effect to update mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convert mouse position to normalized values between -0.5 and 0.5
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.9],
    [0, 1, 1]
  );
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    const handleMouseMove = (e) => {
      // Update mouse position relative to the section
      const sectionRect = sectionRef.current?.getBoundingClientRect();
      if (sectionRect) {
        const x = (e.clientX - sectionRect.left) / sectionRect.width - 0.5;
        const y = (e.clientY - sectionRect.top) / sectionRect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-dark/70 to-dark/50 relative overflow-hidden"
    >
      {/* 3D Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating lights */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`light-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-500/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              opacity: 0.4,
              y: backgroundY,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(66, 153, 225, 0.05)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ opacity: contentOpacity, scale: titleScale }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Me
            </span>
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"
            ></motion.div>
          </h2>

          {/* 3D floating particles around title */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 6 + 2,
                  height: Math.random() * 6 + 2,
                  left: Math.random() * 200 - 100,
                  top: Math.random() * 100 - 50,
                  background: `rgba(${Math.random() * 100 + 100}, ${
                    Math.random() * 100 + 100
                  }, 255, ${Math.random() * 0.5 + 0.2})`,
                }}
                animate={{
                  y: [0, Math.random() * -20 - 10, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
          style={{
            perspective: "1500px",
            transformStyle: "preserve-3d",
          }}
        >
          <AboutCard
            icon={<BsCodeSlash />}
            title="Full Stack Developer"
            description="Experienced in JavaScript, TypeScript, and modern frameworks to build scalable, end-to-end web and mobile applications."
            delay={0.1}
          />
          <AboutCard
            icon={<BsMortarboard />}
            title="CS Graduate"
            description="Computer Science graduate with a strong grasp of algorithms, data structures, and software engineering best practices."
            delay={0.2}
          />
          <AboutCard
            icon={<BsAward />}
            title="Hackathon Winner"
            description="Winner of the HPE Swarm-IT Hackathon 2023 for developing an innovative, real-world tech solution under pressure."
            delay={0.3}
          />
          <AboutCard
            icon={<BsLightbulb />}
            title="Continous Learner"
            description="Driven by curiosity and growth—constantly exploring new tools, technologies, and creative ways to solve problems."
            delay={0.4}
          />
        </motion.div>

        <div
          ref={aboutRef}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="reveal from-left space-y-6"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              rotateY,
              rotateX,
            }}
          >
            <motion.div className="relative">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold relative z-10"
              >
                Software Engineer | Specializing in Web & Mobile Application
                Development
              </motion.h3>

              {/* Highlight effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg blur-xl -z-10"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300"
            >
              I'm a Full Stack Web and Mobile App Developer with a strong
              foundation in building scalable, user-focused applications. I’ve
              worked across the entire development stack, from frontend
              interfaces to backend services, using modern technologies like
              React, TypeScript, GraphQL, and cloud-native tools. My passion for
              problem-solving and innovation was recognized when I won the HPE
              Swarm-IT Hackathon 2023, where I built a high-impact solution
              under time constraints.{" "}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300"
            >
              I’m driven by a desire to keep learning and expanding my technical
              skill set, especially in areas like distributed systems, cloud
              infrastructure, and performance optimization.
            </motion.p>

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
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all inline-block shadow-lg hover:shadow-xl relative"
              >
                Download Resume
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 -z-10 rounded-full opacity-40 blur-md bg-gradient-to-r from-blue-400 to-purple-500"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="reveal from-right"
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
              transformOrigin: "right center",
            }}
          >
            <motion.div
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                rotateY,
                rotateX,
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 -z-10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Background grid effect */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%">
                  <pattern
                    id="smallGrid"
                    width="8"
                    height="8"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 8 0 L 0 0 0 8"
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl font-bold mb-6 text-center sm:text-left pb-2 border-b border-gray-700 relative z-10"
              >
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Skills
                </span>
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="space-y-6 relative z-10"
              >
                {Object.entries(skillCategories).map(
                  ([category, skills], catIndex) => (
                    <motion.div
                      key={category}
                      variants={categoryVariants}
                      className="mb-6 last:mb-0"
                    >
                      <div className="flex items-center mb-3">
                        <motion.div
                          className="w-2 h-2 bg-blue-500 rounded-full mr-2"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: catIndex * 0.5,
                          }}
                        />
                        <h4 className="text-gray-300 text-sm uppercase tracking-wider font-semibold">
                          {category}
                        </h4>
                        <div className="flex-grow h-px bg-gradient-to-r from-gray-700 via-blue-500/30 to-gray-700 ml-3" />
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                        {skills.map((skill, skillIndex) => (
                          <SkillBadge
                            key={skill}
                            skill={skill}
                            index={catIndex * 0.2 + skillIndex * 0.05}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 flex justify-center"
              >
                <motion.a
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(66, 153, 225, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="/#projects"
                  className="text-blue-400 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:border-blue-400 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10">See my projects</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </motion.svg>

                  {/* Button hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      x: ["0%", "100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Card shadow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-blue-500/5 blur-lg -z-10 translate-y-2"
              style={{
                rotateY,
                rotateX,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div
        className="hidden md:block fixed right-8 top-1/2 transform -translate-y-1/2 w-1 h-32 bg-gray-800 rounded-full overflow-hidden"
        style={{ scaleY: scrollYProgress }}
      >
        <motion.div
          className="w-full bg-gradient-to-b from-blue-400 to-purple-500 absolute top-0 bottom-0"
          style={{ scaleY: scrollYProgress }}
        />
      </motion.div>
    </section>
  );
};

export default About;
