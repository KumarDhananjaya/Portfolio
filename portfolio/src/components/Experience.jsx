// src/components/Experience.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ExperienceItem = ({ title, company, period, description, isLast }) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full"></div>
        {!isLast && <div className="w-1 h-full bg-primary"></div>}
      </div>
      <motion.div whileHover={{ x: 5 }} className="ml-6 pb-8">
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
          entry.target.classList.add("active");
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
      title: "Associate Software Engineer",
      company: "Examic EdTech Pvt Ltd",
      period: "July 2024 - Present",
      description:
        "Building a scalable assessment solution platform, featuring secure backend servers, intuitive admin panels, and a seamless frontend. Integrated dynamic test authoring, scheduling, and real-time analytics to optimize online assessments.",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "KandraDigital Pvt Ltd",
      period: "Feb 2024 - July 2024",
      description:
        "Developed three robust projects using the MERN stack, DigitalOcean, and Next.js, encompassing backend servers, admin panels, and frontends.",
    },
    {
      title: "Software Developer Intern - Trainee",
      company: "CAIR-DRDO",
      period: "Aug 2022 - Oct 2022",
      description:
        "Developed and deployed a Java Application Management System, reducing task completion times by 40% and boosting user adoption by 80% across 5 departments in the Lab.",
    },
    {
      title: "Future Ready Talent Intern",
      company: "Microsoft",
      period: "Oct 2021 - Mar 2022",
      description:
        "Developed a restaurant management app on Azure, cutting order processing times by 20% and gaining 150 hours of hands-on Microsoft cloud experience.",
    },
    {
      title: "Computer Science Graduation",
      company: "Maharaja Institute of Technology Thandavapura, Mysore",
      period: "2019 - 2023",
      description:
        "Graduated with a Bachelor's degree in Computer Science with a CGPA of 8.6/10. Specialized in software development and data structures.",
    },
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
