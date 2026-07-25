import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaCss3Alt,
  FaHtml5,
  FaFigma,
  FaGitAlt,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiExpress,
  SiPostgresql,
  SiRedux,
  SiDocker,
  SiRedis,
  SiPostman,
  SiPrisma,
  SiJest,
  SiVercel,
} from 'react-icons/si';
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
        staggerChildren: 0.08
      }
    }
  };

  const skillGroups = [
    {
      label: 'Frontend',
      skills: [
        { icon: <FaJsSquare className="text-4xl" />, name: "JavaScript" },
        { icon: <SiTypescript className="text-4xl" />, name: "TypeScript" },
        { icon: <FaReact className="text-4xl" />, name: "React" },
        { icon: <SiNextdotjs className="text-4xl" />, name: "Next.js" },
        { icon: <SiRedux className="text-4xl" />, name: "Redux" },
        { icon: <FaHtml5 className="text-4xl" />, name: "HTML5" },
        { icon: <FaCss3Alt className="text-4xl" />, name: "CSS3" },
        { icon: <SiTailwindcss className="text-4xl" />, name: "Tailwind CSS" },
      ],
    },
    {
      label: 'Backend',
      skills: [
        { icon: <FaNodeJs className="text-4xl" />, name: "Node.js" },
        { icon: <SiExpress className="text-4xl" />, name: "Express.js" },
        { icon: <SiGraphql className="text-4xl" />, name: "GraphQL" },
        { icon: <SiPrisma className="text-4xl" />, name: "Prisma" },
      ],
    },
    {
      label: 'Database',
      skills: [
        { icon: <FaDatabase className="text-4xl" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-4xl" />, name: "PostgreSQL" },
        { icon: <SiRedis className="text-4xl" />, name: "Redis" },
      ],
    },
    {
      label: 'DevOps & Tools',
      skills: [
        { icon: <SiDocker className="text-4xl" />, name: "Docker" },
        { icon: <FaAws className="text-4xl" />, name: "AWS" },
        { icon: <SiVercel className="text-4xl" />, name: "Vercel" },
        { icon: <FaGitAlt className="text-4xl" />, name: "Git" },
        { icon: <FaGithub className="text-4xl" />, name: "GitHub" },
        { icon: <SiPostman className="text-4xl" />, name: "Postman" },
        { icon: <SiJest className="text-4xl" />, name: "Jest" },
        { icon: <FaFigma className="text-4xl" />, name: "Figma" },
      ],
    },
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

        {/* Skills Groups */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-orange-500 mb-5"
              >
                <span className="h-px w-6 bg-orange-500" />
                {group.label}
              </motion.h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {group.skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <TiltCard
                      intensity={14}
                      className="group relative bg-gradient-to-b from-neutral-900 to-neutral-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800 p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:shadow-orange-950/30 hover:border-orange-500/40 transition-[border-color,box-shadow] duration-300"
                    >
                      {/* Diagonal shine sweep */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out"
                      />

                      <div
                        style={{ transform: 'translateZ(30px)' }}
                        className="relative mb-4"
                      >
                        <span className="absolute inset-0 -m-3 rounded-full bg-orange-500/0 group-hover:bg-orange-500/20 blur-lg transition-colors duration-500" />
                        <span className="relative block text-neutral-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300">
                          {skill.icon}
                        </span>
                      </div>
                      <h3
                        style={{ transform: 'translateZ(20px)' }}
                        className="relative text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors duration-300"
                      >
                        {skill.name}
                      </h3>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
