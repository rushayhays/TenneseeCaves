import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";
import { getLoggedInUser } from "./modules/userProfileManager.js";
import { Spinner } from "reactstrap";
import Footer from "./components/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  //Change this around to reflect IsAdmin
  const [user, setUser] = useState({
    id:0,
    firebaseUserId:"",
    name:"",
    email:"",
    isAdmin:false,
    location:""
  });

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getLoggedInUser().then((user) => {
        setUser(user);
      });
    }
  }, [isLoggedIn]);

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <ApplicationViews isLoggedIn={isLoggedIn} user={user} />
      <Footer />
    </Router>
  );
}

export default App;