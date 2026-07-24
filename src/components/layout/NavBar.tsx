import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 p-4 transition-colors duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo on left */}
        <Link
          href="/"
          data-cursor="link"
          className="flex items-center gap-2 text-white font-display font-bold text-xl md:text-2xl tracking-tight"
        >
          <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
          ABDULRAHEEM
        </Link>

        {/* Desktop Navigation - Centered */}
        <ul
          onMouseLeave={() => setHovered(null)}
          className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-2 text-white"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                data-cursor="link"
                onMouseEnter={() => setHovered(link.href)}
                className="relative z-10 block hover:text-white transition duration-300 px-4 py-2 rounded-md text-sm font-medium text-neutral-300"
              >
                {link.label}
              </Link>
              {hovered === link.href && (
                <motion.div
                  layoutId="nav-hover"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 rounded-md bg-white/5 border border-orange-500/40"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:block">
          <MagneticButton
            as="a"
            href="#contact"
            className="text-black bg-orange-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-400 transition duration-300 shadow-lg shadow-orange-900/30"
          >
            Hire Me
          </MagneticButton>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.25 }}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-3 text-white p-4 bg-neutral-950/95 backdrop-blur-md rounded-lg mt-2 border border-neutral-800">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition duration-300 w-full text-center py-2 block"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="w-full pt-2 mt-2 border-t border-neutral-800">
                <Link
                  href="#contact"
                  className="block text-black bg-orange-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-orange-400 transition duration-300 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
