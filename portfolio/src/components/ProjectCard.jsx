// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const { id, title, description, image, tags, github, demo } = project;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-dark/50 rounded-xl overflow-hidden card-shadow border border-gray-700 hover:border-primary transition-all h-full flex flex-col"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors"
              aria-label={`View ${title} on GitHub`}
            >
              <FaGithub size={20} />
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label={`View live demo of ${title}`}
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
          <Link
            to={`/project/${id}`}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;