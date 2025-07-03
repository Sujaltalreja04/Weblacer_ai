import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect, useState } from 'react';
import { Code, Palette, Smartphone, Video, Share2, Star, Check, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = {
    web: {
      icon: Code,
      title: "Web Development",
      description: "Professional websites that drive business growth",
      packages: [
        {
          name: "Basic Site",
          price: "₹5,000",
          description: "Static Site perfect for Market Presence and ADS",
          features: [
            "Static Website Design",
            "Responsive Layout",
            "Contact Form",
            "Basic SEO Setup",
            "Social Media Integration",
            "1 Year Support"
          ],
          popular: false
        },
        {
          name: "Medium Site",
          price: "₹18,000",
          description: "Dynamic site with custom UI/UX and good animations",
          features: [
            "Dynamic Website",
            "Custom UI/UX Design",
            "Good Level Animations",
            "Admin Panel Included",
            "Hosting & Domain Included",
            "Content Management System",
            "Mobile Optimized",
            "Basic Analytics"
          ],
          popular: false
        },
        {
          name: "Advance Site",
          price: "₹30,000",
          description: "Customized Dynamic UI/UX with advance animations and services",
          features: [
            "Customized Dynamic UI/UX",
            "Advanced Animations",
            "High Level Services",
            "SEO Optimization",
            "Payment Integration",
            "Custom Forms",
            "4 Months Free Management",
            "Advanced Analytics",
            "Security Features"
          ],
          popular: true
        },
        {
          name: "Platinum Site",
          price: "₹50,000",
          description: "Enterprise-level website with AI and full backend",
          features: [
            "High Level Enterprise Site",
            "SEO + Content AI",
            "Google Analytics Integration",
            "Full Payment Integration",
            "Company Level Backend",
            "Advanced Security",
            "Performance Optimization",
            "24/7 Monitoring",
            "Unlimited Revisions",
            "1 Year Free Maintenance"
          ],
          popular: false
        }
      ]
    },
    app: {
      icon: Smartphone,
      title: "Application Development",
      description: "Mobile and web applications for modern businesses",
      packages: [
        {
          name: "Basic App",
          price: "₹15,000",
          description: "Simple mobile app with core functionality",
          features: [
            "Native Mobile App",
            "Basic UI/UX Design",
            "Core Functionality",
            "User Authentication",
            "Push Notifications",
            "App Store Submission"
          ],
          popular: false
        },
        {
          name: "Medium App",
          price: "₹35,000",
          description: "Feature-rich app with custom design and integrations",
          features: [
            "Cross-Platform App",
            "Custom UI/UX Design",
            "Advanced Features",
            "API Integrations",
            "Offline Functionality",
            "Analytics Integration",
            "Admin Dashboard",
            "3 Months Support"
          ],
          popular: false
        },
        {
          name: "Advanced App",
          price: "₹60,000",
          description: "Enterprise app with advanced features and backend",
          features: [
            "Enterprise-Grade App",
            "Advanced UI/UX",
            "Real-time Features",
            "Payment Integration",
            "Custom Backend",
            "Advanced Security",
            "Performance Optimization",
            "6 Months Support",
            "App Store Optimization"
          ],
          popular: true
        },
        {
          name: "Platinum App",
          price: "₹1,00,000",
          description: "Full-scale enterprise application with AI features",
          features: [
            "Full Enterprise Solution",
            "AI-Powered Features",
            "Advanced Analytics",
            "Multi-platform Support",
            "Scalable Architecture",
            "24/7 Monitoring",
            "Advanced Security",
            "1 Year Maintenance",
            "Dedicated Support Team",
            "Custom Integrations"
          ],
          popular: false
        }
      ]
    },
    video: {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing for all your content needs",
      packages: [
        {
          name: "Basic Editing",
          price: "₹2,000",
          description: "Simple video editing for social media content",
          features: [
            "Basic Video Editing",
            "Color Correction",
            "Audio Enhancement",
            "Simple Transitions",
            "Text Overlays",
            "Social Media Formats"
          ],
          popular: false
        },
        {
          name: "Medium Editing",
          price: "₹5,000",
          description: "Professional editing with motion graphics",
          features: [
            "Professional Editing",
            "Motion Graphics",
            "Advanced Transitions",
            "Sound Design",
            "Color Grading",
            "Multiple Formats",
            "Thumbnail Design",
            "2 Revisions"
          ],
          popular: false
        },
        {
          name: "Advanced Editing",
          price: "₹10,000",
          description: "High-end video production with special effects",
          features: [
            "High-End Production",
            "Special Effects (VFX)",
            "3D Graphics",
            "Professional Color Grading",
            "Advanced Sound Design",
            "Multiple Camera Angles",
            "Custom Animations",
            "Unlimited Revisions",
            "Fast Delivery"
          ],
          popular: true
        },
        {
          name: "Platinum Editing",
          price: "₹20,000",
          description: "Cinematic quality with full post-production services",
          features: [
            "Cinematic Quality",
            "Full Post-Production",
            "Advanced VFX",
            "3D Modeling & Animation",
            "Professional Audio Mix",
            "Color Correction Suite",
            "Multiple Versions",
            "Priority Support",
            "Same Day Delivery",
            "Commercial License"
          ],
          popular: false
        }
      ]
    },
    social: {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy and management",
      packages: [
        {
          name: "Basic Management",
          price: "₹8,000/month",
          description: "Essential social media presence management",
          features: [
            "2 Platforms Management",
            "10 Posts per Month",
            "Basic Content Creation",
            "Engagement Monitoring",
            "Monthly Analytics",
            "Community Management"
          ],
          popular: false
        },
        {
          name: "Medium Management",
          price: "₹15,000/month",
          description: "Comprehensive social media strategy",
          features: [
            "4 Platforms Management",
            "20 Posts per Month",
            "Custom Content Creation",
            "Story Management",
            "Paid Ad Management",
            "Weekly Analytics",
            "Influencer Outreach",
            "Brand Monitoring"
          ],
          popular: false
        },
        {
          name: "Advanced Management",
          price: "₹25,000/month",
          description: "Full-scale social media marketing",
          features: [
            "All Major Platforms",
            "Daily Content Creation",
            "Video Content",
            "Advanced Ad Campaigns",
            "Influencer Partnerships",
            "Real-time Monitoring",
            "Competitor Analysis",
            "Monthly Strategy Review",
            "Crisis Management"
          ],
          popular: true
        },
        {
          name: "Platinum Management",
          price: "₹40,000/month",
          description: "Enterprise social media with AI-powered insights",
          features: [
            "Enterprise-Level Management",
            "AI-Powered Content",
            "Advanced Analytics",
            "Multi-brand Management",
            "24/7 Monitoring",
            "Custom Campaigns",
            "Dedicated Account Manager",
            "Performance Optimization",
            "Brand Reputation Management",
            "Global Strategy"
          ],
          popular: false
        }
      ]
    },
    logo: {
      icon: Palette,
      title: "Logo Designing",
      description: "Professional logo design and brand identity",
      packages: [
        {
          name: "Basic Logo",
          price: "₹3,000",
          description: "Simple and clean logo design",
          features: [
            "3 Logo Concepts",
            "2 Revisions",
            "High-Resolution Files",
            "Basic Color Variations",
            "Standard Formats (PNG, JPG)",
            "Commercial License"
          ],
          popular: false
        },
        {
          name: "Medium Logo",
          price: "₹7,000",
          description: "Professional logo with brand guidelines",
          features: [
            "5 Logo Concepts",
            "Unlimited Revisions",
            "Vector Files (AI, EPS)",
            "Color & B&W Versions",
            "Brand Guidelines",
            "Business Card Design",
            "Social Media Kit",
            "Font Recommendations"
          ],
          popular: false
        },
        {
          name: "Advanced Logo",
          price: "₹12,000",
          description: "Complete brand identity package",
          features: [
            "Complete Brand Identity",
            "Logo Animation",
            "Letterhead Design",
            "Brand Style Guide",
            "Social Media Templates",
            "Packaging Design Concepts",
            "Website Header Design",
            "3 Months Support",
            "Trademark Guidance"
          ],
          popular: true
        },
        {
          name: "Platinum Logo",
          price: "₹20,000",
          description: "Enterprise branding with full marketing materials",
          features: [
            "Enterprise Brand Package",
            "3D Logo Rendering",
            "Complete Marketing Kit",
            "Brand Strategy Document",
            "Multiple Logo Variations",
            "Animated Logo Versions",
            "Print & Digital Assets",
            "Brand Implementation Guide",
            "6 Months Support",
            "Brand Protection Services"
          ],
          popular: false
        }
      ]
    }
  };

  const serviceKeys = Object.keys(services) as Array<keyof typeof services>;
  const [activeService, setActiveService] = useState<keyof typeof services>(serviceKeys[0]);

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
        <div className="absolute inset-0 perspective-[5000px]">
          <div className="absolute inset-0 transform rotateX-75 rotateY-15 scale-200 opacity-5">
            <div className="grid grid-cols-20 gap-3 h-[300vh] w-[300vw]">
              {Array.from({ length: 1200 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-[#B5FF6D]/30 bg-gradient-to-t from-[#B5FF6D]/10 to-transparent animate-pulse"
                  style={{ 
                    animationDelay: `${i * 20}ms`,
                    height: `${Math.random() * 200 + 100}px`,
                    transform: `translateZ(${Math.random() * 300}px) rotateX(${Math.random() * 45}deg)`
                  }}
                >
                  <div className="w-full h-2 bg-[#B5FF6D]/40 rounded-t"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
              <Star className="w-5 h-5 text-[#B5FF6D]" />
              <span className="text-[#B5FF6D] font-semibold">Services & Packages</span>
            </div>
            
            <h1 className="text-6xl font-bold text-white mb-6">Our Services & Packages</h1>
            <p className="text-xl text-[#8A9A5B] max-w-4xl mx-auto">
              Choose from our comprehensive range of digital services designed to accelerate your business growth 
              and establish a strong online presence.
            </p>
          </div>

          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {serviceKeys.map((key) => {
              const service = services[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeService === key
                      ? 'bg-[#B5FF6D] text-black'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  <service.icon className="w-5 h-5" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{services[activeService].title}</h2>
            <p className="text-lg text-[#8A9A5B]">{services[activeService].description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services[activeService].packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 ${
                  pkg.popular 
                    ? 'border-[#B5FF6D] shadow-lg shadow-[#B5FF6D]/20' 
                    : 'border-gray-700 hover:border-[#B5FF6D]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-[#B5FF6D] text-black text-sm font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-[#B5FF6D] mb-2">{pkg.price}</div>
                  <p className="text-[#8A9A5B] text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-[#B5FF6D] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  pkg.popular
                    ? 'bg-[#B5FF6D] text-black hover:bg-[#A3E85C]'
                    : 'bg-gray-700 text-white hover:bg-[#B5FF6D] hover:text-black'
                }`}>
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Why Choose Weblancer?</h2>
            <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
              We combine cutting-edge technology with creative excellence to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Zap className="w-12 h-12 text-[#B5FF6D] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Fast Delivery</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                Quick turnaround times without compromising on quality. We understand the importance of meeting deadlines.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Shield className="w-12 h-12 text-[#B5FF6D] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                Rigorous testing and quality checks ensure that every project meets the highest standards of excellence.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-[#B5FF6D] transition-colors duration-300">
              <Globe className="w-12 h-12 text-[#B5FF6D] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-[#8A9A5B] leading-relaxed">
                Round-the-clock support to ensure your business operations run smoothly without any interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;