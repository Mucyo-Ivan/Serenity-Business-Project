import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Code, 
  ShoppingBag, 
  Smartphone, 
  Gamepad2, 
  Hammer, 
  Wheat, 
  Hotel,
  Building2,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Send,
  MessageCircle,
  ExternalLink,
  Heart,
  Lightbulb,
  Handshake,
  Target
} from "lucide-react";

const Index = () => {
  const businessSections = [
    {
      title: "Education",
      description: "Access to world-class educational platforms and learning resources",
      icon: BookOpen,
      path: "/education",
      color: "primary"
    },
    {
      title: "Technology",
      description: "Professional services in graphic design, web development, and software engineering",
      icon: Code, 
      path: "/technology",
      color: "secondary"
    },
    {
      title: "Our Shop",
      description: "Future retail business creating employment opportunities for youth",
      icon: ShoppingBag,
      path: "/shop", 
      color: "accent"
    },
    {
      title: "Electronics",
      description: "Electronics education, phone repair workshop, and professional services",
      icon: Smartphone,
      path: "/electronics",
      color: "primary"
    },
    {
      title: "Video Game Center",
      description: "Educational gaming center encouraging school attendance and positive values",
      icon: Gamepad2,
      path: "/video-game-center",
      color: "secondary"
    },
    {
      title: "Engineering Services",
      description: "Affordable housing and construction services for communities in need",
      icon: Hammer,
      path: "/engineering",
      color: "accent"
    },
    {
      title: "Agricultural Project",
      description: "Sustainable farming producing milk, meat, bananas, and honey",
      icon: Wheat,
      path: "/agriculture",
      color: "primary"
    },
    {
      title: "Hospitality",
      description: "Future guest house and restaurant with recreation facilities",
      icon: Hotel,
      path: "/hospitality",
      color: "secondary"
    }
  ];

  const aboutPoints = [
    "Comprehensive business portfolio serving diverse community needs",
    "Focus on education, technology, and sustainable development",
    "Creating employment opportunities for youth and communities", 
    "Building towards financial freedom through multiple revenue streams",
    "Committed to social impact and community development"
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0792504368",
      href: "tel:0792504368",
      description: "Call us anytime for inquiries"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mihigoshammy66@gmail.com",
      href: "mailto:mihigoshammy66@gmail.com",
      description: "Send us your questions or proposals"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@shammymihigo",
      href: "https://www.instagram.com/shammymihigo/",
      description: "Follow our daily updates"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "mihigo.shammy.7",
      href: "https://web.facebook.com/mihigo.shammy.7",
      description: "Connect with us on Facebook"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize community needs and sustainable development in everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging technology and creative solutions to solve real-world problems."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building strong partnerships with communities, businesses, and individuals."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality services and sustainable solutions."
    }
  ];

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-hero min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-float mb-6 lg:mx-0 mx-auto w-fit">
                <Building2 className="h-20 w-20 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Serenity Business
                <span className="block text-4xl md:text-5xl text-white/90">Project</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Building communities through education, technology, and sustainable business solutions. 
                Creating opportunities, serving needs, and working toward financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Learn Our Story
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-glow">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                  Our Mission
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90">
                    <Users className="h-6 w-6 mr-3 text-secondary flex-shrink-0" />
                    <span>Creating employment for youth and communities</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <BookOpen className="h-6 w-6 mr-3 text-accent flex-shrink-0" />
                    <span>Providing access to quality education and technology</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Building2 className="h-6 w-6 mr-3 text-secondary flex-shrink-0" />
                    <span>Building sustainable business solutions</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Award className="h-6 w-6 mr-3 text-accent flex-shrink-0" />
                    <span>Achieving financial freedom through diverse ventures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sections Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Business Ventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Serenity Business Project encompasses multiple ventures designed to serve community needs, 
              create employment opportunities, and build sustainable economic growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link key={index} to={section.path} className="group">
                  <Card className="h-full hover:shadow-glow transition-smooth gradient-card group-hover:scale-105">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 group-hover:scale-110 transition-smooth">
                        <div className={`p-4 rounded-2xl bg-gradient-${section.color}`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-fast">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm leading-relaxed mb-4">
                        {section.description}
                      </CardDescription>
                      <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:text-primary-hover transition-fast">
                        Learn More 
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Serenity Business Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded and led by <strong className="text-primary">RUHARA MIHIGO Shammy</strong>, 
              our mission is to create sustainable business solutions that serve communities, 
              generate employment, and build pathways to financial freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Leadership Profile */}
            <div>
              <Card className="gradient-card shadow-glow">
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl">RUHARA MIHIGO Shammy</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    Chief Executive Officer & Founder
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-4 bg-primary-light rounded-lg">
                    <h4 className="font-semibold text-primary mb-2 flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Professional Certifications
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Certified in graphic design, web development, and various technology disciplines, 
                      bringing proven expertise to serve clients and communities.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    {aboutPoints.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="gradient-card hover:shadow-glow transition-smooth">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-gradient-primary">
                            <IconComponent className="h-5 w-5 text-white" />
                          </div>
                          <CardTitle className="text-lg">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Business Sectors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Community Focused</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Growth Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey with us? We're here to help with any questions about our services, 
              partnerships, or how we can support your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Card 
                        key={index} 
                        className="gradient-card hover:shadow-glow transition-smooth cursor-pointer group"
                        onClick={() => handleExternalLink(item.href)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-fast">
                                {item.label}
                              </h4>
                              <p className="text-primary font-medium mb-2 flex items-center">
                                {item.value}
                                <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-fast" />
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <Card className="gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Our Location
                  </CardTitle>
                  <CardDescription>
                    Based in Rwanda, serving local and international clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We're proudly based in Rwanda and committed to serving our local community 
                    while expanding our reach to help businesses and individuals globally.
                  </p>
                  <div className="p-4 bg-primary-light rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      🇷🇼 Serving Rwanda and Beyond
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="gradient-card shadow-glow">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option value="">Select a service</option>
                      <option value="education">Educational Resources</option>
                      <option value="technology">Technology Services</option>
                      <option value="electronics">Electronics & Repair</option>
                      <option value="engineering">Engineering Services</option>
                      <option value="agriculture">Agricultural Project</option>
                      <option value="hospitality">Hospitality Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs, questions, or how we can help you..."
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours during business days
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-card rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you need technology services, want to partner with us, or are interested in our 
                community development initiatives, we're excited to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90"
                  onClick={() => handleExternalLink("tel:0792504368")}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleExternalLink("mailto:mihigoshammy66@gmail.com")}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;