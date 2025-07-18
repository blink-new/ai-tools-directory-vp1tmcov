import React from 'react';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Manchal Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Frontend Developer | React & Firebase Specialist
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with modern technologies. 
            Passionate about clean code and user-centric design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full hover-lift"
              onClick={() => window.open('https://drive.google.com/file/d/1your-resume-id/view', '_blank')}
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown 
              size={32} 
              className="text-gray-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;