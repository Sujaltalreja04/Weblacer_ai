import React, { useEffect } from 'react';
import { Building, Users, Award, TrendingUp, Server, Database, Cloud, Shield, Globe, Zap } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 perspective-[4000px]">
          <div className="absolute inset-0 transform rotateX-60 rotateY-10 scale-150 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-[200vh] w-[200vw]">
              {Array.from({ length: 288 }).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-gradient-to-t from-[#B5FF6D]/20 to-[#8A9A5B]/20 border border-[#B5FF6D]/30 rounded animate-pulse"
                  style={{ 
                    animationDelay: `${i * 30}ms`,
                    height: `${Math.random() * 150 + 100}px`,
                    transform: `translateZ(${Math.random() * 200}px)`
                  }}
                >
                  <div className="w-full h-2 bg-[#B5FF6D]/60 rounded-t animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
              <Building className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">About Weblancer</span>
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-6">Leading Digital Innovation Company</h1>
            <p className="text-xl text-[#8A9A5B] max-w-4xl mx-auto">
              Weblancer is a premier technology company specializing in enterprise-grade 
              digital solutions. We partner with Fortune 500 companies and emerging startups 
              to deliver scalable, secure, and innovative technology platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge technology and business success, 
                Weblancer has grown from a small team of passionate developers to a global technology powerhouse.
              </p>
              <p className="text-lg text-[#8A9A5B] leading-relaxed">
                Our journey began with a simple belief: that technology should empower businesses, not complicate them. 
                Today, we continue to uphold this principle while serving clients across 25+ countries.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-[#B5FF6D] mb-2">2018</div>
                  <div className="text-[#8A9A5B]">Founded</div>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <div className="text-3xl font-bold text-[#B5FF6D] mb-2">500+</div>
                  <div className="text-[#8A9A5B]">Projects Delivered</div>
                </div>
              </div>
            </div>

            <div className="relative perspective-[2000px]">
              <div className="transform rotateY-12 hover:rotateY-0 transition-transform duration-700">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 relative overflow-hidden">
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i}
                        className="h-8 bg-gradient-to-t from-[#8A9A5B]/30 to-[#B5FF6D]/30 border border-[#B5FF6D]/40 rounded animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        <div className="w-full h-1 bg-[#B5FF6D]/80 rounded-t"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="w-full h-32 bg-black rounded-lg p-4 relative overflow-hidden border border-[#B5FF6D]/50">
                    <div className="text-[#B5FF6D] text-xs font-mono space-y-1">
                      <div className="flex justify-between">
                        <span>WEBLANCER SYSTEMS</span>
                        <span className="text-[#8A9A5B]">ONLINE</span>
                      </div>
                      <div className="text-[#8A9A5B]">Global Infrastructure Status</div>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="text-xs">
                          <div className="text-white">Servers: 99.9%</div>
                          <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                        </div>
                        <div className="text-xs">
                          <div className="text-white">Network: 100%</div>
                          <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                        </div>
                        <div className="text-xs">
                          <div className="text-white">Security: 100%</div>
                          <div className="w-full h-1 bg-[#B5FF6D] rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Team & Culture</h2>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              We're a diverse team of innovators, creators, and problem-solvers united by our passion for technology and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <Users className="w-6 h-6 text-[#B5FF6D] group-hover:animate-pulse" />
                <span className="text-white font-semibold">Team Size</span>
              </div>
              <p className="text-3xl font-bold text-[#B5FF6D]">150+</p>
              <p className="text-[#8A9A5B] text-sm">Expert Professionals</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="w-6 h-6 text-[#B5FF6D] group-hover:animate-bounce" />
                <span className="text-white font-semibold">Growth Rate</span>
              </div>
              <p className="text-3xl font-bold text-[#B5FF6D]">300%</p>
              <p className="text-[#8A9A5B] text-sm">Year over Year</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="w-6 h-6 text-[#B5FF6D] group-hover:animate-spin" />
                <span className="text-white font-semibold">Industry Awards</span>
              </div>
              <p className="text-3xl font-bold text-[#B5FF6D]">25+</p>
              <p className="text-[#8A9A5B] text-sm">Recognition & Certifications</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300 group">
              <div className="flex items-center space-x-3 mb-3">
                <Building className="w-6 h-6 text-[#B5FF6D] group-hover:animate-pulse" />
                <span className="text-white font-semibold">Enterprise Clients</span>
              </div>
              <p className="text-3xl font-bold text-[#B5FF6D]">50+</p>
              <p className="text-[#8A9A5B] text-sm">Fortune 500 Companies</p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 p-8 rounded-xl border border-[#B5FF6D]/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                To empower businesses worldwide with cutting-edge technology solutions that 
                drive innovation, enhance efficiency, and create sustainable competitive advantages.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 p-8 rounded-xl border border-[#B5FF6D]/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <ul className="text-[#8A9A5B] space-y-2">
                <li>• Innovation & Excellence</li>
                <li>• Client-Centric Approach</li>
                <li>• Transparency & Integrity</li>
                <li>• Continuous Learning</li>
                <li>• Global Collaboration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#B5FF6D]/5 to-[#8A9A5B]/5 p-8 rounded-xl border border-[#B5FF6D]/30">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                To be the world's most trusted technology partner, shaping the future of digital 
                innovation and creating lasting impact across industries and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Technology Stack</h2>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Server className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Backend Technologies</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• Node.js & Express</div>
                <div>• Python & Django</div>
                <div>• Java & Spring Boot</div>
                <div>• .NET Core</div>
                <div>• Microservices Architecture</div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Globe className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Frontend Technologies</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• React & Next.js</div>
                <div>• Vue.js & Nuxt.js</div>
                <div>• Angular</div>
                <div>• TypeScript</div>
                <div>• Progressive Web Apps</div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Database className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Database & Storage</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• PostgreSQL & MySQL</div>
                <div>• MongoDB & Redis</div>
                <div>• Elasticsearch</div>
                <div>• AWS S3 & CloudFront</div>
                <div>• Data Warehousing</div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Cloud className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Cloud & DevOps</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• AWS, Azure, GCP</div>
                <div>• Docker & Kubernetes</div>
                <div>• CI/CD Pipelines</div>
                <div>• Infrastructure as Code</div>
                <div>• Monitoring & Analytics</div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Shield className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Security & Compliance</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• OAuth & JWT</div>
                <div>• SSL/TLS Encryption</div>
                <div>• GDPR & HIPAA Compliance</div>
                <div>• Penetration Testing</div>
                <div>• Security Audits</div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Zap className="w-12 h-12 text-[#B5FF6D] mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI & Machine Learning</h3>
              <div className="space-y-2 text-[#8A9A5B]">
                <div>• TensorFlow & PyTorch</div>
                <div>• Natural Language Processing</div>
                <div>• Computer Vision</div>
                <div>• Predictive Analytics</div>
                <div>• AI-Powered Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;