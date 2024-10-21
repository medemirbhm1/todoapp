import ActionsSection from "@/components/dashboard/ActionsSection";
import TasksSection from "@/components/dashboard/TasksSection";
import WelcomeHeader from "@/components/dashboard/WelcomeHeader";

function page() {
  return (
    <div className="my-20">
      <WelcomeHeader />
      <ActionsSection />
      <TasksSection />
    </div>
  );
}

export default page;
