import React from "react";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRoutes } from "react-router-dom";
import Courses from "./components/Courses";
import MainCourse from "./components/MainCourse";
import Home from "./components/Home";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Panel from "./components/Panel";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";



function App() {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/courses", element: <Courses /> },
    { path: "/course/:id", element: <MainCourse /> },
    {
      path: "/about/*",
      element: <About />,
      children: [{ path: "setting", element: <p>setting</p> }],
    },

    { path: "/*", element: <NotFound /> },
    { path: "/login", element: <Login /> },
    { path: "/*", element: <PrivateRoute/>, children: [
      { path: 'panel', element: <Panel/>},
      { path: "dashboard", element: <Dashboard /> },
    ] },
   
  
  
  ]);

  return (
    <div>
      <Header />
      {router}
    </div>
  );
}

export default App;
