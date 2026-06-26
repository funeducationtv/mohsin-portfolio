/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
        
        <Projects />
        
        <Services />
        
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
      </main>
    </div>
  );
}
