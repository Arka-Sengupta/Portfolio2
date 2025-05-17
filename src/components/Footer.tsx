import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark py-12 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.a
            href="#home"
            className="text-2xl font-bold gradient-text mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Arka Sengupta
          </motion.a>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Arka-Sengupta"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/arka-sengupta-02211b320/"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </motion.a>
            {/* <motion.a
              href="https://twitter.com/"
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter />
            </motion.a> */}
          </div>
        </div>
        
        <div className="border-t border-light/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            © {currentYear} Arka Sengupta. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <nav className="flex space-x-6 mr-8">
              <motion.a 
                href="#home" 
                className="text-light/60 hover:text-primary text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-light/60 hover:text-primary text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                About
              </motion.a>
              <motion.a 
                href="#projects" 
                className="text-light/60 hover:text-primary text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Projects
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-light/60 hover:text-primary text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Contact
              </motion.a>
            </nav>
            
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
