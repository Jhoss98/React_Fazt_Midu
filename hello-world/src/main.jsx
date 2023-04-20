import React from "react";
import ReactDOM from "react-dom/client";
import { Greating, UserCard } from "./Greating";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greating />
    <UserCard></UserCard>
  </>
);
