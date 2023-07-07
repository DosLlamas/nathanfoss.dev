import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";

import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GuestLogin from "./components/Items/GuestLogin";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bloglist from "./pages/Bloglist";
import Bloglist2 from "./pages/Bloglist2";
import BlogDetails from "./pages/BlogDetails";
import BlogDetails2 from "./pages/BlogDetails2";
import Works from "./pages/Works";
import userRequest from "./pages/userRequests";
import WorkDetails from "./pages/WorkDetails";

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  // useEffect(() => {
  //   userRequest
  //     .get("/user/")
  //     .then((response) => {
  //       setCurrentUser(true);
  //     })
  //     .catch((notLoggedIn) => {
  //       console.log("Not logged in");
  //       setCurrentUser(false);
  //     });
  // }, []);

  return (
    <BrowserRouter basename="">
      <Switch>
        <Route path="/" component={Homepage} exact />
        {/* <Route
          path="/login"
          exact
          render={() => <Login setCurrentUser={setCurrentUser} />}
        /> */}
        {/* <Route
          path="/signup"
          exact
          render={() => <Signup setCurrentUser={setCurrentUser} />}
        /> */}
        {/* <Route path="/blogs" component={Bloglist} exact /> */}
        {/* <Route path="/bloglist" component={Bloglist2} exact /> */}
        {/* <Route path="/blogs/:id/:title" component={BlogDetails} /> */}
        {/* <Route path="/blog-details/:id/:title" component={BlogDetails2} /> */}
        <Route path="/works/:id/:title" component={WorkDetails} />
      </Switch>
      {/* {!currentUser && <GuestLogin />} */}
    </BrowserRouter>
  );
}

export default App;
