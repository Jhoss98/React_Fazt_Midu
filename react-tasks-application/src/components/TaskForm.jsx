import { useState } from "react";

export function TaskForm({ createTask }) {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title,description)
    createTask({
        title,
        description
    });
    setTittle('')
    setDescription('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        autoFocus
          value={title}
          type="text"
          placeholder="write your task"
          onChange={(e) => setTittle(e.target.value)}
        />
        <textarea
        value={description}
          placeholder="write the task's description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
}
