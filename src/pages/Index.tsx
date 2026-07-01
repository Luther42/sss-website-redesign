import { HeroCarousel } from "@/components/home/HeroCarousel";
import { QuickServices } from "@/components/home/QuickServices";
import { ServiceCards } from "@/components/home/ServiceCards";
import { StatsSection } from "@/components/home/StatsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { BulletinBoard } from "@/components/home/BulletinBoard";

const Index = () => {
  return (
    <div className="w-full">
      <HeroCarousel />
      <QuickServices />
      <StatsSection />
      <BulletinBoard />
      <NewsSection />
      <ServiceCards />
    </div>
  );
};

export default Index;
