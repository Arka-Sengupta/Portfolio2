import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/#about' },
    { name: 'Education', to: '/#education' },
    { name: 'Certifications', to: '/#certifications' },
    { name: 'Projects', to: '/#projects' },
    { name: 'Contact', to: '/#contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  const handleSectionLink = (to: string) => {
    if (location.pathname !== '/') {
      window.location.href = to;
    } else {
      const id = to.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = to;
      }
    }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold gradient-text"
          style={{ textDecoration: 'none' }}
        >
          Arka Sengupta
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
            link.to === '/' ? (
              <Link
                key={link.name}
                to={link.to}
                className="text-light hover:text-primary transition-colors duration-300"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleSectionLink(link.to)}
                className="text-light hover:text-primary transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                {link.name}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-light"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-dark/95 z-40 md:hidden flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) =>
                link.to === '/' ? (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-2xl text-light hover:text-primary transition-colors duration-300"
                    style={{ textDecoration: 'none' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => { handleSectionLink(link.to); setIsOpen(false); }}
                    className="text-2xl text-light hover:text-primary transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer"
                    style={{ textDecoration: 'none' }}
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
