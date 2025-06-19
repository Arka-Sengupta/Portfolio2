import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [trail, setTrail] = useState<Array<{x: number, y: number}>>([]);
  const requestRef = useRef<number>();

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

  // Trailing aura effect
  useEffect(() => {
    const animateTrail = () => {
      setTrail(prev => {
        const newTrail = [...prev, { x: position.x, y: position.y }];
        if (newTrail.length > 12) newTrail.shift();
        return newTrail;
      });
      requestRef.current = requestAnimationFrame(animateTrail);
    };
    requestRef.current = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [position]);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: '#0ea5e9',
      boxShadow: '0 0 0 2px #0ea5e9, 0 0 16px 4px #0ea5e988',
      border: '2px solid #fff',
      filter: 'drop-shadow(0 0 8px #0ea5e9)',
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: '#f97316',
      scale: 0.8,
      boxShadow: '0 0 0 4px #f97316, 0 0 24px 8px #f9731688',
      border: '2px solid #fff',
      filter: 'drop-shadow(0 0 12px #f97316)',
    },
    hovered: {
      x: position.x - 20,
      y: position.y - 20,
      backgroundColor: '#6366f1',
      scale: 1.7,
      boxShadow: '0 0 0 6px #6366f1, 0 0 32px 12px #6366f188',
      border: '2px solid #fff',
      filter: 'drop-shadow(0 0 16px #6366f1)',
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'exclusion',
        }}
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
      {/* Trailing aura */}
      {trail.map((t, i) => (
        <motion.div
          key={i}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 32,
            height: 32,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            background: 'radial-gradient(circle, #6366f1 0%, transparent 80%)',
            opacity: 0.15 + (i / trail.length) * 0.15,
            transform: `translate3d(${t.x - 16}px, ${t.y - 16}px, 0) scale(${0.7 + i * 0.025})`,
            filter: 'blur(2px)',
            mixBlendMode: 'exclusion',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
