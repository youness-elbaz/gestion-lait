import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javascript";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },

  {
    path: "/css",
    element: <Css />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },

  {
    path: "/javascript",
    element: <JavaScript />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
