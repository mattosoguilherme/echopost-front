// src/components/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const login = async (email, senha) => {
    try {
      const loggedInUser = await apiService.login(email, senha);
      setUser(loggedInUser);
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login, verifique suas credenciais.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token"); // Remover o token ao fazer logout
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
