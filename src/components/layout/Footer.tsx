import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                ABDULRAHEEM-Full Stack Developer
              </span>
            </h3>
            <p className="text-sm text-gray-400">
              Crafting digital experiences that inspire and deliver results.
            </p>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-purple-400 transition duration-300 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-purple-400 transition duration-300 text-sm"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-purple-400 transition duration-300 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-end">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                Connect With Me
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/AbdulRaheem-CS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdul-raheem-876b6a255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="abdulraheem123124@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        {/* <div className="mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>
            Designed and built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;