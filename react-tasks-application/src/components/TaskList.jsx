import TaskCard from "./TaskCard";

export function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h3>No tasks yet</h3>;
  }

  return (
    <div>
      {tasks.map((task) => (
         <TaskCard key = {task.id} task={task}/>
      ))}
    </div>
  );
}
