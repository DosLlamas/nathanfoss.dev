// Packages
import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";

const BlogPostCard = ({ blogPost }) => {
  const navigate = useNavigate();
  const handleTagClick = () => {
    console.info("You clicked a tag.");
  };

  return (
    <div className="blog-card">
      <img onClick={() => navigate(`/blog/${blogPost.id}`)} className="blog-img" src={blogPost.image} alt="Blog post" />
      <div className="blog-p">
        <div
          style={{
            whiteSpace: "pre",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Chip
            sx={{ backgroundColor: "#e3e3e3" }}
            label="Tag"
            onClick={handleTagClick}
          />{" "}
          <Link to={`/blog/${blogPost.id}`}>
            <p
              onClick={() => {
                console.log("You clicked blog id:", blogPost.id);
                // navigateToSingleBlog();
              }}
              className="blog-p"
            >
              {blogPost["reading-time"]}
            </p>
          </Link>
        </div>
      </div>
      <br />
      <Link to={`/blog/${blogPost.id}`}>
        <h1
          style={{ margin: "5% 5% 0" }}
          onClick={() => {
            console.log("You clicked blog id:", blogPost.id);
            // navigateToSingleBlog();
          }}
        >
          Title
        </h1>
      </Link>
      <Link to={`/blog/${blogPost.id}`}>
        <p
          className="blog-p"
          onClick={() => {
            console.log("You clicked blog id:", blogPost.id);
            // navigateToSingleBlog();
          }}
        >
          {blogPost.content}
        </p>
      </Link>
      <div className="blog-p" style={{}}>
        <div
          style={{
            whiteSpace: "pre",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            onClick={() => {
              console.log("You clicked a user");
              // navigateToSingleBlog();
            }}
            alt="User Profile Picture"
            src=""
            sx={{ width: 40, height: 40 }}
          />{" "}
          <div
            className="blog-p"
            onClick={() => {
              console.log("You clicked blog id:", blogPost.id);
              // navigateToSingleBlog();
            }}
          >
            {blogPost.user} ·{" "}
            <Link to={`/blog/${blogPost.id}`} key={blogPost.id}>
              {blogPost["date-posted"]}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPostCard;
