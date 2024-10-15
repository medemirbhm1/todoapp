import Image from "next/image";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    <div className="h-[calc(100vh-80px)] bg-neutral-900">
      <div className="container h-full flex flex-col items-center justify-between gap-10 py-10 lg:pt-0 lg:flex-row lg:items-end lg:justify-between lg:pb-36">
        <div>
          <h1 className="title-h1 text-white">Welcome to TODOS</h1>
          <p className="text-lg mt-2 mb-4 text-neutral-300">
            A simple todo list app to keep track of your tasks
          </p>
          <Button variant="outline">Download on the App Store</Button>
        </div>
        <div className="max-w-full">
          <Image src="/hero.png" width={400} height={400} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
