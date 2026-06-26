import { Github, Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/mraaisa-afk', icon: Github },
  { name: 'YouTube', url: 'https://youtube.com/@funeducation-tv', icon: Youtube },
  { name: 'Facebook', url: 'https://facebook.com/funeducationtv', icon: Facebook },
  { name: 'Instagram', url: 'https://instagram.com/funeducationtv', icon: Instagram },
  { name: 'X', url: 'https://x.com/funeducationtv', icon: Twitter },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
              Brand<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              AI automation specialist & solo founder — turning cutting-edge AI into shippable real-world products.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {currentYear} Md. Mohsinul Hasan. All rights reserved.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
