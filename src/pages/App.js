import React from 'react'

import Home from "./home";
import Vaches from "./Vaches";
import Genisses from "./Genisses";
import Veaux from "./Veaux";
import Collect from './Collect';
import SignIn from './SignIn';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {useContext}  from "react";
import ThemeContexttt from "../context/themeContext.jsx";
import "../context/themedark.css";
import SignUp from './SignUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },
  {
    path: "/Vaches",
    element: <Vaches />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },

  {
    path: "/Genisses",
    element: <Genisses />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },

  {
    path: "/Veaux",
    element: <Veaux />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },

  {
    path: "/Collect",
    element: <Collect />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },
  
  {
    path: "/SignIn",
    element: <SignIn />,
    errorElement: <h2>sorry la page nexsite pas </h2>,
  },
  
  {
    path: "/SignUp",
    element: <SignUp />,
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