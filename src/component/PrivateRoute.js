// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // Se o usuário não estiver logado, redireciona para a página de login
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
