/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased transition-colors duration-300">
      <Navbar />
      
      <main>
        {/* Placeholder sections for smooth scrolling targets */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">Hero Section</h1>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects Section</h2>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
        
        <section id="services" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Services Section</h2>
            <p className="text-gray-500 dark:text-gray-400">Waiting for next instructions...</p>
          </div>
        </section>
        
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
