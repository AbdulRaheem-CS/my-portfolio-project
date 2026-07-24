import { useRef } from 'react';
import type { MouseEvent } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { IMAGES } from '../constants/images';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.5 });

  const imageX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const imageY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(springX, [-0.5, 0.5], ['30%', '70%']);
  const glowY = useTransform(springY, [-0.5, 0.5], ['30%', '70%']);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]: string[]) => `radial-gradient(circle at ${gx} ${gy}, rgba(249,115,22,0.25), transparent 60%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Image: entrance zoom-out that settles into a slow, perpetual breathing loop, with cursor parallax */}
      <motion.div
        style={{ x: imageX, y: imageY }}
        animate={{
          scale: [1.12, 1, 1.05, 1],
          filter: ['brightness(0.7)', 'brightness(1)', 'brightness(1)', 'brightness(1)'],
        }}
        transition={{
          duration: 22,
          times: [0, 0.08, 0.55, 1],
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute -inset-4"
      >
        <Image
          src={IMAGES.herosection}
          alt="Professional Portfolio Background"
          fill
          priority
          quality={100}
          className="object-cover"
        />
      </motion.div>

      {/* Cursor-reactive orange glow */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-10 mix-blend-soft-light"
        style={{ background: glowBackground }}
      />

      {/* Gradient overlay with animated opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"
      />

      {/* Content with staggered animations */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl space-y-6">
          <motion.h1
            initial={{ filter: 'blur(14px)', opacity: 0 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <SplitText as="span" text="Crafting Digital" mode="word" className="block" delay={0.25} />
            <SplitText as="span" text="Experiences" mode="word" className="block text-gradient" delay={0.55} />
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto md:text-xl"
          >
            I build exceptional digital products with modern technologies and
            user-focused design principles.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-6"
          >
            <MagneticButton
              as="a"
              href="#about"
              className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-black bg-orange-500 hover:bg-orange-400 md:py-4 md:text-lg md:px-10 transition-colors duration-300 shadow-lg shadow-orange-900/30 hover:shadow-xl"
            >
              Explore My Work
              <svg
                className="ml-3 -mr-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator (optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.4 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" data-cursor="link" className="block">
            <svg
              className="h-8 w-8 text-neutral-400 hover:text-orange-500 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
