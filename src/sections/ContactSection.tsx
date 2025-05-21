import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('https://formsubmit.co/arka.sengupta.06@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="text-primary-500 text-xl" />,
      title: 'Email',
      value: 'arka.sengupta.06@gmail.com',
      link: 'mailto:arka.sengupta.06@gmail.com',
    },
    {
      icon: <FiPhone className="text-primary-500 text-xl" />,
      title: 'Phone',
      value: '+91 7603058710',
      link: 'tel:+917603058710',
    },
    {
      icon: <FiMapPin className="text-primary-500 text-xl" />,
      title: 'Location',
      value: 'Kolkata, India',
      link: 'https://maps.google.com/?q=Kolkata,India',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Arka-Sengupta' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/arka-sengupta-02211b320/' },
    // { icon: <FiTwitter />, url: 'https://twitter.com/arkasengupta' },
  ];

  const inputClasses = "w-full bg-dark-800/50 border border-light/10 rounded-lg px-4 py-3 text-light placeholder:text-light/50 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300";

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTI5M2IiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzBmMTcyYSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="section-subtitle"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="section-title"
          >
            Contact Me
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="divider"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h4
              variants={itemVariants}
              className="text-2xl font-bold mb-6 text-light"
            >
              Let's discuss your project
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="text-light/70 mb-8"
            >
              I'm interested in freelance opportunities.
              However, if you have other requests or questions, don't hesitate to contact me using the form.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="space-y-6 mb-8"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  variants={itemVariants}
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg mr-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-light/50 mb-1">{item.title}</h5>
                    <p className="text-light group-hover:text-primary transition-colors duration-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="p-3 bg-primary-500/10 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 border border-primary-500/20"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.form
              variants={itemVariants}
              action="https://formsubmit.co/arka.sengupta.06@gmail.com"
              method="POST"
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-xl"
            >
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg mb-6"
                >
                  Your message has been sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-light/70 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-light/70 mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="yourname@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-light/70 mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-light/70 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={inputClasses}
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
