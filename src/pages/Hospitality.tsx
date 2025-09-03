import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Utensils, Waves, Music, MapPin, Star, Camera, Coffee, ArrowRight } from "lucide-react";

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
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Hotel className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Hospitality Services
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                Our vision for the future: A premier guest house combined with an exceptional restaurant, 
                featuring a swimming pool and comprehensive entertainment facilities in Rwanda.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  View Plans
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Support Vision
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
                  <MapPin className="h-7 w-7 mr-3 text-accent" />
                  Our Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Hotel className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Premier guest house</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Utensils className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Exceptional restaurant</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Waves className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Swimming pool</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Music className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Entertainment facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Planned Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              A comprehensive hospitality complex designed to provide exceptional experiences for guests and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 gradient-card border-0">
                  <CardHeader>
                    <div className="mx-auto mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {facility.title}
                    </CardTitle>
                    <CardDescription className="text-body">
                      {facility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
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

      {/* Amenities Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Additional Amenities
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Comprehensive services and facilities to ensure every guest has an exceptional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium text-lg">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Hospitality Vision
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              This project represents our commitment to excellence and our vision for the future of hospitality in Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vision.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-body">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Building Our Future
            </h2>
            <div className="space-y-8 text-left">
              <p className="text-muted-foreground text-body">
                <strong>RUHARA MIHIGO Shammy</strong> envisions this hospitality project as a key milestone in achieving financial freedom and contributing to Rwanda's tourism development:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary-light rounded-2xl">
                  <h3 className="font-semibold text-primary mb-3 text-lg">Financial Independence</h3>
                  <p className="text-muted-foreground text-body">
                    This project represents our path to financial freedom, creating sustainable income through exceptional hospitality services.
                  </p>
                </div>
                
                <div className="p-6 bg-secondary-light rounded-2xl">
                  <h3 className="font-semibold text-secondary mb-3 text-lg">Tourism Growth</h3>
                  <p className="text-muted-foreground text-body">
                    Contributing to Rwanda's tourism industry by providing world-class accommodations and dining experiences.
                  </p>
                </div>
                
                <div className="p-6 bg-accent-light rounded-2xl">
                  <h3 className="font-semibold text-accent mb-3 text-lg">Community Development</h3>
                  <p className="text-muted-foreground text-body">
                    Creating employment opportunities and promoting professional development in the hospitality sector.
                  </p>
                </div>
                
                <div className="p-6 bg-muted rounded-2xl">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Cultural Excellence</h3>
                  <p className="text-muted-foreground text-body">
                    Showcasing Rwandan hospitality while maintaining international standards of service and comfort.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground text-body text-center">
                "When God provides and our project achieves financial freedom in Rwanda, we will construct this 
                guest house combined with a restaurant, featuring a swimming pool and comprehensive entertainment facilities."
              </p>
            </div>
            
            <div className="mt-10">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Support Our Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hospitality;