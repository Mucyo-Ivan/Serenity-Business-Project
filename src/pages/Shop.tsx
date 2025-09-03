import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, DollarSign, Target, TrendingUp, Heart } from "lucide-react";

const Shop = () => {
  const businessPlans = [
    {
      title: "Initial Investment",
      amount: "800,000 RWF",
      description: "Starting capital for inventory and setup"
    },
    {
      title: "Employment Opportunity",
      amount: "2 Youth",
      description: "Creating jobs for young people in our community"
    },
    {
      title: "Product Range",
      amount: "Multiple Categories",
      description: "Diverse products to serve community needs"
    }
  ];

  const expectedProducts = [
    "Essential household items",
    "Electronics and accessories", 
    "Educational materials and books",
    "Local craft products",
    "Health and wellness items",
    "Technology accessories",
    "Clothing and textiles",
    "Agricultural tools and supplies"
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
                <ShoppingBag className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Future Shop
              </h1>
              <p className="text-xl text-white/90 mb-8">
                With God's blessing and the right capital, we plan to establish a community shop that serves local needs while creating employment opportunities for youth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Support Our Vision
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-accent" />
                  Our Impact Vision
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-secondary" />
                    Create jobs for 2 young people
                  </li>
                  <li className="flex items-center">
                    <ShoppingBag className="h-4 w-4 mr-2 text-secondary" />
                    Serve community needs
                  </li>
                  <li className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-secondary" />
                    Contribute to local economy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Plan Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our shop will be more than just a business - it's a community investment that creates opportunities and serves local needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {businessPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-smooth gradient-card">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {index === 0 && <DollarSign className="h-12 w-12 text-primary mx-auto" />}
                    {index === 1 && <Users className="h-12 w-12 text-secondary mx-auto" />}
                    {index === 2 && <Target className="h-12 w-12 text-accent mx-auto" />}
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {plan.amount}
                  </CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {plan.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Planned Product Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              We plan to stock a diverse range of products to meet various community needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expectedProducts.map((product, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <div className="w-2 h-2 bg-gradient-primary rounded-full mr-4"></div>
                <span className="text-foreground">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Our Vision & Community Impact
            </h2>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary-light rounded-lg mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Youth Employment</h3>
                  <p className="text-muted-foreground">
                    We will employ 2 young people, providing them with valuable work experience, 
                    skills development, and a stable income to support their personal growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-secondary-light rounded-lg mt-1">
                  <ShoppingBag className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Community Service</h3>
                  <p className="text-muted-foreground">
                    By providing essential products at fair prices, we aim to serve our community's 
                    daily needs while supporting local economic growth and development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-accent-light rounded-lg mt-1">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Sustainable Growth</h3>
                  <p className="text-muted-foreground">
                    Starting with 800,000 RWF, we plan to reinvest profits back into the business 
                    and community, creating a sustainable model for long-term success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;