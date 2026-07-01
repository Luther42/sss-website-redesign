import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, User, Tag, Clock } from "lucide-react";
import type { NewsArticle } from "@/types";

interface NewsModalProps {
  article: NewsArticle | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewsModal({ article, open, onOpenChange }: NewsModalProps) {
  if (!article) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="space-y-4">
            {/* Featured Image */}
            {article.featuredImage && (
              <div className="w-full h-64 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
            )}

            {/* Category & Date */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="px-3 py-1 bg-sss-blue-50 text-sss-blue-primary rounded-md font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            <DialogTitle className="text-3xl font-bold text-sss-blue-primary leading-tight">
              {article.title}
            </DialogTitle>

            {/* Author */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>By {article.author}</span>
            </div>
          </div>
        </DialogHeader>

        {/* Article Content */}
        <div className="space-y-6 py-6">
          {/* Excerpt */}
          <div className="text-lg font-medium text-foreground leading-relaxed border-l-4 border-sss-blue-primary pl-4 bg-sss-blue-50/30 py-3 rounded-r">
            {article.excerpt}
          </div>

          {/* Full Content */}
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {article.content}
            </p>

            {/* Demo content extension */}
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                The Social Security System (SSS) remains committed to providing comprehensive 
                social protection to all Filipino workers and their families. Through continuous 
                innovation and improvement of our services, we ensure that every member receives 
                the benefits they deserve.
              </p>
              <p>
                This initiative is part of our ongoing efforts to enhance member experience and 
                ensure sustainable social security coverage for all Filipinos, whether working 
                locally or abroad.
              </p>
              <p>
                For more information about SSS programs and services, members can visit any SSS 
                branch nationwide or access their accounts through the MySSS portal available 
                24/7 online.
              </p>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="pt-4 border-t">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-sss-blue-50 hover:text-sss-blue-primary transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Demo Notice */}
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 mt-6">
            <p className="text-xs text-center text-muted-foreground">
              <strong className="text-warning">Demo Article:</strong> This is a demonstration 
              interface for educational purposes. The content shown is simulated and for concept 
              presentation only.
            </p>
          </div>

          {/* Share & Close */}
          <div className="flex gap-3 pt-4">
            <Button variant="sss-primary" className="flex-1">
              Share Article
            </Button>
            <Button 
              variant="sss-outline" 
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
