import { useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold mb-2">{task.title}</h3>
      <p className="text-gray-700 text-base mb-4">{task.description}</p>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
