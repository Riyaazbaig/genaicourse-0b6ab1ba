import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to 
                <span className="gradient-primary bg-clip-text text-gray-950"> Transform Your Career?</span>
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Get personalized guidance from our career counselors and start your journey in AI & Blockchain
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <Card className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Phone Support</h3>
                      <p className="text-muted-foreground mb-2">Speak with our enrollment team</p>
                      <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-2">Get detailed information</p>
                      <a href="mailto:admissions@aicore.in" className="text-primary font-medium hover:underline">
                        admissions@aicore.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground mb-2">Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-lg mb-4">What You Get:</h3>
              {["Free career assessment", "Personalized learning path", "Industry mentor assignment", "Job placement assistance"].map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>)}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-heading">Get Career Guidance</CardTitle>
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                  Free Consultation
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Fill out the form and our career counselor will contact you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="Enter your email address" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Course Interest</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="genai">Generative AI Certification</SelectItem>
                    <SelectItem value="blockchain">Blockchain Development</SelectItem>
                    <SelectItem value="both">Both AI & Blockchain</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Current Experience Level</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                    <SelectItem value="expert">Expert/Manager level</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message (Optional)</label>
                <Textarea placeholder="Tell us about your career goals and any specific questions you have..." rows={4} />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Get Free Career Consultation
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                We'll never share your information with third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;