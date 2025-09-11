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
      
      <footer id="contacts" className="w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c98a937bb62a34a070abb19d4ed4a4cd7353ff90?width=2880"
          alt="Footer"
          className="flex flex-col items-center gap-6 w-full"
        />
      </footer>

      <WipeConfigurationModal 
        isOpen={showConfigModal} 
        onClose={() => setShowConfigModal(false)} 
      />
    </div>
  );
};

export default Index;
