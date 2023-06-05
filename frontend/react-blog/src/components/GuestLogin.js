import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function GuestLogin({ setGuestUser }) {
  const navigate = useNavigate();
  const navigateToSignupPage = () => {
    setGuestUser(false);
    navigate("/signup");
  };
  const navigateToLoginPage = () => {
    setGuestUser(false);
    navigate("/");
  };
  return (
    <div className="guest-login-bar">
      <div>
        <h2>Don't miss what's happening </h2>
        <p>You can like, comment, and favorite our posts</p>
      </div>
      <div>
        <Button
          onClick={navigateToLoginPage}
          color="secondary"
          variant="contained"
        >
          Log in
        </Button>
        {"   "}
        <Button onClick={navigateToSignupPage} color="info" variant="contained">
          Sign up
        </Button>
      </div>
    </div>
  );
}
