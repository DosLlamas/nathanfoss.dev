import React from "react";
import { Link } from "react-router-dom";

export default function GuestLogin() {
  return (
    <div className="guest-login-bar">
      <div>
        <h2 style={{color: "white"}}>Don't miss what's happening </h2>
        <p>You can like, favorite, and comment on our posts</p>
      </div>
      <div>
        <Link
          to="/login"
          className="btn btn-default"
        >
          <i className="fa-right-to-bracket"></i>Log in
        </Link>
        {"   "}
        <Link to="/signup" className="btn btn-border-light btn-lg">
        <i className="icon-envelope"></i>Sign up
        </Link>
      </div>
    </div>
  );
}