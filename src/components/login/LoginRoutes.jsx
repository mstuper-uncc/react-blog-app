import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "./Auth";

function LoginRoute({ children }) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" replace />;
}

export default LoginRoute;