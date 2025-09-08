import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Stay Updated with Industry Insights
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest trends in AI and Blockchain delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">TechEdu Pro</span>
                <span className="text-xs text-primary-foreground/70">AI & Blockchain Academy</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Empowering professionals with cutting-edge skills in Generative AI and Blockchain technology through industry-recognized certification programs.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-smooth" />
              <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-smooth" />
              <Linkedin className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-smooth" />
              <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-smooth" />
              <Youtube className="h-5 w-5 text-primary-foreground/60 hover:text-white cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Courses</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Generative AI Fundamentals</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Advanced AI & ML</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Blockchain Development</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Cryptocurrency & DeFi</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Enterprise Blockchain</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">AI Ethics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Our Mission</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Instructors</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Success Stories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Press & Media</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Contact Support</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Student Portal</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Technical Requirements</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Refund Policy</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 TechEdu Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;