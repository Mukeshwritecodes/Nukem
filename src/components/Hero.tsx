import React from "react";
import { Navigation } from "./Navigation";
import { HeroAnimation } from "./HeroAnimation";

interface HeroProps {
  onGetStarted?: () => void;
  onCustomizeWipe?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onCustomizeWipe }) => {
  return (
    <header className="flex flex-col items-start gap-12 w-full box-border px-12 py-6 max-md:gap-8 max-md:px-6 max-md:py-5 max-sm:gap-6 max-sm:px-5 max-sm:py-4">
      <Navigation onGetStarted={onGetStarted} onCustomizeWipe={onCustomizeWipe} />

      <section className="flex items-start gap-20 w-full px-0 py-6 max-xl:gap-16 max-xl:py-5 max-lg:gap-12 max-lg:py-5 max-md:flex-col max-md:gap-12 max-md:py-4 max-sm:gap-10">
        <div className="flex flex-col items-start gap-20 flex-[1_0_0] px-0 py-9 max-xl:gap-16 max-xl:py-7 max-lg:gap-14 max-lg:py-6 max-md:gap-12 max-md:py-5 max-sm:gap-10 max-sm:px-0 max-sm:py-5 max-sm:items-center">
          <div className="flex flex-col items-start gap-9 w-full max-xl:gap-8 max-lg:gap-7 max-md:gap-6 max-sm:items-center max-sm:text-center">
            <h2 className="text-[#003135] text-[48px] font-bold tracking-[-1.92px] w-full max-xl:text-[44px] max-xl:tracking-[-1.76px] max-lg:text-[40px] max-lg:tracking-[-1.6px] max-md:text-[36px] max-md:tracking-[-1.44px] max-sm:text-[28px] max-sm:tracking-[-1.12px]">Securely Wipe Sensitive Data — Tailored for Your System</h2>
            <div className="flex justify-center items-center gap-2.5 w-full pr-[120px] max-xl:pr-[100px] max-lg:pr-[80px] max-md:pr-0">
              <p className="flex-[1_0_0] text-[#024950] text-xl font-normal tracking-[0.8px] max-xl:text-lg max-xl:tracking-[0.72px] max-lg:text-lg max-lg:tracking-[0.72px] max-md:text-lg max-md:tracking-[0.72px] max-sm:text-sm max-sm:tracking-[0.56px]">Generate fully-configured, forensic-resistant wipe scripts in seconds. Safe, simple, and trusted.</p>
            </div>
          </div>

          <button className="flex h-[62px] justify-center items-center gap-2.5 border shadow-[9px_11px_0_0_#003135] cursor-pointer bg-[#0FA4AF] p-6 rounded-2xl border-solid border-[#003135] hover:shadow-[6px_8px_0_0_#003135] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 max-xl:h-[58px] max-xl:p-5 max-lg:h-[56px] max-lg:p-5 max-md:h-[54px] max-md:p-5 max-sm:h-[48px] max-sm:p-4" onClick={onCustomizeWipe} aria-label="Start customizing your wipe configuration">
            <span className="text-[#F3F9F4] text-lg font-bold tracking-[-0.36px] max-xl:text-base max-xl:tracking-[-0.32px] max-lg:text-base max-lg:tracking-[-0.32px] max-md:text-base max-md:tracking-[-0.32px] max-sm:text-sm max-sm:tracking-[-0.28px]">Customize your Wipe</span>
          </button>
        </div>

        <div className="hidden lg:block flex-shrink-0">
          <HeroAnimation />
        </div>
      </section>
    </header>
  );
};
