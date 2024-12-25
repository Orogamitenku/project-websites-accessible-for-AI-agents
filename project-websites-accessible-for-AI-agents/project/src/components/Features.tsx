import React from 'react';
import { Bot, Code, Search, Layout, Shield, Database } from 'lucide-react';

const features = [
  {
    name: 'Semantic Structure',
    description: 'Properly structured HTML5 with ARIA landmarks and roles for better machine understanding.',
    icon: Layout
  },
  {
    name: 'Schema Markup',
    description: 'Rich structured data using Schema.org vocabularies for enhanced AI comprehension.',
    icon: Code
  },
  {
    name: 'AI-Readable Content',
    description: 'Clear content hierarchy and machine-readable formats for AI processing.',
    icon: Bot
  },
  {
    name: 'Metadata Optimization',
    description: 'Comprehensive metadata implementation for better AI interpretation.',
    icon: Search
  },
  {
    name: 'Data Security',
    description: 'Secure data handling with clear permissions and access controls.',
    icon: Shield
  },
  {
    name: 'API Integration',
    description: 'RESTful APIs and structured endpoints for AI interaction.',
    icon: Database
  }
];

export default function Features() {
  return (
    <div 
      id="features" 
      className="py-12 bg-gray-50"
      itemScope 
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 
            className="text-base text-blue-600 font-semibold tracking-wide uppercase"
            itemProp="name"
          >
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Built for AI Integration
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Key features that make your website AI-friendly while maintaining an excellent user experience.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div 
                key={feature.name} 
                className="relative"
                itemProp="itemListElement"
                itemScope 
                itemType="https://schema.org/Thing"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900" itemProp="name">
                  {feature.name}
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500" itemProp="description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}