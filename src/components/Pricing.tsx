import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Developer",
    price: "$12",
    period: "/mo",
    features: [
      "Runs locally — private by default",
      "OCR + Layout + Web extraction",
      "2,500 pages/month",
      "1 machine"
    ],
    tierId: "developer",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/mo",
    features: [
      "Client-ready results",
      "CLI + HTTP API for automation",
      "10,000 pages/month",
      "1 machine"
    ],
    tierId: "professional",
    highlighted: false,
  },
  {
    name: "Startup",
    price: "$79",
    period: "/mo",
    features: [
      "Turn pages into structured data",
      "Built for teams + pipelines",
      "50,000 pages/month",
      "Up to 5 machines"
    ],
    tierId: "startup",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/mo",
    features: [
      "Unlimited pages",
      "Unlimited machines",
      "Runs locally for max privacy",
      "Dedicated support"
    ],
    tierId: "enterprise",
    highlighted: false,
  },
  {
    name: "Lifetime",
    price: "$499",
    period: " one-time",
    features: [
      "Pay once — use forever",
      "Unlimited pages",
      "1 machine",
      "All future updates"
    ],
    tierId: "lifetime",
    highlighted: true,
  },
];

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-secondary">
          SIMPLE, HONEST PRICING
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          No hidden fees. No metered API calls. Pick a plan that fits your needs.
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
                onClick={() => navigate(`/checkout/${plan.tierId}`)}
              >
                Buy Now
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          14-day money-back guarantee. Questions? Email{" "}
          <a href="mailto:michaelallenkuykendall@gmail.com" className="underline">
            michaelallenkuykendall@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
