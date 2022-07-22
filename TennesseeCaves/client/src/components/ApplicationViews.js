import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import Main from "./MainPage/Main";

export default function ApplicationViews({ isLoggedIn, user }) {
    return (
      <main>
        <Routes>
            <Route path="/">
                <Route index element={<Main isLoggedIn={isLoggedIn}/>}/>
                {/* <Route index element={isLoggedIn ? <Main user={user} /> : <Navigate to="/login" />} /> */}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Route>
        </Routes>
        
      </main>
    );
  }