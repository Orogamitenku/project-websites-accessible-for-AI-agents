import React from 'react';
import { Bot, Menu } from 'lucide-react';

export default function Navigation() {
  return (
    <nav 
      role="navigation" 
      aria-label="Main navigation"
      className="bg-white shadow-sm"
      itemScope 
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <span className="ml-2 text-xl font-bold text-gray-900" itemProp="name">AI-First Web</span>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {['Home', 'Features', 'Documentation', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                itemProp="url"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}