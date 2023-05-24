import React from "react";
import { Link, Outlet, useNavigate} from "react-router-dom";

function About() {


  let navigate = useNavigate()


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>About Page :)</h1>
    
      <button onClick={() => {
        navigate('/login', {replace: true})
        // navigate(-1) return to the last route
      }}>register now</button>

      <Link to='setting'>setting</Link>

      <Outlet/>
    
    </div>
  );
}

export default About;
