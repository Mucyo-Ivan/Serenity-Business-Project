import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Smartphone, 
  ShoppingBag, 
  Gamepad2, 
  Hammer, 
  Wheat, 
  Hotel,
  Star, 
  Globe, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Heart,
  Target
} from "lucide-react";

const Index = () => {
  const businessVentures = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Access to quality online educational platforms and learning resources.",
      link: "/education"
    },
    {
      icon: Smartphone,
      title: "Technology",
      description: "Graphic design, web development, and software solutions.",
      link: "/technology"
    },
    {
      icon: ShoppingBag,
      title: "Our Shop",
      description: "Future retail business creating employment opportunities.",
      link: "/shop"
    },
    {
      icon: Smartphone,
      title: "Electronics",
      description: "Electronics education, phone repair, and training services.",
      link: "/electronics"
    },
    {
      icon: Gamepad2,
      title: "Video Game Center",
      description: "Educational gaming center encouraging school attendance and cleanliness.",
      link: "/video-game-center"
    },
    {
      icon: Hammer,
      title: "Engineering Services",
      description: "Affordable housing construction and community development.",
      link: "/engineering"
    },
    {
      icon: Wheat,
      title: "Agricultural Project",
      description: "Sustainable farming producing milk, meat, bananas, and honey.",
      link: "/agriculture"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Future guest house and restaurant with swimming pool facilities.",
      link: "/hospitality"
    }
  ];

  const achievements = [
    "Certified in Graphic Design and Web Development",
    "Established partnerships with experienced professionals",
    "Created employment opportunities for youth",
    "Developed sustainable business models",
    "Built strong community relationships"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-2 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-float mb-6">
                <div className="p-5 rounded-2xl bg-gradient-primary shadow-xl border border-primary/20">
                  <img 
                    src="/serenity-logo.png" 
                    alt="Serenity Business Project Logo" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to Serenity Business Project
              </h1>
              <p className="text-lg text-gray-700 mb-8 text-body">
                A comprehensive business initiative focused on education, technology, community development, 
                and sustainable growth. We're building a better future through innovation and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Our Services
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                  <Star className="h-6 w-6 mr-2 text-primary" />
                  Our Mission
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 text-success flex-shrink-0" />
                    <span className="text-base">Community development</span>
                  </div>
                  <div className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 text-success flex-shrink-0" />
                    <span className="text-base">Youth empowerment</span>
                  </div>
                  <div className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 text-success flex-shrink-0" />
                    <span className="text-base">Sustainable growth</span>
                  </div>
                  <div className="flex items-center text-gray-700 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 mr-3 text-success flex-shrink-0" />
                    <span className="text-base">Quality services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Ventures Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Business Ventures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Discover the diverse range of services and projects we offer to serve our community and drive sustainable development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessVentures.map((venture, index) => {
              const IconComponent = venture.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-center text-gray-900">
                      {venture.title}
                      </CardTitle>
                    </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 text-center mb-4 text-body">
                      {venture.description}
                    </p>
                    <Button asChild className="w-full h-10 rounded-lg text-sm">
                      <a href={venture.link}>
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    </CardContent>
                  </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                About Us
            </h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-6 w-6 mr-3 text-primary" />
                    Our CEO
                  </h3>
                  <p className="text-gray-700 text-body">
                    <strong>RUHARA MIHIGO Shammy</strong> leads our organization with a vision for community development 
                    and sustainable business growth. His expertise spans multiple sectors including technology, 
                    education, and community services.
            </p>
          </div>

                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="h-6 w-6 mr-3 text-secondary" />
                    Our Values
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-sm">Community-focused development</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-sm">Quality and excellence</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-sm">Sustainable growth</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-sm">Youth empowerment</span>
                    </div>
                  </div>
                </div>
              </div>
                  </div>
                  
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-3 text-accent" />
                  Key Achievements
                </h3>
                  <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                      <Star className="h-4 w-4 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
            </div>

              <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-red-500" />
                  Our Impact
                </h3>
                <p className="text-gray-700 text-body">
                  We're committed to creating positive change in our community through education, 
                  employment opportunities, and sustainable business practices that benefit everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-body">
              Ready to learn more about our services or support our mission? Contact us today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>CEO:</strong> RUHARA MIHIGO Shammy</p>
                  <p><strong>Phone:</strong> +250 792 504 368</p>
                  <p><strong>Email:</strong> mihigoshammy66@gmail.com</p>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Instagram:</strong> @shammymihigo</p>
                  <p><strong>Facebook:</strong> Mihigo Shammy</p>
                    </div>
            </div>
          </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Contact Us
                </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Join Us in Building a Better Future
          </h2>
          <p className="text-lg text-white/90 mb-8 text-body">
            Together, we can create positive change in our community through education, 
            technology, and sustainable business development.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-10 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;