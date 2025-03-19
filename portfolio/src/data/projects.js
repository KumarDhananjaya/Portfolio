import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitHub } from "lucide-react";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching project data
    setTimeout(() => {
      // This would normally be a fetch from an API or data source
      const projectData = {
        id: id,
        title: "Portfolio Redesign",
        description:
          "A complete redesign of my personal portfolio using React, Tailwind CSS, and Framer Motion for smooth animations.",
        longDescription:
          "This project involved rethinking my online presence from the ground up. I focused on creating a minimalist design that puts the focus on my work while providing a seamless user experience. The site features responsive layouts, dark/light mode, smooth transitions between pages, and optimized performance.",
        skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
        images: [
          "/api/placeholder/800/500",
          "/api/placeholder/800/500",
          "/api/placeholder/800/500",
        ],
        challenges:
          "The biggest challenge was implementing smooth transitions between pages while maintaining performance on mobile devices.",
        solutions:
          "I utilized code splitting, lazy loading of images, and optimized animations to ensure the site performs well across all devices.",
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/username/project",
        date: "March 2025",
      };

      setProject(projectData);
      setLoading(false);
    }, 800); // Simulate loading delay
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"
        />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <Link
        to="/projects"
        className="inline-flex items-center mb-8 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        <span>Back to Projects</span>
      </Link>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-6">{project.date}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg h-96 mb-8">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            {project.liveUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                <ExternalLink size={18} className="mr-2" />
                View Live
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                <GitHub size={18} className="mr-2" />
                View Code
              </motion.a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Challenges & Solutions
            </h2>
            <div className="mb-4">
              <h3 className="font-medium text-lg mb-2">Challenges</h3>
              <p className="text-gray-700">{project.challenges}</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Solutions</h3>
              <p className="text-gray-700">{project.solutions}</p>
            </div>
          </div>
        </motion.div>

        <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Interested in working together? Let's talk!
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;
