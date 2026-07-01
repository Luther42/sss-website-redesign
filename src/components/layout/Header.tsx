import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoginModal } from "@/components/modals/LoginModal";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "About SSS", href: "/about" },
  { name: "Membership & Coverage", href: "/membership" },
  { name: "News", href: "/news" },
  { name: "Benefits", href: "/benefits" },
  { name: "Loans", href: "/loans" },
  { name: "Laws & Circulars", href: "/laws" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Contact Us", href: "/contact" },
];

// Search database with keywords
const searchDatabase = [
  { title: "Become a Member", keywords: ["register", "join", "member", "sign up", "enroll", "new member"], path: "/become-member" },
  { title: "OFW Program", keywords: ["overseas", "abroad", "ofw", "filipino workers", "international"], path: "/ofw-program" },
  { title: "Contribution Subsidy", keywords: ["subsidy", "support", "assistance", "contribution", "help"], path: "/contribution-subsidy" },
  { title: "Pay Contributions", keywords: ["pay", "payment", "contribute", "monthly", "dues"], path: "/pay-contributions" },
  { title: "Apply for Benefits", keywords: ["benefit", "claim", "apply", "application", "retirement", "pension"], path: "/apply-benefit-loan" },
  { title: "Branch Locator", keywords: ["branch", "office", "location", "address", "find", "near me"], path: "/branch-locator" },
  { title: "Retirement Benefits", keywords: ["retire", "retirement", "pension", "old age", "senior"], path: "/benefits" },
  { title: "Disability Benefits", keywords: ["disability", "disabled", "permanent", "partial"], path: "/benefits" },
  { title: "Maternity Benefits", keywords: ["maternity", "pregnancy", "mother", "baby", "newborn"], path: "/benefits" },
  { title: "Salary Loan", keywords: ["salary loan", "loan", "borrow", "emergency", "cash"], path: "/loans" },
  { title: "Calamity Loan", keywords: ["calamity", "disaster", "emergency loan", "typhoon", "flood"], path: "/loans" },
  { title: "Housing Loan", keywords: ["housing", "house", "home", "property", "mortgage"], path: "/loans" },
  { title: "About SSS", keywords: ["about", "information", "history", "vision", "mission"], path: "/about" },
  { title: "Membership & Coverage", keywords: ["membership", "coverage", "types", "employed", "self-employed"], path: "/membership" },
  { title: "Contact Us", keywords: ["contact", "help", "support", "hotline", "email", "call"], path: "/contact" },
  { title: "News & Updates", keywords: ["news", "announcements", "updates", "latest"], path: "/news" },
  { title: "Laws & Circulars", keywords: ["laws", "circulars", "policy", "regulations", "rules"], path: "/laws" },
  { title: "Career Opportunities", keywords: ["career", "job", "work", "hiring", "employment"], path: "/opportunities" },
  { title: "MySSS Login", keywords: ["login", "sign in", "account", "my sss", "portal"], action: "login" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Filter search results based on query
  const searchResults = searchQuery.trim().length > 0
    ? searchDatabase.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.keywords.some((keyword) => keyword.toLowerCase().includes(query))
        );
      }).slice(0, 6)
    : [];

  const handleSearchItemClick = (item: typeof searchDatabase[0]) => {
    if (item.action === "login") {
      setIsSearchOpen(false);
      setIsLoginModalOpen(true);
    } else {
      setIsSearchOpen(false);
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md-modern"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100028286/6a66.png" 
              alt="SSS Logo" 
              className="h-10 md:h-12 w-auto"
              crossOrigin="anonymous"
            />
            <div className="hidden sm:block">
              <div className="text-xs text-muted-foreground">Republic of the Philippines</div>
              <div className="text-sm md:text-base font-semibold text-sss-blue-primary">
                SOCIAL SECURITY SYSTEM
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-all",
                  location.pathname === item.href
                    ? "text-sss-blue-primary bg-sss-blue-50"
                    : "text-foreground hover:text-sss-blue-primary hover:bg-sss-blue-50/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-sss-blue-50"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="sss-primary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Login to MySSS
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white animate-slide-up">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium rounded-lg transition-all",
                  location.pathname === item.href
                    ? "text-sss-blue-primary bg-sss-blue-50"
                    : "text-foreground hover:bg-sss-blue-50/50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="sss-primary"
              className="w-full mt-4"
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Login to MySSS
            </Button>
          </nav>
        </div>
      )}

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Search className="w-5 h-5 text-sss-blue-primary" />
              Search SSS Services
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="What are you looking for? (e.g., loan, benefits, membership...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-base"
              autoFocus
            />

            {searchQuery.trim().length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="text-sm">Start typing to search for SSS services, benefits, loans, and more...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="space-y-2 max-h-96 overflow-y-auto">
                <p className="text-xs text-muted-foreground px-1 mb-2">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearchItemClick(result)}
                    className="w-full text-left p-4 rounded-lg border border-border hover:border-sss-blue-primary hover:bg-sss-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-sss-blue-primary transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {result.keywords.slice(0, 3).join(" • ")}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-sss-blue-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-8 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-foreground font-medium mb-1">No results found</p>
                <p className="text-sm text-muted-foreground">
                  Try searching for "loan", "benefits", "membership", "contact", etc.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <LoginModal open={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
    </header>
  );
}
