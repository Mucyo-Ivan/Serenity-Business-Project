import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wheat, Milk, Beef, Apple, Flower2, Sprout, Droplets, Sun } from "lucide-react";

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
      <section className="pt-16 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-float mb-6">
                <Wheat className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Agricultural Project
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Sustainable farming initiative producing fresh milk, quality meat, organic bananas, 
                and pure honey to nourish our community while creating economic opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Support Project
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Sprout className="h-5 w-5 mr-2 text-secondary" />
                  Our Agricultural Vision
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <Milk className="h-4 w-4 mr-2 text-accent" />
                    Fresh daily milk production
                  </li>
                  <li className="flex items-center">
                    <Beef className="h-4 w-4 mr-2 text-accent" />
                    Quality meat from healthy livestock
                  </li>
                  <li className="flex items-center">
                    <Apple className="h-4 w-4 mr-2 text-accent" />
                    Organic banana cultivation
                  </li>
                  <li className="flex items-center">
                    <Flower2 className="h-4 w-4 mr-2 text-accent" />
                    Pure honey from sustainable beekeeping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Agricultural Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diverse, high-quality agricultural products that nourish our community and support sustainable farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card key={index} className="hover:shadow-glow transition-smooth gradient-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {product.title}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Farming Philosophy
            </h2>
            <p className="text-lg text-muted-foreground">
              Committed to sustainable, ethical farming practices that benefit both people and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {farmingApproach.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <Card key={index} className="text-center gradient-card hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className="p-3 rounded-xl bg-gradient-secondary">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {approach.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Project Impact Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our agricultural project aims to create lasting positive impact on food security, 
              community health, and economic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-4 bg-muted rounded-lg hover:bg-card-hover transition-smooth">
                <div className="w-3 h-3 bg-gradient-secondary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Nourishing Communities Through Agriculture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="p-4 bg-primary-light rounded-lg">
                <h3 className="font-semibold text-primary mb-2 flex items-center">
                  <Milk className="h-5 w-5 mr-2" />
                  Daily Production
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fresh milk, quality meat, and other products available daily to ensure consistent community supply.
                </p>
              </div>
              
              <div className="p-4 bg-secondary-light rounded-lg">
                <h3 className="font-semibold text-secondary mb-2 flex items-center">
                  <Sprout className="h-5 w-5 mr-2" />
                  Sustainability
                </h3>
                <p className="text-sm text-muted-foreground">
                  Environmentally responsible farming practices that preserve the land for future generations.
                </p>
              </div>
              
              <div className="p-4 bg-accent-light rounded-lg">
                <h3 className="font-semibold text-accent mb-2 flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  Quality Standards
                </h3>
                <p className="text-sm text-muted-foreground">
                  High-quality, nutritious products that meet and exceed food safety and health standards.
                </p>
              </div>
              
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold text-foreground mb-2 flex items-center">
                  <Wheat className="h-5 w-5 mr-2" />
                  Community Impact
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creating jobs, improving nutrition, and strengthening local food security through agricultural excellence.
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 italic">
              "Through sustainable agriculture, we aim to create a self-sufficient community where 
              everyone has access to fresh, nutritious food while supporting local economic growth."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Invest in Our Farm
              </Button>
              <Button variant="outline" size="lg">
                Visit Our Project
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