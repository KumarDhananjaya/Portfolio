// src/components/About.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  // SiAzure,
  SiKubernetes,
  SiNextdotjs,
  SiAndroid,
  SiPostgresql,
  SiTerraform,
  SiExpo,
} from "react-icons/si";


const skillIcons = {
  JavaScript: <DiJavascript className="text-yellow-400 text-2xl" />,
  React: <DiReact className="text-blue-400 text-2xl" />,
  "Node.js": <DiNodejs className="text-green-500 text-2xl" />,
  Express: <SiExpress className="text-gray-200 text-xl" />,
  MongoDB: <DiMongodb className="text-green-400 text-2xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-xl" />,
  Android: <SiAndroid className="text-blue-500 text-xl" />,
  Postgresql: <SiPostgresql className="text-blue-500 text-xl" />,
  "HTML/CSS": (
    <div className="flex space-x-1">
      <DiHtml5 className="text-orange-500 text-2xl" />
      <DiCss3 className="text-blue-500 text-2xl" />
    </div>
  ),
  Docker: <DiDocker className="text-blue-400 text-2xl" />,
  Expo: <SiExpo className="text-blue-400 text-2xl" />,
  Nginx: <DiNginx className="text-green-600 text-2xl" />,
  Terraform: <SiTerraform className="text-green-600 text-2xl" />,
  // Azure: <SiAzure className="text-blue-500 text-xl" />,
  "React Native": <DiReact className="text-blue-400 text-2xl" />,
  Kubernetes: <SiKubernetes className="text-blue-600 text-xl" />,
  NextJs: <SiNextdotjs className="text-gray-200 text-xl" />,
};

// Categorized skills for better organization
const skillCategories = {
  Frontend: ["JavaScript","TypeScript","HTML/CSS", "ReactJs", "NextJs"],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase", "Postgresql"],
  Mobile: ["Android", "React Native", "Expo"],
  DevOps: ["Nginx", "Docker" , "Kubernetes","Terraform","Azure"],
};
const AboutCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-dark/50 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-primary transition-all duration-300 h-full flex flex-col"
    >
      <div className="text-primary text-4xl mb-4 transform transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 flex-grow">{description}</p>
    </motion.div>
  );
};

const SkillBadge = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(66, 153, 225, 0.15)",
        boxShadow: "0 4px 12px rgba(66, 153, 225, 0.2)",
      }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:border-blue-400 group"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="transition-all duration-300 group-hover:scale-110"
      >
        {skillIcons[skill] || (
          <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
            <span className="text-blue-400 text-xs font-bold">
              {skill.charAt(0)}
            </span>
          </div>
        )}
      </motion.div>
      <span className="text-gray-200 font-medium text-sm">{skill}</span>
    </motion.div>
  );
};
const About = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

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

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
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
      className="py-16 md:py-24 bg-gradient-to-b from-dark/70 to-dark/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            About <span className="gradient-text">Me</span>
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 mt-2"
            ></motion.div>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          <AboutCard
            icon={<BsCodeSlash />}
            title="Full Stack Developer"
            description="Proficient in JavaScript and modern web technologies to create robust applications."
            delay={0.1}
          />
          <AboutCard
            icon={<BsMortarboard />}
            title="CS Graduate"
            description="Graduated with a strong foundation in computer science principles and practices."
            delay={0.2}
          />
          <AboutCard
            icon={<BsAward />}
            title="Award Winner"
            description="Won HPE Swarm-IT Hackathon 2023 organized by HP Enterprise."
            delay={0.3}
          />
          <AboutCard
            icon={<BsLightbulb />}
            title="Continuous Learner"
            description="Passionate about expanding knowledge and learning new technologies."
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
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold"
            >
              CS Graduate with a passion for building modern web and mobile
              applications
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-300"
            >
              I have expertise in Full Stack JavaScript development and Mobile
              App development. As a recent winner of the HPE Swarm-IT Hackathon
              2023, I've demonstrated my ability to create innovative solutions
              under pressure.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-300"
            >
              My passion is expanding my knowledge and constantly improving my
              skills. I'm currently looking for remote jobs and internships
              where I can apply my technical skills while continuing to grow as
              a developer.
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
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all inline-block shadow-lg hover:shadow-xl"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="reveal from-right bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl"
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl font-bold mb-6 text-center sm:text-left pb-2 border-b border-gray-700"
            >
              Technical <span className="gradient-text">Skills</span>
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="space-y-6"
            >
              {Object.entries(skillCategories).map(
                ([category, skills], catIndex) => (
                  <motion.div
                    key={category}
                    variants={categoryVariants}
                    className="mb-6 last:mb-0"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <h4 className="text-gray-300 text-sm uppercase tracking-wider font-semibold">
                        {category}
                      </h4>
                      <div className="flex-grow h-px bg-gray-700 ml-3"></div>
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
                className="text-blue-400 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:border-blue-400 transition-all"
              >
                <span href="/#projects">See my projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
