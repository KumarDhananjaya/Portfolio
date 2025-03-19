// src/components/Projects.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const projectsRef = useRef(null);

  useEffect(() => {
    // In a real application, this would be fetched from an API
    setProjects([
      {
        id: 'connectx',
        title: 'ConnectX',
        description: 'The ultimate social media app designed to bring people together and foster meaningful connections across the globe.',
        image: '/api/placeholder/400/250',
        tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/KumarDhananjaya/ConnectX',
        demo: null
      },
      {
        id: 'clusteroids',
        title: 'Clusteroids',
        description: 'A college management app that simplifies student, faculty, and course administration, enhancing departmental efficiency.',
        image: '/api/placeholder/400/250',
        tags: ['Dart', 'Flutter', 'Firebase'],
        github: 'https://github.com/KumarDhananjaya/Clusteroids',
        demo: null
      },
      {
        id: 'helm-dashboard',
        title: 'Helm Dashboard',
        description: 'The missing UI for Helm - visualize your releases. A fork of the komodorio/helm-dashboard project.',
        image: '/api/placeholder/400/250',
        tags: ['TypeScript', 'React', 'Kubernetes'],
        github: 'https://github.com/KumarDhananjaya/helm-dashboard',
        demo: null
      },
      {
        id: 'sorting-visualizer',
        title: 'Sorting Visualizer',
        description: 'An interactive sorting visualizer that demonstrates various sorting algorithms with real-time animations.',
        image: '/api/placeholder/400/250',
        tags: ['TypeScript', 'React', 'Algorithms'],
        github: 'https://github.com/KumarDhananjaya/Sorting-Visualizer',
        demo: 'https://kumardhananjaya.github.io/Sorting-Visualizer'
      },
      {
        id: 'amazon-clone',
        title: 'Amazon Clone',
        description: 'Developed this amazon clone app from scratch using React and Firebase for database and hosting.',
        image: '/api/placeholder/400/250',
        tags: ['JavaScript', 'React', 'Firebase'],
        github: 'https://github.com/KumarDhananjaya/Amazon-Clone',
        demo: null
      },
      {
        id: 'crime-management',
        title: 'Online Crime Management System',
        description: 'System empowering law enforcement agencies to efficiently track, record, and analyze criminal activities in real-time.',
        image: '/api/placeholder/400/250',
        tags: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/KumarDhananjaya/online-crime-management-system',
        demo: null
      }
    ]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project demonstrates my skills in different technologies and problem-solving approaches.
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal from-bottom"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/KumarDhananjaya"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-full font-medium transition-all inline-block"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;