// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const ProtectedRoute = ({ element: Component, allowedUserTypes, ...rest }) => {
  const { isAuthenticated, userType } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (!allowedUserTypes.includes(userType)) {
    return (
      <Navigate to={`/home`} />
    );
  }
  return <Component {...rest} />;
};

export default ProtectedRoute;
