import { Shield, Cpu, Code } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Local Processing",
    description:
      "Your images never leave your machine. Zero data transmission, complete privacy. Works offline after license validation.",
  },
  {
    icon: Cpu,
    title: "Tiny & Fast",
    description:
      "4.8MB binary, <100ms startup, 50MB RAM. 142x smaller than Ollama. Pure Rust, no Python dependencies.",
  },
  {
    icon: Code,
    title: "OpenAI Compatible",
    description:
      "Drop-in replacement for OpenAI Vision API. Your existing code just works. Batch processing with SSE streaming.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-secondary">
          WHY SHIMMY VISION?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Built for developers who value privacy, performance, and simplicity.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background p-8 border-2 border-secondary retro-shadow"
            >
              <div className="w-14 h-14 bg-primary rounded flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3 text-secondary">
                {feature.title.toUpperCase()}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
