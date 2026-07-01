import { useState } from "react";
import { AlertTriangle, X, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function DisclaimerBanner() {
  const [isMinimized, setIsMinimized] = useState(false);

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 z-50 bg-warning text-white p-3 rounded-full shadow-lg-modern hover:scale-110 transition-all"
        aria-label="Show disclaimer"
      >
        <Info className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-warning text-white shadow-lg-modern animate-slide-up">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm md:text-base">IMPORTANT NOTICE</h3>
            <p className="text-xs md:text-sm mt-1 leading-relaxed">
              This website is a conceptual redesign created strictly for educational and portfolio purposes. 
              It is not affiliated with, endorsed by, or an official representation of the Republic of the Philippines Social Security System.{" "}
              <Link to="/disclaimer" className="underline hover:text-white/90 font-medium">
                Read full disclaimer
              </Link>
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 hover:bg-white/20 text-white h-8 w-8"
            onClick={() => setIsMinimized(true)}
            aria-label="Minimize disclaimer"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
