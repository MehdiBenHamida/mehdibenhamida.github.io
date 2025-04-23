import { Code, Database, Terminal, Box, Grid3X3 } from "lucide-react";
import { useEffect, useState } from "react";

const TechLogos = () => {
  const technologies = [
    { icon: Code, name: "Python", delay: "0" },
    { icon: Database, name: "PostgreSQL", delay: "100" },
    { icon: Code, name: "FastAPI", delay: "200" },
    { icon: Terminal, name: "Flask", delay: "300" },
    { icon: Database, name: "Redis", delay: "400" },
    { icon: Box, name: "RabbitMQ", delay: "500" },
    { icon: Database, name: "SQLAlchemy", delay: "600" },
    { icon: Code, name: "Pydantic", delay: "700" },
    { icon: Box, name: "Docker", delay: "800" },
    { icon: Grid3X3, name: "Kubernetes", delay: "900" }
  ];

  const [positions, setPositions] = useState(technologies.map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    speedX: (Math.random() - 0.5) * 0.1,
    speedY: (Math.random() - 0.5) * 0.1
  })));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(prevPositions => prevPositions.map(pos => ({
        x: (pos.x + pos.speedX + 100) % 100,
        y: (pos.y + pos.speedY + 100) % 100,
        speedX: pos.speedX,
        speedY: pos.speedY
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {technologies.map((tech, index) => {
        const Icon = tech.icon;
        const position = positions[index];
        
        return (
          <div
            key={tech.name}
            className="absolute"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#366B98] to-[#FFD343] rounded-full opacity-5 blur-xl"></div>
              <div className="relative flex items-center justify-center w-16 h-16 bg-black/5 backdrop-blur-sm rounded-full border border-white/5">
                <Icon 
                  size={32} 
                  className="text-white/10"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechLogos;
