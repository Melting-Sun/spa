import React from "react";

import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Courses from "./components/Courses";
import MainCourse from "./components/MainCourse";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<MainCourse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
