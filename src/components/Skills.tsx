import React from 'react';
import { Card, CardContent } from './ui/card';

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 95
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 90
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 88
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 92
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      level: 85
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 80
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      level: 90
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 82
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 text-center shadow-lg hover-lift animate-bounce-in bg-white border-0">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto mb-3 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="font-semibold text-gray-800 mb-2">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto p-8 shadow-xl bg-gradient-to-r from-blue-50 to-green-50 border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Always Learning</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm constantly expanding my skill set and staying up-to-date with the latest 
                technologies and best practices in web development. Currently exploring Next.js, 
                GraphQL, and advanced React patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Next.js</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">GraphQL</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">Node.js</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">MongoDB</span>
                <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">AWS</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;