// src/components/About.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BsAward, BsCodeSlash, BsMortarboard, BsLightbulb } from 'react-icons/bs';

const AboutCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-dark/50 p-6 rounded-lg card-shadow border border-gray-700 hover:border-primary transition-all"
    >
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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
  }, []);

  return (
    <section id="about" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <AboutCard
            icon={<BsCodeSlash />}
            title="Full Stack Developer"
            description="Proficient in JavaScript and modern web technologies to create robust applications."
          />
          <AboutCard
            icon={<BsMortarboard />}
            title="CS Graduate"
            description="Graduated with a strong foundation in computer science principles and practices."
          />
          <AboutCard
            icon={<BsAward />}
            title="Award Winner"
            description="Won HPE Swarm-IT Hackathon 2023 organized by HP Enterprise."
          />
          <AboutCard
            icon={<BsLightbulb />}
            title="Continuous Learner"
            description="Passionate about expanding knowledge and learning new technologies."
          />
        </div>

        <div ref={aboutRef} className="grid md:grid-cols-2 gap-8 items-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="reveal from-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              CS Graduate with a passion for building modern web and mobile applications
            </h3>
            <p className="text-gray-300 mb-6">
              I have expertise in Full Stack JavaScript development and Mobile App development. 
              As a recent winner of the HPE Swarm-IT Hackathon 2023, I've demonstrated my 
              ability to create innovative solutions under pressure.
            </p>
            <p className="text-gray-300 mb-6">
              My passion is expanding my knowledge and constantly improving my skills. 
              I'm currently looking for remote jobs and internships where I can apply 
              my technical skills while continuing to grow as a developer.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-all inline-block"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="reveal from-right grid grid-cols-2 gap-4"
          >
            {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Flutter', 'Dart', 'TypeScript', 'HTML/CSS', 'Docker', 'Nginx', 'Azure','React Native', 'Kubernetes', 'NextJs'].map((skill, index) => (
              <div
                key={skill}
                className="bg-dark/30 border border-gray-700 rounded-lg p-4 text-center hover:border-primary transition-all"
              >
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;