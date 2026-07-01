import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Baby, Stethoscope, Cross, Briefcase, TrendingUp, Calculator } from "lucide-react";
import { PensionCalculatorModal } from "@/components/modals/PensionCalculatorModal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Retirement Benefit",
    key: "retirement",
    shortDesc: "Monthly pension for qualified members reaching retirement age",
    description: "The Retirement benefit is a cash benefit paid to a member who can no longer work due to old age. It is paid either as a monthly pension or a lump sum amount.",
    conditions: [
      "At least 60 years old for optional retirement",
      "65 years old for technical retirement",
      "Separated from employment or ceased self-employment",
      "Paid at least 120 monthly contributions prior to retirement"
    ],
    benefits: [
      "Monthly pension for life (if qualified)",
      "13th month pension every December",
      "Dependent's pension for eligible dependents",
      "Lump sum amount if conditions not met"
    ]
  },
  {
    icon: Shield,
    title: "Disability Benefit",
    key: "disability",
    shortDesc: "Protection for members who lose their capability to work",
    description: "Disability benefit is a cash benefit granted to a member who becomes permanently disabled, either partially or totally.",
    conditions: [
      "Unable to work due to physical or mental disability",
      "Paid at least 36 monthly contributions before semester of disability",
      "Disability must be permanent or expected to last at least 12 months",
      "Medical certification required"
    ],
    benefits: [
      "Monthly pension for permanent total disability",
      "Lump sum for permanent partial disability",
      "Rehabilitation services when applicable",
      "Dependent's allowance"
    ]
  },
  {
    icon: Heart,
    title: "Death Benefit",
    key: "death",
    shortDesc: "Financial support for beneficiaries of deceased members",
    description: "Death benefit is a cash benefit paid to the beneficiaries of a deceased member.",
    conditions: [
      "Member has paid at least 36 monthly contributions",
      "Beneficiaries must be legitimate dependents",
      "Death certificate must be submitted",
      "Claim filed within prescribed period"
    ],
    benefits: [
      "Monthly pension for primary beneficiaries",
      "Funeral grant of up to ₱40,000",
      "Lump sum if monthly pension doesn't qualify",
      "13th month pension in December"
    ]
  },
  {
    icon: Baby,
    title: "Maternity Benefit",
    key: "maternity",
    shortDesc: "Cash allowance for female members during childbirth or miscarriage",
    description: "Maternity benefit is a daily cash allowance granted to female members who are unable to work due to childbirth, miscarriage, or emergency termination of pregnancy.",
    conditions: [
      "Female member who paid at least 3 monthly contributions",
      "Within 12 months before semester of contingency",
      "Notified employer of pregnancy",
      "Member must not be receiving salary during leave"
    ],
    benefits: [
      "Daily cash benefit for 105 days (normal delivery)",
      "120 days for solo parent",
      "60 days for miscarriage",
      "100% of average daily salary credit"
    ]
  },
  {
    icon: Stethoscope,
    title: "Sickness Benefit",
    key: "sickness",
    shortDesc: "Daily allowance during confinement due to injury or illness",
    description: "Sickness benefit is a daily cash allowance paid to a member who is unable to work due to sickness or injury.",
    conditions: [
      "Confined for more than 3 days",
      "Paid at least 3 monthly contributions",
      "Within 12 months before semester of sickness",
      "Employer or member must notify SSS within 5 days"
    ],
    benefits: [
      "90% of average daily salary credit",
      "Payable for a maximum of 120 days in one year",
      "Can be claimed for work-related or non-work-related illness",
      "Direct payment to member or through employer"
    ]
  },
  {
    icon: Cross,
    title: "Funeral Benefit",
    key: "funeral",
    shortDesc: "Cash grant to help with funeral expenses",
    description: "Funeral benefit is a cash benefit granted to help defray the cost of the member's funeral.",
    conditions: [
      "Member has paid at least one monthly contribution",
      "Whoever paid for funeral expenses can claim",
      "Death certificate required",
      "Claim within one year from death"
    ],
    benefits: [
      "₱20,000 for members with less than 36 contributions",
      "₱40,000 for members with 36 or more contributions",
      "Expedited processing available",
      "Can be claimed together with death benefit"
    ]
  },
  {
    icon: Briefcase,
    title: "Unemployment Benefit",
    key: "unemployment",
    shortDesc: "Cash assistance for involuntarily unemployed members (RA 11199)",
    description: "Unemployment Insurance provides cash benefit to qualified displaced or involuntarily unemployed SSS members.",
    conditions: [
      "Involuntarily unemployed",
      "At least 36 monthly contributions",
      "12 contributions in the 18 months before unemployment",
      "Registered at PESO or accredited employment office"
    ],
    benefits: [
      "50% of average monthly salary credit",
      "Maximum of ₱10,000 per month",
      "Up to 2 months of unemployment benefit",
      "One-time availment every 3 years"
    ]
  },
  {
    icon: Calculator,
    title: "Pension Calculator",
    key: "calculator",
    shortDesc: "Estimate your future pension benefits",
    description: "Use our pension calculator to estimate how much you could receive upon retirement based on your contributions.",
    conditions: [],
    benefits: []
  }
];

export default function Benefits() {
  const [selectedBenefit, setSelectedBenefit] = useState("retirement");
  const [showCalculator, setShowCalculator] = useState(false);
  const currentBenefit = benefits.find(b => b.key === selectedBenefit);

  const handleBenefitClick = (key: string) => {
    if (key === "calculator") {
      setShowCalculator(true);
    } else {
      setSelectedBenefit(key);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            BENEFITS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            SSS Benefits & Programs
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Comprehensive protection and financial security for Filipino workers and their families
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit) => (
            <Card
              key={benefit.key}
              onClick={() => handleBenefitClick(benefit.key)}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedBenefit === benefit.key && benefit.key !== "calculator"
                  ? "border-2 border-sss-blue-primary bg-blue-50"
                  : "border-2 border-gray-200 hover:border-sss-blue-primary/40"
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  selectedBenefit === benefit.key && benefit.key !== "calculator"
                    ? "bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent"
                    : "bg-gray-100"
                }`}>
                  <benefit.icon className={`w-7 h-7 ${
                    selectedBenefit === benefit.key && benefit.key !== "calculator"
                      ? "text-white"
                      : "text-sss-blue-primary"
                  }`} />
                </div>
                <h3 className={`font-semibold text-sm ${
                  selectedBenefit === benefit.key && benefit.key !== "calculator"
                    ? "text-sss-blue-primary"
                    : "text-foreground"
                }`}>
                  {benefit.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefit Details */}
        {currentBenefit && currentBenefit.key !== "calculator" && (
          <Card className="border-2 border-sss-blue-primary/20">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center shadow-md">
                  <currentBenefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-sss-blue-primary">{currentBenefit.title}</CardTitle>
                  <CardDescription className="text-base">{currentBenefit.shortDesc}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-sss-blue-primary mb-3">Overview</h3>
                  <p className="text-foreground/80 leading-relaxed">{currentBenefit.description}</p>
                </div>

                {currentBenefit.conditions.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-sss-blue-primary mb-3">Eligibility Conditions</h3>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                      <ul className="space-y-2">
                        {currentBenefit.conditions.map((condition, index) => (
                          <li key={index} className="flex items-start gap-3 text-foreground/80">
                            <div className="w-6 h-6 rounded-full bg-sss-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-semibold text-sss-blue-primary">{index + 1}</span>
                            </div>
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {currentBenefit.benefits.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-sss-blue-primary mb-3">What You'll Receive</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentBenefit.benefits.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                          <Shield className="w-5 h-5 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t">
                  <Button 
                    size="lg"
                    onClick={() => window.open('#', '_blank')}
                    variant="sss-primary"
                  >
                    Apply for {currentBenefit.title}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-3">
                    This is a demonstration. In a real application, this would open the application form.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <PensionCalculatorModal 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </div>
  );
}
