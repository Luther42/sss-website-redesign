import { FileText, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PdfDemoDialogProps {
  open: boolean;
  onClose: () => void;
  fileName?: string;
}

export function PdfDemoDialog({ open, onClose, fileName }: PdfDemoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-sss-blue-primary/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-sss-blue-primary" />
            </div>
            <DialogTitle className="text-lg text-sss-blue-primary">PDF Download Notice</DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-3 pt-2">
            {fileName && (
              <p className="text-foreground font-medium">"{fileName}"</p>
            )}
            <p className="text-muted-foreground">
              In the actual SSS website, this button would download or open a{" "}
              <span className="font-semibold text-sss-blue-primary">PDF document</span> containing
              the relevant forms, guidelines, or official circulars.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 flex gap-2">
              <ExternalLink className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-800">
                <span className="font-semibold">For Demonstration Purposes Only.</span> This is a
                university project concept redesign of the SSS website. No actual file download is
                implemented.
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-2">
          <Button variant="sss-primary" size="sm" onClick={onClose}>
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
