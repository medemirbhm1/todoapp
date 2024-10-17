import Navbar from "@/components/landing/Nav";
import FeaturesSection from "@/components/landing/Features";
import HeroSection from "@/components/landing/Hero";
import AddTaskSection from "@/components/landing/AddTaskSection";
import PricingSection from "@/components/landing/PricingSection";
import NewsLetter from "@/components/landing/NewsLetter";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AddTaskSection />
      <PricingSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
