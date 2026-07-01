import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function BranchLocator() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const branches = [
    {
      name: "SSS Main Office",
      address: "East Avenue, Diliman, Quezon City",
      phone: "(02) 8920-6401",
      hours: "Monday to Friday, 8:00 AM - 5:00 PM",
    },
    {
      name: "SSS Makati Branch",
      address: "SSS Building, Ayala Avenue, Makati City",
      phone: "(02) 8899-7777",
      hours: "Monday to Friday, 8:00 AM - 5:00 PM",
    },
    {
      name: "SSS Manila Branch",
      address: "G/F Starmall, EDSA corner Shaw Boulevard, Mandaluyong City",
      phone: "(02) 8531-4166",
      hours: "Monday to Friday, 8:00 AM - 5:00 PM",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          Visit an SSS Branch
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Check out the list of SSS branches and service offices, here and abroad, to find one near you.
        </p>

        <Card className="mb-8 bg-gradient-card">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">
              SSS Branch Network
            </h3>
            <p className="text-muted-foreground">
              The Social Security System has an extensive network of branches, extension offices, and service centers across the Philippines and selected locations abroad. Our offices provide a full range of SSS services including registration, contributions, benefits, and loans.
            </p>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-sss-blue-primary mb-6">Featured Branches</h2>
          <div className="space-y-4">
            {branches.map((branch, index) => (
              <Card key={index} className="hover:shadow-lg-modern transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">
                    {branch.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-muted-foreground">{branch.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Phone className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-muted-foreground">{branch.phone}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Clock className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Office Hours</p>
                        <p className="text-muted-foreground">{branch.hours}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">
              Services Available at Branches
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>SSS Number Registration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Contribution Payment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Loan Application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Benefit Claims</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>ID Card Issuance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Records Verification</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-sss-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <Phone className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">SSS Hotline</p>
                <p className="text-muted-foreground">(02) 8920-6446 to 55</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Mail className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">members_relations@sss.gov.ph</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
