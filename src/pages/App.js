import React from 'react'

import Home from "./home";
import Html from "./html";
import Css from "./css";
import JavaScript from "./javascript";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {useContext}  from "react";
import ThemeContexttt from "../context/themeContext.jsx";
import "../context/themedark.css";
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

const App = () => {
  const {theme} = useContext(ThemeContexttt);
  return (
    <div className={`${theme}`}>
    
        <RouterProvider router={router} />

    </div>
  )
}

export default App