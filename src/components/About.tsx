
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
          <div className="md:col-span-2">
            <p className="text-muted-foreground mb-4">
              Hello! I'm John, a passionate full-stack developer and UI/UX designer with over 5 years of experience creating modern web applications. I specialize in React, TypeScript, and Node.js, with a strong foundation in responsive design and accessible user interfaces.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in tech began when I built my first website at 14, and I've been hooked ever since. After studying Computer Science at UC Berkeley, I worked at several startups before taking on my current role as Senior Developer at TechCorp.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me hiking in the mountains, experimenting with new cooking recipes, or contributing to open-source projects. I'm always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
          
          <div>
            <Card className="h-full neo-blur card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Based in San Francisco, CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>5+ years professional experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>MSc in Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Open source contributor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Remote work advocate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Continuous learner</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
