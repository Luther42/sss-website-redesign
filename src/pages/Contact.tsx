import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const contactMethods = [
  {
    icon: Phone,
    title: "SSS Hotline",
    value: "(02) 8920-6446",
    description: "Mon-Fri: 8:00 AM - 5:00 PM",
    action: "Call Now"
  },
  {
    icon: Phone,
    title: "Toll-Free (PLDT)",
    value: "1-800-10-2255-777",
    description: "Available 24/7",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Support",
    value: "members@sss.gov.ph",
    description: "Response within 24-48 hours",
    action: "Send Email"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Chat with our agents",
    description: "Mon-Fri: 8:00 AM - 5:00 PM",
    action: "Start Chat"
  }
];

const branches = [
  {
    name: "SSS Main Office",
    address: "East Avenue, Diliman, Quezon City",
    phone: "(02) 8920-6446",
    hours: "Monday-Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "SSS Manila Branch",
    address: "1234 Taft Avenue, Manila",
    phone: "(02) 8123-4567",
    hours: "Monday-Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "SSS Makati Branch",
    address: "Ayala Avenue, Makati City",
    phone: "(02) 8234-5678",
    hours: "Monday-Friday: 8:00 AM - 5:00 PM"
  },
  {
    name: "SSS Cebu Branch",
    address: "Osmena Boulevard, Cebu City",
    phone: "(032) 234-5678",
    hours: "Monday-Friday: 8:00 AM - 5:00 PM"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-2 border-sss-blue-primary/20">
            <CardContent className="py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-sss-blue-primary mb-4">Message Sent Successfully!</h2>
              <p className="text-foreground/80 mb-8">
                Thank you for contacting SSS. We've received your message and will respond within 24-48 hours.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <p className="text-sm text-foreground/80">
                  <strong>Reference Number:</strong> SSS-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Please keep this reference number for tracking your inquiry
                </p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Send Another Message
                </Button>
                <Button onClick={() => window.location.href = "/"} variant="sss-primary">
                  Return to Home
                </Button>
              </div>
              <Alert className="mt-8 bg-blue-50 border-sss-blue-primary/40">
                <MessageCircle className="h-4 w-4 text-sss-blue-primary" />
                <AlertDescription className="text-sm text-foreground/80">
                  This is a demonstration. In a real application, your message would be sent to SSS customer service.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MessageCircle className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            CONTACT US
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get in Touch with SSS
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            We're here to help with your questions, concerns, and feedback
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-sss-blue-primary mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-foreground mb-1">{method.value}</p>
                <p className="text-xs text-muted-foreground mb-4">{method.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <Card className="border-2 border-sss-blue-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-sss-blue-primary">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Juan dela Cruz"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="juan@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    placeholder="09XX XXX XXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="What is your inquiry about?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Please provide details of your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" variant="sss-primary" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Branch Locations */}
          <div className="space-y-6">
            <Card className="border-2 border-sss-blue-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-sss-blue-primary flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Branch Locations
                </CardTitle>
                <CardDescription>Visit our offices nationwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {branches.map((branch, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-sss-blue-primary mb-2">{branch.name}</h4>
                    <div className="space-y-1 text-sm text-foreground/80">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-sss-blue-primary flex-shrink-0" />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-sss-blue-primary flex-shrink-0" />
                        <span>{branch.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-sss-blue-primary flex-shrink-0" />
                        <span>{branch.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Nearest Branch
                </Button>
              </CardContent>
            </Card>

            <Alert className="border-sss-blue-primary/40 bg-blue-50">
              <MessageCircle className="h-5 w-5 text-sss-blue-primary" />
              <AlertDescription className="text-foreground/80">
                <strong>Quick Tip:</strong> For faster service, prepare your SS Number and relevant documents 
                before contacting us or visiting a branch office.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* FAQ Prompt */}
        <Card className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Looking for Quick Answers?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Check our Frequently Asked Questions for instant answers to common inquiries
            </p>
            <Button size="lg" variant="secondary">
              View FAQs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
