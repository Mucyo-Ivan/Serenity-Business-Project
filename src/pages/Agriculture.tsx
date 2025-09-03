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
      <section className="pt-4 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Wheat className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Agricultural Project
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                Sustainable farming initiative producing fresh milk, quality meat, organic bananas, 
                and pure honey to nourish our community while creating economic opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Support Project
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <Sprout className="h-7 w-7 mr-3 text-secondary" />
                  Our Agricultural Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Milk className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Fresh dairy products</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Beef className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Quality meat production</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Apple className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Organic fruit cultivation</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Flower2 className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Natural honey production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Agricultural Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              Diverse, high-quality products that nourish our community and support sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 gradient-card border-0">
                  <CardHeader>
                    <div className="mx-auto mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-body">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
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
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Farming Approach
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Committed to sustainable, environmentally friendly practices that ensure long-term success and community benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {farmingApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <Card key={index} className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {approach.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-body">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Project Goals & Impact
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Our agricultural project aims to create positive change in multiple areas of community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-6 bg-muted rounded-2xl hover:bg-card-hover transition-all duration-300">
                <div className="w-4 h-4 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium text-lg">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Agricultural Vision
            </h2>
            <div className="space-y-8 text-left">
              <p className="text-muted-foreground text-body">
                <strong>RUHARA MIHIGO Shammy</strong> envisions a comprehensive agricultural project that serves multiple purposes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary-light rounded-2xl">
                  <h3 className="font-semibold text-primary mb-3 text-lg">Food Security</h3>
                  <p className="text-muted-foreground text-body">
                    Providing fresh, nutritious food to our community while reducing dependence on external sources.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary-light rounded-2xl">
                  <h3 className="font-semibold text-secondary mb-3 text-lg">Economic Growth</h3>
                  <p className="text-muted-foreground text-body">
                    Creating employment opportunities and generating income through diverse agricultural products.
                  </p>
                </div>
                
                <div className="p-6 bg-accent-light rounded-2xl">
                  <h3 className="font-semibold text-accent mb-3 text-lg">Sustainability</h3>
                  <p className="text-muted-foreground text-body">
                    Implementing eco-friendly farming practices that protect our environment for future generations.
                  </p>
                </div>
                
                <div className="p-6 bg-muted rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Community Health</h3>
                  <p className="text-muted-foreground text-body">
                    Promoting healthy eating habits and providing access to quality, organic food products.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-body text-center">
                This agricultural initiative will create a sustainable food system that benefits our community 
                economically, nutritionally, and environmentally.
              </p>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
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