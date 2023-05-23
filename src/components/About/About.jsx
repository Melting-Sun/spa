import React from "react";
import { Link, Outlet} from "react-router-dom";

function About() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Page :)</h1>
    
      <Link to='setting'>setting</Link>

      <Outlet/>
    
    </div>
  );
}

export default About;
