import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-xl bg-gradient-primary">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Serenity Business</h3>
                <p className="text-sm text-muted-foreground">Project</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Building communities through education, technology, and sustainable business solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/education" className="text-sm text-muted-foreground hover:text-primary transition-fast">Education</Link></li>
              <li><Link to="/technology" className="text-sm text-muted-foreground hover:text-primary transition-fast">Technology</Link></li>
              <li><Link to="/electronics" className="text-sm text-muted-foreground hover:text-primary transition-fast">Electronics</Link></li>
              <li><Link to="/engineering" className="text-sm text-muted-foreground hover:text-primary transition-fast">Engineering</Link></li>
            </ul>
          </div>

          {/* Business Ventures */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ventures</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-fast">Our Shop</Link></li>
              <li><Link to="/video-game-center" className="text-sm text-muted-foreground hover:text-primary transition-fast">Video Game Center</Link></li>
              <li><Link to="/agriculture" className="text-sm text-muted-foreground hover:text-primary transition-fast">Agriculture</Link></li>
              <li><Link to="/hospitality" className="text-sm text-muted-foreground hover:text-primary transition-fast">Hospitality</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Rwanda</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@serenityproject.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+250 XXX XXX XXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Serenity Business Project. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              CEO: RUHARA MIHIGO Shammy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;