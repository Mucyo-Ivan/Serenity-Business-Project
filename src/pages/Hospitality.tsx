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
      <section className="pt-2 pb-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
                          <div className="animate-float mb-6 mx-auto w-fit">
                <div className="p-5 rounded-2xl bg-gradient-primary shadow-xl border border-primary/20">
                  <img 
                    src="/serenity-logo.png" 
                    alt="Serenity Business Project Logo" 
                    className="h-20 w-20 object-contain"
                  />
                </div>
              </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Hospitality Services
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Our vision for the future: A premier guest house combined with an exceptional restaurant, 
              featuring a swimming pool and comprehensive entertainment facilities in Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                View Plans
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Support Vision
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Planned Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              A comprehensive hospitality complex designed to provide exceptional experiences for guests and visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {facility.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {facility.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-600">{feature}</span>
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Amenities
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Comprehensive services and facilities to ensure every guest has an exceptional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hospitality Vision
            </h2>
            <p className="text-lg text-gray-600 text-body">
              This project represents our commitment to excellence and our vision for the future of hospitality in Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vision.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-900">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-body">
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Building Our Future
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-gray-600 text-body">
                <strong>RUHARA MIHIGO Shammy</strong> envisions this hospitality project as a key milestone in achieving financial freedom and contributing to Rwanda's tourism development:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary-light rounded-xl">
                  <h3 className="font-semibold text-primary mb-2 text-base">Financial Independence</h3>
                  <p className="text-gray-600 text-sm">
                    This project represents our path to financial freedom, creating sustainable income through exceptional hospitality services.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-light rounded-xl">
                  <h3 className="font-semibold text-secondary mb-2 text-base">Tourism Growth</h3>
                  <p className="text-gray-600 text-sm">
                    Contributing to Rwanda's tourism industry by providing world-class accommodations and dining experiences.
                  </p>
                </div>
                
                <div className="p-4 bg-accent-light rounded-xl">
                  <h3 className="font-semibold text-accent mb-2 text-base">Community Development</h3>
                  <p className="text-gray-600 text-sm">
                    Creating employment opportunities and promoting professional development in the hospitality sector.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">Cultural Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Showcasing Rwandan hospitality while maintaining international standards of service and comfort.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 text-body text-center">
                "When God provides and our project achieves financial freedom in Rwanda, we will construct this 
                guest house combined with a restaurant, featuring a swimming pool and comprehensive entertainment facilities."
              </p>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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