import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { bulletins } from "@/lib/demoData";

export function BulletinBoard() {
  const bulletin = bulletins[0]; // Only displaying first/main bulletin

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white via-sss-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-sss-blue-primary mb-3">
            Bulletin Board
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest announcements and important updates from SSS
          </p>
        </div>

        {/* Bulletin Card */}
        <div className="relative p-[3px] rounded-2xl bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 max-w-5xl mx-auto">
          <Card className="shadow-elegant border-none overflow-hidden bg-white backdrop-blur-sm rounded-2xl">
            <CardContent className="p-8 md:p-12">
              {/* Category and Date Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border shadow-sm ${priorityColors[bulletin.priority]}`}
                >
                  {bulletin.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{new Date(bulletin.date).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-sss-blue-primary mb-5 leading-tight">
                {bulletin.title}
              </h3>
              
              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-8 text-base md:text-lg">
                {bulletin.content}
              </p>

              {/* Action Button */}
              {bulletin.link && (
                <Button 
                  variant="sss-primary"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/survey";
                  }}
                  className="shadow-md"
                >
                  Enter Survey
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
