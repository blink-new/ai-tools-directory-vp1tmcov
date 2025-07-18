import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate frontend developer with a keen eye for design and performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Manchal Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-sm font-semibold">Available</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <Card className="p-8 shadow-xl hover-lift">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Frontend Developer & React Specialist
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  With over 1+ years of experience in frontend development, I specialize in creating 
                  modern, responsive web applications using React and Firebase. I'm passionate about 
                  writing clean, maintainable code and delivering exceptional user experiences.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  I've successfully completed 10+ projects ranging from e-commerce platforms to 
                  complex web applications, always focusing on performance, accessibility, and 
                  modern design principles.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">React Expert</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Firebase Pro</Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">UI/UX Focused</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">Performance Optimized</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;