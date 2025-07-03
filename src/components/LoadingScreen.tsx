import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Massive 3D Tech Grid Background */}
      <div className="absolute inset-0 perspective-[2000px]">
        <div className="absolute inset-0 transform rotateX-75 rotateY-15 scale-150">
          <div className="grid grid-cols-20 gap-2 h-[200vh] w-[200vw] opacity-20">
            {Array.from({ length: 800 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-[#B5FF6D]/30 bg-gradient-to-br from-[#B5FF6D]/5 to-transparent animate-pulse"
                style={{ 
                  animationDelay: `${i * 20}ms`,
                  height: Math.random() * 100 + 50 + 'px'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 perspective-[1000px]">
          <div className="transform rotateY-45 rotateX-30 animate-spin-slow">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/20 to-[#8A9A5B]/20 border-2 border-[#B5FF6D]/50 rounded-lg"></div>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 perspective-[1000px]">
          <div className="transform rotateY-60 rotateX-45 animate-spin-reverse">
            <div className="w-full h-full bg-gradient-to-br from-[#8A9A5B]/20 to-[#B5FF6D]/20 border border-[#B5FF6D]/40 rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-32 left-40 w-20 h-20 perspective-[1000px]">
          <div className="transform rotateY-30 rotateX-60 animate-float">
            <div className="w-full h-full bg-gradient-to-br from-[#B5FF6D]/30 to-transparent border border-[#B5FF6D]/60 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* Main Loading Interface */}
      <div className="relative z-10">
        {/* Massive 3D Logo Container */}
        <div className="relative perspective-[1500px] mb-12">
          <div className="transform rotateX-15 rotateY-5 hover:rotateY-0 transition-transform duration-1000">
            {/* 3D Logo Structure */}
            <div className="relative w-48 h-48 mx-auto">
              {/* Back Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8A9A5B]/30 to-[#B5FF6D]/30 rounded-2xl transform translateZ-[-20px] blur-sm"></div>
              
              {/* Middle Layer */}
              <div className="absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-[#B5FF6D]/50 transform translateZ-[-10px]"></div>
              
              {/* Front Layer */}
              <div className="absolute inset-4 bg-black rounded-lg border border-[#B5FF6D] flex items-center justify-center transform translateZ-[0px]">
                <div className="text-6xl font-bold text-[#B5FF6D] animate-pulse">W</div>
              </div>
              
              {/* Floating Particles */}
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-[#B5FF6D] rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-[#8A9A5B] rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 -right-6 w-2 h-2 bg-[#B5FF6D] rounded-full animate-float-slow"></div>
            </div>
          </div>
        </div>

        {/* Company Loading Interface */}
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white tracking-wider">WEBLANCER</h1>
            <p className="text-[#8A9A5B] text-lg font-light">Digital Innovation Company</p>
          </div>

          {/* Advanced Progress System */}
          <div className="w-96 mx-auto space-y-4">
            {/* Main Progress Bar */}
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#B5FF6D] via-[#8A9A5B] to-[#B5FF6D] transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Loading Stats */}
            <div className="flex justify-between text-sm text-[#8A9A5B]">
              <span>Initializing Systems</span>
              <span>{progress.toFixed(0)}%</span>
            </div>

            {/* Loading Steps */}
            <div className="space-y-1 text-xs text-[#8A9A5B]">
              {progress > 20 && <div className="animate-fade-in">✓ Loading 3D Engine</div>}
              {progress > 40 && <div className="animate-fade-in">✓ Initializing UI Components</div>}
              {progress > 60 && <div className="animate-fade-in">✓ Connecting Services</div>}
              {progress > 80 && <div className="animate-fade-in">✓ Optimizing Performance</div>}
              {progress > 95 && <div className="animate-fade-in text-[#B5FF6D]">✓ Ready to Launch</div>}
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[#B5FF6D]/5 via-transparent to-transparent animate-pulse"></div>
    </div>
  );
};

export default LoadingScreen;