import { Check } from "lucide-react";
import { Button } from "../ui/button";


const plans = [
  {
    title: "Basic",
    price: "$0",
    descrtipion: "For Individuals",
    features: [
      "Unlimited Tasks",
      "Unlimited Projects",
      "Unlimited Team Members",
      "Unlimited Storage",
    ],
    action: "Start For Free",
  },
  {
    title: "Pro",
    price: "$10",
    descrtipion: "For Professionals",
    features: [
      "All Basic Features",
      "Priority Support",
      "Advanced Reporting",
      "Customization",
    ],
    action: "Start trial",
  },
  {
    title: "Enterprise",
    descrtipion: "For Teams and Businesses",
    price: "$25",
    features: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Onboarding",
      "Custom SLA",
    ],
    action: "Contact Sales",
  },
];

function PricingSection() {
  return (
    <div className="bg-neutral-900 py-20" id="pricing">
      <div className="container">
        <h2 className="title-h2 text-white text-center">
          Add Tasks with Ease Using TO-DO&apos;s Intuitive Interface
        </h2>
        <p className="mt-6 text-neutral-300 text-center  mb-8">
          Quickly and Effortlessly Create Tasks to Stay Organized and On Track
          with Your Goals
        </p>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              className="p-9 rounded-md border-2 text-white border-white/15 transition-all ease-in-out hover:border-white/80"
              key={plan.title}
            >
              <div className="font-bold text-3xl">{plan.title}</div>
              <div className="text-4xl font-semibold my-2">{plan.price}</div>
              <p className="text-neutral-400">{plan.descrtipion}</p>
              <ul className="space-y-4 mt-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="p-2 bg-white/5 rounded-full">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="bg-transparent mt-8 transition-all w-full border-white/15 ease-in-out hover:border-white hover:bg-white text-white hover:text-black"
              >
                {plan.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
