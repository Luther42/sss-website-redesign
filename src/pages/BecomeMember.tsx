import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Shield, TrendingUp } from "lucide-react";
import { useState } from "react";
import { ApplicationFormModal } from "@/components/modals/ApplicationFormModal";

export default function BecomeMember() {
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-sss-blue-primary mb-6">
          Become an SSS Member
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          It pays to be an SSS member. Read about the SSS coverage program and know the type of membership that's for you.
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Why Join SSS?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-start">
              <Shield className="w-6 h-6 text-sss-blue-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Social Protection</h3>
                <p className="text-muted-foreground">Comprehensive benefits for you and your family</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <TrendingUp className="w-6 h-6 text-sss-blue-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Retirement Benefits</h3>
                <p className="text-muted-foreground">Secure your future with pension benefits</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Users className="w-6 h-6 text-sss-blue-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Family Protection</h3>
                <p className="text-muted-foreground">Benefits for dependents and beneficiaries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-sss-blue-primary">Membership Types</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Employed Members
              </h3>
              <p className="text-muted-foreground ml-7">
                If you're working for an employer, you're automatically covered by SSS. Your employer handles the registration and contribution remittance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Self-Employed Members
              </h3>
              <p className="text-muted-foreground ml-7">
                If you're running your own business or working as a freelancer, you can register as a self-employed member and pay your own contributions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Voluntary Members
              </h3>
              <p className="text-muted-foreground ml-7">
                Previously employed or self-employed members who want to continue or resume paying contributions to maintain their SSS coverage.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                OFW Members
              </h3>
              <p className="text-muted-foreground ml-7">
                Overseas Filipino Workers can maintain their SSS membership while working abroad through the Flexi-Fund program.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="bg-sss-blue-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">Ready to Join?</h3>
          <p className="text-muted-foreground mb-6">
            Start your SSS membership today and secure your future. The process is simple and can be done online.
          </p>
          <Button 
            variant="sss-primary" 
            size="lg"
            onClick={() => setShowApplicationModal(true)}
          >
            Register Now
          </Button>
        </div>
      </div>

      <ApplicationFormModal 
        open={showApplicationModal}
        onOpenChange={setShowApplicationModal}
        applicationType="ss-number"
      />
    </div>
  );
}
