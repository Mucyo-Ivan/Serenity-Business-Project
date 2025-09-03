import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Utensils, Waves, Music, MapPin, Star, Camera, Coffee } from "lucide-react";

const Hospitality = () => {
  const facilities = [
    {
      icon: Hotel,
      title: "Guest House",
      description: "Comfortable, modern accommodations designed for relaxation and convenience.",
      features: ["Spacious rooms", "Modern amenities", "24/7 service", "Free WiFi"]
    },
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Exceptional dining experience featuring local and international cuisine.",
      features: ["Local specialties", "International menu", "Fresh ingredients", "Professional chefs"]
    },
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Refreshing swimming pool area for relaxation and recreation.",
      features: ["Olympic-size pool", "Children's area", "Pool bar", "Lounging areas"]
    },
    {
      icon: Music,
      title: "Entertainment",
      description: "Various recreational activities and entertainment options for all ages.",
      features: ["Live music", "Cultural shows", "Game areas", "Event spaces"]
    }
  ];

  const amenities = [
    "Conference and meeting rooms",
    "Fitness and wellness center", 
    "Spa and massage services",
    "Kids' play area and activities",
    "Garden and outdoor spaces",
    "Parking facilities",
    "Airport shuttle service",
    "Tour and travel assistance"
  ];

  const vision = [
    {
      title: "Financial Freedom Goal",
      description: "This ambitious project represents our vision of achieving financial independence through successful hospitality services in Rwanda.",
      icon: Star
    },
    {
      title: "Tourism Development", 
      description: "Contributing to Rwanda's growing tourism industry by providing world-class hospitality services and experiences.",
      icon: Camera
    },
    {
      title: "Community Employment",
      description: "Creating numerous job opportunities for local communities while promoting professional development in hospitality.",
      icon: Hotel
    },
    {
      title: "Cultural Showcase",
      description: "Celebrating Rwandan culture and hospitality while providing international standards of service and comfort.",
      icon: Coffee
    }
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
                <Hotel className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hospitality Services
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Our vision for the future: A premier guest house combined with an exceptional restaurant, 
                featuring a swimming pool and comprehensive entertainment facilities in Rwanda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  View Plans
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Support Vision
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-glow">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  Future Hospitality Center
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center">
                    <Hotel className="h-4 w-4 mr-2 text-secondary" />
                    Modern guest house accommodation
                  </li>
                  <li className="flex items-center">
                    <Utensils className="h-4 w-4 mr-2 text-secondary" />
                    Full-service restaurant dining
                  </li>
                  <li className="flex items-center">
                    <Waves className="h-4 w-4 mr-2 text-secondary" />
                    Swimming pool and recreation
                  </li>
                  <li className="flex items-center">
                    <Music className="h-4 w-4 mr-2 text-secondary" />
                    Entertainment and activities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planned Facilities & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive hospitality experience combining accommodation, dining, recreation, and entertainment in one exceptional location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="hover:shadow-glow transition-smooth gradient-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {facility.title}
                      </CardTitle>
                    </div>
                    <CardDescription>
                      {facility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
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

      {/* Additional Amenities */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional Amenities & Services
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive facilities designed to provide guests with everything they need for a memorable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Hospitality Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Building toward financial freedom while contributing to Rwanda's tourism and hospitality industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vision.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="gradient-card hover:shadow-lg transition-smooth">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-secondary">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Impact */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              A Vision for Tomorrow
            </h2>
            
            <div className="space-y-6 text-left">
              <p className="text-muted-foreground text-center">
                <em>"If God provides and our project achieves financial freedom in Rwanda, we shall construct a guest house combined with a restaurant (two in one) with a swimming pool and other recreation and entertainment activities."</em>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-primary-light rounded-lg">
                  <Hotel className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-1">Accommodation</h3>
                  <p className="text-xs text-muted-foreground">Modern guest house facilities</p>
                </div>
                
                <div className="text-center p-4 bg-secondary-light rounded-lg">
                  <Utensils className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <h3 className="font-semibold text-secondary mb-1">Dining</h3>
                  <p className="text-xs text-muted-foreground">Restaurant with diverse cuisine</p>
                </div>
                
                <div className="text-center p-4 bg-accent-light rounded-lg">
                  <Waves className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-accent mb-1">Recreation</h3>
                  <p className="text-xs text-muted-foreground">Pool and entertainment activities</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-foreground mb-3 text-center">Project Impact Goals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-primary" />
                    Contribute to Rwanda's tourism development
                  </li>
                  <li className="flex items-center">
                    <Hotel className="h-4 w-4 mr-2 text-primary" />
                    Create employment opportunities in hospitality
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Establish a landmark destination for visitors
                  </li>
                  <li className="flex items-center">
                    <Coffee className="h-4 w-4 mr-2 text-primary" />
                    Showcase Rwandan hospitality and culture
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-muted-foreground mb-6">
                This hospitality project represents our ultimate vision of business success - creating a destination 
                that serves both local and international visitors while achieving financial independence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                  Join Our Vision
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
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

export default Hospitality;