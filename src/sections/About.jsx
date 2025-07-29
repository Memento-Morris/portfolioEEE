import { useState } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('Morrisafrikao@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C", "Java", "SQL", "HTML", "MATLAB"]
    },
    {
      title: "Engineering Tools", 
      skills: ["AutoCAD", "Industrial Automation", "Linux"]
    },
    {
      title: "Languages",
      skills: ["English (Native)", "Zulu (Conversational)", "Greek (Beginner)"]
    }
  ];

  const awards = [
    { year: "2025", title: "Siemens Energy Transition Competition", icon: "⚡" },
    { year: "2024", title: "UCT Plus Gold Award", icon: "🥇" },
    { year: "2023", title: "RS Student Project Fund Winner", icon: "🎯" },
    { year: "2023", title: "UCT Plus Silver Award", icon: "🥈" }
  ];

  const interests = [
    { name: "Mountain Climbing", icon: "🏔️", desc: "Conquering peaks" },
    { name: "Surfing", icon: "🏄", desc: "Riding waves" },
    { name: "Coffee Making", icon: "☕", desc: "Perfect brews" },
    { name: "Golf", icon: "⛳", desc: "Precision sport" }
  ];

  const EnhancedGlobe = () => (
    <div className="relative w-48 h-48 mx-auto">
      <div className="w-full h-full rounded-full overflow-hidden shadow-2xl shadow-black-200">
        <Globe
          height={200}
          width={200}
          backgroundColor="rgba(0, 0, 0, 0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          labelsData={[{ lat: -33.9, lng: 18.4, text: 'Cape Town', color: 'white', size: 15 }]}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 border-2 border-black-300 rounded-full animate-spin pointer-events-none" style={{animationDuration: '20s'}}></div>
      <div className="absolute inset-4 border border-black-300 rounded-full animate-spin pointer-events-none" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black py-20">
      <section className="max-w-7xl mx-auto px-6" id="about">
        <div className="text-center mb-16">
          <h2 className="head-text">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Morris</span>
          </h2>
          <p className="text-xl text-white-600 max-w-2xl mx-auto">
            Engineering innovation through code, leadership, and relentless curiosity
          </p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          
          {/* Who am I - Hero Section */}
          <div className="xl:col-span-2 lg:col-span-2">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-black-300 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    👨‍🎓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-3xl font-semibold mb-4">Who am I</h3>
                    <p className="text-white-600 text-lg leading-relaxed mb-6">
                      <span className="text-white font-semibold">Final year Engineering</span> student at UCT. 
                      Passionate about industrial automation, software development, and solving complex engineering challenges 
                      through innovative solutions. <br />
                      Proven leadership in student organizations. Enthusiastic about leveraging technical expertise to solve complex engineering and statistical challenges and optimize systems for efficiency and performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-black-300 text-white-600 border border-black-300 px-4 py-2 rounded-full text-sm font-medium">Engineering Student</span>
                      <span className="bg-black-300 text-white-600 border border-black-300 px-4 py-2 rounded-full text-sm font-medium">Research Developer</span>
                      <span className="bg-black-300 text-white-600 border border-black-300 px-4 py-2 rounded-full text-sm font-medium">Leader</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Globe Section */}
          <div className="xl:col-span-2 lg:col-span-1">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full flex flex-col justify-center">
                <EnhancedGlobe />
                <div className="text-center mt-6">
                  <h3 className="text-white text-2xl font-semibold mb-2">Global Mindset</h3>
                  <p className="text-white-600">
                    Based in Cape Town, flexible with time zones & open to relocations worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="xl:col-span-2 lg:col-span-2">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black-300 rounded-2xl flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <h3 className="text-white text-3xl font-semibold">Technical Skills</h3>
                </div>
                <div className="space-y-6">
                  {skillCategories.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-white-600 font-semibold mb-3 text-lg">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-black-300 text-white-600 border border-black-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-black-400 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div className="xl:col-span-2 lg:col-span-1 md:col-span-2">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black-300 rounded-2xl flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <h3 className="text-white text-3xl font-semibold">Awards</h3>
                </div>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-black-300 rounded-xl hover:bg-black-400 transition-colors">
                      <div className="text-3xl">
                        {award.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">
                          {award.title}
                        </div>
                        <div className="text-white-600 text-sm">{award.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="xl:col-span-2 lg:col-span-2">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-black-300 rounded-2xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h3 className="text-white text-3xl font-semibold">Interests & Hobbies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index}>
                      <div className="p-6 bg-black-300 rounded-xl hover:bg-black-400 transition-all duration-300 text-center border border-black-300">
                        <div className="text-4xl mb-3">
                          {interest.icon}
                        </div>
                        <h4 className="text-white font-semibold mb-1">{interest.name}</h4>
                        <p className="text-white-600 text-sm">{interest.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="xl:col-span-2 lg:col-span-2">
            <div className="relative h-full shadow-2xl shadow-black-200">
              <div className="relative bg-black-200 backdrop-blur-sm border border-black-300 rounded-lg p-8 h-full flex flex-col">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-black-300 rounded-2xl flex items-center justify-center text-2xl">
                    📧
                  </div>
                  <h3 className="text-white text-3xl font-semibold">Let's Connect</h3>
                </div>
                 {/* Added grid image here */}
      <div className="mb-6">
        <img 
          src="assets/grid3.png" 
          alt="grid-3" 
          className="w-full h-[200px] object-contain rounded-lg border border-black-300" 
        />
      </div>
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-white-600 mb-6">Ready to collaborate on your next engineering challenge</p>
                  
                  <div 
                    className="flex items-center gap-4 bg-black-300 hover:bg-black-400 border border-black-300 rounded-xl p-4 cursor-pointer transition-all duration-300"
                    onClick={handleCopy}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {hasCopied ? (
                        <div className="text-white text-xl animate-bounce">✓</div>
                      ) : (
                        <div className="text-white-600 hover:text-white transition-colors text-xl">📋</div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-white-600 text-sm mb-1">Email</div>
                      <div className="text-white font-mono text-lg hover:text-slate-200 transition-colors">
                        Morrisafrikao@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;