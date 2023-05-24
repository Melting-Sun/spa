import React, { useState } from "react";
import coursesData from "./CoursesData";
import Course from "./Course";
import { useLocation } from "react-router-dom";


function Courses() {

  const [courses, setCourses] = useState(coursesData);


  let location = useLocation()
  console.log(location);


  

  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", marginTop: 40 }}
    >
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
}

export default Courses;
