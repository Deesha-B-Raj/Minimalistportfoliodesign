import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Code, Database, Lightbulb, TrendingUp, GraduationCap, Briefcase } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    icon: GraduationCap,
    title: "Master's in Management Science & Engineering",
    description: "Building strategic and analytical skills to drive product innovation",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Briefcase,
    title: "Data Engineer at Fidelity Investments",
    description: "3 years of building scalable data pipelines and analytics solutions",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Bachelor's in Computer Science",
    description: "Strong technical foundation in software development and systems design",
    color: "from-teal-500 to-green-500"
  }
];

const strengths = [
  {
    icon: Database,
    title: "Data-Driven Decision Making",
    description: "Leverage analytics to identify opportunities and validate product decisions"
  },
  {
    icon: Lightbulb,
    title: "Technical Product Thinking",
    description: "Bridge the gap between engineering teams and business stakeholders"
  },
  {
    icon: TrendingUp,
    title: "Strategic Mindset",
    description: "Combine business strategy with user needs to drive product growth"
  }
];

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-sm">
              About Me
            </div>
            <h2 className="text-neutral-900">
              From Engineering to Product Leadership
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                My journey into product management is driven by a unique blend of technical depth 
                and strategic thinking. With a <span className="text-neutral-900">Bachelor's in Computer Science 
                and Engineering</span> and <span className="text-neutral-900">3 years at Fidelity Investments</span> as 
                a Data Engineer, I've built the technical foundation to understand complex systems and 
                data architectures.
              </p>
              <p>
                What sets me apart is my ability to translate technical complexity into user value. 
                I've seen firsthand how data-driven insights can transform product decisions, and I'm 
                passionate about building solutions that solve real problems for real people.
              </p>
              <p>
                Currently pursuing my <span className="text-neutral-900">Master's in Management Science & 
                Engineering</span>, I'm honing the strategic and leadership skills needed to drive 
                product vision from conception to launch. I bring a unique perspective that combines 
                engineering rigor with business acumen—making me the bridge between what's technically 
                possible and what's strategically valuable.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-blue-400 rounded-2xl transform rotate-3" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzk5ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-neutral-900 mb-8 text-center">
            My Journey
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-neutral-900 mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {exp.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Strengths */}
        <div>
          <h3 className="text-neutral-900 mb-8 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-100 to-blue-100">
                    <Icon className="w-8 h-8 text-violet-600" />
                  </div>
                  <h4 className="text-neutral-900">
                    {strength.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">
                    {strength.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
