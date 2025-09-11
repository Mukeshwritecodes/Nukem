import React from 'react';

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

export const StepSection: React.FC<StepSectionProps> = ({
  stepNumber,
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false
}) => {
  return (
    <article className="flex flex-col items-start gap-6 w-full">
      <header className="flex flex-col items-start gap-6 w-full">
        <div className="flex items-start gap-6 max-sm:flex-col max-sm:gap-2">
          <h3 className="text-[#003135] text-[32px] font-normal max-md:text-[28px] max-sm:text-xl">
            STEP {stepNumber}:
          </h3>
          <h4 className="text-[#024950] text-[32px] font-normal max-md:text-[28px] max-sm:text-xl">
            {title}
          </h4>
        </div>
        <div className="w-full h-px bg-[#356D73]" />
      </header>
      
      <div className={`flex h-[460px] items-start gap-9 w-full max-md:flex-col max-md:h-auto max-md:gap-6 ${imageOnLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex-[1_0_0] text-[#0A8CBF] text-2xl font-normal tracking-[0.96px] max-md:text-xl max-md:tracking-[0.8px] max-sm:text-base max-sm:tracking-[0.64px]">
          {description}
        </div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-[741px] h-[460px] shrink-0 rounded-2xl max-md:w-full max-md:h-auto"
        />
      </div>
    </article>
  );
};
