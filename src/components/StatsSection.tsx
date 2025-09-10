import { Users, GraduationCap, Award, TrendingUp, Building, Star } from "lucide-react";
const StatsSection = () => {
  const stats = [{
    icon: Users,
    value: "10,000+",
    label: "Active Students",
    description: "Learning with us globally"
  }, {
    icon: GraduationCap,
    value: "8,500+",
    label: "Graduates",
    description: "Successfully certified"
  }, {
    icon: Award,
    value: "95%",
    label: "Job Placement",
    description: "Within 6 months"
  }, {
    icon: Building,
    value: "500+",
    label: "Partner Companies",
    description: "Hiring our graduates"
  }, {
    icon: Star,
    value: "4.9/5",
    label: "Student Rating",
    description: "Average course rating"
  }, {
    icon: TrendingUp,
    value: "150%",
    label: "Salary Increase",
    description: "Average post-certification"
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-balance">
            Trusted by Thousands of
            <span className="gradient-primary bg-clip-text text-zinc-950"> Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Join a community of learners who have transformed their careers with our industry-leading certification programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => <div key={index} className="bg-card border border-border rounded-xl p-8 text-center shadow-card hover:shadow-elegant transition-smooth group">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-6 group-hover:shadow-glow transition-smooth">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">
                {stat.value}
              </div>
              <div className="font-heading font-semibold text-lg mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </div>)}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Recognized and trusted by industry leaders</p>
          <div className="flex items-center justify-center space-x-12 opacity-60 hover:opacity-80 transition-smooth">
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">IBM</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">Meta</div>
          </div>
        </div>
      </div>
    </section>;
};
export default StatsSection;