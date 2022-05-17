import React from "react";
import { Navigate } from "react-router-dom";
import { hasRule } from "../Heloper/HasRule";
import { isUserLoggedIn } from "@utils";

function Dashboard() {
  if (
    isUserLoggedIn() &&
    (hasRule() === "admin" || hasRule() === "inspector")
  ) {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}

export default Dashboard;
