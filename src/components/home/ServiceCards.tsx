import { UserCircle, CreditCard, MapPin, Building, Users, Gift, Plane } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: Users,
    title: "Become an SSS Member",
    description: "It pays to be an SSS member. Read about the SSS coverage program and know the type of membership that's for you.",
    gradient: "from-blue-600 to-blue-800",
    route: "/become-member",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-membership-card_b28b15f0.png",
  },
  {
    id: 2,
    icon: Plane,
    title: "SSS for Filipinos Abroad",
    description: "Your SSS membership continues even when you're residing abroad - whether you're an Overseas Filipino worker, or a permanent resident of another country.",
    gradient: "from-teal-600 to-cyan-700",
    route: "/ofw-program",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-ofw-abroad-card_d3416ac8.png",
  },
  {
    id: 3,
    icon: Building,
    title: "Be a Contribution Subsidy Provider",
    description: "Through your partnership, subsidize SSS contributions for self-employed, land-based Overseas Filipino workers and voluntary members.",
    gradient: "from-orange-600 to-red-600",
    route: "/contribution-subsidy",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-contribution-subsidy-card_bab86ecb.png",
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Pay Contributions and Loans",
    description: "Regular payment of contributions is essential to qualify for SSS benefits and loans. Here's how and where you can make your SSS payments.",
    gradient: "from-green-600 to-emerald-700",
    route: "/pay-contributions",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-payment-card_5020479b.png",
  },
  {
    id: 5,
    icon: Gift,
    title: "Apply for a Benefit or Loan",
    description: "We're here for you and your family. Know if you're qualified for an SSS benefit or loan, the requirements you need to prepare, and how to apply, wherever you are.",
    gradient: "from-purple-600 to-violet-700",
    route: "/apply-benefit-loan",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-benefits-loan-card_b5bfcbef.png",
  },
  {
    id: 6,
    icon: MapPin,
    title: "Visit an SSS Branch",
    description: "Check out the list of SSS branches and service offices, here and abroad, to find one near you.",
    gradient: "from-amber-600 to-orange-700",
    route: "/branch-locator",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/8052.png",
  },
];

export function ServiceCards() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sss-blue-primary mb-4">
            How can SSS help you?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the services and benefits we offer to protect you and your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 hover:from-sss-blue-accent hover:via-sss-blue-primary hover:to-sss-blue-accent transition-all duration-300"
            >
              <Card
                onClick={() => navigate(service.route)}
                className={cn(
                  "group cursor-pointer border-none shadow-lg-modern hover:shadow-xl-modern h-full overflow-hidden relative",
                  "hover:-translate-y-2 transition-all duration-300 rounded-2xl bg-white"
                )}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Icon - Positioned to overlap between image and content */}
                <div className="absolute left-6 top-[168px] z-20">
                  <div className="p-[3px] rounded-full bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 group-hover:from-sss-blue-accent group-hover:via-sss-blue-primary group-hover:to-sss-blue-accent transition-all duration-300 shadow-xl">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-full bg-white flex items-center justify-center",
                        "group-hover:scale-110 transition-transform duration-300"
                      )}
                    >
                      <service.icon className="w-7 h-7 text-sss-blue-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="pt-10 pb-6 px-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-sss-blue-primary mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-sss-blue-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
