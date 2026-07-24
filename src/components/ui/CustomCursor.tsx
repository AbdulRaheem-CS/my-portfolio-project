import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Two-part magnetic cursor: a tight dot and a trailing ring that scales
 * up over anything tagged with data-cursor="link".
 * Disabled entirely on touch / coarse-pointer devices.
 */
const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 30, stiffness: 350, mass: 0.4 });
  const ringY = useSpring(dotY, { damping: 30, stiffness: 350, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(canHover);
    if (!canHover) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('[data-cursor="link"]'));
      setIsText(!!target.closest('input, textarea, [contenteditable="true"]'));
    };

    const handleLeaveWindow = () => setIsVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseleave', handleLeaveWindow);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleLeaveWindow);
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
      aria-hidden="true"
    >
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-white"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed left-0 top-0 border border-orange-500/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={
          isText
            ? { width: 2, height: 22, borderRadius: 2, backgroundColor: 'rgba(249,115,22,0.6)' }
            : {
                width: isHovering ? 64 : 32,
                height: isHovering ? 64 : 32,
                borderRadius: 999,
                backgroundColor: isHovering ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0)',
              }
        }
        transition={{ duration: 0.25, ease: 'easeOut' }}
      />
    </div>
  );
};

export default CustomCursor;
