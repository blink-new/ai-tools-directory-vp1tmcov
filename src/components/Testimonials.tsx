import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Manchal delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success. The site is fast, responsive, and our customers love it!"
    },
    {
      name: "David Chen",
      role: "Product Manager, InnovateCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Manchal was a fantastic experience. He transformed our complex requirements into a beautiful, user-friendly web application. His React and Firebase skills are top-notch, and he delivered on time and within budget."
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthLab",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Manchal's work on our company website was outstanding. He not only created a stunning design but also optimized it for SEO and performance. Our organic traffic increased by 150% within three months of launch!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-xl hover-lift animate-slide-up border-0 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote size={40} />
              </div>
              
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 shadow-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto p-8 shadow-xl bg-gradient-to-r from-blue-600 to-green-600 text-white border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="mb-6 opacity-90">
                Join these satisfied clients and let's create something amazing together. 
                I'm committed to delivering high-quality solutions that drive results.
              </p>
              <button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;