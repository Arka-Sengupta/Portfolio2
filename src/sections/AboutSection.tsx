import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiLayout, FiServer, FiDatabase, FiGlobe, FiSmartphone, FiZap, FiShield } from 'react-icons/fi';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  // Skill categories
  const skillCategories = [
    {
      icon: <FiCode className="text-primary-500 text-3xl" />,
      title: 'Frontend Development',
      description: 'I build responsive, interactive, and performant user interfaces using modern frameworks and best practices. My focus is on creating seamless user experiences with clean, maintainable code.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
      color: 'primary',
    },
    {
      icon: <FiServer className="text-secondary-500 text-3xl" />,
      title: 'Backend Development',
      description: 'I develop scalable and secure server-side applications and APIs that power modern web applications. My backend solutions focus on performance, security, and maintainability.',
      technologies: ['Node.js', 'Express', 'Python', 'flask', 'GraphQL', 'REST APIs'],
      color: 'secondary',
    },
    {
      icon: <FiDatabase className="text-accent-500 text-3xl" />,
      title: 'Database Management',
      description: 'I design efficient database schemas and implement optimized queries for both SQL and NoSQL databases. My approach ensures data integrity, performance, and scalability.',
      technologies: ['MySQL', 'Firebase', 'MongoDB'],
      color: 'accent',
    },
    {
      icon: <FiLayout className="text-primary-500 text-3xl" />,
      title: 'UI/UX Design',
      description: 'I create intuitive and visually appealing user interfaces with a focus on accessibility and user experience. My designs are both beautiful and functional, enhancing user engagement.',
      technologies: ['Figma', 'Adobe XD', 'Responsive Design'],
      color: 'primary',
    },
  ];

  // Detailed skills with proficiency levels
  const detailedSkills = [
    { name: 'React.js', level: 55, category: 'Frontend' },
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 20, category: 'Frontend' },
    { name: 'Node.js', level: 90, category: 'Backend' },
    { name: 'Python/flask', level: 85, category: 'Backend' },
    { name: 'GraphQL/REST APIs', level: 87, category: 'Backend' },
    { name: 'MongoDB/Firebase', level: 86, category: 'Database' },
    { name: 'PostgreSQL/MySQL', level: 84, category: 'Database' },
    { name: 'UI/UX Design', level: 88, category: 'Design' },
    { name: 'Figma/Adobe XD', level: 82, category: 'Design' },
    { name: 'AWS/Vercel', level: 80, category: 'DevOps' },
    { name: 'Docker/CI/CD', level: 78, category: 'DevOps' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTI5M2IiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzBmMTcyYSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left column - About text */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.h2
              variants={itemVariants}
              className="section-subtitle"
            >
              Get to know me
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="section-title"
            >
              About Me
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-8"
            ></motion.div>

            <motion.div
              variants={itemVariants}
            >
              <p className="text-lg mb-6 text-light/80 leading-relaxed">
                I'm Arka, a passionate full-stack developer in learning. I am a 2nd year student in VIT-AP university, in the branch of computer science and Engineering. I have made some projects related to my line of work and would continue.
              </p>
              <p className="text-lg mb-8 text-light/80 leading-relaxed">
                My journey in web development began after my High School, when I got a keen interest in building websites. I started with the basics of HTML, CSS and JavaScript. I dived into other webdev frameworks after coming to college, as I got to know about the competition and modern day requirements in the tech sector. So I developped my skills accordingly.
              </p>

              {/* Skill bars */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold mb-4 text-light">My Skills</h4>
                {detailedSkills.slice(0, 5).map((skill, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-light font-medium">{skill.name}</span>
                      <span className="text-primary-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500`}
                        style={{ width: '0%' }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image or decorative element */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="hidden lg:block"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="w-full h-96 rounded-2xl overflow-hidden glass-effect p-1">
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  {/* Replace with your image */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-dark-900/50 to-secondary-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text"><img src="/profile.png" alt="profile" title="Got to the signboard eh?"/></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-lg border-4 border-primary-500/20 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-lg border-4 border-secondary-500/20 -z-10"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skill categories */}
        <motion.h4
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-2xl font-bold mb-10 text-center gradient-text"
        >
          What I Do
        </motion.h4>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card group"
              whileHover={{ y: -10, boxShadow: `0 15px 30px -10px rgba(14, 165, 233, 0.2)` }}
            >
              <div className={`mb-4 p-4 rounded-full inline-block bg-${skill.color}-500/10 transform group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h4 className={`text-xl font-bold mb-3 text-light group-hover:text-${skill.color}-500 transition-colors duration-300`}>
                {skill.title}
              </h4>
              <p className="mb-5 text-light/70 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="skill-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
