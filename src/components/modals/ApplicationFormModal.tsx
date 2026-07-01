import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, User, Mail, Phone, MapPin, FileText } from "lucide-react";

interface ApplicationFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  applicationType: "mysss-card" | "ss-number" | "salary-loan";
}

export function ApplicationFormModal({ open, onOpenChange, applicationType }: ApplicationFormModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: "",
    email: "",
    phone: "",
    address: "",
    employmentStatus: "",
  });

  const getTitle = () => {
    switch (applicationType) {
      case "mysss-card":
        return "MySSS Card Application";
      case "ss-number":
        return "SS Number Registration";
      case "salary-loan":
        return "Salary Loan Application";
      default:
        return "Application Form";
    }
  };

  const getDescription = () => {
    switch (applicationType) {
      case "mysss-card":
        return "Apply for your MySSS Card - your functional ID and bank account in one.";
      case "ss-number":
        return "Register for your Social Security Number to start your coverage.";
      case "salary-loan":
        return "Apply for a salary loan online. Fast and convenient!";
      default:
        return "Fill out the form below to submit your application.";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application Submitted!", {
      description: "This is a demo. No data was actually sent. You will receive a confirmation email shortly.",
    });
    onOpenChange(false);
    setFormData({
      firstName: "",
      lastName: "",
      middleName: "",
      birthDate: "",
      email: "",
      phone: "",
      address: "",
      employmentStatus: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-sss-blue-primary">{getTitle()}</DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
          <div className="mt-2 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-xs text-warning-foreground">
              <strong>Demo Notice:</strong> This is a demonstration form. No data will be stored or transmitted.
            </p>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                placeholder="Juan"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                placeholder="Dela Cruz"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="middleName">Middle Name</Label>
            <Input
              id="middleName"
              value={formData.middleName}
              onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
              placeholder="Santos"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthDate" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Date of Birth *
            </Label>
            <Input
              id="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="juan.delacruz@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+63 912 345 6789"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Complete Address *
            </Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              placeholder="123 Street, Barangay, City, Province"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employmentStatus" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Employment Status *
            </Label>
            <Select
              value={formData.employmentStatus}
              onValueChange={(value) => setFormData({ ...formData, employmentStatus: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your employment status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="self-employed">Self-Employed</SelectItem>
                <SelectItem value="ofw">OFW</SelectItem>
                <SelectItem value="voluntary">Voluntary Member</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {applicationType === "salary-loan" && (
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Desired Loan Amount (PHP) *</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="50000"
                required
              />
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1" variant="sss-primary">
              Submit Application
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
