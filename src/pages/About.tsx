import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Eye, Users, Award, TrendingUp } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Building2 className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ABOUT SSS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About the Social Security System
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Learn about the history, vision, and organizational structure of the SSS.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger value="history" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <Building2 className="w-4 h-4 mr-2 hidden md:inline" />
              History
            </TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <Eye className="w-4 h-4 mr-2 hidden md:inline" />
              Vision & Mission
            </TabsTrigger>
            <TabsTrigger value="structure" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2 hidden md:inline" />
              Organization
            </TabsTrigger>
            <TabsTrigger value="management" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2 hidden md:inline" />
              Management
            </TabsTrigger>
            <TabsTrigger value="iso" className="data-[state=active]:bg-sss-blue-primary data-[state=active]:text-white">
              <Award className="w-4 h-4 mr-2 hidden md:inline" />
              ISO Certification
            </TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-8">
            <Card className="p-8 md:p-12 border-2 border-sss-blue-primary/20">
              <h2 className="text-3xl font-bold text-sss-blue-primary mb-6">History of the SSS</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground/80 leading-relaxed mb-6">
                  The Social Security System (SSS) was created on September 1, 1957 under Republic Act No. 1161, amended by RA 8282 
                  (Social Security Act of 1997). The SSS is a government-owned and controlled corporation (GOCC) that provides retirement, 
                  death, disability, maternity, sickness, and other benefits to private-sector employees and self-employed persons in the 
                  Philippines. Over the decades, the SSS has expanded its coverage and improved its benefit programs to serve millions of 
                  Filipino workers.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
                    <div className="text-sm text-muted-foreground mb-2">Founded in</div>
                    <div className="text-3xl font-bold text-sss-blue-primary">1957</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
                    <div className="text-sm text-muted-foreground mb-2">Governed by</div>
                    <div className="text-2xl font-bold text-sss-blue-primary">RA 8282</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
                    <div className="text-sm text-muted-foreground mb-2">Serves</div>
                    <div className="text-2xl font-bold text-sss-blue-primary">47M+</div>
                    <div className="text-xs text-muted-foreground">members</div>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100">
                    <div className="text-sm text-muted-foreground mb-2">Over</div>
                    <div className="text-3xl font-bold text-sss-blue-primary">128</div>
                    <div className="text-xs text-muted-foreground">branches nationwide</div>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-sss-blue-primary mt-8 mb-4">Key Milestones</h3>
                <ul className="space-y-3 list-disc list-inside text-foreground/80">
                  <li><strong>1957:</strong> SSS established under RA 1161</li>
                  <li><strong>1997:</strong> Social Security Act amended by RA 8282</li>
                  <li><strong>2019:</strong> Benefits improved under RA 11199 (Social Security Act of 2018)</li>
                  <li><strong>2020:</strong> COVID-19 unemployment benefits introduced</li>
                  <li><strong>Present:</strong> Continuous digital transformation and service enhancement</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="vision" className="space-y-8">
            <Card className="p-8 md:p-12 border-2 border-sss-blue-primary/20">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-sss-blue-primary mb-4">Our Vision</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-sss-blue-primary">
                    "A trusted and caring social security institution that champions meaningful coverage and the long-term welfare of all Filipino workers and their families."
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-sss-blue-primary mb-4">Our Mission</h2>
                  <p className="text-lg text-foreground/80 leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-sss-blue-primary mb-4">
                    "To provide meaningful social security protection that promotes social justice and employee welfare through the delivery of 
                    fast, easy, and reliable services, financial viability, and compassionate and caring service."
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-sss-blue-primary mb-4">Core Values</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sss-blue-primary text-lg mb-2">Integrity</h4>
                      <p className="text-foreground/70">Upholding honesty and strong moral principles in all our actions</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sss-blue-primary text-lg mb-2">Excellence</h4>
                      <p className="text-foreground/70">Delivering outstanding service quality and continuous improvement</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sss-blue-primary text-lg mb-2">Compassion</h4>
                      <p className="text-foreground/70">Showing empathy and care for all our members and stakeholders</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-sss-blue-primary text-lg mb-2">Accountability</h4>
                      <p className="text-foreground/70">Taking responsibility for our decisions and actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="structure" className="space-y-8">
            <Card className="p-8 md:p-12 border-2 border-sss-blue-primary/20">
              <h2 className="text-3xl font-bold text-sss-blue-primary mb-6">Organizational Structure</h2>
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  The SSS is governed by a Commission composed of the SSS President and Chief Executive Officer as Chairman, and the following as members:
                </p>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-sss-blue-primary">
                    <h4 className="font-semibold text-sss-blue-primary mb-2">SSS Commission</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Chairman - SSS President and CEO</li>
                      <li>• Secretary of the Department of Finance or representative</li>
                      <li>• Secretary of the Department of Labor and Employment or representative</li>
                      <li>• Three (3) representatives from employers' sector</li>
                      <li>• Three (3) representatives from employees' sector</li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-sss-blue-primary mb-2">128+</div>
                      <div className="text-sm text-muted-foreground">Branch Offices</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-sss-blue-primary mb-2">8,000+</div>
                      <div className="text-sm text-muted-foreground">Employees</div>
                    </div>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-sss-blue-primary mb-2">17</div>
                      <div className="text-sm text-muted-foreground">Regional Offices</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="management" className="space-y-8">
            <Card className="p-8 md:p-12 border-2 border-sss-blue-primary/20">
              <h2 className="text-3xl font-bold text-sss-blue-primary mb-6">SSS Management</h2>
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  The SSS is led by a team of dedicated professionals committed to serving Filipino workers and their families.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-sss-blue-primary text-lg mb-4">Executive Leadership</h4>
                  <div className="space-y-3 text-foreground/80">
                    <div>
                      <div className="font-semibold">President and Chief Executive Officer</div>
                      <div className="text-sm text-muted-foreground">Overall leadership and strategic direction</div>
                    </div>
                    <div>
                      <div className="font-semibold">Senior Vice Presidents</div>
                      <div className="text-sm text-muted-foreground">Operations, Finance, and Administration</div>
                    </div>
                    <div>
                      <div className="font-semibold">Vice Presidents</div>
                      <div className="text-sm text-muted-foreground">Various departments and divisions</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Note:</strong> This is a demonstration page for a university project. Actual management details 
                    would be maintained on the official SSS website.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="iso" className="space-y-8">
            <Card className="p-8 md:p-12 border-2 border-sss-blue-primary/20">
              <h2 className="text-3xl font-bold text-sss-blue-primary mb-6">ISO Certification</h2>
              <div className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  The SSS is committed to maintaining the highest standards of quality management and information security.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-sss-blue-primary" />
                      <h4 className="font-semibold text-sss-blue-primary text-lg">ISO 9001:2015</h4>
                    </div>
                    <p className="text-foreground/70">
                      Quality Management System certification ensuring consistent delivery of high-quality services to SSS members.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-8 h-8 text-sss-blue-primary" />
                      <h4 className="font-semibold text-sss-blue-primary text-lg">ISO 27001:2013</h4>
                    </div>
                    <p className="text-foreground/70">
                      Information Security Management System certification protecting member data and ensuring confidentiality.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-sss-blue-primary">
                  <h4 className="font-semibold text-sss-blue-primary mb-3">Our Commitment to Excellence</h4>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Continuous improvement of processes and services</li>
                    <li>• Protection of member information and data privacy</li>
                    <li>• Compliance with international standards</li>
                    <li>• Regular audits and assessments</li>
                    <li>• Employee training and development</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
