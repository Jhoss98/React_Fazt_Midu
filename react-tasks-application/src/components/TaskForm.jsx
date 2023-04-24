import { useState, useContext } from "react";
import { TaskContext } from "../context/Context";

export function TaskForm() {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTittle("");
    setDescription("");
  };

  return (
    <div className="bg-white-200 mb-4 shadow-lg rounded-md p-5 max-w-md mx-auto">
    <form onSubmit={handleSubmit} className="p-1">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Task Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTittle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autoFocus
          required
          placeholder="Write your task"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Write the task's description"
        ></textarea>
      </div>
      <div className="flex items-start justify-start">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save task
        </button>
      </div>
    </form>
    </div>
  );
}
