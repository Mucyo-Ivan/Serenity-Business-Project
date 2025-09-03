import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Calculator, Globe, Brain, Laptop, Users } from "lucide-react";

const Education = () => {
  const educationalPlatforms = [
    {
      name: "StudyFetch",
      url: "https://studyfetch.com/",
      description: "AI-powered study companion that helps create flashcards, quizzes, and study guides from any document.",
      icon: Brain,
      features: ["AI Study Tools", "Document Analysis", "Quiz Generation"]
    },
    {
      name: "Cymath",
      url: "http://cymath.com/",
      description: "Math problem solver that provides step-by-step solutions to algebra, calculus, and other math problems.",
      icon: Calculator,
      features: ["Step-by-step Solutions", "Algebra & Calculus", "Problem Solving"]
    },
    {
      name: "Loecsen",
      url: "https://www.loecsen.com/",
      description: "Learn essential phrases in over 40 languages with audio pronunciation and visual associations.",
      icon: Globe,
      features: ["40+ Languages", "Audio Pronunciation", "Visual Learning"]
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org/",
      description: "Free online courses, lessons and practice in math, science, computer programming, history, art history, economics, and more.",
      icon: BookOpen,
      features: ["Free Courses", "Interactive Exercises", "Progress Tracking"]
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/",
      description: "Online courses from top universities and companies. Earn certificates and degrees in various subjects.",
      icon: Laptop,
      features: ["University Courses", "Certificates", "Professional Skills"]
    },
    {
      name: "Duolingo",
      url: "https://www.duolingo.com/",
      description: "Learn languages for free with fun, bite-sized lessons. Practice speaking, reading, listening, and writing.",
      icon: Users,
      features: ["Language Learning", "Gamified Lessons", "Progress Tracking"]
    }
  ];

  const handlePlatformClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Educational Resources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Access world-class educational platforms and tools to enhance your learning journey. 
            We've curated the best online resources to help you grow and succeed.
          </p>
        </div>
      </section>

      {/* Educational Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learning Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore these carefully selected educational platforms that offer quality learning experiences across various subjects and skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-glow transition-smooth cursor-pointer gradient-card"
                  onClick={() => handlePlatformClick(platform.url)}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-fast">
                        {platform.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary-light text-primary text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="w-full group-hover:bg-primary-hover transition-fast"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlatformClick(platform.url);
                        }}
                      >
                        Visit Platform
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            These platforms offer both free and premium content. Start with the free resources and upgrade as needed to accelerate your learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Explore All Platforms
            </Button>
            <Button variant="outline" size="lg">
              Contact for Guidance
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;