import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { Mail, MessageCircle, Phone, Send, MapPin, Calendar, Building, Users, Clock } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact: React.FC = () => {
  // Remove old form state and handlers
  // const [formData, setFormData] = useState({ ... });
  // const handleInputChange = ...
  // const handleSubmit = ...

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const [state, handleSubmit] = useForm("mnnvrloy");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 perspective-[4000px]">
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
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
              <Building className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">Contact Us</span>
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-6">Let's Build Something Amazing Together</h1>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Our team 
              is standing by to discuss your project requirements and strategic objectives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                      <Mail className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Email Us</p>
                      <p className="text-[#8A9A5B]">info@weblancer.com</p>
                      <p className="text-[#8A9A5B] text-sm">24/7 Response Guarantee</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                      <Phone className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Call Us</p>
                      <p className="text-[#8A9A5B]">+91 9876543210</p>
                      <p className="text-[#8A9A5B] text-sm">Mon-Fri 9AM-6PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                      <MapPin className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Visit Us</p>
                      <p className="text-[#8A9A5B]">Mumbai • Delhi • Bangalore</p>
                      <p className="text-[#8A9A5B] text-sm">India & Global Offices</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-16 h-16 bg-[#B5FF6D]/10 rounded-xl flex items-center justify-center border border-[#B5FF6D]/30 group-hover:bg-[#B5FF6D]/20 transition-colors duration-300 transform group-hover:rotateY-12">
                      <Calendar className="w-8 h-8 text-[#B5FF6D]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Schedule Meeting</p>
                      <p className="text-[#8A9A5B]">Book a consultation</p>
                      <p className="text-[#8A9A5B] text-sm">Free strategy session</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-6 h-6 text-[#B5FF6D]" />
                  <span className="text-white font-bold text-xl">Why Choose Weblancer?</span>
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
                    <span className="text-[#8A9A5B]">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#B5FF6D] rounded-full"></div>
                    <span className="text-[#8A9A5B]">Fast delivery times</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Start Your Project</h3>
              {state.succeeded ? (
                <p className="text-green-400 font-semibold text-lg">Thanks for joining!</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-[#B5FF6D] focus:outline-none transition-colors duration-300"
                      required
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 bg-[#B5FF6D] text-black hover:bg-[#A3E85C]"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Office Hours & Response Times</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center">
              <Clock className="w-12 h-12 text-[#B5FF6D] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-[#8A9A5B]">Monday - Friday</p>
              <p className="text-[#8A9A5B]">9:00 AM - 6:00 PM IST</p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center">
              <MessageCircle className="w-12 h-12 text-[#B5FF6D] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Response</h3>
              <p className="text-[#8A9A5B]">Within 2 hours</p>
              <p className="text-[#8A9A5B]">During business hours</p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 text-center">
              <Phone className="w-12 h-12 text-[#B5FF6D] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Emergency Support</h3>
              <p className="text-[#8A9A5B]">24/7 Available</p>
              <p className="text-[#8A9A5B]">For existing clients</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;