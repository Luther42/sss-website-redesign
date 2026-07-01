import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Calendar, Tag, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { newsArticles } from "@/lib/demoData";
import { NewsModal } from "@/components/modals/NewsModal";

const categories = ["All", "Announcements", "Programs", "Policy Updates", "Events", "Benefits"];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof newsArticles[0] | null>(null);

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sss-blue-primary to-sss-blue-accent text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Newspaper className="w-8 h-8" />
            </div>
          </div>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            NEWS & UPDATES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Latest News & Updates
          </h1>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Stay informed with the latest announcements, programs, and developments from SSS
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search news articles..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-sss-blue-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredNews.length} {filteredNews.length === 1 ? 'article' : 'articles'}
        </p>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <Card 
              key={article.id}
              className="border-2 border-gray-200 hover:border-sss-blue-primary/40 transition-all duration-300 hover:shadow-lg cursor-pointer group"
              onClick={() => setSelectedArticle(article)}
            >
              {article.image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sss-blue-primary">{article.category}</Badge>
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <CardTitle className="text-lg text-sss-blue-primary group-hover:text-sss-blue-accent transition-colors line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredNews.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed">
            <Newspaper className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </Button>
          </Card>
        )}
      </div>

      {/* News Modal */}
      {selectedArticle && (
        <NewsModal 
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          article={selectedArticle}
        />
      )}
    </div>
  );
}
