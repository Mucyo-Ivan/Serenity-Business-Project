import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Home, Users, Heart, CheckCircle, Building, DollarSign, Handshake } from "lucide-react";

const Engineering = () => {
  const services = [
    {
      title: "Affordable Housing",
      description: "Quality homes built at low cost based on financial capacity",
      icon: Home,
      features: ["Custom Design", "Quality Materials", "Fair Pricing", "Payment Plans"]
    },
    {
      title: "Community Development",
      description: "Building infrastructure that strengthens communities",
      icon: Building,
      features: ["Community Centers", "Schools", "Health Facilities", "Water Systems"]
    },
    {
      title: "Consultation Services",
      description: "Expert engineering advice and project planning",
      icon: Handshake,
      features: ["Project Planning", "Cost Estimation", "Technical Advice", "Quality Assurance"]
    }
  ];

  const partners = [
    {
      name: "BYIRINGIRO Nervise",
      role: "Engineering Partner",
      specialization: "Structural Engineering & Construction",
      description: "Experienced engineer specializing in residential and community construction projects with a focus on sustainable, affordable solutions."
    },
    {
      name: "Tom",
      role: "Engineering Partner", 
      specialization: "Civil Engineering & Infrastructure",
      description: "Skilled civil engineer with expertise in infrastructure development and community planning, committed to serving underserved populations."
    }
  ];

  const projectTypes = [
    "Single-family homes",
    "Multi-family housing",
    "Community centers",
    "Educational facilities",
    "Healthcare buildings",
    "Water and sanitation systems",
    "Roads and pathways",
    "Agricultural structures"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-float mb-6">
                <Hammer className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Engineering Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Building quality, affordable homes and infrastructure for communities in need. 
                Our engineering partners specialize in creating sustainable solutions that match people's financial capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Get Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-accent" />
                  Our Mission
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <Home className="h-4 w-4 mr-2 text-secondary" />
                    Affordable housing for all
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    Community-focused development
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-secondary" />
                    Prices based on financial capacity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Quality construction guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Engineering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive engineering solutions designed to serve communities and provide quality construction at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-glow transition-smooth gradient-card">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Engineering Partners
            </h2>
            <p className="text-lg text-muted-foreground">
              Working with skilled engineers who share our commitment to affordable, quality construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="gradient-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-center text-primary font-medium">
                    {partner.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-secondary-light text-secondary rounded-full text-sm font-medium">
                      {partner.specialization}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Types of Projects We Handle
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From individual homes to community infrastructure, we handle diverse construction projects with the same commitment to quality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map((project, index) => (
              <div key={index} className="flex items-center p-4 bg-muted rounded-lg hover:bg-card-hover transition-smooth">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Approach to Affordable Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-4 bg-primary-light rounded-lg">
                <h3 className="font-semibold text-primary mb-2 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Financial Assessment
                </h3>
                <p className="text-sm text-muted-foreground">
                  We evaluate each client's financial capacity to create customized solutions that fit their budget without compromising quality.
                </p>
              </div>
              
              <div className="p-4 bg-secondary-light rounded-lg">
                <h3 className="font-semibold text-secondary mb-2 flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Quality Materials
                </h3>
                <p className="text-sm text-muted-foreground">
                  We source quality, cost-effective materials and use efficient construction methods to keep costs low while maintaining high standards.
                </p>
              </div>
              
              <div className="p-4 bg-accent-light rounded-lg">
                <h3 className="font-semibold text-accent mb-2 flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Community Focus
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our projects prioritize community needs, creating not just individual homes but strengthening entire neighborhoods.
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Social Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every project serves our mission of providing quality housing and infrastructure to those who need it most.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground mb-6">
                "We believe everyone deserves a quality home, regardless of their financial status. 
                Our engineering services are designed to make this vision a reality."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg">
                  View Portfolio
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

export default Engineering;