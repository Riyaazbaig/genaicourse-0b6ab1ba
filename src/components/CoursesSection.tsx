import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CoursesSection = () => {
  const courses = [
    // Blockchain Courses
    {
      title: "Blockchain Fundamentals",
      description: "Learn the core concepts of blockchain technology, distributed ledgers, and cryptocurrency fundamentals.",
      duration: "4 Weeks",
      students: 1200,
      rating: 4.8,
      price: "₹9,999",
      category: "Blockchain" as const,
      level: "Beginner" as const,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Smart Contracts & DApps Development",
      description: "Master smart contract development and build decentralized applications using Solidity and Web3.",
      duration: "6 Weeks", 
      students: 950,
      rating: 4.9,
      price: "₹14,999",
      category: "Blockchain" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Blockchain for Finance & Supply Chain",
      description: "Apply blockchain solutions to real-world finance and supply chain management problems.",
      duration: "8 Weeks",
      students: 800,
      rating: 4.7,
      price: "₹19,999",
      category: "Blockchain" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced Blockchain & Security",
      description: "Deep dive into blockchain security, consensus mechanisms, and advanced cryptographic protocols.",
      duration: "10 Weeks",
      students: 650,
      rating: 4.9,
      price: "₹24,999",
      category: "Blockchain" as const,
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80"
    },
    // Gen-AI Courses
    {
      title: "Introduction to Generative AI",
      description: "Get started with generative AI fundamentals, understanding LLMs and their applications.",
      duration: "4 Weeks",
      students: 1500,
      rating: 4.8,
      price: "₹11,999",
      category: "Gen-AI" as const,
      level: "Beginner" as const,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Prompt Engineering & LLM Applications",
      description: "Master prompt engineering techniques and build practical LLM applications for business use cases.",
      duration: "6 Weeks",
      students: 1100,
      rating: 4.9,
      price: "₹16,999",
      category: "Gen-AI" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Gen-AI for Business & Research",
      description: "Apply generative AI to solve complex business problems and conduct advanced research projects.",
      duration: "8 Weeks",
      students: 900,
      rating: 4.8,
      price: "₹21,999",
      category: "Gen-AI" as const,
      level: "Intermediate" as const,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Advanced Gen-AI: GANs, Diffusion Models & Ethics",
      description: "Explore cutting-edge generative models, GANs, diffusion models, and ethical AI development practices.",
      duration: "10 Weeks",
      students: 700,
      rating: 4.9,
      price: "₹27,999",
      category: "Gen-AI" as const,
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    // Combo Offers
    {
      title: "Blockchain + Gen-AI Basics Package",
      description: "Perfect combination of blockchain fundamentals and generative AI introduction for comprehensive learning.",
      duration: "8 Weeks",
      students: 600,
      rating: 4.9,
      price: "₹17,999",
      category: "Combo" as const,
      level: "Beginner" as const,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Full Stack Blockchain + Gen-AI Mastery",
      description: "Complete mastery program covering advanced blockchain development and generative AI applications.",
      duration: "20 Weeks",
      students: 400,
      rating: 4.9,
      price: "₹39,999",
      category: "Combo" as const,
      level: "Advanced" as const,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
    }
  ];
  return <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-balance">
            Blockchain & Generative AI 
            <span className="text-white"> Course Price List</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            Choose from our comprehensive courses ranging from 4-20 weeks, designed by industry experts with affordable pricing in Indian Rupees
          </p>
          
          {/* Filter Tabs */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1 mb-8">
            <Button variant="default" size="sm" className="rounded-md">
              All Courses
            </Button>
            <Button variant="ghost" size="sm">
              Blockchain
            </Button>
            <Button variant="ghost" size="sm">
              Gen-AI
            </Button>
            <Button variant="ghost" size="sm">
              Combo Offers
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => <CourseCard key={index} {...course} />)}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="premium" size="lg" className="group">
            View All Courses
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>;
};
export default CoursesSection;