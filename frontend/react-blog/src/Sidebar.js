import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <a
            href="https://open.spotify.com/show/2gqDtYz2JoZv4gBq3xAckx"
            target="_blank"
            rel="noreferrer" 
          >
            Leetcode tutorials
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/show/2gqDtYz2JoZv4gBq3xAckx"
            target="_blank"
            rel="noreferrer" 
          >
            Podcast
          </a>
        </li>
      </ul>
    </div>
  );
}
