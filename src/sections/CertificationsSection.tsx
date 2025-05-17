import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const CertificationsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const certifications = [
    {
      title: 'Python Basics',
      issuer: 'Hackerrank',
      date: 'Jan 2025',
      credentialId: 'E7E58B26C571',
      credentialURL: 'https://www.hackerrank.com/certificates/e7e58b26c571',
      skills: ['Python'],
    },
    {
      title: 'JavaScript Basics',
      issuer: 'Hackerrank',
      date: 'Jan 2025',
      credentialId: '30411081FA7E',
      credentialURL: 'https://www.hackerrank.com/certificates/30411081fa7e',
      skills: ['JavaScript'],
    },
    {
      title: 'MATLAB Onramp',
      issuer: 'MathWorks',
      date: 'October 2024',
      // credentialId: '',
      credentialURL: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=21616217-eac8-4ad9-a2a4-eb2ffebc2c41&',
      skills: ['MATLAB'],
    },
    {
      title: 'Java Basics - I',
      issuer: 'Coding Ninjas',
      date: 'March 2025',
      // credentialId: '',
      credentialURL: 'https://files.codingninjas.in/certi_image707644cb795a7e02794f2a27a4127a9290ffe5.jpg',
      skills: ['Java'],
    },
    {
      title: 'Java Basics - II',
      issuer: 'Coding Ninjas',
      date: 'March 2025',
      // credentialId: '',
      credentialURL: 'https://files.codingninjas.in/certi_image7094316c87175e42417ab62e2ffe658afb2529.jpg',
      skills: ['Java'],
    },
    {
      title: 'OOPs in Java',
      issuer: 'Coding Ninjas',
      date: 'March 2025',
      // credentialId: '',
      credentialURL: 'https://files.codingninjas.in/certi_image701876425e06b1049f37f71c09f994e17c996c.jpg',
      skills: ['Java'],
    },
  ];

  return (
    <section id="certifications" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
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
            Professional Development
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="section-title"
          >
            Certifications
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="divider"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl transition-all duration-300 group"
              whileHover={{
                y: -8,
                boxShadow: '0 15px 30px -10px rgba(14, 165, 233, 0.2)',
                borderColor: 'rgba(14, 165, 233, 0.3)'
              }}
            >
              <div className="flex items-start mb-5">
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4 border border-primary-500/20 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <FiAward className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-light group-hover:text-primary-500 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <p className="text-light/70 mt-1">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center mb-4 text-light/60 bg-dark-800/30 px-3 py-1.5 rounded-md inline-block">
                <FiCalendar className="mr-2 text-secondary-500" />
                <span className="text-sm">{cert.date}</span>
              </div>

              <div className="mb-5">
                <p className="text-sm text-light/70">
                  <span className="font-medium text-primary-500">Credential ID:</span> {cert.credentialId}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <motion.a
                href={cert.credentialURL}
                className="flex items-center text-primary-500 hover:text-secondary-500 transition-colors duration-300 text-sm font-medium mt-auto"
                whileHover={{ x: 5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Credential</span>
                <FiExternalLink className="ml-1.5" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
