import { Globe, FileText, Monitor, Accessibility } from "lucide-react";

const useCases = [
  {
    icon: Globe,
    title: "Web Scraping",
    description: "Visual understanding for complex web pages",
  },
  {
    icon: FileText,
    title: "Document OCR",
    description: "Layout analysis and text extraction",
  },
  {
    icon: Monitor,
    title: "Screenshot Analysis",
    description: "Automation and testing workflows",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Image descriptions and alt text generation",
  },
];

const UseCases = () => {
  return (
    <section className="py-20 px-4 retro-texture">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-secondary">
          BUILT FOR REAL WORK
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          From automating workflows to enhancing accessibility.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="text-center p-6 bg-card border-2 border-secondary retro-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl mb-2 text-secondary">
                {useCase.title.toUpperCase()}
              </h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
