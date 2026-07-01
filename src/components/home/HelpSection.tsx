import { Users, Plane, Handshake, CreditCard, Gift, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const helpCategories = [
  {
    id: 1,
    icon: Users,
    title: "Become an SSS Member",
    description:
      "It pays to be an SSS member. Read about the SSS coverage program and know the type of membership that's right for you.",
    image: "linear-gradient(135deg, hsl(203 100% 32%) 0%, hsl(203 100% 45%) 100%)",
  },
  {
    id: 2,
    icon: Plane,
    title: "SSS for Filipinos Abroad",
    description:
      "Your SSS membership continues even when you're residing abroad - whether you're an Overseas Filipino worker, or a permanent resident of another country.",
    image: "linear-gradient(135deg, hsl(180 65% 35%) 0%, hsl(180 65% 50%) 100%)",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Be a Contribution Subsidy Provider",
    description:
      "Through your partnership, subsidize SSS contributions for self-employed, land-based Overseas Filipino workers and voluntary members.",
    image: "linear-gradient(135deg, hsl(10 90% 50%) 0%, hsl(25 95% 60%) 100%)",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Pay Contributions and Loans",
    description:
      "Regular payment of contributions is essential to qualify for SSS benefits and loans. Here's how and where you can make your SSS payments.",
    image: "linear-gradient(135deg, hsl(142 71% 35%) 0%, hsl(142 71% 50%) 100%)",
  },
  {
    id: 5,
    icon: Gift,
    title: "Apply for a Benefit or Loan",
    description:
      "We're here for you and your family. Know if you're qualified for an SSS benefit or loan, the requirements you need to prepare, and how to apply, wherever you are.",
    image: "linear-gradient(135deg, hsl(260 60% 45%) 0%, hsl(280 70% 60%) 100%)",
  },
  {
    id: 6,
    icon: MapPin,
    title: "Visit an SSS Branch",
    description:
      "Check out the list of SSS branches and service offices, here and abroad, to find one near you.",
    image: "linear-gradient(135deg, hsl(30 90% 45%) 0%, hsl(40 95% 55%) 100%)",
  },
];

export function HelpSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sss-blue-primary mb-4">
            How can SSS help you?
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the services and benefits we offer to protect you and your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <Card
              key={category.id}
              className={cn(
                "group cursor-pointer overflow-hidden border-none",
                "shadow-lg-modern hover:shadow-xl-modern",
                "hover:-translate-y-1 transition-all duration-300"
              )}
            >
              {/* Gradient Background Header */}
              <div
                className="h-32 flex items-center justify-center relative overflow-hidden"
                style={{ background: category.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <category.icon className="w-12 h-12 text-white relative z-10 group-hover:scale-110 transition-transform" />
              </div>

              <CardContent className="p-6 space-y-3">
                <h3 className="text-lg font-semibold text-sss-blue-primary group-hover:text-sss-blue-dark transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {category.description}
                </p>
                <div className="flex items-center text-sss-blue-primary text-sm font-medium pt-2">
                  <span className="group-hover:gap-1 flex items-center">
                    Learn More
                    <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
