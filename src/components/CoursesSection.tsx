import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "Generative AI Fundamentals",
      description: "Master the basics of GenAI, including GPT models, prompt engineering, and practical applications in business scenarios.",
      duration: "6 months",
      students: 2800,
      rating: 4.9,
      price: "$2,999",
      category: "Gen-AI" as const,
      level: "Beginner" as const,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced AI & Machine Learning",
      description: "Deep dive into neural networks, transformers, and build your own AI models from scratch with real-world projects.",
      duration: "6 months",
      students: 1950,
      rating: 4.8,
      price: "$3,499",
      category: "Gen-AI" as const,
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blockchain Development Bootcamp",
      description: "Learn blockchain fundamentals, smart contracts, DeFi protocols, and build decentralized applications.",
      duration: "6 months",
      students: 3200,
      rating: 4.9,
      price: "$2,799",
      category: "Blockchain" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cryptocurrency & DeFi Mastery",
      description: "Master cryptocurrency trading, DeFi protocols, yield farming, and blockchain financial systems.",
      duration: "6 months",
      students: 2100,
      rating: 4.7,
      price: "$2,599",
      category: "Blockchain" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Enterprise Blockchain Solutions",
      description: "Design and implement blockchain solutions for enterprise use cases, including supply chain and healthcare.",
      duration: "6 months",
      students: 1600,
      rating: 4.8,
      price: "$3,299",
      category: "Blockchain" as const,
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI Ethics & Responsible Development",
      description: "Learn responsible AI development, bias detection, ethical frameworks, and governance in AI systems.",
      duration: "6 months",
      students: 1400,
      rating: 4.9,
      price: "$2,399",
      category: "Gen-AI" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-balance">
            Industry-Leading 
            <span className="gradient-primary bg-clip-text text-transparent"> Certification Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Choose from our comprehensive 6-month certification programs designed by industry experts and tailored for career advancement
          </p>
          
          {/* Filter Tabs */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1 mb-8">
            <Button variant="default" size="sm" className="rounded-md">
              All Courses
            </Button>
            <Button variant="ghost" size="sm">
              Gen-AI
            </Button>
            <Button variant="ghost" size="sm">
              Blockchain
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="group">
            View All Courses
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;