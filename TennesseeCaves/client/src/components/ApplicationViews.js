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
import EditGeneralCave from "./Caves/EditGeneralCave";
import ManageCaveTours from "./Caves/ManageCaveTours";
import EditTourForm from "./Tours/EditTourForm";
import AddRemoveCaveOrganizations from "./Caves/AddRemoveCaveOrganizations";

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
                  <Route path="editCave/:id" element={<EditGeneralCave/>}/>
                  <Route path="caveTours/:id" element={<ManageCaveTours/>}/>
                  <Route path="editTour/:id" element={<EditTourForm/>}/>
                  <Route path="editOrganizations/:id" element={<AddRemoveCaveOrganizations/>}/>
                </Route>
                <Route path="manageOrganizations">
                  <Route index element={<ManageOrganizations/>}/>
                  <Route path="addOrganization" element={<AddOrganizationForm/>}/>
                  <Route path="editOrganization/:id" element={<EditOrganizationForm/>}/>
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="caveDetails/:id" element={<CaveDetails user={user}/>}/>
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Route>
        </Routes>
        
      </main>
    );
  }