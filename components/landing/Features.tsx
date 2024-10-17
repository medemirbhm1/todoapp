import React from "react";
import {
  AlarmClock,
  Headset,
  Laptop,
  Network,
  Pencil,
  Shield,
} from "lucide-react";

const features = [
  {
    title: "Intuitive Interface",
    description:
      "Our user-friendly interface makes it easy to manage your tasks and stay organized.",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    title: "Customizable Lists",
    description:
      "Create custom lists to organize your tasks and prioritize what's most important.",
    icon: <Pencil className="w-6 h-6" />,
  },
  {
    title: "Smart Reminders",
    description:
      "Set reminders and receive notifications to ensure you never miss a deadline.",
    icon: <AlarmClock className="w-6 h-6" />,
  },
  {
    title: "Collaboration Tools",
    description:
      "Share lists with others, assign tasks, and collaborate in real-time to get more done.",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "Security and Privacy",
    description:
      "Your data is always secure and private with our state-of-the-art security measures.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Customer Support",
    description:
      "Our friendly support team is always here to help you with any questions or issues.",
    icon: <Headset className="w-6 h-6" />,
  },
];
function FeaturesSection() {
  return (
    <div className="container my-20">
      <h2 className="title-h2">
        Experience the Ultimate Task Management Solution with TODOS Robust
        Features
      </h2>
      <p className="mt-6 text-neutral-500 mb-12">
        Take Control of Your Workload and Boost Your Productivity with
        Customizable Lists, Smart Reminders, and More
      </p>
      <div className="grid gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="flex items-center gap-4">
              <span className="bg-black text-white p-4 rounded-full">
                {feature.icon}
              </span>
              <h3 className="text-xl font-medium">{feature.title}</h3>
            </div>
            <div className="bg-neutral-100 h-px my-4" />

            <p className="text-neutral-500">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
