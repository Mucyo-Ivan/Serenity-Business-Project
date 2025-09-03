import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, GraduationCap, Wrench, Users, CheckCircle, Phone, Star, ArrowRight } from "lucide-react";

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
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Smartphone className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Electronics & Phone Repair
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                Comprehensive electronics education and professional phone repair services. 
                Learn valuable skills while getting expert repair solutions for all your devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Repair Service
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <Phone className="h-7 w-7 mr-3" />
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Expert instruction from experienced professionals</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Hands-on workshop training</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Professional repair services</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Quality guaranteed work</span>
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
              Our Electronics Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              From education to repair services, we provide comprehensive solutions for all your electronics needs.
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

      {/* Team Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Led by experienced professionals dedicated to quality education and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-body">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Electronics Vision
            </h2>
            <div className="space-y-8 text-left">
              <p className="text-muted-foreground text-body">
                <strong>RUHARA MIHIGO Shammy</strong>, our CEO, envisions a comprehensive electronics center that serves multiple purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary-light rounded-2xl">
                  <h3 className="font-semibold text-primary mb-3 text-lg">Education Center</h3>
                  <p className="text-muted-foreground text-body">
                    A school where students can learn electronics fundamentals, circuit design, and modern repair techniques.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary-light rounded-2xl">
                  <h3 className="font-semibold text-secondary mb-3 text-lg">Workshop Training</h3>
                  <p className="text-muted-foreground text-body">
                    Hands-on workshops providing practical experience with real devices and modern repair tools.
                  </p>
                </div>
                
                <div className="p-6 bg-accent-light rounded-2xl">
                  <h3 className="font-semibold text-accent mb-3 text-lg">Repair Services</h3>
                  <p className="text-muted-foreground text-body">
                    Professional phone repair services for the community, providing quality repairs at fair prices.
                  </p>
                </div>
                
                <div className="p-6 bg-muted rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Community Impact</h3>
                  <p className="text-muted-foreground text-body">
                    Creating skilled technicians who can serve the community and build sustainable careers.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-body text-center">
                With guidance from his experienced teacher and support from industry partners, 
                this vision will create opportunities for learning, employment, and community service.
              </p>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
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