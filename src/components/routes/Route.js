import { createBrowserRouter } from "react-router-dom";

import Home from "../home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
