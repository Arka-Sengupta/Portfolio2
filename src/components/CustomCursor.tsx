import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: '#0ea5e9',
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: '#f97316',
      scale: 0.8,
    },
    hovered: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: '#6366f1',
      scale: 1.5,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={cursorVariants}
      animate={
        hidden ? 'hidden' : clicked ? 'clicked' : linkHovered ? 'hovered' : 'default'
      }
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

export default CustomCursor;
