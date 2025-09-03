import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Calculator, Globe, Brain, Laptop, Users, Star, ArrowRight } from "lucide-react";

const Education = () => {
  const educationalPlatforms = [
    {
      name: "StudyFetch",
      url: "https://studyfetch.com/",
      description: "AI-powered study companion that helps create flashcards, quizzes, and study guides from any document.",
      icon: Brain,
      features: ["AI Study Tools", "Document Analysis", "Quiz Generation"],
      category: "AI Learning"
    },
    {
      name: "Cymath",
      url: "http://cymath.com/",
      description: "Math problem solver that provides step-by-step solutions to algebra, calculus, and other math problems.",
      icon: Calculator,
      features: ["Step-by-step Solutions", "Algebra & Calculus", "Problem Solving"],
      category: "Mathematics"
    },
    {
      name: "Loecsen",
      url: "https://www.loecsen.com/",
      description: "Learn essential phrases in over 40 languages with audio pronunciation and visual associations.",
      icon: Globe,
      features: ["40+ Languages", "Audio Pronunciation", "Visual Learning"],
      category: "Language Learning"
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org/",
      description: "Free online courses, lessons and practice in math, science, computer programming, history, art history, economics, and more.",
      icon: BookOpen,
      features: ["Free Courses", "Interactive Exercises", "Progress Tracking"],
      category: "Comprehensive Learning"
    },
    {
      name: "Coursera",
      url: "https://www.coursera.org/",
      description: "Online courses from top universities and companies. Earn certificates and degrees in various subjects.",
      icon: Laptop,
      features: ["University Courses", "Certificates", "Professional Skills"],
      category: "Higher Education"
    },
    {
      name: "Duolingo",
      url: "https://www.duolingo.com/",
      description: "Learn languages for free with fun, bite-sized lessons. Practice speaking, reading, listening, and writing.",
      icon: Users,
      features: ["Language Learning", "Gamified Lessons", "Progress Tracking"],
      category: "Language Learning"
    },
    {
      name: "edX",
      url: "https://www.edx.org/",
      description: "Access courses from the world's best universities and institutions. Learn at your own pace.",
      icon: BookOpen,
      features: ["University Courses", "MicroMasters", "Professional Certificates"],
      category: "Higher Education"
    },
    {
      name: "Udemy",
      url: "https://www.udemy.com/",
      description: "Learn from expert instructors in technology, business, design, and more with practical, project-based courses.",
      icon: Laptop,
      features: ["Practical Courses", "Project-Based Learning", "Expert Instructors"],
      category: "Skill Development"
    }
  ];

  const categories = ["All", "AI Learning", "Mathematics", "Language Learning", "Comprehensive Learning", "Higher Education", "Skill Development"];

  const handlePlatformClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float mb-8">
            <div className="p-6 rounded-3xl bg-white/20 backdrop-blur-md shadow-2xl border border-white/20">
              <BookOpen className="h-20 w-20 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Educational Resources
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-10 text-body-large">
            Access world-class educational platforms and tools to enhance your learning journey. 
            We've curated the best online resources to help you grow and succeed in your educational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              Explore Platforms
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Educational Platforms */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Learning Platforms
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-body">
              Explore these carefully selected educational platforms that offer quality learning experiences across various subjects and skills.
              Each platform has been chosen for its excellence and proven track record in education.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {educationalPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-500 cursor-pointer gradient-card group-hover:scale-105 border-0"
                  onClick={() => handlePlatformClick(platform.url)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-xs px-3 py-1 bg-primary-light text-primary rounded-full font-medium">
                        {platform.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                      {platform.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {platform.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {platform.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Button 
                        className="w-full group-hover:bg-primary-hover transition-all duration-300 rounded-xl h-12"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlatformClick(platform.url);
                        }}
                      >
                        Visit Platform
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Maximize Your Learning
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-body">
              Get the most out of these educational platforms with our proven learning strategies and tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-primary shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Set Clear Goals</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  Define what you want to achieve and break it down into manageable milestones. 
                  This will help you stay focused and motivated throughout your learning journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-secondary shadow-lg">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Consistent Practice</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  Dedicate regular time to learning, even if it's just 30 minutes a day. 
                  Consistency is key to building lasting knowledge and skills.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gradient-card hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-accent shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl">Join Communities</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground">
                  Connect with other learners, join study groups, and participate in forums. 
                  Learning together can enhance your understanding and motivation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-2xl border-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-body">
              These platforms offer both free and premium content. Start with the free resources and upgrade as needed to accelerate your learning journey.
              Remember, the best investment you can make is in yourself and your education.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-14 px-10 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Explore All Platforms
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300">
                Contact for Guidance
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;