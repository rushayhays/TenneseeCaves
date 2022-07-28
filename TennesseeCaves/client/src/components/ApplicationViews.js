import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import Main from "./MainPage/Main";
import CaveDetails from "./Caves/CaveDetails";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import ManageCaves from "./Caves/ManageCaves";
import AddCaveForm from "./Caves/AddCaveForm";
import ManageOrganizations from "./Organizations/ManageOrganizations";
import AddOrganizationForm from "./Organizations/AddOrganizationForm";
import EditOrganizationForm from "./Organizations/EditOrganizationForm";

export default function ApplicationViews({ isLoggedIn, user }) {
    return (
      <main>
        <Routes>
            <Route path="/">
                <Route index element={<Main isLoggedIn={isLoggedIn}/>}/>
                {/* <Route index element={isLoggedIn ? <Main user={user} /> : <Navigate to="/login" />} /> */}
                <Route path="userPage" element={<UserPage user={user}/>}/>
                <Route path="adminPage" element={<AdminPage/>}/>
                <Route path="manageCaves">
                  <Route index element={<ManageCaves/>}/>
                  <Route path="addCave" element={<AddCaveForm/>}/>
                </Route>
                <Route path="manageOrganizations">
                  <Route index element={<ManageOrganizations/>}/>
                  <Route path="addOrganization" element={<AddOrganizationForm/>}/>
                  <Route path="editOrganization/:id" element={<EditOrganizationForm/>}/>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="caveDetails/:id" element={<CaveDetails/>}/>
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Route>
        </Routes>
        
      </main>
    );
  }