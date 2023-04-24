import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h3>No tasks yet</h3>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}/>
      ))}
    </div>
  );
}
