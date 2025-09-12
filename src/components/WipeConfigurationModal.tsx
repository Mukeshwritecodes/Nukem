import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Download, Eye } from "lucide-react";

interface WipeConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WipeConfigurationModal: React.FC<WipeConfigurationModalProps> = ({ isOpen, onClose }) => {
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedWipeType, setSelectedWipeType] = useState("quick");
  const [metadataPurge, setMetadataPurge] = useState(true);
  const [stealthMode, setStealthMode] = useState(true);

  const operatingSystems = [
    { id: "windows", name: "Windows", icon: "/lovable-uploads/Vector.png" },
    { id: "linux", name: "Linux", icon: "/lovable-uploads/Vector-1.png" },
    { id: "macos", name: "MacOS", icon: "/lovable-uploads/apple.png" },
  ];

  const wipeTypes = [
    { id: "quick", name: "Quick Wipe" },
    { id: "deep", name: "Deep Wipe" },
    { id: "ssd-aware", name: "SSD-Aware Wipe" },
    { id: "standard", name: "Standard Wipe" },
    { id: "secure", name: "Secure Wipe" },
    { id: "multilayered", name: "Multilayered Wipe" },
  ];

  const handleDownload = () => {
    alert("Download would start here with the configured settings!");
    onClose();
  };

  const handlePreview = () => {
    alert("Script preview would be shown here!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto max-md:max-w-[95vw] max-sm:max-w-[98vw]">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-[#024950] text-4xl font-bold mb-2 max-md:text-3xl max-sm:text-2xl">Wipe Configuration</DialogTitle>
          <p className="text-[#0FA4AF] text-xl max-md:text-lg max-sm:text-base">Customize your secure data wipe</p>
          <div className="w-full h-px bg-[#024950] mt-4" />
        </DialogHeader>

        <div className="space-y-8 max-md:space-y-6 max-sm:space-y-4">
          {/* Operating System Section */}
          <div>
            <h3 className="text-[#024950] text-2xl font-bold mb-4 max-md:text-xl max-sm:text-lg">Operating System</h3>
            <div className="flex gap-4 justify-left max-sm:justify-center max-sm:flex-wrap">
              {operatingSystems.map((os) => (
                <button key={os.id} onClick={() => setSelectedOS(os.id)} className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all w-20 h-20 max-sm:w-16 max-sm:h-16 ${selectedOS === os.id ? "border-[#0FA4AF] bg-[#0FA4AF]/10" : "border-[#024950] hover:border-[#0FA4AF]"}`}>
                  <div className="w-6 h-6 mb-1 max-sm:w-5 max-sm:h-5">
                    <img src={os.icon} alt={`${os.name} icon`} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-xs font-medium text-center max-sm:text-[10px] ${selectedOS === os.id ? "text-[#0FA4AF]" : "text-[#024950]"}`}>{os.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-6">
            {/* Wipe Type Section */}
            <div>
              <h3 className="text-[#024950] text-2xl font-bold mb-4 max-md:text-xl max-sm:text-lg">Wipe Type</h3>
              <RadioGroup value={selectedWipeType} onValueChange={setSelectedWipeType} className="space-y-3 max-sm:space-y-2">
                {wipeTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3 max-sm:space-x-2">
                    <RadioGroupItem value={type.id} id={type.id} className="border-[#024950] text-[#0FA4AF] max-sm:w-4 max-sm:h-4" />
                    <Label htmlFor={type.id} className="text-[#0FA4AF] text-lg font-medium cursor-pointer max-md:text-base max-sm:text-sm">
                      {type.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Additional Options Section */}
            <div>
              <h3 className="text-[#024950] text-2xl font-bold mb-4 max-md:text-xl max-sm:text-lg">Additional Options</h3>
              <div className="space-y-6 max-sm:space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="metadata-purge" className="text-[#0FA4AF] text-lg font-medium max-md:text-base max-sm:text-sm">
                    Metadata Purge
                  </Label>
                  <Switch id="metadata-purge" checked={metadataPurge} onCheckedChange={setMetadataPurge} className="data-[state=checked]:bg-[#0FA4AF] max-sm:w-8 max-sm:h-4" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="stealth-mode" className="text-[#0FA4AF] text-lg font-medium max-md:text-base max-sm:text-sm">
                    Stealth Mode
                  </Label>
                  <Switch id="stealth-mode" checked={stealthMode} onCheckedChange={setStealthMode} className="data-[state=checked]:bg-[#0FA4AF] max-sm:w-8 max-sm:h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-6 max-sm:pt-4">
            <Button onClick={handleDownload} className="w-full h-14 bg-[#0FA4AF] hover:bg-[#0A8CBF] text-white text-lg font-bold rounded-xl max-md:h-12 max-md:text-base max-sm:h-10 max-sm:text-sm" disabled={!selectedOS}>
              <Download className="w-5 h-5 mr-2 max-sm:w-4 max-sm:h-4" />
              Download Script
            </Button>
            <Button onClick={handlePreview} variant="outline" className="w-full h-14 border-[#0FA4AF] text-[#0FA4AF] hover:bg-[#0FA4AF] hover:text-white text-lg font-bold rounded-xl max-md:h-12 max-md:text-base max-sm:h-10 max-sm:text-sm" disabled={!selectedOS}>
              <Eye className="w-5 h-5 mr-2 max-sm:w-4 max-sm:h-4" />
              Preview Script
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
