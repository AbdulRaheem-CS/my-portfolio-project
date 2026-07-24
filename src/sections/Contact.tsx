import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false });

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Darker decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-20 w-32 h-32 bg-orange-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-40 h-40 bg-orange-800 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-50">
        <ParticleField color="#f97316" count={40} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <SplitText text="Get In Touch" className="inline-block text-gradient" />
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to connect? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form - Darker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex-1 bg-neutral-900/80 backdrop-blur-sm rounded-xl p-8 border border-neutral-800 shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={5}
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <MagneticButton
                  as="button"
                  type="submit"
                  disabled={isSubmitting}
                  className="block w-full bg-orange-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition-all duration-300 shadow-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </MagneticButton>

                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info - Darker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex-1 flex flex-col justify-center"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-6">Feel free to reach out through any of these channels:</p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-xl text-orange-500 mr-4" />
                  <a href="mailto:abdulraheem123124@gmail.com" data-cursor="link" className="text-gray-300 hover:text-orange-500 transition-colors">
                    abdulraheem123124@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-400 mb-6">Follow me on social media:</p>

              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/AbdulRaheem-CS"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="text-3xl text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/abdul-raheem-876b6a255/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="text-3xl text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="text-3xl text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://leetcode.com/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="text-3xl text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
