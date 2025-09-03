import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hammer, Home, Users, Heart, CheckCircle, Building, DollarSign, Handshake, Star, ArrowRight } from "lucide-react";

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
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Hammer className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Engineering Services
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                Building quality, affordable homes and infrastructure for communities in need. 
                Our engineering partners specialize in creating sustainable solutions that match people's financial capacity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <Heart className="h-7 w-7 mr-3 text-accent" />
                  Our Mission
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Home className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Affordable housing for all</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Users className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Community-focused development</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <DollarSign className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Prices based on financial capacity</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Quality construction guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Engineering Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              Comprehensive engineering solutions designed to serve communities and provide quality construction at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all duration-500 gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center text-body">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 h-12 rounded-xl">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Engineering Partners
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Working with skilled engineers who share our commitment to affordable, quality construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-center text-primary font-semibold text-lg">
                    {partner.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-secondary-light text-secondary rounded-full text-sm font-medium">
                      {partner.specialization}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-body">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Types of Projects We Handle
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-body">
              From individual homes to community infrastructure, we handle diverse construction projects with the same commitment to quality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectTypes.map((project, index) => (
              <div key={index} className="flex items-center p-6 bg-muted rounded-2xl hover:bg-card-hover transition-all duration-300">
                <div className="w-4 h-4 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium text-lg">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Approach to Affordable Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
              <div className="p-6 bg-primary-light rounded-2xl">
                <h3 className="font-semibold text-primary mb-3 text-lg flex items-center">
                  <DollarSign className="h-6 w-6 mr-3" />
                  Financial Assessment
                </h3>
                <p className="text-muted-foreground text-body">
                  We evaluate each client's financial capacity to create customized solutions that fit their budget without compromising quality.
                </p>
              </div>
              
              <div className="p-6 bg-secondary-light rounded-2xl">
                <h3 className="font-semibold text-secondary mb-3 text-lg flex items-center">
                  <Building className="h-6 w-6 mr-3" />
                  Quality Materials
                </h3>
                <p className="text-muted-foreground text-body">
                  We source quality, cost-effective materials and use efficient construction methods to keep costs low while maintaining high standards.
                </p>
              </div>
              
              <div className="p-6 bg-accent-light rounded-2xl">
                <h3 className="font-semibold text-accent mb-3 text-lg flex items-center">
                  <Users className="h-6 w-6 mr-3" />
                  Community Focus
                </h3>
                <p className="text-muted-foreground text-body">
                  Our projects prioritize community needs, creating not just individual homes but strengthening entire neighborhoods.
                </p>
              </div>
              
              <div className="p-6 bg-muted rounded-2xl">
                <h3 className="font-semibold text-foreground mb-3 text-lg flex items-center">
                  <Heart className="h-6 w-6 mr-3" />
                  Social Impact
                </h3>
                <p className="text-muted-foreground text-body">
                  Every project serves our mission of providing quality housing and infrastructure to those who need it most.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <p className="text-muted-foreground text-body mb-6">
                "We believe everyone deserves a quality home, regardless of their financial status. 
                Our engineering services are designed to make this vision a reality."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300">
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