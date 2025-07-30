import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { IMAGES } from '../constants/images'; // Assuming IMAGES is defined in your constants

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration.",
      image: IMAGES.ecommerce, 
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity application with real-time updates.",
      image: IMAGES.taskmgmt,
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio with responsive design.",
      image: IMAGES.portfolio,
      github: "#",
      live: "#"

      
    }
  ];

  return (
    <section id="projects" className="relative py-12 px-4 sm:px-6 bg-gray-950">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 w-24 h-24 bg-purple-900 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-10 w-28 h-28 bg-pink-900 rounded-full filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-2">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Showcasing my best work with modern technologies
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="relative h-40 w-full">
                {/* Static Image Import */}
                <Image
                  src={project.image} // Assuming IMAGES.hero, IMAGES.taskmgmt, IMAGES.profile are valid imports
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:opacity-90 transition-opacity"
                  style={{
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {project.description}
                </p>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    className="text-gray-500 hover:text-purple-400 transition-colors"
                    aria-label="GitHub repository"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href={project.live}
                    className="text-gray-500 hover:text-pink-400 transition-colors"
                    aria-label="Live demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-md text-sm sm:text-base hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
