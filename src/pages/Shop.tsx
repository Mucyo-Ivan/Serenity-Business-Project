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
              Our Future Shop
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              With God's blessing and the right capital, we plan to establish a community shop that serves local needs while creating employment opportunities for youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Support Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Plan Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Plan Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Our shop will be more than just a business - it's a community investment that creates opportunities and serves local needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessPlans.map((plan, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    {index === 0 && <DollarSign className="h-12 w-12 text-primary mx-auto" />}
                    {index === 1 && <Users className="h-12 w-12 text-secondary mx-auto" />}
                    {index === 2 && <Target className="h-12 w-12 text-accent mx-auto" />}
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    {plan.amount}
                  </CardTitle>
                  <CardDescription className="font-semibold text-gray-900 text-lg">
                    {plan.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-body">
                    {plan.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Planned Product Categories
            </h2>
            <p className="text-lg text-gray-600 text-body">
              We plan to stock a diverse range of products to meet various community needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expectedProducts.map((product, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision & Community Impact
            </h2>
            <div className="space-y-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-light rounded-xl mt-1">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Youth Employment</h3>
                  <p className="text-gray-600 text-body">
                    We will employ 2 young people, providing them with valuable work experience, 
                    skills development, and a stable income to support their personal growth.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary-light rounded-xl mt-1">
                  <ShoppingBag className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Community Service</h3>
                  <p className="text-gray-600 text-body">
                    By providing essential products at fair prices, we aim to serve our community's 
                    daily needs while supporting local economic growth and development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent-light rounded-xl mt-1">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">Sustainable Growth</h3>
                  <p className="text-gray-600 text-body">
                    Starting with 800,000 RWF, we plan to reinvest profits back into the business 
                    and community, creating a sustainable model for long-term success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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