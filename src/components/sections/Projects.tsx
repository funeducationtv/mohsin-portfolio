import { motion } from 'motion/react';
import { Github, ExternalLink, Lock, Wrench, Terminal, PlayCircle } from 'lucide-react';

const projects = [
  {
    title: 'Fun Education TV',
    description: 'Free EdTech platform teaching practical AI-era digital skills (tutorials, learning paths, downloadable resources) + a Made-for-Kids YouTube channel.',
    tech: ['WordPress', 'Astra', 'Cloudflare'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'Live Site', url: 'https://funeducationtv.com', type: 'link' },
  },
  {
    title: 'AI Dental Receptionist',
    description: 'Done-for-you conversational AI that turns after-hours website traffic into booked, insurance-qualified appointments.',
    tech: ['Conversational AI', 'JavaScript', 'EmailJS', 'Netlify'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'Demo on Request', url: '#contact', type: 'demo' },
  },
  {
    title: 'Aira ERP',
    description: 'Enterprise ERP with RBAC, KPI dashboards, and BD VAT / Mushak 9.1 compliance.',
    tech: ['Next.js', 'Vercel', 'Supabase'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'Private', url: '#', type: 'private' },
  },
  {
    title: 'BoiKhata',
    description: 'Bangla-first Android POS app for Bangladeshi shops (Owner / Manager / Sales / Cashier / Accountant roles).',
    tech: ['Kotlin', 'Android'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'In Development', url: '#', type: 'dev' },
  },
  {
    title: 'Kachher',
    description: 'Hyperlocal daily-needs commerce platform for Khulna, built on trust & transparency.',
    tech: ['Next.js', 'Firebase'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'In Development', url: '#', type: 'dev' },
  },
  {
    title: 'Miser',
    description: 'AI agent that auto-organizes messy folders and scaffolds new projects from natural language.',
    tech: ['Python', 'LLM tool-calling', 'Telegram bot'],
    github: 'https://github.com/mraaisa-afk',
    live: { text: 'CLI Tool', url: '#', type: 'cli' },
  },
];

export default function Projects() {
  const getLiveIcon = (type: string) => {
    switch (type) {
      case 'link': return <ExternalLink size={16} />;
      case 'demo': return <PlayCircle size={16} />;
      case 'private': return <Lock size={16} />;
      case 'dev': return <Wrench size={16} />;
      case 'cli': return <Terminal size={16} />;
      default: return <ExternalLink size={16} />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950 relative">
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
              Featured Work
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              A collection of products, platforms, and AI tools I've built to solve real-world problems.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Decorative Top Accent */}
              <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span>Source</span>
                  </a>
                  
                  {project.live.url !== '#' ? (
                    <a
                      href={project.live.url}
                      target={project.live.url.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors ml-auto"
                    >
                      {getLiveIcon(project.live.type)}
                      <span>{project.live.text}</span>
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-600 cursor-not-allowed ml-auto">
                      {getLiveIcon(project.live.type)}
                      <span>{project.live.text}</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
