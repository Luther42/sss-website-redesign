import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { Bulletin } from "@/types";
import { cn } from "@/lib/utils";

interface AnnouncementModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  announcement: Bulletin | null;
}

export function AnnouncementModal({ open, onOpenChange, announcement }: AnnouncementModalProps) {
  if (!announcement) return null;

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-200",
    medium: "bg-amber-100 text-amber-700 border-amber-200",
    low: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium border",
                    priorityColors[announcement.priority]
                  )}
                >
                  {announcement.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(announcement.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl text-sss-blue-primary pr-8">
                {announcement.title}
              </DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="mt-6 space-y-4">
          <div className="prose prose-blue max-w-none">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {announcement.content}
            </p>
          </div>

          <div className="mt-8 p-4 bg-sss-blue-50 rounded-lg border border-sss-blue-100">
            <p className="text-sm text-muted-foreground">
              <strong className="text-sss-blue-primary">Important Note:</strong> This is a demonstration announcement. For real SSS announcements and updates, please visit the official SSS website or contact your nearest SSS branch.
            </p>
          </div>

          {announcement.link && (
            <div className="mt-6 flex gap-3">
              <Button variant="sss-primary" className="flex-1">
                Visit Official Page
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
