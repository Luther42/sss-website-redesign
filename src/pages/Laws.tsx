import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, BookOpen, Download, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PdfDemoDialog } from "@/components/modals/PdfDemoDialog";

const republicActs = [
  {
    number: "RA 11199",
    title: "Social Security Act of 2018",
    date: "February 2019",
    description: "An Act Instituting reforms in the Social Security System and Further Strengthening its Social Insurance Program. This act provides for enhanced benefits, unemployment insurance, and other improvements to the SSS program.",
    highlights: [
      "Increased monthly pension of retirees",
      "Unemployment insurance benefit",
      "Enhanced SSS coverage and benefits",
      "Mandatory PhilHealth and Pag-IBIG coverage"
    ]
  },
  {
    number: "RA 8282",
    title: "Social Security Act of 1997",
    date: "May 1997",
    description: "An Act Further Strengthening the Social Security System Thereby Amending for this Purpose Republic Act No. 1161. This is the foundational law governing the current SSS system.",
    highlights: [
      "Expanded SSS coverage",
      "Improved benefit programs",
      "Strengthened enforcement mechanisms",
      "Enhanced member protection"
    ]
  },
  {
    number: "RA 1161",
    title: "Social Security Act of 1954",
    date: "September 1954",
    description: "The original Social Security Act that established the Social Security System in the Philippines, creating the first comprehensive social security program for private sector employees.",
    highlights: [
      "Created the Social Security System",
      "Established basic social protection",
      "Mandatory coverage for employees",
      "Foundation for future SSS reforms"
    ]
  },
  {
    number: "RA 10361",
    title: "Domestic Workers Act (Kasambahay Law)",
    date: "January 2013",
    description: "An Act Instituting Policies for the Protection and Welfare of Domestic Workers, including their SSS coverage and benefits.",
    highlights: [
      "SSS coverage for domestic workers",
      "Minimum wage protection",
      "Rest day and benefits entitlement",
      "Employer obligations defined"
    ]
  }
];

const circulars = [
  { number: "Circular No. 2024-001", title: "Updates on Member Registration Procedures", date: "January 2024", category: "Registration" },
  { number: "Circular No. 2023-025", title: "Enhanced MySSS Online Services", date: "December 2023", category: "Online Services" },
  { number: "Circular No. 2023-020", title: "Loan Application Guidelines and Requirements", date: "November 2023", category: "Loans" },
  { number: "Circular No. 2023-018", title: "Contribution Payment Schedule and Deadlines", date: "October 2023", category: "Contributions" },
  { number: "Circular No. 2023-015", title: "Benefits Claims Processing Updates", date: "September 2023", category: "Benefits" },
  { number: "Circular No. 2023-010", title: "Employer Compliance and Reporting Requirements", date: "August 2023", category: "Compliance" }
];

const policies = [
  { title: "Data Privacy Policy", description: "SSS commitment to protecting member information and personal data", icon: FileText },
  { title: "Customer Service Charter", description: "Standards and commitments for quality service delivery", icon: BookOpen },
  { title: "Grievance Mechanism", description: "Procedures for filing complaints and resolving disputes", icon: Scale },
  { title: "Anti-Fraud Policy", description: "Measures to prevent and address fraudulent activities", icon: FileText }
];

export default function Laws() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("acts");
  const [pdfDialog, setPdfDialog] = useState<{ open: boolean; name: string }>({ open: false, name: "" });

  const filteredActs = republicActs.filter(act =>
    act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    act.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCirculars = circulars.filter(circular =>
    circular.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    circular.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Scale className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            LAWS & CIRCULARS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Laws, Circulars & Policies
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Access the legal framework, circulars, and policies governing the Social Security System
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search laws, circulars, and policies..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="acts" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <Scale className="w-4 h-4 mr-2" />
              Republic Acts
            </TabsTrigger>
            <TabsTrigger value="circulars" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <FileText className="w-4 h-4 mr-2" />
              Circulars
            </TabsTrigger>
            <TabsTrigger value="policies" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Policies
            </TabsTrigger>
          </TabsList>

          {/* Republic Acts Tab */}
          <TabsContent value="acts" className="space-y-6">
            {filteredActs.map((act, index) => (
              <Card key={index} className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <Badge className="bg-sss-blue-primary mb-2">{act.number}</Badge>
                      <CardTitle className="text-2xl text-sss-blue-primary">{act.title}</CardTitle>
                      <CardDescription className="text-base mt-2">Enacted: {act.date}</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="shrink-0" onClick={() => setPdfDialog({ open: true, name: `${act.number} – ${act.title}` })}>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-6 leading-relaxed">{act.description}</p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-sss-blue-primary mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {act.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <div className="w-5 h-5 rounded-full bg-sss-blue-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-semibold text-sss-blue-primary">{i + 1}</span>
                          </div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Text
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Related Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Circulars Tab */}
          <TabsContent value="circulars" className="space-y-4">
            {filteredCirculars.map((circular, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-sss-blue-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className="text-sss-blue-primary border-sss-blue-primary">
                          {circular.number}
                        </Badge>
                        <Badge variant="secondary">{circular.category}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{circular.title}</h3>
                      <p className="text-sm text-muted-foreground">{circular.date}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => setPdfDialog({ open: true, name: `Circular ${circular.number} – ${circular.title}` })}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {policies.map((policy, index) => (
                <Card key={index} className="border-2 border-sss-blue-primary/20 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
                        <policy.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-sss-blue-primary">{policy.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{policy.description}</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Policy
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-white border-2 border-sss-blue-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-sss-blue-primary mb-4">Need Help Understanding SSS Laws?</h3>
                <p className="text-foreground/80 mb-6">
                  Our customer service team is ready to assist you with any questions about SSS laws, circulars, and policies.
                </p>
                <Button variant="sss-primary">
                  Contact Legal Services
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {searchQuery && filteredActs.length === 0 && filteredCirculars.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed mt-8">
            <Scale className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No documents found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search query
            </p>
            <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
          </Card>
        )}
      </div>
      <PdfDemoDialog open={pdfDialog.open} onClose={() => setPdfDialog({ open: false, name: "" })} fileName={pdfDialog.name} />
    </div>
  );
}
