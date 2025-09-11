import React, { useState, useEffect } from 'react';
import easySetupImg from '/lovable-uploads/084af83f-5d04-4ea9-a9bd-5184d08c9e8d.png';
import efficientImg from '/lovable-uploads/614a4938-111b-4e4e-b7fa-718ff67df7f6.png';
import freeImg from '/lovable-uploads/11fa2dbb-e6f2-4776-85b2-179a66b46d3a.png';
import secureImg from '/lovable-uploads/6589be81-c4de-4d7f-a6d4-d3073ea4925a.png';

interface Feature {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const features: Feature[] = [
  {
    id: 'free',
    title: 'Free',
    image: freeImg,
    alt: 'Free'
  },
  {
    id: 'easy-setup',
    title: 'Easy Set-up',
    image: easySetupImg,
    alt: 'Easy Setup'
  },
  {
    id: 'secure',
    title: 'Secure',
    image: secureImg,
    alt: 'Secure'
  },
  {
    id: 'efficient',
    title: 'Efficient',
    image: efficientImg,
    alt: 'Efficient'
  }
];

export const RevolvingFeatures: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % features.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get 3 visible features starting from startIndex
  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % features.length;
      visible.push(features[index]);
    }
    return visible;
  };

  const visibleFeatures = getVisibleFeatures();

  return (
    <div className="flex w-[363px] items-center gap-2.5 p-2.5 max-md:w-full">
      <div className="w-[536px] h-[622px] shrink-0 relative max-md:w-full max-md:h-[400px] max-sm:h-[300px]">
        {/* Top Center */}
        <div className="flex w-[150px] h-[180px] flex-col items-center gap-4 shrink-0 absolute left-[183px] top-0 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-0 max-sm:w-[120px] max-sm:h-[140px]">
          <div className="w-[135px] h-[118px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <img
              src={visibleFeatures[0]?.image}
              alt={visibleFeatures[0]?.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full max-sm:text-lg max-sm:tracking-[0.72px]">
            {visibleFeatures[0]?.title}
          </span>
        </div>

        {/* Left */}
        <div className="flex w-[150px] h-[180px] flex-col justify-center items-center gap-2.5 shrink-0 absolute left-[13px] top-[200px] max-md:left-2.5 max-md:top-[150px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[120px]">
          <div className="w-[136px] h-[142px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <img
              src={visibleFeatures[1]?.image}
              alt={visibleFeatures[1]?.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#0A8CBF] text-2xl font-bold tracking-[0.96px] max-sm:text-lg max-sm:tracking-[0.72px]">
            {visibleFeatures[1]?.title}
          </span>
        </div>

        {/* Center Bottom */}
        <div className="flex w-[150px] h-[180px] flex-col justify-center items-center gap-4 shrink-0 absolute left-[183px] top-[400px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[300px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[200px]">
          <div className="w-[150px] h-[135px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <img
              src={visibleFeatures[2]?.image}
              alt={visibleFeatures[2]?.alt}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#0A8CBF] text-2xl font-bold tracking-[0.96px] max-sm:text-lg max-sm:tracking-[0.72px]">
            {visibleFeatures[2]?.title}
          </span>
        </div>
      </div>
    </div>
  );
};