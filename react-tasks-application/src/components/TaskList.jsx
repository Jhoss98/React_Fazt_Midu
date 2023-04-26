import TaskCard from "./TaskCard";
import TaskTable from "./TaskTable";
import { useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h3 className="text-2xl">No tasks yet...</h3>;
  }

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
