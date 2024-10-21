import { getTasks } from "@/lib/getters";
import TaskComponent from "./TaskComponent";




async function TasksSection() {
  const tasks = await getTasks();
  return (
    <div className="container mt-10">
      {tasks.map((task) => (
        <TaskComponent key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksSection;
