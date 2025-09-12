import React, { useState, useEffect } from "react";

export const HeroAnimation: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  const frames = ["/lovable-uploads/Property 1=Default.svg", "/lovable-uploads/Property 1=Variant2.svg", "/lovable-uploads/Property 1=Variant3.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, 2000); // Change frame every 2 seconds

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className="relative w-[500px] h-[400px] max-xl:w-[450px] max-xl:h-[380px] max-lg:w-[400px] max-lg:h-[350px] max-md:w-[350px] max-md:h-[300px]">
      {frames.map((frame, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentFrame === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
          <img
            src={frame}
            alt={`Animation frame ${index + 1}`}
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error(`Failed to load image: ${frame}`, e);
            }}
          />
        </div>
      ))}

      {/* Frame Indicators */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-3">
        {frames.map((_, index) => (
          <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentFrame === index ? "bg-[#0FA4AF] scale-125" : "bg-[#356D73] hover:bg-[#0FA4AF] hover:scale-110"}`} onClick={() => setCurrentFrame(index)} aria-label={`Go to frame ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
