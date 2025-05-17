import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
  ];

  const projects = [
    {
      title: 'NexCommerce',
      description: 'A modern e-commerce platform with advanced product filtering, real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      image: '/project1.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB', 'Redux'],
      category: 'web',
      github: 'https://github.com/arkasengupta/nexcommerce',
      liveDemo: 'https://nexcommerce-demo.vercel.app',
    },
    {
      title: 'AI Vision Studio',
      description: 'An AI-powered image generation and editing tool that uses deep learning to create and manipulate images based on text prompts with advanced style transfer capabilities.',
      image: '/project2.jpg',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'WebGL', 'AWS'],
      category: 'ai',
      github: 'https://github.com/arkasengupta/ai-vision-studio',
      liveDemo: 'https://ai-vision-studio.com',
    },
    {
      title: 'FitTrack Pro',
      description: 'A comprehensive fitness tracking mobile application with workout planning, nutrition tracking, progress analytics, and AI-powered personalized recommendations.',
      image: '/project3.jpg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'GraphQL', 'TensorFlow Lite'],
      category: 'mobile',
      github: 'https://github.com/arkasengupta/fittrack-pro',
      liveDemo: 'https://play.google.com/store/apps/fittrack-pro',
    },
    {
      title: 'ConnectHub',
      description: 'A real-time communication platform featuring instant messaging, video calls, file sharing, end-to-end encryption, and collaborative workspaces for teams.',
      image: '/project4.jpg',
      technologies: ['Socket.io', 'React', 'Express', 'MongoDB', 'WebRTC', 'Redis'],
      category: 'web',
      github: 'https://github.com/arkasengupta/connecthub',
      liveDemo: 'https://connecthub.io',
    },
    {
      title: 'SentiScan Analytics',
      description: 'An advanced sentiment analysis tool that processes text data from multiple sources to provide detailed emotional analysis, trend identification, and actionable insights.',
      image: '/project5.jpg',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'FastAPI', 'React', 'D3.js'],
      category: 'ai',
      github: 'https://github.com/arkasengupta/sentiscan',
      liveDemo: 'https://sentiscan.ai',
    },
    {
      title: 'TaskFlow Mobile',
      description: 'A productivity-focused task management app with smart scheduling, priority-based organization, recurring tasks, team collaboration, and detailed analytics.',
      image: '/project6.jpg',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Provider', 'Cloud Functions', 'SQLite'],
      category: 'mobile',
      github: 'https://github.com/arkasengupta/taskflow',
      liveDemo: 'https://apps.apple.com/app/taskflow',
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
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
            My Work
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="section-title"
          >
            Projects
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
          className="flex justify-center mb-12 overflow-x-auto pb-4"
        >
          <div className="flex space-x-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20'
                    : 'bg-dark-800/50 text-light/70 hover:bg-primary-500/10 hover:text-primary-400 border border-light/5 hover:border-primary-500/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-xl overflow-hidden group card-hover"
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px -10px rgba(14, 165, 233, 0.2)',
                }}
              >
                <div className="relative overflow-hidden h-52">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 via-dark-900/50 to-dark-900/90 z-10"></div>
                  <div
                    className="absolute inset-0 bg-dark-900/50 bg-center bg-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'web'
                        ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                        : project.category === 'mobile'
                        ? 'bg-secondary-500/20 text-secondary-300 border border-secondary-500/30'
                        : 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                    }`}>
                      {project.category === 'web' ? 'Web Development' :
                       project.category === 'mobile' ? 'Mobile App' : 'AI/ML'}
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-dark-900/40 backdrop-blur-sm">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        className="p-3 bg-dark-800/80 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 border border-primary-500/30"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiGithub />
                      </motion.a>
                      <motion.a
                        href={project.liveDemo}
                        className="p-3 bg-dark-800/80 text-primary-500 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300 border border-primary-500/30"
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-light group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-light/70 mb-5 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            className="btn-accent inline-flex items-center gap-2 shadow-lg shadow-accent-500/10"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <FiExternalLink className="animate-pulse-slow" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
