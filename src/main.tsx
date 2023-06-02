import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { io } from "socket.io-client";

export const socket = io("http://localhost:3001");

import { RouterProvider, createBrowserRouter } from "react-router-dom";

socket.on("connect", () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <App />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router} />
  );
});
