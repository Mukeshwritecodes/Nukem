import React, { useState } from "react";

interface NavigationProps {
  onGetStarted?: () => void;
  onCustomizeWipe?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onGetStarted, onCustomizeWipe }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-start gap-3 w-full">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-1">
          <h1 className="text-[#003135] text-4xl font-black tracking-[-0.72px] max-sm:text-[24px] max-sm:tracking-[-0.48px]">SecureWipe</h1>
          <span className="text-[#0FA4AF] text-2xl font-normal max-sm:text-lg">Configurator</span>
        </div>

        <div className="flex items-center gap-7 max-md:hidden">
          <button className="text-[#024950] text-base font-normal cursor-pointer hover:text-[#0FA4AF] transition-colors" onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}>
            Contacts
          </button>
          <button className="text-[#024950] text-base font-normal cursor-pointer hover:text-[#0FA4AF] transition-colors" onClick={() => document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" })}>
            Guide
          </button>
          <button className="w-[173px] h-[52px] relative flex items-center justify-center cursor-pointer rounded-lg border-[1.6px] border-solid border-[#0FA4AF] hover:bg-[#0FA4AF] hover:text-white transition-all duration-200 max-lg:w-[150px] max-lg:h-[48px]" onClick={onCustomizeWipe}>
            <span className="text-[#0FA4AF] text-base font-normal hover:text-white max-lg:text-sm">Get Started</span>
          </button>
        </div>

        <button className="md:hidden text-[#024950] text-xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
          ☰
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 w-full p-4 bg-white border-t border-[#0A8CBF]">
          <button
            className="text-[#024950] text-base font-normal text-right hover:text-[#0FA4AF] transition-colors"
            onClick={() => {
              document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            Contacts
          </button>
          <button
            className="text-[#024950] text-base font-normal text-right hover:text-[#0FA4AF] transition-colors"
            onClick={() => {
              document.getElementById("guide")?.scrollIntoView({ behavior: "smooth" });
              setIsMobileMenuOpen(false);
            }}
          >
            Guide
          </button>
          <button
            className="text-[#0FA4AF] text-base font-normal text-right cursor-pointer hover:text-[#024950] transition-colors"
            onClick={() => {
              onCustomizeWipe?.();
              setIsMobileMenuOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      )}

      <div className="w-full h-px bg-[#0A8CBF]" />
    </nav>
  );
};
