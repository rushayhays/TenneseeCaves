import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function ApplicationViews({ isLoggedIn, user }) {
    return (
      <main>
        <Routes>
            <Route path="/">
                <Route index element={isLoggedIn ? <Hello /> : <Navigate to="/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Route>
        </Routes>
      </main>
    );
  }