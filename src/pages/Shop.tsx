import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, DollarSign, Target, TrendingUp, Heart, Star, ArrowRight } from "lucide-react";

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
      <section className="pt-4 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <ShoppingBag className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Our Future Shop
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                With God's blessing and the right capital, we plan to establish a community shop that serves local needs while creating employment opportunities for youth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Support Our Vision
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <Heart className="h-7 w-7 mr-3 text-accent" />
                  Our Impact Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Users className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Create jobs for 2 young people</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <ShoppingBag className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Serve community needs</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <TrendingUp className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Contribute to local economy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Business Plan Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              Our shop will be more than just a business - it's a community investment that creates opportunities and serves local needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {businessPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 gradient-card border-0">
                <CardHeader>
                  <div className="mx-auto mb-6">
                    {index === 0 && <DollarSign className="h-16 w-16 text-primary mx-auto" />}
                    {index === 1 && <Users className="h-16 w-16 text-secondary mx-auto" />}
                    {index === 2 && <Target className="h-16 w-16 text-accent mx-auto" />}
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">
                    {plan.amount}
                  </CardTitle>
                  <CardDescription className="font-semibold text-foreground text-lg">
                    {plan.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-body">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Planned Product Categories
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              We plan to stock a diverse range of products to meet various community needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expectedProducts.map((product, index) => (
              <div key={index} className="flex items-center p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium text-lg">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Vision & Community Impact
            </h2>
            <div className="space-y-8 text-left">
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-primary-light rounded-2xl mt-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Youth Employment</h3>
                  <p className="text-muted-foreground text-body">
                    We will employ 2 young people, providing them with valuable work experience, 
                    skills development, and a stable income to support their personal growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-secondary-light rounded-2xl mt-2">
                  <ShoppingBag className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Community Service</h3>
                  <p className="text-muted-foreground text-body">
                    By providing essential products at fair prices, we aim to serve our community's 
                    daily needs while supporting local economic growth and development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-accent-light rounded-2xl mt-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Sustainable Growth</h3>
                  <p className="text-muted-foreground text-body">
                    Starting with 800,000 RWF, we plan to reinvest profits back into the business 
                    and community, creating a sustainable model for long-term success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
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