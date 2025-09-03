import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Milk, Beef, Apple, Flower2, Sprout, Droplets, Sun, Star, ArrowRight } from "lucide-react";

const Agriculture = () => {
  const products = [
    {
      icon: Milk,
      title: "Fresh Milk Production",
      description: "High-quality dairy products from healthy, well-cared-for cattle.",
      benefits: ["Daily fresh milk supply", "Nutritious and organic", "Local community source", "Sustainable farming practices"]
    },
    {
      icon: Beef,
      title: "Quality Meat",
      description: "Premium meat products from livestock raised with care and proper nutrition.",
      benefits: ["Grass-fed livestock", "Healthy meat products", "Local sourcing", "Ethical animal treatment"]
    },
    {
      icon: Apple,
      title: "Fresh Bananas",
      description: "Organic banana cultivation providing fresh, nutritious fruit year-round.",
      benefits: ["Organic cultivation", "Year-round production", "Rich in nutrients", "Export potential"]
    },
    {
      icon: Flower2,
      title: "Pure Honey",
      description: "Natural honey production through sustainable beekeeping practices.",
      benefits: ["100% natural honey", "Sustainable beekeeping", "Health benefits", "Pollination support"]
    }
  ];

  const farmingApproach = [
    {
      title: "Sustainable Practices",
      description: "Environmentally friendly farming methods that protect the land for future generations",
      icon: Sprout
    },
    {
      title: "Quality Nutrition", 
      description: "Providing high-quality, nutritious food products to strengthen community health",
      icon: Sun
    },
    {
      title: "Water Management",
      description: "Efficient water usage and conservation to ensure sustainable production",
      icon: Droplets
    },
    {
      title: "Crop Diversity",
      description: "Multiple product lines to ensure food security and economic stability",
      icon: Wheat
    }
  ];

  const projectGoals = [
    "Provide fresh, nutritious food to the local community",
    "Create sustainable employment opportunities",
    "Implement eco-friendly farming practices", 
    "Support local food security and independence",
    "Generate income through diverse agricultural products",
    "Promote healthy eating and nutrition awareness"
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
              Agricultural Project
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Sustainable farming initiative producing fresh milk, quality meat, organic bananas, 
              and pure honey to nourish our community while creating economic opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Support Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Agricultural Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Diverse, high-quality products that nourish our community and support sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Farming Approach */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Farming Approach
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Committed to sustainable, environmentally friendly practices that ensure long-term success and community benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {farmingApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">
                        {approach.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-body">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Project Goals & Impact
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Our agricultural project aims to create positive change in multiple areas of community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Agricultural Vision
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-gray-600 text-body">
                <strong>RUHARA MIHIGO Shammy</strong> envisions a comprehensive agricultural project that serves multiple purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-light rounded-xl">
                  <h3 className="font-semibold text-primary mb-2 text-base">Food Security</h3>
                  <p className="text-gray-600 text-sm">
                    Providing fresh, nutritious food to our community while reducing dependence on external sources.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-light rounded-xl">
                  <h3 className="font-semibold text-secondary mb-2 text-base">Economic Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Creating employment opportunities and generating income through diverse agricultural products.
                  </p>
                </div>
                
                <div className="p-4 bg-accent-light rounded-xl">
                  <h3 className="font-semibold text-accent mb-2 text-base">Sustainability</h3>
                  <p className="text-gray-600 text-sm">
                    Implementing eco-friendly farming practices that protect our environment for future generations.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Community Health</h3>
                  <p className="text-gray-600 text-sm">
                    Promoting healthy eating habits and providing access to quality, organic food products.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-body text-center">
                This agricultural initiative will create a sustainable food system that benefits our community 
                economically, nutritionally, and environmentally.
              </p>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Support This Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agriculture;