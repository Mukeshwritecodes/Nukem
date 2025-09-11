import React from 'react';
import { StepSection } from './StepSection';

export const InstallationGuide: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Choose Your Configuration",
      description: "Select the OS, Wipe Type and other additional settings according to the use. NOTE: Download the correct OS file, other files may cause unexpected errors.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/850257730bea46720f7f13422fba30d025ade8f1?width=1482",
      imageAlt: "Configuration selection interface",
      imageOnLeft: false
    },
    {
      stepNumber: 2,
      title: "Unzip the folder",
      description: "To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/01a25ef8526590ffa41a31dcf88bc8cba3b9d0fa?width=1482",
      imageAlt: "Unzipping folder process",
      imageOnLeft: true
    },
    {
      stepNumber: 3,
      title: "Move the Files into the USB / Ducky / Pico",
      description: "To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game To screen record on Windows, use the built-in Xbox Game.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/d388a1d3e02f40da0ca9af089a2a06f0bca22dfb?width=1482",
      imageAlt: "Moving files to USB device",
      imageOnLeft: false
    }
  ];

  return (
    <section 
      id="guide"
      className="flex flex-col items-start gap-20 w-full box-border px-14 py-[204px] max-md:gap-[60px] max-md:px-6 max-md:py-[120px] max-sm:gap-10 max-sm:px-5 max-sm:py-20"
    >
      <header className="flex flex-col items-start gap-9 w-full">
        <h2 className="text-[#003135] text-[40px] font-bold tracking-[-0.8px] w-full max-md:text-[32px] max-md:tracking-[-0.64px] max-sm:text-2xl max-sm:tracking-[-0.48px]">
          Installation Guide
        </h2>
        <div className="w-full h-0.5 bg-[#356D73]" />
      </header>
      
      {steps.map((step, index) => (
        <StepSection
          key={step.stepNumber}
          stepNumber={step.stepNumber}
          title={step.title}
          description={step.description}
          imageSrc={step.imageSrc}
          imageAlt={step.imageAlt}
          imageOnLeft={step.imageOnLeft}
        />
      ))}
    </section>
  );
};
