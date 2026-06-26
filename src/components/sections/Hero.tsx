import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Aurora/Mesh Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-indigo-300/30 dark:bg-indigo-900/20 blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-300/30 dark:bg-fuchsia-900/20 blur-[100px] md:blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-cyan-300/30 dark:bg-cyan-900/20 blur-[100px] md:blur-[140px]"
        />
      </div>

      {/* Grid Pattern Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 mix-blend-overlay pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow / Name */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
              <Sparkles size={16} />
            </span>
            <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-gray-600 dark:text-gray-300">
              Md. Mohsinul Hasan <span className="mx-2 opacity-50">•</span> Solo Founder
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 dark:text-white leading-[1.05] mb-8"
          >
            I turn AI into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-fuchsia-600 dark:from-blue-400 dark:to-fuchsia-400">
              real, shippable products.
            </span>
          </motion.h1>

          {/* Subheadline / Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed mb-12"
          >
            AI automation specialist building intelligent chatbots, robust web apps, and powerful automation systems that actually work in the real world.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-gray-900/20 dark:shadow-white/10 text-center flex items-center justify-center gap-2 group"
            >
              Hire Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-full font-medium text-lg hover:border-gray-900 dark:hover:border-white transition-colors duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-4 text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors text-center hidden sm:block"
            >
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
