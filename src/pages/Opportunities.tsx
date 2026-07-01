import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FileText, Handshake, TrendingUp, MapPin, Clock, ArrowRight, Building2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PdfDemoDialog } from "@/components/modals/PdfDemoDialog";

const careers = [
  {
    title: "Senior IT Systems Analyst",
    department: "Information Technology",
    location: "SSS Main Office, Quezon City",
    type: "Full-time",
    posted: "2 days ago",
    description: "Lead the design, development, and implementation of IT systems and solutions to support SSS operations.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years experience in systems analysis",
      "Strong knowledge of database systems",
      "Experience with enterprise applications"
    ]
  },
  {
    title: "Customer Service Representative",
    department: "Member Services",
    location: "Various Branch Offices",
    type: "Full-time",
    posted: "5 days ago",
    description: "Provide excellent customer service to SSS members, process transactions, and respond to inquiries.",
    requirements: [
      "Bachelor's degree holder",
      "Excellent communication skills",
      "Customer service experience preferred",
      "Computer literate"
    ]
  },
  {
    title: "Financial Analyst",
    department: "Finance",
    location: "SSS Main Office, Quezon City",
    type: "Full-time",
    posted: "1 week ago",
    description: "Analyze financial data, prepare reports, and support financial planning and investment decisions.",
    requirements: [
      "Bachelor's degree in Finance, Accounting, or related field",
      "3+ years experience in financial analysis",
      "Strong analytical and Excel skills",
      "CPA or CFA certification is a plus"
    ]
  }
];

const biddings = [
  {
    title: "Supply and Delivery of Office Equipment",
    bidNumber: "BID-2024-001",
    deadline: "April 30, 2024",
    budget: "₱5,000,000.00",
    category: "Goods",
    status: "Open"
  },
  {
    title: "Janitorial and Maintenance Services",
    bidNumber: "BID-2024-002",
    deadline: "May 15, 2024",
    budget: "₱8,500,000.00",
    category: "Services",
    status: "Open"
  },
  {
    title: "ICT Infrastructure Upgrade Project",
    bidNumber: "BID-2024-003",
    deadline: "June 1, 2024",
    budget: "₱25,000,000.00",
    category: "Infrastructure",
    status: "Open"
  }
];

const partnerships = [
  {
    icon: Building2,
    title: "Employer Partnership Program",
    description: "Partner with SSS for streamlined contribution payment and member services for your employees.",
    benefits: [
      "Dedicated account manager",
      "Priority processing",
      "Online reporting tools",
      "Compliance assistance"
    ]
  },
  {
    icon: Handshake,
    title: "Payment Channel Partnership",
    description: "Become an authorized SSS payment center and provide convenient payment services to members.",
    benefits: [
      "Commission-based income",
      "Training and support",
      "Marketing materials",
      "Technical assistance"
    ]
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description: "Explore investment opportunities in SSS-backed projects and securities.",
    benefits: [
      "Competitive returns",
      "Government-backed security",
      "Various investment vehicles",
      "Professional fund management"
    ]
  }
];

export default function Opportunities() {
  const [pdfDialog, setPdfDialog] = useState<{ open: boolean; name: string }>({ open: false, name: "" });
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Briefcase className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            OPPORTUNITIES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Career & Partnership Opportunities
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Join our team, participate in biddings, or partner with SSS for mutual growth
          </p>
        </div>
      </div>

      {/* Careers Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sss-blue-primary">Career Opportunities</h2>
              <p className="text-muted-foreground">Join the SSS team and make a difference</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {careers.map((job, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-sss-blue-primary">{job.type}</Badge>
                    <span className="text-xs text-muted-foreground">{job.posted}</span>
                  </div>
                  <CardTitle className="text-xl text-sss-blue-primary">{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <MapPin className="w-4 h-4 text-sss-blue-primary" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Clock className="w-4 h-4 text-sss-blue-primary" />
                      <span>Posted {job.posted}</span>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80">{job.description}</p>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-xs font-semibold text-sss-blue-primary mb-2">Key Requirements:</p>
                    <ul className="text-xs text-foreground/80 space-y-1">
                      {job.requirements.slice(0, 2).map((req, i) => (
                        <li key={i}>• {req}</li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="sss-primary" className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-white border-2 border-sss-blue-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-sss-blue-primary mb-3">Don't see a position that fits?</h3>
              <p className="text-foreground/80 mb-6">
                Submit your resume to our talent pool and we'll contact you when relevant positions open up
              </p>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Submit Resume
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bidding Opportunities */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sss-blue-primary">Bidding Opportunities</h2>
              <p className="text-muted-foreground">Current procurement and project biddings</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {biddings.map((bid, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-sss-blue-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className="bg-green-500">{bid.status}</Badge>
                        <Badge variant="outline">{bid.category}</Badge>
                        <span className="text-sm text-muted-foreground">{bid.bidNumber}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{bid.title}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Approved Budget:</span>
                          <p className="font-semibold text-sss-blue-primary">{bid.budget}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline:</span>
                          <p className="font-semibold text-foreground">{bid.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button variant="outline">
                        View Details
                      </Button>
                      <Button variant="sss-primary" onClick={() => setPdfDialog({ open: true, name: "Bid Documents & Requirements" })}>
                        Download Documents
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="border-sss-blue-primary/40 bg-blue-50">
            <FileText className="h-5 w-5 text-sss-blue-primary" />
            <AlertDescription className="text-foreground/80">
              <strong>Important:</strong> All bidding documents and submissions must comply with Republic Act No. 9184 
              (Government Procurement Reform Act). Please review the terms and conditions carefully before submitting your bid.
            </AlertDescription>
          </Alert>
        </div>

        {/* Partnership Opportunities */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
              <Handshake className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sss-blue-primary">Partnership Programs</h2>
              <p className="text-muted-foreground">Collaborate with SSS for mutual growth</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerships.map((program, index) => (
              <Card key={index} className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
                    <program.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-center text-sss-blue-primary">{program.title}</CardTitle>
                  <CardDescription className="text-center">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
                    <p className="text-xs font-semibold text-sss-blue-primary mb-2">Program Benefits:</p>
                    <ul className="text-xs text-foreground/80 space-y-1">
                      {program.benefits.map((benefit, i) => (
                        <li key={i}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a career, bidding opportunity, or partnership, SSS offers various ways to collaborate
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Browse All Careers
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                View All Biddings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <PdfDemoDialog open={pdfDialog.open} onClose={() => setPdfDialog({ open: false, name: "" })} fileName={pdfDialog.name} />
    </div>
  );
}
