"use client"

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, FileText, Download, Eye,Briefcase, Code, Award, Book, PenToolIcon  } from 'lucide-react';

export default function Home() {
  const projects = {
    internships: [
      {
        position: "Full-Stack Developer Intern",
        company: "KnadraDigital Pvt Ltd",
        location: "Bengaluru",
        duration: "Feb 2024 - Present",
        responsibilities: [
          "Developed GlobalTrans, Team Trip, and Job Portal projects using MERN stack, DigitalOcean, Docker, and Next.js, encompassing backend servers, admin panels, and frontends."
        ]
      },
      {
        position: "Software Developer Intern - Trainee",
        company: "CAIR-DRDO",
        location: "Bengaluru",
        duration: "Aug 2022 - Oct 2022",
        responsibilities : [
          "Developed and deployed a Java Application Management System, reducing task completion time by 40% and boosting user adoption by 80% across 5 departments in the CAIR Lab."
        ]
      },
      {
        position: "Future Ready Talent Intern",
        company: "Microsoft",
        location: "Mysore",
        duration: "Oct 2021 - Mar 2022",
        "responsibilities": [
          "Developed a restaurant management app on Azure, cutting order processing times by 20% and gaining 150 hours of hands-on Microsoft cloud experience."
        ]
      }
    ],
    academic_projects: [
      {
        title: "Connect X",
        duration: "Aug 2023",
        team_size: 1,
        summary: "Developed a MERN-based social media app with real-time communication, secure authentication, and responsive UI, creating a scalable platform.",
        technologies: ["MongoDB", "Node.js", "React.js", "Redux", "JWT authentication system"]
      },
      {
        title: "Clusteroids App",
        duration: "Jul 2023",
        team_size: 4,
        description: "Built a mobile application for students with instant access to academic and institute info, tracking their records in a portfolio on their mobile account.",
        technologies: ["Flutter", "Dart", "Cloud Firestore", "Firebase Authentication", "Dio", "Riverpod", "RESTFul APIs", "Git"]
      },
      {
        title: "MITT App",
        duration: "May 2022",
        team_size: 2,
        description: "Developed an Android application using Android Studio (Java), which is also the official app of the college and deployed on the Playstore.",
        technologies: ["Java", "Firebase", "RESTFul APIs", "Git", "XML", "Retrofit", "Picasso", "Crashlytics"]
      },
      {
        title: "Online Crime Management System",
        duration: "Jan 2022",
        team_size: 2,
        description: "Built a web application to report and notify emergency cases like criminal incidents and accidents to nearby police stations.",
        technologies: ["MySQL", "Node.js", "React.js", "Express.js", "Redux", "JWT authentication system"]
      }
    ],
    internship_projects: [
      {
        title: "Application Management System",
        duration: "Oct 2022",
        team_size: 1,
        summary: "Built a full-stack Java-based web application to segregate, process, and distribute applications with crucial formats, making the process digital and time-efficient.",
        technologies: ["Java", "Java Server Pages", "MySQL", "Tomcat", "JavaMail API", "JasperReports", "Log4j with LogBack"]
      }
    ],
    publications: [
      {
        authors: ["S Kumar Dhananjaya", "Dr. Ranjit K. N", "Shashank Gowda N M", "Shashank S", "Yashwanth S. M"],
        title: "Clusteroids App",
        journal: "IJARIIT",
        date: "May 2023",
        volume: "9",
        issue: "2"
      }
    ],
    awards_achievements : [
      {
        title: "Second Prize in HPE SWARM-IT Hackathon",
        organization: "GSSS, Mysuru",
        date: "April 2023"
      },
      {
        title: "1st Prize in Web Development Competition",
        location: "Mysore",
        date: "May 2022"
      },
      {
        title: "Best Idea Award",
        event: "National Level Symposium",
        location: "GND, Bidar",
        date: "July 2021"
      }
    ],
    technical_skills : {
      languages: ["C++", "C", "Java", "Python", "JavaScript", "TypeScript"],
      frameworks: ["React", "Node.js", "Express.js", "Next.js", "Flutter"],
      tools: ["Git", "GitHub", "Docker", "Postman", "GitHub Actions", "Nginx"],
      cloud: ["Azure", "AWS"],
      database_management: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"],
      others: ["RESTFul APIs", "GraphQL", "OAuth", "JWT"]
    },
    extracurricular_activities : [
      {
        role: "Vice President",
        organization: "Clusteroids Forum",
        location: "Mysuru",
        date: "May 2022",
        description: "Executed national-level events as vice president and as president."
      },
      {
        role: "President",
        organization: "ACES Club, MITT",
        date: "April 2023",
        description: "Conducted a 24-hour Hackathon by collaborating with various IT companies in and around Mysuru."
      }
    ]
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

  const resumeUrl = "Kumar Resume.pdf";

  const ResumeDialog = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity">
      <div className="bg-gray-900 rounded-xl p-6 w-[95vh] mx-4 relative">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Resume</h3>
          <label htmlFor="resume-dialog" className="cursor-pointer hover:text-blue-400">
            ✕
          </label>
        </div>
        <div className="relative w-full" style={{ height: 'calc(95vh - 8rem)' }}>
          <iframe
            src={resumeUrl}
            className="w-full h-full rounded-lg"
            title="Resume Preview"
            style={{
              pointerEvents: 'none',
              userSelect: 'none'
            }}
          />
          <div className="absolute bottom-0 right-0 p-4">
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const ScrollLink = ({ to, children }) => (
    <a
      href={`#${to}`}
      className="relative text-sm group"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(`#${to}`).scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="relative z-10 hover:text-blue-400 transition-colors">{children}</span>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </a>
  );

  const Section = ({ id, title, icon: Icon, children }) => (
    <section id={id} className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-6 h-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );

  const SkillTag = ({ children }) => (
    <span className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-blue-300">
      {children}
    </span>
  );


  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-black">
      <input type="checkbox" id="resume-dialog" className="hidden peer" />
      <ResumeDialog />

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
              {[
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'publications', label: 'Publications' },
                { id: 'awards', label: 'Awards' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map(({ id, label }) => (
                <ScrollLink key={id} to={id}>{label}</ScrollLink>
              ))}
              <div className="relative group">
                <label
                  htmlFor="resume-dialog"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-pointer"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </label>
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <label
                      htmlFor="resume-dialog"
                      className="flex items-center px-4 py-2 hover:bg-gray-800 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </label>
                    <a
                      href={resumeUrl}
                      download
                      className="flex items-center px-4 py-2 hover:bg-gray-800"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl" />
          </div>

          <div className="relative space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className="text-transparent bg-clip-text bg-white">
                S Kumar Dhananjaya
              </span>
            </h1>
            <h2 className="text-4xl sm:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Full-Stack Developer
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              I build exceptional digital experiences with modern technologies.
              Focused on creating scalable and performant applications that solve
              real-world problems.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/KumarDhananjaya" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/kumardhananjaya/" },
                  { icon: Mail, href: "mailto:kumar62.shivu@gmail.com" }
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
                 <label
              htmlFor="resume-dialog"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-blue-500 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </label>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <Section id="experience" title="Professional Experience" icon={Briefcase}>
          <div className="space-y-8">
            {projects.internships.map((internship, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {internship.position}
                </h3>
                <div className="text-gray-400 mb-4">
                  <p className="font-medium text-blue-400">{internship.company}</p>
                  <p>{internship.location} • {internship.duration}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {internship.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Academic Projects" icon={Code}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.academic_projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {project.title}
                </h3>
                <div className="text-gray-400 mb-4">
                  <p>Duration: {project.duration} • Team Size: {project.team_size}</p>
                  <p className="mt-2">{project.description || project.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, idx) => (
                    <SkillTag key={idx}>{tech}</SkillTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Publications Section */}
        <Section id="publications" title="Publications" icon={Book}>
          <div className="space-y-6">
            {projects.publications.map((pub, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {pub.title}
                </h3>
                <p className="text-gray-400">{pub.authors.join(", ")}</p>
                <p className="text-blue-400 mt-2">
                  {pub.journal} • Volume {pub.volume}, Issue {pub.issue} • {pub.date}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" title="Awards & Achievements" icon={Award}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.awards_achievements.map((award, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {award.title}
                </h3>
                <p className="text-gray-400">
                  {award.organization || award.event} • {award.location}
                </p>
                <p className="text-blue-400 mt-2">{award.date}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Technical Skills" icon={PenToolIcon}>
          {/* Technical Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Object.entries(projects.technical_skills).map(([category, skills]) => (
              <div key={category} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 capitalize text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {category.replace('_', ' ')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <SkillTag key={idx}>{skill}</SkillTag>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.extracurricular_activities.map((activity, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {activity.role}
                </h3>
                <p className="text-blue-400">{activity.organization}</p>
                {activity.location && <p className="text-gray-400">{activity.location}</p>}
                <p className="text-gray-400 mt-2">{activity.description}</p>
                <p className="text-gray-400 mt-2">{activity.date}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="Get in Touch" icon={Mail}>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
            <p className="text-gray-400 mb-8 text-lg">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="mailto:kumar62.shivu@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </a>
          </div>
        </Section>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kumar Dhananjaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}