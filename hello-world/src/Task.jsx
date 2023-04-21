import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>My first Task</h1>
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Task Complete" : "Task Pending"}
      </span>
    </div>
  );
}
