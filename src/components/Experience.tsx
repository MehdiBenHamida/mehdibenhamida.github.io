
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    period: "2021 - Present",
    description: "Leading the development of the company's flagship product, a SaaS platform for business analytics. Managing a team of 5 developers and working closely with design and product teams to deliver high-quality features on time.",
    skills: ["React", "TypeScript", "Node.js", "AWS", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "InnovateTech",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client-facing web applications using React and Redux. Implemented responsive designs and improved application performance by 40% through code optimization and lazy loading.",
    skills: ["React", "Redux", "JavaScript", "SCSS", "Webpack"]
  },
  {
    title: "Junior Web Developer",
    company: "StartupX",
    period: "2017 - 2019",
    description: "Built and maintained websites for various clients using modern web technologies. Collaborated with designers to implement pixel-perfect UIs and ensure cross-browser compatibility.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-6 mt-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="neo-blur card-hover">
              <CardContent className="p-6">
                <div className="md:flex md:justify-between md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground mt-1">{exp.company} | {exp.period}</p>
                  </div>
                </div>
                
                <p className="mt-4 text-muted-foreground">{exp.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-primary/10 text-primary-foreground">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <Card className="neo-blur">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">MSc in Computer Science</h4>
                  <p className="text-muted-foreground">University of California, Berkeley • 2015-2017</p>
                </div>
                
                <div>
                  <h4 className="font-medium">BSc in Software Engineering</h4>
                  <p className="text-muted-foreground">Stanford University • 2011-2015</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
