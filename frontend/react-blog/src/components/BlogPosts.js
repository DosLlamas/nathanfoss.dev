// Packages
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// Components
// import userRequest from "./userRequests";
import BlogPostCard from "./BlogPostCard";

function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
  );
}
export default function BlogPosts({ DUMMY_BLOG_DATA }) {
  const navigate = useNavigate();

  const navigateToBlogTopics = () => {
    navigate("/explore-topics");
  };

//    Map the blog posts as JSX
   const renderBlogs = DUMMY_BLOG_DATA.map((blogPost) => (
    <BlogPostCard key={blogPost.id} blogPost={blogPost}/>
  ))

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>Blog</h1>
        <Button onClick={navigateToBlogTopics} variant="text">
          <LocalOfferIcon /> Topics
        </Button>
      </div>
      <br />
      <h2>Sort from</h2>
      <br />
      <Calender />
      <br />
      <br />
      <div className="blog-cards-set">
        {renderBlogs}
      </div>
    </div>
  );
}
