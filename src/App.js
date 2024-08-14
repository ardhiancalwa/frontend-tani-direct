import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutesPembeli from "./routes/ProtectedRoutesPembeli";
import ProtectedRoutesPetani from "./routes/ProtectedRoutesPetani";
import ProtectedRoute from "./components/specific/protectedRoute";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          {PublicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}

          {/* Protected Routes for Pembeli */}
          {ProtectedRoutesPembeli.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute
                  element={route.element}
                  allowedUserTypes={route.allowedUserTypes}
                />
              }
            />
          ))}

          {/* Protected Routes for Petani */}
          {ProtectedRoutesPetani.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute
                  element={route.element}
                  allowedUserTypes={route.allowedUserTypes}
                />
              }
            />
          ))}

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

