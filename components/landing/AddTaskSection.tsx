import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function AddTaskSection() {
  return (
    <div className="bg-neutral-900 py-20">
      <div className="container flex flex-col text-center lg:flex-row lg:text-left items-center gap-10">
        <div>
          <h2 className="title-h2 text-white">
            Add Tasks with Ease Using TO-DO&apos;s Intuitive Interface
          </h2>
          <p className="mt-6 text-neutral-300 mb-8">
            Quickly and Effortlessly Create Tasks to Stay Organized and On Track
            with Your Goals
          </p>
          <div className="flex justify-center lg:justify-start gap-3 flex-wrap">
            <Button variant="outline">Get Started</Button>
            <Button variant="outline" className="bg-transparent hover:bg-transparent text-white hover:text-white">
                Download on the App Store
            </Button>
          </div>
        </div>
        <Image src="/addtask.png" width={600} height={600} alt="Add Task" />
      </div>
    </div>
  );
}

export default AddTaskSection;
