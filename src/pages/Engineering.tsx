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
      <section className="pt-2 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                          <div className="animate-float mb-6 mx-auto w-fit">
                <div className="p-4 rounded-2xl bg-gradient-primary shadow-xl border border-primary/20">
                  <img 
                    src="/serenity-logo.png" 
                    alt="Serenity Business Project Logo" 
                    className="h-16 w-16 object-contain"
                  />
                </div>
              </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Engineering Services
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Building quality, affordable homes and infrastructure for communities in need. 
              Our engineering partners specialize in creating sustainable solutions that match people's financial capacity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Comprehensive engineering solutions designed to serve communities and provide quality construction at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-center text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 h-10 rounded-lg">
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Partners
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Working with skilled engineers who share our commitment to affordable, quality construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-center text-gray-900">
                    {partner.name}
                  </CardTitle>
                  <CardDescription className="text-center text-primary font-semibold text-base">
                    {partner.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-2 bg-secondary-light text-secondary rounded-full text-sm font-medium">
                      {partner.specialization}
                    </span>
                  </div>
                  <p className="text-gray-600 text-body">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Projects We Handle
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-body">
              From individual homes to community infrastructure, we handle diverse construction projects with the same commitment to quality and affordability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectTypes.map((project, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-white transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Approach to Affordable Construction
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="p-4 bg-primary-light rounded-xl">
                <h3 className="font-semibold text-primary mb-2 text-base flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Financial Assessment
                </h3>
                <p className="text-gray-600 text-sm">
                  We evaluate each client's financial capacity to create customized solutions that fit their budget without compromising quality.
                </p>
              </div>
              
              <div className="p-4 bg-secondary-light rounded-xl">
                <h3 className="font-semibold text-secondary mb-2 text-base flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  Quality Materials
                </h3>
                <p className="text-gray-600 text-sm">
                  We source quality, cost-effective materials and use efficient construction methods to keep costs low while maintaining high standards.
                </p>
              </div>
              
              <div className="p-4 bg-accent-light rounded-xl">
                <h3 className="font-semibold text-accent mb-2 text-base flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Community Focus
                </h3>
                <p className="text-gray-600 text-sm">
                  Our projects prioritize community needs, creating not just individual homes but strengthening entire neighborhoods.
                </p>
              </div>
              
              <div className="p-4 bg-gray-100 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2 text-base flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Social Impact
                </h3>
                <p className="text-gray-600 text-sm">
                  Every project serves our mission of providing quality housing and infrastructure to those who need it most.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-600 text-body mb-4">
                "We believe everyone deserves a quality home, regardless of their financial status. 
                Our engineering services are designed to make this vision a reality."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
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