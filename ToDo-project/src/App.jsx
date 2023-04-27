import "./App.css";
import { TasksList } from "./components/TasksList";

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
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <img src="./vite.svg" className="h-6" alt="Tailwind Play" />
            <div className="divide-y divide-gray-300/50">
              <div className="space-y-4 py-4 text-start leading-8 text-gray-600">
                <p className="text-xl">The list of Today's tasks</p>
                {tasks.map(({ id, title, description }) => {
                  return (
                    <TasksList
                      key={id}
                      title={title}
                      description={description}
                    ></TasksList>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
