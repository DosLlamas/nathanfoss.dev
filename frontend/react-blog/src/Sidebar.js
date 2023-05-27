import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/projects"}>Projects</NavLink>
      <NavLink to={"/blog"}>Blog</NavLink>
      <a href="https://open.spotify.com/show/2gqDtYz2JoZv4gBq3xAckx" target="_blank">Leetcode tutorials</a>
      <a href="https://open.spotify.com/show/2gqDtYz2JoZv4gBq3xAckx" target="_blank">Podcast</a>
    </div>
  );
}
