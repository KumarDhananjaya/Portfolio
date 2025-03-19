// src/components/Contact.jsx
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1500);

    // In a real application, you would send the form data to your backend or use a service like EmailJS
    // Example with EmailJS:
    // try {
    //   await emailjs.sendForm(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     formRef.current,
    //     'YOUR_USER_ID'
    //   );
    //   toast.success("Message sent successfully! I'll get back to you soon.");
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // } catch (error) {
    //   toast.error("Something went wrong. Please try again later.");
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm open to new opportunities and collaborations.
          </p>
        </div>

        <div 
          ref={contactRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal from-bottom"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              I'm currently looking for remote jobs and internships. If you have any opportunities or want to collaborate, feel free to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:kumar.dhananjaya@example.com" className="text-gray-300 hover:text-primary">
                    kumar.dhananjaya@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <FaLinkedin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a href="https://linkedin.com/in/kumardhananjaya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                    linkedin.com/in/kumardhananjaya
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <FaGithub size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a href="https://github.com/KumarDhananjaya" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                    github.com/KumarDhananjaya
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-300">
                    Remote, Worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-300 block mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark/30 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-300 block mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark/30 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-gray-300 block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark/30 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-gray-300 block mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-dark/30 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-gray-200 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 rounded-lg transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;