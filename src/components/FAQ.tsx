import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does licensing work?",
    answer:
      "You receive a license key after purchase. Add it to your API requests and you're done. No complicated setup, no activation servers.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, 14-day free trial with full features. No credit card required. Just download and start building.",
  },
  {
    question: "Can I self-host?",
    answer:
      "Absolutely. Shimmy runs on your hardware — Windows, Mac, or Linux. You own the software and control where it runs.",
  },
  {
    question: "What models are supported?",
    answer:
      "MiniCPM-V, LLaVA, and other vision-capable GGUF models. We're constantly adding support for new models.",
  },
  {
    question: "Is my data private?",
    answer:
      "100%. All processing happens locally on your machine. We never see your images, prompts, or results.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 retro-texture">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-secondary">
          QUESTIONS? ANSWERS.
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know before getting started.
        </p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border-2 border-secondary px-6 retro-shadow"
            >
              <AccordionTrigger className="font-display text-lg text-secondary hover:no-underline">
                {faq.question.toUpperCase()}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
