import React from "react";
import { StepSection } from "./StepSection";

export const InstallationGuide: React.FC = () => {
  const steps = [
    {
      stepNumber: 1,
      title: "Configure Your Wipe Settings",
      description: "Use the Nukem Configurator to select your target operating system (Windows, macOS, or Linux), choose the wipe method (Quick, Standard, or Secure), and configure additional security options. Download the generated configuration file that matches your requirements.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/850257730bea46720f7f13422fba30d025ade8f1?width=1482",
      imageAlt: "Configuration selection interface",
      imageOnLeft: false,
    },
    {
      stepNumber: 2,
      title: "Prepare Your Bootable Media",
      description: "Extract the downloaded configuration files and prepare your USB drive, Raspberry Pi Pico, or USB Rubber Ducky. Format the device as FAT32 and ensure it has sufficient storage capacity (minimum 2GB recommended). This will serve as your secure wiping tool.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/01a25ef8526590ffa41a31dcf88bc8cba3b9d0fa?width=1482",
      imageAlt: "Preparing bootable media",
      imageOnLeft: true,
    },
    {
      stepNumber: 3,
      title: "Deploy and Execute the Wipe",
      description: "Copy all configuration files to your prepared device. Boot from the USB drive or connect your USB Rubber Ducky to the target system. The secure wipe process will begin automatically according to your configured settings, ensuring complete data erasure.",
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/d388a1d3e02f40da0ca9af089a2a06f0bca22dfb?width=1482",
      imageAlt: "Executing secure wipe process",
      imageOnLeft: false,
    },
  ];

  return (
    <section id="guide" className="flex flex-col items-start gap-20 w-full box-border px-14 py-[204px] max-xl:gap-18 max-xl:px-12 max-xl:py-[180px] max-lg:gap-16 max-lg:px-10 max-lg:py-[160px] max-md:gap-[60px] max-md:px-6 max-md:py-[120px] max-sm:gap-10 max-sm:px-5 max-sm:py-20">
      <header className="flex flex-col items-start gap-9 w-full max-xl:gap-8 max-lg:gap-7 max-md:gap-6 max-sm:gap-4">
        <h2 className="text-[#003135] text-[40px] font-bold tracking-[-0.8px] w-full max-xl:text-[38px] max-xl:tracking-[-0.76px] max-lg:text-[36px] max-lg:tracking-[-0.72px] max-md:text-[32px] max-md:tracking-[-0.64px] max-sm:text-2xl max-sm:tracking-[-0.48px]">Installation Guide</h2>
        <div className="w-full h-0.5 bg-[#356D73]" />
      </header>

      <div className="flex flex-col gap-20 w-full max-xl:gap-18 max-lg:gap-16 max-md:gap-[60px] max-sm:gap-10">
        {steps.map((step, index) => (
          <StepSection key={step.stepNumber} stepNumber={step.stepNumber} title={step.title} description={step.description} imageSrc={step.imageSrc} imageAlt={step.imageAlt} imageOnLeft={step.imageOnLeft} />
        ))}
      </div>
    </section>
  );
};
