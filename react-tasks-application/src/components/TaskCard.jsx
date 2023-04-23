import { useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskCard({task}) {
  const { deleteTask} = useContext(TaskContext);

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>delte task</button>
    </div>
  );
}

export default TaskCard;
