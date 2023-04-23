import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export function App() {
  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  );
}
