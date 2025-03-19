// src/components/Experience.jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, company, period, description, isLast }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full"></div>
        {!isLast && <div className="w-1 h-full bg-primary"></div>}
      </div>
      <motion.div
        whileHover={{ x: 5 }}
        className="ml-6 pb-8"
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-primary font-medium">{company}</div>
        <div className="text-gray-400 text-sm mb-2">{period}</div>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: "Hackathon Winner",
      company: "HPE Swarm-IT Hackathon 2023",
      period: "2023",
      description: "Won the HPE Swarm-IT Hackathon 2023 organized by Hewlett Packard Enterprise, a competition renowned for its groundbreaking technology solutions."
    },
    {
      title: "Full Stack Developer Intern",
      company: "Tech Innovations Inc.",
      period: "Jan 2023 - June 2023",
      description: "Worked on developing and maintaining web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Mobile App Developer",
      company: "AppDev Solutions",
      period: "May 2022 - Dec 2022",
      description: "Developed mobile applications using Flutter and Dart. Implemented responsive UI designs and integrated with backend services."
    },
    {
      title: "Computer Science Graduation",
      company: "University of Technology",
      period: "2019 - 2023",
      description: "Graduated with a Bachelor's degree in Computer Science. Specialized in software development and data structures."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div 
          ref={experienceRef}
          className="max-w-3xl mx-auto reveal from-bottom"
        >
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;