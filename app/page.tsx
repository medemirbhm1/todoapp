import Navbar from "@/components/landing/Nav";
import FeaturesSection from "@/components/landing/Features";
import HeroSection from "@/components/landing/Hero";
import AddTaskSection from "@/components/landing/AddTaskSection";
import PricingSection from "@/components/landing/PricingSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AddTaskSection />
      <PricingSection />
    </div>
  );
}
