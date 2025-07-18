import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code, Smartphone, Search, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Firebase, and Node.js. Focus on performance, scalability, and maintainable code.",
      features: ["React Applications", "Firebase Integration", "API Development", "Database Design"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      title: "Responsive Design",
      description: "Mobile-first responsive websites that look great on all devices. Ensuring optimal user experience across desktop, tablet, and mobile platforms.",
      features: ["Mobile-First Approach", "Cross-Browser Compatibility", "Touch-Friendly Interfaces", "Performance Optimization"]
    },
    {
      icon: <Search className="w-12 h-12 text-purple-600" />,
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and ranking. Technical SEO, content optimization, and performance improvements.",
      features: ["Technical SEO", "Page Speed Optimization", "Meta Tags & Schema", "Analytics Setup"]
    },
    {
      icon: <Palette className="w-12 h-12 text-orange-600" />,
      title: "UI/UX Improvements",
      description: "User interface and experience enhancements to increase engagement and conversions. Modern design principles and user-centered approach.",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Services Offered</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 shadow-lg hover-lift animate-slide-up border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your project? Let's discuss your requirements.
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;