import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ApplicationFormModal } from "@/components/modals/ApplicationFormModal";
import { LoginModal } from "@/components/modals/LoginModal";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const slides = [
  {
    id: 1,
    title: "Get the MySSS Card",
    subtitle: "Your new SSS functional ID and Bank account in one.",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/b31e.png",
    cta: "Apply Now",
    ctaSecondary: "Learn More",
    applicationType: "mysss-card" as const,
    actionType: "modal" as const,
  },
  {
    id: 2,
    title: "Basta SSS member,",
    subtitle: "bawat OFW protektado.",
    description: "May maaasahan, nasaan man sa mundo.",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-ofw-protection-hero_bed7e613.png",
    cta: "Get an SS Number",
    ctaSecondary: "Learn More",
    applicationType: "ss-number" as const,
    actionType: "modal" as const,
  },
  {
    id: 3,
    title: "Need a SALARY LOAN?",
    subtitle: "Online lang 'yan sa MySSS!",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/sss-salary-loan-hero_a1e796b5.png",
    cta: "Apply Now",
    ctaSecondary: "Learn More",
    applicationType: "salary-loan" as const,
    actionType: "modal" as const,
  },
  {
    id: 4,
    title: "Get a",
    titleHighlight: "Pension Account",
    titleSuffix: "abroad",
    subtitle: "Available for overseas Filipinos, former Filipinos with acquired foreign citizenship, and foreign nationals",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/bf8f.png",
    cta: "Learn How",
    actionType: "navigate" as const,
    navigateTo: "/ofw-program",
  },
  {
    id: 5,
    title: "Are you future ready?",
    subtitle: "Start your journey to financial freedom with MySSS Pension Booster!",
    image: "https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/ef65c4f8-847c-45.png",
    cta: "Enroll via MySSS",
    ctaSecondary: "Learn more",
    actionType: "login" as const,
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [applicationType, setApplicationType] = useState<"mysss-card" | "ss-number" | "salary-loan">("mysss-card");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handlePrimaryAction = (slide: typeof slides[0]) => {
    if (slide.actionType === "modal" && slide.applicationType) {
      setApplicationType(slide.applicationType);
      setShowApplicationModal(true);
    } else if (slide.actionType === "navigate" && slide.navigateTo) {
      navigate(slide.navigateTo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (slide.actionType === "login") {
      setShowLoginModal(true);
    }
  };

  const handleSecondaryAction = (slide: typeof slides[0]) => {
    if (slide.actionType === "login" && slide.ctaSecondary) {
      toast.info("Pension Booster Information", {
        description: "Learn more about growing your retirement savings with MySSS Pension Booster.",
      });
    } else {
      toast.info("More Information", {
        description: `Learn more about ${slide.title} in the detailed information page.`,
      });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-sss-blue-primary via-sss-blue-accent to-sss-blue-light">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "transition-all duration-700 ease-in-out",
            index === current
              ? "opacity-100 relative"
              : "opacity-0 absolute inset-0 pointer-events-none"
          )}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px] md:min-h-[600px] py-12 md:py-20">
              {/* Content */}
              <div className="text-white space-y-4 animate-slide-up max-w-xl" style={{ animationDelay: `${index === current ? '200ms' : '0ms'}` }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  {slide.title}
                  {slide.titleHighlight && (
                    <span className="block text-sss-accent">{slide.titleHighlight}</span>
                  )}
                  {slide.titleSuffix && ` ${slide.titleSuffix}`}
                </h1>
                <p className="text-lg md:text-xl font-medium text-white/90">
                  {slide.subtitle}
                </p>
                {slide.description && (
                  <p className="text-base md:text-lg text-white/80">
                    {slide.description}
                  </p>
                )}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button 
                    variant="carousel-pill" 
                    size="lg"
                    onClick={() => handlePrimaryAction(slide)}
                  >
                    {slide.cta}
                  </Button>
                  {slide.ctaSecondary && (
                    <Button 
                      variant="carousel-pill-ghost" 
                      size="lg"
                      onClick={() => handleSecondaryAction(slide)}
                    >
                      {slide.ctaSecondary}
                    </Button>
                  )}
                </div>
              </div>

              {/* Image with Natural Blend Effect - Full Height Right Side */}
              <div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-3/5 animate-fade-in" style={{ animationDelay: `${index === current ? '400ms' : '0ms'}` }}>
                <div className="relative h-full overflow-hidden">
                  {/* Image fills full height and extends to right */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute right-0 h-full w-full object-cover object-right"
                    crossOrigin="anonymous"
                    style={{
                      maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 16%, black 20%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 8%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 16%, black 20%)',
                    }}
                  />
                  
                  {/* Soft gradient overlay on left edge for ultra-smooth blend */}
                  <div 
                    className="absolute inset-y-0 left-0 pointer-events-none"
                    style={{
                      width: '20%',
                      background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1) 0%, transparent 100%)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls - Bottom Right with Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-1.5 rounded-full bg-sss-blue-primary backdrop-blur-md border border-sss-blue-light text-white hover:bg-sss-blue-accent transition-all hover:scale-110 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={next}
            className="p-1.5 rounded-full bg-sss-blue-primary backdrop-blur-md border border-sss-blue-light text-white hover:bg-sss-blue-accent transition-all hover:scale-110 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
        
        {/* Divider */}
        <div className="w-px h-4 bg-sss-blue-primary" />
        
        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlaying(false);
              }}
              className={cn(
                "h-1 rounded-full transition-all",
                index === current
                  ? "w-8 bg-sss-blue-primary shadow-sm"
                  : "w-5 bg-sss-blue-light hover:bg-sss-blue-accent"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationFormModal 
        open={showApplicationModal}
        onOpenChange={setShowApplicationModal}
        applicationType={applicationType}
      />

      {/* Login Modal */}
      <LoginModal 
        open={showLoginModal}
        onOpenChange={setShowLoginModal}
      />
    </div>
  );
}
