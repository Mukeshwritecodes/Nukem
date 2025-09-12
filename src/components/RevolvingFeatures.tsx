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

// Position definitions that create a clockwise rotational path
const positions = [
  // 0: Top visible position - most prominent
  {
    className: "opacity-100 scale-100 left-[183px] top-0 max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-0 max-sm:left-[10px] max-sm:top-0 max-sm:translate-x-0",
  },
  // 1: Middle-left visible position - slightly smaller
  {
    className: "opacity-100 scale-90 left-[13px] top-[200px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[120px] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:top-[80px]",
  },
  // 2: Bottom visible position - smallest visible
  {
    className: "opacity-100 scale-80 left-[183px] top-[400px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[240px] max-sm:right-[10px] max-sm:left-auto max-sm:top-0 max-sm:translate-x-0",
  },
  // 3: Hidden position on the right, for a smooth circular entry/exit
  {
    className: "opacity-0 scale-50 left-[350px] top-[200px] max-md:left-full max-md:top-1/2 max-sm:left-full max-sm:top-1/2",
  },
];

export const RevolvingFeatures: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % features.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-[363px] items-center justify-center p-2.5 max-md:w-full">
      <div className="w-[536px] h-[622px] shrink-0 relative max-md:w-full max-md:h-[400px] max-sm:h-[300px]">
        {features.map((feature, index) => {
          // Calculate the feature's position in the clockwise rotation
          const displayIndex = (index + rotation) % features.length;
          const position = positions[displayIndex];

          return (
            <div key={feature.id} className={`transform flex w-[150px] h-[180px] max-sm:w-[100px] max-sm:h-[120px] flex-col justify-center items-center gap-4 max-sm:gap-2 shrink-0 absolute transition-all duration-700 ease-in-out ${position.className}`}>
              <div className="w-[135px] h-[118px] max-sm:w-[90px] max-sm:h-[78px] flex items-center justify-center">
                <img src={feature.image} alt={feature.alt} className="w-full h-full object-contain" />
              </div>
              <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full max-sm:text-lg max-sm:tracking-[0.72px]">{feature.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
