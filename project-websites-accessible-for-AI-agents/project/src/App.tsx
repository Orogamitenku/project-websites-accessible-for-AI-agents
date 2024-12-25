import React from 'react';
import { Bot, Users, Search, Menu } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;