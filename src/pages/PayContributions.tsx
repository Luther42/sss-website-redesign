import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Building, Smartphone, MapPin } from "lucide-react";

export default function PayContributions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          Pay Contributions and Loans
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Regular payment of contributions is essential to qualify for SSS benefits and loans. Here's how and where you can make your SSS payments.
        </p>

        <Card className="mb-8 bg-gradient-card">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Payment Options</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SSS offers multiple convenient payment channels to make it easier for members to pay their contributions and loan amortizations.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Smartphone className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Online Banking</h3>
                  <p className="text-muted-foreground mb-3">
                    Pay through your bank's online or mobile banking app.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• BDO Online Banking</li>
                    <li>• BPI Express Online</li>
                    <li>• Unionbank Online</li>
                    <li>• And more banks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <CreditCard className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Payment Centers</h3>
                  <p className="text-muted-foreground mb-3">
                    Visit authorized payment centers nationwide.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SM Bills Payment</li>
                    <li>• Bayad Center</li>
                    <li>• 7-Eleven</li>
                    <li>• Robinsons Dept. Store</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Building className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Over-the-Counter</h3>
                  <p className="text-muted-foreground mb-3">
                    Pay at bank branches and remittance centers.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All authorized banks</li>
                    <li>• Cebuana Lhuillier</li>
                    <li>• M Lhuillier</li>
                    <li>• Western Union</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg-modern transition-shadow">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">SSS Branches</h3>
                  <p className="text-muted-foreground mb-3">
                    Pay directly at any SSS branch nationwide.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Main and extension offices</li>
                    <li>• Service offices</li>
                    <li>• Mobile service units</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Payment Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Monthly Contributions</h4>
              <p className="text-muted-foreground">
                Contributions should be paid on or before the due date indicated in your Payment Reference Number (PRN). For employed members, employers must remit contributions by the last day of the month.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Loan Payments</h4>
              <p className="text-muted-foreground">
                Loan amortizations should be paid monthly as per your loan schedule. Late payments may incur penalties and affect your eligibility for future loans.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-sss-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">Need Your PRN?</h3>
          <p className="text-muted-foreground mb-4">
            Your Payment Reference Number (PRN) is required for payment. Get your PRN through:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-sss-blue-primary">•</span>
              <span>MySSS Portal - Generate PRN online</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sss-blue-primary">•</span>
              <span>SSS Mobile App - Available for iOS and Android</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sss-blue-primary">•</span>
              <span>SSS Branch - Visit any branch for assistance</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
