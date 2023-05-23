import React from "react";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes, Outlet } from "react-router-dom";
import Courses from "./components/Courses";
import MainCourse from "./components/MainCourse";
import Home from "./components/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";

function App() {

  let router = useRoutes([
          { path:"/" ,element:<Home /> },
          { path:"/courses" ,element:<Courses/>  },
          { path:"/course/:id" ,element:<MainCourse/>  },
          { 
            path:"/about/*" ,element:<About/> , children: [
            {path:"setting" ,element: <p>salam</p> },
          ]
             
          },

          { path:"/*", element:<NotFound/>  },
  ])

  return (
    <>
      <Header/>
      {router}
    </>

  );
}

export default App;
