import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, DollarSign, Heart, Home } from "lucide-react";
import { ApplicationFormModal } from "@/components/modals/ApplicationFormModal";

export default function ApplyBenefitLoan() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          Apply for a Benefit or Loan
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          We're here for you and your family. Know if you're qualified for an SSS benefit or loan, the requirements you need to prepare, and how to apply, wherever you are.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-sss-blue-primary" />
                </div>
                <CardTitle>Salary Loan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get short-term financial assistance to meet immediate needs. Easy application process with fast approval.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Loanable amount up to 2 months salary</li>
                <li>• 24-month payment term</li>
                <li>• 10% annual interest rate</li>
              </ul>
              <Button 
                variant="sss-primary" 
                className="w-full"
                onClick={() => setShowApplicationModal(true)}
              >
                Apply for Salary Loan
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Calamity Loan</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Special loan assistance for members affected by natural disasters or calamities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                <li>• Up to 1 month salary credit</li>
                <li>• 24-month payment term</li>
                <li>• 10% annual interest rate</li>
              </ul>
              <Button variant="outline" className="w-full">
                Check Eligibility
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary flex items-center gap-3">
              <Gift className="w-7 h-7" />
              SSS Benefits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-2">Sickness Benefit</h4>
              <p className="text-muted-foreground">
                Daily cash allowance for members who are unable to work due to sickness or injury for a minimum of 4 days.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Maternity Benefit</h4>
              <p className="text-muted-foreground">
                Cash benefit for female members who are unable to work due to childbirth, miscarriage, or emergency termination of pregnancy. Includes 105 days of paid maternity leave.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Retirement Benefit</h4>
              <p className="text-muted-foreground">
                Monthly pension or lump sum payment for members who can no longer work due to old age. Available at age 60 with at least 120 contributions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Disability Benefit</h4>
              <p className="text-muted-foreground">
                Cash benefit for members who become permanently disabled, either partially or totally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Death Benefit</h4>
              <p className="text-muted-foreground">
                Monthly pension or lump sum payment to the beneficiaries of a deceased member. Includes funeral benefit of ₱60,000.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary flex items-center gap-3">
              <Heart className="w-7 h-7" />
              General Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Valid SSS membership with sufficient contributions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Accomplished and signed application form</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Valid government-issued ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sss-blue-primary">•</span>
                <span>Supporting documents specific to the benefit/loan applied for</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-sss-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">
            Need More Information?
          </h3>
          <p className="text-muted-foreground mb-6">
            Visit our Benefits page for detailed information on each benefit program, or contact our hotline for personalized assistance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="sss-primary" size="lg">
              View All Benefits
            </Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <ApplicationFormModal 
        open={showApplicationModal}
        onOpenChange={setShowApplicationModal}
        applicationType="salary-loan"
      />
    </div>
  );
}
