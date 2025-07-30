import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket } from 'react-icons/fa';
import { IMAGES } from '../constants/images';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="relative py-12 md:py-16 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      {/* Decorative elements - reduced size */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-10 w-24 h-24 bg-purple-600 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-10 w-28 h-28 bg-pink-600 rounded-full filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading - adjusted spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        {/* About Content - adjusted layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-8 md:gap-10"
        >
          {/* Image - reduced size */}
          <motion.div
            variants={fadeInUp}
            className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-lg mb-6 lg:mb-0"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={IMAGES.profile}
                alt="Abdul Raheem"
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Text Content - adjusted spacing */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 max-w-2xl"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4"
            >
              I'm a passionate <span className="text-purple-400 font-medium">Full Stack Developer</span> with expertise in modern web technologies. I specialize in crafting high-performance, responsive applications that deliver exceptional user experiences.
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6"
            >
              With a strong foundation in both design and development, I bridge the gap between beautiful interfaces and robust functionality. I thrive in collaborative environments and am constantly expanding my skill set.
            </motion.p>

            {/* Skills Highlights - adjusted spacing */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700"
              >
                <FaCode className="text-xl text-purple-400 mb-1" />
                <h3 className="font-semibold text-white text-sm sm:text-base">Clean Code</h3>
                <p className="text-xs sm:text-sm text-gray-400">Modular solutions</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700"
              >
                <FaPalette className="text-xl text-pink-400 mb-1" />
                <h3 className="font-semibold text-white text-sm sm:text-base">UI/UX Focus</h3>
                <p className="text-xs sm:text-sm text-gray-400">Pixel-perfect</p>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700"
              >
                <FaRocket className="text-xl text-purple-400 mb-1" />
                <h3 className="font-semibold text-white text-sm sm:text-base">Performance</h3>
                <p className="text-xs sm:text-sm text-gray-400">Optimized</p>
              </motion.div>
            </motion.div>

            {/* CTA Button - adjusted size */}
            <motion.div variants={fadeInUp}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-medium rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Projects
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;