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
  Target,
  Star,
  Globe,
  TrendingUp
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

  const achievements = [
    {
      number: "8+",
      label: "Business Sectors",
      description: "Diverse ventures serving community needs"
    },
    {
      number: "100%",
      label: "Community Focused",
      description: "Every decision serves our community"
    },
    {
      number: "24/7",
      label: "Commitment",
      description: "Dedicated to continuous improvement"
    },
    {
      number: "∞",
      label: "Growth Potential",
      description: "Unlimited opportunities for expansion"
    }
  ];

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-hero min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="animate-float mb-8 lg:mx-0 mx-auto w-fit">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl">
                  <Building2 className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Serenity
                <span className="block text-4xl md:text-5xl text-white/90 mt-2">Business Project</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Building communities through education, technology, and sustainable business solutions. 
                Creating opportunities, serving needs, and working toward financial freedom.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Learn Our Story
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-3xl font-semibold text-white mb-8 text-center flex items-center justify-center">
                  <Star className="h-8 w-8 mr-3 text-secondary" />
                  Our Mission
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Users className="h-7 w-7 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Creating employment for youth and communities</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <BookOpen className="h-7 w-7 mr-4 text-accent flex-shrink-0" />
                    <span className="text-lg">Providing access to quality education and technology</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Building2 className="h-7 w-7 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Building sustainable business solutions</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Award className="h-7 w-7 mr-4 text-accent flex-shrink-0" />
                    <span className="text-lg">Achieving financial freedom through diverse ventures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Sections Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
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
                  <Card className="h-full hover:shadow-2xl transition-all duration-500 gradient-card group-hover:scale-105 border-0">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                        <div className={`p-5 rounded-3xl bg-gradient-${section.color} shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm leading-relaxed mb-6">
                        {section.description}
                      </CardDescription>
                      <div className="flex items-center justify-center text-primary text-sm font-medium group-hover:text-primary-hover transition-colors duration-300">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
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
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              About Serenity Business Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Founded and led by <strong className="text-primary">RUHARA MIHIGO Shammy</strong>, 
              our mission is to create sustainable business solutions that serve communities, 
              generate employment, and build pathways to financial freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
            {/* Leadership Profile */}
            <div>
              <Card className="gradient-card shadow-2xl border-0">
                <CardHeader className="text-center pb-8">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <CardTitle className="text-3xl">RUHARA MIHIGO Shammy</CardTitle>
                  <CardDescription className="text-xl text-primary font-semibold">
                    Chief Executive Officer & Founder
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="p-6 bg-primary-light rounded-2xl">
                    <h4 className="font-semibold text-primary mb-4 flex items-center text-lg">
                      <Award className="h-6 w-6 mr-3" />
                      Professional Certifications
                    </h4>
                    <p className="text-muted-foreground">
                      Certified in graphic design, web development, and various technology disciplines, 
                      bringing proven expertise to serve clients and communities.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Key Achievements:</h4>
                    {aboutPoints.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-4 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-10">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card key={index} className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-xl">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-muted-foreground leading-relaxed">
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
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{achievement.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your journey with us? We're here to help with any questions about our services, 
              partnerships, or how we can support your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Card 
                        key={index} 
                        className="gradient-card hover:shadow-2xl transition-all duration-300 cursor-pointer group border-0"
                        onClick={() => handleExternalLink(item.href)}
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-6">
                            <div className="p-4 rounded-2xl bg-gradient-primary flex-shrink-0 shadow-lg">
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground mb-2 text-lg group-hover:text-primary transition-colors duration-300">
                                {item.label}
                              </h4>
                              <p className="text-primary font-semibold mb-3 text-lg flex items-center">
                                {item.value}
                                <ExternalLink className="ml-3 h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                              </p>
                              <p className="text-muted-foreground">
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
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="h-6 w-6 mr-3 text-primary" />
                    Our Location
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Based in Rwanda, serving local and international clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg">
                    We're proudly based in Rwanda and committed to serving our local community 
                    while expanding our reach to help businesses and individuals globally.
                  </p>
                  <div className="p-6 bg-primary-light rounded-2xl">
                    <p className="text-lg text-primary font-semibold text-center">
                      🇷🇼 Serving Rwanda and Beyond
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="gradient-card shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-3xl">
                    <MessageCircle className="h-8 w-8 mr-3 text-primary" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="h-12 rounded-xl border-2 focus:border-primary transition-colors duration-300" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="h-12 rounded-xl border-2 focus:border-primary transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-medium">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-12 rounded-xl border-2 focus:border-primary transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-medium">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" className="h-12 rounded-xl border-2 focus:border-primary transition-colors duration-300" />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="service" className="text-base font-medium">Service Interest</Label>
                    <select className="w-full h-12 px-4 border-2 border-input rounded-xl bg-background text-foreground focus:border-primary transition-colors duration-300">
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
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your needs, questions, or how we can help you..."
                      rows={6}
                      className="rounded-xl border-2 focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full h-14 bg-gradient-primary hover:opacity-90 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" size="lg">
                    <Send className="h-6 w-6 mr-3" />
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
          <div className="mt-20 text-center">
            <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto border-0">
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Ready to Work Together?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you need technology services, want to partner with us, or are interested in our 
                community development initiatives, we're excited to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => handleExternalLink("tel:0792504368")}
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Call Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="h-14 px-10 rounded-2xl text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => handleExternalLink("mailto:mihigoshammy66@gmail.com")}
                >
                  <Mail className="h-6 w-6 mr-3" />
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