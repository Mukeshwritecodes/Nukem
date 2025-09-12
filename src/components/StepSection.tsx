import React from "react";

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

export const StepSection: React.FC<StepSectionProps> = ({ stepNumber, title, description, imageSrc, imageAlt, imageOnLeft = false }) => {
  return (
    <article className="flex flex-col items-start gap-6 w-full max-xl:gap-5 max-lg:gap-5 max-md:gap-4">
      <header className="flex flex-col items-start gap-6 w-full max-xl:gap-5 max-lg:gap-5 max-md:gap-4 max-sm:gap-3">
        <div className="flex items-start gap-6 max-xl:gap-5 max-lg:gap-5 max-md:gap-4 max-sm:flex-col max-sm:gap-2">
          <h3 className="text-[#003135] text-[32px] font-normal max-xl:text-[30px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-xl">STEP {stepNumber}:</h3>
          <h4 className="text-[#024950] text-[32px] font-normal max-xl:text-[30px] max-lg:text-[30px] max-md:text-[28px] max-sm:text-xl">{title}</h4>
        </div>
        <div className="w-full h-px bg-[#356D73]" />
      </header>

      <div className={`flex items-start gap-9 w-full max-2xl:gap-8 max-xl:gap-8 max-lg:gap-7 max-md:flex-col max-md:gap-6 max-sm:gap-4 ${imageOnLeft ? "flex-row" : "flex-row-reverse"}`}>
        <div className="flex-[1_0_0] text-[#0A8CBF] text-2xl font-normal tracking-[0.96px] max-xl:text-[20px] max-xl:tracking-[0.8px] max-lg:text-[22px] max-lg:tracking-[0.88px] max-md:text-xl max-md:tracking-[0.8px] max-sm:text-base max-sm:tracking-[0.64px] max-sm:px-2">{description}</div>
        <div className="flex-shrink-0 max-md:w-full">
          <img src={imageSrc} alt={imageAlt} className="w-[741px] h-[460px] rounded-2xl max-2xl:w-[680px] max-2xl:h-[422px] max-xl:w-[580px] max-xl:h-[360px] max-lg:w-[500px] max-lg:h-[310px] max-md:w-full max-md:h-[280px] max-sm:h-[220px] object-cover transition-all duration-300" />
        </div>
      </div>
    </article>
  );
};
