import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, Star, ArrowRight } from "lucide-react";

const Education = () => {
  const educationalPlatforms = [
    {
      name: "StudyFetch",
      description: "Comprehensive study materials and learning resources for students of all levels.",
      url: "https://studyfetch.com/",
      category: "Study Resources",
      features: ["Study materials", "Practice tests", "Learning tools", "Student support"]
    },
    {
      name: "Cymath",
      description: "Step-by-step math problem solver with detailed explanations and learning support.",
      url: "http://cymath.com/",
      category: "Mathematics",
      features: ["Math solver", "Step-by-step solutions", "Practice problems", "Learning explanations"]
    },
    {
      name: "Loecsen",
      description: "Language learning platform with interactive lessons and cultural insights.",
      url: "https://www.loecsen.com/",
      category: "Language Learning",
      features: ["Multiple languages", "Interactive lessons", "Cultural content", "Audio pronunciation"]
    },
    {
      name: "Khan Academy",
      description: "Free online courses, lessons, and practice in various subjects for learners worldwide.",
      url: "https://www.khanacademy.org/",
      category: "Comprehensive Learning",
      features: ["Free courses", "Multiple subjects", "Video lessons", "Practice exercises"]
    },
    {
      name: "Coursera",
      description: "Online courses from top universities and companies to advance your career.",
      url: "https://www.coursera.org/",
      category: "Professional Development",
      features: ["University courses", "Certificates", "Career skills", "Flexible learning"]
    },
    {
      name: "edX",
      description: "High-quality online courses from the world's best universities and institutions.",
      url: "https://www.edx.org/",
      category: "Higher Education",
      features: ["University partnerships", "Degree programs", "Professional certificates", "Global community"]
    }
  ];

  const categories = ["All", "Study Resources", "Mathematics", "Language Learning", "Comprehensive Learning", "Professional Development", "Higher Education"];

  const learningTips = [
    "Set specific learning goals for each session",
    "Create a consistent study schedule",
    "Use multiple platforms to reinforce learning",
    "Take regular breaks to maintain focus",
    "Practice active learning techniques",
    "Join online study groups or forums",
    "Track your progress and celebrate achievements"
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
              Educational Resources
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-body max-w-4xl mx-auto">
              Access to quality online educational platforms and learning resources. 
              Discover tools that can help you learn, grow, and achieve your educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Platforms
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Learning Tips
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Platforms Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Educational Platforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-body">
              Carefully selected online learning resources to support your educational journey across various subjects and skill levels.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="rounded-full px-4 py-2 text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-primary-light text-primary rounded-full text-xs font-medium">
                      {platform.category}
                    </span>
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {platform.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full h-10 rounded-lg">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Tips Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Tips & Best Practices
            </h2>
            <p className="text-lg text-gray-600 text-body">
              Maximize your learning potential with these proven strategies and techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningTips.map((tip, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium text-base">{tip}</span>
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
              Start Your Learning Journey Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-body">
              Take advantage of these excellent educational resources to expand your knowledge, 
              develop new skills, and achieve your learning goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 h-12 px-8 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore All Platforms
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Get Learning Tips
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