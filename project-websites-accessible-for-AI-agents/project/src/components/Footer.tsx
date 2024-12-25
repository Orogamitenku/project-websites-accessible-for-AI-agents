import React from 'react';
import { Bot, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="bg-gray-800"
      role="contentinfo"
      itemScope 
      itemType="https://schema.org/WPFooter"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-white" aria-hidden="true" />
            <span className="ml-2 text-white text-xl font-bold">AI-First Web</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-gray-400 md:mt-0">
            &copy; {new Date().getFullYear()} AI-First Web. All rights reserved.
          </p>
          <nav className="flex space-x-6" aria-label="Footer Navigation">
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-400 hover:text-gray-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}