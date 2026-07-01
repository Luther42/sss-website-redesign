import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Shield, Heart, Plane } from "lucide-react";

export default function OFWProgram() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          SSS for Filipinos Abroad
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your SSS membership continues even when you're residing abroad - whether you're an Overseas Filipino worker, or a permanent resident of another country.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Basta SSS member, bawat OFW protektado</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              May maaasahan, nasaan man sa mundo. The Social Security System is committed to providing continuous social protection to all Overseas Filipino Workers.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Globe className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Global Coverage</h3>
                  <p className="text-muted-foreground">
                    Continue your SSS coverage wherever you are in the world through the Flexi-Fund program.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Shield className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Full Benefits</h3>
                  <p className="text-muted-foreground">
                    Access to all SSS benefits including sickness, maternity, disability, and retirement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Heart className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Family Protection</h3>
                  <p className="text-muted-foreground">
                    Your family back home is protected with death and funeral benefits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Plane className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Easy Payments</h3>
                  <p className="text-muted-foreground">
                    Multiple payment options available including online banking and remittance centers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-sss-blue-primary to-sss-blue-dark text-white">
          <CardContent className="pt-6">
            <h3 className="text-2xl font-bold mb-4">OFW Flexi-Fund Program</h3>
            <p className="mb-4">
              The Flexi-Fund program allows OFWs to pay voluntary contributions and continue their SSS membership even while working abroad. You can choose your contribution amount based on your income bracket.
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Flexible contribution amounts</li>
              <li>Multiple payment channels worldwide</li>
              <li>Continuous coverage and benefits</li>
              <li>Retirement pension upon reaching eligibility</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
