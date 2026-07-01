import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Home, CloudRain, Calculator, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";

const loanTypes = [
  {
    icon: DollarSign,
    title: "Salary Loan",
    maxAmount: "₱15,000 - ₱40,000",
    term: "24 months",
    description: "Short-term loan for various personal needs with affordable monthly amortization",
    eligibility: [
      "Must have 36 posted monthly contributions (6 months should be within the last 12 months before loan application)",
      "Not more than 65 years old at loan maturity",
      "Not a retiree pensioner or permanently disabled",
      "Has not been granted final SSS benefit"
    ],
    features: [
      "Loan amount based on Monthly Salary Credit (MSC)",
      "10% per annum interest rate",
      "Advance one-month interest deducted",
      "2-year term with 24 monthly installments",
      "Can apply for renewal after 50% payment",
      "Payable through salary deduction or direct payment"
    ],
    loanAmounts: [
      { msc: "₱1,000 - ₱14,999", amount: "₱15,000" },
      { msc: "₱15,000 - ₱19,999", amount: "₱20,000" },
      { msc: "₱20,000 and above", amount: "₱40,000" }
    ]
  },
  {
    icon: CloudRain,
    title: "Calamity Loan",
    maxAmount: "Up to ₱20,000",
    term: "24 months",
    description: "Emergency loan for members affected by natural or man-made calamities",
    eligibility: [
      "Must have 36 posted monthly contributions (6 months within last 12 months)",
      "Residing or working in area declared under state of calamity",
      "Not more than 65 years old at loan maturity",
      "Not a retiree pensioner or permanently disabled"
    ],
    features: [
      "Available when area is under state of calamity",
      "10% per annum interest rate",
      "One-month interest advance deducted",
      "2-year term with 24 monthly installments",
      "Can be granted even with existing salary loan",
      "Processing within 5 banking days"
    ],
    loanAmounts: [
      { msc: "₱1,000 - ₱14,999", amount: "₱10,000" },
      { msc: "₱15,000 and above", amount: "₱20,000" }
    ]
  },
  {
    icon: Home,
    title: "Housing Loan (SSS FlexiFund)",
    maxAmount: "Up to ₱6 Million",
    term: "Up to 30 years",
    description: "Long-term loan program for housing acquisition, construction, or improvement",
    eligibility: [
      "Must be under 65 years old",
      "Dependent on housing loan amount and member's capacity to pay",
      "Must have provident fund and sufficient contributions",
      "Not availed of Pag-IBIG housing loan"
    ],
    features: [
      "For lot purchase, house construction, or home improvement",
      "Competitive interest rates",
      "Long repayment period up to 30 years",
      "Loan amount based on capacity to pay",
      "Property serves as collateral",
      "Insurance coverage included"
    ],
    loanAmounts: []
  }
];

export default function Loans() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <DollarSign className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            LOAN PROGRAMS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            SSS Loan Programs
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Access affordable financial assistance for your personal and family needs
          </p>
        </div>
      </div>

      {/* Loans Overview */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {loanTypes.map((loan, index) => (
            <Card 
              key={index}
              className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center shadow-md">
                  <loan.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-center text-sss-blue-primary">{loan.title}</CardTitle>
                <CardDescription className="text-center">{loan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Maximum Loan Amount</p>
                  <p className="text-xl font-bold text-sss-blue-primary">{loan.maxAmount}</p>
                  <p className="text-xs text-muted-foreground mt-2">Payment Term: {loan.term}</p>
                </div>
                <Button 
                  variant="sss-primary"
                  className="w-full"
                  onClick={() => navigate('/apply-benefit-loan')}
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Information for Each Loan */}
        {loanTypes.map((loan, loanIndex) => (
          <Card key={loanIndex} className="mb-8 border-2 border-sss-blue-primary/20">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
                  <loan.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sss-blue-primary">{loan.title}</CardTitle>
                  <CardDescription>Complete program details and requirements</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Eligibility */}
                <div>
                  <h3 className="text-lg font-semibold text-sss-blue-primary mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Eligibility Requirements
                  </h3>
                  <ul className="space-y-2">
                    {loan.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <div className="w-5 h-5 rounded-full bg-sss-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-sss-blue-primary">{index + 1}</span>
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-sss-blue-primary mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Loan Amount Table */}
              {loan.loanAmounts.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-sss-blue-primary mb-4">Loanable Amounts</h3>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-sss-blue-primary text-white">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold">Monthly Salary Credit</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold">Maximum Loan Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loan.loanAmounts.map((amount, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-blue-50/50"}>
                            <td className="px-6 py-3 text-sm text-foreground/80">{amount.msc}</td>
                            <td className="px-6 py-3 text-sm font-semibold text-sss-blue-primary">{amount.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t">
                <Button 
                  size="lg"
                  onClick={() => navigate('/apply-benefit-loan')}
                  variant="sss-primary"
                >
                  Apply for {loan.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* General Requirements */}
        <Card className="border-2 border-sss-blue-primary/20 mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
            <CardTitle className="text-sss-blue-primary">General Loan Requirements</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Documentary Requirements:</h4>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                    <span>Loan Application Form (duly accomplished)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                    <span>Valid government-issued ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                    <span>Latest payslip or proof of income</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sss-blue-primary mt-0.5 flex-shrink-0" />
                    <span>Additional documents for housing loan</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">How to Apply:</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      1
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">Check Eligibility</p>
                      <p className="text-muted-foreground">Verify your qualification</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      2
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">Apply Online or In-Person</p>
                      <p className="text-muted-foreground">Via MySSS or SSS branch</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      3
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">Submit Requirements</p>
                      <p className="text-muted-foreground">Complete documents needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sss-blue-primary text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                      4
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">Receive Loan Proceeds</p>
                      <p className="text-muted-foreground">Via bank account or check</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Reminders */}
        <Alert className="border-sss-blue-primary/40 bg-blue-50">
          <AlertCircle className="h-5 w-5 text-sss-blue-primary" />
          <AlertDescription className="text-foreground/80">
            <strong>Important Reminders:</strong> All loan applications are subject to SSS evaluation and approval. 
            Ensure all contributions are updated and complete documentary requirements are submitted for faster processing. 
            This is a demonstration page for educational purposes.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
