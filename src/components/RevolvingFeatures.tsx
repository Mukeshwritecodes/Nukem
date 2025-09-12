import React, { useState, useEffect } from "react";
import easySetupImg from "/lovable-uploads/easy.png";
import efficientImg from "/lovable-uploads/eff.png";
import freeImg from "/lovable-uploads/free.png";
import secureImg from "/lovable-uploads/secure.png";

interface Feature {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    id: "free",
    title: "Free",
    image: freeImg,
    alt: "Free",
  },
  {
    id: "easy-setup",
    title: "Easy Set-up",
    image: easySetupImg,
    alt: "Easy Setup",
  },
  {
    id: "secure",
    title: "Secure",
    image: secureImg,
    alt: "Secure",
  },
  {
    id: "efficient",
    title: "Efficient",
    image: efficientImg,
    alt: "Efficient",
  },
];

export const RevolvingFeatures: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
      {/* Desktop: Circular Layout */}
      <div className="hidden lg:block">
        <div className="flex w-[363px] items-center justify-center p-2.5">
          <div className="w-[536px] h-[622px] shrink-0 relative">
            {features.map((feature, index) => {
              // Calculate the feature's position in the clockwise rotation
              const displayIndex = (index + currentFeature) % features.length;

              const positions = [
                // 0: Top visible position - most prominent
                "opacity-100 scale-100 left-[183px] top-0",
                // 1: Middle-left visible position - slightly smaller
                "opacity-100 scale-90 left-[13px] top-[200px]",
                // 2: Bottom visible position - smallest visible
                "opacity-100 scale-80 left-[183px] top-[400px]",
                // 3: Right position - now visible
                "opacity-100 scale-90 left-[350px] top-[200px]",
              ];

              return (
                <div key={feature.id} className={`transform flex w-[150px] h-[180px] flex-col justify-center items-center gap-4 shrink-0 absolute transition-all duration-700 ease-in-out ${positions[displayIndex]}`}>
                  <div className="w-[135px] h-[118px] flex items-center justify-center">
                    <img src={feature.image} alt={feature.alt} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full">{feature.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Clean Carousel Layout */}
      <div className="lg:hidden w-full max-w-md mx-auto overflow-hidden relative">
        {/* Carousel Container */}
        <div className={`flex transition-transform duration-700 ease-in-out carousel-transform-${currentFeature}`}>
          {features.map((feature, index) => (
            <div key={feature.id} className="w-full flex-shrink-0 px-4">
              <div className="flex flex-col items-center gap-6 py-8 min-h-[240px] justify-center max-md:min-h-[220px] max-md:gap-5 max-md:py-7 max-sm:min-h-[200px] max-sm:gap-4 max-sm:py-6">
                <div className="w-20 h-20 flex items-center justify-center max-md:w-18 max-md:h-18 max-sm:w-16 max-sm:h-16">
                  <img src={feature.image} alt={feature.alt} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[#0A8CBF] text-2xl font-bold tracking-[0.8px] text-center max-md:text-xl max-md:tracking-[0.72px] max-sm:text-xl max-sm:tracking-[0.64px]">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={() => setCurrentFeature(currentFeature === 0 ? features.length - 1 : currentFeature - 1)} className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 shadow-sm max-md:w-7 max-md:h-7 max-sm:w-6 max-sm:h-6 max-sm:left-1" aria-label="Previous feature">
          <svg className="w-4 h-4 text-[#0FA4AF] max-md:w-3.5 max-md:h-3.5 max-sm:w-3 max-sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button onClick={() => setCurrentFeature(currentFeature === features.length - 1 ? 0 : currentFeature + 1)} className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 z-10 shadow-sm max-md:w-7 max-md:h-7 max-sm:w-6 max-sm:h-6 max-sm:right-1" aria-label="Next feature">
          <svg className="w-4 h-4 text-[#0FA4AF] max-md:w-3.5 max-md:h-3.5 max-sm:w-3 max-sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Feature Indicators */}
      <div className="flex gap-3 max-md:gap-2.5 max-sm:gap-2">
        {features.map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 max-md:w-2.5 max-md:h-2.5 max-sm:w-2 max-sm:h-2 ${currentFeature === index ? "bg-[#0FA4AF] scale-125" : "bg-[#356D73] hover:bg-[#0FA4AF] hover:scale-110"}`} onClick={() => setCurrentFeature(index)} aria-label={`Go to feature ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
