import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0792504368",
      href: "tel:0792504368",
      description: "Call us anytime for inquiries"
    },
    {
      icon: Mail,
      label: "Email",
      value: "mihigoshammy66@gmail.com",
      href: "mailto:mihigoshammy66@gmail.com",
      description: "Send us your questions or proposals"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@shammymihigo",
      href: "https://www.instagram.com/shammymihigo/",
      description: "Follow our daily updates and behind-the-scenes"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "mihigo.shammy.7",
      href: "https://web.facebook.com/mihigo.shammy.7",
      description: "Connect with us on Facebook"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Available for emergencies" }
  ];

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey with us? We're here to help with any questions about our services, 
            partnerships, or how we can support your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card 
                      key={index} 
                      className="gradient-card hover:shadow-glow transition-smooth cursor-pointer group"
                      onClick={() => handleExternalLink(item.href)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-gradient-primary flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-fast">
                              {item.label}
                            </h4>
                            <p className="text-primary font-medium mb-2 flex items-center">
                              {item.value}
                              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-fast" />
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Business Hours
                </CardTitle>
                <CardDescription>
                  We're available during these hours for consultations and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Our Location
                </CardTitle>
                <CardDescription>
                  Based in Rwanda, serving local and international clients
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're proudly based in Rwanda and committed to serving our local community 
                  while expanding our reach to help businesses and individuals globally.
                </p>
                <div className="p-4 bg-primary-light rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    🇷🇼 Serving Rwanda and Beyond
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="gradient-card shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                    <option value="">Select a service</option>
                    <option value="education">Educational Resources</option>
                    <option value="technology">Technology Services</option>
                    <option value="electronics">Electronics & Repair</option>
                    <option value="engineering">Engineering Services</option>
                    <option value="agriculture">Agricultural Project</option>
                    <option value="hospitality">Hospitality Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your needs, questions, or how we can help you..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  We'll respond within 24 hours during business days
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-3xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you need technology services, want to partner with us, or are interested in our 
              community development initiatives, we're excited to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90"
                onClick={() => handleExternalLink("tel:0792504368")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleExternalLink("mailto:mihigoshammy66@gmail.com")}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;