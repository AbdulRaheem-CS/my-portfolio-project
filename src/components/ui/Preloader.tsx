import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/** Brief branded intro overlay shown once per page load. */
const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;

    let frameId: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 250);
      }
    };
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient font-display"
          >
            DEV_RAHEEM
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '12rem' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="mt-6 h-[2px] overflow-hidden bg-neutral-800"
          >
            <div className="h-full w-full bg-orange-500" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-xs tracking-[0.3em] text-neutral-500"
          >
            {String(count).padStart(2, '0')}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
