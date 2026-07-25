import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaWhatsapp, FaPhone } from 'react-icons/fa';
import MagneticButton from '@/components/ui/MagneticButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Footer = () => {
  return (
    <footer className="relative bg-black text-neutral-300 border-t border-neutral-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_10%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-16 sm:py-20 text-center border-b border-neutral-800"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s build something <span className="text-gradient">great.</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mb-8">
            Have a project in mind? I&apos;m currently open to select freelance and full-time opportunities.
          </p>
          <MagneticButton
            as="a"
            href="mailto:abdulraheem123124@gmail.com"
            className="inline-flex items-center gap-2 bg-orange-500 text-black px-6 py-3 rounded-md text-sm sm:text-base font-semibold hover:bg-orange-400 transition duration-300 shadow-lg shadow-orange-900/30"
          >
            <FaEnvelope />
            abdulraheem123124@gmail.com
          </MagneticButton>
        </motion.div>

        {/* Links grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
              ABDULRAHEEM <span className="text-orange-500">.</span>
            </h3>
            <p className="text-sm text-neutral-400 max-w-xs">
              Full Stack Developer crafting digital experiences that inspire and deliver results.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="md:justify-self-center">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#skills', label: 'Skills' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-cursor="link"
                    className="text-neutral-300 hover:text-orange-500 transition duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="md:justify-self-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
              Connect With Me
            </h4>
            <div className="flex space-x-5">
              <MagneticButton
                as="a"
                href="https://github.com/AbdulRaheem-CS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://www.linkedin.com/in/abdul-raheem-876b6a255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://wa.me/923483059852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="tel:+923483059852"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-orange-500 transition duration-300"
                aria-label="Phone"
              >
                <FaPhone className="text-xl" />
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-neutral-800 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Abdul Raheem. All rights reserved.</p>
          <MagneticButton
            as="a"
            href="#top"
            data-cursor="link"
            className="flex items-center gap-2 text-neutral-400 hover:text-orange-500 transition duration-300"
          >
            Back to top <FaArrowUp className="text-xs" />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
