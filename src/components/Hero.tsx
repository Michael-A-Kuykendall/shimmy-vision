import shimmyLogo from "@/assets/shimmy-vision.png";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 retro-texture">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={shimmyLogo}
          alt="Shimmy Vision - AI Vision API"
          className="w-64 md:w-80 mx-auto mb-8 animate-float"
        />
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 text-secondary">
          AI VISION THAT RUNS ANYWHERE
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Local inference. No cloud dependency. Full privacy. 
          <span className="text-primary font-semibold"> One license, unlimited usage.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="retro-shadow text-lg px-8 py-6 font-semibold"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="retro-shadow text-lg px-8 py-6 font-semibold border-2 border-secondary"
            asChild
          >
            <a
              href="https://github.com/Michael-A-Kuykendall/shimmy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
