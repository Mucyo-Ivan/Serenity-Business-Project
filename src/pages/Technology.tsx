import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Monitor, Award, Users, CheckCircle } from "lucide-react";

const Technology = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional visual design services including logos, branding, marketing materials, and digital graphics.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Graphics", "Print Design"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Sites", "Content Management", "SEO Optimization", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs, from desktop applications to enterprise systems.",
      features: ["Custom Software", "Desktop Applications", "Database Design", "System Integration", "Maintenance & Support"]
    }
  ];

  const certifications = [
    "Certified Graphic Designer",
    "Web Development Certification", 
    "Mobile Development Specialist",
    "Software Engineering Certificate",
    "UI/UX Design Certification"
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
                <Code className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Leveraging certified expertise in graphic design and web development to help businesses and individuals achieve their digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  View Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Certified Expertise
                </h3>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-white/90">
                      <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                      {cert}
                    </div>
                  ))}
                </div>
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
              Our Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive technology solutions that drive results and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-glow transition-smooth gradient-card">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-fast">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-success mr-2" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full group-hover:bg-primary-hover transition-fast">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Meet Our CEO
            </h2>
            <p className="text-lg text-muted-foreground">
              <strong>RUHARA MIHIGO Shammy</strong> - Certified technology professional with expertise in graphic design, 
              web development, and software engineering. Dedicated to sharing knowledge and helping others succeed in the digital world.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Mission in Technology
            </h3>
            <p className="text-muted-foreground mb-6">
              "Having obtained certifications in graphic design, web development, and other technology fields, 
              I am committed to using this knowledge to help others learn and grow. We provide both educational 
              guidance and professional services to empower individuals and businesses in their digital journey."
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;