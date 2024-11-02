import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Smartphone, Brain } from 'lucide-react';

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
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-blue-300"
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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold font-mono">
                S Kumar Dhananjaya
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.dev</span>
              </span>
            </div>
            <div className="flex items-center space-x-8">
              {['Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm group"
                >
                  <span className="relative z-10 hover:text-blue-400 transition-colors">{item}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />
        </div>
        <div className="relative space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Full-Stack Developer
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            I build exceptional digital experiences with modern technologies.
            Focused on creating scalable and performant applications that solve
            real-world problems.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/yourusername" },
              { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
              { icon: Mail, href: "mailto:your.email@example.com" }
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800/50 hover:text-blue-400 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Featured Projects
        </h2>
        
        {[
          { title: "Web Development", icon: Code2, projects: projects.web },
          { title: "Mobile Development", icon: Smartphone, projects: projects.mobile },
          { title: "Machine Learning", icon: Brain, projects: projects.ml }
        ].map(({ title, icon: Icon, projects: categoryProjects }) => (
          <div key={title} className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Icon className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
          <p className="text-gray-400 mb-8 text-lg">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies,
            I create seamless user experiences while ensuring robust and scalable
            backend architectures.
          </p>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Frontend", skills: ["React / Next.js", "TypeScript", "Tailwind CSS"] },
                { title: "Backend", skills: ["Node.js", "Python", "PostgreSQL"] },
                { title: "Tools", skills: ["Git", "Docker", "AWS"] }
              ].map(({ title, skills }) => (
                <div key={title} className="space-y-3">
                  <h4 className="font-bold text-lg">{title}</h4>
                  <ul className="space-y-2">
                    {skills.map((skill) => (
                      <li key={skill} className="text-gray-400 flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Get in Touch
        </h2>
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
          <p className="text-gray-400 mb-8 text-lg">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send me an email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kumar Dhananjaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}