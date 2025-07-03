import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Users, Award, TrendingUp } from 'lucide-react';

const founders = [
  {
    name: 'Your Name',
    title: 'Co-Founder & CEO',
    image: '', // Add image path if available
    story: `
      I started this journey with a vision to transform businesses through technology. My passion for innovation and problem-solving led me to build solutions that empower others to grow and succeed. Together with my co-founder, we turned our dreams into reality, overcoming challenges and celebrating every milestone along the way.
    `
  },
  {
    name: 'Friend Name',
    title: 'Co-Founder & CTO',
    image: '', // Add image path if available
    story: `
      From late-night brainstorming sessions to launching our first product, this journey has been nothing short of extraordinary. My love for coding and building scalable systems drives me every day. With a shared vision and relentless determination, we built something that makes a difference.
    `
  }
];

const Founders: React.FC = () => {
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
      className="min-h-screen bg-black pt-24 pb-16"
    >
      <section className="max-w-5xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#B5FF6D]/10 border border-[#B5FF6D]/30 rounded-full mb-8">
          <Users className="w-5 h-5 text-[#B5FF6D]" />
          <span className="text-[#B5FF6D] font-semibold">Founders' Story</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Journey as Founders</h1>
        <p className="text-xl text-[#8A9A5B] max-w-3xl mx-auto">
          Discover how two friends turned a shared vision into a thriving company, overcoming challenges and celebrating every win together.
        </p>
      </section>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {founders.map((founder, idx) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 + idx * 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full bg-[#B5FF6D]/20 border-4 border-[#B5FF6D] flex items-center justify-center mb-6">
              <User className="w-12 h-12 text-[#B5FF6D]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{founder.name}</h2>
            <h3 className="text-[#8A9A5B] font-semibold mb-4">{founder.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-4">{founder.story}</p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <Award className="w-6 h-6 text-[#B5FF6D]" />
              <TrendingUp className="w-6 h-6 text-[#B5FF6D]" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Founders; 