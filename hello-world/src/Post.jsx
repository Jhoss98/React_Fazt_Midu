import { FcAcceptDatabase } from "react-icons/fc";
import Button from "@mui/material/Button";

export const Post = () => {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <div>
        <FcAcceptDatabase />
      </div>
      <div>GET</div>
    </Button>
  );
};
