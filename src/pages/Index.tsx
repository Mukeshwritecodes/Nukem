import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { InstallationGuide } from '@/components/InstallationGuide';
import { WipeConfigurationModal } from '@/components/WipeConfigurationModal';

const Index = () => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleGetStarted = () => {
    // Scroll to installation guide
    document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomizeWipe = () => {
    setShowConfigModal(true);
  };

  return (
    <div className="flex w-full flex-col items-start min-h-screen bg-white">
      <Hero 
        onGetStarted={handleGetStarted}
        onCustomizeWipe={handleCustomizeWipe}
      />
      
      <main>
        <InstallationGuide />
      </main>
      
      <footer id="contacts" className="w-full bg-[#003135] text-white">
        <div className="flex flex-col items-center gap-8 w-full px-12 py-16 max-md:px-6 max-md:py-12 max-sm:px-5 max-sm:py-8">
          <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
            <h3 className="text-3xl font-bold text-center max-md:text-2xl max-sm:text-xl">
              Contact Us
            </h3>
            <p className="text-lg text-center text-gray-300 max-md:text-base max-sm:text-sm">
              Have questions about secure data wiping? We're here to help.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 max-md:gap-6 max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-semibold text-[#0FA4AF]">Email</h4>
              <p className="text-gray-300">support@securewipe.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-semibold text-[#0FA4AF]">Documentation</h4>
              <p className="text-gray-300">View our complete guides</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h4 className="font-semibold text-[#0FA4AF]">Security</h4>
              <p className="text-gray-300">Enterprise-grade protection</p>
            </div>
          </div>
          
          <div className="w-full h-px bg-gray-600 max-w-4xl"></div>
          
          <div className="flex flex-col items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 SecureWipe. All rights reserved.</p>
            <div className="flex gap-6 max-sm:flex-col max-sm:gap-2 max-sm:text-center">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Security Documentation</span>
            </div>
          </div>
        </div>
      </footer>

      <WipeConfigurationModal 
        isOpen={showConfigModal} 
        onClose={() => setShowConfigModal(false)} 
      />
    </div>
  );
};

export default Index;
