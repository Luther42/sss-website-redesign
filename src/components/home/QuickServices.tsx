import { useState } from "react";
import { UserCircle, FileText, Calculator, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PensionCalculatorModal } from "@/components/modals/PensionCalculatorModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { ApplicationFormModal } from "@/components/modals/ApplicationFormModal";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const services = [
  {
    id: 1,
    icon: UserCircle,
    title: "Create a MySSS",
    subtitle: "account or login",
    description: "Access your SSS account online 24/7",
    gradient: "from-blue-500 to-cyan-500",
    action: "login",
  },
  {
    id: 2,
    icon: FileText,
    title: "Apply for an",
    subtitle: "SS Number Online",
    description: "Get your Social Security number online",
    gradient: "from-indigo-500 to-purple-500",
    action: "apply-ss",
  },
  {
    id: 3,
    icon: Calculator,
    title: "Check out the",
    subtitle: "Pension Calculator",
    description: "Estimate your future pension benefits",
    gradient: "from-violet-500 to-pink-500",
    action: "calculator",
  },
  {
    id: 4,
    icon: ClipboardCheck,
    title: "Submit",
    subtitle: "ACOP Compliance",
    description: "Annual Confirmation of Pensioners",
    gradient: "from-orange-500 to-red-500",
    action: "acop",
  },
];

export function QuickServices() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  const handleCardClick = (action: string) => {
    if (action === "calculator") {
      setIsCalculatorOpen(true);
    } else if (action === "login") {
      setIsLoginOpen(true);
    } else if (action === "apply-ss") {
      setIsApplicationOpen(true);
    } else if (action === "acop") {
      toast.info("ACOP Compliance", {
        description: "This feature will direct you to the ACOP compliance form. This is a demo.",
      });
    }
  };

  return (
    <>
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-sss-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 hover:from-sss-blue-accent hover:via-sss-blue-primary hover:to-sss-blue-accent transition-all duration-300"
              >
                <Card
                  onClick={() => handleCardClick(service.action)}
                  className={cn(
                    "group cursor-pointer border-none shadow-lg-modern hover:shadow-xl-modern h-full overflow-hidden",
                    "hover:-translate-y-2 transition-all duration-300 rounded-2xl"
                  )}
                >
                  {/* Header Section with Gradient Background */}
                  <div className="relative h-24 bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent">
                    {/* Icon positioned to overlap header and content */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-8">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-full bg-gradient-to-br flex items-center justify-center",
                          "group-hover:scale-110 transition-transform duration-300 shadow-xl ring-4 ring-white",
                          service.gradient
                        )}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="pt-12 pb-6 px-6 space-y-3 bg-white">
                    <div className="text-center">
                      <h3 className="text-base font-bold text-sss-blue-primary leading-tight">
                        {service.title}
                      </h3>
                      <h3 className="text-base font-bold text-sss-blue-primary mb-2 leading-tight">
                        {service.subtitle}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex items-center justify-center text-sss-blue-primary text-xs font-semibold group-hover:gap-2 transition-all pt-1">
                      <span>Learn More</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <PensionCalculatorModal
        open={isCalculatorOpen}
        onOpenChange={setIsCalculatorOpen}
      />
      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <ApplicationFormModal
        open={isApplicationOpen}
        onOpenChange={setIsApplicationOpen}
        applicationType="ss-number"
      />
    </>
  );
}
