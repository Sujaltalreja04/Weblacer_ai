import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Users, Award, TrendingUp, Github, Linkedin, Twitter, Mail, Code, Database, Globe } from 'lucide-react';
import TechBackground from '../components/TechBackground';
import CornerTechModels from '../components/CornerTechModels';

const founders = [
  {
    name: 'Sujal Talreja',
    title: 'Co-Founder & Chief Marketing Officer',
    location: 'Ahmedabad, India',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQH6MXmr5U3dgg/profile-displayphoto-shrink_800_800/B4DZSivOX3GkAg-/0/1737897077615?e=1756944000&v=beta&t=7CLvtVDBXLeRKqe8fQc1iov3i9Zy5HtntJWwvnqZ5ak',
    expertise: 'Web Development • Marketing Strategy • Data Analytics',
    skills: ['React', 'Python', 'Flask', 'MySQL', 'MongoDB', 'Tableau', 'AI/ML'],
    achievements: [
      'Co-founded Weblancer',
      'Top 10% in coding',
      'National hackathon finalist',
      'Google Analytics Certified'
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'sujal@weblancer.com'
    },
    story: `As the Co-founder and CMO at Weblancer, a cutting-edge freelance tech company based in Ahmedabad, I bridge the gap between data, design, and digital growth. With a strong foundation in web development, data analytics, and AI-driven strategies, I specialize in building powerful digital experiences and scaling them through performance-driven marketing.`
  },
  {
    name: 'Hitanshu Patel',
    title: 'Co-Founder & Chief Technology Officer',
    location: 'Ahmedabad, India',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF_HC2iiYOadQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721018178044?e=2147483647&v=beta&t=AkDZTmTlVZkyxUtq9IRAOOLwrv1WFviv7K-1FwHUMMY',
    expertise: 'Python Development • AI Solutions • Tech Strategy',
    skills: ['Python', 'Flask', 'Django', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn', 'MySQL', 'PostgreSQL', 'MongoDB'],
    achievements: [
      'Co-founded Weblancer',
      'Led AI application development',
      'KRMU 4.0 Hackathon finalist',
      'Python & AI Development certified',
      'Built intelligent backend systems'
    ],
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#',
      email: 'hitanshu@weblancer.com'
    },
    story: `As the Co-founder and CTO at Weblancer, Hitanshu leads the innovation engine behind our tech stack. A passionate Python developer and AI problem solver, he specializes in building intelligent systems, automation pipelines, and scalable backend architectures that power high-performance applications.`
  }
];

const Founders: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated green glow at the top */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-48 z-10" style={{
        background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #B5FF6D 0%, transparent 80%)',
        filter: 'blur(32px)',
        opacity: 0.7,
        animation: 'glowPulse 3s ease-in-out infinite',
      }} />
      {/* Corner Tech Models (animated, in corners) */}
      <CornerTechModels />
      {/* Tech Background */}
      <TechBackground zIndex="z-0" />
      {/* Main Founders Content */}
      <motion.div className="relative z-10" ref={ref} initial={{ opacity: 0, y: 40 }} animate={controls} transition={{ duration: 1, ease: 'easeOut' }}>
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 text-center mb-16 flex flex-col items-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
              <Users className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">Founders' Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Journey as Founders</h1>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              Discover how two friends turned a shared vision into a thriving company, overcoming challenges and celebrating every win together.
            </p>
          </div>
        </section>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 px-6">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 + idx * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {founder.image ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Info Side Panel (NO photo here) */}
                  <div className="flex flex-col items-start">
                    <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">{founder.name}</h2>
                    <h3 className="text-xl text-[#B5FF6D] font-semibold mb-1 tracking-wide text-left">{founder.title}</h3>
                    {founder.location && (
                      <p className="text-lg text-gray-300 mb-2 font-medium text-left">{founder.location}</p>
                    )}
                    <p className="text-lg text-gray-200 mb-4 font-medium text-left">{founder.expertise}</p>
                  </div>

                  {/* Card with photo at top, name/title, and technical expertise */}
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group flex flex-col items-center justify-start"
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(24, 24, 27, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(181, 255, 109, 0.1)'
                    }}
                  >
                    {/* Premium Animated Border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8AFF8A] to-[#B5FF6D] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-[2px] rounded-2xl bg-black" />
                    </div>

                    {/* Animated Particles Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-r from-[#B5FF6D] to-[#8AFF8A] rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Premium Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(181, 255, 109, 0.2) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                      }}
                    />
                    {/* Floating Tech Icons with Premium Styling */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 pointer-events-none">
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Code className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Database className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Globe className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* PHOTO AT TOP OF CARD */}
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-[#B5FF6D] shadow-lg mt-6 mb-2 z-10"
                      style={{ background: '#18181b' }}
                    />

                    {/* Minimal Content Inside Card */}
                    <div className="flex flex-col items-center justify-start w-full px-2">
                      {/* Premium Animated Badge */}
                      <motion.div 
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/40 rounded-full mb-2 backdrop-blur-sm shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredCard === idx ? 1 : 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        style={{
                          boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                        }}
                      >
                        <span className="text-[#B5FF6D] text-sm font-bold tracking-wide">Co-Founder</span>
                      </motion.div>
                      <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">{founder.name}</h2>
                      <h3 className="text-base text-[#B5FF6D] font-semibold mb-1 tracking-wide text-center">{founder.title}</h3>
                      <p className="text-xs text-gray-200 font-medium mb-2 text-center">{founder.expertise}</p>
                    </div>

                    {/* Technical Expertise Section (remains as before) */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                      <div className="text-white relative z-10">
                        {/* Animated Technical Expertise Cards */}
                        {founder.name === 'Sujal Talreja' && (
                          <div className="space-y-2">
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🌐</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Web Development</span>
                              </div>
                              <p className="text-xs text-gray-300">Full-stack solutions, React, Flask, REST APIs</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.5 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">📊</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Data Analytics</span>
                              </div>
                              <p className="text-xs text-gray-300">Python, SQL, MongoDB, Tableau insights</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.6 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">📈</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Digital Marketing</span>
                              </div>
                              <p className="text-xs text-gray-300">SEO, growth hacking, data-driven campaigns</p>
                            </motion.div>
                          </div>
                        )}

                        {founder.name === 'Hitanshu Patel' && (
                          <div className="space-y-2">
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🐍</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Python Development</span>
                              </div>
                              <p className="text-xs text-gray-300">Flask, Django, REST APIs, databases</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.5 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🧠</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">AI/ML Engineering</span>
                              </div>
                              <p className="text-xs text-gray-300">TensorFlow, PyTorch, OpenCV, NLP</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.6 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🔐</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Tech Leadership</span>
                              </div>
                              <p className="text-xs text-gray-300">Architecture design, deployment, innovation</p>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Premium Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B5FF6D]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Premium Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#B5FF6D]/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#B5FF6D]/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#B5FF6D]/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#B5FF6D]/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                </div>
              ) : (
                // Side by side layout for Hitanshu's card
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Info Side Panel (NO photo here) */}
                  <div className="flex flex-col items-start">
                    <h2 className="text-4xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-left">{founder.name}</h2>
                    <h3 className="text-xl text-[#B5FF6D] font-semibold mb-1 tracking-wide text-left">{founder.title}</h3>
                    {founder.location && (
                      <p className="text-lg text-gray-300 mb-2 font-medium text-left">{founder.location}</p>
                    )}
                    <p className="text-lg text-gray-200 mb-4 font-medium text-left">{founder.expertise}</p>
                  </div>

                  {/* Card with photo at top, name/title, and technical expertise */}
                  <motion.div 
                    className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group flex flex-col items-center justify-start"
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      perspective: '1000px',
                      backdropFilter: 'blur(10px)',
                      background: 'rgba(24, 24, 27, 0.25)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(181, 255, 109, 0.1)'
                    }}
                  >
                    {/* Premium Animated Border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8AFF8A] to-[#B5FF6D] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="absolute inset-[2px] rounded-2xl bg-black" />
                    </div>

                    {/* Animated Particles Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-gradient-to-r from-[#B5FF6D] to-[#8AFF8A] rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>

                    {/* Premium Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Premium Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(181, 255, 109, 0.2) 0%, transparent 70%)',
                        filter: 'blur(20px)'
                      }}
                    />
                    {/* Floating Tech Icons with Premium Styling */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 pointer-events-none">
                      <div className="flex space-x-2">
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Code className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Database className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8AFF8A]/20 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 backdrop-blur-sm shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          style={{
                            boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                          }}
                        >
                          <Globe className="w-5 h-5 text-[#B5FF6D]" />
                        </motion.div>
                      </div>
                    </div>

                    {/* PHOTO AT TOP OF CARD */}
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-[#B5FF6D] shadow-lg mt-6 mb-2 z-10"
                      style={{ background: '#18181b' }}
                    />

                    {/* Minimal Content Inside Card */}
                    <div className="flex flex-col items-center justify-start w-full px-2">
                      {/* Premium Animated Badge */}
                      <motion.div 
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#B5FF6D]/20 to-[#8AFF8A]/20 border border-[#B5FF6D]/40 rounded-full mb-2 backdrop-blur-sm shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: hoveredCard === idx ? 1 : 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        style={{
                          boxShadow: '0 4px 15px rgba(181, 255, 109, 0.3)'
                        }}
                      >
                        <span className="text-[#B5FF6D] text-sm font-bold tracking-wide">Co-Founder</span>
                      </motion.div>
                      <h2 className="text-2xl font-bold mb-1 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent text-center">{founder.name}</h2>
                      <h3 className="text-base text-[#B5FF6D] font-semibold mb-1 tracking-wide text-center">{founder.title}</h3>
                      <p className="text-xs text-gray-200 font-medium mb-2 text-center">{founder.expertise}</p>
                    </div>

                    {/* Technical Expertise Section (remains as before) */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                      <div className="text-white relative z-10">
                        {/* Animated Technical Expertise Cards */}
                        {founder.name === 'Sujal Talreja' && (
                          <div className="space-y-2">
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🌐</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Web Development</span>
                              </div>
                              <p className="text-xs text-gray-300">Full-stack solutions, React, Flask, REST APIs</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.5 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">📊</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Data Analytics</span>
                              </div>
                              <p className="text-xs text-gray-300">Python, SQL, MongoDB, Tableau insights</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.6 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">📈</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Digital Marketing</span>
                              </div>
                              <p className="text-xs text-gray-300">SEO, growth hacking, data-driven campaigns</p>
                            </motion.div>
                          </div>
                        )}

                        {founder.name === 'Hitanshu Patel' && (
                          <div className="space-y-2">
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.4 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🐍</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Python Development</span>
                              </div>
                              <p className="text-xs text-gray-300">Flask, Django, REST APIs, databases</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.5 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🧠</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">AI/ML Engineering</span>
                              </div>
                              <p className="text-xs text-gray-300">TensorFlow, PyTorch, OpenCV, NLP</p>
                            </motion.div>
                            <motion.div
                              className="bg-gradient-to-r from-[#B5FF6D]/10 to-[#8AFF8A]/10 rounded-lg p-3 border border-[#B5FF6D]/20 backdrop-blur-sm"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: hoveredCard === idx ? 1 : 0, x: hoveredCard === idx ? 0 : -20 }}
                              transition={{ delay: 0.6 }}
                            >
                              <div className="flex items-center mb-1">
                                <span className="text-[#B5FF6D] mr-2">🔐</span>
                                <span className="text-xs font-semibold text-[#B5FF6D]">Tech Leadership</span>
                              </div>
                              <p className="text-xs text-gray-300">Architecture design, deployment, innovation</p>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Premium Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B5FF6D]/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>

                    {/* Premium Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#B5FF6D]/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#B5FF6D]/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#B5FF6D]/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#B5FF6D]/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Founders; 