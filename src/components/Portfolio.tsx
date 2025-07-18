import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { TrendingUp, Users, DollarSign, Eye } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: "E-commerce Growth Strategy",
      client: "Fashion Forward",
      industry: "Retail",
      challenge: "Low online sales and poor website conversion rates",
      solution: "Comprehensive SEO optimization, Google Ads campaigns, and conversion rate optimization",
      results: [
        { metric: "Revenue Increase", value: "340%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "Website Traffic", value: "250%", icon: <Eye className="w-4 h-4" /> },
        { metric: "Conversion Rate", value: "180%", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      tags: ["SEO", "Google Ads", "CRO"],
      duration: "6 months"
    },
    {
      title: "B2B Lead Generation",
      client: "TechSolutions Pro",
      industry: "Technology",
      challenge: "Difficulty generating qualified leads for enterprise software",
      solution: "LinkedIn advertising, content marketing strategy, and marketing automation",
      results: [
        { metric: "Qualified Leads", value: "400%", icon: <Users className="w-4 h-4" /> },
        { metric: "Cost per Lead", value: "-60%", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "Sales Pipeline", value: "300%", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      tags: ["LinkedIn Ads", "Content Marketing", "Automation"],
      duration: "4 months"
    },
    {
      title: "Local Business Expansion",
      client: "Healthy Bites Cafe",
      industry: "Food & Beverage",
      challenge: "Limited local awareness and foot traffic",
      solution: "Local SEO, social media marketing, and Google My Business optimization",
      results: [
        { metric: "Local Visibility", value: "500%", icon: <Eye className="w-4 h-4" /> },
        { metric: "Foot Traffic", value: "220%", icon: <Users className="w-4 h-4" /> },
        { metric: "Online Orders", value: "380%", icon: <DollarSign className="w-4 h-4" /> }
      ],
      tags: ["Local SEO", "Social Media", "GMB"],
      duration: "3 months"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable growth through 
            strategic digital marketing campaigns and data-driven approaches.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                    {study.industry}
                  </Badge>
                  <span className="text-sm text-gray-500">{study.duration}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {study.title}
                </CardTitle>
                <p className="text-sm text-gray-600 font-medium">{study.client}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <div className="text-blue-600">{result.icon}</div>
                          <span className="text-sm text-gray-700">{result.metric}</span>
                        </div>
                        <span className="font-bold text-green-600">+{result.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Track Record Speaks for Itself
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              These numbers represent real businesses that trusted us with their digital marketing. 
              Your success story could be next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
              <div className="text-blue-100">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">250%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;