import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TechLogos from "./TechLogos";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <TechLogos />
      
      {/* Python-themed background with grid pattern and glow effects */}
      <div className="absolute inset-0 bg-grid-white/5 mask-gradient-to-b pointer-events-none">
        <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
        
        {/* Python-colored glow orbs */}
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#366B98]/15 rounded-full blur-3xl opacity-70 animate-pulse-subtle"></div>
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FFD343]/10 rounded-full blur-3xl opacity-70 animate-pulse-subtle"></div>
        
        {/* Python-inspired digital circuit lines */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10 10L90 10M10 50L90 50M10 90L90 90M10 10L10 90M50 10L50 90M90 10L90 90" 
                      stroke="url(#grad)" strokeWidth="0.5" fill="none" />
              </pattern>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#366B98" />
                <stop offset="100%" stopColor="#FFD343" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Python-themed avatar animation */}
        <div className="relative mb-8">
          <div className="absolute inset-0 -m-6 bg-gradient-to-r from-[#366B98]/30 via-primary/5 to-[#FFD343]/30 rounded-full blur-xl opacity-90 animate-pulse-subtle"></div>
          <div className="absolute inset-0 -m-3 futuristic-border rounded-full">
            <div className="h-full w-full rounded-full p-[1px]">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-[#366B98]/20 to-[#FFD343]/20"></div>
            </div>
          </div>
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-[1px] border-white/10 relative mb-6 animate-fade-in shadow-xl">
            <AvatarImage src="/profile-picture.jpg" alt="Mehdi Ben Hamida" />
            <AvatarFallback className="bg-muted text-lg md:text-xl">MBH</AvatarFallback>
          </Avatar>
        </div>
        
        {/* Name with Python-themed glitch effect */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 animate-fade-in">
          <span className="glitch-effect gradient-text inline-block" data-text="Mehdi Ben Hamida">Mehdi Ben Hamida</span>
        </h1>
        
        {/* Python-styled role description */}
        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8 animate-fade-in flex items-center justify-center backdrop-blur-sm py-1 px-3 rounded-full bg-white/5" style={{ animationDelay: "100ms" }}>
          <span className="mr-2 text-[#366B98]">{'<'}</span>
          <span className="typing-effect">Full Stack Software Engineer and Pythonista</span>
          <span className="ml-2 text-[#FFD343]">{'/>'}</span>
        </h2>
        
        <p className="max-w-[600px] text-muted-foreground mb-10 animate-fade-in leading-relaxed backdrop-blur-sm py-3 px-4 rounded-md bg-black/20 border border-white/5" style={{ animationDelay: "200ms" }}>
          Creating elegant solutions with Python and modern web technologies, architecting robust systems with clean, efficient code and innovative design principles.
        </p>
        
        <TechLogos />
        
        {/* Python-colored buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
          <Button asChild className="relative bg-[#366B98] hover:bg-[#366B98]/90 text-white font-medium overflow-hidden group">
            <a href="#contact" className="z-10 flex items-center gap-2">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#366B98] via-[#366B98]/80 to-[#366B98] group-hover:animate-pulse-subtle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
              </svg>
              <span className="relative">Get in touch</span>
            </a>
          </Button>
          <Button variant="outline" asChild className="border-[#FFD343]/20 hover:bg-[#FFD343]/10 text-[#FFD343] hover:text-accent-foreground group relative overflow-hidden">
            <a href="#experience" className="z-10 flex items-center gap-2">
              <span className="absolute inset-0 w-0 bg-[#FFD343]/20 transition-all duration-300 group-hover:w-full"></span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span className="relative">View Resume</span>
            </a>
          </Button>
        </div>
        
        {/* Python-colored scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
          <a href="#about" aria-label="Scroll down" className="flex flex-col items-center text-xs text-muted-foreground bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
