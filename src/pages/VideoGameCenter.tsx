import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, GraduationCap, Heart, Users, CheckCircle, BookOpen, Sparkles } from "lucide-react";

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
      <section className="pt-16 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-float mb-6">
                <Gamepad2 className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Video Game Center
              </h1>
              <p className="text-xl text-white/90 mb-8">
                A revolutionary approach to community development - using video games to encourage education, 
                cleanliness, and positive behavior while providing street children with safe recreational activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Support Our Mission
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
                    Help street children find purpose
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2 text-secondary" />
                    Encourage school attendance
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-secondary" />
                    Promote good values and habits
                  </li>
                  <li className="flex items-center">
                    <Gamepad2 className="h-4 w-4 mr-2 text-secondary" />
                    Make learning fun and engaging
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Vision Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              CEO's Inspiration
            </h2>
            <div className="text-left space-y-4">
              <p className="text-muted-foreground italic text-lg">
                "I saw many street children loitering on the streets with nothing meaningful to do. 
                But I noticed that most children love video games. This gave me an idea..."
              </p>
              <p className="text-muted-foreground">
                <strong>RUHARA MIHIGO Shammy</strong> recognized that video games could be a powerful tool 
                for positive change. Instead of just entertainment, games could become a bridge to education, 
                encouraging children to attend school and develop good habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Our Program Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our video game center is designed with purpose - every game session is an opportunity for learning and personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-glow transition-smooth gradient-card">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Gaming Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, positive rules that encourage good habits and educational values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rules.map((rule, index) => (
              <Card key={index} className="gradient-card hover:shadow-lg transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-success mr-2" />
                    {rule.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {rule.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Community Impact Goals
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Through gaming, we aim to create positive change in children's lives and strengthen our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {impactGoals.map((goal, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm hover:shadow-md transition-smooth">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-foreground font-medium">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Help us create a space where children can play, learn, and grow in a safe, 
              supportive environment. Together, we can use the power of gaming to build stronger communities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="p-3 bg-primary-light rounded-xl w-fit mx-auto mb-2">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Free Gaming</h3>
                <p className="text-sm text-muted-foreground">All games are free for participating children</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-secondary-light rounded-xl w-fit mx-auto mb-2">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">Educational Focus</h3>
                <p className="text-sm text-muted-foreground">Learning integrated into every gaming session</p>
              </div>
              
              <div className="text-center">
                <div className="p-3 bg-accent-light rounded-xl w-fit mx-auto mb-2">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Community Care</h3>
                <p className="text-sm text-muted-foreground">Building values and positive relationships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Support This Project
              </Button>
              <Button variant="outline" size="lg">
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