import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Developer",
    price: "$12",
    period: "/mo",
    features: ["2,500 requests/month", "Email support", "All models included"],
    url: "https://buy.stripe.com/bJe00b20t58X0QX5lY7N607",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    features: ["10,000 requests/month", "Priority support", "All models included"],
    url: "https://buy.stripe.com/3cI00b9sV0SHbvBg0C7N609",
    highlighted: false,
  },
  {
    name: "Startup",
    price: "$79",
    period: "/mo",
    features: ["50,000 requests/month", "Slack support", "All models included"],
    url: "https://buy.stripe.com/aFa7sD9sVfNB4397u67N60b",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/mo",
    features: ["Unlimited requests", "Dedicated support", "Custom integrations"],
    url: "https://buy.stripe.com/14A5kvcF70SH4399Ce7N60c",
    highlighted: false,
  },
  {
    name: "Lifetime",
    price: "$499",
    period: " one-time",
    features: ["Unlimited forever", "All future updates", "Priority support"],
    url: "https://buy.stripe.com/3cI7sDeNf8l91V13dQ7N60d",
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-secondary">
          SIMPLE, HONEST PRICING
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          No hidden fees. No surprise charges. Pick a plan that fits your needs.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 border-2 ${
                plan.highlighted
                  ? "border-primary bg-background"
                  : "border-secondary bg-background"
              } retro-shadow`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  BEST VALUE
                </div>
              )}

              <h3 className="font-display text-2xl mb-2 text-secondary">
                {plan.name.toUpperCase()}
              </h3>

              <div className="mb-6">
                <span className="font-display text-4xl text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full retro-shadow ${
                  plan.highlighted ? "" : "bg-secondary hover:bg-secondary/90"
                }`}
                asChild
              >
                <a href={plan.url} target="_blank" rel="noopener noreferrer">
                  Buy Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          14-day money-back guarantee. Questions? Contact support.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
