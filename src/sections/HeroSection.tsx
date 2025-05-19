import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown, FiCode, FiLayout, FiServer, FiDatabase } from 'react-icons/fi';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Engineer",
    "React Developer"
  ];

  // Typing effect
  useEffect(() => {
    const currentText = textArray[currentTextIndex];

    const typeText = () => {
      if (isDeleting) {
        // Deleting text
        setTypedText(current => current.substring(0, current.length - 1));
        setTypingSpeed(50); // Faster when deleting

        if (typedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((current) => (current + 1) % textArray.length);
          setTypingSpeed(150);
        }
      } else {
        // Typing text
        setTypedText(current => currentText.substring(0, current.length + 1));

        if (typedText === currentText) {
          // Pause at the end of typing
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typeText, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, typingSpeed, textArray]);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements = containerRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed') || '0');
        const xOffset = x * speed;
        const yOffset = y * speed;
        (el as HTMLElement).style.transform = `translate(${xOffset * 50}px, ${yOffset * 50}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  const downloadResume = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  // Tech icons for the floating elements
  const techIcons = [
    { icon: <FiCode className="text-primary-500 text-2xl" />, speed: 0.04, delay: 0 },
    { icon: <FiLayout className="text-secondary-500 text-2xl" />, speed: 0.06, delay: 0.5 },
    { icon: <FiServer className="text-accent-500 text-2xl" />, speed: 0.08, delay: 1 },
    { icon: <FiDatabase className="text-primary-500 text-2xl" />, speed: 0.05, delay: 1.5 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-900 to-dark-800 py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient blobs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl parallax-element" data-speed="0.05"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl parallax-element" data-speed="0.08"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl parallax-element" data-speed="0.03"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxZTI5M2IiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iIzBmMTcyYSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>

        {/* Floating tech icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute p-3 bg-dark-800/50 backdrop-blur-sm rounded-full border border-light/10 parallax-element"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
            data-speed={tech.speed}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              x: [0, 10, -10, 0],
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { delay: tech.delay, duration: 1 },
              x: {
                repeat: Infinity,
                duration: 5 + Math.random() * 3,
                ease: "easeInOut",
                delay: tech.delay
              },
              y: {
                repeat: Infinity,
                duration: 4 + Math.random() * 3,
                ease: "easeInOut",
                delay: tech.delay
              }
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div ref={containerRef} className="container mx-auto px-4 md:px-8 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <motion.div
            className="text-left lg:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-block mb-2 px-4 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
              variants={itemVariants}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse-slow"></span>
              Available for freelance work
            </motion.div>

            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-light parallax-element select-none leading-tight"
              data-speed="0.15"
              variants={itemVariants}
            >
              <span className="gradient-text">Welcome to</span>
              <br />
              <span className="text-light">Arka Sengupta's</span>
              <br />
              <span className="gradient-text">Developer Portfolio</span>
            </motion.h1>

            <motion.div
              className="flex items-center text-2xl md:text-3xl font-medium mb-6 text-light parallax-element h-10"
              data-speed="0.2"
              variants={itemVariants}
            >
              <span className="mr-2">I'm a</span>
              <span className="text-primary-500 font-bold relative">
                {typedText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary-500 animate-pulse-slow"></span>
              </span>
            </motion.div>

            <motion.p
              className="text-lg max-w-xl mb-8 text-light/80 parallax-element"
              data-speed="0.2"
              variants={itemVariants}
            >
              I create modern, responsive web applications with cutting-edge technologies and a focus on user experience and performance.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 parallax-element"
              data-speed="0.25"
              variants={itemVariants}
            >
              <motion.button
                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center gap-3 group transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 text-lg font-medium"
                onClick={downloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-semibold">Download Resume</span>
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FiDownload className="text-xl group-hover:animate-bounce" />
                </motion.span>
              </motion.button>

              <motion.a
                href="#about"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore More</span>
                <FiArrowDown />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right column - Decorative element */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative w-80 h-80">
              {/* Decorative circles */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              <motion.div
                className="absolute inset-4 rounded-full border-2 border-dashed border-secondary-500/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              <motion.div
                className="absolute inset-8 rounded-full border-2 border-dashed border-accent-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              {/* Center circle with gradient */}
              <motion.div
                className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-accent-500/20 backdrop-blur-sm flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 20px 0 rgba(14, 165, 233, 0.3)",
                    "0 0 30px 0 rgba(99, 102, 241, 0.3)",
                    "0 0 20px 0 rgba(14, 165, 233, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="text-5xl font-bold gradient-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  A.S.
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-light/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-2 bg-primary-500 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
