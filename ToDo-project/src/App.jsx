import "./App.css";
import { TaskList } from "./components/TasksList";

const tasks = [
  {
    id: 1,
    title: "First Task",
    description: "This is the description of a first task",
  },
  {
    id: 2,
    title: "Second Task",
    description: "This is the description of a second task",
  },
  {
    id: 3,
    title: "Third Task",
    description: "This is the description of a third task",
  },
];

function App() {
  return (
    <>
      {/*tasks.map(task => {
        const { id, title, description } = task;
        return (
          <TaskList key={id} title={title} description={description}></TaskList>
        );
      })*/}
    </>
  );
}

export default App;
