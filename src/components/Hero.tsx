import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Award className="h-4 w-4 text-white mr-2" />
            <span className="text-white text-sm font-medium">6-Month Certification Programs</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 text-balance">
            Master the Future with
            <span className="gradient-accent bg-clip-text block text-gray-50">
              Gen-AI & Blockchain
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            Transform your career with industry-recognized certifications in Generative AI and Blockchain technology. 
            Learn from experts and build real-world projects.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="premium" size="xl" className="group">
              Start Learning Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">6 Months</div>
              <div className="text-white/80">Intensive Training</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">5,000+</div>
              <div className="text-white/80">Students Certified</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>;
};
export default Hero;