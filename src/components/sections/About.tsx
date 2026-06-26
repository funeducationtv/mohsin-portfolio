import { motion } from 'motion/react';
import { Cpu, Code2, Rocket, Award } from 'lucide-react';

const skills = [
  { category: 'AI & Automation', list: ['Conversational AI', 'LLM Agent Tool-Calling', 'n8n / Make', 'Telegram Bots'] },
  { category: 'Web Technologies', list: ['Next.js', 'React', 'TypeScript', 'Node.js', 'WordPress'] },
  { category: 'Mobile & Cloud', list: ['Kotlin / Android', 'Firebase', 'Supabase', 'Cloudflare'] },
  { category: 'Key Competencies', list: ['Enterprise ERP', 'EdTech Architecture', 'Hyperlocal Commerce', 'RBAC Systems'] },
];

const highlights = [
  {
    icon: Cpu,
    title: 'AI Native Solutions',
    description: 'Weaving LLM logic, custom prompts, and API tool-calling directly into production workflows.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Delivery',
    description: 'From mobile apps with Kotlin to rich enterprise dashboards with Next.js & Supabase.',
  },
  {
    icon: Rocket,
    title: 'Product Mindset',
    description: 'Thinking as a solo founder first to deliver high-quality products that users love.',
  },
  {
    icon: Award,
    title: 'Proven EdTech & ERP',
    description: 'Created platforms with active student communities and enterprise compliance compliance.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1.5 bg-indigo-600 dark:bg-indigo-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I turn AI into real, shippable products: chatbots, web apps, and automation systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Bio and Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Md. Mohsinul Hasan
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                As an AI automation specialist and solo founder, I operate at the intersection of state-of-the-art AI technology and practical business needs. Instead of building superficial integrations or chasing hype, I craft production-ready systems that solve actual problems—whether it's an intelligent medical/dental receptionist, an enterprise ERP with rigorous legal compliance, or a hyperlocal daily-needs commerce engine.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Toolkit
              </h3>
              
              <div className="space-y-6">
                {skills.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-gray-500">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.list.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 rounded-xl border border-gray-150 dark:border-gray-850 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
