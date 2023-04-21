import React from "react";
import ReactDOM from "react-dom/client";
import { Greating, UserCard } from "./Greating";
import { Button } from "./Button";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard />
  </>
);
