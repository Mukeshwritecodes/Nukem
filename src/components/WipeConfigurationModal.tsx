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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-[#024950] text-4xl font-bold mb-2">Wipe Configuration</DialogTitle>
          <p className="text-[#0FA4AF] text-xl">Customize your secure data wipe</p>
          <div className="w-full h-px bg-[#024950] mt-4" />
        </DialogHeader>

        <div className="space-y-8">
          {/* Operating System Section */}
          <div>
            <h3 className="text-[#024950] text-2xl font-bold mb-4">Operating System</h3>
            <div className="grid grid-cols-3 gap-4">
              {operatingSystems.map((os) => (
                <button key={os.id} onClick={() => setSelectedOS(os.id)} className={`flex flex-col items-center p-6 rounded-lg border-2 transition-all ${selectedOS === os.id ? "border-[#0FA4AF] bg-[#0FA4AF]/10" : "border-[#024950] hover:border-[#0FA4AF]"}`}>
                  <div className="mb-2 w-12 h-12">
                    <img src={os.icon} alt={`${os.name} icon`} className="w-full h-full object-contain" />
                  </div>
                  <span className={`text-lg font-medium ${selectedOS === os.id ? "text-[#0FA4AF]" : "text-[#024950]"}`}>{os.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Wipe Type Section */}
            <div>
              <h3 className="text-[#024950] text-2xl font-bold mb-4">Wipe Type</h3>
              <RadioGroup value={selectedWipeType} onValueChange={setSelectedWipeType} className="space-y-3">
                {wipeTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={type.id} id={type.id} className="border-[#024950] text-[#0FA4AF]" />
                    <Label htmlFor={type.id} className="text-[#0FA4AF] text-lg font-medium cursor-pointer">
                      {type.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Additional Options Section */}
            <div>
              <h3 className="text-[#024950] text-2xl font-bold mb-4">Additional Options</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="metadata-purge" className="text-[#0FA4AF] text-lg font-medium">
                    Metadata Purge
                  </Label>
                  <Switch id="metadata-purge" checked={metadataPurge} onCheckedChange={setMetadataPurge} className="data-[state=checked]:bg-[#0FA4AF]" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="stealth-mode" className="text-[#0FA4AF] text-lg font-medium">
                    Stealth Mode
                  </Label>
                  <Switch id="stealth-mode" checked={stealthMode} onCheckedChange={setStealthMode} className="data-[state=checked]:bg-[#0FA4AF]" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-6">
            <Button onClick={handleDownload} className="w-full h-14 bg-[#0FA4AF] hover:bg-[#0A8CBF] text-white text-lg font-bold rounded-xl" disabled={!selectedOS}>
              <Download className="w-5 h-5 mr-2" />
              Download Script
            </Button>
            <Button onClick={handlePreview} variant="outline" className="w-full h-14 border-[#0FA4AF] text-[#0FA4AF] hover:bg-[#0FA4AF] hover:text-white text-lg font-bold rounded-xl" disabled={!selectedOS}>
              <Eye className="w-5 h-5 mr-2" />
              Preview Script
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
