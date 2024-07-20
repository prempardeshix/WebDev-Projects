import React from "react";
import Dashboard from "../pages/dashboard.js";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn }, children) => {
  if (isLoggedIn) {
    return <Dashboard />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
