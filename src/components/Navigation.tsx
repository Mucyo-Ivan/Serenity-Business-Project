import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Technology", path: "/technology" },
    { name: "Our Shop", path: "/shop" },
    { name: "Electronics", path: "/electronics" },
    { name: "Video Game Center", path: "/video-game-center" },
    { name: "Engineering Services", path: "/engineering" },
    { name: "Agriculture", path: "/agriculture" },
    { name: "Hospitality", path: "/hospitality" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="p-2 rounded-2xl bg-gradient-primary shadow-lg group-hover:shadow-xl transition-all duration-300">
              <img 
                src="/serenity-logo.png" 
                alt="Serenity Business Project Logo" 
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="flex items-center">
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                Serenity Business Project
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                  isActive(item.path)
                    ? "text-primary bg-primary-light shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-sm"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
                )}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-12 w-12 rounded-xl hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-border">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                    isActive(item.path)
                      ? "text-primary bg-primary-light shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;