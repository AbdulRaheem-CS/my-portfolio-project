import { ElementType } from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** stagger unit: word-by-word (default) or letter-by-letter */
  mode?: 'word' | 'char';
  delay?: number;
  once?: boolean;
}

const container = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const item = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Scroll-triggered word/letter reveal, each unit masked and sliding up into place. */
const SplitText = ({
  text,
  as = 'div',
  className = '',
  mode = 'word',
  delay = 0,
  once = true,
}: SplitTextProps) => {
  const Wrapper = motion.create(as);
  const units = mode === 'word' ? text.split(' ') : text.split('');
  const stagger = mode === 'word' ? 0.08 : 0.025;

  return (
    <Wrapper
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10%' }}
      variants={container(stagger, delay)}
      className={className}
    >
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-1">
          <motion.span variants={item} className="inline-block">
            {unit === ' ' ? ' ' : unit}
            {mode === 'word' && i !== units.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
};

export default SplitText;
