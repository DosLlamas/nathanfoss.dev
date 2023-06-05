// Components
import Sidebar from "./Sidebar";
import Login from "./Login";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import SingleBlog from "./SingleBlog";
import Signup from "./Signup";
import GuestLogin from "./GuestLogin";
import userRequest from "./userRequests";
import Settings from "./Settings";
import BlogTopics from "./BlogTopics";
// Packages
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [lightDarkMode, setLightDarkMode] = useState("light");
  const [currentUser, setCurrentUser] = useState(false);
  const [guestUser, setGuestUser] = useState(false);

  // Verify that the user is logged in anytime the page reloads
  useEffect(() => {
    const storedGuestUser = localStorage.getItem("guestUser");
    if (storedGuestUser) {
      setGuestUser(JSON.parse(storedGuestUser));
    }

    userRequest
      .get("/user/")
      .then((response) => {
        setCurrentUser(true);
      })
      .catch((notLoggedIn) => {
        setCurrentUser(false);
      });
  }, []);

  const handleSetGuestUser = (value) => {
    setGuestUser(value);
    localStorage.setItem("guestUser", JSON.stringify(value));
  };

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
                    setGuestUser={handleSetGuestUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Signup
                    setCurrentUser={setCurrentUser}
                    setGuestUser={handleSetGuestUser}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="main-container">
          <div className="sidebar">
            <div className="d-flex align-items-start flex-column h-100 w-100">
              <Sidebar guestUser={guestUser} currentUser={currentUser} />
            </div>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/explore-topics" element={<BlogTopics />} />
            <Route
              path="/settings"
              element={<Settings setCurrentUser={setCurrentUser} />}
            />
          </Routes>
          {guestUser && <GuestLogin setGuestUser={handleSetGuestUser} />}
        </div>
      </div>
    );
  }
}
export default App;
