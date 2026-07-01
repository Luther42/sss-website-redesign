import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PensionCalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PensionCalculatorModal({
  open,
  onOpenChange,
}: PensionCalculatorModalProps) {
  const [age, setAge] = useState([35]);
  const [monthlySalary, setMonthlySalary] = useState(30000);
  const [yearsOfContribution, setYearsOfContribution] = useState([10]);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    setIsCalculating(true);
    
    // Simulate calculation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple pension calculation formula (demo purposes)
    const baseAmount = monthlySalary * 0.4;
    const yearBonus = yearsOfContribution[0] * 100;
    const estimatedPension = Math.floor(baseAmount + yearBonus);

    setResult(estimatedPension);
    setIsCalculating(false);
  };

  const handleReset = () => {
    setAge([35]);
    setMonthlySalary(30000);
    setYearsOfContribution([10]);
    setResult(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sss-blue-primary flex items-center gap-2">
            <Calculator className="w-6 h-6" />
            Pension Calculator
          </DialogTitle>
          <DialogDescription>
            Estimate your future SSS pension based on your contributions. This is
            a demonstration calculator only.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Current Age */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Current Age
              </Label>
              <span className="text-sm font-semibold text-sss-blue-primary">
                {age[0]} years old
              </span>
            </div>
            <Slider
              value={age}
              onValueChange={setAge}
              min={18}
              max={65}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>18</span>
              <span>65</span>
            </div>
          </div>

          {/* Monthly Salary */}
          <div className="space-y-3">
            <Label htmlFor="salary" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Average Monthly Salary (₱)
            </Label>
            <Input
              id="salary"
              type="number"
              value={monthlySalary}
              onChange={(e) => setMonthlySalary(Number(e.target.value))}
              min={1000}
              max={200000}
              step={1000}
            />
          </div>

          {/* Years of Contribution */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Years of Contribution
              </Label>
              <span className="text-sm font-semibold text-sss-blue-primary">
                {yearsOfContribution[0]} years
              </span>
            </div>
            <Slider
              value={yearsOfContribution}
              onValueChange={setYearsOfContribution}
              min={1}
              max={40}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 year</span>
              <span>40 years</span>
            </div>
          </div>

          {/* Result */}
          {result !== null && (
            <Card className="border-sss-blue-primary/20 bg-sss-blue-50/50 animate-scale-in">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    Estimated Monthly Pension
                  </p>
                  <p className="text-4xl font-bold text-sss-blue-primary">
                    ₱{result.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    This is an estimate based on current SSS rules. Actual pension may
                    vary.
                  </p>
                </div>

                <div className="mt-4 p-3 bg-white rounded-lg border">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Retirement Age
                      </p>
                      <p className="text-sm font-semibold">65 years</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Total Years
                      </p>
                      <p className="text-sm font-semibold">
                        {yearsOfContribution[0]} years
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Annual Pension
                      </p>
                      <p className="text-sm font-semibold">
                        ₱{(result * 12).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleCalculate}
              variant="sss-gradient"
              className="flex-1"
              size="lg"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Pension"}
            </Button>
            <Button
              onClick={handleReset}
              variant="sss-outline"
              size="lg"
            >
              Reset
            </Button>
          </div>

          {/* Demo Notice */}
          <div className="bg-warning/10 border border-warning/30 rounded-lg p-3">
            <p className="text-xs text-center text-muted-foreground">
              <strong className="text-warning">Demo Calculator:</strong> This
              calculator uses simplified formulas for demonstration purposes. For
              accurate pension estimates, please consult SSS official calculators.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
