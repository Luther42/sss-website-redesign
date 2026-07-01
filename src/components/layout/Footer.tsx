import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Youtube, Instagram, Linkedin, Mail, Phone, ArrowUp, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const footerLinks = {
  about: [
    { name: "About SSS", href: "/about" },
    { name: "Freedom of Information", href: "/foi" },
    { name: "Republic of the Philippines", href: "#" },
  ],
  services: [
    { name: "Open Data Portal", href: "#" },
    { name: "Official Gazette", href: "#" },
    { name: "GOV.PH", href: "#" },
  ],
  government: [
    { name: "Office of the President", href: "#" },
    { name: "Office of the Vice President", href: "#" },
    { name: "Senate of the Philippines", href: "#" },
    { name: "House of Representatives", href: "#" },
    { name: "Supreme Court", href: "#" },
    { name: "Court of Appeals", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [govDialog, setGovDialog] = useState<{ open: boolean; name: string }>({ open: false, name: "" });

  const handleGovLinkClick = (name: string) => {
    setGovDialog({ open: true, name });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/6a66.png" 
                alt="SSS Logo" 
                className="h-10 w-auto"
                crossOrigin="anonymous"
              />
              <div>
                <div className="text-xs text-muted-foreground">Republic of the Philippines</div>
                <div className="text-sm font-semibold text-sss-blue-primary">SSS</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              SSS Building, East Avenue
              <br />
              Diliman, Quezon City, Philippines
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>1455</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-xs">member_relations@sss.gov.ph</span>
              </div>
            </div>
          </div>

          {/* About Government */}
          <div>
            <h3 className="font-semibold text-sm mb-4">ABOUT GOVERNMENT</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-sss-blue-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">GOVERNMENT LINKS</h3>
            <ul className="space-y-2">
              {footerLinks.government.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleGovLinkClick(link.name)}
                    className="text-sm text-muted-foreground hover:text-sss-blue-primary transition-colors text-left flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-semibold text-sm mb-4">FOLLOW US ON:</h3>
            <div className="flex gap-2 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-sss-blue-primary hover:text-white hover:border-sss-blue-primary transition-all hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <h3 className="font-semibold text-sm mb-3">FOR INQUIRIES:</h3>
            <div className="text-sm space-y-1">
              <p className="text-muted-foreground">Contact Center: 1455</p>
              <p className="text-muted-foreground">Trunkline: (02) 8920-6446 to 55</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              SSS Copyright © 2025.{" "}
              <Link to="/terms" className="hover:text-sss-blue-primary">
                Terms of Service
              </Link>
              {" | "}
              <Link to="/disclaimer" className="hover:text-sss-blue-primary">
                Data Privacy Policy
              </Link>
            </div>
            <Button
              onClick={scrollToTop}
              variant="sss-outline"
              size="sm"
              className="gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Educational Disclaimer */}
      <div className="bg-sss-blue-50 py-4 text-center text-xs text-muted-foreground">
        <div className="container mx-auto px-4">
          This is an educational concept project. Not affiliated with the official SSS.{" "}
          <Link to="/disclaimer" className="text-sss-blue-primary hover:underline font-medium">
            View full disclaimer
          </Link>
        </div>
      </div>

      {/* Government Link Demo Dialog */}
      <Dialog open={govDialog.open} onOpenChange={(open) => setGovDialog({ open, name: govDialog.name })}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-full bg-sss-blue-primary/10 flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-sss-blue-primary" />
              </div>
              <DialogTitle className="text-lg text-sss-blue-primary">External Link Notice</DialogTitle>
            </div>
            <DialogDescription className="text-left space-y-3 pt-2">
              <p className="text-foreground font-medium">
                "{govDialog.name}"
              </p>
              <p className="text-muted-foreground">
                In the actual SSS website, this link would redirect you to the official{" "}
                <span className="font-semibold text-sss-blue-primary">{govDialog.name}</span> government website or open a related PDF document.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-2">
                <ExternalLink className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-yellow-800">
                  <span className="font-semibold">For Demonstration Purposes Only.</span> This is a university project concept redesign of the SSS website. No actual external navigation is implemented.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end pt-2">
            <Button variant="sss-primary" size="sm" onClick={() => setGovDialog({ open: false, name: "" })}>
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
