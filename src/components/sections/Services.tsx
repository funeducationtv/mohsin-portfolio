import { motion } from 'motion/react';
import { Bot, Globe, Smartphone, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'AI Automation & Chatbots',
    description: 'AI receptionists, lead-capture bots, and workflow automation (Make / n8n).',
    icon: Bot,
  },
  {
    title: 'Web Development',
    description: 'Production-ready sites & apps with WordPress and Next.js.',
    icon: Globe,
  },
  {
    title: 'App Development',
    description: 'Android / Kotlin apps and Firebase-backed products.',
    icon: Smartphone,
  },
  {
    title: 'EdTech & Content Systems',
    description: 'Courses, content workflows, SEO, and digital products.',
    icon: BookOpen,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <div className="w-20 h-1.5 bg-fuchsia-600 dark:bg-fuchsia-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Delivering end-to-end technical solutions to help businesses scale, automate, and educate.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-10 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-gray-900/5 dark:hover:shadow-black/20"
              >
                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-900 dark:text-white mb-8 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-400 group-hover:scale-110 transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
