import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-warning/10 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-warning" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Project Disclaimer & Information</h1>
        </div>

        <div className="space-y-8 bg-card rounded-xl p-8 shadow-card-sss">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-sss-blue-primary">Purpose of This Website</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is a conceptual redesign created strictly for educational and portfolio purposes. 
              It is a demonstration of design skills, user experience (UX) research, and interface development. 
              It is not a live, commercial website, and no services or products are actually being offered for sale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-sss-blue-primary">Non-Affiliation Statement</h2>
            <p className="text-muted-foreground leading-relaxed">
              I am not affiliated with, employed by, or endorsed by Republic of the Philippines Social Security System. 
              This website was created independently as a personal exercise to explore design implementation and 
              is not an official representation of the agency or business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-sss-blue-primary">Intellectual Property & Fair Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              Existing Brand Assets: Any logos, trademarks, or original copy belonging to Republic of the Philippines 
              Social Security System used in this redesign are the property of their respective owners. Their inclusion 
              is solely for the purpose of demonstrating a non-commercial, educational UX/UI design concept and 
              constitutes fair use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-sss-blue-primary">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event will the creator be liable for any loss or damage, including without limitation, indirect or 
              consequential loss or damage arising out of or in connection with the use of this conceptual website.
            </p>
          </section>

          <section className="bg-warning/5 border border-warning/20 rounded-lg p-6">
            <p className="text-sm text-foreground font-medium">
              <strong>Disclaimer Notice:</strong> This disclaimer is provided in good faith. If you are a representative 
              of the Republic of the Philippines Social Security System and have concerns about this project, please 
              feel free to contact me so that any issues can be addressed promptly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
