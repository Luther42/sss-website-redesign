import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileCheck, Users, CheckCircle } from "lucide-react";
import { PdfDemoDialog } from "@/components/modals/PdfDemoDialog";

export default function ContributionSubsidy() {
  const [pdfDialog, setPdfDialog] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          Be a Contribution Subsidy Provider
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Through your partnership, subsidize SSS contributions for self-employed, land-based Overseas Filipino workers and voluntary members.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">About the Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Contribution Subsidy Program enables organizations, companies, and individuals to help workers maintain their SSS coverage by subsidizing their monthly contributions. This program strengthens social protection for vulnerable sectors.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Building2 className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Corporate Partnership</h3>
                  <p className="text-muted-foreground">
                    Companies can partner with SSS to provide social security benefits to informal workers and their supply chain partners.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4 items-start">
                <Users className="w-8 h-8 text-sss-blue-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Support Workers</h3>
                  <p className="text-muted-foreground">
                    Help self-employed workers, OFWs, and voluntary members continue their SSS coverage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Eligibility Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Must be a registered business or organization in the Philippines
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Compliant with existing SSS regulations if already an employer
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Willing to commit to subsidizing contributions for a defined period
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Must submit proper documentation and partnership agreement
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Program Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 items-start">
              <FileCheck className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Enhanced corporate social responsibility profile
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FileCheck className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Recognition as an SSS partner in social protection
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FileCheck className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Contribution to nation-building and worker welfare
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <FileCheck className="w-5 h-5 text-sss-blue-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">
                Potential tax benefits and incentives
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-sss-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">Interested in Partnering?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our Corporate Partnership Division to learn more about becoming a Contribution Subsidy Provider.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="sss-primary" size="lg">
              Submit Application
            </Button>
            <Button variant="outline" size="lg" onClick={() => setPdfDialog(true)}>
              Download Guidelines
            </Button>
          </div>
        </div>
      </div>
      <PdfDemoDialog open={pdfDialog} onClose={() => setPdfDialog(false)} fileName="SSS Contribution Subsidy Guidelines" />
    </div>
  );
}
