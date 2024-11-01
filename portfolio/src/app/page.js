import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  const projects = {
    web: [
      {
        title: "Project One",
        description: "A full-stack application built with Next.js and Node.js",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com/yourusername/project-one",
        live: "https://project-one.vercel.app",
      },
      {
        title: "Project Two",
        description: "Real-time chat application with WebSocket integration",
        tech: ["React", "Socket.io", "Express", "MongoDB"],
        github: "https://github.com/yourusername/project-two",
        live: "https://project-two.vercel.app",
      },
    ],
    mobile: [
      {
        title: "Mobile App One",
        description: "Cross-platform mobile app built with React Native",
        tech: ["React Native", "Redux", "Firebase", "Expo"],
        github: "https://github.com/yourusername/mobile-one",
        live: "https://play.google.com/store/apps/details?id=com.example",
      },
    ],
    ml: [
      {
        title: "ML Project One",
        description: "Image classification model using deep learning",
        tech: ["Python", "TensorFlow", "OpenCV", "scikit-learn"],
        github: "https://github.com/yourusername/ml-project",
        live: "https://huggingface.co/yourusername/ml-project",
      },
    ],
  };

  const ProjectCard = ({ project }) => (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-blue-500/50 transition-colors">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-gray-800 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <Github className="w-4 h-4" />
          <span>Code</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold font-[family-name:var(--font-geist-mono)]">
                S Kumar Dhananjaya<span className="text-blue-500">.dev</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#projects" className="hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#about" className="hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Full-Stack Developer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            I build exceptional digital experiences with modern technologies.
            Focused on creating scalable and performant applications that solve
            real-world problems.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        
        {/* Web Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Web Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.web.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile Development Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Mobile Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.mobile.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Machine Learning Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Machine Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.ml.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <p className="text-gray-400 mb-6">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies,
            I create seamless user experiences while ensuring robust and scalable
            backend architectures.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <h4 className="font-bold mb-2">Frontend</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Backend</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Tools</h4>
                <ul className="text-gray-400 space-y-1">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
          <p className="text-gray-400 mb-6">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kumar Dhananjaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}