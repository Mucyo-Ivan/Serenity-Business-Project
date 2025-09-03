import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Building2, 
  CheckCircle, 
  Target,
  Heart,
  Lightbulb,
  Handshake
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize community needs and sustainable development in everything we do."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging technology and creative solutions to solve real-world problems."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building strong partnerships with communities, businesses, and individuals."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality services and sustainable solutions."
    }
  ];

  const achievements = [
    "Certified expertise in graphic design and web development",
    "Multiple technology certifications acquired",
    "Community-focused business model development",
    "Strategic partnerships with engineering professionals",
    "Comprehensive multi-sector business portfolio"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Serenity Business Project
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Founded and led by <strong className="text-primary">RUHARA MIHIGO Shammy</strong>, 
            our mission is to create sustainable business solutions that serve communities, 
            generate employment, and build pathways to financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Leadership Profile */}
          <div>
            <Card className="gradient-card shadow-glow">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl">RUHARA MIHIGO Shammy</CardTitle>
                <CardDescription className="text-lg text-primary font-medium">
                  Chief Executive Officer & Founder
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-primary-light rounded-lg">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Professional Certifications
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Certified in graphic design, web development, and various technology disciplines, 
                    bringing proven expertise to serve clients and communities.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary-light rounded-lg">
                  <h4 className="font-semibold text-secondary mb-2 flex items-center">
                    <Building2 className="h-5 w-5 mr-2" />
                    Vision & Leadership
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Leading a comprehensive business portfolio designed to create employment opportunities, 
                    serve community needs, and achieve sustainable financial growth.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="gradient-card hover:shadow-glow transition-smooth">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-gradient-primary">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Our Mission Statement
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To build a comprehensive business ecosystem that serves diverse community needs 
                while creating sustainable employment opportunities and pathways to financial freedom. 
                We believe in the power of education, technology, and strategic partnerships to 
                transform lives and communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Learn More About Our Journey
                </Button>
                <Button variant="outline">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Business Sectors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Community Focused</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Commitment</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Growth Potential</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;