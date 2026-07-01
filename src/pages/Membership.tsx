import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, Briefcase, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const membershipTypes = [
  {
    icon: Briefcase,
    title: "Employed Members",
    description: "Private sector employees working for employers in the Philippines",
    coverage: "Mandatory coverage for all employees earning at least ₱1,000 per month",
    highlights: [
      "Employer and employee share contributions",
      "Coverage starts on employment date",
      "Continuous until separation from employment"
    ]
  },
  {
    icon: UserCheck,
    title: "Self-Employed/Voluntary Members",
    description: "Self-employed, professionals, and those without employers",
    coverage: "Optional but encouraged for income protection and security",
    highlights: [
      "Pay own contributions based on declared income",
      "Flexible payment schedules",
      "Same benefits as employed members"
    ]
  },
  {
    icon: Globe,
    title: "OFW Members",
    description: "Overseas Filipino Workers in land-based and sea-based employment",
    coverage: "Mandatory for land-based OFWs, voluntary for sea-based OFWs",
    highlights: [
      "Special OFW programs and benefits",
      "Flexible contribution payment options",
      "Continued coverage even abroad"
    ]
  },
  {
    icon: Users,
    title: "Non-Working Spouse",
    description: "Spouse of an SSS member who is not employed",
    coverage: "Voluntary coverage to earn own benefits",
    highlights: [
      "Independent benefit entitlement",
      "Same benefit packages available",
      "Affordable contribution rates"
    ]
  }
];

const coverageIncludes = [
  "Retirement benefits upon reaching eligible age",
  "Disability benefits for permanent or temporary disability",
  "Death benefits for beneficiaries",
  "Maternity benefits for female members",
  "Sickness benefits for work-related illness",
  "Funeral grant for deceased members",
  "Unemployment benefits (under certain conditions)",
  "Salary and calamity loan privileges"
];

export default function Membership() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            MEMBERSHIP & COVERAGE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            SSS Membership & Coverage
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Join millions of Filipinos protected by comprehensive social security coverage
          </p>
        </div>
      </div>

      {/* Membership Types */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sss-blue-primary mb-4">Types of Membership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            SSS offers different membership types to accommodate various employment situations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {membershipTypes.map((type, index) => (
            <Card 
              key={index}
              className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center shadow-md">
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-sss-blue-primary">{type.title}</CardTitle>
                </div>
                <p className="text-foreground/80">{type.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <p className="text-sm font-semibold text-sss-blue-primary mb-1">Coverage:</p>
                  <p className="text-sm text-foreground/80">{type.coverage}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-sss-blue-primary mb-2">Key Highlights:</p>
                  <ul className="space-y-1">
                    {type.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Coverage Includes */}
        <Card className="border-2 border-sss-blue-primary/20 mb-12">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <CardTitle className="text-2xl text-sss-blue-primary">What SSS Coverage Includes</CardTitle>
            <p className="text-muted-foreground">Comprehensive protection for you and your family</p>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {coverageIncludes.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-sss-blue-primary/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Who Must Register */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-sss-blue-primary/20">
            <CardHeader>
              <CardTitle className="text-sss-blue-primary">Who Must Register</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                  <span>Employees not over 60 years old earning at least ₱1,000 monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                  <span>Self-employed individuals earning at least ₱1,000 monthly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                  <span>Filipinos employed abroad (except certain categories)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                  <span>Household employers and their domestic helpers</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-sss-blue-primary/20">
            <CardHeader>
              <CardTitle className="text-sss-blue-primary">How to Become a Member</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Register Online or In-Person</p>
                    <p className="text-sm text-muted-foreground">Via MySSS portal or SSS branch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Submit Requirements</p>
                    <p className="text-sm text-muted-foreground">Valid IDs and birth certificate</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Receive SS Number</p>
                    <p className="text-sm text-muted-foreground">Your unique identification number</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Start Contributing</p>
                    <p className="text-sm text-muted-foreground">Begin building your benefits</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Become a Member?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Start your social security journey today and secure your future and your family's welfare
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/become-member')}
              className="group"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
