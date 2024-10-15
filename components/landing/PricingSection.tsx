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
  },
];

function PricingSection() {
  return (
    <div className="bg-neutral-900 py-20">
      <div className="container">
        <h2 className="title-h2 text-white text-center">
          Add Tasks with Ease Using TO-DO's Intuitive Interface
        </h2>
        <p className="mt-6 text-neutral-300 text-center  mb-8">
          Quickly and Effortlessly Create Tasks to Stay Organized and On Track
          with Your Goals
        </p>
        <div >
          {plans.map((plan) => (
            <div key={plan.title}>
                <div>
                    {plan.title}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
