import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { newsArticles } from "@/lib/demoData";
import { NewsModal } from "@/components/modals/NewsModal";
import type { NewsArticle } from "@/types";

export function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewsCountOpen, setIsNewsCountOpen] = useState(false);

  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1, 3);

  const handleReadMore = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Article */}
            <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 hover:from-sss-blue-accent hover:via-sss-blue-primary hover:to-sss-blue-accent transition-all duration-300">
              <Card className="group overflow-hidden border-none shadow-card-sss hover:shadow-xl-modern transition-all duration-300 hover:-translate-y-1 rounded-2xl">
                <div className="relative overflow-hidden">
                  {featuredArticle.featuredImage && (
                    <img
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      crossOrigin="anonymous"
                    />
                  )}
                  {!featuredArticle.featuredImage && (
                    <div className="relative w-full h-64 bg-gradient-to-br from-sss-blue-primary to-sss-blue-dark flex flex-col items-center justify-center text-center px-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Latest News & Updates
                      </h2>
                      <p className="text-white/90 text-lg max-w-xl">
                        Stay informed about SSS programs, benefits, and announcements
                      </p>
                    </div>
                  )}
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    <span className="px-2 py-1 bg-sss-blue-50 text-sss-blue-primary rounded-md text-xs font-medium">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-sss-blue-primary group-hover:text-sss-blue-dark transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Button 
                    variant="sss-outline" 
                    className="group/btn"
                    onClick={() => handleReadMore(featuredArticle)}
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Other Articles */}
            <div className="space-y-6">
              {otherArticles.map((article) => (
                <div 
                  key={article.id}
                  className="relative p-[2px] rounded-2xl bg-gradient-to-br from-sss-blue-primary via-sss-blue-accent to-sss-blue-primary/60 hover:from-sss-blue-accent hover:via-sss-blue-primary hover:to-sss-blue-accent transition-all duration-300"
                >
                  <Card
                    className="group cursor-pointer border-none shadow-md-modern hover:shadow-lg-modern transition-all duration-300 hover:-translate-y-0.5 rounded-2xl"
                    onClick={() => handleReadMore(article)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 mt-0.5" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-sss-blue-primary mb-2 group-hover:text-sss-blue-dark transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-sss-blue-primary text-sm font-medium">
                        <span className="group-hover:gap-1 flex items-center">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}

              <Button 
                variant="sss-primary" 
                className="w-full" 
                size="lg"
                onClick={() => setIsNewsCountOpen(true)}
              >
                View All News
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Count Dialog */}
      <Dialog open={isNewsCountOpen} onOpenChange={setIsNewsCountOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sss-blue-primary to-sss-blue-accent flex items-center justify-center">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">
              {newsArticles.length > 0 ? "News Articles Available" : "News Updates"}
            </DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              {newsArticles.length > 0 ? (
                <>
                  <span className="text-4xl font-bold text-sss-blue-primary block mb-2">
                    {newsArticles.length}
                  </span>
                  <span className="text-foreground/70">
                    {newsArticles.length === 1 
                      ? "news article is currently available" 
                      : "news articles are currently available"}
                  </span>
                </>
              ) : (
                <div className="py-4">
                  <p className="text-xl font-semibold text-foreground mb-2">
                    More News Coming Soon!
                  </p>
                  <p className="text-muted-foreground">
                    Check back later for the latest SSS updates and announcements.
                  </p>
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              variant="sss-primary" 
              onClick={() => setIsNewsCountOpen(false)}
              className="px-8"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* News Modal */}
      <NewsModal
        article={selectedArticle}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
