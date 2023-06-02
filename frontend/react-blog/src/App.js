// Components
import Sidebar from "./Sidebar";
import Login from "./Login";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Signup from "./Signup";
// Packages
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [lightDarkMode, setLightDarkMode] = useState("light");
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <div className="App">
      <div className="main-container">
        {!currentUser ? (
          <div className="login-container">
            <Routes>
              <Route path="/" element={<Login setCurrentUser={setCurrentUser}/>} />
              <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser}/>} />
            </Routes>
          </div>
        ) : (
          <>
            <div className="sidebar">
              <div classNme="d-flex align-items-start flex-column h-100 w-100">
                <Sidebar />
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
