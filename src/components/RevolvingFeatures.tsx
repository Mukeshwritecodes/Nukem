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

// Position definitions for the three visible spots
const positions = [
  { 
    left: '183px', 
    top: '0px', 
    className: 'left-[183px] top-0 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-0 max-sm:w-[120px] max-sm:h-[140px]' 
  },
  { 
    left: '13px', 
    top: '200px', 
    className: 'left-[13px] top-[200px] max-md:left-2.5 max-md:top-[150px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[120px]' 
  },
  { 
    left: '183px', 
    top: '400px', 
    className: 'left-[183px] top-[400px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[300px] max-sm:w-[120px] max-sm:h-[140px] max-sm:top-[200px]' 
  }
];

export const RevolvingFeatures: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 1);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the feature for each position based on rotation
  const getFeatureForPosition = (positionIndex: number) => {
    const featureIndex = (rotation + positionIndex) % features.length;
    return features[featureIndex];
  };

  return (
    <div className="flex w-[363px] items-center gap-2.5 p-2.5 max-md:w-full">
      <div className="w-[536px] h-[622px] shrink-0 relative max-md:w-full max-md:h-[400px] max-sm:h-[300px] overflow-hidden">
        {/* Render all features with their animated positions */}
        {features.map((feature, featureIndex) => {
          // Calculate which position this feature should be in
          const positionIndex = (featureIndex - rotation + features.length) % features.length;
          
          // Only show features in the first 3 positions
          if (positionIndex >= 3) return null;
          
          const position = positions[positionIndex];
          
          return (
            <div
              key={feature.id}
              className={`flex w-[150px] h-[180px] flex-col justify-center items-center gap-4 shrink-0 absolute transition-all duration-700 ease-in-out ${position.className}`}
              style={{
                transform: `translate3d(0, 0, 0)`,
                opacity: 1
              }}
            >
              <div className="w-[135px] h-[118px] flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out"
                />
              </div>
              <span className="text-[#0A8CBF] text-center text-2xl font-bold tracking-[0.96px] w-full max-sm:text-lg max-sm:tracking-[0.72px] transition-all duration-700 ease-in-out">
                {feature.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};