import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

export function App() {
  return (
    <div className="bg-white h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <div className="p-1">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
