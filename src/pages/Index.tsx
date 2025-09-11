import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { InstallationGuide } from '@/components/InstallationGuide';

const Index = () => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const handleGetStarted = () => {
    // Scroll to installation guide
    document.getElementById('guide')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCustomizeWipe = () => {
    // This could open a configuration modal or navigate to a config page
    setShowConfigModal(true);
    // For now, just show an alert
    alert('Configuration interface would open here. This is where users would select their OS, wipe type, and other settings.');
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

      {/* Configuration Modal - Simple implementation */}
      {showConfigModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-[#003135] text-2xl font-bold mb-4">Configuration Options</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-[#024950] text-sm font-medium mb-2">
                  Operating System
                </label>
                <select className="w-full p-3 border border-[#0A8CBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]">
                  <option value="">Select OS</option>
                  <option value="windows">Windows</option>
                  <option value="linux">Linux</option>
                  <option value="macos">macOS</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[#024950] text-sm font-medium mb-2">
                  Wipe Type
                </label>
                <select className="w-full p-3 border border-[#0A8CBF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0FA4AF]">
                  <option value="">Select Wipe Type</option>
                  <option value="quick">Quick Wipe</option>
                  <option value="secure">Secure Wipe</option>
                  <option value="forensic">Forensic Wipe</option>
                </select>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="flex-1 px-4 py-3 border border-[#0A8CBF] text-[#0A8CBF] rounded-lg hover:bg-[#0A8CBF] hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Configuration saved! Download would start here.');
                    setShowConfigModal(false);
                  }}
                  className="flex-1 px-4 py-3 bg-[#0FA4AF] text-white rounded-lg hover:bg-[#0A8CBF] transition-colors"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
