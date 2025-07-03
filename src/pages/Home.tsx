import React from 'react';
import { ChevronDown, ArrowRight, Globe, Zap, Shield, Building, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center pt-20">
        {/* Massive 3D Tech Infrastructure Background */}
        <div className="absolute inset-0 perspective-[3000px]">
          {/* Giant 3D Server Racks */}
          <div className="absolute left-0 top-0 w-full h-full transform rotateY-15 rotateX-5">
            <div className="grid grid-cols-8 gap-8 h-full opacity-10">
              {Array.from({ length: 64 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-gradient-to-b from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/30 rounded-lg transform translateZ-[100px] animate-pulse"
                  style={{ 
                    animationDelay: `${i * 100}ms`,
                    height: `${Math.random() * 300 + 200}px`
                  }}
                >
                  <div className="w-full h-4 bg-[#B5FF6D]/40 rounded-t-lg"></div>
                  <div className="p-2 space-y-1">
                    {Array.from({ length: 3 }).map((_, j) => (
                      <div key={j} className="h-1 bg-[#8A9A5B]/60 rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating 3D Tech Cubes */}
          <div className="absolute right-20 top-20 perspective-[1000px]">
            <div className="relative w-64 h-64 animate-spin-slow">
              {Array.from({ length: 27 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-8 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 border border-[#B5FF6D]/50 rounded transform animate-float"
                  style={{
                    left: `${(i % 3) * 80}px`,
                    top: `${Math.floor((i % 9) / 3) * 80}px`,
                    transform: `translateZ(${Math.floor(i / 9) * 80}px) rotateX(${i * 40}deg) rotateY(${i * 60}deg)`,
                    animationDelay: `${i * 200}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          {/* Company Badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
            <Shield className="w-5 h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold">Enterprise-Grade Solutions</span>
          </div>

          {/* Main Headline */}
          <div className="perspective-[2000px] mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 transform hover:rotateX-5 transition-transform duration-500">
              <span className="block mb-4">
                <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300">WEB</span>
                <span className="inline-block hover:text-[#B5FF6D] transition-colors duration-300 delay-150">LANCER</span>
              </span>
            </h1>
          </div>
          
          <div className="text-2xl md:text-3xl text-[#8A9A5B] mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming businesses through cutting-edge digital solutions and innovative technology
          </div>

          <div className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            We deliver enterprise-level web applications, mobile solutions, and digital infrastructure 
            that scale with your business growth and exceed industry standards.
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link 
              to="/services"
              className="group px-10 py-5 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              to="/about"
              className="px-10 py-5 border-2 border-[#8A9A5B] text-white font-bold rounded-lg hover:border-[#B5FF6D] hover:text-[#B5FF6D] transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-[#B5FF6D] group-hover:animate-spin" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-[#8A9A5B]">Global Clients</div>
              </div>
            </div>

            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-[#B5FF6D] group-hover:animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-[#8A9A5B]">Uptime SLA</div>
              </div>
            </div>

            <div className="group perspective-[1000px]">
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 group-hover:border-[#B5FF6D] transition-all duration-300 transform group-hover:rotateY-5">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-[#B5FF6D] group-hover:animate-bounce" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-[#8A9A5B]">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#B5FF6D]" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
              <Building className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">Our Vision</span>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">Shaping the Digital Future</h2>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              We envision a world where technology seamlessly integrates with business objectives, 
              creating unprecedented opportunities for growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Vision Content */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  We believe in pushing the boundaries of what's possible, constantly exploring 
                  emerging technologies and methodologies to deliver solutions that set new industry standards.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Client Success</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  Your success is our success. We partner with you to understand your unique challenges 
                  and create tailored solutions that drive measurable business outcomes.
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
                <p className="text-[#8A9A5B] leading-relaxed">
                  Through our work, we aim to create positive change that extends beyond individual 
                  businesses to benefit communities and industries worldwide.
                </p>
              </div>
            </div>

            {/* 3D Vision Visualization */}
            <div className="relative perspective-[2000px]">
              <div className="transform rotateY-12 hover:rotateY-0 transition-transform duration-700">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                  {/* Vision Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#B5FF6D] mb-2">150+</div>
                      <div className="text-[#8A9A5B] text-sm">Expert Team</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#B5FF6D] mb-2">25+</div>
                      <div className="text-[#8A9A5B] text-sm">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#B5FF6D] mb-2">500+</div>
                      <div className="text-[#8A9A5B] text-sm">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#B5FF6D] mb-2">99.9%</div>
                      <div className="text-[#8A9A5B] text-sm">Success Rate</div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#B5FF6D]/30 to-[#8A9A5B]/30 rounded-lg border border-[#B5FF6D]/50 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#B5FF6D]" />
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

export default Home;