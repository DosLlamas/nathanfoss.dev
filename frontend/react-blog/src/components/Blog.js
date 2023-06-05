// Packages
import React, { useState, useEffect } from "react";
// Components
// import userRequest from "./userRequests";
import BlogPosts from "./BlogPosts";
import DUMMY_BLOG_DATA from "./DUMMY_BLOG_DATA.json"

export default function Blog() {

  /*
  // Fetch for all of the blog posts and store in an array
  const [blogPostsData, setBlogPostsData] = useState([])
  useEffect(() => {
    userRequest.get("/blogs")
    .then((response) => {
      setBlogPostsData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
 
  */

  return (
    <div style={{ marginLeft: "3%" }}>
      <BlogPosts DUMMY_BLOG_DATA={DUMMY_BLOG_DATA} />
    </div>
  );
}
