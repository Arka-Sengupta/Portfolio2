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
    { id: 'desk', name: 'Desktop App' },
  ];

  const projects = [
    {
      title: 'StockWise',
      description: 'StockWise is a sleek, full-stack web application tailored for Indian stock market enthusiasts. It features live index tracking, AI-powered analysis, exchange comparisons, and a smart chatbot named Mr. Market, all wrapped in a modern, animated UI.',
      image: 'https://raw.githubusercontent.com/Arka-Sengupta/StockWise/refs/heads/main/website/static/images/image2.png',
      technologies: ['python','HTML','CSS','JavaScript'],
      category: 'web',
      github: 'https://github.com/Arka-Sengupta/StockWise',
      liveDemo: 'https://stockwise-24nq.onrender.com/',
      
    },
    {
      title: 'Scoder',
      description: 'AI-guided collaborative coding platform',
      image: 'https://raw.githubusercontent.com/Arka-Sengupta/Portfolio2/refs/heads/main/src/assets/images/remove.png',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'WebGL','TypeScript'],
      category: 'ai',
      // github: 'https://github.com/arkasengupta/ai-vision-studio',
      // liveDemo: 'https://ai-vision-studio.com',
    },
    {
      title: 'Pixel Pulse',
      description: 'PixelPulse is a dual-application Java tool that lets users encode images into Robot 36 SSTV audio signals and decode those audio files back into images, using custom-built FFT and signal processing algorithms with a Swing-based GUI.',
      image: 'https://raw.githubusercontent.com/Arka-Sengupta/Portfolio2/refs/heads/main/src/assets/images/PixelPulse_logo.png',
      technologies: ['java','java Swing'],
      category: 'desk',
      github: 'https://github.com/Arka-Sengupta/PixelPulse',
      liveDemo: 'https://github.com/Arka-Sengupta/PixelPulse',
    },
    {
      title: 'Old Portfolio',
      description: 'A basic portfolio I made initially',
      image: 'https://raw.githubusercontent.com/Arka-Sengupta/Portfolio2/refs/heads/main/src/assets/images/porto.png',
      technologies: ['HTML','CSS','JavaScript','Bootstrap'],
      category: 'web',
      github: 'https://github.com/Arka-Sengupta/portfolio',
      liveDemo: 'https://arka-sengupta.github.io/portfolio/index.html',
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
                        : project.category === 'ai'
                        ? 'bg-accent-500/20 text-accent-300 border border-accent-500/30'
                        : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {project.category === 'web'
                        ? 'Web Development'
                        : project.category === 'mobile'
                        ? 'Mobile App'
                        : project.category === 'ai'
                        ? 'AI/ML'
                        : 'Desktop App'}
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
          {/* <motion.a
            href="#"
            className="btn-accent inline-flex items-center gap-2 shadow-lg shadow-accent-500/10"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <FiExternalLink className="animate-pulse-slow" />
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
