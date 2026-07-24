import { useEffect, useState } from 'react';

interface TypewriterLine {
  text: string;
  className?: string;
}

interface TypewriterProps {
  lines: TypewriterLine[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  pauseEmptyDuration?: number;
  cursorClassName?: string;
}

/**
 * Types each line in sequence, holds, deletes back to empty, then repeats forever.
 * Rendering rule: lines before the active index are fully shown, lines after are
 * empty, the active line shows text.slice(0, charCount) — this holds for both the
 * typing and deleting directions without extra state.
 */
const Typewriter = ({
  lines,
  typingSpeed = 65,
  deletingSpeed = 35,
  pauseDuration = 1600,
  pauseEmptyDuration = 500,
  cursorClassName = 'bg-orange-500',
}: TypewriterProps) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const currentText = lines[lineIndex]?.text ?? '';
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (charCount < currentText.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), typingSpeed);
      } else if (lineIndex < lines.length - 1) {
        timeout = setTimeout(() => {
          setLineIndex((i) => i + 1);
          setCharCount(0);
        }, typingSpeed * 4);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pauseDuration);
      }
    } else {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), deletingSpeed);
      } else if (lineIndex > 0) {
        timeout = setTimeout(() => {
          setLineIndex((i) => i - 1);
          setCharCount(lines[lineIndex - 1]?.text.length ?? 0);
        }, deletingSpeed * 4);
      } else {
        timeout = setTimeout(() => setPhase('typing'), pauseEmptyDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [charCount, lineIndex, phase, lines, typingSpeed, deletingSpeed, pauseDuration, pauseEmptyDuration, reducedMotion]);

  return (
    <>
      {lines.map((line, i) => {
        const shown = reducedMotion
          ? line.text
          : i < lineIndex
            ? line.text
            : i === lineIndex
              ? line.text.slice(0, charCount)
              : '';
        const isActive = !reducedMotion && i === lineIndex;

        return (
          <span key={i} className={`block min-h-[1.1em] ${line.className ?? ''}`}>
            {shown}
            {isActive && (
              <span
                aria-hidden="true"
                className={`inline-block w-[3px] md:w-[4px] h-[0.85em] ml-1 align-middle animate-blink ${cursorClassName}`}
              />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Typewriter;
