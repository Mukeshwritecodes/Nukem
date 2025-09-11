import React from 'react';
import { Navigation } from './Navigation';
import { RevolvingFeatures } from './RevolvingFeatures';

interface HeroProps {
  onGetStarted?: () => void;
  onCustomizeWipe?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onCustomizeWipe }) => {
  return (
    <header className="flex flex-col items-start gap-12 w-full box-border px-12 py-6 max-md:gap-8 max-md:px-6 max-md:py-5 max-sm:gap-6 max-sm:px-5 max-sm:py-4">
      <Navigation onGetStarted={onGetStarted} />
      
      <section className="flex items-start gap-20 w-full px-0 py-6 max-md:flex-col max-md:gap-10">
        <div className="flex flex-col items-start gap-20 flex-[1_0_0] px-0 py-9 max-sm:gap-10 max-sm:px-0 max-sm:py-5">
          <div className="flex flex-col items-start gap-9 w-full">
            <h2 className="text-[#003135] text-[64px] font-bold tracking-[-2.56px] w-full max-md:text-5xl max-md:tracking-[-1.92px] max-sm:text-[32px] max-sm:tracking-[-1.28px]">
              Securely Wipe Sensitive Data — Tailored for Your System
            </h2>
            <div className="flex justify-center items-center gap-2.5 w-full pr-[120px] max-md:pr-0">
              <p className="flex-[1_0_0] text-[#024950] text-2xl font-normal tracking-[0.96px] max-md:text-xl max-md:tracking-[0.8px] max-sm:text-base max-sm:tracking-[0.64px]">
                Generate fully-configured, forensic-resistant wipe scripts in seconds. Safe, simple, and trusted.
              </p>
            </div>
          </div>
          
          <button
            className="flex h-[62px] justify-center items-center gap-2.5 border shadow-[9px_11px_0_0_#003135] cursor-pointer bg-[#0FA4AF] p-6 rounded-2xl border-solid border-[#003135] hover:shadow-[6px_8px_0_0_#003135] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
            onClick={onCustomizeWipe}
            aria-label="Start customizing your wipe configuration"
          >
            <span className="text-[#F3F9F4] text-xl font-bold tracking-[-0.4px] max-sm:text-lg max-sm:tracking-[-0.36px]">
              Customize your Wipe
            </span>
          </button>
        </div>
        
        <RevolvingFeatures />
      </section>
    </header>
  );
};
