import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Monitor, Award, Users, CheckCircle, Star, ArrowRight } from "lucide-react";

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
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Code className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Technology Services
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                Leveraging certified expertise in graphic design and web development to help businesses and individuals achieve their digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  View Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <Award className="h-7 w-7 mr-3 text-secondary" />
                  Certified Expertise
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                      <CheckCircle className="h-5 w-5 mr-4 text-secondary flex-shrink-0" />
                      <span className="text-lg">{cert}</span>
                    </div>
                  ))}
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
              Our Technology Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              From concept to completion, we provide comprehensive technology solutions that drive results and exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 gradient-card border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-lg">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full h-12 group-hover:bg-primary-hover transition-all duration-300 rounded-xl">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
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
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="p-4 bg-gradient-primary rounded-3xl w-fit mx-auto mb-6 shadow-xl">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Meet Our CEO
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              <strong>RUHARA MIHIGO Shammy</strong> - Certified technology professional with expertise in graphic design, 
              web development, and software engineering. Dedicated to sharing knowledge and helping others succeed in the digital world.
            </p>
          </div>
          
          <div className="bg-gradient-card rounded-3xl p-10 shadow-2xl border-0">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Our Mission in Technology
            </h3>
            <p className="text-muted-foreground mb-8 text-body">
              "Having obtained certifications in graphic design, web development, and other technology fields, 
              I am committed to using this knowledge to help others learn and grow. We provide both educational 
              guidance and professional services to empower individuals and businesses in their digital journey."
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
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