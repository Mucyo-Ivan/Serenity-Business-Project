import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, GraduationCap, Heart, Users, CheckCircle, BookOpen, Sparkles, Star, ArrowRight } from "lucide-react";

const VideoGameCenter = () => {
  const programFeatures = [
    {
      icon: GraduationCap,
      title: "Educational Gaming",
      description: "Games are linked to educational content, encouraging learning through fun and interactive experiences."
    },
    {
      icon: BookOpen,
      title: "School Support",
      description: "Kids are asked questions about what they learned in school to reinforce their education."
    },
    {
      icon: Sparkles,
      title: "Cleanliness Values",
      description: "Promoting good hygiene and cleanliness habits as part of accessing gaming privileges."
    },
    {
      icon: Heart,
      title: "Community Care",
      description: "Providing a safe, supervised environment where children can play and learn together."
    }
  ];

  const impactGoals = [
    "Get street children off the streets",
    "Encourage school attendance",
    "Promote educational values",
    "Teach cleanliness and hygiene",
    "Build community connections",
    "Provide safe recreational activities"
  ];

  const rules = [
    {
      title: "Educational Check",
      description: "Answer questions about school lessons before playing"
    },
    {
      title: "Cleanliness Standard",
      description: "Maintain personal hygiene and clean appearance"
    },
    {
      title: "School Attendance", 
      description: "Regular school attendance is encouraged and supported"
    },
    {
      title: "Respectful Behavior",
      description: "Treat others with kindness and respect"
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
              <div className="p-4 rounded-2xl bg-gradient-primary shadow-xl border border-primary/20">
                <Gamepad2 className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Video Game Center
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              A revolutionary approach to community development - using video games to encourage education, 
              cleanliness, and positive behavior while providing street children with safe recreational activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Vision Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              CEO's Inspiration
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 italic text-lg">
                "I saw many street children loitering on the streets with nothing meaningful to do. 
                But I noticed that most children love video games. This gave me an idea..."
              </p>
              <p className="text-gray-600 text-base">
                <strong>RUHARA MIHIGO Shammy</strong> recognized that video games could be a powerful tool 
                for positive change. Instead of just entertainment, games could become a bridge to education, 
                encouraging children to attend school and develop good habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Program Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Our video game center is designed with purpose - every game session is an opportunity for learning and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="mx-auto mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules and Guidelines */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Gaming Guidelines
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Simple, positive rules that encourage good habits and educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rules.map((rule, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg text-gray-900">
                    <CheckCircle className="h-5 w-5 text-success mr-3" />
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-base">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Community Impact Goals
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-body">
              Through gaming, we aim to create positive change in children's lives and strengthen our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-body">
              Help us create a space where children can play, learn, and grow in a safe, 
              supportive environment. Together, we can use the power of gaming to build stronger communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="p-3 bg-primary-light rounded-xl w-fit mx-auto mb-3">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">Free Gaming</h3>
                <p className="text-gray-600 text-sm">All games are free for participating children</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-secondary-light rounded-xl w-fit mx-auto mb-3">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">Educational Focus</h3>
                <p className="text-gray-600 text-sm">Learning integrated into every gaming session</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-accent-light rounded-xl w-fit mx-auto mb-3">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">Community Care</h3>
                <p className="text-gray-600 text-sm">Building values and positive relationships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Support This Project
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoGameCenter;