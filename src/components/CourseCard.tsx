import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, Users, Star, TrendingUp } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  category: "Gen-AI" | "Blockchain";
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
}

const CourseCard = ({ 
  title, 
  description, 
  duration, 
  students, 
  rating, 
  price, 
  category, 
  level, 
  image 
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth overflow-hidden bg-card border-border">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <Badge 
            variant={category === "Gen-AI" ? "default" : "secondary"}
            className={category === "Gen-AI" ? "gradient-primary text-white" : "bg-secondary text-secondary-foreground"}
          >
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
            {level}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-6 pb-4">
        <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-primary transition-smooth">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {students.toLocaleString()} students
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 fill-warning text-warning" />
            {rating}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-2xl font-bold text-primary">
            {price}
            <span className="text-sm font-normal text-muted-foreground ml-1">/course</span>
          </div>
          <div className="flex items-center text-success text-sm">
            <TrendingUp className="h-4 w-4 mr-1" />
            High Demand
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button variant="hero" className="w-full">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;