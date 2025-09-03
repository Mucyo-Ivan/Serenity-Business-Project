import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Smartphone, Monitor, CheckCircle, Users, Award, Star, ArrowRight } from "lucide-react";

const Technology = () => {
  const services = [
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional graphic design services including logos, branding, marketing materials, and digital artwork.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Digital Artwork", "Print Design"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website development with modern technologies and responsive design for optimal user experience.",
      features: ["Custom Websites", "Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["iOS Development", "Android Development", "Cross-platform Apps", "UI/UX Design", "App Maintenance"]
    },
    {
      icon: Monitor,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and requirements.",
      features: ["Custom Software", "Business Applications", "Database Design", "API Development", "System Integration"]
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
              Technology Services
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Leveraging certified expertise in graphic design, web development, and software engineering 
              to provide professional technology solutions that drive business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Expertise */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Certified Expertise
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                <strong>RUHARA MIHIGO Shammy</strong> has obtained professional certifications in multiple technology disciplines:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-primary-light rounded-xl">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-primary font-semibold">Graphic Design</p>
                </div>
                <div className="p-4 bg-secondary-light rounded-xl">
                  <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-secondary font-semibold">Web Development</p>
                </div>
                <div className="p-4 bg-accent-light rounded-xl">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-accent font-semibold">Software Engineering</p>
                </div>
              </div>
              <p className="text-gray-600 text-base mt-6">
                These certifications ensure that you receive professional, high-quality technology services 
                backed by proven expertise and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Comprehensive technology solutions designed to meet your business needs and drive digital success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
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

      {/* CEO Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Technology Expert
            </h2>
            <div className="space-y-4">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                RUHARA MIHIGO Shammy
              </h3>
              <p className="text-primary font-medium text-lg">
                CEO & Technology Specialist
              </p>
              <p className="text-gray-600 text-base max-w-2xl mx-auto">
                With professional certifications in graphic design, web development, and software engineering, 
                I'm passionate about using technology to solve real-world problems and help businesses grow. 
                Every project is an opportunity to create something meaningful and impactful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  View Work
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

export default Technology;