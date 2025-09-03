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
              Electronics & Phone Repair
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Comprehensive electronics education and professional phone repair services. 
              Learn valuable skills while getting expert repair solutions for all your devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Repair Service
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
              Our Electronics Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              From education to repair services, we provide comprehensive solutions for all your electronics needs.
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

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Led by experienced professionals dedicated to quality education and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-primary font-semibold text-base">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-body">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Electronics Vision
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-gray-600 text-body">
                <strong>RUHARA MIHIGO Shammy</strong>, our CEO, envisions a comprehensive electronics center that serves multiple purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-light rounded-xl">
                  <h3 className="font-semibold text-primary mb-2 text-base">Education Center</h3>
                  <p className="text-gray-600 text-sm">
                    A school where students can learn electronics fundamentals, circuit design, and modern repair techniques.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-light rounded-xl">
                  <h3 className="font-semibold text-secondary mb-2 text-base">Workshop Training</h3>
                  <p className="text-gray-600 text-sm">
                    Hands-on workshops providing practical experience with real devices and modern repair tools.
                  </p>
                </div>
                
                <div className="p-4 bg-accent-light rounded-xl">
                  <h3 className="font-semibold text-accent mb-2 text-base">Repair Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional phone repair services for the community, providing quality repairs at fair prices.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Community Impact</h3>
                  <p className="text-gray-600 text-sm">
                    Creating skilled technicians who can serve the community and build sustainable careers.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-body text-center">
                With guidance from his experienced teacher and support from industry partners, 
                this vision will create opportunities for learning, employment, and community service.
              </p>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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