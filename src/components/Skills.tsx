
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Python Ecosystem",
    skills: ["Python", "Django", "Flask", "FastAPI", "NumPy", "Pandas", "TensorFlow", "PyTorch", "Scikit-learn"]
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Next.js", "Vue.js"]
  },
  {
    name: "Backend & Database",
    skills: ["Node.js", "Express", "GraphQL", "REST API", "MongoDB", "PostgreSQL", "SQLAlchemy", "Redis", "Firebase"]
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "CI/CD", "Docker", "Kubernetes", "AWS", "Vercel", "Jest", "Pytest"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-heading">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`neo-blur card-hover ${index === 0 ? 'border-[#366B98]/30' : ''}`}>
              <CardContent className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${index === 0 ? 'text-[#366B98]' : ''}`}>{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline" 
                      className={
                        category.name === "Python Ecosystem" 
                          ? (skillIndex % 2 === 0 ? 'bg-[#366B98]/30 text-white' : 'bg-[#FFD343]/20 text-white') 
                          : 'bg-secondary/80'
                      }
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
