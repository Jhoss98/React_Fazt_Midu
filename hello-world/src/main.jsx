import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Post } from "./Post";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
//react({ plugins: [["@swc/plugin-styled-components", {}]] });

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user_1",
  },
  {
    id: 2,
    name: "Joe Biden",
    image: "https://robohash.org/user_2",
  },
];
const handelChange = (e) => {
  console.log(e.target.value);
};

function Counter() {
  const [mensaje, setMesaje] = useState("");

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Input"
        variant="outlined"
        onChange={(e) => {
          setMesaje(e.target.value);
        }}
      />
      <Button
        variant="outlined"
        size="large"
        onClick={() => {
          alert(mensaje);
        }}
      >
        Save
      </Button>
    </div>
    /*<div>
      <h1>Counter: {counter}</h1>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sum
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(0);
        }}
      >
        Restart
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Sus
      </Button>
    </div>*/
  );
}
root.render(
  <>
    <Counter />
  </>
);
