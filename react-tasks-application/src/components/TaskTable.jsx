import { useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskTable({task}) {


  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1"></div>
      <h2>{task.title}</h2>
    </div>
  );
}

export default TaskTable;