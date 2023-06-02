// Components
import Sidebar from "./Sidebar";
import Login from "./Login";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Signup from "./Signup";
import GuestLogin from "./GuestLogin";
// Packages
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [lightDarkMode, setLightDarkMode] = useState("light");
  const [currentUser, setCurrentUser] = useState(false);
  const [guestUser, setGuestUser] = useState(false);

  if (!currentUser && !guestUser) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="login-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    setGuestUser={setGuestUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/signup"
                element={<Signup setCurrentUser={setCurrentUser} />}
              />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  } else if (currentUser && !guestUser) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="sidebar">
            <div classNme="d-flex align-items-start flex-column h-100 w-100">
              <Sidebar currentUser={currentUser} />
            </div>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </div>
    );
  } else if (!currentUser && guestUser) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="sidebar">
            <div classNme="d-flex align-items-start flex-column h-100 w-100">
              <Sidebar guestUser={guestUser} currentUser={currentUser} />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <GuestLogin setGuestUser={setGuestUser}/>
        </div>
      </div>
    );
  }
}

export default App;
