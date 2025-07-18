import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with Firebase",
      excerpt: "Learn how to create robust, scalable React applications using Firebase as your backend. We'll cover authentication, real-time database, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "Firebase", "JavaScript"]
    },
    {
      title: "Modern CSS Techniques for Better User Experience",
      excerpt: "Explore advanced CSS techniques including Grid, Flexbox, and custom properties to create stunning, responsive designs that delight users.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Design", "UX"]
    },
    {
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt: "Comprehensive guide to web performance optimization covering image optimization, code splitting, lazy loading, and Core Web Vitals improvements.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      date: "2024-01-05",
      readTime: "12 min read",
      category: "Performance",
      tags: ["Performance", "Optimization", "Web Vitals"]
    },
    {
      title: "The Future of Frontend Development in 2024",
      excerpt: "Discover the latest trends and technologies shaping frontend development, from new frameworks to emerging design patterns and development tools.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Trends",
      tags: ["Frontend", "Trends", "2024"]
    },
    {
      title: "Mastering React Hooks: Advanced Patterns",
      excerpt: "Deep dive into advanced React Hooks patterns including custom hooks, useCallback optimization, and complex state management strategies.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "React",
      tags: ["React", "Hooks", "Advanced"]
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "Learn how to create inclusive web experiences by implementing proper accessibility standards, ARIA attributes, and keyboard navigation.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Accessibility",
      tags: ["Accessibility", "ARIA", "Inclusive Design"]
    }
  ];

  const categories = ["All", "React", "CSS", "Performance", "Trends", "Accessibility"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover-lift animate-slide-up cursor-pointer group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar size={14} className="mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock size={14} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;