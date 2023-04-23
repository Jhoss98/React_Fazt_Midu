import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

export function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskid){
    setTasks(tasks.filter(task => task.id !== taskid))
  }

  return (
    <div>
      <TaskForm createTask={createTask}></TaskForm>
      <TaskList tasks={tasks} deleteTask= {deleteTask} />
    </div>
  );
}
