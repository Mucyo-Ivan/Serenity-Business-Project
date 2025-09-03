import { Building2, Mail, MapPin, Phone, Instagram, Facebook, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-muted-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-xl">Serenity</h3>
                <p className="text-sm text-muted-foreground font-medium">Business Project</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building communities through education, technology, and sustainable business solutions.
              Led by CEO RUHARA MIHIGO Shammy, we're committed to creating opportunities and serving community needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/education" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Education</Link></li>
              <li><Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Technology</Link></li>
              <li><Link to="/electronics" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Electronics</Link></li>
              <li><Link to="/engineering" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Engineering</Link></li>
            </ul>
          </div>

          {/* Business Ventures */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Ventures</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Our Shop</Link></li>
              <li><Link to="/video-game-center" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Video Game Center</Link></li>
              <li><Link to="/agriculture" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Agriculture</Link></li>
              <li><Link to="/hospitality" className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block">Hospitality</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>Rwanda</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>mihigoshammy66@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>+250 792 504 368</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>@shammymihigo</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Facebook className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                <span>mihigo.shammy.7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 Serenity Business Project. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">
                CEO: <span className="font-semibold text-primary">RUHARA MIHIGO Shammy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;