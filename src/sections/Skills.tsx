import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaNodeJs, FaGithub, FaDatabase, FaCss3Alt, FaHtml5, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiGraphql } from 'react-icons/si';
import TiltCard from '@/components/ui/TiltCard';
import SplitText from '@/components/ui/SplitText';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const Skills = () => {
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

  const skills = [
    { icon: <FaJsSquare className="text-4xl" />, name: "JavaScript", color: "text-yellow-400" },
    { icon: <SiTypescript className="text-4xl" />, name: "TypeScript", color: "text-blue-500" },
    { icon: <FaReact className="text-4xl" />, name: "React", color: "text-blue-400" },
    { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js", color: "text-white" },
    { icon: <FaNodeJs className="text-4xl" />, name: "Node.js", color: "text-green-500" },
    { icon: <FaDatabase className="text-4xl" />, name: "MongoDB", color: "text-green-400" },
    { icon: <SiGraphql className="text-4xl" />, name: "GraphQL", color: "text-pink-500" },
    { icon: <FaHtml5 className="text-4xl" />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3", color: "text-blue-500" },
    { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind CSS", color: "text-blue-400" },
    { icon: <FaGithub className="text-4xl" />, name: "GitHub", color: "text-gray-300" },
    { icon: <FaFigma className="text-4xl" />, name: "Figma", color: "text-purple-500" }
  ];

  return (
    <section id="skills" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-20 w-32 h-32 bg-orange-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-60">
        <ParticleField color="#f97316" count={45} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <SplitText text="My Skills" mode="char" className="inline-block text-gradient" />
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to create exceptional digital experiences
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TiltCard
                intensity={14}
                className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800 p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:border-orange-500/40 transition-[border-color,box-shadow] duration-300"
              >
                <div
                  style={{ transform: 'translateZ(30px)' }}
                  className={`${skill.color} mb-4 transition-colors duration-300`}
                >
                  {skill.icon}
                </div>
                <h3
                  style={{ transform: 'translateZ(20px)' }}
                  className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300"
                >
                  {skill.name}
                </h3>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;