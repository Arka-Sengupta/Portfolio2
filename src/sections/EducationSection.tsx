import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const EducationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const educationData = [
    {
      degree: 'Master of Technology in Computer Science',
      institution: 'Indian Institute of Technology (IIT) Kharagpur',
      location: 'Kharagpur, India',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning with a focus on computer vision and natural language processing. Completed thesis on "Deep Learning Approaches for Cross-Modal Information Retrieval".',
      achievements: [
        'Graduated with 9.2 CGPA (Distinction)',
        'Published research paper in International Conference on Machine Learning Applications',
        'Received Merit-cum-Means Scholarship for academic excellence',
        'Teaching Assistant for Advanced Algorithms and Data Structures courses',
      ],
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Jadavpur University',
      location: 'Kolkata, India',
      period: '2014 - 2018',
      description: 'Comprehensive program covering software engineering, web development, database systems, and computer networks. Completed capstone project on "Real-time Collaborative Code Editor with Integrated Version Control".',
      achievements: [
        'Graduated with First Class Honors (8.7 CGPA)',
        'Winner of National Level Hackathon 2017 organized by Microsoft',
        'Led the university web development team for 2 years',
        'Recipient of the Outstanding Student Programmer Award',
      ],
    },
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-dark-800 to-dark-900 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
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
            Academic Background
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="section-title"
          >
            Education
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="divider"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500/30 via-secondary-500/30 to-primary-500/30 rounded-full"></div>

          {/* Education Items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`relative mb-20 ${index % 2 === 0 ? 'md:ml-auto md:mr-[50%]' : 'md:mr-auto md:ml-[50%]'} md:w-[45%]`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-1/2 md:left-auto md:right-0 top-0 transform translate-x-[-50%] md:translate-x-[50%] w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-dark-900 z-10 shadow-lg shadow-primary-500/20"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
              ></motion.div>

              <motion.div
                variants={itemVariants}
                className="glass-card p-8 rounded-xl transition-all duration-300 group"
                whileHover={{
                  y: -8,
                  boxShadow: '0 15px 30px -10px rgba(14, 165, 233, 0.2)',
                  borderColor: 'rgba(14, 165, 233, 0.3)'
                }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h4 className="text-xl font-bold text-light group-hover:text-primary-500 transition-colors duration-300">
                    {item.degree}
                  </h4>
                  <div className="flex items-center mt-2 md:mt-0 text-primary-500/80 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                    <FiCalendar className="mr-1" />
                    <span className="text-sm font-medium">{item.period}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center mb-5">
                  <h5 className="text-lg font-medium text-light/90 group-hover:text-secondary-500 transition-colors duration-300">{item.institution}</h5>
                  <div className="flex items-center mt-1 sm:mt-0 sm:ml-4 text-light/70">
                    <FiMapPin className="mr-1 text-secondary-500" />
                    <span className="text-sm">{item.location}</span>
                  </div>
                </div>

                <p className="mb-5 text-light/70 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4">
                  <h6 className="text-sm font-semibold text-primary-500 mb-3 uppercase tracking-wider">Achievements:</h6>
                  <ul className="space-y-2 text-light/70">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
