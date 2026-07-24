import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { IMAGES } from '../constants/images'; // Assuming IMAGES is defined in your constants
import TiltCard from '@/components/ui/TiltCard';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

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
      title: "ZettaSynk",
      description: "A Full Stack Ai Intelligent system for managing large business and companies",
      image: IMAGES.zettasynk,
      live: "https://www.zettasynk.online"


    },
    {
      id: 2,
      title: "E-commerce Platform Admin panel",
      description: "Admin panel for managing products, orders, users and many more",
      image: IMAGES.multivendor,
      github: "#",
      live: "https://multi-vendor-eight.vercel.app/dashboard"
    },
    {
      id: 3,
      title: "Corereputation",
      description: "A platform for managing and improving online reputation.",
      image: IMAGES.corereputation,
      live: "https://corereputation.com/"
    },
    {
      id: 4,
      title: "Splitpay- A Fintech web application",
      description: "Fintech web application for splitting payments into multiple cards.",
      image: IMAGES.splitpayment,
      live: "https://www.dividepay.ai/"
    },
    
    {
      id: 5,
      title: "TalentIQ",
      description: "The operating system for enterprise talent teams",
      image: IMAGES.talentiq,
      live: "https://talent-iq-ashy.vercel.app/"
    },
    {
      id: 6,
      title: "KM Jewelers",
      description: "A jewelery Shop Crafting timeless elegance since generations.",
      image: IMAGES.kmjewelers,
      live: "https://khalid-mumtaz-jewelers.vercel.app/"
    },
    {
      id: 7,
      title: "Batch Systems",
      description: "Turn products into experience-driven gateways",
      image: IMAGES.batch,
      live: "https://batch-website-fixed.vercel.app/landing_page"
    }

  ];

  return (
    <section id="projects" className="relative py-12 px-4 sm:px-6 bg-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 w-24 h-24 bg-orange-900 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-0 right-10 w-28 h-28 bg-orange-800 rounded-full filter blur-xl"></div>
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
          <h2 className="font-display text-3xl font-bold mb-2">
            <SplitText text="My Projects" mode="char" className="inline-block text-gradient" />
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            Showcasing my best work with modern technologies
          </p>
          <div className="w-16 h-0.5 bg-orange-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} className="h-full">
              <TiltCard
                intensity={7}
                className="group h-full flex flex-col bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-lg hover:shadow-2xl hover:shadow-orange-900/20 hover:border-orange-500/40 transition-[border-color,box-shadow]"
              >
                <div className="relative h-40 w-full shrink-0">
                  {/* Static Image Import */}
                  <Image
                    src={project.image} // Assuming IMAGES.hero, IMAGES.taskmgmt, IMAGES.profile are valid imports
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-5" style={{ transform: 'translateZ(20px)' }}>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-neutral-400 text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex space-x-3 mt-auto">
                    <MagneticButton
                      as="a"
                      href={project.github}
                      className="text-neutral-500 hover:text-orange-500 transition-colors"
                      aria-label="GitHub repository"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-lg" />
                    </MagneticButton>
                    <MagneticButton
                      as="a"
                      href={project.live}
                      className="text-neutral-500 hover:text-orange-500 transition-colors"
                      aria-label="Live demo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </MagneticButton>
                  </div>
                </div>
              </TiltCard>
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
          <MagneticButton
            as="a"
            href="#contact"
            className="inline-flex items-center px-5 py-2 bg-orange-500 text-black font-semibold rounded-md text-sm sm:text-base hover:bg-orange-400 transition-all shadow-lg hover:shadow-xl"
          >
            Contact Me
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
