import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, GraduationCap, Wrench, Users, CheckCircle, Phone } from "lucide-react";

const Electronics = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Electronics School & Training",
      description: "Comprehensive electronics education covering fundamentals to advanced repair techniques.",
      features: [
        "Basic Electronics Theory",
        "Circuit Analysis & Design", 
        "Phone Repair Techniques",
        "Hands-on Workshop Training",
        "Certification Programs"
      ]
    },
    {
      icon: Wrench,
      title: "Phone Repair Workshop",
      description: "Professional phone repair services and training facility with expert guidance.",
      features: [
        "Screen Replacement",
        "Battery Replacement",
        "Water Damage Repair",
        "Software Troubleshooting",
        "Hardware Diagnostics"
      ]
    },
    {
      icon: Smartphone,
      title: "Repair Services",
      description: "Complete phone repair services for all major brands and models.",
      features: [
        "iPhone Repair",
        "Android Repair",
        "Tablet Repair", 
        "Quick Turnaround",
        "Quality Guarantee"
      ]
    }
  ];

  const team = [
    {
      name: "RUHARA MIHIGO Shammy",
      role: "CEO & Lead Instructor",
      description: "Experienced in electronics and passionate about teaching others the skills needed in the modern world."
    },
    {
      name: "Master Electronics Teacher",
      role: "Senior Instructor",
      description: "Experienced teacher who provided foundational training and continues to guide our educational approach."
    },
    {
      name: "Industry Partner",
      role: "Practical Training Supervisor", 
      description: "Friend and mentor who provided internship opportunities and real-world experience."
    }
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
                <Smartphone className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Electronics & Phone Repair
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Comprehensive electronics education and professional phone repair services. 
                Learn valuable skills while getting expert repair solutions for all your devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Repair Service
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Expert instruction from experienced professionals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Hands-on workshop training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Professional repair services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                    Quality guaranteed work
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
              Our Electronics Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From education to repair services, we provide comprehensive solutions for all your electronics needs.
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

      {/* Team Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Led by experienced professionals dedicated to quality education and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center gradient-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Electronics Vision
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-muted-foreground">
                <strong>RUHARA MIHIGO Shammy</strong>, our CEO, envisions a comprehensive electronics center that serves multiple purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-primary-light rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Education Center</h3>
                  <p className="text-sm text-muted-foreground">
                    A school where students can learn electronics fundamentals, circuit design, and modern repair techniques.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-light rounded-lg">
                  <h3 className="font-semibold text-secondary mb-2">Workshop Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Hands-on workshops providing practical experience with real devices and modern repair tools.
                  </p>
                </div>
                
                <div className="p-4 bg-accent-light rounded-lg">
                  <h3 className="font-semibold text-accent mb-2">Repair Services</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional phone repair services for the community, providing quality repairs at fair prices.
                  </p>
                </div>
                
                <div className="p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Community Impact</h3>
                  <p className="text-sm text-muted-foreground">
                    Creating skilled technicians who can serve the community and build sustainable careers.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-center">
                With guidance from his experienced teacher and support from industry partners, 
                this vision will create opportunities for learning, employment, and community service.
              </p>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Join Our Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Electronics;