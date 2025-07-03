import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin, Clock, Building, Users, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enterprise inquiry submitted:', formData);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Massive 3D Communication Network */}
      <div className="absolute inset-0 perspective-[4000px]">
        {/* 3D Network Grid */}
        <div className="absolute inset-0 transform rotateX-60 rotateY-10 scale-200 opacity-5">
          <div className="grid grid-cols-16 gap-4 h-[200vh] w-[200vw]">
            {Array.from({ length: 512 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-[#B5FF6D]/20 bg-gradient-to-t from-[#B5FF6D]/5 to-transparent animate-pulse"
                style={{ 
                  animationDelay: `${i * 30}ms`,
                  height: `${Math.random() * 100 + 50}px`,
                  transform: `translateZ(${Math.random() * 200}px)`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Communication Elements */}
        <div className="absolute top-20 right-20 perspective-[2000px]">
          <div className="relative w-96 h-96 animate-spin-slow">
            {/* Communication Satellites */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 rounded-lg border border-[#B5FF6D]/40 flex items-center justify-center animate-float">
                <Mail className="w-8 h-8 text-[#B5FF6D]" />
              </div>
            </div>
            <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 rounded-lg border border-[#B5FF6D]/40 flex items-center justify-center animate-float-delayed">
                <Phone className="w-8 h-8 text-[#B5FF6D]" />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 rounded-lg border border-[#B5FF6D]/40 flex items-center justify-center animate-float-slow">
                <MessageCircle className="w-8 h-8 text-[#B5FF6D]" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Transmission Lines */}
        <div className="absolute bottom-20 left-20 perspective-[1500px]">
          <div className="w-64 h-64 relative">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-t from-[#B5FF6D]/40 to-transparent animate-pulse"
                style={{
                  left: `${i * 20}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  animationDelay: `${i * 200}ms`,
                  transform: `rotateX(45deg) translateZ(${i * 10}px)`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
            <Building className="w-5 h-5 text-[#B5FF6D]" />
            <span className="text-[#B5FF6D] font-semibold">Enterprise Partnerships</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">Let's Build the Future Together</h2>
          <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Our enterprise team 
            is standing by to discuss your project requirements and strategic objectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                    <Mail className="w-8 h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Enterprise Sales</p>
                    <p className="text-[#8A9A5B]">enterprise@weblancer.com</p>
                    <p className="text-[#8A9A5B] text-sm">24/7 Response Guarantee</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                    <Phone className="w-8 h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Direct Line</p>
                    <p className="text-[#8A9A5B]">+1 (800) WEBLANCER</p>
                    <p className="text-[#8A9A5B] text-sm">Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                    <MapPin className="w-8 h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Global Headquarters</p>
                    <p className="text-[#8A9A5B]">New York • London • Singapore</p>
                    <p className="text-[#8A9A5B] text-sm">Worldwide Service Delivery</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                    <Calendar className="w-8 h-8 text-[#B5FF6D]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Schedule Meeting</p>
                    <p className="text-[#8A9A5B]">Book a strategy session</p>
                    <p className="text-[#8A9A5B] text-sm">Free consultation available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Benefits */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-[#B5FF6D]" />
                <span className="text-white font-bold text-xl">Enterprise Advantages</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B]">Dedicated project manager</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B]">24/7 priority support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B]">Custom SLA agreements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                  <span className="text-[#8A9A5B]">Scalable team allocation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Start Your Enterprise Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                    placeholder="Your company"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                    placeholder="your@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="enterprise-web">Enterprise Web Platform</option>
                    <option value="mobile-suite">Mobile Application Suite</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="data-analytics">Data Analytics Platform</option>
                    <option value="ai-ml">AI/ML Solutions</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="consultation">Strategic Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="100k-250k">$100K - $250K</option>
                    <option value="250k-500k">$250K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-plus">$1M+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (ASAP)</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="planning">Planning phase</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Describe your project requirements, goals, and any specific technical needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#B5FF6D] text-black font-bold rounded-lg hover:bg-[#A3E85C] transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>Submit Enterprise Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;