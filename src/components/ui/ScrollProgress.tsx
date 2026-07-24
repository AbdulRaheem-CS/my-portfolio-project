import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin gradient progress bar pinned to the top of the viewport. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 z-[70]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
