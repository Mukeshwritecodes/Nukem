import React from "react";
import { RevolvingFeatures } from "./RevolvingFeatures";

export const Benefits: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-16 w-full box-border px-14 py-[120px] max-xl:gap-14 max-xl:px-12 max-xl:py-[100px] max-lg:gap-12 max-lg:px-10 max-lg:py-[100px] max-md:gap-10 max-md:px-6 max-md:py-[80px] max-sm:gap-8 max-sm:px-5 max-sm:py-16">
      <header className="flex flex-col items-center gap-6 w-full text-center max-xl:gap-5 max-lg:gap-5 max-md:gap-4 max-sm:gap-3">
        <h2 className="text-[#003135] text-[40px] font-bold tracking-[-0.8px] w-full max-xl:text-[38px] max-xl:tracking-[-0.76px] max-lg:text-[36px] max-lg:tracking-[-0.72px] max-md:text-[32px] max-md:tracking-[-0.64px] max-sm:text-2xl max-sm:tracking-[-0.48px]">Why Choose Nukem Configurator?</h2>
        <p className="text-[#024950] text-xl font-normal tracking-[0.8px] max-w-3xl max-xl:text-lg max-xl:tracking-[0.72px] max-lg:text-lg max-lg:tracking-[0.72px] max-md:text-lg max-md:tracking-[0.72px] max-sm:text-base max-sm:tracking-[0.64px] max-sm:px-4">Experience the power of secure data wiping with our comprehensive solution designed for professionals and organizations.</p>
        <div className="w-24 h-1 bg-[#0FA4AF] mt-4 max-sm:mt-2" />
      </header>

      <div className="flex justify-center w-full max-w-7xl">
        <RevolvingFeatures />
      </div>
    </section>
  );
};
