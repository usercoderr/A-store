import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../custom-hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { currentUSer } = useAuth();

  return currentUSer ? children : <Navigate to="/login" />;
};
