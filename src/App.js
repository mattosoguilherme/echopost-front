// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./component/AuthContext";
import PrivateRoute from "./component/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Document from "./pages/Document";
import Tiktok from "./pages/tiktok";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/termos" element={<Document />} />
          <Route
            path="/tiktok-developers-site-verification=YsQga713CDpVtQnLssuDKH5ls5NrYhPb"
            element={<Tiktok />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
