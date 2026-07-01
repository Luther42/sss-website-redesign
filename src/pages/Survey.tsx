import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ClipboardList, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Survey() {
  const [formData, setFormData] = useState({
    satisfaction: "",
    socialMediaClarity: "",
    digitalChannel: "",
    improvements: "",
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.satisfaction || !formData.socialMediaClarity || !formData.digitalChannel) {
      toast.error("Please answer all required questions");
      return;
    }

    // Simulate submission
    setSubmitted(true);
    toast.success("Survey Submitted!", {
      description: "Thank you for your valuable feedback.",
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-12 text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-sss-blue-primary">Thank You!</h2>
            <p className="text-lg text-muted-foreground">
              Your feedback has been successfully submitted. We appreciate you taking the time to help us improve SSS programs and services.
            </p>
            <Button 
              onClick={() => window.location.href = "/"}
              variant="sss-primary"
              size="lg"
            >
              Return to Home
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ClipboardList className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            We Want to Hear From You
          </h1>
          <p className="text-xl text-foreground/90 max-w-2xl mx-auto">
            Help us improve SSS programs and services by sharing your honest feedback.
          </p>
        </div>
      </div>

      {/* Survey Form */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Card className="p-8 md:p-12 space-y-8 shadow-xl border-2 border-sss-blue-primary/20">
          <div className="text-center pb-6 border-b">
            <p className="text-sm text-muted-foreground">Survey Date: {new Date().toLocaleDateString()}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Question 1 */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-sss-blue-primary">
                1. How satisfied are you with SSS's information materials and collaterals?
                <span className="text-destructive ml-1">*</span>
              </Label>
              <RadioGroup
                value={formData.satisfaction}
                onValueChange={(value) => setFormData({ ...formData, satisfaction: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="very-satisfied" id="sat-1" />
                  <Label htmlFor="sat-1" className="cursor-pointer flex-1">Very Satisfied</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="satisfied" id="sat-2" />
                  <Label htmlFor="sat-2" className="cursor-pointer flex-1">Satisfied</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="neutral" id="sat-3" />
                  <Label htmlFor="sat-3" className="cursor-pointer flex-1">Neutral</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="dissatisfied" id="sat-4" />
                  <Label htmlFor="sat-4" className="cursor-pointer flex-1">Dissatisfied</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="very-dissatisfied" id="sat-5" />
                  <Label htmlFor="sat-5" className="cursor-pointer flex-1">Very Dissatisfied</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-sss-blue-primary">
                2. How would you rate the clarity of SSS communications on social media?
                <span className="text-destructive ml-1">*</span>
              </Label>
              <RadioGroup
                value={formData.socialMediaClarity}
                onValueChange={(value) => setFormData({ ...formData, socialMediaClarity: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="excellent" id="clarity-1" />
                  <Label htmlFor="clarity-1" className="cursor-pointer flex-1">Excellent</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="good" id="clarity-2" />
                  <Label htmlFor="clarity-2" className="cursor-pointer flex-1">Good</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="fair" id="clarity-3" />
                  <Label htmlFor="clarity-3" className="cursor-pointer flex-1">Fair</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="poor" id="clarity-4" />
                  <Label htmlFor="clarity-4" className="cursor-pointer flex-1">Poor</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 3 */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-sss-blue-primary">
                3. Which SSS digital channel do you use most often?
                <span className="text-destructive ml-1">*</span>
              </Label>
              <RadioGroup
                value={formData.digitalChannel}
                onValueChange={(value) => setFormData({ ...formData, digitalChannel: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="mysss-portal" id="channel-1" />
                  <Label htmlFor="channel-1" className="cursor-pointer flex-1">My.SSS Portal</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="facebook" id="channel-2" />
                  <Label htmlFor="channel-2" className="cursor-pointer flex-1">Facebook</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="twitter" id="channel-3" />
                  <Label htmlFor="channel-3" className="cursor-pointer flex-1">Twitter/X</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="instagram" id="channel-4" />
                  <Label htmlFor="channel-4" className="cursor-pointer flex-1">Instagram</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <RadioGroupItem value="website" id="channel-5" />
                  <Label htmlFor="channel-5" className="cursor-pointer flex-1">SSS Website</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Question 4 - Optional Text */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-sss-blue-primary">
                4. What improvements would you like to see in SSS communications?
              </Label>
              <Textarea
                placeholder="Share your suggestions and feedback here..."
                value={formData.improvements}
                onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                className="min-h-[120px] resize-none"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-6 pt-6 border-t">
              <h3 className="text-xl font-semibold text-sss-blue-primary">Contact Information (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-sss-blue-primary">Note:</strong> This is a demonstration survey for a university project. 
                No data will be collected or stored. Your responses are for UI/UX demonstration purposes only.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button 
                type="submit"
                variant="sss-gradient"
                size="xl"
                className="min-w-[200px]"
              >
                Submit Survey
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
