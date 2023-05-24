import React from "react";
import { isLogin } from "./Utils";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }) {
  let isUserLogin = isLogin("mmd");

  console.log(isUserLogin);
  return <>{isUserLogin ? <div><Outlet/></div> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
