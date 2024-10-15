import React from "react";
import { useAuth } from "../component/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Bem-vindo, {user?.nome}!</p>
          <button onClick={logout}>Sair</button>
        </div>
      ) : (
        <p>Por favor, faça login.</p>
      )}
    </div>
  );
};

export default Dashboard;
