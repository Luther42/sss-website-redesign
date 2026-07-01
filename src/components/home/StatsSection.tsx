import { useEffect, useRef, useState } from "react";
import { Users, DollarSign, MapPin, Calendar } from "lucide-react";
import { statistics } from "@/lib/demoData";

const stats = [
  {
    id: 1,
    icon: Users,
    label: "SSS Members",
    value: statistics.members,
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: DollarSign,
    label: "Benefits Paid Yearly",
    value: statistics.benefitsPaid,
    suffix: "",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    icon: MapPin,
    label: "Branches Nationwide",
    value: statistics.branches,
    suffix: "+",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    icon: Calendar,
    label: "Years of Service",
    value: statistics.years,
    suffix: "",
    color: "from-purple-500 to-pink-500",
  },
];

function AnimatedNumber({ value, duration = 2000 }: { value: number | string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || typeof value !== "number") return;

    const startTime = Date.now();
    const endValue = value;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * endValue);

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {typeof value === "number"
        ? displayValue.toLocaleString()
        : value}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-sss-blue-primary via-sss-blue-dark to-[hsl(220_85%_35%)] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SSS by the Numbers
          </h2>
          <p className="text-white/80 text-lg">
            Serving millions of Filipinos with dedication and excellence
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${stat.id * 100}ms` }}
            >
              <div className="mb-4 inline-flex">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix && (
                    <span className="text-4xl md:text-5xl font-bold ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-white/70 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
