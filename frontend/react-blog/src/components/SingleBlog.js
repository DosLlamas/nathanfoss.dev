import React from "react";
import Avatar from "@mui/material/Avatar";
import { useParams } from 'react-router-dom';
import DUMMY_BLOG_DATA from "./DUMMY_BLOG_DATA.json"

export default function SingleBlog() {
  console.log("blog data", DUMMY_BLOG_DATA)
  const { id } = useParams();

  const blogPost = DUMMY_BLOG_DATA.filter(post => post.id === parseInt(id))
  console.log("blogPost at SingleBlog.js:", blogPost)

  return (
    <div style={{ marginLeft: "3%" }}>
      {/* <h1>hi</h1> */}
      <h1>{blogPost[0].title}</h1>
      <Avatar
        onClick={() => {
          console.log("You clicked a user");
          // navigateToSingleBlog();
        }}
        alt="User Profile Picture"
        src=""
        sx={{ width: 60, height: 60 }}
      />
      <p>{blogPost[0]["reading-time"]}</p>
      <p>{blogPost[0]["date-posted"]}</p>
      <p>{blogPost[0].user}</p>
      <p>{blogPost[0].likes}</p>
      <p>{blogPost[0].favorites}</p>
      <img
        src={blogPost[0].image}
        alt="Blog"
      />
    </div>
  );
}
