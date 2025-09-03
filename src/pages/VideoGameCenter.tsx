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
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-float mb-8">
                <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
                  <Gamepad2 className="h-24 w-24 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Video Game Center
              </h1>
              <p className="text-xl text-white/90 mb-10 text-body-large">
                A revolutionary approach to community development - using video games to encourage education, 
                cleanliness, and positive behavior while providing street children with safe recreational activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Support Our Mission
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
                    <span className="text-lg">Help street children find purpose</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Encourage school attendance</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Sparkles className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Promote good values and habits</span>
                  </div>
                  <div className="flex items-center text-white/90 p-3 rounded-xl hover:bg-white/10 transition-colors duration-300">
                    <Gamepad2 className="h-6 w-6 mr-4 text-secondary flex-shrink-0" />
                    <span className="text-lg">Make learning fun and engaging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Vision Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-10 shadow-2xl border-0 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              CEO's Inspiration
            </h2>
            <div className="text-left space-y-6">
              <p className="text-muted-foreground italic text-xl">
                "I saw many street children loitering on the streets with nothing meaningful to do. 
                But I noticed that most children love video games. This gave me an idea..."
              </p>
              <p className="text-muted-foreground text-lg">
                <strong>RUHARA MIHIGO Shammy</strong> recognized that video games could be a powerful tool 
                for positive change. Instead of just entertainment, games could become a bridge to education, 
                encouraging children to attend school and develop good habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How Our Program Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              Our video game center is designed with purpose - every game session is an opportunity for learning and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 gradient-card group-hover:scale-105 border-0">
                  <CardHeader>
                    <div className="mx-auto mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gaming Guidelines
            </h2>
            <p className="text-lg text-muted-foreground text-body">
              Simple, positive rules that encourage good habits and educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <Card key={index} className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <CheckCircle className="h-6 w-6 text-success mr-3" />
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-lg">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Community Impact Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-body">
              Through gaming, we aim to create positive change in children's lives and strengthen our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-4 h-4 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium text-lg">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-body">
              Help us create a space where children can play, learn, and grow in a safe, 
              supportive environment. Together, we can use the power of gaming to build stronger communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="p-4 bg-primary-light rounded-2xl w-fit mx-auto mb-4">
                  <Gamepad2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Free Gaming</h3>
                <p className="text-muted-foreground">All games are free for participating children</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-secondary-light rounded-2xl w-fit mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Educational Focus</h3>
                <p className="text-muted-foreground">Learning integrated into every gaming session</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 bg-accent-light rounded-2xl w-fit mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Community Care</h3>
                <p className="text-muted-foreground">Building values and positive relationships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Support This Project
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300">
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